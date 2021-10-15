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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  taskType?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      taskType: 'taskType',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskType: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelTaskResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      requestId: 'string',
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
  result?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      requestId: 'string',
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
  trigger?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      trigger: 'trigger',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trigger: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelinesResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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

export class DeleteILMPolicyResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  repoPath?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      repoPath: 'repoPath',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoPath: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSnapshotRepoResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
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
  lang?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'lang',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      clientToken: 'string',
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
  success?: boolean;
  result?: GetEmonMonitorDataResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      result: { 'type': 'array', 'itemType': GetEmonMonitorDataResponseBodyResult },
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
  nodeType?: string;
  count?: number;
  ignoreStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'nodeType',
      count: 'count',
      ignoreStatus: 'ignoreStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      count: 'number',
      ignoreStatus: 'boolean',
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
  nodeType?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'nodeType',
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      count: 'number',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  resId?: string;
  name?: string;
  instanceId?: string;
  page?: number;
  size?: number;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resId: 'resId',
      name: 'name',
      instanceId: 'instanceId',
      page: 'page',
      size: 'size',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resId: 'string',
      name: 'string',
      instanceId: 'string',
      page: 'number',
      size: 'number',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectorsResponseBody extends $tea.Model {
  requestId?: string;
  headers?: ListCollectorsResponseBodyHeaders;
  result?: ListCollectorsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListCollectorsResponseBodyHeaders,
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
  requestId?: string;
  headers?: ListDataStreamsResponseBodyHeaders;
  result?: ListDataStreamsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListDataStreamsResponseBodyHeaders,
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
  lang?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  size?: number;
  detail?: boolean;
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'lang',
      startTime: 'startTime',
      endTime: 'endTime',
      page: 'page',
      size: 'size',
      detail: 'detail',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
      page: 'number',
      size: 'number',
      detail: 'boolean',
      trigger: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponseBody extends $tea.Model {
  requestId?: string;
  headers?: ListDiagnoseReportResponseBodyHeaders;
  result?: ListDiagnoseReportResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListDiagnoseReportResponseBodyHeaders,
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
  lang?: string;
  startTime?: number;
  endTime?: number;
  page?: number;
  size?: number;
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'lang',
      startTime: 'startTime',
      endTime: 'endTime',
      page: 'page',
      size: 'size',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      startTime: 'number',
      endTime: 'number',
      page: 'number',
      size: 'number',
      trigger: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportIdsResponseBody extends $tea.Model {
  requestId?: string;
  result?: string[];
  headers?: ListDiagnoseReportIdsResponseBodyHeaders;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      headers: 'Headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
      headers: ListDiagnoseReportIdsResponseBodyHeaders,
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
  bucketName?: string;
  key?: string;
  analyzerType?: string;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      key: 'key',
      analyzerType: 'analyzerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      key: 'string',
      analyzerType: 'string',
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
  requestId?: string;
  headers?: ListDictsResponseBodyHeaders;
  result?: ListDictsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListDictsResponseBodyHeaders,
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
  page?: number;
  size?: number;
  ecsInstanceIds?: string;
  ecsInstanceName?: string;
  tags?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
      ecsInstanceIds: 'ecsInstanceIds',
      ecsInstanceName: 'ecsInstanceName',
      tags: 'tags',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      ecsInstanceIds: 'string',
      ecsInstanceName: 'string',
      tags: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBody extends $tea.Model {
  requestId?: string;
  headers?: ListEcsInstancesResponseBodyHeaders;
  result?: ListEcsInstancesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListEcsInstancesResponseBodyHeaders,
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
  page?: number;
  size?: number;
  description?: string;
  instanceId?: string;
  esVersion?: string;
  resourceGroupId?: string;
  tags?: string;
  vpcId?: string;
  zoneId?: string;
  paymentType?: string;
  instanceCategory?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
      description: 'description',
      instanceId: 'instanceId',
      esVersion: 'esVersion',
      resourceGroupId: 'resourceGroupId',
      tags: 'tags',
      vpcId: 'vpcId',
      zoneId: 'zoneId',
      paymentType: 'paymentType',
      instanceCategory: 'instanceCategory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      description: 'string',
      instanceId: 'string',
      esVersion: 'string',
      resourceGroupId: 'string',
      tags: 'string',
      vpcId: 'string',
      zoneId: 'string',
      paymentType: 'string',
      instanceCategory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBody extends $tea.Model {
  requestId?: string;
  headers?: ListInstanceResponseBodyHeaders;
  result?: ListInstanceResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListInstanceResponseBodyHeaders,
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
  name?: string;
  isManaged?: boolean;
  isOpenstore?: boolean;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      name: 'name',
      isManaged: 'isManaged',
      isOpenstore: 'isOpenstore',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      name: 'string',
      isManaged: 'boolean',
      isOpenstore: 'boolean',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIndicesResponseBody extends $tea.Model {
  requestId?: string;
  headers?: ListInstanceIndicesResponseBodyHeaders;
  result?: ListInstanceIndicesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListInstanceIndicesResponseBodyHeaders,
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
  requestId?: string;
  headers?: ListKibanaPluginsResponseBodyHeaders;
  result?: ListKibanaPluginsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListKibanaPluginsResponseBodyHeaders,
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
  page?: number;
  size?: number;
  description?: string;
  instanceId?: string;
  version?: string;
  ownerId?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
      description: 'description',
      instanceId: 'instanceId',
      version: 'version',
      ownerId: 'ownerId',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      description: 'string',
      instanceId: 'string',
      version: 'string',
      ownerId: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponseBody extends $tea.Model {
  requestId?: string;
  headers?: ListLogstashResponseBodyHeaders;
  result?: ListLogstashResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListLogstashResponseBodyHeaders,
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
  type?: string;
  query?: string;
  beginTime?: number;
  endTime?: number;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      query: 'query',
      beginTime: 'beginTime',
      endTime: 'endTime',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      query: 'string',
      beginTime: 'number',
      endTime: 'number',
      page: 'number',
      size: 'number',
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
  page?: number;
  size?: number;
  ecsInstanceIds?: string;
  ecsInstanceName?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'page',
      size: 'size',
      ecsInstanceIds: 'ecsInstanceIds',
      ecsInstanceName: 'ecsInstanceName',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      ecsInstanceIds: 'string',
      ecsInstanceName: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  requestId?: string;
  headers?: ListNodesResponseBodyHeaders;
  result?: ListNodesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListNodesResponseBodyHeaders,
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
  pipelineId?: string;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'pipelineId',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineResponseBody extends $tea.Model {
  requestId?: string;
  headers?: ListPipelineResponseBodyHeaders;
  result?: ListPipelineResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListPipelineResponseBodyHeaders,
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
  requestId?: string;
  headers?: ListPluginsResponseBodyHeaders;
  result?: ListPluginsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListPluginsResponseBodyHeaders,
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
  type?: string;
  query?: string;
  beginTime?: number;
  endTime?: number;
  page?: number;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      query: 'query',
      beginTime: 'beginTime',
      endTime: 'endTime',
      page: 'page',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      query: 'string',
      beginTime: 'number',
      endTime: 'number',
      page: 'number',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSearchLogResponseBody extends $tea.Model {
  requestId?: string;
  headers?: ListSearchLogResponseBodyHeaders;
  result?: ListSearchLogResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      headers: 'Headers',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      headers: ListSearchLogResponseBodyHeaders,
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
  page?: number;
  size?: number;
  resourceType?: string;
  nextToken?: string;
  resourceIds?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      resourceType: 'ResourceType',
      nextToken: 'NextToken',
      resourceIds: 'ResourceIds',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      resourceType: 'string',
      nextToken: 'string',
      resourceIds: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  pageSize?: number;
  requestId?: string;
  headers?: ListTagResourcesResponseBodyHeaders;
  tagResources?: ListTagResourcesResponseBodyTagResources;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      requestId: 'RequestId',
      headers: 'Headers',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      requestId: 'string',
      headers: ListTagResourcesResponseBodyHeaders,
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
  size?: number;
  page?: number;
  static names(): { [key: string]: string } {
    return {
      size: 'size',
      page: 'page',
    };
  }

  static types(): { [key: string]: any } {
    return {
      size: 'number',
      page: 'number',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  nodeType?: string;
  networkType?: string;
  modifyMode?: string;
  whiteIpList?: string[];
  whiteIpGroup?: ModifyWhiteIpsRequestWhiteIpGroup;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      nodeType: 'nodeType',
      networkType: 'networkType',
      modifyMode: 'modifyMode',
      whiteIpList: 'whiteIpList',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nodeType: 'string',
      networkType: 'string',
      modifyMode: 'string',
      whiteIpList: { 'type': 'array', 'itemType': 'string' },
      whiteIpGroup: ModifyWhiteIpsRequestWhiteIpGroup,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyWhiteIpsResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  force?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      clientToken: 'string',
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
  force?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
      clientToken: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  nodeType?: string;
  clientToken?: string;
  ignoreStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'nodeType',
      clientToken: 'clientToken',
      ignoreStatus: 'ignoreStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      clientToken: 'string',
      ignoreStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ShrinkNodeResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  nodeType?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'nodeType',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TransferNodeResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  clientToken?: string;
  nodeType?: string;
  networkType?: string;
  actionType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      nodeType: 'nodeType',
      networkType: 'networkType',
      actionType: 'actionType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      nodeType: 'string',
      networkType: 'string',
      actionType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TriggerNetworkResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  resourceIds?: string;
  resourceType?: string;
  tagKeys?: string;
  all?: boolean;
  static names(): { [key: string]: string } {
    return {
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      tagKeys: 'TagKeys',
      all: 'All',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceIds: 'string',
      resourceType: 'string',
      tagKeys: 'string',
      all: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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

export class UpdateDescriptionRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      requestId: 'string',
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
  result?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  trigger?: boolean;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      trigger: 'trigger',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trigger: 'boolean',
      clientToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelinesResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  clientToken?: string;
  modifyMode?: string;
  esIPWhitelist?: string[];
  whiteIpGroup?: UpdateWhiteIpsRequestWhiteIpGroup;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      modifyMode: 'modifyMode',
      esIPWhitelist: 'esIPWhitelist',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      modifyMode: 'string',
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      whiteIpGroup: UpdateWhiteIpsRequestWhiteIpGroup,
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  version?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      dryRun: 'dryRun',
      version: 'version',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      version: 'string',
      type: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  nodeType?: string;
  ignoreStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      nodeType: 'nodeType',
      ignoreStatus: 'ignoreStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeType: 'string',
      ignoreStatus: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidateShrinkNodesResponseBody extends $tea.Model {
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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
  result?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
      requestId: 'string',
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

export class CapacityPlanRequestDataInfo extends $tea.Model {
  code?: string;
  size?: number;
  type?: string;
  unit?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      size: 'size',
      type: 'type',
      unit: 'unit',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      size: 'number',
      type: 'string',
      unit: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CapacityPlanRequestMetric extends $tea.Model {
  code?: string;
  concurrent?: number;
  throughput?: number;
  type?: string;
  peakQps?: number;
  averageQps?: number;
  responseTime?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      concurrent: 'concurrent',
      throughput: 'throughput',
      type: 'type',
      peakQps: 'peakQps',
      averageQps: 'averageQps',
      responseTime: 'responseTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      concurrent: 'number',
      throughput: 'number',
      type: 'string',
      peakQps: 'number',
      averageQps: 'number',
      responseTime: 'number',
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

export class CreateDataTasksResponseBodyResultSourceCluster extends $tea.Model {
  password?: string;
  index?: string;
  type?: string;
  endpoint?: string;
  username?: string;
  vpcId?: string;
  vpcInstanceId?: string;
  vpcInstancePort?: number;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      index: 'index',
      type: 'type',
      endpoint: 'endpoint',
      username: 'username',
      vpcId: 'vpcId',
      vpcInstanceId: 'vpcInstanceId',
      vpcInstancePort: 'vpcInstancePort',
      dataSourceType: 'dataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      index: 'string',
      type: 'string',
      endpoint: 'string',
      username: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
      vpcInstancePort: 'number',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataTasksResponseBodyResultSinkCluster extends $tea.Model {
  password?: string;
  index?: string;
  settings?: string;
  mapping?: string;
  type?: string;
  routing?: string;
  username?: string;
  vpcId?: string;
  vpcInstancePort?: string;
  vpcInstanceId?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      index: 'index',
      settings: 'settings',
      mapping: 'mapping',
      type: 'type',
      routing: 'routing',
      username: 'username',
      vpcId: 'vpcId',
      vpcInstancePort: 'vpcInstancePort',
      vpcInstanceId: 'vpcInstanceId',
      dataSourceType: 'dataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      index: 'string',
      settings: 'string',
      mapping: 'string',
      type: 'string',
      routing: 'string',
      username: 'string',
      vpcId: 'string',
      vpcInstancePort: 'string',
      vpcInstanceId: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataTasksResponseBodyResult extends $tea.Model {
  sourceCluster?: CreateDataTasksResponseBodyResultSourceCluster;
  sinkCluster?: CreateDataTasksResponseBodyResultSinkCluster;
  static names(): { [key: string]: string } {
    return {
      sourceCluster: 'sourceCluster',
      sinkCluster: 'sinkCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceCluster: CreateDataTasksResponseBodyResultSourceCluster,
      sinkCluster: CreateDataTasksResponseBodyResultSinkCluster,
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
  serviceId?: string;
  endpointDomain?: string;
  endpointId?: string;
  endpointName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'serviceId',
      endpointDomain: 'endpointDomain',
      endpointId: 'endpointId',
      endpointName: 'endpointName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'string',
      endpointDomain: 'string',
      endpointId: 'string',
      endpointName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAckOperatorResponseBodyResult extends $tea.Model {
  version?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'version',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      status: 'string',
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
  successPodsCount?: string;
  protocol?: string;
  userName?: string;
  totalPodsCount?: string;
  type?: string;
  kibanaHost?: string;
  enableMonitoring?: boolean;
  configType?: string;
  instanceType?: string;
  groupId?: string;
  host?: string;
  instanceId?: string;
  machines?: DescribeCollectorResponseBodyResultExtendConfigsMachines[];
  hosts?: string[];
  static names(): { [key: string]: string } {
    return {
      successPodsCount: 'successPodsCount',
      protocol: 'protocol',
      userName: 'userName',
      totalPodsCount: 'totalPodsCount',
      type: 'type',
      kibanaHost: 'kibanaHost',
      enableMonitoring: 'enableMonitoring',
      configType: 'configType',
      instanceType: 'instanceType',
      groupId: 'groupId',
      host: 'host',
      instanceId: 'instanceId',
      machines: 'machines',
      hosts: 'hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successPodsCount: 'string',
      protocol: 'string',
      userName: 'string',
      totalPodsCount: 'string',
      type: 'string',
      kibanaHost: 'string',
      enableMonitoring: 'boolean',
      configType: 'string',
      instanceType: 'string',
      groupId: 'string',
      host: 'string',
      instanceId: 'string',
      machines: { 'type': 'array', 'itemType': DescribeCollectorResponseBodyResultExtendConfigsMachines },
      hosts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCollectorResponseBodyResult extends $tea.Model {
  resId?: string;
  gmtUpdateTime?: string;
  dryRun?: boolean;
  ownerId?: string;
  vpcId?: string;
  resType?: string;
  resVersion?: string;
  gmtCreatedTime?: string;
  status?: string;
  name?: string;
  configs?: DescribeCollectorResponseBodyResultConfigs[];
  extendConfigs?: DescribeCollectorResponseBodyResultExtendConfigs[];
  collectorPaths?: string[];
  static names(): { [key: string]: string } {
    return {
      resId: 'resId',
      gmtUpdateTime: 'gmtUpdateTime',
      dryRun: 'dryRun',
      ownerId: 'ownerId',
      vpcId: 'vpcId',
      resType: 'resType',
      resVersion: 'resVersion',
      gmtCreatedTime: 'gmtCreatedTime',
      status: 'status',
      name: 'name',
      configs: 'configs',
      extendConfigs: 'extendConfigs',
      collectorPaths: 'collectorPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resId: 'string',
      gmtUpdateTime: 'string',
      dryRun: 'boolean',
      ownerId: 'string',
      vpcId: 'string',
      resType: 'string',
      resVersion: 'string',
      gmtCreatedTime: 'string',
      status: 'string',
      name: 'string',
      configs: { 'type': 'array', 'itemType': DescribeCollectorResponseBodyResultConfigs },
      extendConfigs: { 'type': 'array', 'itemType': DescribeCollectorResponseBodyResultExtendConfigs },
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeConnectableClustersResponseBodyResult extends $tea.Model {
  networkType?: string;
  instances?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'networkType',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      instances: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail extends $tea.Model {
  type?: string;
  name?: string;
  desc?: string;
  result?: string;
  suggest?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      name: 'name',
      desc: 'desc',
      result: 'result',
      suggest: 'suggest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      desc: 'string',
      result: 'string',
      suggest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportResponseBodyResultDiagnoseItems extends $tea.Model {
  item?: string;
  health?: string;
  detail?: DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail;
  static names(): { [key: string]: string } {
    return {
      item: 'item',
      health: 'health',
      detail: 'detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      health: 'string',
      detail: DescribeDiagnoseReportResponseBodyResultDiagnoseItemsDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportResponseBodyResult extends $tea.Model {
  trigger?: string;
  createTime?: number;
  reportId?: string;
  state?: string;
  instanceId?: string;
  health?: string;
  diagnoseItems?: DescribeDiagnoseReportResponseBodyResultDiagnoseItems[];
  static names(): { [key: string]: string } {
    return {
      trigger: 'trigger',
      createTime: 'createTime',
      reportId: 'reportId',
      state: 'state',
      instanceId: 'instanceId',
      health: 'health',
      diagnoseItems: 'diagnoseItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trigger: 'string',
      createTime: 'number',
      reportId: 'string',
      state: 'string',
      instanceId: 'string',
      health: 'string',
      diagnoseItems: { 'type': 'array', 'itemType': DescribeDiagnoseReportResponseBodyResultDiagnoseItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosisSettingsResponseBodyResult extends $tea.Model {
  updateTime?: number;
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      updateTime: 'updateTime',
      scene: 'scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateTime: 'number',
      scene: 'string',
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
  settings?: string;
  mappings?: string;
  aliases?: string;
  static names(): { [key: string]: string } {
    return {
      settings: 'settings',
      mappings: 'mappings',
      aliases: 'aliases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: 'string',
      mappings: 'string',
      aliases: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIndexTemplateResponseBodyResult extends $tea.Model {
  dataStream?: boolean;
  indexTemplate?: string;
  ilmPolicy?: string;
  priority?: number;
  indexPatterns?: string[];
  template?: DescribeIndexTemplateResponseBodyResultTemplate;
  static names(): { [key: string]: string } {
    return {
      dataStream: 'dataStream',
      indexTemplate: 'indexTemplate',
      ilmPolicy: 'ilmPolicy',
      priority: 'priority',
      indexPatterns: 'indexPatterns',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStream: 'boolean',
      indexTemplate: 'string',
      ilmPolicy: 'string',
      priority: 'number',
      indexPatterns: { 'type': 'array', 'itemType': 'string' },
      template: DescribeIndexTemplateResponseBodyResultTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultDictList extends $tea.Model {
  fileSize?: number;
  sourceType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      sourceType: 'sourceType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      sourceType: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultSynonymsDicts extends $tea.Model {
  fileSize?: number;
  sourceType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      sourceType: 'sourceType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      sourceType: 'string',
      name: 'string',
      type: 'string',
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

export class DescribeInstanceResponseBodyResultAliwsDicts extends $tea.Model {
  fileSize?: number;
  sourceType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      sourceType: 'sourceType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      sourceType: 'string',
      name: 'string',
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

export class DescribeInstanceResponseBodyResultNodeSpec extends $tea.Model {
  spec?: string;
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultNetworkConfigWhiteIpGroupList extends $tea.Model {
  whiteIpType?: string;
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      whiteIpType: 'whiteIpType',
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteIpType: 'string',
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultNetworkConfig extends $tea.Model {
  vpcId?: string;
  vsArea?: string;
  type?: string;
  vswitchId?: string;
  whiteIpGroupList?: DescribeInstanceResponseBodyResultNetworkConfigWhiteIpGroupList[];
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      type: 'type',
      vswitchId: 'vswitchId',
      whiteIpGroupList: 'whiteIpGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vsArea: 'string',
      type: 'string',
      vswitchId: 'string',
      whiteIpGroupList: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultNetworkConfigWhiteIpGroupList },
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
  spec?: string;
  amount?: number;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultClientNodeConfiguration extends $tea.Model {
  spec?: string;
  amount?: number;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResultWarmNodeConfiguration extends $tea.Model {
  amount?: number;
  spec?: string;
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      spec: 'spec',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      spec: 'string',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
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

export class DescribeInstanceResponseBodyResultElasticDataNodeConfiguration extends $tea.Model {
  amount?: number;
  spec?: string;
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'amount',
      spec: 'spec',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      spec: 'string',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyResult extends $tea.Model {
  advancedDedicateMaster?: boolean;
  protocol?: string;
  enableKibanaPublicNetwork?: boolean;
  nodeAmount?: number;
  createdAt?: string;
  enableKibanaPrivateNetwork?: boolean;
  vpcInstanceId?: string;
  port?: number;
  enablePublic?: boolean;
  dedicateMaster?: boolean;
  kibanaPort?: number;
  esConfig?: { [key: string]: any };
  resourceGroupId?: string;
  paymentType?: string;
  postpaidServiceStatus?: string;
  esVersion?: string;
  haveKibana?: boolean;
  isNewDeployment?: boolean;
  warmNode?: boolean;
  updatedAt?: string;
  instanceId?: string;
  zoneCount?: number;
  publicDomain?: string;
  status?: string;
  serviceVpc?: boolean;
  publicPort?: number;
  haveClientNode?: boolean;
  domain?: string;
  description?: string;
  kibanaDomain?: string;
  dictList?: DescribeInstanceResponseBodyResultDictList[];
  synonymsDicts?: DescribeInstanceResponseBodyResultSynonymsDicts[];
  zoneInfos?: DescribeInstanceResponseBodyResultZoneInfos[];
  aliwsDicts?: DescribeInstanceResponseBodyResultAliwsDicts[];
  tags?: DescribeInstanceResponseBodyResultTags[];
  esIPWhitelist?: string[];
  extendConfigs?: { [key: string]: any }[];
  privateNetworkIpWhiteList?: string[];
  publicIpWhitelist?: string[];
  kibanaPrivateIPWhitelist?: string[];
  esIPBlacklist?: string[];
  kibanaIPWhitelist?: string[];
  nodeSpec?: DescribeInstanceResponseBodyResultNodeSpec;
  networkConfig?: DescribeInstanceResponseBodyResultNetworkConfig;
  kibanaConfiguration?: DescribeInstanceResponseBodyResultKibanaConfiguration;
  masterConfiguration?: DescribeInstanceResponseBodyResultMasterConfiguration;
  clientNodeConfiguration?: DescribeInstanceResponseBodyResultClientNodeConfiguration;
  warmNodeConfiguration?: DescribeInstanceResponseBodyResultWarmNodeConfiguration;
  advancedSetting?: DescribeInstanceResponseBodyResultAdvancedSetting;
  elasticDataNodeConfiguration?: DescribeInstanceResponseBodyResultElasticDataNodeConfiguration;
  static names(): { [key: string]: string } {
    return {
      advancedDedicateMaster: 'advancedDedicateMaster',
      protocol: 'protocol',
      enableKibanaPublicNetwork: 'enableKibanaPublicNetwork',
      nodeAmount: 'nodeAmount',
      createdAt: 'createdAt',
      enableKibanaPrivateNetwork: 'enableKibanaPrivateNetwork',
      vpcInstanceId: 'vpcInstanceId',
      port: 'port',
      enablePublic: 'enablePublic',
      dedicateMaster: 'dedicateMaster',
      kibanaPort: 'kibanaPort',
      esConfig: 'esConfig',
      resourceGroupId: 'resourceGroupId',
      paymentType: 'paymentType',
      postpaidServiceStatus: 'postpaidServiceStatus',
      esVersion: 'esVersion',
      haveKibana: 'haveKibana',
      isNewDeployment: 'isNewDeployment',
      warmNode: 'warmNode',
      updatedAt: 'updatedAt',
      instanceId: 'instanceId',
      zoneCount: 'zoneCount',
      publicDomain: 'publicDomain',
      status: 'status',
      serviceVpc: 'serviceVpc',
      publicPort: 'publicPort',
      haveClientNode: 'haveClientNode',
      domain: 'domain',
      description: 'description',
      kibanaDomain: 'kibanaDomain',
      dictList: 'dictList',
      synonymsDicts: 'synonymsDicts',
      zoneInfos: 'zoneInfos',
      aliwsDicts: 'aliwsDicts',
      tags: 'tags',
      esIPWhitelist: 'esIPWhitelist',
      extendConfigs: 'extendConfigs',
      privateNetworkIpWhiteList: 'privateNetworkIpWhiteList',
      publicIpWhitelist: 'publicIpWhitelist',
      kibanaPrivateIPWhitelist: 'kibanaPrivateIPWhitelist',
      esIPBlacklist: 'esIPBlacklist',
      kibanaIPWhitelist: 'kibanaIPWhitelist',
      nodeSpec: 'nodeSpec',
      networkConfig: 'networkConfig',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
      clientNodeConfiguration: 'clientNodeConfiguration',
      warmNodeConfiguration: 'warmNodeConfiguration',
      advancedSetting: 'advancedSetting',
      elasticDataNodeConfiguration: 'elasticDataNodeConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDedicateMaster: 'boolean',
      protocol: 'string',
      enableKibanaPublicNetwork: 'boolean',
      nodeAmount: 'number',
      createdAt: 'string',
      enableKibanaPrivateNetwork: 'boolean',
      vpcInstanceId: 'string',
      port: 'number',
      enablePublic: 'boolean',
      dedicateMaster: 'boolean',
      kibanaPort: 'number',
      esConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceGroupId: 'string',
      paymentType: 'string',
      postpaidServiceStatus: 'string',
      esVersion: 'string',
      haveKibana: 'boolean',
      isNewDeployment: 'boolean',
      warmNode: 'boolean',
      updatedAt: 'string',
      instanceId: 'string',
      zoneCount: 'number',
      publicDomain: 'string',
      status: 'string',
      serviceVpc: 'boolean',
      publicPort: 'number',
      haveClientNode: 'boolean',
      domain: 'string',
      description: 'string',
      kibanaDomain: 'string',
      dictList: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultDictList },
      synonymsDicts: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultSynonymsDicts },
      zoneInfos: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultZoneInfos },
      aliwsDicts: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultAliwsDicts },
      tags: { 'type': 'array', 'itemType': DescribeInstanceResponseBodyResultTags },
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      privateNetworkIpWhiteList: { 'type': 'array', 'itemType': 'string' },
      publicIpWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaPrivateIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      esIPBlacklist: { 'type': 'array', 'itemType': 'string' },
      kibanaIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      nodeSpec: DescribeInstanceResponseBodyResultNodeSpec,
      networkConfig: DescribeInstanceResponseBodyResultNetworkConfig,
      kibanaConfiguration: DescribeInstanceResponseBodyResultKibanaConfiguration,
      masterConfiguration: DescribeInstanceResponseBodyResultMasterConfiguration,
      clientNodeConfiguration: DescribeInstanceResponseBodyResultClientNodeConfiguration,
      warmNodeConfiguration: DescribeInstanceResponseBodyResultWarmNodeConfiguration,
      advancedSetting: DescribeInstanceResponseBodyResultAdvancedSetting,
      elasticDataNodeConfiguration: DescribeInstanceResponseBodyResultElasticDataNodeConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResultEndpointList extends $tea.Model {
  zoneId?: string;
  port?: string;
  host?: string;
  static names(): { [key: string]: string } {
    return {
      zoneId: 'zoneId',
      port: 'port',
      host: 'host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: 'string',
      port: 'string',
      host: 'string',
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

export class DescribeLogstashResponseBodyResultNodeSpec extends $tea.Model {
  spec?: string;
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResultNetworkConfig extends $tea.Model {
  vpcId?: string;
  vsArea?: string;
  type?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      type: 'type',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vsArea: 'string',
      type: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogstashResponseBodyResult extends $tea.Model {
  config?: { [key: string]: any };
  paymentType?: string;
  resourceGroupId?: string;
  nodeAmount?: number;
  description?: string;
  createdAt?: string;
  status?: string;
  vpcInstanceId?: string;
  updatedAt?: string;
  version?: string;
  instanceId?: string;
  endpointList?: DescribeLogstashResponseBodyResultEndpointList[];
  tags?: DescribeLogstashResponseBodyResultTags[];
  zoneInfos?: DescribeLogstashResponseBodyResultZoneInfos[];
  extendConfigs?: { [key: string]: any }[];
  nodeSpec?: DescribeLogstashResponseBodyResultNodeSpec;
  networkConfig?: DescribeLogstashResponseBodyResultNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      paymentType: 'paymentType',
      resourceGroupId: 'ResourceGroupId',
      nodeAmount: 'nodeAmount',
      description: 'description',
      createdAt: 'createdAt',
      status: 'status',
      vpcInstanceId: 'vpcInstanceId',
      updatedAt: 'updatedAt',
      version: 'version',
      instanceId: 'instanceId',
      endpointList: 'endpointList',
      tags: 'Tags',
      zoneInfos: 'ZoneInfos',
      extendConfigs: 'ExtendConfigs',
      nodeSpec: 'nodeSpec',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      paymentType: 'string',
      resourceGroupId: 'string',
      nodeAmount: 'number',
      description: 'string',
      createdAt: 'string',
      status: 'string',
      vpcInstanceId: 'string',
      updatedAt: 'string',
      version: 'string',
      instanceId: 'string',
      endpointList: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultEndpointList },
      tags: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultTags },
      zoneInfos: { 'type': 'array', 'itemType': DescribeLogstashResponseBodyResultZoneInfos },
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      nodeSpec: DescribeLogstashResponseBodyResultNodeSpec,
      networkConfig: DescribeLogstashResponseBodyResultNetworkConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineResponseBodyResult extends $tea.Model {
  pipelineId?: string;
  gmtUpdateTime?: string;
  queueType?: string;
  queueCheckPointWrites?: number;
  queueMaxBytes?: number;
  config?: string;
  batchDelay?: number;
  workers?: number;
  description?: string;
  gmtCreatedTime?: string;
  batchSize?: number;
  pipelineStatus?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'pipelineId',
      gmtUpdateTime: 'gmtUpdateTime',
      queueType: 'queueType',
      queueCheckPointWrites: 'queueCheckPointWrites',
      queueMaxBytes: 'queueMaxBytes',
      config: 'config',
      batchDelay: 'batchDelay',
      workers: 'workers',
      description: 'description',
      gmtCreatedTime: 'gmtCreatedTime',
      batchSize: 'batchSize',
      pipelineStatus: 'pipelineStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      gmtUpdateTime: 'string',
      queueType: 'string',
      queueCheckPointWrites: 'number',
      queueMaxBytes: 'number',
      config: 'string',
      batchDelay: 'number',
      workers: 'number',
      description: 'string',
      gmtCreatedTime: 'string',
      batchSize: 'number',
      pipelineStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePipelineManagementConfigResponseBodyResult extends $tea.Model {
  endpoints?: string;
  userName?: string;
  pipelineManagementType?: string;
  esInstanceId?: string;
  pipelineIds?: string[];
  static names(): { [key: string]: string } {
    return {
      endpoints: 'endpoints',
      userName: 'userName',
      pipelineManagementType: 'pipelineManagementType',
      esInstanceId: 'esInstanceId',
      pipelineIds: 'pipelineIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoints: 'string',
      userName: 'string',
      pipelineManagementType: 'string',
      esInstanceId: 'string',
      pipelineIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyResult extends $tea.Model {
  regionId?: string;
  status?: string;
  regionEndpoint?: string;
  localName?: string;
  consoleEndpoint?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'regionId',
      status: 'status',
      regionEndpoint: 'regionEndpoint',
      localName: 'localName',
      consoleEndpoint: 'consoleEndpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      status: 'string',
      regionEndpoint: 'string',
      localName: 'string',
      consoleEndpoint: 'string',
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
  userName?: string;
  esInstanceId?: string;
  enable?: boolean;
  endpoints?: string[];
  pipelineIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userName: 'userName',
      esInstanceId: 'esInstanceId',
      enable: 'enable',
      endpoints: 'endpoints',
      pipelineIds: 'pipelineIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
      esInstanceId: 'string',
      enable: 'boolean',
      endpoints: { 'type': 'array', 'itemType': 'string' },
      pipelineIds: { 'type': 'array', 'itemType': 'string' },
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
  reportId?: string;
  state?: string;
  instanceId?: string;
  diagnoseItems?: DiagnoseInstanceResponseBodyResultDiagnoseItems[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      reportId: 'reportId',
      state: 'state',
      instanceId: 'instanceId',
      diagnoseItems: 'diagnoseItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      reportId: 'string',
      state: 'string',
      instanceId: 'string',
      diagnoseItems: { 'type': 'array', 'itemType': DiagnoseInstanceResponseBodyResultDiagnoseItems },
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
  mapping?: string;
  settings?: string;
  typeName?: string[];
  fields?: string[];
  indices?: string[];
  static names(): { [key: string]: string } {
    return {
      mapping: 'mapping',
      settings: 'settings',
      typeName: 'typeName',
      fields: 'fields',
      indices: 'indices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mapping: 'string',
      settings: 'string',
      typeName: { 'type': 'array', 'itemType': 'string' },
      fields: { 'type': 'array', 'itemType': 'string' },
      indices: { 'type': 'array', 'itemType': 'string' },
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
  triggerType?: string;
  replicaCount?: number;
  elasticNodeCount?: number;
  cronExpression?: string;
  targetIndices?: string[];
  static names(): { [key: string]: string } {
    return {
      triggerType: 'triggerType',
      replicaCount: 'replicaCount',
      elasticNodeCount: 'elasticNodeCount',
      cronExpression: 'cronExpression',
      targetIndices: 'targetIndices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerType: 'string',
      replicaCount: 'number',
      elasticNodeCount: 'number',
      cronExpression: 'string',
      targetIndices: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetElastictaskResponseBodyResultElasticShrinkTask extends $tea.Model {
  triggerType?: string;
  replicaCount?: number;
  elasticNodeCount?: number;
  cronExpression?: string;
  targetIndices?: string[];
  static names(): { [key: string]: string } {
    return {
      triggerType: 'triggerType',
      replicaCount: 'replicaCount',
      elasticNodeCount: 'elasticNodeCount',
      cronExpression: 'cronExpression',
      targetIndices: 'targetIndices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerType: 'string',
      replicaCount: 'number',
      elasticNodeCount: 'number',
      cronExpression: 'string',
      targetIndices: { 'type': 'array', 'itemType': 'string' },
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
  integrity?: number;
  summary?: number;
  messageWatermark?: number;
  dps?: { [key: string]: any };
  tags?: { [key: string]: any };
  metric?: string;
  static names(): { [key: string]: string } {
    return {
      integrity: 'integrity',
      summary: 'summary',
      messageWatermark: 'messageWatermark',
      dps: 'dps',
      tags: 'tags',
      metric: 'metric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      integrity: 'number',
      summary: 'number',
      messageWatermark: 'number',
      dps: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metric: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOpenStoreUsageResponseBodyResult extends $tea.Model {
  lastDayUsage?: number;
  currentUsage?: number;
  static names(): { [key: string]: string } {
    return {
      lastDayUsage: 'lastDayUsage',
      currentUsage: 'currentUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastDayUsage: 'number',
      currentUsage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultDataDiskList extends $tea.Model {
  scaleLimit?: number;
  minSize?: number;
  maxSize?: number;
  diskType?: string;
  valueLimitSet?: string[];
  static names(): { [key: string]: string } {
    return {
      scaleLimit: 'scaleLimit',
      minSize: 'minSize',
      maxSize: 'maxSize',
      diskType: 'diskType',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleLimit: 'number',
      minSize: 'number',
      maxSize: 'number',
      diskType: 'string',
      valueLimitSet: { 'type': 'array', 'itemType': 'string' },
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

export class GetRegionConfigurationResponseBodyResultNodeSpecList extends $tea.Model {
  memorySize?: number;
  cpuCount?: number;
  diskType?: string;
  spec?: string;
  disk?: number;
  specGroupType?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      memorySize: 'memorySize',
      cpuCount: 'cpuCount',
      diskType: 'diskType',
      spec: 'spec',
      disk: 'disk',
      specGroupType: 'specGroupType',
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memorySize: 'number',
      cpuCount: 'number',
      diskType: 'string',
      spec: 'string',
      disk: 'number',
      specGroupType: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultClientNodeDiskList extends $tea.Model {
  scaleLimit?: number;
  minSize?: number;
  maxSize?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      scaleLimit: 'scaleLimit',
      minSize: 'minSize',
      maxSize: 'maxSize',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleLimit: 'number',
      minSize: 'number',
      maxSize: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultMasterDiskList extends $tea.Model {
  scaleLimit?: number;
  minSize?: number;
  maxSize?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      scaleLimit: 'scaleLimit',
      minSize: 'minSize',
      maxSize: 'maxSize',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleLimit: 'number',
      minSize: 'number',
      maxSize: 'number',
      diskType: 'string',
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

export class GetRegionConfigurationResponseBodyResultWarmNodePropertiesDiskList extends $tea.Model {
  scaleLimit?: number;
  minSize?: number;
  diskEncryption?: boolean;
  maxSize?: number;
  diskType?: string;
  valueLimitSet?: string[];
  static names(): { [key: string]: string } {
    return {
      scaleLimit: 'scaleLimit',
      minSize: 'minSize',
      diskEncryption: 'diskEncryption',
      maxSize: 'maxSize',
      diskType: 'diskType',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleLimit: 'number',
      minSize: 'number',
      diskEncryption: 'boolean',
      maxSize: 'number',
      diskType: 'string',
      valueLimitSet: { 'type': 'array', 'itemType': 'string' },
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

export class GetRegionConfigurationResponseBodyResultWarmNodeProperties extends $tea.Model {
  diskList?: GetRegionConfigurationResponseBodyResultWarmNodePropertiesDiskList[];
  spec?: string[];
  amountRange?: GetRegionConfigurationResponseBodyResultWarmNodePropertiesAmountRange;
  static names(): { [key: string]: string } {
    return {
      diskList: 'diskList',
      spec: 'spec',
      amountRange: 'amountRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultWarmNodePropertiesDiskList },
      spec: { 'type': 'array', 'itemType': 'string' },
      amountRange: GetRegionConfigurationResponseBodyResultWarmNodePropertiesAmountRange,
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
  spec?: string[];
  amountRange?: GetRegionConfigurationResponseBodyResultKibanaNodePropertiesAmountRange;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amountRange: 'amountRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: { 'type': 'array', 'itemType': 'string' },
      amountRange: GetRegionConfigurationResponseBodyResultKibanaNodePropertiesAmountRange,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList extends $tea.Model {
  scaleLimit?: number;
  minSize?: number;
  diskEncryption?: boolean;
  maxSize?: number;
  diskType?: string;
  valueLimitSet?: string[];
  static names(): { [key: string]: string } {
    return {
      scaleLimit: 'scaleLimit',
      minSize: 'minSize',
      diskEncryption: 'diskEncryption',
      maxSize: 'maxSize',
      diskType: 'diskType',
      valueLimitSet: 'valueLimitSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleLimit: 'number',
      minSize: 'number',
      diskEncryption: 'boolean',
      maxSize: 'number',
      diskType: 'string',
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

export class GetRegionConfigurationResponseBodyResultElasticNodeProperties extends $tea.Model {
  diskList?: GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList[];
  spec?: string[];
  amountRange?: GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange;
  static names(): { [key: string]: string } {
    return {
      diskList: 'diskList',
      spec: 'spec',
      amountRange: 'amountRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultElasticNodePropertiesDiskList },
      spec: { 'type': 'array', 'itemType': 'string' },
      amountRange: GetRegionConfigurationResponseBodyResultElasticNodePropertiesAmountRange,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRegionConfigurationResponseBodyResult extends $tea.Model {
  env?: string;
  regionId?: string;
  createUrl?: string;
  dataDiskList?: GetRegionConfigurationResponseBodyResultDataDiskList[];
  esVersionsLatestList?: GetRegionConfigurationResponseBodyResultEsVersionsLatestList[];
  nodeSpecList?: GetRegionConfigurationResponseBodyResultNodeSpecList[];
  clientNodeDiskList?: GetRegionConfigurationResponseBodyResultClientNodeDiskList[];
  masterDiskList?: GetRegionConfigurationResponseBodyResultMasterDiskList[];
  supportVersions?: GetRegionConfigurationResponseBodyResultSupportVersions[];
  masterSpec?: string[];
  clientNodeSpec?: string[];
  zones?: string[];
  instanceSupportNodes?: string[];
  esVersions?: string[];
  node?: GetRegionConfigurationResponseBodyResultNode;
  jvmConfine?: GetRegionConfigurationResponseBodyResultJvmConfine;
  clientNodeAmountRange?: GetRegionConfigurationResponseBodyResultClientNodeAmountRange;
  warmNodeProperties?: GetRegionConfigurationResponseBodyResultWarmNodeProperties;
  kibanaNodeProperties?: GetRegionConfigurationResponseBodyResultKibanaNodeProperties;
  elasticNodeProperties?: GetRegionConfigurationResponseBodyResultElasticNodeProperties;
  static names(): { [key: string]: string } {
    return {
      env: 'env',
      regionId: 'regionId',
      createUrl: 'createUrl',
      dataDiskList: 'dataDiskList',
      esVersionsLatestList: 'esVersionsLatestList',
      nodeSpecList: 'nodeSpecList',
      clientNodeDiskList: 'clientNodeDiskList',
      masterDiskList: 'masterDiskList',
      supportVersions: 'supportVersions',
      masterSpec: 'masterSpec',
      clientNodeSpec: 'clientNodeSpec',
      zones: 'zones',
      instanceSupportNodes: 'instanceSupportNodes',
      esVersions: 'esVersions',
      node: 'node',
      jvmConfine: 'jvmConfine',
      clientNodeAmountRange: 'clientNodeAmountRange',
      warmNodeProperties: 'warmNodeProperties',
      kibanaNodeProperties: 'kibanaNodeProperties',
      elasticNodeProperties: 'elasticNodeProperties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      env: 'string',
      regionId: 'string',
      createUrl: 'string',
      dataDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultDataDiskList },
      esVersionsLatestList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultEsVersionsLatestList },
      nodeSpecList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultNodeSpecList },
      clientNodeDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultClientNodeDiskList },
      masterDiskList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultMasterDiskList },
      supportVersions: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultSupportVersions },
      masterSpec: { 'type': 'array', 'itemType': 'string' },
      clientNodeSpec: { 'type': 'array', 'itemType': 'string' },
      zones: { 'type': 'array', 'itemType': 'string' },
      instanceSupportNodes: { 'type': 'array', 'itemType': 'string' },
      esVersions: { 'type': 'array', 'itemType': 'string' },
      node: GetRegionConfigurationResponseBodyResultNode,
      jvmConfine: GetRegionConfigurationResponseBodyResultJvmConfine,
      clientNodeAmountRange: GetRegionConfigurationResponseBodyResultClientNodeAmountRange,
      warmNodeProperties: GetRegionConfigurationResponseBodyResultWarmNodeProperties,
      kibanaNodeProperties: GetRegionConfigurationResponseBodyResultKibanaNodeProperties,
      elasticNodeProperties: GetRegionConfigurationResponseBodyResultElasticNodeProperties,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSuggestShrinkableNodesResponseBodyResult extends $tea.Model {
  port?: number;
  host?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      host: 'host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      host: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTransferableNodesResponseBodyResult extends $tea.Model {
  port?: number;
  host?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'port',
      host: 'host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      host: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAckClustersResponseBodyResult extends $tea.Model {
  clusterType?: string;
  vpcId?: string;
  name?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'clusterType',
      vpcId: 'vpcId',
      name: 'name',
      clusterId: 'clusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      vpcId: 'string',
      name: 'string',
      clusterId: 'string',
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
  heapPercent?: string;
  zoneId?: string;
  cpuPercent?: string;
  host?: string;
  nodeType?: string;
  diskUsedPercent?: string;
  port?: number;
  loadOneM?: string;
  health?: string;
  static names(): { [key: string]: string } {
    return {
      heapPercent: 'heapPercent',
      zoneId: 'zoneId',
      cpuPercent: 'cpuPercent',
      host: 'host',
      nodeType: 'nodeType',
      diskUsedPercent: 'diskUsedPercent',
      port: 'port',
      loadOneM: 'loadOneM',
      health: 'health',
    };
  }

  static types(): { [key: string]: any } {
    return {
      heapPercent: 'string',
      zoneId: 'string',
      cpuPercent: 'string',
      host: 'string',
      nodeType: 'string',
      diskUsedPercent: 'string',
      port: 'number',
      loadOneM: 'string',
      health: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlternativeSnapshotReposResponseBodyResult extends $tea.Model {
  repoPath?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      repoPath: 'repoPath',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repoPath: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEsInstanceIdsResponseBodyResult extends $tea.Model {
  endpoint?: string;
  description?: string;
  kibanaEndpoint?: string;
  esInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
      description: 'description',
      kibanaEndpoint: 'kibanaEndpoint',
      esInstanceId: 'esInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      description: 'string',
      kibanaEndpoint: 'string',
      esInstanceId: 'string',
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
  successPodsCount?: string;
  protocol?: string;
  userName?: string;
  totalPodsCount?: string;
  type?: string;
  kibanaHost?: string;
  enableMonitoring?: boolean;
  configType?: string;
  instanceType?: string;
  groupId?: string;
  host?: string;
  instanceId?: string;
  machines?: ListCollectorsResponseBodyResultExtendConfigsMachines[];
  hosts?: string[];
  static names(): { [key: string]: string } {
    return {
      successPodsCount: 'successPodsCount',
      protocol: 'protocol',
      userName: 'userName',
      totalPodsCount: 'totalPodsCount',
      type: 'type',
      kibanaHost: 'kibanaHost',
      enableMonitoring: 'enableMonitoring',
      configType: 'configType',
      instanceType: 'instanceType',
      groupId: 'groupId',
      host: 'host',
      instanceId: 'instanceId',
      machines: 'machines',
      hosts: 'hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successPodsCount: 'string',
      protocol: 'string',
      userName: 'string',
      totalPodsCount: 'string',
      type: 'string',
      kibanaHost: 'string',
      enableMonitoring: 'boolean',
      configType: 'string',
      instanceType: 'string',
      groupId: 'string',
      host: 'string',
      instanceId: 'string',
      machines: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResultExtendConfigsMachines },
      hosts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCollectorsResponseBodyResult extends $tea.Model {
  resId?: string;
  gmtUpdateTime?: string;
  dryRun?: boolean;
  ownerId?: string;
  vpcId?: string;
  resType?: string;
  resVersion?: string;
  gmtCreatedTime?: string;
  status?: string;
  name?: string;
  configs?: ListCollectorsResponseBodyResultConfigs[];
  extendConfigs?: ListCollectorsResponseBodyResultExtendConfigs[];
  collectorPaths?: string[];
  static names(): { [key: string]: string } {
    return {
      resId: 'resId',
      gmtUpdateTime: 'gmtUpdateTime',
      dryRun: 'dryRun',
      ownerId: 'ownerId',
      vpcId: 'vpcId',
      resType: 'resType',
      resVersion: 'resVersion',
      gmtCreatedTime: 'gmtCreatedTime',
      status: 'status',
      name: 'name',
      configs: 'configs',
      extendConfigs: 'extendConfigs',
      collectorPaths: 'collectorPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resId: 'string',
      gmtUpdateTime: 'string',
      dryRun: 'boolean',
      ownerId: 'string',
      vpcId: 'string',
      resType: 'string',
      resVersion: 'string',
      gmtCreatedTime: 'string',
      status: 'string',
      name: 'string',
      configs: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResultConfigs },
      extendConfigs: { 'type': 'array', 'itemType': ListCollectorsResponseBodyResultExtendConfigs },
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectedClustersResponseBodyResultResult extends $tea.Model {
  networkType?: string;
  instances?: string;
  static names(): { [key: string]: string } {
    return {
      networkType: 'networkType',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkType: 'string',
      instances: 'string',
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
  xManagedStorageSize?: number;
  xManagedCount?: number;
  static names(): { [key: string]: string } {
    return {
      xManagedStorageSize: 'X-Managed-StorageSize',
      xManagedCount: 'X-Managed-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xManagedStorageSize: 'number',
      xManagedCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBodyResultIndices extends $tea.Model {
  isManaged?: boolean;
  createTime?: string;
  size?: number;
  managedStatus?: string;
  name?: string;
  health?: string;
  static names(): { [key: string]: string } {
    return {
      isManaged: 'isManaged',
      createTime: 'createTime',
      size: 'size',
      managedStatus: 'managedStatus',
      name: 'name',
      health: 'health',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isManaged: 'boolean',
      createTime: 'string',
      size: 'number',
      managedStatus: 'string',
      name: 'string',
      health: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataStreamsResponseBodyResult extends $tea.Model {
  totalStorageSize?: number;
  indexTemplateName?: string;
  ilmPolicyName?: string;
  name?: string;
  health?: string;
  managedStorageSize?: number;
  indices?: ListDataStreamsResponseBodyResultIndices[];
  static names(): { [key: string]: string } {
    return {
      totalStorageSize: 'totalStorageSize',
      indexTemplateName: 'indexTemplateName',
      ilmPolicyName: 'ilmPolicyName',
      name: 'name',
      health: 'health',
      managedStorageSize: 'managedStorageSize',
      indices: 'indices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalStorageSize: 'number',
      indexTemplateName: 'string',
      ilmPolicyName: 'string',
      name: 'string',
      health: 'string',
      managedStorageSize: 'number',
      indices: { 'type': 'array', 'itemType': ListDataStreamsResponseBodyResultIndices },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataTasksResponseBodyResultSinkCluster extends $tea.Model {
  index?: string;
  type?: string;
  endpoint?: string;
  vpcId?: string;
  vpcInstancePort?: string;
  vpcInstanceId?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      type: 'type',
      endpoint: 'endpoint',
      vpcId: 'vpcId',
      vpcInstancePort: 'vpcInstancePort',
      vpcInstanceId: 'vpcInstanceId',
      dataSourceType: 'dataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      type: 'string',
      endpoint: 'string',
      vpcId: 'string',
      vpcInstancePort: 'string',
      vpcInstanceId: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataTasksResponseBodyResultSourceCluster extends $tea.Model {
  index?: string;
  settings?: string;
  mapping?: string;
  type?: string;
  routing?: string;
  dataSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      settings: 'settings',
      mapping: 'mapping',
      type: 'type',
      routing: 'routing',
      dataSourceType: 'dataSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      settings: 'string',
      mapping: 'string',
      type: 'string',
      routing: 'string',
      dataSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataTasksResponseBodyResult extends $tea.Model {
  createTime?: string;
  taskId?: string;
  status?: string;
  sinkCluster?: ListDataTasksResponseBodyResultSinkCluster;
  sourceCluster?: ListDataTasksResponseBodyResultSourceCluster;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      taskId: 'taskId',
      status: 'status',
      sinkCluster: 'sinkCluster',
      sourceCluster: 'sourceCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      taskId: 'string',
      status: 'string',
      sinkCluster: ListDataTasksResponseBodyResultSinkCluster,
      sourceCluster: ListDataTasksResponseBodyResultSourceCluster,
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
  type?: string;
  name?: string;
  desc?: string;
  result?: string;
  suggest?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      name: 'name',
      desc: 'desc',
      result: 'result',
      suggest: 'suggest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      name: 'string',
      desc: 'string',
      result: 'string',
      suggest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponseBodyResultDiagnoseItems extends $tea.Model {
  item?: string;
  health?: string;
  detail?: ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail;
  static names(): { [key: string]: string } {
    return {
      item: 'item',
      health: 'health',
      detail: 'detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      health: 'string',
      detail: ListDiagnoseReportResponseBodyResultDiagnoseItemsDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnoseReportResponseBodyResult extends $tea.Model {
  trigger?: string;
  createTime?: number;
  reportId?: string;
  state?: string;
  instanceId?: string;
  health?: string;
  diagnoseItems?: ListDiagnoseReportResponseBodyResultDiagnoseItems[];
  static names(): { [key: string]: string } {
    return {
      trigger: 'trigger',
      createTime: 'createTime',
      reportId: 'reportId',
      state: 'state',
      instanceId: 'instanceId',
      health: 'health',
      diagnoseItems: 'diagnoseItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trigger: 'string',
      createTime: 'number',
      reportId: 'string',
      state: 'string',
      instanceId: 'string',
      health: 'string',
      diagnoseItems: { 'type': 'array', 'itemType': ListDiagnoseReportResponseBodyResultDiagnoseItems },
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
  key?: string;
  bucketName?: string;
  etag?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      bucketName: 'bucketName',
      etag: 'etag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      bucketName: 'string',
      etag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDictInformationResponseBodyResult extends $tea.Model {
  type?: string;
  fileSize?: number;
  ossObject?: ListDictInformationResponseBodyResultOssObject;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      fileSize: 'fileSize',
      ossObject: 'ossObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      fileSize: 'number',
      ossObject: ListDictInformationResponseBodyResultOssObject,
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
  fileSize?: number;
  downloadUrl?: string;
  sourceType?: string;
  type?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      downloadUrl: 'downloadUrl',
      sourceType: 'sourceType',
      type: 'type',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      downloadUrl: 'string',
      sourceType: 'string',
      type: 'string',
      name: 'string',
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

export class ListEcsInstancesResponseBodyResultIpAddress extends $tea.Model {
  ipType?: string;
  host?: string;
  static names(): { [key: string]: string } {
    return {
      ipType: 'ipType',
      host: 'host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipType: 'string',
      host: 'string',
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
  enableMonitoring?: boolean;
  groupId?: string;
  configType?: string;
  instanceType?: string;
  protocol?: string;
  userName?: string;
  type?: string;
  instanceId?: string;
  machines?: ListEcsInstancesResponseBodyResultCollectorsExtendConfigsMachines[];
  hosts?: string[];
  static names(): { [key: string]: string } {
    return {
      enableMonitoring: 'enableMonitoring',
      groupId: 'groupId',
      configType: 'configType',
      instanceType: 'instanceType',
      protocol: 'protocol',
      userName: 'userName',
      type: 'type',
      instanceId: 'instanceId',
      machines: 'machines',
      hosts: 'hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableMonitoring: 'boolean',
      groupId: 'string',
      configType: 'string',
      instanceType: 'string',
      protocol: 'string',
      userName: 'string',
      type: 'string',
      instanceId: 'string',
      machines: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectorsExtendConfigsMachines },
      hosts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResultCollectors extends $tea.Model {
  resId?: string;
  gmtUpdateTime?: string;
  dryRun?: boolean;
  ownerId?: string;
  vpcId?: string;
  resType?: string;
  resVersion?: string;
  gmtCreatedTime?: string;
  status?: string;
  name?: string;
  configs?: ListEcsInstancesResponseBodyResultCollectorsConfigs[];
  extendConfigs?: ListEcsInstancesResponseBodyResultCollectorsExtendConfigs[];
  collectorPaths?: string[];
  static names(): { [key: string]: string } {
    return {
      resId: 'resId',
      gmtUpdateTime: 'gmtUpdateTime',
      dryRun: 'dryRun',
      ownerId: 'ownerId',
      vpcId: 'vpcId',
      resType: 'resType',
      resVersion: 'resVersion',
      gmtCreatedTime: 'gmtCreatedTime',
      status: 'status',
      name: 'name',
      configs: 'configs',
      extendConfigs: 'extendConfigs',
      collectorPaths: 'collectorPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resId: 'string',
      gmtUpdateTime: 'string',
      dryRun: 'boolean',
      ownerId: 'string',
      vpcId: 'string',
      resType: 'string',
      resVersion: 'string',
      gmtCreatedTime: 'string',
      status: 'string',
      name: 'string',
      configs: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectorsConfigs },
      extendConfigs: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectorsExtendConfigs },
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsInstancesResponseBodyResult extends $tea.Model {
  cloudAssistantStatus?: string;
  ecsInstanceName?: string;
  ecsInstanceId?: string;
  tags?: string;
  osType?: string;
  status?: string;
  ipAddress?: ListEcsInstancesResponseBodyResultIpAddress[];
  collectors?: ListEcsInstancesResponseBodyResultCollectors[];
  static names(): { [key: string]: string } {
    return {
      cloudAssistantStatus: 'cloudAssistantStatus',
      ecsInstanceName: 'ecsInstanceName',
      ecsInstanceId: 'ecsInstanceId',
      tags: 'tags',
      osType: 'osType',
      status: 'status',
      ipAddress: 'ipAddress',
      collectors: 'collectors',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssistantStatus: 'string',
      ecsInstanceName: 'string',
      ecsInstanceId: 'string',
      tags: 'string',
      osType: 'string',
      status: 'string',
      ipAddress: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultIpAddress },
      collectors: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResultCollectors },
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
  settings?: string;
  mappings?: string;
  aliases?: string;
  static names(): { [key: string]: string } {
    return {
      settings: 'settings',
      mappings: 'mappings',
      aliases: 'aliases',
    };
  }

  static types(): { [key: string]: any } {
    return {
      settings: 'string',
      mappings: 'string',
      aliases: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIndexTemplatesResponseBodyResult extends $tea.Model {
  dataStream?: boolean;
  indexTemplate?: string;
  ilmPolicy?: string;
  priority?: number;
  indexPatterns?: string[];
  template?: ListIndexTemplatesResponseBodyResultTemplate;
  static names(): { [key: string]: string } {
    return {
      dataStream: 'dataStream',
      indexTemplate: 'indexTemplate',
      ilmPolicy: 'ilmPolicy',
      priority: 'priority',
      indexPatterns: 'indexPatterns',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataStream: 'boolean',
      indexTemplate: 'string',
      ilmPolicy: 'string',
      priority: 'number',
      indexPatterns: { 'type': 'array', 'itemType': 'string' },
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

export class ListInstanceResponseBodyResultClientNodeConfiguration extends $tea.Model {
  spec?: string;
  amount?: number;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultElasticDataNodeConfiguration extends $tea.Model {
  spec?: string;
  amount?: number;
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultKibanaConfiguration extends $tea.Model {
  spec?: string;
  amount?: number;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultMasterConfiguration extends $tea.Model {
  spec?: string;
  amount?: number;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultNetworkConfig extends $tea.Model {
  vpcId?: string;
  vsArea?: string;
  type?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      type: 'type',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vsArea: 'string',
      type: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResultNodeSpec extends $tea.Model {
  spec?: string;
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceResponseBodyResult extends $tea.Model {
  advancedDedicateMaster?: boolean;
  nodeAmount?: number;
  createdAt?: string;
  status?: string;
  dedicateMaster?: boolean;
  serviceVpc?: boolean;
  paymentType?: string;
  resourceGroupId?: string;
  postpaidServiceStatus?: string;
  description?: string;
  esVersion?: string;
  isNewDeployment?: string;
  updatedAt?: string;
  instanceId?: string;
  tags?: ListInstanceResponseBodyResultTags[];
  extendConfigs?: { [key: string]: any }[];
  clientNodeConfiguration?: ListInstanceResponseBodyResultClientNodeConfiguration;
  elasticDataNodeConfiguration?: ListInstanceResponseBodyResultElasticDataNodeConfiguration;
  kibanaConfiguration?: ListInstanceResponseBodyResultKibanaConfiguration;
  masterConfiguration?: ListInstanceResponseBodyResultMasterConfiguration;
  networkConfig?: ListInstanceResponseBodyResultNetworkConfig;
  nodeSpec?: ListInstanceResponseBodyResultNodeSpec;
  static names(): { [key: string]: string } {
    return {
      advancedDedicateMaster: 'advancedDedicateMaster',
      nodeAmount: 'nodeAmount',
      createdAt: 'createdAt',
      status: 'status',
      dedicateMaster: 'dedicateMaster',
      serviceVpc: 'serviceVpc',
      paymentType: 'paymentType',
      resourceGroupId: 'resourceGroupId',
      postpaidServiceStatus: 'postpaidServiceStatus',
      description: 'description',
      esVersion: 'esVersion',
      isNewDeployment: 'isNewDeployment',
      updatedAt: 'updatedAt',
      instanceId: 'instanceId',
      tags: 'tags',
      extendConfigs: 'extendConfigs',
      clientNodeConfiguration: 'clientNodeConfiguration',
      elasticDataNodeConfiguration: 'elasticDataNodeConfiguration',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeSpec: 'nodeSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedDedicateMaster: 'boolean',
      nodeAmount: 'number',
      createdAt: 'string',
      status: 'string',
      dedicateMaster: 'boolean',
      serviceVpc: 'boolean',
      paymentType: 'string',
      resourceGroupId: 'string',
      postpaidServiceStatus: 'string',
      description: 'string',
      esVersion: 'string',
      isNewDeployment: 'string',
      updatedAt: 'string',
      instanceId: 'string',
      tags: { 'type': 'array', 'itemType': ListInstanceResponseBodyResultTags },
      extendConfigs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      clientNodeConfiguration: ListInstanceResponseBodyResultClientNodeConfiguration,
      elasticDataNodeConfiguration: ListInstanceResponseBodyResultElasticDataNodeConfiguration,
      kibanaConfiguration: ListInstanceResponseBodyResultKibanaConfiguration,
      masterConfiguration: ListInstanceResponseBodyResultMasterConfiguration,
      networkConfig: ListInstanceResponseBodyResultNetworkConfig,
      nodeSpec: ListInstanceResponseBodyResultNodeSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIndicesResponseBodyHeaders extends $tea.Model {
  xManagedStorageSize?: number;
  xManagedCount?: number;
  xOSSStorageSize?: number;
  xOSSCount?: number;
  static names(): { [key: string]: string } {
    return {
      xManagedStorageSize: 'X-Managed-StorageSize',
      xManagedCount: 'X-Managed-Count',
      xOSSStorageSize: 'X-OSS-StorageSize',
      xOSSCount: 'X-OSS-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xManagedStorageSize: 'number',
      xManagedCount: 'number',
      xOSSStorageSize: 'number',
      xOSSCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceIndicesResponseBodyResult extends $tea.Model {
  isManaged?: string;
  createTime?: string;
  size?: number;
  managedStatus?: string;
  name?: string;
  health?: string;
  phase?: string;
  ilmExplain?: string;
  static names(): { [key: string]: string } {
    return {
      isManaged: 'isManaged',
      createTime: 'createTime',
      size: 'size',
      managedStatus: 'managedStatus',
      name: 'name',
      health: 'health',
      phase: 'phase',
      ilmExplain: 'ilmExplain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isManaged: 'string',
      createTime: 'string',
      size: 'number',
      managedStatus: 'string',
      name: 'string',
      health: 'string',
      phase: 'string',
      ilmExplain: 'string',
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
  specificationUrl?: string;
  state?: string;
  source?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      specificationUrl: 'specificationUrl',
      state: 'state',
      source: 'source',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      specificationUrl: 'string',
      state: 'string',
      source: 'string',
      name: 'string',
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
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponseBodyResultNodeSpec extends $tea.Model {
  spec?: string;
  disk?: number;
  diskEncryption?: boolean;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      disk: 'disk',
      diskEncryption: 'diskEncryption',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      disk: 'number',
      diskEncryption: 'boolean',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponseBodyResultNetworkConfig extends $tea.Model {
  vpcId?: string;
  vsArea?: string;
  type?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      type: 'type',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vsArea: 'string',
      type: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashResponseBodyResult extends $tea.Model {
  paymentType?: string;
  nodeAmount?: number;
  description?: string;
  createdAt?: string;
  status?: string;
  updatedAt?: string;
  instanceId?: string;
  version?: string;
  tags?: ListLogstashResponseBodyResultTags[];
  nodeSpec?: ListLogstashResponseBodyResultNodeSpec;
  networkConfig?: ListLogstashResponseBodyResultNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      paymentType: 'paymentType',
      nodeAmount: 'nodeAmount',
      description: 'description',
      createdAt: 'createdAt',
      status: 'status',
      updatedAt: 'updatedAt',
      instanceId: 'instanceId',
      version: 'version',
      tags: 'Tags',
      nodeSpec: 'nodeSpec',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paymentType: 'string',
      nodeAmount: 'number',
      description: 'string',
      createdAt: 'string',
      status: 'string',
      updatedAt: 'string',
      instanceId: 'string',
      version: 'string',
      tags: { 'type': 'array', 'itemType': ListLogstashResponseBodyResultTags },
      nodeSpec: ListLogstashResponseBodyResultNodeSpec,
      networkConfig: ListLogstashResponseBodyResultNetworkConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashLogResponseBodyResult extends $tea.Model {
  level?: string;
  content?: string;
  timestamp?: number;
  instanceId?: string;
  host?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      content: 'content',
      timestamp: 'timestamp',
      instanceId: 'instanceId',
      host: 'host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      content: 'string',
      timestamp: 'number',
      instanceId: 'string',
      host: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLogstashPluginsResponseBodyResult extends $tea.Model {
  description?: string;
  specificationUrl?: string;
  state?: string;
  source?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      specificationUrl: 'specificationUrl',
      state: 'state',
      source: 'source',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      specificationUrl: 'string',
      state: 'string',
      source: 'string',
      name: 'string',
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

export class ListNodesResponseBodyResultIpAddress extends $tea.Model {
  ipType?: string;
  host?: string;
  static names(): { [key: string]: string } {
    return {
      ipType: 'ipType',
      host: 'host',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipType: 'string',
      host: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyResult extends $tea.Model {
  cloudAssistantStatus?: string;
  ecsInstanceName?: string;
  ecsInstanceId?: string;
  osType?: string;
  status?: string;
  agentStatus?: string;
  tags?: ListNodesResponseBodyResultTags[];
  ipAddress?: ListNodesResponseBodyResultIpAddress[];
  static names(): { [key: string]: string } {
    return {
      cloudAssistantStatus: 'cloudAssistantStatus',
      ecsInstanceName: 'ecsInstanceName',
      ecsInstanceId: 'ecsInstanceId',
      osType: 'osType',
      status: 'status',
      agentStatus: 'agentStatus',
      tags: 'tags',
      ipAddress: 'ipAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAssistantStatus: 'string',
      ecsInstanceName: 'string',
      ecsInstanceId: 'string',
      osType: 'string',
      status: 'string',
      agentStatus: 'string',
      tags: { 'type': 'array', 'itemType': ListNodesResponseBodyResultTags },
      ipAddress: { 'type': 'array', 'itemType': ListNodesResponseBodyResultIpAddress },
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
  pipelineId?: string;
  gmtUpdateTime?: string;
  gmtCreatedTime?: string;
  pipelineStatus?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'pipelineId',
      gmtUpdateTime: 'gmtUpdateTime',
      gmtCreatedTime: 'gmtCreatedTime',
      pipelineStatus: 'pipelineStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      gmtUpdateTime: 'string',
      gmtCreatedTime: 'string',
      pipelineStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineIdsResponseBodyResult extends $tea.Model {
  pipelineId?: string;
  available?: boolean;
  code?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'pipelineId',
      available: 'available',
      code: 'code',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      available: 'boolean',
      code: 'string',
      message: 'string',
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
  specificationUrl?: string;
  state?: string;
  source?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      specificationUrl: 'specificationUrl',
      state: 'state',
      source: 'source',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      specificationUrl: 'string',
      state: 'string',
      source: 'string',
      name: 'string',
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
  level?: string;
  host?: string;
  content?: string;
  timestamp?: number;
  contentCollection?: { [key: string]: any };
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'level',
      host: 'host',
      content: 'content',
      timestamp: 'timestamp',
      contentCollection: 'contentCollection',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      host: 'string',
      content: 'string',
      timestamp: 'number',
      contentCollection: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListShardRecoveriesResponseBodyResult extends $tea.Model {
  index?: string;
  sourceHost?: string;
  sourceNode?: string;
  filesTotal?: number;
  bytesPercent?: string;
  translogOps?: number;
  translogOpsPercent?: string;
  bytesTotal?: number;
  targetHost?: string;
  targetNode?: string;
  filesPercent?: string;
  stage?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'index',
      sourceHost: 'sourceHost',
      sourceNode: 'sourceNode',
      filesTotal: 'filesTotal',
      bytesPercent: 'bytesPercent',
      translogOps: 'translogOps',
      translogOpsPercent: 'translogOpsPercent',
      bytesTotal: 'bytesTotal',
      targetHost: 'targetHost',
      targetNode: 'targetNode',
      filesPercent: 'filesPercent',
      stage: 'stage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      sourceHost: 'string',
      sourceNode: 'string',
      filesTotal: 'number',
      bytesPercent: 'string',
      translogOps: 'number',
      translogOpsPercent: 'string',
      bytesTotal: 'number',
      targetHost: 'string',
      targetNode: 'string',
      filesPercent: 'string',
      stage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSnapshotReposByInstanceIdResponseBodyResult extends $tea.Model {
  snapWarehouse?: string;
  repoPath?: string;
  status?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      snapWarehouse: 'snapWarehouse',
      repoPath: 'repoPath',
      status: 'status',
      instanceId: 'instanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapWarehouse: 'string',
      repoPath: 'string',
      status: 'string',
      instanceId: 'string',
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
  tagValue?: string;
  resourceType?: string;
  resourceId?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      resourceType: 'ResourceType',
      resourceId: 'ResourceId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      resourceType: 'string',
      resourceId: 'string',
      tagKey: 'string',
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
  tagValue?: string;
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      tagValue: 'TagValue',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagValue: 'string',
      tagKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcEndpointsResponseBodyResult extends $tea.Model {
  endpointBusinessStatus?: string;
  serviceId?: string;
  endpointName?: string;
  endpointId?: string;
  serviceName?: string;
  createTime?: string;
  connectionStatus?: string;
  endpointDomain?: string;
  endpointStatus?: string;
  static names(): { [key: string]: string } {
    return {
      endpointBusinessStatus: 'endpointBusinessStatus',
      serviceId: 'serviceId',
      endpointName: 'endpointName',
      endpointId: 'endpointId',
      serviceName: 'serviceName',
      createTime: 'createTime',
      connectionStatus: 'connectionStatus',
      endpointDomain: 'endpointDomain',
      endpointStatus: 'endpointStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointBusinessStatus: 'string',
      serviceId: 'string',
      endpointName: 'string',
      endpointId: 'string',
      serviceName: 'string',
      createTime: 'string',
      connectionStatus: 'string',
      endpointDomain: 'string',
      endpointStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElastictaskResponseBodyResultElasticExpansionTask extends $tea.Model {
  triggerType?: string;
  replicaCount?: number;
  elasticNodeCount?: number;
  cronExpression?: string;
  targetIndices?: string[];
  static names(): { [key: string]: string } {
    return {
      triggerType: 'triggerType',
      replicaCount: 'replicaCount',
      elasticNodeCount: 'elasticNodeCount',
      cronExpression: 'cronExpression',
      targetIndices: 'targetIndices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerType: 'string',
      replicaCount: 'number',
      elasticNodeCount: 'number',
      cronExpression: 'string',
      targetIndices: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyElastictaskResponseBodyResultElasticShrinkTask extends $tea.Model {
  triggerType?: string;
  replicaCount?: number;
  elasticNodeCount?: number;
  cronExpression?: string;
  targetIndices?: string[];
  static names(): { [key: string]: string } {
    return {
      triggerType: 'triggerType',
      replicaCount: 'replicaCount',
      elasticNodeCount: 'elasticNodeCount',
      cronExpression: 'cronExpression',
      targetIndices: 'targetIndices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      triggerType: 'string',
      replicaCount: 'number',
      elasticNodeCount: 'number',
      cronExpression: 'string',
      targetIndices: { 'type': 'array', 'itemType': 'string' },
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
  sourceType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      sourceType: 'sourceType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      sourceType: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResultSynonymsDicts extends $tea.Model {
  fileSize?: number;
  sourceType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      sourceType: 'sourceType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      sourceType: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResultNodeSpec extends $tea.Model {
  spec?: string;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResultNetworkConfig extends $tea.Model {
  vpcId?: string;
  vsArea?: string;
  type?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      type: 'type',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vsArea: 'string',
      type: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResultKibanaConfiguration extends $tea.Model {
  spec?: string;
  amount?: number;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResultMasterConfiguration extends $tea.Model {
  spec?: string;
  amount?: number;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyResult extends $tea.Model {
  nodeAmount?: number;
  publicDomain?: string;
  createdAt?: string;
  status?: string;
  publicPort?: number;
  kibanaPort?: number;
  paymentType?: string;
  domain?: string;
  description?: string;
  esVersion?: string;
  kibanaDomain?: string;
  updatedAt?: string;
  instanceId?: string;
  dictList?: MoveResourceGroupResponseBodyResultDictList[];
  synonymsDicts?: MoveResourceGroupResponseBodyResultSynonymsDicts[];
  nodeSpec?: MoveResourceGroupResponseBodyResultNodeSpec;
  networkConfig?: MoveResourceGroupResponseBodyResultNetworkConfig;
  kibanaConfiguration?: MoveResourceGroupResponseBodyResultKibanaConfiguration;
  masterConfiguration?: MoveResourceGroupResponseBodyResultMasterConfiguration;
  static names(): { [key: string]: string } {
    return {
      nodeAmount: 'nodeAmount',
      publicDomain: 'publicDomain',
      createdAt: 'createdAt',
      status: 'status',
      publicPort: 'publicPort',
      kibanaPort: 'kibanaPort',
      paymentType: 'paymentType',
      domain: 'domain',
      description: 'description',
      esVersion: 'esVersion',
      kibanaDomain: 'kibanaDomain',
      updatedAt: 'updatedAt',
      instanceId: 'instanceId',
      dictList: 'dictList',
      synonymsDicts: 'synonymsDicts',
      nodeSpec: 'nodeSpec',
      networkConfig: 'networkConfig',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeAmount: 'number',
      publicDomain: 'string',
      createdAt: 'string',
      status: 'string',
      publicPort: 'number',
      kibanaPort: 'number',
      paymentType: 'string',
      domain: 'string',
      description: 'string',
      esVersion: 'string',
      kibanaDomain: 'string',
      updatedAt: 'string',
      instanceId: 'string',
      dictList: { 'type': 'array', 'itemType': MoveResourceGroupResponseBodyResultDictList },
      synonymsDicts: { 'type': 'array', 'itemType': MoveResourceGroupResponseBodyResultSynonymsDicts },
      nodeSpec: MoveResourceGroupResponseBodyResultNodeSpec,
      networkConfig: MoveResourceGroupResponseBodyResultNetworkConfig,
      kibanaConfiguration: MoveResourceGroupResponseBodyResultKibanaConfiguration,
      masterConfiguration: MoveResourceGroupResponseBodyResultMasterConfiguration,
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
  type?: string;
  name?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      type: 'type',
      name: 'name',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      type: 'string',
      name: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResultSynonymsDicts extends $tea.Model {
  fileSize?: number;
  type?: string;
  name?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      type: 'type',
      name: 'name',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      type: 'string',
      name: 'string',
      sourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResultKibanaConfiguration extends $tea.Model {
  spec?: string;
  amount?: number;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResultMasterConfiguration extends $tea.Model {
  spec?: string;
  amount?: number;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResultNetworkConfig extends $tea.Model {
  vpcId?: string;
  vsArea?: string;
  type?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      type: 'type',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vsArea: 'string',
      type: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResultNodeSpec extends $tea.Model {
  spec?: string;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartInstanceResponseBodyResult extends $tea.Model {
  nodeAmount?: number;
  publicDomain?: string;
  createdAt?: string;
  status?: string;
  kibanaPort?: number;
  publicPort?: number;
  paymentType?: string;
  domain?: string;
  description?: string;
  esVersion?: string;
  kibanaDomain?: string;
  updatedAt?: string;
  instanceId?: string;
  dictList?: RestartInstanceResponseBodyResultDictList[];
  synonymsDicts?: RestartInstanceResponseBodyResultSynonymsDicts[];
  kibanaConfiguration?: RestartInstanceResponseBodyResultKibanaConfiguration;
  masterConfiguration?: RestartInstanceResponseBodyResultMasterConfiguration;
  networkConfig?: RestartInstanceResponseBodyResultNetworkConfig;
  nodeSpec?: RestartInstanceResponseBodyResultNodeSpec;
  static names(): { [key: string]: string } {
    return {
      nodeAmount: 'nodeAmount',
      publicDomain: 'publicDomain',
      createdAt: 'createdAt',
      status: 'status',
      kibanaPort: 'kibanaPort',
      publicPort: 'publicPort',
      paymentType: 'paymentType',
      domain: 'domain',
      description: 'description',
      esVersion: 'esVersion',
      kibanaDomain: 'kibanaDomain',
      updatedAt: 'updatedAt',
      instanceId: 'instanceId',
      dictList: 'dictList',
      synonymsDicts: 'synonymsDicts',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
      networkConfig: 'networkConfig',
      nodeSpec: 'nodeSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeAmount: 'number',
      publicDomain: 'string',
      createdAt: 'string',
      status: 'string',
      kibanaPort: 'number',
      publicPort: 'number',
      paymentType: 'string',
      domain: 'string',
      description: 'string',
      esVersion: 'string',
      kibanaDomain: 'string',
      updatedAt: 'string',
      instanceId: 'string',
      dictList: { 'type': 'array', 'itemType': RestartInstanceResponseBodyResultDictList },
      synonymsDicts: { 'type': 'array', 'itemType': RestartInstanceResponseBodyResultSynonymsDicts },
      kibanaConfiguration: RestartInstanceResponseBodyResultKibanaConfiguration,
      masterConfiguration: RestartInstanceResponseBodyResultMasterConfiguration,
      networkConfig: RestartInstanceResponseBodyResultNetworkConfig,
      nodeSpec: RestartInstanceResponseBodyResultNodeSpec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliwsDictResponseBodyResult extends $tea.Model {
  fileSize?: number;
  sourceType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      sourceType: 'sourceType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      sourceType: 'string',
      name: 'string',
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
  successPodsCount?: string;
  protocol?: string;
  userName?: string;
  totalPodsCount?: string;
  type?: string;
  kibanaHost?: string;
  enableMonitoring?: boolean;
  configType?: string;
  instanceType?: string;
  groupId?: string;
  host?: string;
  instanceId?: string;
  machines?: UpdateCollectorResponseBodyResultExtendConfigsMachines[];
  hosts?: string[];
  static names(): { [key: string]: string } {
    return {
      successPodsCount: 'successPodsCount',
      protocol: 'protocol',
      userName: 'userName',
      totalPodsCount: 'totalPodsCount',
      type: 'type',
      kibanaHost: 'kibanaHost',
      enableMonitoring: 'enableMonitoring',
      configType: 'configType',
      instanceType: 'instanceType',
      groupId: 'groupId',
      host: 'host',
      instanceId: 'instanceId',
      machines: 'machines',
      hosts: 'hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successPodsCount: 'string',
      protocol: 'string',
      userName: 'string',
      totalPodsCount: 'string',
      type: 'string',
      kibanaHost: 'string',
      enableMonitoring: 'boolean',
      configType: 'string',
      instanceType: 'string',
      groupId: 'string',
      host: 'string',
      instanceId: 'string',
      machines: { 'type': 'array', 'itemType': UpdateCollectorResponseBodyResultExtendConfigsMachines },
      hosts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorResponseBodyResult extends $tea.Model {
  resId?: string;
  gmtUpdateTime?: string;
  dryRun?: boolean;
  ownerId?: string;
  vpcId?: string;
  resType?: string;
  resVersion?: string;
  gmtCreatedTime?: string;
  status?: string;
  name?: string;
  configs?: UpdateCollectorResponseBodyResultConfigs[];
  extendConfigs?: UpdateCollectorResponseBodyResultExtendConfigs[];
  collectorPaths?: string[];
  static names(): { [key: string]: string } {
    return {
      resId: 'resId',
      gmtUpdateTime: 'gmtUpdateTime',
      dryRun: 'dryRun',
      ownerId: 'ownerId',
      vpcId: 'vpcId',
      resType: 'resType',
      resVersion: 'resVersion',
      gmtCreatedTime: 'gmtCreatedTime',
      status: 'status',
      name: 'name',
      configs: 'configs',
      extendConfigs: 'extendConfigs',
      collectorPaths: 'collectorPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resId: 'string',
      gmtUpdateTime: 'string',
      dryRun: 'boolean',
      ownerId: 'string',
      vpcId: 'string',
      resType: 'string',
      resVersion: 'string',
      gmtCreatedTime: 'string',
      status: 'string',
      name: 'string',
      configs: { 'type': 'array', 'itemType': UpdateCollectorResponseBodyResultConfigs },
      extendConfigs: { 'type': 'array', 'itemType': UpdateCollectorResponseBodyResultExtendConfigs },
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
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
  successPodsCount?: string;
  protocol?: string;
  userName?: string;
  totalPodsCount?: string;
  type?: string;
  kibanaHost?: string;
  enableMonitoring?: boolean;
  configType?: string;
  instanceType?: string;
  groupId?: string;
  host?: string;
  instanceId?: string;
  machines?: UpdateCollectorNameResponseBodyResultExtendConfigsMachines[];
  hosts?: string[];
  static names(): { [key: string]: string } {
    return {
      successPodsCount: 'successPodsCount',
      protocol: 'protocol',
      userName: 'userName',
      totalPodsCount: 'totalPodsCount',
      type: 'type',
      kibanaHost: 'kibanaHost',
      enableMonitoring: 'enableMonitoring',
      configType: 'configType',
      instanceType: 'instanceType',
      groupId: 'groupId',
      host: 'host',
      instanceId: 'instanceId',
      machines: 'machines',
      hosts: 'hosts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      successPodsCount: 'string',
      protocol: 'string',
      userName: 'string',
      totalPodsCount: 'string',
      type: 'string',
      kibanaHost: 'string',
      enableMonitoring: 'boolean',
      configType: 'string',
      instanceType: 'string',
      groupId: 'string',
      host: 'string',
      instanceId: 'string',
      machines: { 'type': 'array', 'itemType': UpdateCollectorNameResponseBodyResultExtendConfigsMachines },
      hosts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCollectorNameResponseBodyResult extends $tea.Model {
  resId?: string;
  gmtUpdateTime?: string;
  dryRun?: boolean;
  ownerId?: string;
  vpcId?: string;
  resType?: string;
  resVersion?: string;
  gmtCreatedTime?: string;
  status?: string;
  name?: string;
  configs?: UpdateCollectorNameResponseBodyResultConfigs[];
  extendConfigs?: UpdateCollectorNameResponseBodyResultExtendConfigs[];
  collectorPaths?: string[];
  static names(): { [key: string]: string } {
    return {
      resId: 'resId',
      gmtUpdateTime: 'gmtUpdateTime',
      dryRun: 'dryRun',
      ownerId: 'ownerId',
      vpcId: 'vpcId',
      resType: 'resType',
      resVersion: 'resVersion',
      gmtCreatedTime: 'gmtCreatedTime',
      status: 'status',
      name: 'name',
      configs: 'configs',
      extendConfigs: 'extendConfigs',
      collectorPaths: 'collectorPaths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resId: 'string',
      gmtUpdateTime: 'string',
      dryRun: 'boolean',
      ownerId: 'string',
      vpcId: 'string',
      resType: 'string',
      resVersion: 'string',
      gmtCreatedTime: 'string',
      status: 'string',
      name: 'string',
      configs: { 'type': 'array', 'itemType': UpdateCollectorNameResponseBodyResultConfigs },
      extendConfigs: { 'type': 'array', 'itemType': UpdateCollectorNameResponseBodyResultExtendConfigs },
      collectorPaths: { 'type': 'array', 'itemType': 'string' },
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
  sourceType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      sourceType: 'sourceType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      sourceType: 'string',
      name: 'string',
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
  sourceType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      sourceType: 'sourceType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      sourceType: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultDictList extends $tea.Model {
  fileSize?: number;
  sourceType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      sourceType: 'sourceType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      sourceType: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultSynonymsDicts extends $tea.Model {
  fileSize?: number;
  sourceType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      sourceType: 'sourceType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      sourceType: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultNodeSpec extends $tea.Model {
  spec?: string;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultNetworkConfig extends $tea.Model {
  vpcId?: string;
  vsArea?: string;
  type?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
      vsArea: 'vsArea',
      type: 'type',
      vswitchId: 'vswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vsArea: 'string',
      type: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultKibanaConfiguration extends $tea.Model {
  spec?: string;
  amount?: number;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResultMasterConfiguration extends $tea.Model {
  spec?: string;
  amount?: number;
  disk?: number;
  diskType?: string;
  static names(): { [key: string]: string } {
    return {
      spec: 'spec',
      amount: 'amount',
      disk: 'disk',
      diskType: 'diskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spec: 'string',
      amount: 'number',
      disk: 'number',
      diskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBodyResult extends $tea.Model {
  nodeAmount?: number;
  publicDomain?: string;
  createdAt?: string;
  status?: string;
  publicPort?: number;
  kibanaPort?: number;
  paymentType?: string;
  domain?: string;
  description?: string;
  esVersion?: string;
  kibanaDomain?: string;
  updatedAt?: string;
  instanceId?: string;
  dictList?: UpdateInstanceResponseBodyResultDictList[];
  synonymsDicts?: UpdateInstanceResponseBodyResultSynonymsDicts[];
  nodeSpec?: UpdateInstanceResponseBodyResultNodeSpec;
  networkConfig?: UpdateInstanceResponseBodyResultNetworkConfig;
  kibanaConfiguration?: UpdateInstanceResponseBodyResultKibanaConfiguration;
  masterConfiguration?: UpdateInstanceResponseBodyResultMasterConfiguration;
  static names(): { [key: string]: string } {
    return {
      nodeAmount: 'nodeAmount',
      publicDomain: 'publicDomain',
      createdAt: 'createdAt',
      status: 'status',
      publicPort: 'publicPort',
      kibanaPort: 'kibanaPort',
      paymentType: 'paymentType',
      domain: 'domain',
      description: 'description',
      esVersion: 'esVersion',
      kibanaDomain: 'kibanaDomain',
      updatedAt: 'updatedAt',
      instanceId: 'instanceId',
      dictList: 'dictList',
      synonymsDicts: 'synonymsDicts',
      nodeSpec: 'nodeSpec',
      networkConfig: 'networkConfig',
      kibanaConfiguration: 'kibanaConfiguration',
      masterConfiguration: 'masterConfiguration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeAmount: 'number',
      publicDomain: 'string',
      createdAt: 'string',
      status: 'string',
      publicPort: 'number',
      kibanaPort: 'number',
      paymentType: 'string',
      domain: 'string',
      description: 'string',
      esVersion: 'string',
      kibanaDomain: 'string',
      updatedAt: 'string',
      instanceId: 'string',
      dictList: { 'type': 'array', 'itemType': UpdateInstanceResponseBodyResultDictList },
      synonymsDicts: { 'type': 'array', 'itemType': UpdateInstanceResponseBodyResultSynonymsDicts },
      nodeSpec: UpdateInstanceResponseBodyResultNodeSpec,
      networkConfig: UpdateInstanceResponseBodyResultNetworkConfig,
      kibanaConfiguration: UpdateInstanceResponseBodyResultKibanaConfiguration,
      masterConfiguration: UpdateInstanceResponseBodyResultMasterConfiguration,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateKibanaWhiteIpsResponseBodyResult extends $tea.Model {
  kibanaPrivateIPWhitelist?: string[];
  kibanaIPWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      kibanaPrivateIPWhitelist: 'kibanaPrivateIPWhitelist',
      kibanaIPWhitelist: 'kibanaIPWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kibanaPrivateIPWhitelist: { 'type': 'array', 'itemType': 'string' },
      kibanaIPWhitelist: { 'type': 'array', 'itemType': 'string' },
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
  quartzRegex?: string;
  enable?: boolean;
  static names(): { [key: string]: string } {
    return {
      quartzRegex: 'quartzRegex',
      enable: 'enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quartzRegex: 'string',
      enable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSynonymsDictsResponseBodyResult extends $tea.Model {
  fileSize?: number;
  sourceType?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      fileSize: 'fileSize',
      sourceType: 'sourceType',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSize: 'number',
      sourceType: 'string',
      name: 'string',
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

export class UpdateWhiteIpsResponseBodyResult extends $tea.Model {
  esIPWhitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      esIPWhitelist: 'esIPWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      esIPWhitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeEngineVersionResponseBodyResultValidateResult extends $tea.Model {
  errorType?: string;
  errorCode?: string;
  errorMsg?: string;
  static names(): { [key: string]: string } {
    return {
      errorType: 'errorType',
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorType: 'string',
      errorCode: 'string',
      errorMsg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeEngineVersionResponseBodyResult extends $tea.Model {
  validateType?: string;
  status?: string;
  validateResult?: UpgradeEngineVersionResponseBodyResultValidateResult;
  static names(): { [key: string]: string } {
    return {
      validateType: 'validateType',
      status: 'status',
      validateResult: 'validateResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      validateType: 'string',
      status: 'string',
      validateResult: UpgradeEngineVersionResponseBodyResultValidateResult,
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
    this._endpointMap = {
      'ap-northeast-2-pop': "elasticsearch.aliyuncs.com",
      'cn-beijing-finance-1': "elasticsearch.aliyuncs.com",
      'cn-beijing-finance-pop': "elasticsearch.aliyuncs.com",
      'cn-beijing-gov-1': "elasticsearch.aliyuncs.com",
      'cn-beijing-nu16-b01': "elasticsearch.aliyuncs.com",
      'cn-chengdu': "elasticsearch.aliyuncs.com",
      'cn-edge-1': "elasticsearch.aliyuncs.com",
      'cn-fujian': "elasticsearch.aliyuncs.com",
      'cn-haidian-cm12-c01': "elasticsearch.aliyuncs.com",
      'cn-hangzhou-bj-b01': "elasticsearch.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "elasticsearch.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "elasticsearch.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "elasticsearch.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "elasticsearch.aliyuncs.com",
      'cn-hangzhou-test-306': "elasticsearch.aliyuncs.com",
      'cn-hongkong-finance-pop': "elasticsearch.aliyuncs.com",
      'cn-huhehaote': "elasticsearch.aliyuncs.com",
      'cn-huhehaote-nebula-1': "elasticsearch.aliyuncs.com",
      'cn-qingdao-nebula': "elasticsearch.aliyuncs.com",
      'cn-shanghai-et15-b01': "elasticsearch.aliyuncs.com",
      'cn-shanghai-et2-b01': "elasticsearch.aliyuncs.com",
      'cn-shanghai-inner': "elasticsearch.aliyuncs.com",
      'cn-shanghai-internal-test-1': "elasticsearch.aliyuncs.com",
      'cn-shenzhen-finance-1': "elasticsearch.aliyuncs.com",
      'cn-shenzhen-inner': "elasticsearch.aliyuncs.com",
      'cn-shenzhen-st4-d01': "elasticsearch.aliyuncs.com",
      'cn-shenzhen-su18-b01': "elasticsearch.aliyuncs.com",
      'cn-wuhan': "elasticsearch.aliyuncs.com",
      'cn-wulanchabu': "elasticsearch.aliyuncs.com",
      'cn-yushanfang': "elasticsearch.aliyuncs.com",
      'cn-zhangbei': "elasticsearch.aliyuncs.com",
      'cn-zhangbei-na61-b01': "elasticsearch.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "elasticsearch.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "elasticsearch.aliyuncs.com",
      'eu-west-1-oxs': "elasticsearch.aliyuncs.com",
      'me-east-1': "elasticsearch.aliyuncs.com",
      'rus-west-1-pop': "elasticsearch.aliyuncs.com",
    };
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
    if (!Util.isUnset(request.taskType)) {
      query["taskType"] = request.taskType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
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
    if (!Util.isUnset(request.trigger)) {
      query["trigger"] = request.trigger;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
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
    if (!Util.isUnset(request.repoPath)) {
      query["repoPath"] = request.repoPath;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
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
    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
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
    if (!Util.isUnset(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    if (!Util.isUnset(request.count)) {
      query["count"] = request.count;
    }

    if (!Util.isUnset(request.ignoreStatus)) {
      query["ignoreStatus"] = request.ignoreStatus;
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
    if (!Util.isUnset(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    if (!Util.isUnset(request.count)) {
      query["count"] = request.count;
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
    if (!Util.isUnset(request.resId)) {
      query["resId"] = request.resId;
    }

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
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
    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.detail)) {
      query["detail"] = request.detail;
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
    if (!Util.isUnset(request.lang)) {
      query["lang"] = request.lang;
    }

    if (!Util.isUnset(request.startTime)) {
      query["startTime"] = request.startTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
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
    if (!Util.isUnset(request.bucketName)) {
      query["bucketName"] = request.bucketName;
    }

    if (!Util.isUnset(request.key)) {
      query["key"] = request.key;
    }

    if (!Util.isUnset(request.analyzerType)) {
      query["analyzerType"] = request.analyzerType;
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
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.ecsInstanceIds)) {
      query["ecsInstanceIds"] = request.ecsInstanceIds;
    }

    if (!Util.isUnset(request.ecsInstanceName)) {
      query["ecsInstanceName"] = request.ecsInstanceName;
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
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.esVersion)) {
      query["esVersion"] = request.esVersion;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
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

    if (!Util.isUnset(request.paymentType)) {
      query["paymentType"] = request.paymentType;
    }

    if (!Util.isUnset(request.instanceCategory)) {
      query["instanceCategory"] = request.instanceCategory;
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

    if (!Util.isUnset(request.name)) {
      query["name"] = request.name;
    }

    if (!Util.isUnset(request.isManaged)) {
      query["isManaged"] = request.isManaged;
    }

    if (!Util.isUnset(request.isOpenstore)) {
      query["isOpenstore"] = request.isOpenstore;
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
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.description)) {
      query["description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["instanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.version)) {
      query["version"] = request.version;
    }

    if (!Util.isUnset(request.ownerId)) {
      query["ownerId"] = request.ownerId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["resourceGroupId"] = request.resourceGroupId;
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
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
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
    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.ecsInstanceIds)) {
      query["ecsInstanceIds"] = request.ecsInstanceIds;
    }

    if (!Util.isUnset(request.ecsInstanceName)) {
      query["ecsInstanceName"] = request.ecsInstanceName;
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
    if (!Util.isUnset(request.pipelineId)) {
      query["pipelineId"] = request.pipelineId;
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
    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    if (!Util.isUnset(request.query)) {
      query["query"] = request.query;
    }

    if (!Util.isUnset(request.beginTime)) {
      query["beginTime"] = request.beginTime;
    }

    if (!Util.isUnset(request.endTime)) {
      query["endTime"] = request.endTime;
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
    if (!Util.isUnset(request.page)) {
      query["Page"] = request.page;
    }

    if (!Util.isUnset(request.size)) {
      query["Size"] = request.size;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
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
    if (!Util.isUnset(request.size)) {
      query["size"] = request.size;
    }

    if (!Util.isUnset(request.page)) {
      query["page"] = request.page;
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
    if (!Util.isUnset(request.nodeType)) {
      body["nodeType"] = request.nodeType;
    }

    if (!Util.isUnset(request.networkType)) {
      body["networkType"] = request.networkType;
    }

    if (!Util.isUnset(request.modifyMode)) {
      body["modifyMode"] = request.modifyMode;
    }

    if (!Util.isUnset(request.whiteIpList)) {
      body["whiteIpList"] = request.whiteIpList;
    }

    if (!Util.isUnset($tea.toMap(request.whiteIpGroup))) {
      body["whiteIpGroup"] = request.whiteIpGroup;
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
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
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
    if (!Util.isUnset(request.force)) {
      query["force"] = request.force;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
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
    if (!Util.isUnset(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ignoreStatus)) {
      query["ignoreStatus"] = request.ignoreStatus;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ShrinkNodeResponse>(await this.doROARequest("ShrinkNode", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/shrink`, "json", req, runtime), new ShrinkNodeResponse({}));
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
    if (!Util.isUnset(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
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
    if (!Util.isUnset(request.nodeType)) {
      body["nodeType"] = request.nodeType;
    }

    if (!Util.isUnset(request.networkType)) {
      body["networkType"] = request.networkType;
    }

    if (!Util.isUnset(request.actionType)) {
      body["actionType"] = request.actionType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<TriggerNetworkResponse>(await this.doROARequestWithForm("TriggerNetwork", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/actions/network-trigger`, "json", req, runtime), new TriggerNetworkResponse({}));
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
    if (!Util.isUnset(request.resourceIds)) {
      query["ResourceIds"] = request.resourceIds;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeys)) {
      query["TagKeys"] = request.tagKeys;
    }

    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
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
    if (!Util.isUnset(request.trigger)) {
      query["trigger"] = request.trigger;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["clientToken"] = request.clientToken;
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
    return $tea.cast<UpdateWhiteIpsResponse>(await this.doROARequestWithForm("UpdateWhiteIps", "2017-06-13", "HTTPS", "POST", "AK", `/openapi/instances/${InstanceId}/white-ips`, "json", req, runtime), new UpdateWhiteIpsResponse({}));
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
    if (!Util.isUnset(request.version)) {
      body["version"] = request.version;
    }

    if (!Util.isUnset(request.type)) {
      body["type"] = request.type;
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
    if (!Util.isUnset(request.nodeType)) {
      query["nodeType"] = request.nodeType;
    }

    if (!Util.isUnset(request.ignoreStatus)) {
      query["ignoreStatus"] = request.ignoreStatus;
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

}
