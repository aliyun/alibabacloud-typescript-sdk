// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateExperimentRequest extends $tea.Model {
  workspaceId?: string;
  name?: string;
  description?: string;
  source?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      name: 'Name',
      description: 'Description',
      source: 'Source',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      name: 'string',
      description: 'string',
      source: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateExperimentResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateExperimentResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentFolderRequest extends $tea.Model {
  workspaceId?: string;
  name?: string;
  parentId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      name: 'Name',
      parentId: 'ParentId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      name: 'string',
      parentId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentFolderResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  data?: CreateExperimentFolderResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: CreateExperimentFolderResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateExperimentFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateExperimentFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  experimentId?: string;
  executeType?: string;
  anchorNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      executeType: 'ExecuteType',
      anchorNodeId: 'AnchorNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      executeType: 'string',
      anchorNodeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateJobResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateJobResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
  workspaceId?: string;
  serviceType?: string;
  logDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      serviceType: 'ServiceType',
      logDirectory: 'LogDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      serviceType: 'string',
      logDirectory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CreateServiceResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CreateServiceResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgoRequest extends $tea.Model {
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: boolean;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'boolean',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAlgoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteAlgoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteAlgoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DeleteExperimentResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DeleteExperimentResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentFolderResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteExperimentFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteExperimentFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgoDefRequest extends $tea.Model {
  provider?: string;
  identifier?: string;
  version?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      provider: 'Provider',
      identifier: 'Identifier',
      version: 'Version',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provider: 'string',
      identifier: 'string',
      version: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgoDefResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgoDefResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlgoDefResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlgoDefResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgoTreeRequest extends $tea.Model {
  source?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgoTreeResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgoTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlgoTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlgoTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetExperimentResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetExperimentResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentMetaResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  data?: GetExperimentMetaResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: GetExperimentMetaResponseBodyData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExperimentMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExperimentMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetExperimentStatusResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetExperimentStatusResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExperimentStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExperimentStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRequest extends $tea.Model {
  queryDetail?: boolean;
  static names(): { [key: string]: string } {
    return {
      queryDetail: 'QueryDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryDetail: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetJobResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetJobResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeInputSchemaRequest extends $tea.Model {
  inputAnchor?: string;
  static names(): { [key: string]: string } {
    return {
      inputAnchor: 'InputAnchor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputAnchor: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeInputSchemaResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetNodeInputSchemaResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetNodeInputSchemaResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeInputSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNodeInputSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNodeInputSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOdpsTableRequest extends $tea.Model {
  workspaceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOdpsTableResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetOdpsTableResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetOdpsTableResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOdpsTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOdpsTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOdpsTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutputModelInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutputModelInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOutputModelInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOutputModelInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutputModeVisualRequest extends $tea.Model {
  exportParams?: string;
  static names(): { [key: string]: string } {
    return {
      exportParams: 'ExportParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutputModeVisualResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: { [key: string]: any };
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutputModeVisualResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOutputModeVisualResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOutputModeVisualResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutputPmmlPathResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOutputPmmlPathResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOutputPmmlPathResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOutputPmmlPathResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRequest extends $tea.Model {
  serviceType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      serviceType: 'ServiceType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetServiceResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetServiceResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsRequest extends $tea.Model {
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: GetTemplateResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: GetTemplateResponseBodyData,
      code: 'string',
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

export class InitTemplateRequest extends $tea.Model {
  workspaceId?: string;
  name?: string;
  description?: string;
  source?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      name: 'Name',
      description: 'Description',
      source: 'Source',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      name: 'string',
      description: 'string',
      source: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTemplateResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: InitTemplateResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: InitTemplateResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgoDefsResponseBody extends $tea.Model {
  totalCount?: number;
  message?: string;
  requestId?: string;
  maxResults?: number;
  data?: { [key: string]: any }[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      maxResults: 'number',
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgoDefsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlgoDefsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlgoDefsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentNewRequest extends $tea.Model {
  workspaceId?: string;
  folderId?: string;
  onlyFolder?: boolean;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      folderId: 'FolderId',
      onlyFolder: 'OnlyFolder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      folderId: 'string',
      onlyFolder: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentNewResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  data?: ListExperimentNewResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: { 'type': 'array', 'itemType': ListExperimentNewResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentNewResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExperimentNewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExperimentNewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  sortDirection?: string;
  experimentId?: string;
  name?: string;
  creator?: string;
  source?: string;
  workspaceId?: string;
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortDirection: 'SortDirection',
      experimentId: 'ExperimentId',
      name: 'Name',
      creator: 'Creator',
      source: 'Source',
      workspaceId: 'WorkspaceId',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sortDirection: 'string',
      experimentId: 'string',
      name: 'string',
      creator: 'string',
      source: 'string',
      workspaceId: 'string',
      scope: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBody extends $tea.Model {
  totalCount?: number;
  message?: string;
  requestId?: string;
  data?: ListExperimentsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListExperimentsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListExperimentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListExperimentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  experimentId?: string;
  creator?: string;
  pageNumber?: number;
  pageSize?: number;
  sortField?: string;
  sortDirection?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      creator: 'Creator',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortField: 'SortField',
      sortDirection: 'SortDirection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      creator: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortField: 'string',
      sortDirection: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  totalCount?: number;
  message?: string;
  requestId?: string;
  data?: ListJobsResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListJobsResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  workspaceId?: string;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  totalCount?: number;
  message?: string;
  requestId?: string;
  data?: ListServicesResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': ListServicesResponseBodyData },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  sortDirection?: string;
  tagId?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortDirection: 'SortDirection',
      tagId: 'TagId',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sortDirection: 'string',
      tagId: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  totalCount?: number;
  message?: string;
  requestId?: string;
  maxResults?: number;
  data?: ListTemplatesResponseBodyData[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      maxResults: 'MaxResults',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      maxResults: 'number',
      data: { 'type': 'array', 'itemType': ListTemplatesResponseBodyData },
      code: 'string',
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

export class PreviewOdpsTableRequest extends $tea.Model {
  experimentId?: string;
  nodeId?: string;
  outputId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      nodeId: 'NodeId',
      outputId: 'OutputId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      nodeId: 'string',
      outputId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewOdpsTableResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewOdpsTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PreviewOdpsTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreviewOdpsTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAlgoRequest extends $tea.Model {
  provider?: string;
  identifier?: string;
  version?: string;
  workspaceId?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      provider: 'Provider',
      identifier: 'Identifier',
      version: 'Version',
      workspaceId: 'WorkspaceId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provider: 'string',
      identifier: 'string',
      version: 'string',
      workspaceId: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAlgoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishAlgoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishAlgoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishAlgoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchExperimentRequest extends $tea.Model {
  workspaceId?: string;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchExperimentResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  data?: SearchExperimentResponseBodyData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: { 'type': 'array', 'itemType': SearchExperimentResponseBodyData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOdpsTableRequest extends $tea.Model {
  workspaceId?: string;
  keyword?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      keyword: 'Keyword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      keyword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOdpsTableResponseBody extends $tea.Model {
  totalCount?: number;
  message?: string;
  requestId?: string;
  data?: string[];
  code?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      message: 'string',
      requestId: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchOdpsTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchOdpsTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchOdpsTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExperimentResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentFolderRequest extends $tea.Model {
  name?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentFolderResponseBody extends $tea.Model {
  requestId?: string;
  code?: string;
  message?: string;
  data?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      message: 'string',
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentFolderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateExperimentFolderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateExperimentFolderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentMetaRequest extends $tea.Model {
  name?: string;
  description?: string;
  parentId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      description: 'Description',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      description: 'string',
      parentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentMetaResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: UpdateExperimentMetaResponseBodyData;
  code?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: UpdateExperimentMetaResponseBodyData,
      code: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateExperimentMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateExperimentMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponseBodyData extends $tea.Model {
  experimentId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentFolderResponseBodyData extends $tea.Model {
  folderUuid?: string;
  static names(): { [key: string]: string } {
    return {
      folderUuid: 'FolderUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderUuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBodyData extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBodyData extends $tea.Model {
  serviceId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteExperimentResponseBodyData extends $tea.Model {
  experimentId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBodyData extends $tea.Model {
  deleted?: boolean;
  gmtDeleted?: string;
  operatorModified?: string;
  gmtModified?: string;
  source?: string;
  creator?: string;
  operatorDeleted?: string;
  parentUserId?: string;
  workspaceId?: string;
  description?: string;
  version?: number;
  isDeleted?: boolean;
  experimentId?: string;
  gmtCreate?: string;
  name?: string;
  content?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      deleted: 'deleted',
      gmtDeleted: 'GmtDeleted',
      operatorModified: 'OperatorModified',
      gmtModified: 'GmtModified',
      source: 'Source',
      creator: 'Creator',
      operatorDeleted: 'OperatorDeleted',
      parentUserId: 'ParentUserId',
      workspaceId: 'WorkspaceId',
      description: 'Description',
      version: 'Version',
      isDeleted: 'IsDeleted',
      experimentId: 'ExperimentId',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'boolean',
      gmtDeleted: 'string',
      operatorModified: 'string',
      gmtModified: 'string',
      source: 'string',
      creator: 'string',
      operatorDeleted: 'string',
      parentUserId: 'string',
      workspaceId: 'string',
      description: 'string',
      version: 'number',
      isDeleted: 'boolean',
      experimentId: 'string',
      gmtCreate: 'string',
      name: 'string',
      content: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentMetaResponseBodyData extends $tea.Model {
  gmtCreate?: number;
  gmtModified?: number;
  creator?: string;
  operatorModified?: string;
  parentUserId?: string;
  workspaceId?: string;
  experimentId?: string;
  name?: string;
  description?: string;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      creator: 'Creator',
      operatorModified: 'OperatorModified',
      parentUserId: 'ParentUserId',
      workspaceId: 'WorkspaceId',
      experimentId: 'ExperimentId',
      name: 'Name',
      description: 'Description',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      creator: 'string',
      operatorModified: 'string',
      parentUserId: 'string',
      workspaceId: 'string',
      experimentId: 'string',
      name: 'string',
      description: 'string',
      source: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentStatusResponseBodyDataNodes extends $tea.Model {
  status?: string;
  runNodeId?: string;
  executionId?: string;
  nodeId?: string;
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      runNodeId: 'RunNodeId',
      executionId: 'ExecutionId',
      nodeId: 'NodeId',
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      runNodeId: 'string',
      executionId: 'string',
      nodeId: 'string',
      runId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentStatusResponseBodyData extends $tea.Model {
  status?: string;
  nodes?: GetExperimentStatusResponseBodyDataNodes[];
  experimentId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      nodes: 'Nodes',
      experimentId: 'ExperimentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      nodes: { 'type': 'array', 'itemType': GetExperimentStatusResponseBodyDataNodes },
      experimentId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyData extends $tea.Model {
  status?: string;
  createTime?: string;
  jobId?: string;
  anchorNodeId?: string;
  experimentId?: string;
  executeType?: string;
  snapshot?: string;
  runId?: string;
  creator?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      createTime: 'CreateTime',
      jobId: 'JobId',
      anchorNodeId: 'AnchorNodeId',
      experimentId: 'ExperimentId',
      executeType: 'ExecuteType',
      snapshot: 'Snapshot',
      runId: 'RunId',
      creator: 'Creator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      createTime: 'string',
      jobId: 'string',
      anchorNodeId: 'string',
      experimentId: 'string',
      executeType: 'string',
      snapshot: 'string',
      runId: 'string',
      creator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeInputSchemaResponseBodyData extends $tea.Model {
  colTypes?: string[];
  colNames?: string[];
  static names(): { [key: string]: string } {
    return {
      colTypes: 'ColTypes',
      colNames: 'ColNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colTypes: { 'type': 'array', 'itemType': 'string' },
      colNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOdpsTableResponseBodyDataColumns extends $tea.Model {
  type?: string;
  preview?: string[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      preview: 'Preview',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      preview: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOdpsTableResponseBodyData extends $tea.Model {
  partitionColumns?: string[];
  columns?: GetOdpsTableResponseBodyDataColumns[];
  static names(): { [key: string]: string } {
    return {
      partitionColumns: 'PartitionColumns',
      columns: 'Columns',
    };
  }

  static types(): { [key: string]: any } {
    return {
      partitionColumns: { 'type': 'array', 'itemType': 'string' },
      columns: { 'type': 'array', 'itemType': GetOdpsTableResponseBodyDataColumns },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBodyData extends $tea.Model {
  message?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyData extends $tea.Model {
  description?: string;
  imageLink?: string;
  docLink?: string;
  name?: string;
  templateId?: string;
  content?: string;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageLink: 'ImageLink',
      docLink: 'DocLink',
      name: 'Name',
      templateId: 'TemplateId',
      content: 'Content',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageLink: 'string',
      docLink: 'string',
      name: 'string',
      templateId: 'string',
      content: 'string',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitTemplateResponseBodyData extends $tea.Model {
  gmtDeleted?: string;
  operatorModified?: string;
  gmtModified?: string;
  operatorDeleted?: string;
  parentUserId?: string;
  workspaceId?: string;
  description?: string;
  operatorCreate?: string;
  version?: number;
  isDeleted?: boolean;
  experimentId?: string;
  gmtCreate?: string;
  name?: string;
  content?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      gmtDeleted: 'GmtDeleted',
      operatorModified: 'OperatorModified',
      gmtModified: 'GmtModified',
      operatorDeleted: 'OperatorDeleted',
      parentUserId: 'ParentUserId',
      workspaceId: 'WorkspaceId',
      description: 'Description',
      operatorCreate: 'OperatorCreate',
      version: 'Version',
      isDeleted: 'IsDeleted',
      experimentId: 'ExperimentId',
      gmtCreate: 'GmtCreate',
      name: 'Name',
      content: 'Content',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtDeleted: 'string',
      operatorModified: 'string',
      gmtModified: 'string',
      operatorDeleted: 'string',
      parentUserId: 'string',
      workspaceId: 'string',
      description: 'string',
      operatorCreate: 'string',
      version: 'number',
      isDeleted: 'boolean',
      experimentId: 'string',
      gmtCreate: 'string',
      name: 'string',
      content: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentNewResponseBodyData extends $tea.Model {
  id?: string;
  name?: string;
  type?: string;
  hasChild?: boolean;
  icon?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
      hasChild: 'HasChild',
      icon: 'Icon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
      hasChild: 'boolean',
      icon: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyData extends $tea.Model {
  workspaceId?: string;
  parentUserId?: string;
  description?: string;
  version?: number;
  experimentId?: string;
  gmtCreate?: number;
  source?: string;
  name?: string;
  gmtModified?: number;
  creator?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      parentUserId: 'ParentUserId',
      description: 'Description',
      version: 'Version',
      experimentId: 'ExperimentId',
      gmtCreate: 'GmtCreate',
      source: 'Source',
      name: 'Name',
      gmtModified: 'GmtModified',
      creator: 'Creator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      parentUserId: 'string',
      description: 'string',
      version: 'number',
      experimentId: 'string',
      gmtCreate: 'number',
      source: 'string',
      name: 'string',
      gmtModified: 'number',
      creator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyData extends $tea.Model {
  status?: string;
  paiflowNodeId?: string;
  jobId?: string;
  createTime?: string;
  experimentId?: string;
  creator?: string;
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      paiflowNodeId: 'PaiflowNodeId',
      jobId: 'JobId',
      createTime: 'CreateTime',
      experimentId: 'ExperimentId',
      creator: 'Creator',
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      paiflowNodeId: 'string',
      jobId: 'string',
      createTime: 'string',
      experimentId: 'string',
      creator: 'string',
      runId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyData extends $tea.Model {
  serviceId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      serviceId: 'ServiceId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceId: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyData extends $tea.Model {
  description?: string;
  imageLink?: string;
  docLink?: string;
  name?: string;
  templateId?: string;
  content?: string;
  detail?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageLink: 'ImageLink',
      docLink: 'DocLink',
      name: 'Name',
      templateId: 'TemplateId',
      content: 'Content',
      detail: 'Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageLink: 'string',
      docLink: 'string',
      name: 'string',
      templateId: 'string',
      content: 'string',
      detail: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchExperimentResponseBodyData extends $tea.Model {
  id?: string;
  name?: string;
  type?: string;
  hasChild?: boolean;
  icon?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      type: 'Type',
      hasChild: 'HasChild',
      icon: 'Icon',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
      hasChild: 'boolean',
      icon: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentMetaResponseBodyData extends $tea.Model {
  experimentId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
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
      'cn-beijing': "pai.cn-beijing.aliyuncs.com",
      'cn-hangzhou': "pai.cn-hangzhou.data.aliyun.com",
      'cn-shanghai': "pai.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "pai.cn-shenzhen.aliyuncs.com",
      'cn-hongkong': "pai.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "pai.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "pai.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "pai.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "pai.ap-southeast-5.aliyuncs.com",
      'us-west-1': "pai.us-west-1.aliyuncs.com",
      'us-east-1': "pai.us-east-1.aliyuncs.com",
      'eu-central-1': "pai.eu-central-1.aliyuncs.com",
      'me-east-1': "pai.me-east-1.aliyuncs.com",
      'ap-south-1': "pai.ap-south-1.aliyuncs.com",
      'cn-qingdao': "pai.cn-qingdao.aliyuncs.com",
      'cn-zhangjiakou': "pai.cn-zhangjiakou.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("paistudio", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createExperiment(request: CreateExperimentRequest): Promise<CreateExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentWithOptions(request, headers, runtime);
  }

  async createExperimentWithOptions(request: CreateExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    if (!Util.isUnset(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateExperimentResponse>(await this.doROARequest("CreateExperiment", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/experiments`, "json", req, runtime), new CreateExperimentResponse({}));
  }

  async createExperimentFolder(request: CreateExperimentFolderRequest): Promise<CreateExperimentFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentFolderWithOptions(request, headers, runtime);
  }

  async createExperimentFolderWithOptions(request: CreateExperimentFolderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExperimentFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateExperimentFolderResponse>(await this.doROARequest("CreateExperimentFolder", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/experiment-folders`, "json", req, runtime), new CreateExperimentFolderResponse({}));
  }

  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobWithOptions(request, headers, runtime);
  }

  async createJobWithOptions(request: CreateJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.executeType)) {
      query["ExecuteType"] = request.executeType;
    }

    if (!Util.isUnset(request.anchorNodeId)) {
      query["AnchorNodeId"] = request.anchorNodeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateJobResponse>(await this.doROARequest("CreateJob", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/jobs`, "json", req, runtime), new CreateJobResponse({}));
  }

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  async createServiceWithOptions(request: CreateServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.logDirectory)) {
      query["LogDirectory"] = request.logDirectory;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<CreateServiceResponse>(await this.doROARequest("CreateService", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/services`, "json", req, runtime), new CreateServiceResponse({}));
  }

  async deleteAlgo(request: DeleteAlgoRequest): Promise<DeleteAlgoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAlgoWithOptions(request, headers, runtime);
  }

  async deleteAlgoWithOptions(request: DeleteAlgoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAlgoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pipelineId)) {
      body["PipelineId"] = request.pipelineId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<DeleteAlgoResponse>(await this.doROARequestWithForm("DeleteAlgo", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/algo/delete`, "json", req, runtime), new DeleteAlgoResponse({}));
  }

  async deleteExperiment(ExperimentId: string): Promise<DeleteExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, headers, runtime);
  }

  async deleteExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteExperimentResponse>(await this.doROARequest("DeleteExperiment", "2020-11-23", "HTTPS", "DELETE", "AK", `/api/core/v1.0/experiments/${ExperimentId}`, "json", req, runtime), new DeleteExperimentResponse({}));
  }

  async deleteExperimentFolder(FolderId: string): Promise<DeleteExperimentFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentFolderWithOptions(FolderId, headers, runtime);
  }

  async deleteExperimentFolderWithOptions(FolderId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentFolderResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteExperimentFolderResponse>(await this.doROARequest("DeleteExperimentFolder", "2020-11-23", "HTTPS", "DELETE", "AK", `/api/core/v1.0/experiment-folders/${FolderId}`, "json", req, runtime), new DeleteExperimentFolderResponse({}));
  }

  async getAlgoDef(request: GetAlgoDefRequest): Promise<GetAlgoDefResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgoDefWithOptions(request, headers, runtime);
  }

  async getAlgoDefWithOptions(request: GetAlgoDefRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAlgoDefResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    if (!Util.isUnset(request.signature)) {
      query["Signature"] = request.signature;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetAlgoDefResponse>(await this.doROARequest("GetAlgoDef", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/algo/detail`, "json", req, runtime), new GetAlgoDefResponse({}));
  }

  async getAlgoTree(request: GetAlgoTreeRequest): Promise<GetAlgoTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgoTreeWithOptions(request, headers, runtime);
  }

  async getAlgoTreeWithOptions(request: GetAlgoTreeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAlgoTreeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetAlgoTreeResponse>(await this.doROARequest("GetAlgoTree", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/algo/tree`, "json", req, runtime), new GetAlgoTreeResponse({}));
  }

  async getExperiment(ExperimentId: string): Promise<GetExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentWithOptions(ExperimentId, headers, runtime);
  }

  async getExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetExperimentResponse>(await this.doROARequest("GetExperiment", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/experiments/${ExperimentId}`, "json", req, runtime), new GetExperimentResponse({}));
  }

  async getExperimentMeta(ExperimentId: string): Promise<GetExperimentMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentMetaWithOptions(ExperimentId, headers, runtime);
  }

  async getExperimentMetaWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentMetaResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetExperimentMetaResponse>(await this.doROARequest("GetExperimentMeta", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/experiments/${ExperimentId}/meta`, "json", req, runtime), new GetExperimentMetaResponse({}));
  }

  async getExperimentStatus(ExperimentId: string): Promise<GetExperimentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentStatusWithOptions(ExperimentId, headers, runtime);
  }

  async getExperimentStatusWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetExperimentStatusResponse>(await this.doROARequest("GetExperimentStatus", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/experiments/${ExperimentId}/status`, "json", req, runtime), new GetExperimentStatusResponse({}));
  }

  async getJob(JobId: string, request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobWithOptions(JobId, request, headers, runtime);
  }

  async getJobWithOptions(JobId: string, request: GetJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.queryDetail)) {
      query["QueryDetail"] = request.queryDetail;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetJobResponse>(await this.doROARequest("GetJob", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/jobs/${JobId}`, "json", req, runtime), new GetJobResponse({}));
  }

  async getNodeInputSchema(ExperimentId: string, NodeId: string, request: GetNodeInputSchemaRequest): Promise<GetNodeInputSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeInputSchemaWithOptions(ExperimentId, NodeId, request, headers, runtime);
  }

  async getNodeInputSchemaWithOptions(ExperimentId: string, NodeId: string, request: GetNodeInputSchemaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNodeInputSchemaResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inputAnchor)) {
      query["InputAnchor"] = request.inputAnchor;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetNodeInputSchemaResponse>(await this.doROARequest("GetNodeInputSchema", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/experiments/${ExperimentId}/nodes/${NodeId}/schema`, "json", req, runtime), new GetNodeInputSchemaResponse({}));
  }

  async getOdpsTable(request: GetOdpsTableRequest): Promise<GetOdpsTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOdpsTableWithOptions(request, headers, runtime);
  }

  async getOdpsTableWithOptions(request: GetOdpsTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOdpsTableResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetOdpsTableResponse>(await this.doROARequest("GetOdpsTable", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/datasource/odps/table`, "json", req, runtime), new GetOdpsTableResponse({}));
  }

  async getOutputModelInfo(ExperimentId: string, NodeId: string): Promise<GetOutputModelInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOutputModelInfoWithOptions(ExperimentId, NodeId, headers, runtime);
  }

  async getOutputModelInfoWithOptions(ExperimentId: string, NodeId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOutputModelInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetOutputModelInfoResponse>(await this.doROARequest("GetOutputModelInfo", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/nodes/${ExperimentId}/${NodeId}/model`, "json", req, runtime), new GetOutputModelInfoResponse({}));
  }

  async getOutputModeVisual(ExperimentId: string, NodeId: string, request: GetOutputModeVisualRequest): Promise<GetOutputModeVisualResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOutputModeVisualWithOptions(ExperimentId, NodeId, request, headers, runtime);
  }

  async getOutputModeVisualWithOptions(ExperimentId: string, NodeId: string, request: GetOutputModeVisualRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOutputModeVisualResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exportParams)) {
      query["ExportParams"] = request.exportParams;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetOutputModeVisualResponse>(await this.doROARequest("GetOutputModeVisual", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/nodes/${ExperimentId}/${NodeId}/visual`, "json", req, runtime), new GetOutputModeVisualResponse({}));
  }

  async getOutputPmmlPath(ExperimentId: string, NodeId: string): Promise<GetOutputPmmlPathResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOutputPmmlPathWithOptions(ExperimentId, NodeId, headers, runtime);
  }

  async getOutputPmmlPathWithOptions(ExperimentId: string, NodeId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetOutputPmmlPathResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetOutputPmmlPathResponse>(await this.doROARequest("GetOutputPmmlPath", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/nodes/${ExperimentId}/${NodeId}/pmml`, "json", req, runtime), new GetOutputPmmlPathResponse({}));
  }

  async getService(ServiceId: string, request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(ServiceId, request, headers, runtime);
  }

  async getServiceWithOptions(ServiceId: string, request: GetServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetServiceResponse>(await this.doROARequest("GetService", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/services/${ServiceId}`, "json", req, runtime), new GetServiceResponse({}));
  }

  async getStatistics(request: GetStatisticsRequest): Promise<GetStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStatisticsWithOptions(request, headers, runtime);
  }

  async getStatisticsWithOptions(request: GetStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetStatisticsResponse>(await this.doROARequest("GetStatistics", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/statistics`, "json", req, runtime), new GetStatisticsResponse({}));
  }

  async getTemplate(TemplateId: string): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(TemplateId, headers, runtime);
  }

  async getTemplateWithOptions(TemplateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetTemplateResponse>(await this.doROARequest("GetTemplate", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/templates/${TemplateId}`, "json", req, runtime), new GetTemplateResponse({}));
  }

  async initTemplate(TemplateId: string, request: InitTemplateRequest): Promise<InitTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.initTemplateWithOptions(TemplateId, request, headers, runtime);
  }

  async initTemplateWithOptions(TemplateId: string, request: InitTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InitTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    if (!Util.isUnset(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<InitTemplateResponse>(await this.doROARequest("InitTemplate", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/templates/${TemplateId}/experiments`, "json", req, runtime), new InitTemplateResponse({}));
  }

  async listAlgoDefs(): Promise<ListAlgoDefsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlgoDefsWithOptions(headers, runtime);
  }

  async listAlgoDefsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAlgoDefsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListAlgoDefsResponse>(await this.doROARequest("ListAlgoDefs", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/algo/detail`, "json", req, runtime), new ListAlgoDefsResponse({}));
  }

  async listExperimentNew(request: ListExperimentNewRequest): Promise<ListExperimentNewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentNewWithOptions(request, headers, runtime);
  }

  async listExperimentNewWithOptions(request: ListExperimentNewRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExperimentNewResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.folderId)) {
      query["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.onlyFolder)) {
      query["OnlyFolder"] = request.onlyFolder;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListExperimentNewResponse>(await this.doROARequest("ListExperimentNew", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/experiment-folders`, "json", req, runtime), new ListExperimentNewResponse({}));
  }

  async listExperiments(request: ListExperimentsRequest): Promise<ListExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentsWithOptions(request, headers, runtime);
  }

  async listExperimentsWithOptions(request: ListExperimentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExperimentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListExperimentsResponse>(await this.doROARequest("ListExperiments", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/experiments`, "json", req, runtime), new ListExperimentsResponse({}));
  }

  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(request, headers, runtime);
  }

  async listJobsWithOptions(request: ListJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListJobsResponse>(await this.doROARequest("ListJobs", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/jobs`, "json", req, runtime), new ListJobsResponse({}));
  }

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  async listServicesWithOptions(request: ListServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListServicesResponse>(await this.doROARequest("ListServices", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/services`, "json", req, runtime), new ListServicesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(request, headers, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortDirection)) {
      query["SortDirection"] = request.sortDirection;
    }

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListTemplatesResponse>(await this.doROARequest("ListTemplates", "2020-11-23", "HTTPS", "GET", "AK", `/api/core/v1.0/templates`, "json", req, runtime), new ListTemplatesResponse({}));
  }

  async previewOdpsTable(request: PreviewOdpsTableRequest): Promise<PreviewOdpsTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.previewOdpsTableWithOptions(request, headers, runtime);
  }

  async previewOdpsTableWithOptions(request: PreviewOdpsTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PreviewOdpsTableResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.nodeId)) {
      query["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.outputId)) {
      query["OutputId"] = request.outputId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<PreviewOdpsTableResponse>(await this.doROARequest("PreviewOdpsTable", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/datasource/odps/table/preview`, "json", req, runtime), new PreviewOdpsTableResponse({}));
  }

  async publishAlgo(request: PublishAlgoRequest): Promise<PublishAlgoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishAlgoWithOptions(request, headers, runtime);
  }

  async publishAlgoWithOptions(request: PublishAlgoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishAlgoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.version)) {
      query["Version"] = request.version;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.signature)) {
      query["Signature"] = request.signature;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<PublishAlgoResponse>(await this.doROARequest("PublishAlgo", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/algo/publish`, "json", req, runtime), new PublishAlgoResponse({}));
  }

  async searchExperiment(request: SearchExperimentRequest): Promise<SearchExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchExperimentWithOptions(request, headers, runtime);
  }

  async searchExperimentWithOptions(request: SearchExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchExperimentResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<SearchExperimentResponse>(await this.doROARequest("SearchExperiment", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/experiment_search`, "json", req, runtime), new SearchExperimentResponse({}));
  }

  async searchOdpsTable(request: SearchOdpsTableRequest): Promise<SearchOdpsTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchOdpsTableWithOptions(request, headers, runtime);
  }

  async searchOdpsTableWithOptions(request: SearchOdpsTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchOdpsTableResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<SearchOdpsTableResponse>(await this.doROARequest("SearchOdpsTable", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/datasource/odps/search`, "json", req, runtime), new SearchOdpsTableResponse({}));
  }

  async stopExperiment(ExperimentId: string): Promise<StopExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopExperimentWithOptions(ExperimentId, headers, runtime);
  }

  async stopExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopExperimentResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StopExperimentResponse>(await this.doROARequest("StopExperiment", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/experiments/${ExperimentId}/stop`, "json", req, runtime), new StopExperimentResponse({}));
  }

  async stopJob(JobId: string): Promise<StopJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopJobWithOptions(JobId, headers, runtime);
  }

  async stopJobWithOptions(JobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopJobResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StopJobResponse>(await this.doROARequest("StopJob", "2020-11-23", "HTTPS", "POST", "AK", `/api/core/v1.0/jobs/${JobId}/stop`, "json", req, runtime), new StopJobResponse({}));
  }

  async updateExperimentFolder(FolderId: string, request: UpdateExperimentFolderRequest): Promise<UpdateExperimentFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentFolderWithOptions(FolderId, request, headers, runtime);
  }

  async updateExperimentFolderWithOptions(FolderId: string, request: UpdateExperimentFolderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateExperimentFolderResponse>(await this.doROARequest("UpdateExperimentFolder", "2020-11-23", "HTTPS", "PUT", "AK", `/api/core/v1.0/experiment-folders/${FolderId}`, "json", req, runtime), new UpdateExperimentFolderResponse({}));
  }

  async updateExperimentMeta(ExperimentId: string, request: UpdateExperimentMetaRequest): Promise<UpdateExperimentMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentMetaWithOptions(ExperimentId, request, headers, runtime);
  }

  async updateExperimentMetaWithOptions(ExperimentId: string, request: UpdateExperimentMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentMetaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.parentId)) {
      body["ParentId"] = request.parentId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateExperimentMetaResponse>(await this.doROARequest("UpdateExperimentMeta", "2020-11-23", "HTTPS", "PUT", "AK", `/api/core/v1.0/experiments/${ExperimentId}/meta`, "json", req, runtime), new UpdateExperimentMetaResponse({}));
  }

}
