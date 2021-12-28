// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ActivateZonesRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateZonesResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ActivateZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ActivateZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddConnectableClusterRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddConnectableClusterResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddConnectableClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddConnectableClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddConnectableClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSnapshotRepoResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSnapshotRepoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSnapshotRepoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSnapshotRepoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDeletionRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDeletionResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelDeletionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelDeletionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelDeletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLogstashDeletionRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLogstashDeletionResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelLogstashDeletionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelLogstashDeletionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelLogstashDeletionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskRequest extends $tea.Model {
  clientToken?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CancelTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CancelTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanRequest extends $tea.Model {
  complexQueryAvailable?: boolean;
  dataInfo?: CapacityPlanRequestDataInfo[];
  metric?: CapacityPlanRequestMetric[];
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      complexQueryAvailable: 'complexQueryAvailable',
      dataInfo: 'dataInfo',
      metric: 'metric',
      usageScenario: 'usageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complexQueryAvailable: 'boolean',
      dataInfo: { 'type': 'array', 'itemType': CapacityPlanRequestDataInfo },
      metric: { 'type': 'array', 'itemType': CapacityPlanRequestMetric },
      usageScenario: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanResponseBody extends $tea.Model {
  requestId?: string;
  result?: CapacityPlanResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CapacityPlanResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CapacityPlanResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CapacityPlanResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDiagnosisRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDiagnosisResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseDiagnosisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloseDiagnosisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseHttpsRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseHttpsResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseHttpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloseHttpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseHttpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseManagedIndexRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseManagedIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloseManagedIndexResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CloseManagedIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CloseManagedIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectorRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectorResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateCollectorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateCollectorResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCollectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComponentIndexRequest extends $tea.Model {
  meta?: { [key: string]: any };
  template?: CreateComponentIndexRequestTemplate;
  static names(): { [key: string]: string } {
    return {
      meta: '_meta',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      template: CreateComponentIndexRequestTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComponentIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComponentIndexResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateComponentIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateComponentIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataStreamRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataStreamResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateDataStreamResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateDataStreamResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataTasksRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataTasksResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateDataTasksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': CreateDataTasksResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateILMPolicyRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateILMPolicyResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateILMPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateILMPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateILMPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexTemplateRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexTemplateResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIndexTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateIndexTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateIndexTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogstashRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogstashResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateLogstashResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateLogstashResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogstashResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLogstashResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLogstashResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelinesRequest extends $tea.Model {
  clientToken?: string;
  trigger?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      trigger: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelinesResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePipelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePipelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointRequest extends $tea.Model {
  clientToken?: string;
  serviceId?: string;
  zoneId?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      serviceId: 'serviceId',
      zoneId: 'zoneId',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      serviceId: 'string',
      zoneId: 'string',
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateVpcEndpointResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateVpcEndpointResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVpcEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactivateZonesRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactivateZonesResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeactivateZonesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeactivateZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeactivateZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCollectorRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCollectorResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCollectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCollectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteComponentIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteComponentIndexResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteComponentIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteComponentIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectedClusterRequest extends $tea.Model {
  clientToken?: string;
  connectedInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      connectedInstanceId: 'connectedInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectedInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectedClusterResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectedClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteConnectedClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteConnectedClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataStreamRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataStreamResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataTaskRequest extends $tea.Model {
  clientToken?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataTaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeprecatedTemplateResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDeprecatedTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDeprecatedTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDeprecatedTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteILMPolicyResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteILMPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteILMPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteILMPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexTemplateResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIndexTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteIndexTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteIndexTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  clientToken?: string;
  deleteType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      deleteType: 'deleteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deleteType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogstashRequest extends $tea.Model {
  clientToken?: string;
  deleteType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      deleteType: 'deleteType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deleteType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLogstashResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class DeleteLogstashResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteLogstashResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteLogstashResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelinesRequest extends $tea.Model {
  clientToken?: string;
  pipelineIds?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      pipelineIds: 'pipelineIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      pipelineIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelinesResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeletePipelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePipelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRepoRequest extends $tea.Model {
  clientToken?: string;
  repoPath?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      repoPath: 'repoPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      repoPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRepoResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRepoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSnapshotRepoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSnapshotRepoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcEndpointResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteVpcEndpointResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteVpcEndpointResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAckOperatorResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeAckOperatorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeAckOperatorResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAckOperatorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAckOperatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAckOperatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApmResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeApmResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeApmResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeApmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeApmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollectorResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeCollectorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeCollectorResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeCollectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentIndexResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeComponentIndexResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeComponentIndexResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentIndexResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeComponentIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeComponentIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectableClustersRequest extends $tea.Model {
  alreadySetItems?: boolean;
  static names(): { [key: string]: string } {
    return {
      alreadySetItems: 'alreadySetItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadySetItems: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectableClustersResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeConnectableClustersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeConnectableClustersResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectableClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeConnectableClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeConnectableClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeprecatedTemplateResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeDeprecatedTemplateResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeDeprecatedTemplateResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeprecatedTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeprecatedTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeprecatedTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeDiagnoseReportResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeDiagnoseReportResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDiagnoseReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDiagnoseReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSettingsRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSettingsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeDiagnosisSettingsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeDiagnosisSettingsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDiagnosisSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDiagnosisSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticsearchHealthResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticsearchHealthResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeElasticsearchHealthResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeElasticsearchHealthResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeILMPolicyResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeILMPolicyResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeILMPolicyResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeILMPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeILMPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeILMPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIndexTemplateResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeIndexTemplateResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeIndexTemplateResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIndexTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeIndexTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeIndexTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKibanaSettingsResponseBody extends $tea.Model {
  requestId?: string;
  result?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKibanaSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeKibanaSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeKibanaSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeLogstashResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeLogstashResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeLogstashResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeLogstashResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribePipelineResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribePipelineResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineManagementConfigRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineManagementConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribePipelineManagementConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribePipelineManagementConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineManagementConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePipelineManagementConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePipelineManagementConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeRegionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotSettingResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeSnapshotSettingResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeSnapshotSettingResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSnapshotSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSnapshotSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeTemplatesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeTemplatesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeXpackMonitorConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeXpackMonitorConfigResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeXpackMonitorConfigResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeXpackMonitorConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeXpackMonitorConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeXpackMonitorConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseInstanceRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: DiagnoseInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DiagnoseInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DiagnoseInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DiagnoseInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedLogstashRestartTimeRequest extends $tea.Model {
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedLogstashRestartTimeResponseBody extends $tea.Model {
  requestId?: string;
  result?: EstimatedLogstashRestartTimeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: EstimatedLogstashRestartTimeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedLogstashRestartTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EstimatedLogstashRestartTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EstimatedLogstashRestartTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedRestartTimeRequest extends $tea.Model {
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedRestartTimeResponseBody extends $tea.Model {
  requestId?: string;
  result?: EstimatedRestartTimeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: EstimatedRestartTimeResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedRestartTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EstimatedRestartTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EstimatedRestartTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDataInformationResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetClusterDataInformationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetClusterDataInformationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDataInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetClusterDataInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetClusterDataInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElastictaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetElastictaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetElastictaskResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElastictaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetElastictaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetElastictaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonGrafanaAlertsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonGrafanaAlertsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEmonGrafanaAlertsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEmonGrafanaAlertsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonGrafanaDashboardsResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonGrafanaDashboardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEmonGrafanaDashboardsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEmonGrafanaDashboardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonMonitorDataResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: GetEmonMonitorDataResponseBodyResult[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetEmonMonitorDataResponseBodyResult },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonMonitorDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetEmonMonitorDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetEmonMonitorDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenStoreUsageResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetOpenStoreUsageResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetOpenStoreUsageResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenStoreUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOpenStoreUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOpenStoreUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationRequest extends $tea.Model {
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetRegionConfigurationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetRegionConfigurationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRegionConfigurationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRegionConfigurationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuggestShrinkableNodesRequest extends $tea.Model {
  count?: number;
  ignoreStatus?: boolean;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      ignoreStatus: 'ignoreStatus',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ignoreStatus: 'boolean',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuggestShrinkableNodesResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetSuggestShrinkableNodesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetSuggestShrinkableNodesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuggestShrinkableNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSuggestShrinkableNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSuggestShrinkableNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransferableNodesRequest extends $tea.Model {
  count?: number;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransferableNodesResponseBody extends $tea.Model {
  requestId?: string;
  result?: GetTransferableNodesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': GetTransferableNodesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransferableNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTransferableNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTransferableNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeOperationRoleRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeOperationRoleResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeOperationRoleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitializeOperationRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitializeOperationRoleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAckOperatorRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAckOperatorResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAckOperatorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallAckOperatorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallAckOperatorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallKibanaSystemPluginRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallKibanaSystemPluginResponseBody extends $tea.Model {
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallKibanaSystemPluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallKibanaSystemPluginResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallKibanaSystemPluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallLogstashSystemPluginRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallLogstashSystemPluginResponseBody extends $tea.Model {
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallLogstashSystemPluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallLogstashSystemPluginResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallLogstashSystemPluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSystemPluginRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSystemPluginResponseBody extends $tea.Model {
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSystemPluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallSystemPluginResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallSystemPluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallUserPluginsResponseBody extends $tea.Model {
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallUserPluginsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallUserPluginsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallUserPluginsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterruptElasticsearchTaskRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterruptElasticsearchTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterruptElasticsearchTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InterruptElasticsearchTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InterruptElasticsearchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterruptLogstashTaskRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterruptLogstashTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InterruptLogstashTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InterruptLogstashTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InterruptLogstashTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAckClustersRequest extends $tea.Model {
  page?: number;
  size?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAckClustersResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListAckClustersResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAckClustersResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAckClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAckClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAckClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAckNamespacesRequest extends $tea.Model {
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAckNamespacesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListAckNamespacesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAckNamespacesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAckNamespacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAckNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAckNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllNodeRequest extends $tea.Model {
  extended?: boolean;
  static names(): { [key: string]: string } {
    return {
      extended: 'extended',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extended: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllNodeResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListAllNodeResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAllNodeResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAllNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAllNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlternativeSnapshotReposRequest extends $tea.Model {
  alreadySetItems?: boolean;
  static names(): { [key: string]: string } {
    return {
      alreadySetItems: 'alreadySetItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadySetItems: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlternativeSnapshotReposResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListAlternativeSnapshotReposResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAlternativeSnapshotReposResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlternativeSnapshotReposResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlternativeSnapshotReposResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlternativeSnapshotReposResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  output?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      instanceId: 'instanceId',
      output: 'output',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      output: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmResponseBody extends $tea.Model {
  headers?: ListApmResponseBodyHeaders;
  requestId?: string;
  result?: ListApmResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListApmResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListApmResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListApmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListApmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEsInstanceIdsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListAvailableEsInstanceIdsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAvailableEsInstanceIdsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEsInstanceIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAvailableEsInstanceIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAvailableEsInstanceIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectorsRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  page?: number;
  resId?: string;
  size?: number;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      name: 'name',
      page: 'page',
      resId: 'resId',
      size: 'size',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      page: 'number',
      resId: 'string',
      size: 'number',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectorsResponseBody extends $tea.Model {
  headers?: ListCollectorsResponseBodyHeaders;
  requestId?: string;
  result?: ListCollectorsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListCollectorsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectorsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCollectorsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCollectorsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesRequest extends $tea.Model {
  name?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBody extends $tea.Model {
  headers?: ListComponentIndicesResponseBodyHeaders;
  requestId?: string;
  result?: ListComponentIndicesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListComponentIndicesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListComponentIndicesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListComponentIndicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListComponentIndicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectedClustersResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListConnectedClustersResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListConnectedClustersResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectedClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConnectedClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConnectedClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsRequest extends $tea.Model {
  isManaged?: boolean;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      isManaged: 'isManaged',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isManaged: 'boolean',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBody extends $tea.Model {
  headers?: ListDataStreamsResponseBodyHeaders;
  requestId?: string;
  result?: ListDataStreamsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDataStreamsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataStreamsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataStreamsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataStreamsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataTasksResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDataTasksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataTasksResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultCollectorConfigurationsRequest extends $tea.Model {
  resType?: string;
  resVersion?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resType: 'resType',
      resVersion: 'resVersion',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resType: 'string',
      resVersion: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultCollectorConfigurationsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDefaultCollectorConfigurationsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDefaultCollectorConfigurationsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultCollectorConfigurationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDefaultCollectorConfigurationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDefaultCollectorConfigurationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeprecatedTemplatesRequest extends $tea.Model {
  name?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeprecatedTemplatesResponseBody extends $tea.Model {
  headers?: ListDeprecatedTemplatesResponseBodyHeaders;
  requestId?: string;
  result?: ListDeprecatedTemplatesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDeprecatedTemplatesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDeprecatedTemplatesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeprecatedTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDeprecatedTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDeprecatedTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseIndicesRequest extends $tea.Model {
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseIndicesResponseBody extends $tea.Model {
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseIndicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDiagnoseIndicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDiagnoseIndicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportRequest extends $tea.Model {
  detail?: boolean;
  endTime?: number;
  lang?: string;
  page?: number;
  size?: number;
  startTime?: number;
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      endTime: 'endTime',
      lang: 'lang',
      page: 'page',
      size: 'size',
      startTime: 'startTime',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'boolean',
      endTime: 'number',
      lang: 'string',
      page: 'number',
      size: 'number',
      startTime: 'number',
      trigger: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponseBody extends $tea.Model {
  headers?: ListDiagnoseReportResponseBodyHeaders;
  requestId?: string;
  result?: ListDiagnoseReportResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDiagnoseReportResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDiagnoseReportResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDiagnoseReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDiagnoseReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportIdsRequest extends $tea.Model {
  endTime?: number;
  lang?: string;
  page?: number;
  size?: number;
  startTime?: number;
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      lang: 'lang',
      page: 'page',
      size: 'size',
      startTime: 'startTime',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      lang: 'string',
      page: 'number',
      size: 'number',
      startTime: 'number',
      trigger: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportIdsResponseBody extends $tea.Model {
  headers?: ListDiagnoseReportIdsResponseBodyHeaders;
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDiagnoseReportIdsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDiagnoseReportIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDiagnoseReportIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictInformationRequest extends $tea.Model {
  analyzerType?: string;
  bucketName?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      analyzerType: 'analyzerType',
      bucketName: 'bucketName',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzerType: 'string',
      bucketName: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictInformationResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListDictInformationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ListDictInformationResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictInformationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDictInformationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDictInformationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsRequest extends $tea.Model {
  analyzerType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      analyzerType: 'analyzerType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzerType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsResponseBody extends $tea.Model {
  headers?: ListDictsResponseBodyHeaders;
  requestId?: string;
  result?: ListDictsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListDictsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDictsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDictsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDictsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesRequest extends $tea.Model {
  ecsInstanceIds?: string;
  ecsInstanceName?: string;
  page?: number;
  size?: number;
  tags?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceIds: 'ecsInstanceIds',
      ecsInstanceName: 'ecsInstanceName',
      page: 'page',
      size: 'size',
      tags: 'tags',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceIds: 'string',
      ecsInstanceName: 'string',
      page: 'number',
      size: 'number',
      tags: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBody extends $tea.Model {
  headers?: ListEcsInstancesResponseBodyHeaders;
  requestId?: string;
  result?: ListEcsInstancesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListEcsInstancesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEcsInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEcsInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtendfilesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListExtendfilesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListExtendfilesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtendfilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExtendfilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExtendfilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListILMPoliciesRequest extends $tea.Model {
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyName: 'policyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListILMPoliciesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListILMPoliciesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListILMPoliciesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListILMPoliciesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListILMPoliciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListILMPoliciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexTemplatesRequest extends $tea.Model {
  indexTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      indexTemplate: 'indexTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexTemplate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListIndexTemplatesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListIndexTemplatesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListIndexTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListIndexTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceRequest extends $tea.Model {
  description?: string;
  esVersion?: string;
  instanceCategory?: string;
  instanceId?: string;
  page?: number;
  paymentType?: string;
  resourceGroupId?: string;
  size?: number;
  tags?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      esVersion: 'esVersion',
      instanceCategory: 'instanceCategory',
      instanceId: 'instanceId',
      page: 'page',
      paymentType: 'paymentType',
      resourceGroupId: 'resourceGroupId',
      size: 'size',
      tags: 'tags',
      vpcId: 'vpcId',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      esVersion: 'string',
      instanceCategory: 'string',
      instanceId: 'string',
      page: 'number',
      paymentType: 'string',
      resourceGroupId: 'string',
      size: 'number',
      tags: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  headers?: ListInstanceResponseBodyHeaders;
  requestId?: string;
  result?: ListInstanceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListInstanceResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIndicesRequest extends $tea.Model {
  all?: boolean;
  isManaged?: boolean;
  isOpenstore?: boolean;
  name?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      isManaged: 'isManaged',
      isOpenstore: 'isOpenstore',
      name: 'name',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      isManaged: 'boolean',
      isOpenstore: 'boolean',
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIndicesResponseBody extends $tea.Model {
  headers?: ListInstanceIndicesResponseBodyHeaders;
  requestId?: string;
  result?: ListInstanceIndicesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListInstanceIndicesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListInstanceIndicesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIndicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceIndicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceIndicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKibanaPluginsRequest extends $tea.Model {
  page?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKibanaPluginsResponseBody extends $tea.Model {
  headers?: ListKibanaPluginsResponseBodyHeaders;
  requestId?: string;
  result?: ListKibanaPluginsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListKibanaPluginsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListKibanaPluginsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKibanaPluginsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListKibanaPluginsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListKibanaPluginsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  ownerId?: string;
  page?: number;
  resourceGroupId?: string;
  size?: number;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      instanceId: 'instanceId',
      ownerId: 'ownerId',
      page: 'page',
      resourceGroupId: 'resourceGroupId',
      size: 'size',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      ownerId: 'string',
      page: 'number',
      resourceGroupId: 'string',
      size: 'number',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponseBody extends $tea.Model {
  headers?: ListLogstashResponseBodyHeaders;
  requestId?: string;
  result?: ListLogstashResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListLogstashResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListLogstashResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLogstashResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLogstashResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashLogRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  page?: number;
  query?: string;
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      endTime: 'endTime',
      page: 'page',
      query: 'query',
      size: 'size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      page: 'number',
      query: 'string',
      size: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashLogResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListLogstashLogResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListLogstashLogResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLogstashLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLogstashLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashPluginsRequest extends $tea.Model {
  name?: string;
  page?: number;
  size?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      page: 'page',
      size: 'size',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      page: 'number',
      size: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashPluginsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListLogstashPluginsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListLogstashPluginsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashPluginsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLogstashPluginsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLogstashPluginsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  ecsInstanceIds?: string;
  ecsInstanceName?: string;
  page?: number;
  size?: number;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceIds: 'ecsInstanceIds',
      ecsInstanceName: 'ecsInstanceName',
      page: 'page',
      size: 'size',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceIds: 'string',
      ecsInstanceName: 'string',
      page: 'number',
      size: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  headers?: ListNodesResponseBodyHeaders;
  requestId?: string;
  result?: ListNodesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListNodesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListNodesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRequest extends $tea.Model {
  page?: number;
  pipelineId?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      pipelineId: 'pipelineId',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      pipelineId: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineResponseBody extends $tea.Model {
  headers?: ListPipelineResponseBodyHeaders;
  requestId?: string;
  result?: ListPipelineResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListPipelineResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListPipelineResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineIdsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListPipelineIdsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListPipelineIdsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineIdsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPipelineIdsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPipelineIdsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsRequest extends $tea.Model {
  name?: string;
  page?: string;
  size?: number;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      page: 'page',
      size: 'size',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      page: 'string',
      size: 'number',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsResponseBody extends $tea.Model {
  headers?: ListPluginsResponseBodyHeaders;
  requestId?: string;
  result?: ListPluginsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListPluginsResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListPluginsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPluginsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPluginsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchLogRequest extends $tea.Model {
  beginTime?: number;
  endTime?: number;
  page?: number;
  query?: string;
  size?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      endTime: 'endTime',
      page: 'page',
      query: 'query',
      size: 'size',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      endTime: 'number',
      page: 'number',
      query: 'string',
      size: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchLogResponseBody extends $tea.Model {
  headers?: ListSearchLogResponseBodyHeaders;
  requestId?: string;
  result?: ListSearchLogResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListSearchLogResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSearchLogResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchLogResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSearchLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSearchLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShardRecoveriesRequest extends $tea.Model {
  activeOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      activeOnly: 'activeOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeOnly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShardRecoveriesResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListShardRecoveriesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListShardRecoveriesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShardRecoveriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListShardRecoveriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListShardRecoveriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotReposByInstanceIdResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListSnapshotReposByInstanceIdResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListSnapshotReposByInstanceIdResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotReposByInstanceIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSnapshotReposByInstanceIdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSnapshotReposByInstanceIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  page?: number;
  resourceIds?: string;
  resourceType?: string;
  size?: number;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      page: 'Page',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      size: 'Size',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      page: 'number',
      resourceIds: 'string',
      resourceType: 'string',
      size: 'number',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  headers?: ListTagResourcesResponseBodyHeaders;
  pageSize?: number;
  requestId?: string;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListTagResourcesResponseBodyHeaders,
      pageSize: 'number',
      requestId: 'string',
      tagResources: ListTagResourcesResponseBodyTagResources,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsRequest extends $tea.Model {
  pageSize?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'pageSize',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListTagsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListTagsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsRequest extends $tea.Model {
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBody extends $tea.Model {
  requestId?: string;
  result?: ListVpcEndpointsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListVpcEndpointsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcEndpointsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcEndpointsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateToOtherZoneRequest extends $tea.Model {
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateToOtherZoneResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateToOtherZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MigrateToOtherZoneResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MigrateToOtherZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeployMachineRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeployMachineResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeployMachineResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyDeployMachineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDeployMachineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElastictaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: ModifyElastictaskResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: ModifyElastictaskResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElastictaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyElastictaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyElastictaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMaintainTimeRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMaintainTimeResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceMaintainTimeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyInstanceMaintainTimeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyInstanceMaintainTimeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWhiteIpsRequest extends $tea.Model {
  clientToken?: string;
  modifyMode?: string;
  networkType?: string;
  nodeType?: string;
  whiteIpGroup?: ModifyWhiteIpsRequestWhiteIpGroup;
  whiteIpList?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      modifyMode: 'modifyMode',
      networkType: 'networkType',
      nodeType: 'nodeType',
      whiteIpGroup: 'whiteIpGroup',
      whiteIpList: 'whiteIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      modifyMode: 'string',
      networkType: 'string',
      nodeType: 'string',
      whiteIpGroup: ModifyWhiteIpsRequestWhiteIpGroup,
      whiteIpList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWhiteIpsResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWhiteIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyWhiteIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyWhiteIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
  requestId?: string;
  result?: MoveResourceGroupResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: MoveResourceGroupResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDiagnosisRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDiagnosisResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenDiagnosisResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenDiagnosisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenHttpsRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenHttpsResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenHttpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: OpenHttpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: OpenHttpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostEmonTryAlarmRuleResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PostEmonTryAlarmRuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PostEmonTryAlarmRuleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PostEmonTryAlarmRuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendTemplatesRequest extends $tea.Model {
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      usageScenario: 'usageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      usageScenario: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  result?: RecommendTemplatesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': RecommendTemplatesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecommendTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecommendTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReinstallCollectorRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReinstallCollectorResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReinstallCollectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ReinstallCollectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReinstallCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveApmResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveApmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveApmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveApmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewLogstashRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewLogstashResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenewLogstashResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RenewLogstashResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RenewLogstashResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartCollectorRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartCollectorResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartCollectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartCollectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceRequest extends $tea.Model {
  clientToken?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: RestartInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: RestartInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartLogstashRequest extends $tea.Model {
  clientToken?: string;
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      force: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartLogstashResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class RestartLogstashResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RestartLogstashResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RestartLogstashResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeElasticsearchTaskRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeElasticsearchTaskResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeElasticsearchTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeElasticsearchTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeElasticsearchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeLogstashTaskRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeLogstashTaskResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeLogstashTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeLogstashTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeLogstashTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RolloverDataStreamRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RolloverDataStreamResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RolloverDataStreamResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RolloverDataStreamResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RolloverDataStreamResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPipelinesRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPipelinesResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunPipelinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunPipelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunPipelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkNodeRequest extends $tea.Model {
  clientToken?: string;
  ignoreStatus?: boolean;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      ignoreStatus: 'ignoreStatus',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ignoreStatus: 'boolean',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkNodeResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ShrinkNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ShrinkNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApmResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartApmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartApmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartApmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCollectorRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCollectorResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartCollectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartCollectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApmResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopApmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopApmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopApmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCollectorRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCollectorResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopCollectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopCollectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPipelinesRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPipelinesResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopPipelinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopPipelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopPipelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferNodeRequest extends $tea.Model {
  clientToken?: string;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferNodeResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TransferNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TransferNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerNetworkRequest extends $tea.Model {
  actionType?: string;
  networkType?: string;
  nodeType?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'actionType',
      networkType: 'networkType',
      nodeType: 'nodeType',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      networkType: 'string',
      nodeType: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerNetworkResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TriggerNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TriggerNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallKibanaPluginRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallKibanaPluginResponseBody extends $tea.Model {
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallKibanaPluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UninstallKibanaPluginResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UninstallKibanaPluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallLogstashPluginRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallLogstashPluginResponseBody extends $tea.Model {
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallLogstashPluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UninstallLogstashPluginResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UninstallLogstashPluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallPluginRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallPluginResponseBody extends $tea.Model {
  requestId?: string;
  result?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallPluginResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UninstallPluginResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UninstallPluginResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  resourceIds?: string;
  resourceType?: string;
  tagKeys?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceIds: 'string',
      resourceType: 'string',
      tagKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdminPasswordRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdminPasswordResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class UpdateAdminPasswordResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAdminPasswordResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAdminPasswordResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdvancedSettingRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdvancedSettingResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAdvancedSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAdvancedSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAdvancedSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliwsDictRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliwsDictResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateAliwsDictResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpdateAliwsDictResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliwsDictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAliwsDictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAliwsDictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApmRequest extends $tea.Model {
  description?: string;
  outputES?: string;
  outputESPassword?: string;
  outputESUserName?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      outputES: 'outputES',
      outputESPassword: 'outputESPassword',
      outputESUserName: 'outputESUserName',
      token: 'token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputES: 'string',
      outputESPassword: 'string',
      outputESUserName: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApmResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateApmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateApmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateApmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBlackIpsRequest extends $tea.Model {
  clientToken?: string;
  esIPBlacklist?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      esIPBlacklist: 'esIPBlacklist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      esIPBlacklist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBlackIpsResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateBlackIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateBlackIpsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBlackIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateBlackIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateBlackIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateCollectorResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateCollectorResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCollectorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCollectorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorNameRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorNameResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateCollectorNameResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateCollectorNameResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCollectorNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCollectorNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComponentIndexRequest extends $tea.Model {
  meta?: { [key: string]: any };
  template?: UpdateComponentIndexRequestTemplate;
  static names(): { [key: string]: string } {
    return {
      meta: '_meta',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      template: UpdateComponentIndexRequestTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComponentIndexResponseBody extends $tea.Model {
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

export class UpdateComponentIndexResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateComponentIndexResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateComponentIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDescriptionRequest extends $tea.Model {
  description?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDescriptionResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateDescriptionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateDescriptionResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDescriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDiagnosisSettingsRequest extends $tea.Model {
  clientToken?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lang: 'lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDiagnosisSettingsResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDiagnosisSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDiagnosisSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDiagnosisSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateDictResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpdateDictResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDictResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDictResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExtendConfigRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExtendConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExtendConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateExtendConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateExtendConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExtendfilesRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExtendfilesResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateExtendfilesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpdateExtendfilesResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExtendfilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateExtendfilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateExtendfilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotIkDictsRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotIkDictsResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateHotIkDictsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpdateHotIkDictsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotIkDictsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateHotIkDictsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateHotIkDictsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateILMPolicyRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateILMPolicyResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateILMPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateILMPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateILMPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIndexTemplateRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIndexTemplateResponseBody extends $tea.Model {
  requestId?: string;
  result?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateIndexTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateIndexTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateIndexTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $tea.Model {
  clientToken?: string;
  ignoreStatus?: boolean;
  orderActionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      ignoreStatus: 'ignoreStatus',
      orderActionType: 'orderActionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ignoreStatus: 'boolean',
      orderActionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceChargeTypeRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceChargeTypeResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceChargeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInstanceChargeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceSettingsRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceSettingsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class UpdateInstanceSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInstanceSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKibanaSettingsRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKibanaSettingsResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKibanaSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateKibanaSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateKibanaSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKibanaWhiteIpsRequest extends $tea.Model {
  clientToken?: string;
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      modifyMode: 'modifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      modifyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKibanaWhiteIpsResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateKibanaWhiteIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateKibanaWhiteIpsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKibanaWhiteIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateKibanaWhiteIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateKibanaWhiteIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLogstashResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLogstashResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashChargeTypeRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashChargeTypeResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashChargeTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLogstashChargeTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLogstashChargeTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashDescriptionRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashDescriptionResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateLogstashDescriptionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateLogstashDescriptionResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashDescriptionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLogstashDescriptionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLogstashDescriptionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashSettingsRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashSettingsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
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

export class UpdateLogstashSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateLogstashSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateLogstashSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineManagementConfigRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineManagementConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineManagementConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePipelineManagementConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePipelineManagementConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelinesRequest extends $tea.Model {
  clientToken?: string;
  trigger?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      trigger: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelinesResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePipelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePipelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateNetworkWhiteIpsRequest extends $tea.Model {
  clientToken?: string;
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      modifyMode: 'modifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      modifyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateNetworkWhiteIpsResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdatePrivateNetworkWhiteIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdatePrivateNetworkWhiteIpsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateNetworkWhiteIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePrivateNetworkWhiteIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePrivateNetworkWhiteIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicNetworkRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicNetworkResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdatePublicNetworkResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdatePublicNetworkResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicNetworkResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePublicNetworkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePublicNetworkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicWhiteIpsRequest extends $tea.Model {
  clientToken?: string;
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      modifyMode: 'modifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      modifyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicWhiteIpsResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdatePublicWhiteIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdatePublicWhiteIpsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicWhiteIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePublicWhiteIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePublicWhiteIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReadWritePolicyRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReadWritePolicyResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReadWritePolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateReadWritePolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateReadWritePolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotSettingResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateSnapshotSettingResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateSnapshotSettingResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSnapshotSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSnapshotSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSynonymsDictsRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSynonymsDictsResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateSynonymsDictsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpdateSynonymsDictsResponseBodyResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSynonymsDictsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateSynonymsDictsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateSynonymsDictsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhiteIpsRequest extends $tea.Model {
  esIPWhitelist?: string[];
  whiteIpGroup?: UpdateWhiteIpsRequestWhiteIpGroup;
  clientToken?: string;
  modifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      esIPWhitelist: 'esIPWhitelist',
      whiteIpGroup: 'whiteIpGroup',
      clientToken: 'clientToken',
      modifyMode: 'modifyMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      whiteIpGroup: UpdateWhiteIpsRequestWhiteIpGroup,
      clientToken: 'string',
      modifyMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhiteIpsResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpdateWhiteIpsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpdateWhiteIpsResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhiteIpsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateWhiteIpsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateWhiteIpsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateXpackMonitorConfigRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateXpackMonitorConfigResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateXpackMonitorConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateXpackMonitorConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateXpackMonitorConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeEngineVersionRequest extends $tea.Model {
  clientToken?: string;
  dryRun?: boolean;
  type?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      dryRun: 'dryRun',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeEngineVersionResponseBody extends $tea.Model {
  requestId?: string;
  result?: UpgradeEngineVersionResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: UpgradeEngineVersionResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeEngineVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeEngineVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeEngineVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateConnectionRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateConnectionResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateConnectionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateConnectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShrinkNodesRequest extends $tea.Model {
  ignoreStatus?: boolean;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      ignoreStatus: 'ignoreStatus',
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreStatus: 'boolean',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShrinkNodesResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShrinkNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateShrinkNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateShrinkNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSlrPermissionRequest extends $tea.Model {
  clientToken?: string;
  rolename?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      rolename: 'rolename',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      rolename: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSlrPermissionResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateSlrPermissionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateSlrPermissionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateSlrPermissionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTransferableNodesRequest extends $tea.Model {
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'nodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTransferableNodesResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateTransferableNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ValidateTransferableNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ValidateTransferableNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  requestId?: string;
  result?: CreateInstanceResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: CreateInstanceResponseBodyResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanRequestDataInfo extends $tea.Model {
  code?: string;
  size?: number;
  totalCount?: number;
  type?: string;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      size: 'size',
      totalCount: 'totalCount',
      type: 'type',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      size: 'number',
      totalCount: 'number',
      type: 'string',
      unit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanRequestMetric extends $tea.Model {
  averageQps?: number;
  code?: string;
  concurrent?: number;
  peakQps?: number;
  responseTime?: number;
  throughput?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      averageQps: 'averageQps',
      code: 'code',
      concurrent: 'concurrent',
      peakQps: 'peakQps',
      responseTime: 'responseTime',
      throughput: 'throughput',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageQps: 'number',
      code: 'string',
      concurrent: 'number',
      peakQps: 'number',
      responseTime: 'number',
      throughput: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanResponseBodyResultExtendConfigs extends $tea.Model {
  configType?: string;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'ConfigType',
      disk: 'Disk',
      diskType: 'DiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanResponseBodyResultNodeConfigurations extends $tea.Model {
  amount?: number;
  cpu?: number;
  disk?: number;
  diskType?: string;
  memory?: number;
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      cpu: 'Cpu',
      disk: 'Disk',
      diskType: 'DiskType',
      memory: 'Memory',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      cpu: 'number',
      disk: 'number',
      diskType: 'string',
      memory: 'number',
      nodeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanResponseBodyResult extends $tea.Model {
  extendConfigs?: CapacityPlanResponseBodyResultExtendConfigs[];
  instanceCategory?: string;
  nodeConfigurations?: CapacityPlanResponseBodyResultNodeConfigurations[];
  oversizedCluster?: boolean;
  static names(): { [key: string]: string } {
    return {
      extendConfigs: 'ExtendConfigs',
      instanceCategory: 'InstanceCategory',
      nodeConfigurations: 'NodeConfigurations',
      oversizedCluster: 'OversizedCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendConfigs: { 'type': 'array', 'itemType': CapacityPlanResponseBodyResultExtendConfigs },
      instanceCategory: 'string',
      nodeConfigurations: { 'type': 'array', 'itemType': CapacityPlanResponseBodyResultNodeConfigurations },
      oversizedCluster: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCollectorResponseBodyResult extends $tea.Model {
  resId?: string;
  static names(): { [key: string]: string } {
    return {
      resId: 'resId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateComponentIndexRequestTemplate extends $tea.Model {
  aliases?: { [key: string]: any };
  mappings?: { [key: string]: any };
  settings?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      mappings: 'mappings',
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mappings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      settings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataStreamResponseBodyResult extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataTasksResponseBodyResultSinkCluster extends $tea.Model {
  dataSourceType?: string;
  index?: string;
  mapping?: string;
  password?: string;
  routing?: string;
  settings?: string;
  type?: string;
  username?: string;
  vpcId?: string;
  vpcInstanceId?: string;
  vpcInstancePort?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'dataSourceType',
      index: 'index',
      mapping: 'mapping',
      password: 'password',
      routing: 'routing',
      settings: 'settings',
      type: 'type',
      username: 'username',
      vpcId: 'vpcId',
      vpcInstanceId: 'vpcInstanceId',
      vpcInstancePort: 'vpcInstancePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      index: 'string',
      mapping: 'string',
      password: 'string',
      routing: 'string',
      settings: 'string',
      type: 'string',
      username: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
      vpcInstancePort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataTasksResponseBodyResultSourceCluster extends $tea.Model {
  dataSourceType?: string;
  endpoint?: string;
  index?: string;
  password?: string;
  type?: string;
  username?: string;
  vpcId?: string;
  vpcInstanceId?: string;
  vpcInstancePort?: number;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'dataSourceType',
      endpoint: 'endpoint',
      index: 'index',
      password: 'password',
      type: 'type',
      username: 'username',
      vpcId: 'vpcId',
      vpcInstanceId: 'vpcInstanceId',
      vpcInstancePort: 'vpcInstancePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      endpoint: 'string',
      index: 'string',
      password: 'string',
      type: 'string',
      username: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
      vpcInstancePort: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataTasksResponseBodyResult extends $tea.Model {
  sinkCluster?: CreateDataTasksResponseBodyResultSinkCluster;
  sourceCluster?: CreateDataTasksResponseBodyResultSourceCluster;
  static names(): { [key: string]: string } {
    return {
      sinkCluster: 'sinkCluster',
      sourceCluster: 'sourceCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkCluster: CreateDataTasksResponseBodyResultSinkCluster,
      sourceCluster: CreateDataTasksResponseBodyResultSourceCluster,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLogstashResponseBodyResult extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcEndpointResponseBodyResult extends $tea.Model {
  endpointDomain?: string;
  endpointId?: string;
  endpointName?: string;
  serviceId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointDomain: 'endpointDomain',
      endpointId: 'endpointId',
      endpointName: 'endpointName',
      serviceId: 'serviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointDomain: 'string',
      endpointId: 'string',
      endpointName: 'string',
      serviceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAckOperatorResponseBodyResult extends $tea.Model {
  status?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeApmResponseBodyResult extends $tea.Model {
  apmServerDomain?: string;
  createdAt?: string;
  deployedReplica?: number;
  description?: string;
  endTime?: number;
  instanceId?: string;
  nodeAmount?: number;
  outputES?: string;
  outputESUserName?: string;
  ownerId?: string;
  paymentType?: string;
  region?: string;
  replica?: number;
  resourceSpec?: string;
  status?: string;
  version?: string;
  vpcId?: string;
  vsArea?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      apmServerDomain: 'apmServerDomain',
      createdAt: 'createdAt',
      deployedReplica: 'deployedReplica',
      description: 'description',
      endTime: 'endTime',
      instanceId: 'instanceId',
      nodeAmount: 'nodeAmount',
      outputES: 'outputES',
      outputESUserName: 'outputESUserName',
      ownerId: 'ownerId',
      paymentType: 'paymentType',
      region: 'region',
      replica: 'replica',
      resourceSpec: 'resourceSpec',
      status: 'status',
      version: 'version',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apmServerDomain: 'string',
      createdAt: 'string',
      deployedReplica: 'number',
      description: 'string',
      endTime: 'number',
      instanceId: 'string',
      nodeAmount: 'number',
      outputES: 'string',
      outputESUserName: 'string',
      ownerId: 'string',
      paymentType: 'string',
      region: 'string',
      replica: 'number',
      resourceSpec: 'string',
      status: 'string',
      version: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollectorResponseBodyResultConfigs extends $tea.Model {
  content?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollectorResponseBodyResultExtendConfigsMachines extends $tea.Model {
  agentStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'agentStatus',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollectorResponseBodyResultExtendConfigs extends $tea.Model {
  configType?: string;
  enableMonitoring?: boolean;
  groupId?: string;
  host?: string;
  hosts?: string[];
  instanceId?: string;
  instanceType?: string;
  kibanaHost?: string;
  machines?: DescribeCollectorResponseBodyResultExtendConfigsMachines[];
  protocol?: string;
  successPodsCount?: string;
  totalPodsCount?: string;
  type?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      enableMonitoring: 'enableMonitoring',
      groupId: 'groupId',
      host: 'host',
      hosts: 'hosts',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      kibanaHost: 'kibanaHost',
      machines: 'machines',
      protocol: 'protocol',
      successPodsCount: 'successPodsCount',
      totalPodsCount: 'totalPodsCount',
      type: 'type',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      enableMonitoring: 'boolean',
      groupId: 'string',
      host: 'string',
      hosts: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceType: 'string',
      kibanaHost: 'string',
      machines: { 'type': 'array', 'itemType': DescribeCollectorResponseBodyResultExtendConfigsMachines },
      protocol: 'string',
      successPodsCount: 'string',
      totalPodsCount: 'string',
      type: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollectorResponseBodyResult extends $tea.Model {
  collectorPaths?: string[];
  configs?: DescribeCollectorResponseBodyResultConfigs[];
  dryRun?: boolean;
  extendConfigs?: DescribeCollectorResponseBodyResultExtendConfigs[];
  gmtCreatedTime?: string;
  gmtUpdateTime?: string;
  name?: string;
  ownerId?: string;
  resId?: string;
  resType?: string;
  resVersion?: string;
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      collectorPaths: 'collectorPaths',
      configs: 'configs',
      dryRun: 'dryRun',
      extendConfigs: 'extendConfigs',
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      name: 'name',
      ownerId: 'ownerId',
      resId: 'resId',
      resType: 'resType',
      resVersion: 'resVersion',
      status: 'status',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
      configs: { 'type': 'array', 'itemType': DescribeCollectorResponseBodyResultConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': DescribeCollectorResponseBodyResultExtendConfigs },
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      name: 'string',
      ownerId: 'string',
      resId: 'string',
      resType: 'string',
      resVersion: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentIndexResponseBodyResultTemplate extends $tea.Model {
  aliases?: { [key: string]: any };
  mappings?: { [key: string]: any };
  settings?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      mappings: 'mappings',
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mappings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      settings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeComponentIndexResponseBodyResult extends $tea.Model {
  meta?: { [key: string]: any };
  template?: DescribeComponentIndexResponseBodyResultTemplate;
  static names(): { [key: string]: string } {
    return {
      meta: '_meta',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      template: DescribeComponentIndexResponseBodyResultTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectableClustersResponseBodyResult extends $tea.Model {
  instances?: string;
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
      networkType: 'networkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: 'string',
      networkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeprecatedTemplateResponseBodyResultTemplate extends $tea.Model {
  aliases?: string;
  mappings?: string;
  settings?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      mappings: 'mappings',
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: 'string',
      mappings: 'string',
      settings: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeprecatedTemplateResponseBodyResult extends $tea.Model {
  dataStream?: boolean;
  indexPatterns?: string[];
  indexTemplate?: string;
  order?: number;
  template?: DescribeDeprecatedTemplateResponseBodyResultTemplate;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dataStream: 'dataStream',
      indexPatterns: 'indexPatterns',
      indexTemplate: 'indexTemplate',
      order: 'order',
      template: 'template',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStream: 'boolean',
      indexPatterns: { 'type': 'array', 'itemType': 'string' },
      indexTemplate: 'string',
      order: 'number',
      template: DescribeDeprecatedTemplateResponseBodyResultTemplate,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail extends $tea.Model {
  desc?: string;
  name?: string;
  result?: string;
  suggest?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      name: 'name',
      result: 'result',
      suggest: 'suggest',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      name: 'string',
      result: 'string',
      suggest: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportResponseBodyResultDiagnoseItems extends $tea.Model {
  detail?: DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail;
  health?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      health: 'health',
      item: 'item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail,
      health: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportResponseBodyResult extends $tea.Model {
  createTime?: number;
  diagnoseItems?: DescribeDiagnoseReportResponseBodyResultDiagnoseItems[];
  health?: string;
  instanceId?: string;
  reportId?: string;
  state?: string;
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      diagnoseItems: 'diagnoseItems',
      health: 'health',
      instanceId: 'instanceId',
      reportId: 'reportId',
      state: 'state',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      diagnoseItems: { 'type': 'array', 'itemType': DescribeDiagnoseReportResponseBodyResultDiagnoseItems },
      health: 'string',
      instanceId: 'string',
      reportId: 'string',
      state: 'string',
      trigger: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSettingsResponseBodyResult extends $tea.Model {
  scene?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      scene: 'scene',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scene: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeILMPolicyResponseBodyResult extends $tea.Model {
  name?: string;
  phases?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      phases: 'phases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      phases: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIndexTemplateResponseBodyResultTemplate extends $tea.Model {
  aliases?: string;
  mappings?: string;
  settings?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      mappings: 'mappings',
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: 'string',
      mappings: 'string',
      settings: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIndexTemplateResponseBodyResult extends $tea.Model {
  dataStream?: boolean;
  ilmPolicy?: string;
  indexPatterns?: string[];
  indexTemplate?: string;
  priority?: number;
  template?: DescribeIndexTemplateResponseBodyResultTemplate;
  static names(): { [key: string]: string } {
    return {
      dataStream: 'dataStream',
      ilmPolicy: 'ilmPolicy',
      indexPatterns: 'indexPatterns',
      indexTemplate: 'indexTemplate',
      priority: 'priority',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStream: 'boolean',
      ilmPolicy: 'string',
      indexPatterns: { 'type': 'array', 'itemType': 'string' },
      indexTemplate: 'string',
      priority: 'number',
      template: DescribeIndexTemplateResponseBodyResultTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultAdvancedSetting extends $tea.Model {
  gcName?: string;
  static names(): { [key: string]: string } {
    return {
      gcName: 'gcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultAliwsDicts extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultClientNodeConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultDictList extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultElasticDataNodeConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultKibanaConfiguration extends $tea.Model {
  amount?: number;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultMasterConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultNetworkConfigWhiteIpGroupList extends $tea.Model {
  groupName?: string;
  ips?: string[];
  whiteIpType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
      whiteIpType: 'whiteIpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      whiteIpType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultNetworkConfig extends $tea.Model {
  type?: string;
  vpcId?: string;
  vsArea?: string;
  vswitchId?: string;
  whiteIpGroupList?: DescribeInstanceResponseBodyResultNetworkConfigWhiteIpGroupList[];
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
      whiteIpGroupList: 'whiteIpGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
      whiteIpGroupList: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultNetworkConfigWhiteIpGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultNodeSpec extends $tea.Model {
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultSynonymsDicts extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultWarmNodeConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultZoneInfos extends $tea.Model {
  status?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResult extends $tea.Model {
  advancedDedicateMaster?: boolean;
  advancedSetting?: DescribeInstanceResponseBodyResultAdvancedSetting;
  aliwsDicts?: DescribeInstanceResponseBodyResultAliwsDicts[];
  clientNodeConfiguration?: DescribeInstanceResponseBodyResultClientNodeConfiguration;
  createdAt?: string;
  dedicateMaster?: boolean;
  description?: string;
  dictList?: DescribeInstanceResponseBodyResultDictList[];
  domain?: string;
  elasticDataNodeConfiguration?: DescribeInstanceResponseBodyResultElasticDataNodeConfiguration;
  enableKibanaPrivateNetwork?: boolean;
  enableKibanaPublicNetwork?: boolean;
  enablePublic?: boolean;
  esConfig?: { [key: string]: any };
  esIPBlacklist?: string[];
  esIPWhitelist?: string[];
  esVersion?: string;
  extendConfigs?: { [key: string]: any }[];
  haveClientNode?: boolean;
  haveKibana?: boolean;
  instanceId?: string;
  isNewDeployment?: boolean;
  kibanaConfiguration?: DescribeInstanceResponseBodyResultKibanaConfiguration;
  kibanaDomain?: string;
  kibanaIPWhitelist?: string[];
  kibanaPort?: number;
  kibanaPrivateIPWhitelist?: string[];
  masterConfiguration?: DescribeInstanceResponseBodyResultMasterConfiguration;
  networkConfig?: DescribeInstanceResponseBodyResultNetworkConfig;
  nodeAmount?: number;
  nodeSpec?: DescribeInstanceResponseBodyResultNodeSpec;
  paymentType?: string;
  port?: number;
  postpaidServiceStatus?: string;
  privateNetworkIpWhiteList?: string[];
  protocol?: string;
  publicDomain?: string;
  publicIpWhitelist?: string[];
  publicPort?: number;
  resourceGroupId?: string;
  serviceVpc?: boolean;
  status?: string;
  synonymsDicts?: DescribeInstanceResponseBodyResultSynonymsDicts[];
  tags?: DescribeInstanceResponseBodyResultTags[];
  updatedAt?: string;
  vpcInstanceId?: string;
  warmNode?: boolean;
  warmNodeConfiguration?: DescribeInstanceResponseBodyResultWarmNodeConfiguration;
  zoneCount?: number;
  zoneInfos?: DescribeInstanceResponseBodyResultZoneInfos[];
  static names(): { [key: string]: string } {
    return {
      advancedDedicateMaster: 'advancedDedicateMaster',
      advancedSetting: 'advancedSetting',
      aliwsDicts: 'aliwsDicts',
      clientNodeConfiguration: 'clientNodeConfiguration',
      createdAt: 'createdAt',
      dedicateMaster: 'dedicateMaster',
      description: 'description',
      dictList: 'dictList',
      domain: 'domain',
      elasticDataNodeConfiguration: 'elasticDataNodeConfiguration',
      enableKibanaPrivateNetwork: 'enableKibanaPrivateNetwork',
      enableKibanaPublicNetwork: 'enableKibanaPublicNetwork',
      enablePublic: 'enablePublic',
      esConfig: 'esConfig',
      esIPBlacklist: 'esIPBlacklist',
      esIPWhitelist: 'esIPWhitelist',
      esVersion: 'esVersion',
      extendConfigs: 'extendConfigs',
      haveClientNode: 'haveClientNode',
      haveKibana: 'haveKibana',
      instanceId: 'instanceId',
      isNewDeployment: 'isNewDeployment',
      kibanaConfiguration: 'kibanaConfiguration',
      kibanaDomain: 'kibanaDomain',
      kibanaIPWhitelist: 'kibanaIPWhitelist',
      kibanaPort: 'kibanaPort',
      kibanaPrivateIPWhitelist: 'kibanaPrivateIPWhitelist',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      port: 'port',
      postpaidServiceStatus: 'postpaidServiceStatus',
      privateNetworkIpWhiteList: 'privateNetworkIpWhiteList',
      protocol: 'protocol',
      publicDomain: 'publicDomain',
      publicIpWhitelist: 'publicIpWhitelist',
      publicPort: 'publicPort',
      resourceGroupId: 'resourceGroupId',
      serviceVpc: 'serviceVpc',
      status: 'status',
      synonymsDicts: 'synonymsDicts',
      tags: 'tags',
      updatedAt: 'updatedAt',
      vpcInstanceId: 'vpcInstanceId',
      warmNode: 'warmNode',
      warmNodeConfiguration: 'warmNodeConfiguration',
      zoneCount: 'zoneCount',
      zoneInfos: 'zoneInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDedicateMaster: 'boolean',
      advancedSetting: DescribeInstanceResponseBodyResultAdvancedSetting,
      aliwsDicts: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultAliwsDicts },
      clientNodeConfiguration: DescribeInstanceResponseBodyResultClientNodeConfiguration,
      createdAt: 'string',
      dedicateMaster: 'boolean',
      description: 'string',
      dictList: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultDictList },
      domain: 'string',
      elasticDataNodeConfiguration: DescribeInstanceResponseBodyResultElasticDataNodeConfiguration,
      enableKibanaPrivateNetwork: 'boolean',
      enableKibanaPublicNetwork: 'boolean',
      enablePublic: 'boolean',
      esConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      esIPBlacklist: { 'type': 'array', 'itemType': 'string' },
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      esVersion: 'string',
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      haveClientNode: 'boolean',
      haveKibana: 'boolean',
      instanceId: 'string',
      isNewDeployment: 'boolean',
      kibanaConfiguration: DescribeInstanceResponseBodyResultKibanaConfiguration,
      kibanaDomain: 'string',
      kibanaIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaPort: 'number',
      kibanaPrivateIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      masterConfiguration: DescribeInstanceResponseBodyResultMasterConfiguration,
      networkConfig: DescribeInstanceResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: DescribeInstanceResponseBodyResultNodeSpec,
      paymentType: 'string',
      port: 'number',
      postpaidServiceStatus: 'string',
      privateNetworkIpWhiteList: { 'type': 'array', 'itemType': 'string' },
      protocol: 'string',
      publicDomain: 'string',
      publicIpWhitelist: { 'type': 'array', 'itemType': 'string' },
      publicPort: 'number',
      resourceGroupId: 'string',
      serviceVpc: 'boolean',
      status: 'string',
      synonymsDicts: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultSynonymsDicts },
      tags: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultTags },
      updatedAt: 'string',
      vpcInstanceId: 'string',
      warmNode: 'boolean',
      warmNodeConfiguration: DescribeInstanceResponseBodyResultWarmNodeConfiguration,
      zoneCount: 'number',
      zoneInfos: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultZoneInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResultTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResultZoneInfos extends $tea.Model {
  status?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResultEndpointList extends $tea.Model {
  host?: string;
  port?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      port: 'port',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResultNetworkConfig extends $tea.Model {
  type?: string;
  vpcId?: string;
  vsArea?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResultNodeSpec extends $tea.Model {
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResult extends $tea.Model {
  extendConfigs?: { [key: string]: any }[];
  resourceGroupId?: string;
  tags?: DescribeLogstashResponseBodyResultTags[];
  zoneInfos?: DescribeLogstashResponseBodyResultZoneInfos[];
  config?: { [key: string]: any };
  createdAt?: string;
  description?: string;
  endpointList?: DescribeLogstashResponseBodyResultEndpointList[];
  instanceId?: string;
  networkConfig?: DescribeLogstashResponseBodyResultNetworkConfig;
  nodeAmount?: number;
  nodeSpec?: DescribeLogstashResponseBodyResultNodeSpec;
  paymentType?: string;
  status?: string;
  updatedAt?: string;
  version?: string;
  vpcInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      extendConfigs: 'ExtendConfigs',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      zoneInfos: 'ZoneInfos',
      config: 'config',
      createdAt: 'createdAt',
      description: 'description',
      endpointList: 'endpointList',
      instanceId: 'instanceId',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      status: 'status',
      updatedAt: 'updatedAt',
      version: 'version',
      vpcInstanceId: 'vpcInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultTags },
      zoneInfos: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultZoneInfos },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createdAt: 'string',
      description: 'string',
      endpointList: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultEndpointList },
      instanceId: 'string',
      networkConfig: DescribeLogstashResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: DescribeLogstashResponseBodyResultNodeSpec,
      paymentType: 'string',
      status: 'string',
      updatedAt: 'string',
      version: 'string',
      vpcInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBodyResult extends $tea.Model {
  batchDelay?: number;
  batchSize?: number;
  config?: string;
  description?: string;
  gmtCreatedTime?: string;
  gmtUpdateTime?: string;
  pipelineId?: string;
  pipelineStatus?: string;
  queueCheckPointWrites?: number;
  queueMaxBytes?: number;
  queueType?: string;
  workers?: number;
  static names(): { [key: string]: string } {
    return {
      batchDelay: 'batchDelay',
      batchSize: 'batchSize',
      config: 'config',
      description: 'description',
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      pipelineId: 'pipelineId',
      pipelineStatus: 'pipelineStatus',
      queueCheckPointWrites: 'queueCheckPointWrites',
      queueMaxBytes: 'queueMaxBytes',
      queueType: 'queueType',
      workers: 'workers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchDelay: 'number',
      batchSize: 'number',
      config: 'string',
      description: 'string',
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      pipelineId: 'string',
      pipelineStatus: 'string',
      queueCheckPointWrites: 'number',
      queueMaxBytes: 'number',
      queueType: 'string',
      workers: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineManagementConfigResponseBodyResult extends $tea.Model {
  endpoints?: string;
  esInstanceId?: string;
  pipelineIds?: string[];
  pipelineManagementType?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      esInstanceId: 'esInstanceId',
      pipelineIds: 'pipelineIds',
      pipelineManagementType: 'pipelineManagementType',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: 'string',
      esInstanceId: 'string',
      pipelineIds: { 'type': 'array', 'itemType': 'string' },
      pipelineManagementType: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyResult extends $tea.Model {
  consoleEndpoint?: string;
  localName?: string;
  regionEndpoint?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      consoleEndpoint: 'consoleEndpoint',
      localName: 'localName',
      regionEndpoint: 'regionEndpoint',
      regionId: 'regionId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consoleEndpoint: 'string',
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSnapshotSettingResponseBodyResult extends $tea.Model {
  enable?: boolean;
  quartzRegex?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      quartzRegex: 'QuartzRegex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      quartzRegex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTemplatesResponseBodyResult extends $tea.Model {
  content?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeXpackMonitorConfigResponseBodyResult extends $tea.Model {
  enable?: boolean;
  endpoints?: string[];
  esInstanceId?: string;
  pipelineIds?: string[];
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      endpoints: 'endpoints',
      esInstanceId: 'esInstanceId',
      pipelineIds: 'pipelineIds',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      endpoints: { 'type': 'array', 'itemType': 'string' },
      esInstanceId: 'string',
      pipelineIds: { 'type': 'array', 'itemType': 'string' },
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseInstanceResponseBodyResultDiagnoseItems extends $tea.Model {
  item?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiagnoseInstanceResponseBodyResult extends $tea.Model {
  createTime?: number;
  diagnoseItems?: DiagnoseInstanceResponseBodyResultDiagnoseItems[];
  instanceId?: string;
  reportId?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      diagnoseItems: 'diagnoseItems',
      instanceId: 'instanceId',
      reportId: 'reportId',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      diagnoseItems: { 'type': 'array', 'itemType': DiagnoseInstanceResponseBodyResultDiagnoseItems },
      instanceId: 'string',
      reportId: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedLogstashRestartTimeResponseBodyResult extends $tea.Model {
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EstimatedRestartTimeResponseBodyResult extends $tea.Model {
  unit?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      unit: 'unit',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unit: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDataInformationResponseBodyResultMetaInfo extends $tea.Model {
  fields?: string[];
  indices?: string[];
  mapping?: string;
  settings?: string;
  typeName?: string[];
  static names(): { [key: string]: string } {
    return {
      fields: 'fields',
      indices: 'indices',
      mapping: 'mapping',
      settings: 'settings',
      typeName: 'typeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fields: { 'type': 'array', 'itemType': 'string' },
      indices: { 'type': 'array', 'itemType': 'string' },
      mapping: 'string',
      settings: 'string',
      typeName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterDataInformationResponseBodyResult extends $tea.Model {
  connectable?: boolean;
  metaInfo?: GetClusterDataInformationResponseBodyResultMetaInfo;
  static names(): { [key: string]: string } {
    return {
      connectable: 'connectable',
      metaInfo: 'metaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectable: 'boolean',
      metaInfo: GetClusterDataInformationResponseBodyResultMetaInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElastictaskResponseBodyResultElasticExpansionTask extends $tea.Model {
  cronExpression?: string;
  elasticNodeCount?: number;
  replicaCount?: number;
  targetIndices?: string[];
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      elasticNodeCount: 'elasticNodeCount',
      replicaCount: 'replicaCount',
      targetIndices: 'targetIndices',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      elasticNodeCount: 'number',
      replicaCount: 'number',
      targetIndices: { 'type': 'array', 'itemType': 'string' },
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElastictaskResponseBodyResultElasticShrinkTask extends $tea.Model {
  cronExpression?: string;
  elasticNodeCount?: number;
  replicaCount?: number;
  targetIndices?: string[];
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      elasticNodeCount: 'elasticNodeCount',
      replicaCount: 'replicaCount',
      targetIndices: 'targetIndices',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      elasticNodeCount: 'number',
      replicaCount: 'number',
      targetIndices: { 'type': 'array', 'itemType': 'string' },
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElastictaskResponseBodyResult extends $tea.Model {
  elasticExpansionTask?: GetElastictaskResponseBodyResultElasticExpansionTask;
  elasticShrinkTask?: GetElastictaskResponseBodyResultElasticShrinkTask;
  static names(): { [key: string]: string } {
    return {
      elasticExpansionTask: 'elasticExpansionTask',
      elasticShrinkTask: 'elasticShrinkTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticExpansionTask: GetElastictaskResponseBodyResultElasticExpansionTask,
      elasticShrinkTask: GetElastictaskResponseBodyResultElasticShrinkTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmonMonitorDataResponseBodyResult extends $tea.Model {
  dps?: { [key: string]: any };
  integrity?: number;
  messageWatermark?: number;
  metric?: string;
  summary?: number;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      dps: 'dps',
      integrity: 'integrity',
      messageWatermark: 'messageWatermark',
      metric: 'metric',
      summary: 'summary',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dps: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      integrity: 'number',
      messageWatermark: 'number',
      metric: 'string',
      summary: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenStoreUsageResponseBodyResult extends $tea.Model {
  currentUsage?: number;
  lastDayUsage?: number;
  static names(): { [key: string]: string } {
    return {
      currentUsage: 'currentUsage',
      lastDayUsage: 'lastDayUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentUsage: 'number',
      lastDayUsage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultClientNodeAmountRange extends $tea.Model {
  maxAmount?: number;
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultClientNodeDiskList extends $tea.Model {
  diskType?: string;
  maxSize?: number;
  minSize?: number;
  scaleLimit?: number;
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultDataDiskList extends $tea.Model {
  diskType?: string;
  maxSize?: number;
  minSize?: number;
  scaleLimit?: number;
  valueLimitSet?: string[];
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      valueLimitSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange extends $tea.Model {
  maxAmount?: number;
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList extends $tea.Model {
  diskEncryption?: boolean;
  diskType?: string;
  maxSize?: number;
  minSize?: number;
  scaleLimit?: number;
  valueLimitSet?: string[];
  static names(): { [key: string]: string } {
    return {
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskEncryption: 'boolean',
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      valueLimitSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultElasticNodeProperties extends $tea.Model {
  amountRange?: GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange;
  diskList?: GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList[];
  spec?: string[];
  static names(): { [key: string]: string } {
    return {
      amountRange: 'amountRange',
      diskList: 'diskList',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountRange: GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange,
      diskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList },
      spec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultEsVersionsLatestList extends $tea.Model {
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

export class GetRegionConfigurationResponseBodyResultJvmConfine extends $tea.Model {
  memory?: number;
  supportEsVersions?: string[];
  supportGcs?: string[];
  static names(): { [key: string]: string } {
    return {
      memory: 'memory',
      supportEsVersions: 'supportEsVersions',
      supportGcs: 'supportGcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memory: 'number',
      supportEsVersions: { 'type': 'array', 'itemType': 'string' },
      supportGcs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultKibanaNodePropertiesAmountRange extends $tea.Model {
  maxAmount?: number;
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultKibanaNodeProperties extends $tea.Model {
  amountRange?: GetRegionConfigurationResponseBodyResultKibanaNodePropertiesAmountRange;
  spec?: string[];
  static names(): { [key: string]: string } {
    return {
      amountRange: 'amountRange',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountRange: GetRegionConfigurationResponseBodyResultKibanaNodePropertiesAmountRange,
      spec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultMasterDiskList extends $tea.Model {
  diskType?: string;
  maxSize?: number;
  minSize?: number;
  scaleLimit?: number;
  static names(): { [key: string]: string } {
    return {
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultNode extends $tea.Model {
  maxAmount?: number;
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultNodeSpecList extends $tea.Model {
  cpuCount?: number;
  disk?: number;
  diskType?: string;
  enable?: boolean;
  memorySize?: number;
  spec?: string;
  specGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      cpuCount: 'cpuCount',
      disk: 'disk',
      diskType: 'diskType',
      enable: 'enable',
      memorySize: 'memorySize',
      spec: 'spec',
      specGroupType: 'specGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCount: 'number',
      disk: 'number',
      diskType: 'string',
      enable: 'boolean',
      memorySize: 'number',
      spec: 'string',
      specGroupType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultSupportVersionsSupportVersionList extends $tea.Model {
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

export class GetRegionConfigurationResponseBodyResultSupportVersions extends $tea.Model {
  instanceCategory?: string;
  supportVersionList?: GetRegionConfigurationResponseBodyResultSupportVersionsSupportVersionList[];
  static names(): { [key: string]: string } {
    return {
      instanceCategory: 'instanceCategory',
      supportVersionList: 'supportVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCategory: 'string',
      supportVersionList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultSupportVersionsSupportVersionList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultWarmNodePropertiesAmountRange extends $tea.Model {
  maxAmount?: number;
  minAmount?: number;
  static names(): { [key: string]: string } {
    return {
      maxAmount: 'maxAmount',
      minAmount: 'minAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxAmount: 'number',
      minAmount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultWarmNodePropertiesDiskList extends $tea.Model {
  diskEncryption?: boolean;
  diskType?: string;
  maxSize?: number;
  minSize?: number;
  scaleLimit?: number;
  valueLimitSet?: string[];
  static names(): { [key: string]: string } {
    return {
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      maxSize: 'maxSize',
      minSize: 'minSize',
      scaleLimit: 'scaleLimit',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskEncryption: 'boolean',
      diskType: 'string',
      maxSize: 'number',
      minSize: 'number',
      scaleLimit: 'number',
      valueLimitSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultWarmNodeProperties extends $tea.Model {
  amountRange?: GetRegionConfigurationResponseBodyResultWarmNodePropertiesAmountRange;
  diskList?: GetRegionConfigurationResponseBodyResultWarmNodePropertiesDiskList[];
  spec?: string[];
  static names(): { [key: string]: string } {
    return {
      amountRange: 'amountRange',
      diskList: 'diskList',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amountRange: GetRegionConfigurationResponseBodyResultWarmNodePropertiesAmountRange,
      diskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultWarmNodePropertiesDiskList },
      spec: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResult extends $tea.Model {
  clientNodeAmountRange?: GetRegionConfigurationResponseBodyResultClientNodeAmountRange;
  clientNodeDiskList?: GetRegionConfigurationResponseBodyResultClientNodeDiskList[];
  clientNodeSpec?: string[];
  createUrl?: string;
  dataDiskList?: GetRegionConfigurationResponseBodyResultDataDiskList[];
  elasticNodeProperties?: GetRegionConfigurationResponseBodyResultElasticNodeProperties;
  env?: string;
  esVersions?: string[];
  esVersionsLatestList?: GetRegionConfigurationResponseBodyResultEsVersionsLatestList[];
  instanceSupportNodes?: string[];
  jvmConfine?: GetRegionConfigurationResponseBodyResultJvmConfine;
  kibanaNodeProperties?: GetRegionConfigurationResponseBodyResultKibanaNodeProperties;
  masterDiskList?: GetRegionConfigurationResponseBodyResultMasterDiskList[];
  masterSpec?: string[];
  node?: GetRegionConfigurationResponseBodyResultNode;
  nodeSpecList?: GetRegionConfigurationResponseBodyResultNodeSpecList[];
  regionId?: string;
  supportVersions?: GetRegionConfigurationResponseBodyResultSupportVersions[];
  warmNodeProperties?: GetRegionConfigurationResponseBodyResultWarmNodeProperties;
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      clientNodeAmountRange: 'clientNodeAmountRange',
      clientNodeDiskList: 'clientNodeDiskList',
      clientNodeSpec: 'clientNodeSpec',
      createUrl: 'createUrl',
      dataDiskList: 'dataDiskList',
      elasticNodeProperties: 'elasticNodeProperties',
      env: 'env',
      esVersions: 'esVersions',
      esVersionsLatestList: 'esVersionsLatestList',
      instanceSupportNodes: 'instanceSupportNodes',
      jvmConfine: 'jvmConfine',
      kibanaNodeProperties: 'kibanaNodeProperties',
      masterDiskList: 'masterDiskList',
      masterSpec: 'masterSpec',
      node: 'node',
      nodeSpecList: 'nodeSpecList',
      regionId: 'regionId',
      supportVersions: 'supportVersions',
      warmNodeProperties: 'warmNodeProperties',
      zones: 'zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientNodeAmountRange: GetRegionConfigurationResponseBodyResultClientNodeAmountRange,
      clientNodeDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultClientNodeDiskList },
      clientNodeSpec: { 'type': 'array', 'itemType': 'string' },
      createUrl: 'string',
      dataDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultDataDiskList },
      elasticNodeProperties: GetRegionConfigurationResponseBodyResultElasticNodeProperties,
      env: 'string',
      esVersions: { 'type': 'array', 'itemType': 'string' },
      esVersionsLatestList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultEsVersionsLatestList },
      instanceSupportNodes: { 'type': 'array', 'itemType': 'string' },
      jvmConfine: GetRegionConfigurationResponseBodyResultJvmConfine,
      kibanaNodeProperties: GetRegionConfigurationResponseBodyResultKibanaNodeProperties,
      masterDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultMasterDiskList },
      masterSpec: { 'type': 'array', 'itemType': 'string' },
      node: GetRegionConfigurationResponseBodyResultNode,
      nodeSpecList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultNodeSpecList },
      regionId: 'string',
      supportVersions: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultSupportVersions },
      warmNodeProperties: GetRegionConfigurationResponseBodyResultWarmNodeProperties,
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuggestShrinkableNodesResponseBodyResult extends $tea.Model {
  host?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransferableNodesResponseBodyResult extends $tea.Model {
  host?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAckClustersResponseBodyResult extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  name?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      clusterType: 'clusterType',
      name: 'name',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      name: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAckNamespacesResponseBodyResult extends $tea.Model {
  namespace?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllNodeResponseBodyResult extends $tea.Model {
  cpuPercent?: string;
  diskUsedPercent?: string;
  health?: string;
  heapPercent?: string;
  host?: string;
  loadOneM?: string;
  nodeType?: string;
  port?: number;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cpuPercent: 'cpuPercent',
      diskUsedPercent: 'diskUsedPercent',
      health: 'health',
      heapPercent: 'heapPercent',
      host: 'host',
      loadOneM: 'loadOneM',
      nodeType: 'nodeType',
      port: 'port',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuPercent: 'string',
      diskUsedPercent: 'string',
      health: 'string',
      heapPercent: 'string',
      host: 'string',
      loadOneM: 'string',
      nodeType: 'string',
      port: 'number',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlternativeSnapshotReposResponseBodyResult extends $tea.Model {
  instanceId?: string;
  repoPath?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      repoPath: 'repoPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApmResponseBodyResult extends $tea.Model {
  createdAt?: string;
  deployedReplica?: number;
  description?: string;
  instanceId?: string;
  nodeAmount?: number;
  outputES?: string;
  outputESUserName?: string;
  ownerId?: string;
  paymentType?: string;
  region?: string;
  replica?: number;
  resourceSpec?: string;
  status?: string;
  version?: string;
  vpcId?: string;
  vsArea?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      deployedReplica: 'deployedReplica',
      description: 'description',
      instanceId: 'instanceId',
      nodeAmount: 'nodeAmount',
      outputES: 'outputES',
      outputESUserName: 'outputESUserName',
      ownerId: 'ownerId',
      paymentType: 'paymentType',
      region: 'region',
      replica: 'replica',
      resourceSpec: 'resourceSpec',
      status: 'status',
      version: 'version',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      deployedReplica: 'number',
      description: 'string',
      instanceId: 'string',
      nodeAmount: 'number',
      outputES: 'string',
      outputESUserName: 'string',
      ownerId: 'string',
      paymentType: 'string',
      region: 'string',
      replica: 'number',
      resourceSpec: 'string',
      status: 'string',
      version: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEsInstanceIdsResponseBodyResult extends $tea.Model {
  description?: string;
  endpoint?: string;
  esInstanceId?: string;
  kibanaEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      endpoint: 'endpoint',
      esInstanceId: 'esInstanceId',
      kibanaEndpoint: 'kibanaEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endpoint: 'string',
      esInstanceId: 'string',
      kibanaEndpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectorsResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectorsResponseBodyResultConfigs extends $tea.Model {
  content?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectorsResponseBodyResultExtendConfigsMachines extends $tea.Model {
  agentStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'agentStatus',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectorsResponseBodyResultExtendConfigs extends $tea.Model {
  configType?: string;
  enableMonitoring?: boolean;
  groupId?: string;
  host?: string;
  hosts?: string[];
  instanceId?: string;
  instanceType?: string;
  kibanaHost?: string;
  machines?: ListCollectorsResponseBodyResultExtendConfigsMachines[];
  protocol?: string;
  successPodsCount?: string;
  totalPodsCount?: string;
  type?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      enableMonitoring: 'enableMonitoring',
      groupId: 'groupId',
      host: 'host',
      hosts: 'hosts',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      kibanaHost: 'kibanaHost',
      machines: 'machines',
      protocol: 'protocol',
      successPodsCount: 'successPodsCount',
      totalPodsCount: 'totalPodsCount',
      type: 'type',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      enableMonitoring: 'boolean',
      groupId: 'string',
      host: 'string',
      hosts: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceType: 'string',
      kibanaHost: 'string',
      machines: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResultExtendConfigsMachines },
      protocol: 'string',
      successPodsCount: 'string',
      totalPodsCount: 'string',
      type: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectorsResponseBodyResult extends $tea.Model {
  collectorPaths?: string[];
  configs?: ListCollectorsResponseBodyResultConfigs[];
  dryRun?: boolean;
  extendConfigs?: ListCollectorsResponseBodyResultExtendConfigs[];
  gmtCreatedTime?: string;
  gmtUpdateTime?: string;
  name?: string;
  ownerId?: string;
  resId?: string;
  resType?: string;
  resVersion?: string;
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      collectorPaths: 'collectorPaths',
      configs: 'configs',
      dryRun: 'dryRun',
      extendConfigs: 'extendConfigs',
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      name: 'name',
      ownerId: 'ownerId',
      resId: 'resId',
      resType: 'resType',
      resVersion: 'resVersion',
      status: 'status',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
      configs: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResultConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResultExtendConfigs },
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      name: 'string',
      ownerId: 'string',
      resId: 'string',
      resType: 'string',
      resVersion: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResultContentMeta extends $tea.Model {
  description?: string;
  managed?: boolean;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      managed: 'managed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      managed: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResultContentTemplateSettingsIndexLifecycle extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResultContentTemplateSettingsIndex extends $tea.Model {
  codec?: string;
  lifecycle?: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndexLifecycle;
  static names(): { [key: string]: string } {
    return {
      codec: 'codec',
      lifecycle: 'lifecycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codec: 'string',
      lifecycle: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndexLifecycle,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResultContentTemplateSettings extends $tea.Model {
  index?: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndex;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: ListComponentIndicesResponseBodyResultContentTemplateSettingsIndex,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResultContentTemplate extends $tea.Model {
  settings?: ListComponentIndicesResponseBodyResultContentTemplateSettings;
  static names(): { [key: string]: string } {
    return {
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: ListComponentIndicesResponseBodyResultContentTemplateSettings,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResultContent extends $tea.Model {
  meta?: ListComponentIndicesResponseBodyResultContentMeta;
  template?: ListComponentIndicesResponseBodyResultContentTemplate;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      meta: '_meta',
      template: 'template',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: ListComponentIndicesResponseBodyResultContentMeta,
      template: ListComponentIndicesResponseBodyResultContentTemplate,
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListComponentIndicesResponseBodyResult extends $tea.Model {
  composed?: string[];
  content?: ListComponentIndicesResponseBodyResultContent;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      composed: 'composed',
      content: 'content',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      composed: { 'type': 'array', 'itemType': 'string' },
      content: ListComponentIndicesResponseBodyResultContent,
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectedClustersResponseBodyResultResult extends $tea.Model {
  instances?: string;
  networkType?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
      networkType: 'networkType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: 'string',
      networkType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectedClustersResponseBodyResult extends $tea.Model {
  result?: ListConnectedClustersResponseBodyResultResult[];
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'array', 'itemType': ListConnectedClustersResponseBodyResultResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBodyHeaders extends $tea.Model {
  xManagedCount?: number;
  xManagedStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      xManagedCount: 'X-Managed-Count',
      xManagedStorageSize: 'X-Managed-StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xManagedCount: 'number',
      xManagedStorageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBodyResultIndices extends $tea.Model {
  createTime?: string;
  health?: string;
  isManaged?: boolean;
  managedStatus?: string;
  name?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      health: 'health',
      isManaged: 'isManaged',
      managedStatus: 'managedStatus',
      name: 'name',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      health: 'string',
      isManaged: 'boolean',
      managedStatus: 'string',
      name: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBodyResult extends $tea.Model {
  health?: string;
  ilmPolicyName?: string;
  indexTemplateName?: string;
  indices?: ListDataStreamsResponseBodyResultIndices[];
  managedStorageSize?: number;
  name?: string;
  totalStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      health: 'health',
      ilmPolicyName: 'ilmPolicyName',
      indexTemplateName: 'indexTemplateName',
      indices: 'indices',
      managedStorageSize: 'managedStorageSize',
      name: 'name',
      totalStorageSize: 'totalStorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      health: 'string',
      ilmPolicyName: 'string',
      indexTemplateName: 'string',
      indices: { 'type': 'array', 'itemType': ListDataStreamsResponseBodyResultIndices },
      managedStorageSize: 'number',
      name: 'string',
      totalStorageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataTasksResponseBodyResultSinkCluster extends $tea.Model {
  dataSourceType?: string;
  endpoint?: string;
  index?: string;
  type?: string;
  vpcId?: string;
  vpcInstanceId?: string;
  vpcInstancePort?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'dataSourceType',
      endpoint: 'endpoint',
      index: 'index',
      type: 'type',
      vpcId: 'vpcId',
      vpcInstanceId: 'vpcInstanceId',
      vpcInstancePort: 'vpcInstancePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      endpoint: 'string',
      index: 'string',
      type: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
      vpcInstancePort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataTasksResponseBodyResultSourceCluster extends $tea.Model {
  dataSourceType?: string;
  index?: string;
  mapping?: string;
  routing?: string;
  settings?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'dataSourceType',
      index: 'index',
      mapping: 'mapping',
      routing: 'routing',
      settings: 'settings',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      index: 'string',
      mapping: 'string',
      routing: 'string',
      settings: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataTasksResponseBodyResult extends $tea.Model {
  createTime?: string;
  sinkCluster?: ListDataTasksResponseBodyResultSinkCluster;
  sourceCluster?: ListDataTasksResponseBodyResultSourceCluster;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      sinkCluster: 'sinkCluster',
      sourceCluster: 'sourceCluster',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      sinkCluster: ListDataTasksResponseBodyResultSinkCluster,
      sourceCluster: ListDataTasksResponseBodyResultSourceCluster,
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultCollectorConfigurationsResponseBodyResult extends $tea.Model {
  content?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeprecatedTemplatesResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeprecatedTemplatesResponseBodyResultTemplate extends $tea.Model {
  aliases?: string;
  mappings?: string;
  settings?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      mappings: 'mappings',
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: 'string',
      mappings: 'string',
      settings: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeprecatedTemplatesResponseBodyResult extends $tea.Model {
  dataStream?: boolean;
  indexPatterns?: string[];
  indexTemplate?: string;
  order?: number;
  template?: ListDeprecatedTemplatesResponseBodyResultTemplate;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dataStream: 'dataStream',
      indexPatterns: 'indexPatterns',
      indexTemplate: 'indexTemplate',
      order: 'order',
      template: 'template',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStream: 'boolean',
      indexPatterns: { 'type': 'array', 'itemType': 'string' },
      indexTemplate: 'string',
      order: 'number',
      template: ListDeprecatedTemplatesResponseBodyResultTemplate,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail extends $tea.Model {
  desc?: string;
  name?: string;
  result?: string;
  suggest?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'desc',
      name: 'name',
      result: 'result',
      suggest: 'suggest',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      name: 'string',
      result: 'string',
      suggest: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponseBodyResultDiagnoseItems extends $tea.Model {
  detail?: ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail;
  health?: string;
  item?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      health: 'health',
      item: 'item',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail,
      health: 'string',
      item: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponseBodyResult extends $tea.Model {
  createTime?: number;
  diagnoseItems?: ListDiagnoseReportResponseBodyResultDiagnoseItems[];
  health?: string;
  instanceId?: string;
  reportId?: string;
  state?: string;
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      diagnoseItems: 'diagnoseItems',
      health: 'health',
      instanceId: 'instanceId',
      reportId: 'reportId',
      state: 'state',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      diagnoseItems: { 'type': 'array', 'itemType': ListDiagnoseReportResponseBodyResultDiagnoseItems },
      health: 'string',
      instanceId: 'string',
      reportId: 'string',
      state: 'string',
      trigger: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportIdsResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictInformationResponseBodyResultOssObject extends $tea.Model {
  bucketName?: string;
  etag?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      etag: 'etag',
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      etag: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictInformationResponseBodyResult extends $tea.Model {
  fileSize?: number;
  ossObject?: ListDictInformationResponseBodyResultOssObject;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      ossObject: 'ossObject',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      ossObject: ListDictInformationResponseBodyResultOssObject,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictsResponseBodyResult extends $tea.Model {
  downloadUrl?: string;
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResultCollectorsConfigs extends $tea.Model {
  content?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResultCollectorsExtendConfigsMachines extends $tea.Model {
  agentStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'agentStatus',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResultCollectorsExtendConfigs extends $tea.Model {
  configType?: string;
  enableMonitoring?: boolean;
  groupId?: string;
  hosts?: string[];
  instanceId?: string;
  instanceType?: string;
  machines?: ListEcsInstancesResponseBodyResultCollectorsExtendConfigsMachines[];
  protocol?: string;
  type?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      enableMonitoring: 'enableMonitoring',
      groupId: 'groupId',
      hosts: 'hosts',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      machines: 'machines',
      protocol: 'protocol',
      type: 'type',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      enableMonitoring: 'boolean',
      groupId: 'string',
      hosts: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceType: 'string',
      machines: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectorsExtendConfigsMachines },
      protocol: 'string',
      type: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResultCollectors extends $tea.Model {
  collectorPaths?: string[];
  configs?: ListEcsInstancesResponseBodyResultCollectorsConfigs[];
  dryRun?: boolean;
  extendConfigs?: ListEcsInstancesResponseBodyResultCollectorsExtendConfigs[];
  gmtCreatedTime?: string;
  gmtUpdateTime?: string;
  name?: string;
  ownerId?: string;
  resId?: string;
  resType?: string;
  resVersion?: string;
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      collectorPaths: 'collectorPaths',
      configs: 'configs',
      dryRun: 'dryRun',
      extendConfigs: 'extendConfigs',
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      name: 'name',
      ownerId: 'ownerId',
      resId: 'resId',
      resType: 'resType',
      resVersion: 'resVersion',
      status: 'status',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
      configs: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectorsConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectorsExtendConfigs },
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      name: 'string',
      ownerId: 'string',
      resId: 'string',
      resType: 'string',
      resVersion: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResultIpAddress extends $tea.Model {
  host?: string;
  ipType?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      ipType: 'ipType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      ipType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResult extends $tea.Model {
  cloudAssistantStatus?: string;
  collectors?: ListEcsInstancesResponseBodyResultCollectors[];
  ecsInstanceId?: string;
  ecsInstanceName?: string;
  ipAddress?: ListEcsInstancesResponseBodyResultIpAddress[];
  osType?: string;
  status?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAssistantStatus: 'cloudAssistantStatus',
      collectors: 'collectors',
      ecsInstanceId: 'ecsInstanceId',
      ecsInstanceName: 'ecsInstanceName',
      ipAddress: 'ipAddress',
      osType: 'osType',
      status: 'status',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssistantStatus: 'string',
      collectors: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectors },
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      ipAddress: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultIpAddress },
      osType: 'string',
      status: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExtendfilesResponseBodyResult extends $tea.Model {
  filePath?: string;
  fileSize?: number;
  name?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'filePath',
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListILMPoliciesResponseBodyResult extends $tea.Model {
  name?: string;
  phases?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      phases: 'phases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      phases: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexTemplatesResponseBodyResultTemplate extends $tea.Model {
  aliases?: string;
  mappings?: string;
  settings?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      mappings: 'mappings',
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: 'string',
      mappings: 'string',
      settings: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexTemplatesResponseBodyResult extends $tea.Model {
  dataStream?: boolean;
  ilmPolicy?: string;
  indexPatterns?: string[];
  indexTemplate?: string;
  priority?: number;
  template?: ListIndexTemplatesResponseBodyResultTemplate;
  static names(): { [key: string]: string } {
    return {
      dataStream: 'dataStream',
      ilmPolicy: 'ilmPolicy',
      indexPatterns: 'indexPatterns',
      indexTemplate: 'indexTemplate',
      priority: 'priority',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStream: 'boolean',
      ilmPolicy: 'string',
      indexPatterns: { 'type': 'array', 'itemType': 'string' },
      indexTemplate: 'string',
      priority: 'number',
      template: ListIndexTemplatesResponseBodyResultTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultClientNodeConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultElasticDataNodeConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultKibanaConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultMasterConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultNetworkConfig extends $tea.Model {
  type?: string;
  vpcId?: string;
  vsArea?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultNodeSpec extends $tea.Model {
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResult extends $tea.Model {
  advancedDedicateMaster?: boolean;
  clientNodeConfiguration?: ListInstanceResponseBodyResultClientNodeConfiguration;
  createdAt?: string;
  dedicateMaster?: boolean;
  description?: string;
  elasticDataNodeConfiguration?: ListInstanceResponseBodyResultElasticDataNodeConfiguration;
  esVersion?: string;
  extendConfigs?: { [key: string]: any }[];
  instanceId?: string;
  isNewDeployment?: string;
  kibanaConfiguration?: ListInstanceResponseBodyResultKibanaConfiguration;
  masterConfiguration?: ListInstanceResponseBodyResultMasterConfiguration;
  networkConfig?: ListInstanceResponseBodyResultNetworkConfig;
  nodeAmount?: number;
  nodeSpec?: ListInstanceResponseBodyResultNodeSpec;
  paymentType?: string;
  postpaidServiceStatus?: string;
  resourceGroupId?: string;
  serviceVpc?: boolean;
  status?: string;
  tags?: ListInstanceResponseBodyResultTags[];
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      advancedDedicateMaster: 'advancedDedicateMaster',
      clientNodeConfiguration: 'clientNodeConfiguration',
      createdAt: 'createdAt',
      dedicateMaster: 'dedicateMaster',
      description: 'description',
      elasticDataNodeConfiguration: 'elasticDataNodeConfiguration',
      esVersion: 'esVersion',
      extendConfigs: 'extendConfigs',
      instanceId: 'instanceId',
      isNewDeployment: 'isNewDeployment',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      postpaidServiceStatus: 'postpaidServiceStatus',
      resourceGroupId: 'resourceGroupId',
      serviceVpc: 'serviceVpc',
      status: 'status',
      tags: 'tags',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDedicateMaster: 'boolean',
      clientNodeConfiguration: ListInstanceResponseBodyResultClientNodeConfiguration,
      createdAt: 'string',
      dedicateMaster: 'boolean',
      description: 'string',
      elasticDataNodeConfiguration: ListInstanceResponseBodyResultElasticDataNodeConfiguration,
      esVersion: 'string',
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceId: 'string',
      isNewDeployment: 'string',
      kibanaConfiguration: ListInstanceResponseBodyResultKibanaConfiguration,
      masterConfiguration: ListInstanceResponseBodyResultMasterConfiguration,
      networkConfig: ListInstanceResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: ListInstanceResponseBodyResultNodeSpec,
      paymentType: 'string',
      postpaidServiceStatus: 'string',
      resourceGroupId: 'string',
      serviceVpc: 'boolean',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListInstanceResponseBodyResultTags },
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIndicesResponseBodyHeaders extends $tea.Model {
  xManagedCount?: number;
  xManagedStorageSize?: number;
  xOSSCount?: number;
  xOSSStorageSize?: number;
  static names(): { [key: string]: string } {
    return {
      xManagedCount: 'X-Managed-Count',
      xManagedStorageSize: 'X-Managed-StorageSize',
      xOSSCount: 'X-OSS-Count',
      xOSSStorageSize: 'X-OSS-StorageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xManagedCount: 'number',
      xManagedStorageSize: 'number',
      xOSSCount: 'number',
      xOSSStorageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIndicesResponseBodyResult extends $tea.Model {
  createTime?: string;
  health?: string;
  ilmExplain?: string;
  isManaged?: string;
  managedStatus?: string;
  name?: string;
  phase?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      health: 'health',
      ilmExplain: 'ilmExplain',
      isManaged: 'isManaged',
      managedStatus: 'managedStatus',
      name: 'name',
      phase: 'phase',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      health: 'string',
      ilmExplain: 'string',
      isManaged: 'string',
      managedStatus: 'string',
      name: 'string',
      phase: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKibanaPluginsResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKibanaPluginsResponseBodyResult extends $tea.Model {
  description?: string;
  name?: string;
  source?: string;
  specificationUrl?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      source: 'source',
      specificationUrl: 'specificationUrl',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      source: 'string',
      specificationUrl: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponseBodyResultTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponseBodyResultNetworkConfig extends $tea.Model {
  type?: string;
  vpcId?: string;
  vsArea?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponseBodyResultNodeSpec extends $tea.Model {
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponseBodyResult extends $tea.Model {
  tags?: ListLogstashResponseBodyResultTags[];
  createdAt?: string;
  description?: string;
  instanceId?: string;
  networkConfig?: ListLogstashResponseBodyResultNetworkConfig;
  nodeAmount?: number;
  nodeSpec?: ListLogstashResponseBodyResultNodeSpec;
  paymentType?: string;
  status?: string;
  updatedAt?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
      createdAt: 'createdAt',
      description: 'description',
      instanceId: 'instanceId',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      status: 'status',
      updatedAt: 'updatedAt',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': ListLogstashResponseBodyResultTags },
      createdAt: 'string',
      description: 'string',
      instanceId: 'string',
      networkConfig: ListLogstashResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: ListLogstashResponseBodyResultNodeSpec,
      paymentType: 'string',
      status: 'string',
      updatedAt: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashLogResponseBodyResult extends $tea.Model {
  content?: string;
  host?: string;
  instanceId?: string;
  level?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      host: 'host',
      instanceId: 'instanceId',
      level: 'level',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      host: 'string',
      instanceId: 'string',
      level: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashPluginsResponseBodyResult extends $tea.Model {
  description?: string;
  name?: string;
  source?: string;
  specificationUrl?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      source: 'source',
      specificationUrl: 'specificationUrl',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      source: 'string',
      specificationUrl: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyResultIpAddress extends $tea.Model {
  host?: string;
  ipType?: string;
  static names(): { [key: string]: string } {
    return {
      host: 'host',
      ipType: 'ipType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      host: 'string',
      ipType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyResultTags extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tagKey',
      tagValue: 'tagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyResult extends $tea.Model {
  agentStatus?: string;
  cloudAssistantStatus?: string;
  ecsInstanceId?: string;
  ecsInstanceName?: string;
  ipAddress?: ListNodesResponseBodyResultIpAddress[];
  osType?: string;
  status?: string;
  tags?: ListNodesResponseBodyResultTags[];
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'agentStatus',
      cloudAssistantStatus: 'cloudAssistantStatus',
      ecsInstanceId: 'ecsInstanceId',
      ecsInstanceName: 'ecsInstanceName',
      ipAddress: 'ipAddress',
      osType: 'osType',
      status: 'status',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      cloudAssistantStatus: 'string',
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      ipAddress: { 'type': 'array', 'itemType': ListNodesResponseBodyResultIpAddress },
      osType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListNodesResponseBodyResultTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineResponseBodyResult extends $tea.Model {
  gmtCreatedTime?: string;
  gmtUpdateTime?: string;
  pipelineId?: string;
  pipelineStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      pipelineId: 'pipelineId',
      pipelineStatus: 'pipelineStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      pipelineId: 'string',
      pipelineStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineIdsResponseBodyResult extends $tea.Model {
  available?: boolean;
  code?: string;
  message?: string;
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'available',
      code: 'code',
      message: 'message',
      pipelineId: 'pipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      code: 'string',
      message: 'string',
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsResponseBodyResult extends $tea.Model {
  description?: string;
  name?: string;
  source?: string;
  specificationUrl?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      source: 'source',
      specificationUrl: 'specificationUrl',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      source: 'string',
      specificationUrl: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchLogResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchLogResponseBodyResult extends $tea.Model {
  content?: string;
  contentCollection?: { [key: string]: any };
  host?: string;
  instanceId?: string;
  level?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      contentCollection: 'contentCollection',
      host: 'host',
      instanceId: 'instanceId',
      level: 'level',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentCollection: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      host: 'string',
      instanceId: 'string',
      level: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShardRecoveriesResponseBodyResult extends $tea.Model {
  bytesPercent?: string;
  bytesTotal?: number;
  filesPercent?: string;
  filesTotal?: number;
  index?: string;
  sourceHost?: string;
  sourceNode?: string;
  stage?: string;
  targetHost?: string;
  targetNode?: string;
  translogOps?: number;
  translogOpsPercent?: string;
  static names(): { [key: string]: string } {
    return {
      bytesPercent: 'bytesPercent',
      bytesTotal: 'bytesTotal',
      filesPercent: 'filesPercent',
      filesTotal: 'filesTotal',
      index: 'index',
      sourceHost: 'sourceHost',
      sourceNode: 'sourceNode',
      stage: 'stage',
      targetHost: 'targetHost',
      targetNode: 'targetNode',
      translogOps: 'translogOps',
      translogOpsPercent: 'translogOpsPercent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bytesPercent: 'string',
      bytesTotal: 'number',
      filesPercent: 'string',
      filesTotal: 'number',
      index: 'string',
      sourceHost: 'string',
      sourceNode: 'string',
      stage: 'string',
      targetHost: 'string',
      targetNode: 'string',
      translogOps: 'number',
      translogOpsPercent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotReposByInstanceIdResponseBodyResult extends $tea.Model {
  instanceId?: string;
  repoPath?: string;
  snapWarehouse?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      repoPath: 'repoPath',
      snapWarehouse: 'snapWarehouse',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      repoPath: 'string',
      snapWarehouse: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyHeaders extends $tea.Model {
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResourcesTagResource extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  tagResource?: ListTagResourcesResponseBodyTagResourcesTagResource[];
  static names(): { [key: string]: string } {
    return {
      tagResource: 'TagResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagResource: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResourcesTagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyResult extends $tea.Model {
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBodyResult extends $tea.Model {
  connectionStatus?: string;
  createTime?: string;
  endpointBusinessStatus?: string;
  endpointDomain?: string;
  endpointId?: string;
  endpointName?: string;
  endpointStatus?: string;
  serviceId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      connectionStatus: 'connectionStatus',
      createTime: 'createTime',
      endpointBusinessStatus: 'endpointBusinessStatus',
      endpointDomain: 'endpointDomain',
      endpointId: 'endpointId',
      endpointName: 'endpointName',
      endpointStatus: 'endpointStatus',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionStatus: 'string',
      createTime: 'string',
      endpointBusinessStatus: 'string',
      endpointDomain: 'string',
      endpointId: 'string',
      endpointName: 'string',
      endpointStatus: 'string',
      serviceId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElastictaskResponseBodyResultElasticExpansionTask extends $tea.Model {
  cronExpression?: string;
  elasticNodeCount?: number;
  replicaCount?: number;
  targetIndices?: string[];
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      elasticNodeCount: 'elasticNodeCount',
      replicaCount: 'replicaCount',
      targetIndices: 'targetIndices',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      elasticNodeCount: 'number',
      replicaCount: 'number',
      targetIndices: { 'type': 'array', 'itemType': 'string' },
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElastictaskResponseBodyResultElasticShrinkTask extends $tea.Model {
  cronExpression?: string;
  elasticNodeCount?: number;
  replicaCount?: number;
  targetIndices?: string[];
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      elasticNodeCount: 'elasticNodeCount',
      replicaCount: 'replicaCount',
      targetIndices: 'targetIndices',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      elasticNodeCount: 'number',
      replicaCount: 'number',
      targetIndices: { 'type': 'array', 'itemType': 'string' },
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElastictaskResponseBodyResult extends $tea.Model {
  elasticExpansionTask?: ModifyElastictaskResponseBodyResultElasticExpansionTask;
  elasticShrinkTask?: ModifyElastictaskResponseBodyResultElasticShrinkTask;
  static names(): { [key: string]: string } {
    return {
      elasticExpansionTask: 'elasticExpansionTask',
      elasticShrinkTask: 'elasticShrinkTask',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticExpansionTask: ModifyElastictaskResponseBodyResultElasticExpansionTask,
      elasticShrinkTask: ModifyElastictaskResponseBodyResultElasticShrinkTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWhiteIpsRequestWhiteIpGroup extends $tea.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResultDictList extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResultKibanaConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResultMasterConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResultNetworkConfig extends $tea.Model {
  type?: string;
  vpcId?: string;
  vsArea?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResultNodeSpec extends $tea.Model {
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResultSynonymsDicts extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResult extends $tea.Model {
  createdAt?: string;
  description?: string;
  dictList?: MoveResourceGroupResponseBodyResultDictList[];
  domain?: string;
  esVersion?: string;
  instanceId?: string;
  kibanaConfiguration?: MoveResourceGroupResponseBodyResultKibanaConfiguration;
  kibanaDomain?: string;
  kibanaPort?: number;
  masterConfiguration?: MoveResourceGroupResponseBodyResultMasterConfiguration;
  networkConfig?: MoveResourceGroupResponseBodyResultNetworkConfig;
  nodeAmount?: number;
  nodeSpec?: MoveResourceGroupResponseBodyResultNodeSpec;
  paymentType?: string;
  publicDomain?: string;
  publicPort?: number;
  status?: string;
  synonymsDicts?: MoveResourceGroupResponseBodyResultSynonymsDicts[];
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      dictList: 'dictList',
      domain: 'domain',
      esVersion: 'esVersion',
      instanceId: 'instanceId',
      kibanaConfiguration: 'kibanaConfiguration',
      kibanaDomain: 'kibanaDomain',
      kibanaPort: 'kibanaPort',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      publicDomain: 'publicDomain',
      publicPort: 'publicPort',
      status: 'status',
      synonymsDicts: 'synonymsDicts',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      dictList: { 'type': 'array', 'itemType': MoveResourceGroupResponseBodyResultDictList },
      domain: 'string',
      esVersion: 'string',
      instanceId: 'string',
      kibanaConfiguration: MoveResourceGroupResponseBodyResultKibanaConfiguration,
      kibanaDomain: 'string',
      kibanaPort: 'number',
      masterConfiguration: MoveResourceGroupResponseBodyResultMasterConfiguration,
      networkConfig: MoveResourceGroupResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: MoveResourceGroupResponseBodyResultNodeSpec,
      paymentType: 'string',
      publicDomain: 'string',
      publicPort: 'number',
      status: 'string',
      synonymsDicts: { 'type': 'array', 'itemType': MoveResourceGroupResponseBodyResultSynonymsDicts },
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecommendTemplatesResponseBodyResult extends $tea.Model {
  content?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResultDictList extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResultKibanaConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResultMasterConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResultNetworkConfig extends $tea.Model {
  type?: string;
  vpcId?: string;
  vsArea?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResultNodeSpec extends $tea.Model {
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResultSynonymsDicts extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResult extends $tea.Model {
  createdAt?: string;
  description?: string;
  dictList?: RestartInstanceResponseBodyResultDictList[];
  domain?: string;
  esVersion?: string;
  instanceId?: string;
  kibanaConfiguration?: RestartInstanceResponseBodyResultKibanaConfiguration;
  kibanaDomain?: string;
  kibanaPort?: number;
  masterConfiguration?: RestartInstanceResponseBodyResultMasterConfiguration;
  networkConfig?: RestartInstanceResponseBodyResultNetworkConfig;
  nodeAmount?: number;
  nodeSpec?: RestartInstanceResponseBodyResultNodeSpec;
  paymentType?: string;
  publicDomain?: string;
  publicPort?: number;
  status?: string;
  synonymsDicts?: RestartInstanceResponseBodyResultSynonymsDicts[];
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      dictList: 'dictList',
      domain: 'domain',
      esVersion: 'esVersion',
      instanceId: 'instanceId',
      kibanaConfiguration: 'kibanaConfiguration',
      kibanaDomain: 'kibanaDomain',
      kibanaPort: 'kibanaPort',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      publicDomain: 'publicDomain',
      publicPort: 'publicPort',
      status: 'status',
      synonymsDicts: 'synonymsDicts',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      dictList: { 'type': 'array', 'itemType': RestartInstanceResponseBodyResultDictList },
      domain: 'string',
      esVersion: 'string',
      instanceId: 'string',
      kibanaConfiguration: RestartInstanceResponseBodyResultKibanaConfiguration,
      kibanaDomain: 'string',
      kibanaPort: 'number',
      masterConfiguration: RestartInstanceResponseBodyResultMasterConfiguration,
      networkConfig: RestartInstanceResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: RestartInstanceResponseBodyResultNodeSpec,
      paymentType: 'string',
      publicDomain: 'string',
      publicPort: 'number',
      status: 'string',
      synonymsDicts: { 'type': 'array', 'itemType': RestartInstanceResponseBodyResultSynonymsDicts },
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliwsDictResponseBodyResult extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBlackIpsResponseBodyResult extends $tea.Model {
  esIPBlacklist?: string[];
  static names(): { [key: string]: string } {
    return {
      esIPBlacklist: 'esIPBlacklist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esIPBlacklist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorResponseBodyResultConfigs extends $tea.Model {
  content?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorResponseBodyResultExtendConfigsMachines extends $tea.Model {
  agentStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'agentStatus',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorResponseBodyResultExtendConfigs extends $tea.Model {
  configType?: string;
  enableMonitoring?: boolean;
  groupId?: string;
  host?: string;
  hosts?: string[];
  instanceId?: string;
  instanceType?: string;
  kibanaHost?: string;
  machines?: UpdateCollectorResponseBodyResultExtendConfigsMachines[];
  protocol?: string;
  successPodsCount?: string;
  totalPodsCount?: string;
  type?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      enableMonitoring: 'enableMonitoring',
      groupId: 'groupId',
      host: 'host',
      hosts: 'hosts',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      kibanaHost: 'kibanaHost',
      machines: 'machines',
      protocol: 'protocol',
      successPodsCount: 'successPodsCount',
      totalPodsCount: 'totalPodsCount',
      type: 'type',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      enableMonitoring: 'boolean',
      groupId: 'string',
      host: 'string',
      hosts: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceType: 'string',
      kibanaHost: 'string',
      machines: { 'type': 'array', 'itemType': UpdateCollectorResponseBodyResultExtendConfigsMachines },
      protocol: 'string',
      successPodsCount: 'string',
      totalPodsCount: 'string',
      type: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorResponseBodyResult extends $tea.Model {
  collectorPaths?: string[];
  configs?: UpdateCollectorResponseBodyResultConfigs[];
  dryRun?: boolean;
  extendConfigs?: UpdateCollectorResponseBodyResultExtendConfigs[];
  gmtCreatedTime?: string;
  gmtUpdateTime?: string;
  name?: string;
  ownerId?: string;
  resId?: string;
  resType?: string;
  resVersion?: string;
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      collectorPaths: 'collectorPaths',
      configs: 'configs',
      dryRun: 'dryRun',
      extendConfigs: 'extendConfigs',
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      name: 'name',
      ownerId: 'ownerId',
      resId: 'resId',
      resType: 'resType',
      resVersion: 'resVersion',
      status: 'status',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
      configs: { 'type': 'array', 'itemType': UpdateCollectorResponseBodyResultConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': UpdateCollectorResponseBodyResultExtendConfigs },
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      name: 'string',
      ownerId: 'string',
      resId: 'string',
      resType: 'string',
      resVersion: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorNameResponseBodyResultConfigs extends $tea.Model {
  content?: string;
  fileName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      fileName: 'fileName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorNameResponseBodyResultExtendConfigsMachines extends $tea.Model {
  agentStatus?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'agentStatus',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorNameResponseBodyResultExtendConfigs extends $tea.Model {
  configType?: string;
  enableMonitoring?: boolean;
  groupId?: string;
  host?: string;
  hosts?: string[];
  instanceId?: string;
  instanceType?: string;
  kibanaHost?: string;
  machines?: UpdateCollectorNameResponseBodyResultExtendConfigsMachines[];
  protocol?: string;
  successPodsCount?: string;
  totalPodsCount?: string;
  type?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'configType',
      enableMonitoring: 'enableMonitoring',
      groupId: 'groupId',
      host: 'host',
      hosts: 'hosts',
      instanceId: 'instanceId',
      instanceType: 'instanceType',
      kibanaHost: 'kibanaHost',
      machines: 'machines',
      protocol: 'protocol',
      successPodsCount: 'successPodsCount',
      totalPodsCount: 'totalPodsCount',
      type: 'type',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      enableMonitoring: 'boolean',
      groupId: 'string',
      host: 'string',
      hosts: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      instanceType: 'string',
      kibanaHost: 'string',
      machines: { 'type': 'array', 'itemType': UpdateCollectorNameResponseBodyResultExtendConfigsMachines },
      protocol: 'string',
      successPodsCount: 'string',
      totalPodsCount: 'string',
      type: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorNameResponseBodyResult extends $tea.Model {
  collectorPaths?: string[];
  configs?: UpdateCollectorNameResponseBodyResultConfigs[];
  dryRun?: boolean;
  extendConfigs?: UpdateCollectorNameResponseBodyResultExtendConfigs[];
  gmtCreatedTime?: string;
  gmtUpdateTime?: string;
  name?: string;
  ownerId?: string;
  resId?: string;
  resType?: string;
  resVersion?: string;
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      collectorPaths: 'collectorPaths',
      configs: 'configs',
      dryRun: 'dryRun',
      extendConfigs: 'extendConfigs',
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      name: 'name',
      ownerId: 'ownerId',
      resId: 'resId',
      resType: 'resType',
      resVersion: 'resVersion',
      status: 'status',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
      configs: { 'type': 'array', 'itemType': UpdateCollectorNameResponseBodyResultConfigs },
      dryRun: 'boolean',
      extendConfigs: { 'type': 'array', 'itemType': UpdateCollectorNameResponseBodyResultExtendConfigs },
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      name: 'string',
      ownerId: 'string',
      resId: 'string',
      resType: 'string',
      resVersion: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateComponentIndexRequestTemplate extends $tea.Model {
  aliases?: { [key: string]: any };
  mappings?: { [key: string]: any };
  settings?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      mappings: 'mappings',
      settings: 'settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mappings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      settings: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDescriptionResponseBodyResult extends $tea.Model {
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDictResponseBodyResult extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExtendfilesResponseBodyResult extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateHotIkDictsResponseBodyResult extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultDictList extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultKibanaConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultMasterConfiguration extends $tea.Model {
  amount?: number;
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultNetworkConfig extends $tea.Model {
  type?: string;
  vpcId?: string;
  vsArea?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      vpcId: 'string',
      vsArea: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultNodeSpec extends $tea.Model {
  disk?: number;
  diskType?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      disk: 'disk',
      diskType: 'diskType',
      spec: 'spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disk: 'number',
      diskType: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultSynonymsDicts extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResult extends $tea.Model {
  createdAt?: string;
  description?: string;
  dictList?: UpdateInstanceResponseBodyResultDictList[];
  domain?: string;
  esVersion?: string;
  instanceId?: string;
  kibanaConfiguration?: UpdateInstanceResponseBodyResultKibanaConfiguration;
  kibanaDomain?: string;
  kibanaPort?: number;
  masterConfiguration?: UpdateInstanceResponseBodyResultMasterConfiguration;
  networkConfig?: UpdateInstanceResponseBodyResultNetworkConfig;
  nodeAmount?: number;
  nodeSpec?: UpdateInstanceResponseBodyResultNodeSpec;
  paymentType?: string;
  publicDomain?: string;
  publicPort?: number;
  status?: string;
  synonymsDicts?: UpdateInstanceResponseBodyResultSynonymsDicts[];
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      description: 'description',
      dictList: 'dictList',
      domain: 'domain',
      esVersion: 'esVersion',
      instanceId: 'instanceId',
      kibanaConfiguration: 'kibanaConfiguration',
      kibanaDomain: 'kibanaDomain',
      kibanaPort: 'kibanaPort',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeAmount: 'nodeAmount',
      nodeSpec: 'nodeSpec',
      paymentType: 'paymentType',
      publicDomain: 'publicDomain',
      publicPort: 'publicPort',
      status: 'status',
      synonymsDicts: 'synonymsDicts',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      dictList: { 'type': 'array', 'itemType': UpdateInstanceResponseBodyResultDictList },
      domain: 'string',
      esVersion: 'string',
      instanceId: 'string',
      kibanaConfiguration: UpdateInstanceResponseBodyResultKibanaConfiguration,
      kibanaDomain: 'string',
      kibanaPort: 'number',
      masterConfiguration: UpdateInstanceResponseBodyResultMasterConfiguration,
      networkConfig: UpdateInstanceResponseBodyResultNetworkConfig,
      nodeAmount: 'number',
      nodeSpec: UpdateInstanceResponseBodyResultNodeSpec,
      paymentType: 'string',
      publicDomain: 'string',
      publicPort: 'number',
      status: 'string',
      synonymsDicts: { 'type': 'array', 'itemType': UpdateInstanceResponseBodyResultSynonymsDicts },
      updatedAt: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKibanaWhiteIpsResponseBodyResult extends $tea.Model {
  kibanaIPWhitelist?: string[];
  kibanaPrivateIPWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      kibanaIPWhitelist: 'kibanaIPWhitelist',
      kibanaPrivateIPWhitelist: 'kibanaPrivateIPWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kibanaIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaPrivateIPWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLogstashDescriptionResponseBodyResult extends $tea.Model {
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePrivateNetworkWhiteIpsResponseBodyResult extends $tea.Model {
  privateNetworkIpWhiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      privateNetworkIpWhiteList: 'privateNetworkIpWhiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateNetworkIpWhiteList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicNetworkResponseBodyResult extends $tea.Model {
  enablePublic?: boolean;
  static names(): { [key: string]: string } {
    return {
      enablePublic: 'enablePublic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enablePublic: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicWhiteIpsResponseBodyResult extends $tea.Model {
  publicIpWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      publicIpWhitelist: 'publicIpWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicIpWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSnapshotSettingResponseBodyResult extends $tea.Model {
  enable?: boolean;
  quartzRegex?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      quartzRegex: 'quartzRegex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      quartzRegex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSynonymsDictsResponseBodyResult extends $tea.Model {
  fileSize?: number;
  name?: string;
  sourceType?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      name: 'name',
      sourceType: 'sourceType',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      name: 'string',
      sourceType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhiteIpsRequestWhiteIpGroup extends $tea.Model {
  groupName?: string;
  ips?: string[];
  whiteIpType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
      whiteIpType: 'whiteIpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      whiteIpType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList extends $tea.Model {
  groupName?: string;
  ips?: string[];
  whiteIpType?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
      whiteIpType: 'whiteIpType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
      whiteIpType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhiteIpsResponseBodyResultNetworkConfig extends $tea.Model {
  whiteIpGroupList?: UpdateWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList[];
  static names(): { [key: string]: string } {
    return {
      whiteIpGroupList: 'whiteIpGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteIpGroupList: { 'type': 'array', 'itemType': UpdateWhiteIpsResponseBodyResultNetworkConfigWhiteIpGroupList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWhiteIpsResponseBodyResult extends $tea.Model {
  esIPWhitelist?: string[];
  networkConfig?: UpdateWhiteIpsResponseBodyResultNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      esIPWhitelist: 'esIPWhitelist',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      networkConfig: UpdateWhiteIpsResponseBodyResultNetworkConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeEngineVersionResponseBodyResultValidateResult extends $tea.Model {
  errorCode?: string;
  errorMsg?: string;
  errorType?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      errorType: 'errorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      errorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeEngineVersionResponseBodyResult extends $tea.Model {
  status?: string;
  validateResult?: UpgradeEngineVersionResponseBodyResultValidateResult;
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      validateResult: 'validateResult',
      validateType: 'validateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      validateResult: UpgradeEngineVersionResponseBodyResultValidateResult,
      validateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyResult extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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
    this._endpoint = this.getEndpoint("elasticsearch", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async activateZones(InstanceId: string, request: ActivateZonesRequest): Promise<ActivateZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.activateZonesWithOptions(InstanceId, request, headers, runtime);
  }

  async activateZonesWithOptions(InstanceId: string, request: ActivateZonesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ActivateZonesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ActivateZonesResponse>(await this.doROARequest("ActivateZones", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/recover-zones`, "json", req, runtime), new ActivateZonesResponse({}));
  }

  async addConnectableCluster(InstanceId: string, request: AddConnectableClusterRequest): Promise<AddConnectableClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addConnectableClusterWithOptions(InstanceId, request, headers, runtime);
  }

  async addConnectableClusterWithOptions(InstanceId: string, request: AddConnectableClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddConnectableClusterResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<AddConnectableClusterResponse>(await this.doROARequest("AddConnectableCluster", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/connected-clusters`, "json", req, runtime), new AddConnectableClusterResponse({}));
  }

  async addSnapshotRepo(InstanceId: string): Promise<AddSnapshotRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addSnapshotRepoWithOptions(InstanceId, headers, runtime);
  }

  async addSnapshotRepoWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddSnapshotRepoResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<AddSnapshotRepoResponse>(await this.doROARequest("AddSnapshotRepo", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/snapshot-repos`, "json", req, runtime), new AddSnapshotRepoResponse({}));
  }

  async cancelDeletion(InstanceId: string, request: CancelDeletionRequest): Promise<CancelDeletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelDeletionWithOptions(InstanceId, request, headers, runtime);
  }

  async cancelDeletionWithOptions(InstanceId: string, request: CancelDeletionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelDeletionResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CancelDeletionResponse>(await this.doROARequest("CancelDeletion", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/cancel-deletion`, "json", req, runtime), new CancelDeletionResponse({}));
  }

  async cancelLogstashDeletion(InstanceId: string, request: CancelLogstashDeletionRequest): Promise<CancelLogstashDeletionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelLogstashDeletionWithOptions(InstanceId, request, headers, runtime);
  }

  async cancelLogstashDeletionWithOptions(InstanceId: string, request: CancelLogstashDeletionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelLogstashDeletionResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CancelLogstashDeletionResponse>(await this.doROARequest("CancelLogstashDeletion", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/actions/cancel-deletion`, "json", req, runtime), new CancelLogstashDeletionResponse({}));
  }

  async cancelTask(InstanceId: string, request: CancelTaskRequest): Promise<CancelTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(InstanceId, request, headers, runtime);
  }

  async cancelTaskWithOptions(InstanceId: string, request: CancelTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelTaskResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CancelTaskResponse>(await this.doROARequest("CancelTask", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/cancel-task`, "json", req, runtime), new CancelTaskResponse({}));
  }

  async capacityPlan(request: CapacityPlanRequest): Promise<CapacityPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.capacityPlanWithOptions(request, headers, runtime);
  }

  async capacityPlanWithOptions(request: CapacityPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CapacityPlanResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.complexQueryAvailable)) {
      body["complexQueryAvailable"] = request.complexQueryAvailable;
    }

    if (!Util.isUnset(request.dataInfo)) {
      body["dataInfo"] = request.dataInfo;
    }

    if (!Util.isUnset(request.metric)) {
      body["metric"] = request.metric;
    }

    if (!Util.isUnset(request.usageScenario)) {
      body["usageScenario"] = request.usageScenario;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CapacityPlanResponse>(await this.doROARequest("CapacityPlan", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/assist/actions/capacity-plan`, "json", req, runtime), new CapacityPlanResponse({}));
  }

  async closeDiagnosis(InstanceId: string, request: CloseDiagnosisRequest): Promise<CloseDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeDiagnosisWithOptions(InstanceId, request, headers, runtime);
  }

  async closeDiagnosisWithOptions(InstanceId: string, request: CloseDiagnosisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloseDiagnosisResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CloseDiagnosisResponse>(await this.doROARequest("CloseDiagnosis", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/diagnosis/instances/${InstanceId}/actions/close-diagnosis`, "json", req, runtime), new CloseDiagnosisResponse({}));
  }

  async closeHttps(InstanceId: string, request: CloseHttpsRequest): Promise<CloseHttpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeHttpsWithOptions(InstanceId, request, headers, runtime);
  }

  async closeHttpsWithOptions(InstanceId: string, request: CloseHttpsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloseHttpsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CloseHttpsResponse>(await this.doROARequest("CloseHttps", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/close-https`, "json", req, runtime), new CloseHttpsResponse({}));
  }

  async closeManagedIndex(InstanceId: string, Index: string, request: CloseManagedIndexRequest): Promise<CloseManagedIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.closeManagedIndexWithOptions(InstanceId, Index, request, headers, runtime);
  }

  async closeManagedIndexWithOptions(InstanceId: string, Index: string, request: CloseManagedIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloseManagedIndexResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    Index = OpenApiUtil.getEncodeParam(Index);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CloseManagedIndexResponse>(await this.doROARequest("CloseManagedIndex", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/indices/${Index}/close-managed`, "json", req, runtime), new CloseManagedIndexResponse({}));
  }

  async createCollector(request: CreateCollectorRequest): Promise<CreateCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCollectorWithOptions(request, headers, runtime);
  }

  async createCollectorWithOptions(request: CreateCollectorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCollectorResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateCollectorResponse>(await this.doROARequest("CreateCollector", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/collectors`, "json", req, runtime), new CreateCollectorResponse({}));
  }

  async createComponentIndex(InstanceId: string, name: string, request: CreateComponentIndexRequest): Promise<CreateComponentIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createComponentIndexWithOptions(InstanceId, name, request, headers, runtime);
  }

  async createComponentIndexWithOptions(InstanceId: string, name: string, request: CreateComponentIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateComponentIndexResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    name = OpenApiUtil.getEncodeParam(name);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meta)) {
      body["_meta"] = request.meta;
    }

    if (!Util.isUnset($tea.toMap(request.template))) {
      body["template"] = request.template;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateComponentIndexResponse>(await this.doROARequest("CreateComponentIndex", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/component-index/${name}`, "json", req, runtime), new CreateComponentIndexResponse({}));
  }

  async createDataStream(InstanceId: string, request: CreateDataStreamRequest): Promise<CreateDataStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataStreamWithOptions(InstanceId, request, headers, runtime);
  }

  async createDataStreamWithOptions(InstanceId: string, request: CreateDataStreamRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDataStreamResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateDataStreamResponse>(await this.doROARequest("CreateDataStream", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/data-streams`, "json", req, runtime), new CreateDataStreamResponse({}));
  }

  async createDataTasks(InstanceId: string, request: CreateDataTasksRequest): Promise<CreateDataTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataTasksWithOptions(InstanceId, request, headers, runtime);
  }

  async createDataTasksWithOptions(InstanceId: string, request: CreateDataTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDataTasksResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateDataTasksResponse>(await this.doROARequest("CreateDataTasks", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/data-task`, "json", req, runtime), new CreateDataTasksResponse({}));
  }

  async createILMPolicy(InstanceId: string, request: CreateILMPolicyRequest): Promise<CreateILMPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createILMPolicyWithOptions(InstanceId, request, headers, runtime);
  }

  async createILMPolicyWithOptions(InstanceId: string, request: CreateILMPolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateILMPolicyResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateILMPolicyResponse>(await this.doROARequest("CreateILMPolicy", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/ilm-policies`, "json", req, runtime), new CreateILMPolicyResponse({}));
  }

  async createIndexTemplate(InstanceId: string, request: CreateIndexTemplateRequest): Promise<CreateIndexTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createIndexTemplateWithOptions(InstanceId, request, headers, runtime);
  }

  async createIndexTemplateWithOptions(InstanceId: string, request: CreateIndexTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateIndexTemplateResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateIndexTemplateResponse>(await this.doROARequest("CreateIndexTemplate", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/index-templates`, "json", req, runtime), new CreateIndexTemplateResponse({}));
  }

  async createLogstash(request: CreateLogstashRequest): Promise<CreateLogstashResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLogstashWithOptions(request, headers, runtime);
  }

  async createLogstashWithOptions(request: CreateLogstashRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLogstashResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateLogstashResponse>(await this.doROARequest("CreateLogstash", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes`, "json", req, runtime), new CreateLogstashResponse({}));
  }

  async createPipelines(InstanceId: string, request: CreatePipelinesRequest): Promise<CreatePipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelinesWithOptions(InstanceId, request, headers, runtime);
  }

  async createPipelinesWithOptions(InstanceId: string, request: CreatePipelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePipelinesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.trigger)) {
      query["trigger"] = request.trigger;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreatePipelinesResponse>(await this.doROARequest("CreatePipelines", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/pipelines`, "json", req, runtime), new CreatePipelinesResponse({}));
  }

  async createSnapshot(InstanceId: string, request: CreateSnapshotRequest): Promise<CreateSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

  async createSnapshotWithOptions(InstanceId: string, request: CreateSnapshotRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSnapshotResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateSnapshotResponse>(await this.doROARequest("CreateSnapshot", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/snapshots`, "json", req, runtime), new CreateSnapshotResponse({}));
  }

  async createVpcEndpoint(InstanceId: string, request: CreateVpcEndpointRequest): Promise<CreateVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVpcEndpointWithOptions(InstanceId, request, headers, runtime);
  }

  async createVpcEndpointWithOptions(InstanceId: string, request: CreateVpcEndpointRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateVpcEndpointResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceId)) {
      body["serviceId"] = request.serviceId;
    }

    if (!Util.isUnset(request.zoneId)) {
      body["zoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateVpcEndpointResponse>(await this.doROARequest("CreateVpcEndpoint", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/vpc-endpoints`, "json", req, runtime), new CreateVpcEndpointResponse({}));
  }

  async deactivateZones(InstanceId: string, request: DeactivateZonesRequest): Promise<DeactivateZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deactivateZonesWithOptions(InstanceId, request, headers, runtime);
  }

  async deactivateZonesWithOptions(InstanceId: string, request: DeactivateZonesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeactivateZonesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeactivateZonesResponse>(await this.doROARequest("DeactivateZones", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/down-zones`, "json", req, runtime), new DeactivateZonesResponse({}));
  }

  async deleteCollector(ResId: string, request: DeleteCollectorRequest): Promise<DeleteCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCollectorWithOptions(ResId, request, headers, runtime);
  }

  async deleteCollectorWithOptions(ResId: string, request: DeleteCollectorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteCollectorResponse> {
    Util.validateModel(request);
    ResId = OpenApiUtil.getEncodeParam(ResId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteCollectorResponse>(await this.doROARequest("DeleteCollector", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/collectors/${ResId}`, "json", req, runtime), new DeleteCollectorResponse({}));
  }

  async deleteComponentIndex(InstanceId: string, name: string): Promise<DeleteComponentIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteComponentIndexWithOptions(InstanceId, name, headers, runtime);
  }

  async deleteComponentIndexWithOptions(InstanceId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteComponentIndexResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteComponentIndexResponse>(await this.doROARequest("DeleteComponentIndex", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/component-index/${name}`, "json", req, runtime), new DeleteComponentIndexResponse({}));
  }

  async deleteConnectedCluster(InstanceId: string, request: DeleteConnectedClusterRequest): Promise<DeleteConnectedClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConnectedClusterWithOptions(InstanceId, request, headers, runtime);
  }

  async deleteConnectedClusterWithOptions(InstanceId: string, request: DeleteConnectedClusterRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConnectedClusterResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectedInstanceId)) {
      query["connectedInstanceId"] = request.connectedInstanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteConnectedClusterResponse>(await this.doROARequest("DeleteConnectedCluster", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/connected-clusters`, "json", req, runtime), new DeleteConnectedClusterResponse({}));
  }

  async deleteDataStream(InstanceId: string, DataStream: string, request: DeleteDataStreamRequest): Promise<DeleteDataStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataStreamWithOptions(InstanceId, DataStream, request, headers, runtime);
  }

  async deleteDataStreamWithOptions(InstanceId: string, DataStream: string, request: DeleteDataStreamRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDataStreamResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    DataStream = OpenApiUtil.getEncodeParam(DataStream);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteDataStreamResponse>(await this.doROARequest("DeleteDataStream", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/data-streams/${DataStream}`, "json", req, runtime), new DeleteDataStreamResponse({}));
  }

  async deleteDataTask(InstanceId: string, request: DeleteDataTaskRequest): Promise<DeleteDataTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataTaskWithOptions(InstanceId, request, headers, runtime);
  }

  async deleteDataTaskWithOptions(InstanceId: string, request: DeleteDataTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDataTaskResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteDataTaskResponse>(await this.doROARequest("DeleteDataTask", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/data-task`, "json", req, runtime), new DeleteDataTaskResponse({}));
  }

  async deleteDeprecatedTemplate(InstanceId: string, name: string): Promise<DeleteDeprecatedTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDeprecatedTemplateWithOptions(InstanceId, name, headers, runtime);
  }

  async deleteDeprecatedTemplateWithOptions(InstanceId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDeprecatedTemplateResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteDeprecatedTemplateResponse>(await this.doROARequest("DeleteDeprecatedTemplate", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/deprecated-templates/${name}`, "json", req, runtime), new DeleteDeprecatedTemplateResponse({}));
  }

  async deleteILMPolicy(InstanceId: string, PolicyName: string): Promise<DeleteILMPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteILMPolicyWithOptions(InstanceId, PolicyName, headers, runtime);
  }

  async deleteILMPolicyWithOptions(InstanceId: string, PolicyName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteILMPolicyResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    PolicyName = OpenApiUtil.getEncodeParam(PolicyName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteILMPolicyResponse>(await this.doROARequest("DeleteILMPolicy", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/ilm-policies/${PolicyName}`, "json", req, runtime), new DeleteILMPolicyResponse({}));
  }

  async deleteIndexTemplate(InstanceId: string, IndexTemplate: string): Promise<DeleteIndexTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteIndexTemplateWithOptions(InstanceId, IndexTemplate, headers, runtime);
  }

  async deleteIndexTemplateWithOptions(InstanceId: string, IndexTemplate: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteIndexTemplateResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    IndexTemplate = OpenApiUtil.getEncodeParam(IndexTemplate);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteIndexTemplateResponse>(await this.doROARequest("DeleteIndexTemplate", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/index-templates/${IndexTemplate}`, "json", req, runtime), new DeleteIndexTemplateResponse({}));
  }

  async deleteInstance(InstanceId: string, request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  async deleteInstanceWithOptions(InstanceId: string, request: DeleteInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deleteType)) {
      query["deleteType"] = request.deleteType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doROARequest("DeleteInstance", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}`, "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteLogstash(InstanceId: string, request: DeleteLogstashRequest): Promise<DeleteLogstashResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLogstashWithOptions(InstanceId, request, headers, runtime);
  }

  async deleteLogstashWithOptions(InstanceId: string, request: DeleteLogstashRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLogstashResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deleteType)) {
      query["deleteType"] = request.deleteType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteLogstashResponse>(await this.doROARequest("DeleteLogstash", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/logstashes/${InstanceId}`, "json", req, runtime), new DeleteLogstashResponse({}));
  }

  async deletePipelines(InstanceId: string, request: DeletePipelinesRequest): Promise<DeletePipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelinesWithOptions(InstanceId, request, headers, runtime);
  }

  async deletePipelinesWithOptions(InstanceId: string, request: DeletePipelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePipelinesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.pipelineIds)) {
      query["pipelineIds"] = request.pipelineIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeletePipelinesResponse>(await this.doROARequest("DeletePipelines", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/logstashes/${InstanceId}/pipelines`, "json", req, runtime), new DeletePipelinesResponse({}));
  }

  async deleteSnapshotRepo(InstanceId: string, request: DeleteSnapshotRepoRequest): Promise<DeleteSnapshotRepoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSnapshotRepoWithOptions(InstanceId, request, headers, runtime);
  }

  async deleteSnapshotRepoWithOptions(InstanceId: string, request: DeleteSnapshotRepoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSnapshotRepoResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.repoPath)) {
      query["repoPath"] = request.repoPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteSnapshotRepoResponse>(await this.doROARequest("DeleteSnapshotRepo", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/snapshot-repos`, "json", req, runtime), new DeleteSnapshotRepoResponse({}));
  }

  async deleteVpcEndpoint(InstanceId: string, EndpointId: string, request: DeleteVpcEndpointRequest): Promise<DeleteVpcEndpointResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVpcEndpointWithOptions(InstanceId, EndpointId, request, headers, runtime);
  }

  async deleteVpcEndpointWithOptions(InstanceId: string, EndpointId: string, request: DeleteVpcEndpointRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteVpcEndpointResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    EndpointId = OpenApiUtil.getEncodeParam(EndpointId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteVpcEndpointResponse>(await this.doROARequest("DeleteVpcEndpoint", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/instances/${InstanceId}/vpc-endpoints/${EndpointId}`, "json", req, runtime), new DeleteVpcEndpointResponse({}));
  }

  async describeAckOperator(ClusterId: string): Promise<DescribeAckOperatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeAckOperatorWithOptions(ClusterId, headers, runtime);
  }

  async describeAckOperatorWithOptions(ClusterId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeAckOperatorResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeAckOperatorResponse>(await this.doROARequest("DescribeAckOperator", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/ack-clusters/${ClusterId}/operator`, "json", req, runtime), new DescribeAckOperatorResponse({}));
  }

  async describeApm(instanceId: string): Promise<DescribeApmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeApmWithOptions(instanceId, headers, runtime);
  }

  async describeApmWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeApmResponse> {
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeApmResponse>(await this.doROARequest("DescribeApm", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/apm/${instanceId}`, "json", req, runtime), new DescribeApmResponse({}));
  }

  async describeCollector(ResId: string): Promise<DescribeCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeCollectorWithOptions(ResId, headers, runtime);
  }

  async describeCollectorWithOptions(ResId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeCollectorResponse> {
    ResId = OpenApiUtil.getEncodeParam(ResId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeCollectorResponse>(await this.doROARequest("DescribeCollector", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/collectors/${ResId}`, "json", req, runtime), new DescribeCollectorResponse({}));
  }

  async describeComponentIndex(InstanceId: string, name: string): Promise<DescribeComponentIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeComponentIndexWithOptions(InstanceId, name, headers, runtime);
  }

  async describeComponentIndexWithOptions(InstanceId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeComponentIndexResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeComponentIndexResponse>(await this.doROARequest("DescribeComponentIndex", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/component-index/${name}`, "json", req, runtime), new DescribeComponentIndexResponse({}));
  }

  async describeConnectableClusters(InstanceId: string, request: DescribeConnectableClustersRequest): Promise<DescribeConnectableClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeConnectableClustersWithOptions(InstanceId, request, headers, runtime);
  }

  async describeConnectableClustersWithOptions(InstanceId: string, request: DescribeConnectableClustersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeConnectableClustersResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alreadySetItems)) {
      query["alreadySetItems"] = request.alreadySetItems;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeConnectableClustersResponse>(await this.doROARequest("DescribeConnectableClusters", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/connectable-clusters`, "json", req, runtime), new DescribeConnectableClustersResponse({}));
  }

  async describeDeprecatedTemplate(InstanceId: string, name: string): Promise<DescribeDeprecatedTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDeprecatedTemplateWithOptions(InstanceId, name, headers, runtime);
  }

  async describeDeprecatedTemplateWithOptions(InstanceId: string, name: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeDeprecatedTemplateResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    name = OpenApiUtil.getEncodeParam(name);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeDeprecatedTemplateResponse>(await this.doROARequest("DescribeDeprecatedTemplate", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/deprecated-templates/${name}`, "json", req, runtime), new DescribeDeprecatedTemplateResponse({}));
  }

  async describeDiagnoseReport(InstanceId: string, ReportId: string, request: DescribeDiagnoseReportRequest): Promise<DescribeDiagnoseReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDiagnoseReportWithOptions(InstanceId, ReportId, request, headers, runtime);
  }

  async describeDiagnoseReportWithOptions(InstanceId: string, ReportId: string, request: DescribeDiagnoseReportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnoseReportResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    ReportId = OpenApiUtil.getEncodeParam(ReportId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeDiagnoseReportResponse>(await this.doROARequest("DescribeDiagnoseReport", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/diagnosis/instances/${InstanceId}/reports/${ReportId}`, "json", req, runtime), new DescribeDiagnoseReportResponse({}));
  }

  async describeDiagnosisSettings(InstanceId: string, request: DescribeDiagnosisSettingsRequest): Promise<DescribeDiagnosisSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeDiagnosisSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  async describeDiagnosisSettingsWithOptions(InstanceId: string, request: DescribeDiagnosisSettingsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeDiagnosisSettingsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribeDiagnosisSettingsResponse>(await this.doROARequest("DescribeDiagnosisSettings", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/diagnosis/instances/${InstanceId}/settings`, "json", req, runtime), new DescribeDiagnosisSettingsResponse({}));
  }

  async describeElasticsearchHealth(InstanceId: string): Promise<DescribeElasticsearchHealthResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeElasticsearchHealthWithOptions(InstanceId, headers, runtime);
  }

  async describeElasticsearchHealthWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeElasticsearchHealthResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeElasticsearchHealthResponse>(await this.doROARequest("DescribeElasticsearchHealth", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/elasticsearch-health`, "json", req, runtime), new DescribeElasticsearchHealthResponse({}));
  }

  async describeILMPolicy(InstanceId: string, PolicyName: string): Promise<DescribeILMPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeILMPolicyWithOptions(InstanceId, PolicyName, headers, runtime);
  }

  async describeILMPolicyWithOptions(InstanceId: string, PolicyName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeILMPolicyResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    PolicyName = OpenApiUtil.getEncodeParam(PolicyName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeILMPolicyResponse>(await this.doROARequest("DescribeILMPolicy", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/ilm-policies/${PolicyName}`, "json", req, runtime), new DescribeILMPolicyResponse({}));
  }

  async describeIndexTemplate(InstanceId: string, IndexTemplate: string): Promise<DescribeIndexTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeIndexTemplateWithOptions(InstanceId, IndexTemplate, headers, runtime);
  }

  async describeIndexTemplateWithOptions(InstanceId: string, IndexTemplate: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeIndexTemplateResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    IndexTemplate = OpenApiUtil.getEncodeParam(IndexTemplate);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeIndexTemplateResponse>(await this.doROARequest("DescribeIndexTemplate", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/index-templates/${IndexTemplate}`, "json", req, runtime), new DescribeIndexTemplateResponse({}));
  }

  async describeInstance(InstanceId: string): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeInstanceWithOptions(InstanceId, headers, runtime);
  }

  async describeInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeInstanceResponse>(await this.doROARequest("DescribeInstance", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}`, "json", req, runtime), new DescribeInstanceResponse({}));
  }

  async describeKibanaSettings(InstanceId: string): Promise<DescribeKibanaSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeKibanaSettingsWithOptions(InstanceId, headers, runtime);
  }

  async describeKibanaSettingsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeKibanaSettingsResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeKibanaSettingsResponse>(await this.doROARequest("DescribeKibanaSettings", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/kibana-settings`, "json", req, runtime), new DescribeKibanaSettingsResponse({}));
  }

  async describeLogstash(InstanceId: string): Promise<DescribeLogstashResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeLogstashWithOptions(InstanceId, headers, runtime);
  }

  async describeLogstashWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeLogstashResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeLogstashResponse>(await this.doROARequest("DescribeLogstash", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/logstashes/${InstanceId}`, "json", req, runtime), new DescribeLogstashResponse({}));
  }

  async describePipeline(InstanceId: string, PipelineId: string): Promise<DescribePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePipelineWithOptions(InstanceId, PipelineId, headers, runtime);
  }

  async describePipelineWithOptions(InstanceId: string, PipelineId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePipelineResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    PipelineId = OpenApiUtil.getEncodeParam(PipelineId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribePipelineResponse>(await this.doROARequest("DescribePipeline", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/logstashes/${InstanceId}/pipelines/${PipelineId}`, "json", req, runtime), new DescribePipelineResponse({}));
  }

  async describePipelineManagementConfig(InstanceId: string, request: DescribePipelineManagementConfigRequest): Promise<DescribePipelineManagementConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describePipelineManagementConfigWithOptions(InstanceId, request, headers, runtime);
  }

  async describePipelineManagementConfigWithOptions(InstanceId: string, request: DescribePipelineManagementConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribePipelineManagementConfigResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DescribePipelineManagementConfigResponse>(await this.doROARequest("DescribePipelineManagementConfig", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/logstashes/${InstanceId}/pipeline-management-config`, "json", req, runtime), new DescribePipelineManagementConfigResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeRegionsResponse>(await this.doROARequest("DescribeRegions", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/regions`, "json", req, runtime), new DescribeRegionsResponse({}));
  }

  async describeSnapshotSetting(InstanceId: string): Promise<DescribeSnapshotSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSnapshotSettingWithOptions(InstanceId, headers, runtime);
  }

  async describeSnapshotSettingWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSnapshotSettingResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeSnapshotSettingResponse>(await this.doROARequest("DescribeSnapshotSetting", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/snapshot-setting`, "json", req, runtime), new DescribeSnapshotSettingResponse({}));
  }

  async describeTemplates(InstanceId: string): Promise<DescribeTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeTemplatesWithOptions(InstanceId, headers, runtime);
  }

  async describeTemplatesWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeTemplatesResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeTemplatesResponse>(await this.doROARequest("DescribeTemplates", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/templates`, "json", req, runtime), new DescribeTemplatesResponse({}));
  }

  async describeXpackMonitorConfig(InstanceId: string): Promise<DescribeXpackMonitorConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeXpackMonitorConfigWithOptions(InstanceId, headers, runtime);
  }

  async describeXpackMonitorConfigWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeXpackMonitorConfigResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DescribeXpackMonitorConfigResponse>(await this.doROARequest("DescribeXpackMonitorConfig", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/logstashes/${InstanceId}/xpack-monitor-config`, "json", req, runtime), new DescribeXpackMonitorConfigResponse({}));
  }

  async diagnoseInstance(InstanceId: string, request: DiagnoseInstanceRequest): Promise<DiagnoseInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.diagnoseInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  async diagnoseInstanceWithOptions(InstanceId: string, request: DiagnoseInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DiagnoseInstanceResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DiagnoseInstanceResponse>(await this.doROARequest("DiagnoseInstance", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/diagnosis/instances/${InstanceId}/actions/diagnose`, "json", req, runtime), new DiagnoseInstanceResponse({}));
  }

  async estimatedLogstashRestartTime(InstanceId: string, request: EstimatedLogstashRestartTimeRequest): Promise<EstimatedLogstashRestartTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.estimatedLogstashRestartTimeWithOptions(InstanceId, request, headers, runtime);
  }

  async estimatedLogstashRestartTimeWithOptions(InstanceId: string, request: EstimatedLogstashRestartTimeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EstimatedLogstashRestartTimeResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<EstimatedLogstashRestartTimeResponse>(await this.doROARequest("EstimatedLogstashRestartTime", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/estimated-time/restart-time`, "json", req, runtime), new EstimatedLogstashRestartTimeResponse({}));
  }

  async estimatedRestartTime(InstanceId: string, request: EstimatedRestartTimeRequest): Promise<EstimatedRestartTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.estimatedRestartTimeWithOptions(InstanceId, request, headers, runtime);
  }

  async estimatedRestartTimeWithOptions(InstanceId: string, request: EstimatedRestartTimeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<EstimatedRestartTimeResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<EstimatedRestartTimeResponse>(await this.doROARequest("EstimatedRestartTime", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/estimated-time/restart-time`, "json", req, runtime), new EstimatedRestartTimeResponse({}));
  }

  async getClusterDataInformation(): Promise<GetClusterDataInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getClusterDataInformationWithOptions(headers, runtime);
  }

  async getClusterDataInformationWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetClusterDataInformationResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetClusterDataInformationResponse>(await this.doROARequest("GetClusterDataInformation", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/cluster/data-information`, "json", req, runtime), new GetClusterDataInformationResponse({}));
  }

  async getElastictask(InstanceId: string): Promise<GetElastictaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getElastictaskWithOptions(InstanceId, headers, runtime);
  }

  async getElastictaskWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetElastictaskResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetElastictaskResponse>(await this.doROARequest("GetElastictask", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/elastic-task`, "json", req, runtime), new GetElastictaskResponse({}));
  }

  async getEmonGrafanaAlerts(ProjectId: string): Promise<GetEmonGrafanaAlertsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmonGrafanaAlertsWithOptions(ProjectId, headers, runtime);
  }

  async getEmonGrafanaAlertsWithOptions(ProjectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEmonGrafanaAlertsResponse> {
    ProjectId = OpenApiUtil.getEncodeParam(ProjectId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetEmonGrafanaAlertsResponse>(await this.doROARequest("GetEmonGrafanaAlerts", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/emon/projects/${ProjectId}/grafana/proxy/api/alerts`, "json", req, runtime), new GetEmonGrafanaAlertsResponse({}));
  }

  async getEmonGrafanaDashboards(ProjectId: string): Promise<GetEmonGrafanaDashboardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmonGrafanaDashboardsWithOptions(ProjectId, headers, runtime);
  }

  async getEmonGrafanaDashboardsWithOptions(ProjectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEmonGrafanaDashboardsResponse> {
    ProjectId = OpenApiUtil.getEncodeParam(ProjectId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetEmonGrafanaDashboardsResponse>(await this.doROARequest("GetEmonGrafanaDashboards", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/emon/projects/${ProjectId}/grafana/proxy/api/search`, "json", req, runtime), new GetEmonGrafanaDashboardsResponse({}));
  }

  async getEmonMonitorData(ProjectId: string): Promise<GetEmonMonitorDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEmonMonitorDataWithOptions(ProjectId, headers, runtime);
  }

  async getEmonMonitorDataWithOptions(ProjectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetEmonMonitorDataResponse> {
    ProjectId = OpenApiUtil.getEncodeParam(ProjectId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetEmonMonitorDataResponse>(await this.doROARequest("GetEmonMonitorData", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/emon/projects/${ProjectId}/metrics/query`, "json", req, runtime), new GetEmonMonitorDataResponse({}));
  }

  async getOpenStoreUsage(InstanceId: string): Promise<GetOpenStoreUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOpenStoreUsageWithOptions(InstanceId, headers, runtime);
  }

  async getOpenStoreUsageWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOpenStoreUsageResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetOpenStoreUsageResponse>(await this.doROARequest("GetOpenStoreUsage", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/openstore/usage`, "json", req, runtime), new GetOpenStoreUsageResponse({}));
  }

  async getRegionConfiguration(request: GetRegionConfigurationRequest): Promise<GetRegionConfigurationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRegionConfigurationWithOptions(request, headers, runtime);
  }

  async getRegionConfigurationWithOptions(request: GetRegionConfigurationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRegionConfigurationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.zoneId)) {
      query["zoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetRegionConfigurationResponse>(await this.doROARequest("GetRegionConfiguration", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/region`, "json", req, runtime), new GetRegionConfigurationResponse({}));
  }

  async getSuggestShrinkableNodes(InstanceId: string, request: GetSuggestShrinkableNodesRequest): Promise<GetSuggestShrinkableNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSuggestShrinkableNodesWithOptions(InstanceId, request, headers, runtime);
  }

  async getSuggestShrinkableNodesWithOptions(InstanceId: string, request: GetSuggestShrinkableNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSuggestShrinkableNodesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.count)) {
      query["count"] = request.count;
    }

    if (!Util.isUnset(request.ignoreStatus)) {
      query["ignoreStatus"] = request.ignoreStatus;
    }

    if (!Util.isUnset(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetSuggestShrinkableNodesResponse>(await this.doROARequest("GetSuggestShrinkableNodes", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/suggest-shrinkable-nodes`, "json", req, runtime), new GetSuggestShrinkableNodesResponse({}));
  }

  async getTransferableNodes(InstanceId: string, request: GetTransferableNodesRequest): Promise<GetTransferableNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTransferableNodesWithOptions(InstanceId, request, headers, runtime);
  }

  async getTransferableNodesWithOptions(InstanceId: string, request: GetTransferableNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTransferableNodesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.count)) {
      query["count"] = request.count;
    }

    if (!Util.isUnset(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetTransferableNodesResponse>(await this.doROARequest("GetTransferableNodes", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/transferable-nodes`, "json", req, runtime), new GetTransferableNodesResponse({}));
  }

  async initializeOperationRole(request: InitializeOperationRoleRequest): Promise<InitializeOperationRoleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.initializeOperationRoleWithOptions(request, headers, runtime);
  }

  async initializeOperationRoleWithOptions(request: InitializeOperationRoleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InitializeOperationRoleResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InitializeOperationRoleResponse>(await this.doROARequest("InitializeOperationRole", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/user/slr`, "json", req, runtime), new InitializeOperationRoleResponse({}));
  }

  async installAckOperator(ClusterId: string, request: InstallAckOperatorRequest): Promise<InstallAckOperatorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installAckOperatorWithOptions(ClusterId, request, headers, runtime);
  }

  async installAckOperatorWithOptions(ClusterId: string, request: InstallAckOperatorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InstallAckOperatorResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InstallAckOperatorResponse>(await this.doROARequest("InstallAckOperator", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/ack-clusters/${ClusterId}/operator`, "json", req, runtime), new InstallAckOperatorResponse({}));
  }

  async installKibanaSystemPlugin(InstanceId: string, request: InstallKibanaSystemPluginRequest): Promise<InstallKibanaSystemPluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installKibanaSystemPluginWithOptions(InstanceId, request, headers, runtime);
  }

  async installKibanaSystemPluginWithOptions(InstanceId: string, request: InstallKibanaSystemPluginRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InstallKibanaSystemPluginResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InstallKibanaSystemPluginResponse>(await this.doROARequest("InstallKibanaSystemPlugin", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/kibana-plugins/system/actions/install`, "json", req, runtime), new InstallKibanaSystemPluginResponse({}));
  }

  async installLogstashSystemPlugin(InstanceId: string, request: InstallLogstashSystemPluginRequest): Promise<InstallLogstashSystemPluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installLogstashSystemPluginWithOptions(InstanceId, request, headers, runtime);
  }

  async installLogstashSystemPluginWithOptions(InstanceId: string, request: InstallLogstashSystemPluginRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InstallLogstashSystemPluginResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InstallLogstashSystemPluginResponse>(await this.doROARequest("InstallLogstashSystemPlugin", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/plugins/system/actions/install`, "json", req, runtime), new InstallLogstashSystemPluginResponse({}));
  }

  async installSystemPlugin(InstanceId: string, request: InstallSystemPluginRequest): Promise<InstallSystemPluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installSystemPluginWithOptions(InstanceId, request, headers, runtime);
  }

  async installSystemPluginWithOptions(InstanceId: string, request: InstallSystemPluginRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InstallSystemPluginResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InstallSystemPluginResponse>(await this.doROARequest("InstallSystemPlugin", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/plugins/system/actions/install`, "json", req, runtime), new InstallSystemPluginResponse({}));
  }

  async installUserPlugins(InstanceId: string): Promise<InstallUserPluginsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installUserPluginsWithOptions(InstanceId, headers, runtime);
  }

  async installUserPluginsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InstallUserPluginsResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<InstallUserPluginsResponse>(await this.doROARequest("InstallUserPlugins", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/plugins/user/actions/install`, "json", req, runtime), new InstallUserPluginsResponse({}));
  }

  async interruptElasticsearchTask(InstanceId: string, request: InterruptElasticsearchTaskRequest): Promise<InterruptElasticsearchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.interruptElasticsearchTaskWithOptions(InstanceId, request, headers, runtime);
  }

  async interruptElasticsearchTaskWithOptions(InstanceId: string, request: InterruptElasticsearchTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InterruptElasticsearchTaskResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InterruptElasticsearchTaskResponse>(await this.doROARequest("InterruptElasticsearchTask", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/interrupt`, "json", req, runtime), new InterruptElasticsearchTaskResponse({}));
  }

  async interruptLogstashTask(InstanceId: string, request: InterruptLogstashTaskRequest): Promise<InterruptLogstashTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.interruptLogstashTaskWithOptions(InstanceId, request, headers, runtime);
  }

  async interruptLogstashTaskWithOptions(InstanceId: string, request: InterruptLogstashTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InterruptLogstashTaskResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<InterruptLogstashTaskResponse>(await this.doROARequest("InterruptLogstashTask", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/actions/interrupt`, "json", req, runtime), new InterruptLogstashTaskResponse({}));
  }

  async listAckClusters(request: ListAckClustersRequest): Promise<ListAckClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAckClustersWithOptions(request, headers, runtime);
  }

  async listAckClustersWithOptions(request: ListAckClustersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAckClustersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["vpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListAckClustersResponse>(await this.doROARequest("ListAckClusters", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/ack-clusters`, "json", req, runtime), new ListAckClustersResponse({}));
  }

  async listAckNamespaces(ClusterId: string, request: ListAckNamespacesRequest): Promise<ListAckNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAckNamespacesWithOptions(ClusterId, request, headers, runtime);
  }

  async listAckNamespacesWithOptions(ClusterId: string, request: ListAckNamespacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAckNamespacesResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListAckNamespacesResponse>(await this.doROARequest("ListAckNamespaces", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/ack-clusters/${ClusterId}/namespaces`, "json", req, runtime), new ListAckNamespacesResponse({}));
  }

  async listAllNode(InstanceId: string, request: ListAllNodeRequest): Promise<ListAllNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAllNodeWithOptions(InstanceId, request, headers, runtime);
  }

  async listAllNodeWithOptions(InstanceId: string, request: ListAllNodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAllNodeResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.extended)) {
      query["extended"] = request.extended;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListAllNodeResponse>(await this.doROARequest("ListAllNode", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/nodes`, "json", req, runtime), new ListAllNodeResponse({}));
  }

  async listAlternativeSnapshotRepos(InstanceId: string, request: ListAlternativeSnapshotReposRequest): Promise<ListAlternativeSnapshotReposResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlternativeSnapshotReposWithOptions(InstanceId, request, headers, runtime);
  }

  async listAlternativeSnapshotReposWithOptions(InstanceId: string, request: ListAlternativeSnapshotReposRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAlternativeSnapshotReposResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alreadySetItems)) {
      query["alreadySetItems"] = request.alreadySetItems;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListAlternativeSnapshotReposResponse>(await this.doROARequest("ListAlternativeSnapshotRepos", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/alternative-snapshot-repos`, "json", req, runtime), new ListAlternativeSnapshotReposResponse({}));
  }

  async listApm(request: ListApmRequest): Promise<ListApmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listApmWithOptions(request, headers, runtime);
  }

  async listApmWithOptions(request: ListApmRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListApmResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.output)) {
      query["output"] = request.output;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListApmResponse>(await this.doROARequest("ListApm", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/apm`, "json", req, runtime), new ListApmResponse({}));
  }

  async listAvailableEsInstanceIds(InstanceId: string): Promise<ListAvailableEsInstanceIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAvailableEsInstanceIdsWithOptions(InstanceId, headers, runtime);
  }

  async listAvailableEsInstanceIdsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAvailableEsInstanceIdsResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListAvailableEsInstanceIdsResponse>(await this.doROARequest("ListAvailableEsInstanceIds", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/logstashes/${InstanceId}/available-elasticsearch-for-centralized-management`, "json", req, runtime), new ListAvailableEsInstanceIdsResponse({}));
  }

  async listCollectors(request: ListCollectorsRequest): Promise<ListCollectorsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCollectorsWithOptions(request, headers, runtime);
  }

  async listCollectorsWithOptions(request: ListCollectorsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCollectorsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.resId)) {
      query["resId"] = request.resId;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListCollectorsResponse>(await this.doROARequest("ListCollectors", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/collectors`, "json", req, runtime), new ListCollectorsResponse({}));
  }

  async listComponentIndices(InstanceId: string, request: ListComponentIndicesRequest): Promise<ListComponentIndicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listComponentIndicesWithOptions(InstanceId, request, headers, runtime);
  }

  async listComponentIndicesWithOptions(InstanceId: string, request: ListComponentIndicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListComponentIndicesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListComponentIndicesResponse>(await this.doROARequest("ListComponentIndices", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/component-index`, "json", req, runtime), new ListComponentIndicesResponse({}));
  }

  async listConnectedClusters(InstanceId: string): Promise<ListConnectedClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConnectedClustersWithOptions(InstanceId, headers, runtime);
  }

  async listConnectedClustersWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConnectedClustersResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListConnectedClustersResponse>(await this.doROARequest("ListConnectedClusters", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/connected-clusters`, "json", req, runtime), new ListConnectedClustersResponse({}));
  }

  async listDataStreams(InstanceId: string, request: ListDataStreamsRequest): Promise<ListDataStreamsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataStreamsWithOptions(InstanceId, request, headers, runtime);
  }

  async listDataStreamsWithOptions(InstanceId: string, request: ListDataStreamsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataStreamsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isManaged)) {
      query["isManaged"] = request.isManaged;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDataStreamsResponse>(await this.doROARequest("ListDataStreams", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/data-streams`, "json", req, runtime), new ListDataStreamsResponse({}));
  }

  async listDataTasks(InstanceId: string): Promise<ListDataTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataTasksWithOptions(InstanceId, headers, runtime);
  }

  async listDataTasksWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataTasksResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListDataTasksResponse>(await this.doROARequest("ListDataTasks", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/data-task`, "json", req, runtime), new ListDataTasksResponse({}));
  }

  async listDefaultCollectorConfigurations(request: ListDefaultCollectorConfigurationsRequest): Promise<ListDefaultCollectorConfigurationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDefaultCollectorConfigurationsWithOptions(request, headers, runtime);
  }

  async listDefaultCollectorConfigurationsWithOptions(request: ListDefaultCollectorConfigurationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDefaultCollectorConfigurationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resType)) {
      query["resType"] = request.resType;
    }

    if (!Util.isUnset(request.resVersion)) {
      query["resVersion"] = request.resVersion;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDefaultCollectorConfigurationsResponse>(await this.doROARequest("ListDefaultCollectorConfigurations", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/beats/default-configurations`, "json", req, runtime), new ListDefaultCollectorConfigurationsResponse({}));
  }

  async listDeprecatedTemplates(InstanceId: string, request: ListDeprecatedTemplatesRequest): Promise<ListDeprecatedTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDeprecatedTemplatesWithOptions(InstanceId, request, headers, runtime);
  }

  async listDeprecatedTemplatesWithOptions(InstanceId: string, request: ListDeprecatedTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDeprecatedTemplatesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDeprecatedTemplatesResponse>(await this.doROARequest("ListDeprecatedTemplates", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/deprecated-templates`, "json", req, runtime), new ListDeprecatedTemplatesResponse({}));
  }

  async listDiagnoseIndices(InstanceId: string, request: ListDiagnoseIndicesRequest): Promise<ListDiagnoseIndicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDiagnoseIndicesWithOptions(InstanceId, request, headers, runtime);
  }

  async listDiagnoseIndicesWithOptions(InstanceId: string, request: ListDiagnoseIndicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDiagnoseIndicesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDiagnoseIndicesResponse>(await this.doROARequest("ListDiagnoseIndices", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/diagnosis/instances/${InstanceId}/indices`, "json", req, runtime), new ListDiagnoseIndicesResponse({}));
  }

  async listDiagnoseReport(InstanceId: string, request: ListDiagnoseReportRequest): Promise<ListDiagnoseReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDiagnoseReportWithOptions(InstanceId, request, headers, runtime);
  }

  async listDiagnoseReportWithOptions(InstanceId: string, request: ListDiagnoseReportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDiagnoseReportResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.detail)) {
      query["detail"] = request.detail;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.trigger)) {
      query["trigger"] = request.trigger;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDiagnoseReportResponse>(await this.doROARequest("ListDiagnoseReport", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/diagnosis/instances/${InstanceId}/reports`, "json", req, runtime), new ListDiagnoseReportResponse({}));
  }

  async listDiagnoseReportIds(InstanceId: string, request: ListDiagnoseReportIdsRequest): Promise<ListDiagnoseReportIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDiagnoseReportIdsWithOptions(InstanceId, request, headers, runtime);
  }

  async listDiagnoseReportIdsWithOptions(InstanceId: string, request: ListDiagnoseReportIdsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDiagnoseReportIdsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.trigger)) {
      query["trigger"] = request.trigger;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDiagnoseReportIdsResponse>(await this.doROARequest("ListDiagnoseReportIds", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/diagnosis/instances/${InstanceId}/report-ids`, "json", req, runtime), new ListDiagnoseReportIdsResponse({}));
  }

  async listDictInformation(InstanceId: string, request: ListDictInformationRequest): Promise<ListDictInformationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDictInformationWithOptions(InstanceId, request, headers, runtime);
  }

  async listDictInformationWithOptions(InstanceId: string, request: ListDictInformationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDictInformationResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.analyzerType)) {
      query["analyzerType"] = request.analyzerType;
    }

    if (!Util.isUnset(request.bucketName)) {
      query["bucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.key)) {
      query["key"] = request.key;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDictInformationResponse>(await this.doROARequest("ListDictInformation", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dict/_info`, "json", req, runtime), new ListDictInformationResponse({}));
  }

  async listDicts(InstanceId: string, request: ListDictsRequest): Promise<ListDictsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDictsWithOptions(InstanceId, request, headers, runtime);
  }

  async listDictsWithOptions(InstanceId: string, request: ListDictsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDictsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.analyzerType)) {
      query["analyzerType"] = request.analyzerType;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDictsResponse>(await this.doROARequest("ListDicts", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/dicts`, "json", req, runtime), new ListDictsResponse({}));
  }

  async listEcsInstances(request: ListEcsInstancesRequest): Promise<ListEcsInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsInstancesWithOptions(request, headers, runtime);
  }

  async listEcsInstancesWithOptions(request: ListEcsInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEcsInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ecsInstanceIds)) {
      query["ecsInstanceIds"] = request.ecsInstanceIds;
    }

    if (!Util.isUnset(request.ecsInstanceName)) {
      query["ecsInstanceName"] = request.ecsInstanceName;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.tags)) {
      query["tags"] = request.tags;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["vpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListEcsInstancesResponse>(await this.doROARequest("ListEcsInstances", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/ecs`, "json", req, runtime), new ListEcsInstancesResponse({}));
  }

  async listExtendfiles(InstanceId: string): Promise<ListExtendfilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExtendfilesWithOptions(InstanceId, headers, runtime);
  }

  async listExtendfilesWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExtendfilesResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListExtendfilesResponse>(await this.doROARequest("ListExtendfiles", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/logstashes/${InstanceId}/extendfiles`, "json", req, runtime), new ListExtendfilesResponse({}));
  }

  async listILMPolicies(InstanceId: string, request: ListILMPoliciesRequest): Promise<ListILMPoliciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listILMPoliciesWithOptions(InstanceId, request, headers, runtime);
  }

  async listILMPoliciesWithOptions(InstanceId: string, request: ListILMPoliciesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListILMPoliciesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.policyName)) {
      query["policyName"] = request.policyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListILMPoliciesResponse>(await this.doROARequest("ListILMPolicies", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/ilm-policies`, "json", req, runtime), new ListILMPoliciesResponse({}));
  }

  async listIndexTemplates(InstanceId: string, request: ListIndexTemplatesRequest): Promise<ListIndexTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listIndexTemplatesWithOptions(InstanceId, request, headers, runtime);
  }

  async listIndexTemplatesWithOptions(InstanceId: string, request: ListIndexTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListIndexTemplatesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.indexTemplate)) {
      query["indexTemplate"] = request.indexTemplate;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListIndexTemplatesResponse>(await this.doROARequest("ListIndexTemplates", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/index-templates`, "json", req, runtime), new ListIndexTemplatesResponse({}));
  }

  async listInstance(request: ListInstanceRequest): Promise<ListInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceWithOptions(request, headers, runtime);
  }

  async listInstanceWithOptions(request: ListInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.esVersion)) {
      query["esVersion"] = request.esVersion;
    }

    if (!Util.isUnset(request.instanceCategory)) {
      query["instanceCategory"] = request.instanceCategory;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.paymentType)) {
      query["paymentType"] = request.paymentType;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.tags)) {
      query["tags"] = request.tags;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["vpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["zoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListInstanceResponse>(await this.doROARequest("ListInstance", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances`, "json", req, runtime), new ListInstanceResponse({}));
  }

  async listInstanceIndices(InstanceId: string, request: ListInstanceIndicesRequest): Promise<ListInstanceIndicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceIndicesWithOptions(InstanceId, request, headers, runtime);
  }

  async listInstanceIndicesWithOptions(InstanceId: string, request: ListInstanceIndicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceIndicesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["all"] = request.all;
    }

    if (!Util.isUnset(request.isManaged)) {
      query["isManaged"] = request.isManaged;
    }

    if (!Util.isUnset(request.isOpenstore)) {
      query["isOpenstore"] = request.isOpenstore;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListInstanceIndicesResponse>(await this.doROARequest("ListInstanceIndices", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/indices`, "json", req, runtime), new ListInstanceIndicesResponse({}));
  }

  async listKibanaPlugins(InstanceId: string, request: ListKibanaPluginsRequest): Promise<ListKibanaPluginsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listKibanaPluginsWithOptions(InstanceId, request, headers, runtime);
  }

  async listKibanaPluginsWithOptions(InstanceId: string, request: ListKibanaPluginsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListKibanaPluginsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListKibanaPluginsResponse>(await this.doROARequest("ListKibanaPlugins", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/kibana-plugins`, "json", req, runtime), new ListKibanaPluginsResponse({}));
  }

  async listLogstash(request: ListLogstashRequest): Promise<ListLogstashResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogstashWithOptions(request, headers, runtime);
  }

  async listLogstashWithOptions(request: ListLogstashRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogstashResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["ownerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListLogstashResponse>(await this.doROARequest("ListLogstash", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/logstashes`, "json", req, runtime), new ListLogstashResponse({}));
  }

  async listLogstashLog(InstanceId: string, request: ListLogstashLogRequest): Promise<ListLogstashLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogstashLogWithOptions(InstanceId, request, headers, runtime);
  }

  async listLogstashLogWithOptions(InstanceId: string, request: ListLogstashLogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogstashLogResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListLogstashLogResponse>(await this.doROARequest("ListLogstashLog", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/logstashes/${InstanceId}/search-log`, "json", req, runtime), new ListLogstashLogResponse({}));
  }

  async listLogstashPlugins(InstanceId: string, request: ListLogstashPluginsRequest): Promise<ListLogstashPluginsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLogstashPluginsWithOptions(InstanceId, request, headers, runtime);
  }

  async listLogstashPluginsWithOptions(InstanceId: string, request: ListLogstashPluginsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLogstashPluginsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListLogstashPluginsResponse>(await this.doROARequest("ListLogstashPlugins", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/logstashes/${InstanceId}/plugins`, "json", req, runtime), new ListLogstashPluginsResponse({}));
  }

  async listNodes(ResId: string, request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNodesWithOptions(ResId, request, headers, runtime);
  }

  async listNodesWithOptions(ResId: string, request: ListNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    ResId = OpenApiUtil.getEncodeParam(ResId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ecsInstanceIds)) {
      query["ecsInstanceIds"] = request.ecsInstanceIds;
    }

    if (!Util.isUnset(request.ecsInstanceName)) {
      query["ecsInstanceName"] = request.ecsInstanceName;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.tags)) {
      query["tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListNodesResponse>(await this.doROARequest("ListNodes", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/collectors/${ResId}/nodes`, "json", req, runtime), new ListNodesResponse({}));
  }

  async listPipeline(InstanceId: string, request: ListPipelineRequest): Promise<ListPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineWithOptions(InstanceId, request, headers, runtime);
  }

  async listPipelineWithOptions(InstanceId: string, request: ListPipelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.pipelineId)) {
      query["pipelineId"] = request.pipelineId;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListPipelineResponse>(await this.doROARequest("ListPipeline", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/logstashes/${InstanceId}/pipelines`, "json", req, runtime), new ListPipelineResponse({}));
  }

  async listPipelineIds(InstanceId: string): Promise<ListPipelineIdsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineIdsWithOptions(InstanceId, headers, runtime);
  }

  async listPipelineIdsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineIdsResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListPipelineIdsResponse>(await this.doROARequest("ListPipelineIds", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/pipeline-ids`, "json", req, runtime), new ListPipelineIdsResponse({}));
  }

  async listPlugins(InstanceId: string, request: ListPluginsRequest): Promise<ListPluginsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPluginsWithOptions(InstanceId, request, headers, runtime);
  }

  async listPluginsWithOptions(InstanceId: string, request: ListPluginsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPluginsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.source)) {
      query["source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListPluginsResponse>(await this.doROARequest("ListPlugins", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/plugins`, "json", req, runtime), new ListPluginsResponse({}));
  }

  async listSearchLog(InstanceId: string, request: ListSearchLogRequest): Promise<ListSearchLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSearchLogWithOptions(InstanceId, request, headers, runtime);
  }

  async listSearchLogWithOptions(InstanceId: string, request: ListSearchLogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSearchLogResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListSearchLogResponse>(await this.doROARequest("ListSearchLog", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/search-log`, "json", req, runtime), new ListSearchLogResponse({}));
  }

  async listShardRecoveries(InstanceId: string, request: ListShardRecoveriesRequest): Promise<ListShardRecoveriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listShardRecoveriesWithOptions(InstanceId, request, headers, runtime);
  }

  async listShardRecoveriesWithOptions(InstanceId: string, request: ListShardRecoveriesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListShardRecoveriesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.activeOnly)) {
      query["activeOnly"] = request.activeOnly;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListShardRecoveriesResponse>(await this.doROARequest("ListShardRecoveries", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/cat-recovery`, "json", req, runtime), new ListShardRecoveriesResponse({}));
  }

  async listSnapshotReposByInstanceId(InstanceId: string): Promise<ListSnapshotReposByInstanceIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSnapshotReposByInstanceIdWithOptions(InstanceId, headers, runtime);
  }

  async listSnapshotReposByInstanceIdWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSnapshotReposByInstanceIdResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListSnapshotReposByInstanceIdResponse>(await this.doROARequest("ListSnapshotReposByInstanceId", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/snapshot-repos`, "json", req, runtime), new ListSnapshotReposByInstanceIdResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListTagResourcesResponse>(await this.doROARequest("ListTagResources", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/tags`, "json", req, runtime), new ListTagResourcesResponse({}));
  }

  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagsWithOptions(request, headers, runtime);
  }

  async listTagsWithOptions(request: ListTagsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["resourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListTagsResponse>(await this.doROARequest("ListTags", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/tags/all-tags`, "json", req, runtime), new ListTagsResponse({}));
  }

  async listVpcEndpoints(InstanceId: string, request: ListVpcEndpointsRequest): Promise<ListVpcEndpointsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVpcEndpointsWithOptions(InstanceId, request, headers, runtime);
  }

  async listVpcEndpointsWithOptions(InstanceId: string, request: ListVpcEndpointsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListVpcEndpointsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListVpcEndpointsResponse>(await this.doROARequest("ListVpcEndpoints", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/vpc-endpoints`, "json", req, runtime), new ListVpcEndpointsResponse({}));
  }

  async migrateToOtherZone(InstanceId: string, request: MigrateToOtherZoneRequest): Promise<MigrateToOtherZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateToOtherZoneWithOptions(InstanceId, request, headers, runtime);
  }

  async migrateToOtherZoneWithOptions(InstanceId: string, request: MigrateToOtherZoneRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<MigrateToOtherZoneResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<MigrateToOtherZoneResponse>(await this.doROARequest("MigrateToOtherZone", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/migrate-zones`, "json", req, runtime), new MigrateToOtherZoneResponse({}));
  }

  async modifyDeployMachine(ResId: string, request: ModifyDeployMachineRequest): Promise<ModifyDeployMachineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyDeployMachineWithOptions(ResId, request, headers, runtime);
  }

  async modifyDeployMachineWithOptions(ResId: string, request: ModifyDeployMachineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyDeployMachineResponse> {
    Util.validateModel(request);
    ResId = OpenApiUtil.getEncodeParam(ResId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ModifyDeployMachineResponse>(await this.doROARequest("ModifyDeployMachine", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/collectors/${ResId}/actions/modify-deploy-machines`, "json", req, runtime), new ModifyDeployMachineResponse({}));
  }

  async modifyElastictask(InstanceId: string): Promise<ModifyElastictaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyElastictaskWithOptions(InstanceId, headers, runtime);
  }

  async modifyElastictaskWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyElastictaskResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ModifyElastictaskResponse>(await this.doROARequest("ModifyElastictask", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/elastic-task`, "json", req, runtime), new ModifyElastictaskResponse({}));
  }

  async modifyInstanceMaintainTime(InstanceId: string, request: ModifyInstanceMaintainTimeRequest): Promise<ModifyInstanceMaintainTimeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyInstanceMaintainTimeWithOptions(InstanceId, request, headers, runtime);
  }

  async modifyInstanceMaintainTimeWithOptions(InstanceId: string, request: ModifyInstanceMaintainTimeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceMaintainTimeResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ModifyInstanceMaintainTimeResponse>(await this.doROARequest("ModifyInstanceMaintainTime", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/modify-maintaintime`, "json", req, runtime), new ModifyInstanceMaintainTimeResponse({}));
  }

  async modifyWhiteIps(InstanceId: string, request: ModifyWhiteIpsRequest): Promise<ModifyWhiteIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.modifyWhiteIpsWithOptions(InstanceId, request, headers, runtime);
  }

  async modifyWhiteIpsWithOptions(InstanceId: string, request: ModifyWhiteIpsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ModifyWhiteIpsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.modifyMode)) {
      body["modifyMode"] = request.modifyMode;
    }

    if (!Util.isUnset(request.networkType)) {
      body["networkType"] = request.networkType;
    }

    if (!Util.isUnset(request.nodeType)) {
      body["nodeType"] = request.nodeType;
    }

    if (!Util.isUnset($tea.toMap(request.whiteIpGroup))) {
      body["whiteIpGroup"] = request.whiteIpGroup;
    }

    if (!Util.isUnset(request.whiteIpList)) {
      body["whiteIpList"] = request.whiteIpList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<ModifyWhiteIpsResponse>(await this.doROARequestWithForm("ModifyWhiteIps", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/modify-white-ips`, "json", req, runtime), new ModifyWhiteIpsResponse({}));
  }

  async moveResourceGroup(InstanceId: string, request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.moveResourceGroupWithOptions(InstanceId, request, headers, runtime);
  }

  async moveResourceGroupWithOptions(InstanceId: string, request: MoveResourceGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.doROARequest("MoveResourceGroup", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/resourcegroup`, "json", req, runtime), new MoveResourceGroupResponse({}));
  }

  async openDiagnosis(InstanceId: string, request: OpenDiagnosisRequest): Promise<OpenDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openDiagnosisWithOptions(InstanceId, request, headers, runtime);
  }

  async openDiagnosisWithOptions(InstanceId: string, request: OpenDiagnosisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OpenDiagnosisResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<OpenDiagnosisResponse>(await this.doROARequest("OpenDiagnosis", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/diagnosis/instances/${InstanceId}/actions/open-diagnosis`, "json", req, runtime), new OpenDiagnosisResponse({}));
  }

  async openHttps(InstanceId: string, request: OpenHttpsRequest): Promise<OpenHttpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.openHttpsWithOptions(InstanceId, request, headers, runtime);
  }

  async openHttpsWithOptions(InstanceId: string, request: OpenHttpsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OpenHttpsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<OpenHttpsResponse>(await this.doROARequest("OpenHttps", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/open-https`, "json", req, runtime), new OpenHttpsResponse({}));
  }

  async postEmonTryAlarmRule(ProjectId: string, AlarmGroupId: string): Promise<PostEmonTryAlarmRuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.postEmonTryAlarmRuleWithOptions(ProjectId, AlarmGroupId, headers, runtime);
  }

  async postEmonTryAlarmRuleWithOptions(ProjectId: string, AlarmGroupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PostEmonTryAlarmRuleResponse> {
    ProjectId = OpenApiUtil.getEncodeParam(ProjectId);
    AlarmGroupId = OpenApiUtil.getEncodeParam(AlarmGroupId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<PostEmonTryAlarmRuleResponse>(await this.doROARequest("PostEmonTryAlarmRule", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/emon/projects/${ProjectId}/alarm-groups/${AlarmGroupId}/alarm-rules/_test`, "json", req, runtime), new PostEmonTryAlarmRuleResponse({}));
  }

  async recommendTemplates(InstanceId: string, request: RecommendTemplatesRequest): Promise<RecommendTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.recommendTemplatesWithOptions(InstanceId, request, headers, runtime);
  }

  async recommendTemplatesWithOptions(InstanceId: string, request: RecommendTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RecommendTemplatesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.usageScenario)) {
      query["usageScenario"] = request.usageScenario;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<RecommendTemplatesResponse>(await this.doROARequest("RecommendTemplates", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/instances/${InstanceId}/recommended-templates`, "json", req, runtime), new RecommendTemplatesResponse({}));
  }

  async reinstallCollector(ResId: string, request: ReinstallCollectorRequest): Promise<ReinstallCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reinstallCollectorWithOptions(ResId, request, headers, runtime);
  }

  async reinstallCollectorWithOptions(ResId: string, request: ReinstallCollectorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReinstallCollectorResponse> {
    Util.validateModel(request);
    ResId = OpenApiUtil.getEncodeParam(ResId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ReinstallCollectorResponse>(await this.doROARequest("ReinstallCollector", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/collectors/${ResId}/actions/reinstall`, "json", req, runtime), new ReinstallCollectorResponse({}));
  }

  async removeApm(instanceId: string): Promise<RemoveApmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeApmWithOptions(instanceId, headers, runtime);
  }

  async removeApmWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveApmResponse> {
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<RemoveApmResponse>(await this.doROARequest("RemoveApm", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/apm/${instanceId}`, "json", req, runtime), new RemoveApmResponse({}));
  }

  async renewInstance(InstanceId: string, request: RenewInstanceRequest): Promise<RenewInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  async renewInstanceWithOptions(InstanceId: string, request: RenewInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RenewInstanceResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<RenewInstanceResponse>(await this.doROARequest("RenewInstance", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/renew`, "json", req, runtime), new RenewInstanceResponse({}));
  }

  async renewLogstash(InstanceId: string, request: RenewLogstashRequest): Promise<RenewLogstashResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renewLogstashWithOptions(InstanceId, request, headers, runtime);
  }

  async renewLogstashWithOptions(InstanceId: string, request: RenewLogstashRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RenewLogstashResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<RenewLogstashResponse>(await this.doROARequest("RenewLogstash", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/actions/renew`, "json", req, runtime), new RenewLogstashResponse({}));
  }

  async restartCollector(ResId: string, request: RestartCollectorRequest): Promise<RestartCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartCollectorWithOptions(ResId, request, headers, runtime);
  }

  async restartCollectorWithOptions(ResId: string, request: RestartCollectorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartCollectorResponse> {
    Util.validateModel(request);
    ResId = OpenApiUtil.getEncodeParam(ResId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<RestartCollectorResponse>(await this.doROARequest("RestartCollector", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/collectors/${ResId}/actions/restart`, "json", req, runtime), new RestartCollectorResponse({}));
  }

  async restartInstance(InstanceId: string, request: RestartInstanceRequest): Promise<RestartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  async restartInstanceWithOptions(InstanceId: string, request: RestartInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartInstanceResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<RestartInstanceResponse>(await this.doROARequest("RestartInstance", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/restart`, "json", req, runtime), new RestartInstanceResponse({}));
  }

  async restartLogstash(InstanceId: string, request: RestartLogstashRequest): Promise<RestartLogstashResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartLogstashWithOptions(InstanceId, request, headers, runtime);
  }

  async restartLogstashWithOptions(InstanceId: string, request: RestartLogstashRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartLogstashResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<RestartLogstashResponse>(await this.doROARequest("RestartLogstash", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/actions/restart`, "json", req, runtime), new RestartLogstashResponse({}));
  }

  async resumeElasticsearchTask(InstanceId: string, request: ResumeElasticsearchTaskRequest): Promise<ResumeElasticsearchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeElasticsearchTaskWithOptions(InstanceId, request, headers, runtime);
  }

  async resumeElasticsearchTaskWithOptions(InstanceId: string, request: ResumeElasticsearchTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResumeElasticsearchTaskResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ResumeElasticsearchTaskResponse>(await this.doROARequest("ResumeElasticsearchTask", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/resume`, "json", req, runtime), new ResumeElasticsearchTaskResponse({}));
  }

  async resumeLogstashTask(InstanceId: string, request: ResumeLogstashTaskRequest): Promise<ResumeLogstashTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeLogstashTaskWithOptions(InstanceId, request, headers, runtime);
  }

  async resumeLogstashTaskWithOptions(InstanceId: string, request: ResumeLogstashTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ResumeLogstashTaskResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ResumeLogstashTaskResponse>(await this.doROARequest("ResumeLogstashTask", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/actions/resume`, "json", req, runtime), new ResumeLogstashTaskResponse({}));
  }

  async rolloverDataStream(InstanceId: string, DataStream: string, request: RolloverDataStreamRequest): Promise<RolloverDataStreamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rolloverDataStreamWithOptions(InstanceId, DataStream, request, headers, runtime);
  }

  async rolloverDataStreamWithOptions(InstanceId: string, DataStream: string, request: RolloverDataStreamRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RolloverDataStreamResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    DataStream = OpenApiUtil.getEncodeParam(DataStream);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<RolloverDataStreamResponse>(await this.doROARequest("RolloverDataStream", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/data-streams/${DataStream}/rollover`, "json", req, runtime), new RolloverDataStreamResponse({}));
  }

  async runPipelines(InstanceId: string, request: RunPipelinesRequest): Promise<RunPipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.runPipelinesWithOptions(InstanceId, request, headers, runtime);
  }

  async runPipelinesWithOptions(InstanceId: string, request: RunPipelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RunPipelinesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<RunPipelinesResponse>(await this.doROARequest("RunPipelines", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/pipelines/action/run`, "json", req, runtime), new RunPipelinesResponse({}));
  }

  async shrinkNode(InstanceId: string, request: ShrinkNodeRequest): Promise<ShrinkNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.shrinkNodeWithOptions(InstanceId, request, headers, runtime);
  }

  async shrinkNodeWithOptions(InstanceId: string, request: ShrinkNodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ShrinkNodeResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ignoreStatus)) {
      query["ignoreStatus"] = request.ignoreStatus;
    }

    if (!Util.isUnset(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ShrinkNodeResponse>(await this.doROARequest("ShrinkNode", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/shrink`, "json", req, runtime), new ShrinkNodeResponse({}));
  }

  async startApm(instanceId: string): Promise<StartApmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startApmWithOptions(instanceId, headers, runtime);
  }

  async startApmWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartApmResponse> {
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StartApmResponse>(await this.doROARequest("StartApm", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/apm/${instanceId}/actions/start`, "json", req, runtime), new StartApmResponse({}));
  }

  async startCollector(ResId: string, request: StartCollectorRequest): Promise<StartCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startCollectorWithOptions(ResId, request, headers, runtime);
  }

  async startCollectorWithOptions(ResId: string, request: StartCollectorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartCollectorResponse> {
    Util.validateModel(request);
    ResId = OpenApiUtil.getEncodeParam(ResId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<StartCollectorResponse>(await this.doROARequest("StartCollector", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/collectors/${ResId}/actions/start`, "json", req, runtime), new StartCollectorResponse({}));
  }

  async stopApm(instanceId: string): Promise<StopApmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopApmWithOptions(instanceId, headers, runtime);
  }

  async stopApmWithOptions(instanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopApmResponse> {
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StopApmResponse>(await this.doROARequest("StopApm", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/apm/${instanceId}/actions/stop`, "json", req, runtime), new StopApmResponse({}));
  }

  async stopCollector(ResId: string, request: StopCollectorRequest): Promise<StopCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopCollectorWithOptions(ResId, request, headers, runtime);
  }

  async stopCollectorWithOptions(ResId: string, request: StopCollectorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopCollectorResponse> {
    Util.validateModel(request);
    ResId = OpenApiUtil.getEncodeParam(ResId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<StopCollectorResponse>(await this.doROARequest("StopCollector", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/collectors/${ResId}/actions/stop`, "json", req, runtime), new StopCollectorResponse({}));
  }

  async stopPipelines(InstanceId: string, request: StopPipelinesRequest): Promise<StopPipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopPipelinesWithOptions(InstanceId, request, headers, runtime);
  }

  async stopPipelinesWithOptions(InstanceId: string, request: StopPipelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopPipelinesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<StopPipelinesResponse>(await this.doROARequest("StopPipelines", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/pipelines/action/stop`, "json", req, runtime), new StopPipelinesResponse({}));
  }

  async tagResources(): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(headers, runtime);
  }

  async tagResourcesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<TagResourcesResponse>(await this.doROARequest("TagResources", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/tags`, "json", req, runtime), new TagResourcesResponse({}));
  }

  async transferNode(InstanceId: string, request: TransferNodeRequest): Promise<TransferNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.transferNodeWithOptions(InstanceId, request, headers, runtime);
  }

  async transferNodeWithOptions(InstanceId: string, request: TransferNodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TransferNodeResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<TransferNodeResponse>(await this.doROARequest("TransferNode", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/transfer`, "json", req, runtime), new TransferNodeResponse({}));
  }

  async triggerNetwork(InstanceId: string, request: TriggerNetworkRequest): Promise<TriggerNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.triggerNetworkWithOptions(InstanceId, request, headers, runtime);
  }

  async triggerNetworkWithOptions(InstanceId: string, request: TriggerNetworkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TriggerNetworkResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionType)) {
      body["actionType"] = request.actionType;
    }

    if (!Util.isUnset(request.networkType)) {
      body["networkType"] = request.networkType;
    }

    if (!Util.isUnset(request.nodeType)) {
      body["nodeType"] = request.nodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<TriggerNetworkResponse>(await this.doROARequest("TriggerNetwork", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/network-trigger`, "json", req, runtime), new TriggerNetworkResponse({}));
  }

  async uninstallKibanaPlugin(InstanceId: string, request: UninstallKibanaPluginRequest): Promise<UninstallKibanaPluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uninstallKibanaPluginWithOptions(InstanceId, request, headers, runtime);
  }

  async uninstallKibanaPluginWithOptions(InstanceId: string, request: UninstallKibanaPluginRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UninstallKibanaPluginResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UninstallKibanaPluginResponse>(await this.doROARequest("UninstallKibanaPlugin", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/kibana-plugins/actions/uninstall`, "json", req, runtime), new UninstallKibanaPluginResponse({}));
  }

  async uninstallLogstashPlugin(InstanceId: string, request: UninstallLogstashPluginRequest): Promise<UninstallLogstashPluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uninstallLogstashPluginWithOptions(InstanceId, request, headers, runtime);
  }

  async uninstallLogstashPluginWithOptions(InstanceId: string, request: UninstallLogstashPluginRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UninstallLogstashPluginResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UninstallLogstashPluginResponse>(await this.doROARequest("UninstallLogstashPlugin", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/plugins/actions/uninstall`, "json", req, runtime), new UninstallLogstashPluginResponse({}));
  }

  async uninstallPlugin(InstanceId: string, request: UninstallPluginRequest): Promise<UninstallPluginResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uninstallPluginWithOptions(InstanceId, request, headers, runtime);
  }

  async uninstallPluginWithOptions(InstanceId: string, request: UninstallPluginRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UninstallPluginResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UninstallPluginResponse>(await this.doROARequest("UninstallPlugin", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/plugins/actions/uninstall`, "json", req, runtime), new UninstallPluginResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UntagResourcesResponse>(await this.doROARequest("UntagResources", "2017-06-13", "HTTPS", "DELETE", "AK", `/openapi/tags`, "json", req, runtime), new UntagResourcesResponse({}));
  }

  async updateAdminPassword(InstanceId: string, request: UpdateAdminPasswordRequest): Promise<UpdateAdminPasswordResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAdminPasswordWithOptions(InstanceId, request, headers, runtime);
  }

  async updateAdminPasswordWithOptions(InstanceId: string, request: UpdateAdminPasswordRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAdminPasswordResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateAdminPasswordResponse>(await this.doROARequest("UpdateAdminPassword", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/admin-pwd`, "json", req, runtime), new UpdateAdminPasswordResponse({}));
  }

  async updateAdvancedSetting(InstanceId: string, request: UpdateAdvancedSettingRequest): Promise<UpdateAdvancedSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAdvancedSettingWithOptions(InstanceId, request, headers, runtime);
  }

  async updateAdvancedSettingWithOptions(InstanceId: string, request: UpdateAdvancedSettingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAdvancedSettingResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateAdvancedSettingResponse>(await this.doROARequest("UpdateAdvancedSetting", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/update-advanced-setting`, "json", req, runtime), new UpdateAdvancedSettingResponse({}));
  }

  async updateAliwsDict(InstanceId: string, request: UpdateAliwsDictRequest): Promise<UpdateAliwsDictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAliwsDictWithOptions(InstanceId, request, headers, runtime);
  }

  async updateAliwsDictWithOptions(InstanceId: string, request: UpdateAliwsDictRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAliwsDictResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateAliwsDictResponse>(await this.doROARequest("UpdateAliwsDict", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/aliws-dict`, "json", req, runtime), new UpdateAliwsDictResponse({}));
  }

  async updateApm(instanceId: string, request: UpdateApmRequest): Promise<UpdateApmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateApmWithOptions(instanceId, request, headers, runtime);
  }

  async updateApmWithOptions(instanceId: string, request: UpdateApmRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateApmResponse> {
    Util.validateModel(request);
    instanceId = OpenApiUtil.getEncodeParam(instanceId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.outputES)) {
      body["outputES"] = request.outputES;
    }

    if (!Util.isUnset(request.outputESPassword)) {
      body["outputESPassword"] = request.outputESPassword;
    }

    if (!Util.isUnset(request.outputESUserName)) {
      body["outputESUserName"] = request.outputESUserName;
    }

    if (!Util.isUnset(request.token)) {
      body["token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateApmResponse>(await this.doROARequest("UpdateApm", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/apm/${instanceId}`, "json", req, runtime), new UpdateApmResponse({}));
  }

  async updateBlackIps(InstanceId: string, request: UpdateBlackIpsRequest): Promise<UpdateBlackIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateBlackIpsWithOptions(InstanceId, request, headers, runtime);
  }

  async updateBlackIpsWithOptions(InstanceId: string, request: UpdateBlackIpsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateBlackIpsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.esIPBlacklist)) {
      body["esIPBlacklist"] = request.esIPBlacklist;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateBlackIpsResponse>(await this.doROARequestWithForm("UpdateBlackIps", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/black-ips`, "json", req, runtime), new UpdateBlackIpsResponse({}));
  }

  async updateCollector(ResId: string, request: UpdateCollectorRequest): Promise<UpdateCollectorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCollectorWithOptions(ResId, request, headers, runtime);
  }

  async updateCollectorWithOptions(ResId: string, request: UpdateCollectorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateCollectorResponse> {
    Util.validateModel(request);
    ResId = OpenApiUtil.getEncodeParam(ResId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateCollectorResponse>(await this.doROARequest("UpdateCollector", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/collectors/${ResId}`, "json", req, runtime), new UpdateCollectorResponse({}));
  }

  async updateCollectorName(ResId: string, request: UpdateCollectorNameRequest): Promise<UpdateCollectorNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCollectorNameWithOptions(ResId, request, headers, runtime);
  }

  async updateCollectorNameWithOptions(ResId: string, request: UpdateCollectorNameRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateCollectorNameResponse> {
    Util.validateModel(request);
    ResId = OpenApiUtil.getEncodeParam(ResId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateCollectorNameResponse>(await this.doROARequest("UpdateCollectorName", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/collectors/${ResId}/actions/rename`, "json", req, runtime), new UpdateCollectorNameResponse({}));
  }

  async updateComponentIndex(InstanceId: string, name: string, request: UpdateComponentIndexRequest): Promise<UpdateComponentIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateComponentIndexWithOptions(InstanceId, name, request, headers, runtime);
  }

  async updateComponentIndexWithOptions(InstanceId: string, name: string, request: UpdateComponentIndexRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateComponentIndexResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    name = OpenApiUtil.getEncodeParam(name);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.meta)) {
      body["_meta"] = request.meta;
    }

    if (!Util.isUnset($tea.toMap(request.template))) {
      body["template"] = request.template;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateComponentIndexResponse>(await this.doROARequest("UpdateComponentIndex", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/component-index/${name}`, "json", req, runtime), new UpdateComponentIndexResponse({}));
  }

  async updateDescription(InstanceId: string, request: UpdateDescriptionRequest): Promise<UpdateDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDescriptionWithOptions(InstanceId, request, headers, runtime);
  }

  async updateDescriptionWithOptions(InstanceId: string, request: UpdateDescriptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDescriptionResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateDescriptionResponse>(await this.doROARequest("UpdateDescription", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/description`, "json", req, runtime), new UpdateDescriptionResponse({}));
  }

  async updateDiagnosisSettings(InstanceId: string, request: UpdateDiagnosisSettingsRequest): Promise<UpdateDiagnosisSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDiagnosisSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  async updateDiagnosisSettingsWithOptions(InstanceId: string, request: UpdateDiagnosisSettingsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDiagnosisSettingsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateDiagnosisSettingsResponse>(await this.doROARequest("UpdateDiagnosisSettings", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/diagnosis/instances/${InstanceId}/settings`, "json", req, runtime), new UpdateDiagnosisSettingsResponse({}));
  }

  async updateDict(InstanceId: string, request: UpdateDictRequest): Promise<UpdateDictResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateDictWithOptions(InstanceId, request, headers, runtime);
  }

  async updateDictWithOptions(InstanceId: string, request: UpdateDictRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateDictResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateDictResponse>(await this.doROARequest("UpdateDict", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/dict`, "json", req, runtime), new UpdateDictResponse({}));
  }

  async updateExtendConfig(InstanceId: string, request: UpdateExtendConfigRequest): Promise<UpdateExtendConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExtendConfigWithOptions(InstanceId, request, headers, runtime);
  }

  async updateExtendConfigWithOptions(InstanceId: string, request: UpdateExtendConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExtendConfigResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateExtendConfigResponse>(await this.doROARequest("UpdateExtendConfig", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/extend-configs/actions/update`, "json", req, runtime), new UpdateExtendConfigResponse({}));
  }

  async updateExtendfiles(InstanceId: string, request: UpdateExtendfilesRequest): Promise<UpdateExtendfilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExtendfilesWithOptions(InstanceId, request, headers, runtime);
  }

  async updateExtendfilesWithOptions(InstanceId: string, request: UpdateExtendfilesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExtendfilesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateExtendfilesResponse>(await this.doROARequest("UpdateExtendfiles", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/logstashes/${InstanceId}/extendfiles`, "json", req, runtime), new UpdateExtendfilesResponse({}));
  }

  async updateHotIkDicts(InstanceId: string, request: UpdateHotIkDictsRequest): Promise<UpdateHotIkDictsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateHotIkDictsWithOptions(InstanceId, request, headers, runtime);
  }

  async updateHotIkDictsWithOptions(InstanceId: string, request: UpdateHotIkDictsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateHotIkDictsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateHotIkDictsResponse>(await this.doROARequest("UpdateHotIkDicts", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/ik-hot-dict`, "json", req, runtime), new UpdateHotIkDictsResponse({}));
  }

  async updateILMPolicy(InstanceId: string, PolicyName: string, request: UpdateILMPolicyRequest): Promise<UpdateILMPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateILMPolicyWithOptions(InstanceId, PolicyName, request, headers, runtime);
  }

  async updateILMPolicyWithOptions(InstanceId: string, PolicyName: string, request: UpdateILMPolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateILMPolicyResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    PolicyName = OpenApiUtil.getEncodeParam(PolicyName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateILMPolicyResponse>(await this.doROARequest("UpdateILMPolicy", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/ilm-policies/${PolicyName}`, "json", req, runtime), new UpdateILMPolicyResponse({}));
  }

  async updateIndexTemplate(InstanceId: string, IndexTemplate: string, request: UpdateIndexTemplateRequest): Promise<UpdateIndexTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateIndexTemplateWithOptions(InstanceId, IndexTemplate, request, headers, runtime);
  }

  async updateIndexTemplateWithOptions(InstanceId: string, IndexTemplate: string, request: UpdateIndexTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateIndexTemplateResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    IndexTemplate = OpenApiUtil.getEncodeParam(IndexTemplate);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateIndexTemplateResponse>(await this.doROARequest("UpdateIndexTemplate", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/index-templates/${IndexTemplate}`, "json", req, runtime), new UpdateIndexTemplateResponse({}));
  }

  async updateInstance(InstanceId: string, request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  async updateInstanceWithOptions(InstanceId: string, request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ignoreStatus)) {
      query["ignoreStatus"] = request.ignoreStatus;
    }

    if (!Util.isUnset(request.orderActionType)) {
      query["orderActionType"] = request.orderActionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateInstanceResponse>(await this.doROARequest("UpdateInstance", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}`, "json", req, runtime), new UpdateInstanceResponse({}));
  }

  async updateInstanceChargeType(InstanceId: string, request: UpdateInstanceChargeTypeRequest): Promise<UpdateInstanceChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceChargeTypeWithOptions(InstanceId, request, headers, runtime);
  }

  async updateInstanceChargeTypeWithOptions(InstanceId: string, request: UpdateInstanceChargeTypeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceChargeTypeResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateInstanceChargeTypeResponse>(await this.doROARequest("UpdateInstanceChargeType", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/convert-pay-type`, "json", req, runtime), new UpdateInstanceChargeTypeResponse({}));
  }

  async updateInstanceSettings(InstanceId: string, request: UpdateInstanceSettingsRequest): Promise<UpdateInstanceSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  async updateInstanceSettingsWithOptions(InstanceId: string, request: UpdateInstanceSettingsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceSettingsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateInstanceSettingsResponse>(await this.doROARequest("UpdateInstanceSettings", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/instance-settings`, "json", req, runtime), new UpdateInstanceSettingsResponse({}));
  }

  async updateKibanaSettings(InstanceId: string, request: UpdateKibanaSettingsRequest): Promise<UpdateKibanaSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKibanaSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  async updateKibanaSettingsWithOptions(InstanceId: string, request: UpdateKibanaSettingsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateKibanaSettingsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateKibanaSettingsResponse>(await this.doROARequest("UpdateKibanaSettings", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/update-kibana-settings`, "json", req, runtime), new UpdateKibanaSettingsResponse({}));
  }

  async updateKibanaWhiteIps(InstanceId: string, request: UpdateKibanaWhiteIpsRequest): Promise<UpdateKibanaWhiteIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateKibanaWhiteIpsWithOptions(InstanceId, request, headers, runtime);
  }

  async updateKibanaWhiteIpsWithOptions(InstanceId: string, request: UpdateKibanaWhiteIpsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateKibanaWhiteIpsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.modifyMode)) {
      query["modifyMode"] = request.modifyMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateKibanaWhiteIpsResponse>(await this.doROARequest("UpdateKibanaWhiteIps", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/kibana-white-ips`, "json", req, runtime), new UpdateKibanaWhiteIpsResponse({}));
  }

  async updateLogstash(InstanceId: string, request: UpdateLogstashRequest): Promise<UpdateLogstashResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogstashWithOptions(InstanceId, request, headers, runtime);
  }

  async updateLogstashWithOptions(InstanceId: string, request: UpdateLogstashRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLogstashResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateLogstashResponse>(await this.doROARequest("UpdateLogstash", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/logstashes/${InstanceId}`, "json", req, runtime), new UpdateLogstashResponse({}));
  }

  async updateLogstashChargeType(InstanceId: string, request: UpdateLogstashChargeTypeRequest): Promise<UpdateLogstashChargeTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogstashChargeTypeWithOptions(InstanceId, request, headers, runtime);
  }

  async updateLogstashChargeTypeWithOptions(InstanceId: string, request: UpdateLogstashChargeTypeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLogstashChargeTypeResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateLogstashChargeTypeResponse>(await this.doROARequest("UpdateLogstashChargeType", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/actions/convert-pay-type`, "json", req, runtime), new UpdateLogstashChargeTypeResponse({}));
  }

  async updateLogstashDescription(InstanceId: string, request: UpdateLogstashDescriptionRequest): Promise<UpdateLogstashDescriptionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogstashDescriptionWithOptions(InstanceId, request, headers, runtime);
  }

  async updateLogstashDescriptionWithOptions(InstanceId: string, request: UpdateLogstashDescriptionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLogstashDescriptionResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateLogstashDescriptionResponse>(await this.doROARequest("UpdateLogstashDescription", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/description`, "json", req, runtime), new UpdateLogstashDescriptionResponse({}));
  }

  async updateLogstashSettings(InstanceId: string, request: UpdateLogstashSettingsRequest): Promise<UpdateLogstashSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateLogstashSettingsWithOptions(InstanceId, request, headers, runtime);
  }

  async updateLogstashSettingsWithOptions(InstanceId: string, request: UpdateLogstashSettingsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateLogstashSettingsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateLogstashSettingsResponse>(await this.doROARequest("UpdateLogstashSettings", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/instance-settings`, "json", req, runtime), new UpdateLogstashSettingsResponse({}));
  }

  async updatePipelineManagementConfig(InstanceId: string, request: UpdatePipelineManagementConfigRequest): Promise<UpdatePipelineManagementConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelineManagementConfigWithOptions(InstanceId, request, headers, runtime);
  }

  async updatePipelineManagementConfigWithOptions(InstanceId: string, request: UpdatePipelineManagementConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePipelineManagementConfigResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdatePipelineManagementConfigResponse>(await this.doROARequest("UpdatePipelineManagementConfig", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/pipeline-management-config`, "json", req, runtime), new UpdatePipelineManagementConfigResponse({}));
  }

  async updatePipelines(InstanceId: string, request: UpdatePipelinesRequest): Promise<UpdatePipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelinesWithOptions(InstanceId, request, headers, runtime);
  }

  async updatePipelinesWithOptions(InstanceId: string, request: UpdatePipelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePipelinesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.trigger)) {
      query["trigger"] = request.trigger;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdatePipelinesResponse>(await this.doROARequest("UpdatePipelines", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/logstashes/${InstanceId}/pipelines`, "json", req, runtime), new UpdatePipelinesResponse({}));
  }

  async updatePrivateNetworkWhiteIps(InstanceId: string, request: UpdatePrivateNetworkWhiteIpsRequest): Promise<UpdatePrivateNetworkWhiteIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePrivateNetworkWhiteIpsWithOptions(InstanceId, request, headers, runtime);
  }

  async updatePrivateNetworkWhiteIpsWithOptions(InstanceId: string, request: UpdatePrivateNetworkWhiteIpsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePrivateNetworkWhiteIpsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.modifyMode)) {
      query["modifyMode"] = request.modifyMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdatePrivateNetworkWhiteIpsResponse>(await this.doROARequest("UpdatePrivateNetworkWhiteIps", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/private-network-white-ips`, "json", req, runtime), new UpdatePrivateNetworkWhiteIpsResponse({}));
  }

  async updatePublicNetwork(InstanceId: string, request: UpdatePublicNetworkRequest): Promise<UpdatePublicNetworkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePublicNetworkWithOptions(InstanceId, request, headers, runtime);
  }

  async updatePublicNetworkWithOptions(InstanceId: string, request: UpdatePublicNetworkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePublicNetworkResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdatePublicNetworkResponse>(await this.doROARequest("UpdatePublicNetwork", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/public-network`, "json", req, runtime), new UpdatePublicNetworkResponse({}));
  }

  async updatePublicWhiteIps(InstanceId: string, request: UpdatePublicWhiteIpsRequest): Promise<UpdatePublicWhiteIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePublicWhiteIpsWithOptions(InstanceId, request, headers, runtime);
  }

  async updatePublicWhiteIpsWithOptions(InstanceId: string, request: UpdatePublicWhiteIpsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePublicWhiteIpsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.modifyMode)) {
      query["modifyMode"] = request.modifyMode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdatePublicWhiteIpsResponse>(await this.doROARequest("UpdatePublicWhiteIps", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/public-white-ips`, "json", req, runtime), new UpdatePublicWhiteIpsResponse({}));
  }

  async updateReadWritePolicy(InstanceId: string, request: UpdateReadWritePolicyRequest): Promise<UpdateReadWritePolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateReadWritePolicyWithOptions(InstanceId, request, headers, runtime);
  }

  async updateReadWritePolicyWithOptions(InstanceId: string, request: UpdateReadWritePolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateReadWritePolicyResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateReadWritePolicyResponse>(await this.doROARequest("UpdateReadWritePolicy", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/update-read-write-policy`, "json", req, runtime), new UpdateReadWritePolicyResponse({}));
  }

  async updateSnapshotSetting(InstanceId: string): Promise<UpdateSnapshotSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSnapshotSettingWithOptions(InstanceId, headers, runtime);
  }

  async updateSnapshotSettingWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSnapshotSettingResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<UpdateSnapshotSettingResponse>(await this.doROARequest("UpdateSnapshotSetting", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/snapshot-setting`, "json", req, runtime), new UpdateSnapshotSettingResponse({}));
  }

  async updateSynonymsDicts(InstanceId: string, request: UpdateSynonymsDictsRequest): Promise<UpdateSynonymsDictsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateSynonymsDictsWithOptions(InstanceId, request, headers, runtime);
  }

  async updateSynonymsDictsWithOptions(InstanceId: string, request: UpdateSynonymsDictsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateSynonymsDictsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateSynonymsDictsResponse>(await this.doROARequest("UpdateSynonymsDicts", "2017-06-13", "HTTPS", "PUT", "AK", `/openapi/instances/${InstanceId}/synonymsDict`, "json", req, runtime), new UpdateSynonymsDictsResponse({}));
  }

  async updateTemplate(InstanceId: string, TemplateName: string, request: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTemplateWithOptions(InstanceId, TemplateName, request, headers, runtime);
  }

  async updateTemplateWithOptions(InstanceId: string, TemplateName: string, request: UpdateTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTemplateResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    TemplateName = OpenApiUtil.getEncodeParam(TemplateName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateTemplateResponse>(await this.doROARequest("UpdateTemplate", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/templates/${TemplateName}`, "json", req, runtime), new UpdateTemplateResponse({}));
  }

  async updateWhiteIps(InstanceId: string, request: UpdateWhiteIpsRequest): Promise<UpdateWhiteIpsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateWhiteIpsWithOptions(InstanceId, request, headers, runtime);
  }

  async updateWhiteIpsWithOptions(InstanceId: string, request: UpdateWhiteIpsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateWhiteIpsResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.modifyMode)) {
      query["modifyMode"] = request.modifyMode;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.esIPWhitelist)) {
      body["esIPWhitelist"] = request.esIPWhitelist;
    }

    if (!Util.isUnset($tea.toMap(request.whiteIpGroup))) {
      body["whiteIpGroup"] = request.whiteIpGroup;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateWhiteIpsResponse>(await this.doROARequest("UpdateWhiteIps", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/white-ips`, "json", req, runtime), new UpdateWhiteIpsResponse({}));
  }

  async updateXpackMonitorConfig(InstanceId: string, request: UpdateXpackMonitorConfigRequest): Promise<UpdateXpackMonitorConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateXpackMonitorConfigWithOptions(InstanceId, request, headers, runtime);
  }

  async updateXpackMonitorConfigWithOptions(InstanceId: string, request: UpdateXpackMonitorConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateXpackMonitorConfigResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateXpackMonitorConfigResponse>(await this.doROARequest("UpdateXpackMonitorConfig", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/xpack-monitor-config`, "json", req, runtime), new UpdateXpackMonitorConfigResponse({}));
  }

  async upgradeEngineVersion(InstanceId: string, request: UpgradeEngineVersionRequest): Promise<UpgradeEngineVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeEngineVersionWithOptions(InstanceId, request, headers, runtime);
  }

  async upgradeEngineVersionWithOptions(InstanceId: string, request: UpgradeEngineVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpgradeEngineVersionResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["dryRun"] = request.dryRun;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
    }

    if (!Util.isUnset(request.version)) {
      body["version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpgradeEngineVersionResponse>(await this.doROARequestWithForm("UpgradeEngineVersion", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/upgrade-version`, "json", req, runtime), new UpgradeEngineVersionResponse({}));
  }

  async validateConnection(InstanceId: string, request: ValidateConnectionRequest): Promise<ValidateConnectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateConnectionWithOptions(InstanceId, request, headers, runtime);
  }

  async validateConnectionWithOptions(InstanceId: string, request: ValidateConnectionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ValidateConnectionResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ValidateConnectionResponse>(await this.doROARequest("ValidateConnection", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/logstashes/${InstanceId}/validate-connection`, "json", req, runtime), new ValidateConnectionResponse({}));
  }

  async validateShrinkNodes(InstanceId: string, request: ValidateShrinkNodesRequest): Promise<ValidateShrinkNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateShrinkNodesWithOptions(InstanceId, request, headers, runtime);
  }

  async validateShrinkNodesWithOptions(InstanceId: string, request: ValidateShrinkNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ValidateShrinkNodesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ignoreStatus)) {
      query["ignoreStatus"] = request.ignoreStatus;
    }

    if (!Util.isUnset(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ValidateShrinkNodesResponse>(await this.doROARequest("ValidateShrinkNodes", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/validate-shrink-nodes`, "json", req, runtime), new ValidateShrinkNodesResponse({}));
  }

  async validateSlrPermission(request: ValidateSlrPermissionRequest): Promise<ValidateSlrPermissionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateSlrPermissionWithOptions(request, headers, runtime);
  }

  async validateSlrPermissionWithOptions(request: ValidateSlrPermissionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ValidateSlrPermissionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.rolename)) {
      query["rolename"] = request.rolename;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ValidateSlrPermissionResponse>(await this.doROARequest("ValidateSlrPermission", "2017-06-13", "HTTPS", "GET", "AK", `/openapi/user/servicerolepermission`, "json", req, runtime), new ValidateSlrPermissionResponse({}));
  }

  async validateTransferableNodes(InstanceId: string, request: ValidateTransferableNodesRequest): Promise<ValidateTransferableNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.validateTransferableNodesWithOptions(InstanceId, request, headers, runtime);
  }

  async validateTransferableNodesWithOptions(InstanceId: string, request: ValidateTransferableNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ValidateTransferableNodesResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ValidateTransferableNodesResponse>(await this.doROARequest("ValidateTransferableNodes", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/validate-transfer-nodes`, "json", req, runtime), new ValidateTransferableNodesResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doROARequest("createInstance", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances`, "json", req, runtime), new CreateInstanceResponse({}));
  }

}
