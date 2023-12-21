// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class BriefPipelineRun extends $tea.Model {
  accessibility?: string;
  duration?: number;
  finishedAt?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  message?: string;
  name?: string;
  nodeId?: string;
  parentUserId?: string;
  pipelineId?: string;
  pipelineRunId?: string;
  sourceId?: string;
  sourceType?: string;
  startedAt?: string;
  status?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      duration: 'Duration',
      finishedAt: 'FinishedAt',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      message: 'Message',
      name: 'Name',
      nodeId: 'NodeId',
      parentUserId: 'ParentUserId',
      pipelineId: 'PipelineId',
      pipelineRunId: 'PipelineRunId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      startedAt: 'StartedAt',
      status: 'Status',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      duration: 'number',
      finishedAt: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      message: 'string',
      name: 'string',
      nodeId: 'string',
      parentUserId: 'string',
      pipelineId: 'string',
      pipelineRunId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      startedAt: 'string',
      status: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FullPipelineRun extends $tea.Model {
  accessibility?: string;
  arguments?: string;
  duration?: number;
  finishedAt?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  manifest?: string;
  message?: string;
  name?: string;
  nodeId?: string;
  options?: string;
  parentUserId?: string;
  pipelineId?: string;
  pipelineRunId?: string;
  sourceId?: string;
  sourceType?: string;
  startedAt?: string;
  status?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      arguments: 'Arguments',
      duration: 'Duration',
      finishedAt: 'FinishedAt',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      manifest: 'Manifest',
      message: 'Message',
      name: 'Name',
      nodeId: 'NodeId',
      options: 'Options',
      parentUserId: 'ParentUserId',
      pipelineId: 'PipelineId',
      pipelineRunId: 'PipelineRunId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      startedAt: 'StartedAt',
      status: 'Status',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      arguments: 'string',
      duration: 'number',
      finishedAt: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      manifest: 'string',
      message: 'string',
      name: 'string',
      nodeId: 'string',
      options: 'string',
      parentUserId: 'string',
      pipelineId: 'string',
      pipelineRunId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      startedAt: 'string',
      status: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Node extends $tea.Model {
  apiVersion?: string;
  metadata?: NodeMetadata;
  spec?: NodeSpec;
  statusInfo?: NodeStatusInfo;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      metadata: 'Metadata',
      spec: 'Spec',
      statusInfo: 'StatusInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      metadata: NodeMetadata,
      spec: NodeSpec,
      statusInfo: NodeStatusInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeIO extends $tea.Model {
  artifacts?: { [key: string]: any }[];
  parameters?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Pipeline extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  identifier?: string;
  pipelineId?: string;
  provider?: string;
  uuid?: string;
  version?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      identifier: 'Identifier',
      pipelineId: 'PipelineId',
      provider: 'Provider',
      uuid: 'Uuid',
      version: 'Version',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      identifier: 'string',
      pipelineId: 'string',
      provider: 'string',
      uuid: 'string',
      version: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Run extends $tea.Model {
  accessibility?: string;
  duration?: number;
  experimentId?: string;
  finishedAt?: number;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  message?: string;
  name?: string;
  nodeId?: string;
  parentUserId?: string;
  runId?: string;
  source?: string;
  startedAt?: number;
  status?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      duration: 'Duration',
      experimentId: 'ExperimentId',
      finishedAt: 'FinishedAt',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      message: 'Message',
      name: 'Name',
      nodeId: 'NodeId',
      parentUserId: 'ParentUserId',
      runId: 'RunId',
      source: 'Source',
      startedAt: 'StartedAt',
      status: 'Status',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      duration: 'number',
      experimentId: 'string',
      finishedAt: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      message: 'string',
      name: 'string',
      nodeId: 'string',
      parentUserId: 'string',
      runId: 'string',
      source: 'string',
      startedAt: 'number',
      status: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRequest extends $tea.Model {
  manifest?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      manifest: 'Manifest',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manifest: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineResponseBody extends $tea.Model {
  pipelineId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePipelineResponseBody;
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
      body: CreatePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRunRequest extends $tea.Model {
  accessibility?: string;
  arguments?: string;
  name?: string;
  noConfirmRequired?: boolean;
  options?: string;
  pipelineId?: string;
  pipelineManifest?: string;
  sourceId?: string;
  sourceType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      arguments: 'Arguments',
      name: 'Name',
      noConfirmRequired: 'NoConfirmRequired',
      options: 'Options',
      pipelineId: 'PipelineId',
      pipelineManifest: 'PipelineManifest',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      arguments: 'string',
      name: 'string',
      noConfirmRequired: 'boolean',
      options: 'string',
      pipelineId: 'string',
      pipelineManifest: 'string',
      sourceId: 'string',
      sourceType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRunResponseBody extends $tea.Model {
  pipelineRunId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineRunId: 'PipelineRunId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineRunId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreatePipelineRunResponseBody;
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
      body: CreatePipelineRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineResponseBody extends $tea.Model {
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

export class DeletePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePipelineResponseBody;
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
      body: DeletePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePipelineRunResponseBody extends $tea.Model {
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

export class DeletePipelineRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeletePipelineRunResponseBody;
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
      body: DeletePipelineRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponseBody extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  identifier?: string;
  manifest?: string;
  pipelineId?: string;
  provider?: string;
  requestId?: string;
  uuid?: string;
  version?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      identifier: 'Identifier',
      manifest: 'Manifest',
      pipelineId: 'PipelineId',
      provider: 'Provider',
      requestId: 'RequestId',
      uuid: 'Uuid',
      version: 'Version',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      identifier: 'string',
      manifest: 'string',
      pipelineId: 'string',
      provider: 'string',
      requestId: 'string',
      uuid: 'string',
      version: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPipelineResponseBody;
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
      body: GetPipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunRequest extends $tea.Model {
  manifestType?: string;
  tokenId?: string;
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      manifestType: 'ManifestType',
      tokenId: 'TokenId',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manifestType: 'string',
      tokenId: 'string',
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponseBody extends $tea.Model {
  accessibility?: string;
  arguments?: string;
  duration?: number;
  finishedAt?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  manifest?: string;
  message?: string;
  name?: string;
  nodeId?: string;
  options?: string;
  parentUserId?: string;
  pipelineId?: string;
  pipelineRunId?: string;
  pipelineRunUri?: string;
  requestId?: string;
  sourceId?: string;
  sourceType?: string;
  startedAt?: string;
  status?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      arguments: 'Arguments',
      duration: 'Duration',
      finishedAt: 'FinishedAt',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      manifest: 'Manifest',
      message: 'Message',
      name: 'Name',
      nodeId: 'NodeId',
      options: 'Options',
      parentUserId: 'ParentUserId',
      pipelineId: 'PipelineId',
      pipelineRunId: 'PipelineRunId',
      pipelineRunUri: 'PipelineRunUri',
      requestId: 'RequestId',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      startedAt: 'StartedAt',
      status: 'Status',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      arguments: 'string',
      duration: 'number',
      finishedAt: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      manifest: 'string',
      message: 'string',
      name: 'string',
      nodeId: 'string',
      options: 'string',
      parentUserId: 'string',
      pipelineId: 'string',
      pipelineRunId: 'string',
      pipelineRunUri: 'string',
      requestId: 'string',
      sourceId: 'string',
      sourceType: 'string',
      startedAt: 'string',
      status: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPipelineRunResponseBody;
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
      body: GetPipelineRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunNodeRequest extends $tea.Model {
  depth?: number;
  tokenId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      tokenId: 'TokenId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      tokenId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunNodeResponseBody extends $tea.Model {
  apiVersion?: string;
  metadata?: GetPipelineRunNodeResponseBodyMetadata;
  requestId?: string;
  spec?: GetPipelineRunNodeResponseBodySpec;
  statusInfo?: GetPipelineRunNodeResponseBodyStatusInfo;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      metadata: 'Metadata',
      requestId: 'RequestId',
      spec: 'Spec',
      statusInfo: 'StatusInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      metadata: GetPipelineRunNodeResponseBodyMetadata,
      requestId: 'string',
      spec: GetPipelineRunNodeResponseBodySpec,
      statusInfo: GetPipelineRunNodeResponseBodyStatusInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetPipelineRunNodeResponseBody;
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
      body: GetPipelineRunNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunNodeLogsRequest extends $tea.Model {
  fromTimeInSeconds?: number;
  keyword?: string;
  offset?: number;
  pageSize?: number;
  reverse?: boolean;
  toTimeInSeconds?: number;
  tokenId?: string;
  static names(): { [key: string]: string } {
    return {
      fromTimeInSeconds: 'FromTimeInSeconds',
      keyword: 'Keyword',
      offset: 'Offset',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      toTimeInSeconds: 'ToTimeInSeconds',
      tokenId: 'TokenId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromTimeInSeconds: 'number',
      keyword: 'string',
      offset: 'number',
      pageSize: 'number',
      reverse: 'boolean',
      toTimeInSeconds: 'number',
      tokenId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunNodeLogsResponseBody extends $tea.Model {
  logs?: string[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunNodeLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPipelineRunNodeLogsResponseBody;
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
      body: ListPipelineRunNodeLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunNodeOutputsRequest extends $tea.Model {
  depth?: number;
  name?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  tokenId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      tokenId: 'TokenId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      tokenId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunNodeOutputsResponseBody extends $tea.Model {
  outputs?: ListPipelineRunNodeOutputsResponseBodyOutputs[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: { 'type': 'array', 'itemType': ListPipelineRunNodeOutputsResponseBodyOutputs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunNodeOutputsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPipelineRunNodeOutputsResponseBody;
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
      body: ListPipelineRunNodeOutputsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunNodeStatusRequest extends $tea.Model {
  depth?: number;
  tokenId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      tokenId: 'TokenId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      tokenId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunNodeStatusResponseBody extends $tea.Model {
  requestId?: string;
  status?: ListPipelineRunNodeStatusResponseBodyStatus[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: { 'type': 'array', 'itemType': ListPipelineRunNodeStatusResponseBodyStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunNodeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPipelineRunNodeStatusResponseBody;
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
      body: ListPipelineRunNodeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsRequest extends $tea.Model {
  name?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  pipelineIds?: string;
  pipelineRunId?: string;
  sortBy?: string;
  sourceId?: string;
  sourceType?: string;
  status?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineIds: 'PipelineIds',
      pipelineRunId: 'PipelineRunId',
      sortBy: 'SortBy',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      status: 'Status',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pipelineIds: 'string',
      pipelineRunId: 'string',
      sortBy: 'string',
      sourceId: 'string',
      sourceType: 'string',
      status: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponseBody extends $tea.Model {
  pipelineRuns?: ListPipelineRunsResponseBodyPipelineRuns[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineRuns: 'PipelineRuns',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineRuns: { 'type': 'array', 'itemType': ListPipelineRunsResponseBodyPipelineRuns },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPipelineRunsResponseBody;
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
      body: ListPipelineRunsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsStatusRequest extends $tea.Model {
  nodes?: ListPipelineRunsStatusRequestNodes[];
  outputType?: string;
  pipelineRuns?: string[];
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      outputType: 'OutputType',
      pipelineRuns: 'PipelineRuns',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListPipelineRunsStatusRequestNodes },
      outputType: 'string',
      pipelineRuns: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsStatusResponseBody extends $tea.Model {
  nodes?: ListPipelineRunsStatusResponseBodyNodes[];
  outputs?: ListPipelineRunsStatusResponseBodyOutputs[];
  pipelineRuns?: ListPipelineRunsStatusResponseBodyPipelineRuns[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      outputs: 'Outputs',
      pipelineRuns: 'PipelineRuns',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListPipelineRunsStatusResponseBodyNodes },
      outputs: { 'type': 'array', 'itemType': ListPipelineRunsStatusResponseBodyOutputs },
      pipelineRuns: { 'type': 'array', 'itemType': ListPipelineRunsStatusResponseBodyPipelineRuns },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPipelineRunsStatusResponseBody;
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
      body: ListPipelineRunsStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesRequest extends $tea.Model {
  fuzzyMatching?: boolean;
  pageNumber?: number;
  pageSize?: number;
  pipelineIdentifier?: string;
  pipelineProvider?: string;
  pipelineVersion?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      fuzzyMatching: 'FuzzyMatching',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineIdentifier: 'PipelineIdentifier',
      pipelineProvider: 'PipelineProvider',
      pipelineVersion: 'PipelineVersion',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fuzzyMatching: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      pipelineIdentifier: 'string',
      pipelineProvider: 'string',
      pipelineVersion: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBody extends $tea.Model {
  pipelines?: ListPipelinesResponseBodyPipelines[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pipelines: 'Pipelines',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelines: { 'type': 'array', 'itemType': ListPipelinesResponseBodyPipelines },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListPipelinesResponseBody;
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
      body: ListPipelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunPipelineRunResponseBody extends $tea.Model {
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

export class RerunPipelineRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RerunPipelineRunResponseBody;
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
      body: RerunPipelineRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPipelineRunResponseBody extends $tea.Model {
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

export class StartPipelineRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartPipelineRunResponseBody;
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
      body: StartPipelineRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminatePipelineRunResponseBody extends $tea.Model {
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

export class TerminatePipelineRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TerminatePipelineRunResponseBody;
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
      body: TerminatePipelineRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineRequest extends $tea.Model {
  manifest?: string;
  static names(): { [key: string]: string } {
    return {
      manifest: 'Manifest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manifest: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineResponseBody extends $tea.Model {
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

export class UpdatePipelineResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePipelineResponseBody;
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
      body: UpdatePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelineRunRequest extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
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

export class UpdatePipelineRunResponseBody extends $tea.Model {
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

export class UpdatePipelineRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdatePipelineRunResponseBody;
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
      body: UpdatePipelineRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeMetadata extends $tea.Model {
  displayName?: string;
  identifier?: string;
  name?: string;
  nodeId?: string;
  nodeType?: string;
  provider?: string;
  relatedNodeIds?: string[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      identifier: 'Identifier',
      name: 'Name',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      provider: 'Provider',
      relatedNodeIds: 'RelatedNodeIds',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      identifier: 'string',
      name: 'string',
      nodeId: 'string',
      nodeType: 'string',
      provider: 'string',
      relatedNodeIds: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeSpecWithSequence extends $tea.Model {
  end?: number;
  format?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      format: 'Format',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      format: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeSpec extends $tea.Model {
  dependencies?: string[];
  hasPipelines?: boolean;
  inputs?: NodeIO;
  outputs?: NodeIO;
  parallelism?: number;
  pipelines?: Node[];
  when?: string;
  withItems?: string[];
  withParam?: string;
  withSequence?: NodeSpecWithSequence;
  static names(): { [key: string]: string } {
    return {
      dependencies: 'Dependencies',
      hasPipelines: 'HasPipelines',
      inputs: 'Inputs',
      outputs: 'Outputs',
      parallelism: 'Parallelism',
      pipelines: 'Pipelines',
      when: 'When',
      withItems: 'WithItems',
      withParam: 'WithParam',
      withSequence: 'WithSequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencies: { 'type': 'array', 'itemType': 'string' },
      hasPipelines: 'boolean',
      inputs: NodeIO,
      outputs: NodeIO,
      parallelism: 'number',
      pipelines: { 'type': 'array', 'itemType': Node },
      when: 'string',
      withItems: { 'type': 'array', 'itemType': 'string' },
      withParam: 'string',
      withSequence: NodeSpecWithSequence,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeStatusInfoConditions extends $tea.Model {
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeStatusInfo extends $tea.Model {
  conditions?: NodeStatusInfoConditions[];
  finishedAt?: string;
  progress?: string;
  startedAt?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      finishedAt: 'FinishedAt',
      progress: 'Progress',
      startedAt: 'StartedAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': NodeStatusInfoConditions },
      finishedAt: 'string',
      progress: 'string',
      startedAt: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunNodeResponseBodyMetadata extends $tea.Model {
  displayName?: string;
  identifier?: string;
  name?: string;
  nodeId?: string;
  nodeType?: string;
  provider?: string;
  relatedNodeIds?: string[];
  version?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      identifier: 'Identifier',
      name: 'Name',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      provider: 'Provider',
      relatedNodeIds: 'RelatedNodeIds',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      identifier: 'string',
      name: 'string',
      nodeId: 'string',
      nodeType: 'string',
      provider: 'string',
      relatedNodeIds: { 'type': 'array', 'itemType': 'string' },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunNodeResponseBodySpecInputs extends $tea.Model {
  artifacts?: { [key: string]: any }[];
  parameters?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunNodeResponseBodySpecOutputs extends $tea.Model {
  artifacts?: { [key: string]: any }[];
  parameters?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      artifacts: 'Artifacts',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifacts: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      parameters: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunNodeResponseBodySpecWithSequence extends $tea.Model {
  end?: number;
  format?: string;
  start?: number;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      format: 'Format',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'number',
      format: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunNodeResponseBodySpec extends $tea.Model {
  dependencies?: string[];
  hasPipelines?: boolean;
  inputs?: GetPipelineRunNodeResponseBodySpecInputs;
  outputs?: GetPipelineRunNodeResponseBodySpecOutputs;
  parallelism?: number;
  pipelines?: { [key: string]: any }[];
  when?: string;
  withItems?: string[];
  withParam?: string;
  withSequence?: GetPipelineRunNodeResponseBodySpecWithSequence;
  static names(): { [key: string]: string } {
    return {
      dependencies: 'Dependencies',
      hasPipelines: 'HasPipelines',
      inputs: 'Inputs',
      outputs: 'Outputs',
      parallelism: 'Parallelism',
      pipelines: 'Pipelines',
      when: 'When',
      withItems: 'WithItems',
      withParam: 'WithParam',
      withSequence: 'WithSequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencies: { 'type': 'array', 'itemType': 'string' },
      hasPipelines: 'boolean',
      inputs: GetPipelineRunNodeResponseBodySpecInputs,
      outputs: GetPipelineRunNodeResponseBodySpecOutputs,
      parallelism: 'number',
      pipelines: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      when: 'string',
      withItems: { 'type': 'array', 'itemType': 'string' },
      withParam: 'string',
      withSequence: GetPipelineRunNodeResponseBodySpecWithSequence,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineRunNodeResponseBodyStatusInfo extends $tea.Model {
  conditions?: { [key: string]: any }[];
  finishedAt?: string;
  progress?: string;
  startedAt?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      finishedAt: 'FinishedAt',
      progress: 'Progress',
      startedAt: 'StartedAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      finishedAt: 'string',
      progress: 'string',
      startedAt: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunNodeOutputsResponseBodyOutputs extends $tea.Model {
  expandableArtifactName?: string;
  expandedArtifactIndex?: number;
  gmtCreateTime?: string;
  id?: string;
  info?: { [key: string]: any };
  name?: string;
  nodeId?: string;
  producer?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      expandableArtifactName: 'ExpandableArtifactName',
      expandedArtifactIndex: 'ExpandedArtifactIndex',
      gmtCreateTime: 'GmtCreateTime',
      id: 'Id',
      info: 'Info',
      name: 'Name',
      nodeId: 'NodeId',
      producer: 'Producer',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expandableArtifactName: 'string',
      expandedArtifactIndex: 'number',
      gmtCreateTime: 'string',
      id: 'string',
      info: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      nodeId: 'string',
      producer: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunNodeStatusResponseBodyStatus extends $tea.Model {
  finishedAt?: string;
  nodeId?: string;
  nodeName?: string;
  runtimeInfo?: string;
  startedAt?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishedAt: 'FinishedAt',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      runtimeInfo: 'RuntimeInfo',
      startedAt: 'StartedAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedAt: 'string',
      nodeId: 'string',
      nodeName: 'string',
      runtimeInfo: 'string',
      startedAt: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsResponseBodyPipelineRuns extends $tea.Model {
  accessibility?: string;
  duration?: number;
  finishedAt?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  message?: string;
  name?: string;
  nodeId?: string;
  parentUserId?: string;
  pipelineId?: string;
  pipelineRunId?: string;
  pipelineRunUri?: string;
  sourceId?: string;
  sourceType?: string;
  startedAt?: string;
  status?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      duration: 'Duration',
      finishedAt: 'FinishedAt',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      message: 'Message',
      name: 'Name',
      nodeId: 'NodeId',
      parentUserId: 'ParentUserId',
      pipelineId: 'PipelineId',
      pipelineRunId: 'PipelineRunId',
      pipelineRunUri: 'PipelineRunUri',
      sourceId: 'SourceId',
      sourceType: 'SourceType',
      startedAt: 'StartedAt',
      status: 'Status',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      duration: 'number',
      finishedAt: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      message: 'string',
      name: 'string',
      nodeId: 'string',
      parentUserId: 'string',
      pipelineId: 'string',
      pipelineRunId: 'string',
      pipelineRunUri: 'string',
      sourceId: 'string',
      sourceType: 'string',
      startedAt: 'string',
      status: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsStatusRequestNodes extends $tea.Model {
  nodeId?: string;
  pipelineRunId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      pipelineRunId: 'PipelineRunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      pipelineRunId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsStatusResponseBodyNodes extends $tea.Model {
  finishedAt?: string;
  inputArtifactArchived?: boolean;
  nodeId?: string;
  nodeName?: string;
  outputArtifactArchived?: boolean;
  pipelineRunId?: string;
  startedAt?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishedAt: 'FinishedAt',
      inputArtifactArchived: 'InputArtifactArchived',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      outputArtifactArchived: 'OutputArtifactArchived',
      pipelineRunId: 'PipelineRunId',
      startedAt: 'StartedAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedAt: 'string',
      inputArtifactArchived: 'boolean',
      nodeId: 'string',
      nodeName: 'string',
      outputArtifactArchived: 'boolean',
      pipelineRunId: 'string',
      startedAt: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsStatusResponseBodyOutputs extends $tea.Model {
  expandableArtifactName?: string;
  expandedArtifactIndex?: number;
  gmtCreateTime?: string;
  id?: string;
  metadata?: { [key: string]: any };
  name?: string;
  nodeId?: string;
  pipelineRunId?: string;
  producer?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expandableArtifactName: 'ExpandableArtifactName',
      expandedArtifactIndex: 'ExpandedArtifactIndex',
      gmtCreateTime: 'GmtCreateTime',
      id: 'Id',
      metadata: 'Metadata',
      name: 'Name',
      nodeId: 'NodeId',
      pipelineRunId: 'PipelineRunId',
      producer: 'Producer',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expandableArtifactName: 'string',
      expandedArtifactIndex: 'number',
      gmtCreateTime: 'string',
      id: 'string',
      metadata: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      nodeId: 'string',
      pipelineRunId: 'string',
      producer: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineRunsStatusResponseBodyPipelineRuns extends $tea.Model {
  isDeleted?: boolean;
  name?: string;
  nodeId?: string;
  parentUserId?: string;
  pipelineRunId?: string;
  sourceId?: string;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      isDeleted: 'IsDeleted',
      name: 'Name',
      nodeId: 'NodeId',
      parentUserId: 'ParentUserId',
      pipelineRunId: 'PipelineRunId',
      sourceId: 'SourceId',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDeleted: 'boolean',
      name: 'string',
      nodeId: 'string',
      parentUserId: 'string',
      pipelineRunId: 'string',
      sourceId: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponseBodyPipelines extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  identifier?: string;
  pipelineId?: string;
  provider?: string;
  uuid?: string;
  version?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      identifier: 'Identifier',
      pipelineId: 'PipelineId',
      provider: 'Provider',
      uuid: 'Uuid',
      version: 'Version',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      identifier: 'string',
      pipelineId: 'string',
      provider: 'string',
      uuid: 'string',
      version: 'string',
      workspaceId: 'string',
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
    this._endpoint = this.getEndpoint("paiflow", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createPipelineWithOptions(request: CreatePipelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePipelineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.manifest)) {
      body["Manifest"] = request.manifest;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePipeline",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelines`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePipelineResponse>(await this.callApi(params, req, runtime), new CreatePipelineResponse({}));
  }

  async createPipeline(request: CreatePipelineRequest): Promise<CreatePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineWithOptions(request, headers, runtime);
  }

  async createPipelineRunWithOptions(request: CreatePipelineRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePipelineRunResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.arguments)) {
      body["Arguments"] = request.arguments;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.noConfirmRequired)) {
      body["NoConfirmRequired"] = request.noConfirmRequired;
    }

    if (!Util.isUnset(request.options)) {
      body["Options"] = request.options;
    }

    if (!Util.isUnset(request.pipelineId)) {
      body["PipelineId"] = request.pipelineId;
    }

    if (!Util.isUnset(request.pipelineManifest)) {
      body["PipelineManifest"] = request.pipelineManifest;
    }

    if (!Util.isUnset(request.sourceId)) {
      body["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceType)) {
      body["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePipelineRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePipelineRunResponse>(await this.callApi(params, req, runtime), new CreatePipelineRunResponse({}));
  }

  async createPipelineRun(request: CreatePipelineRunRequest): Promise<CreatePipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineRunWithOptions(request, headers, runtime);
  }

  async deletePipelineWithOptions(PipelineId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePipelineResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeletePipeline",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelines/${OpenApiUtil.getEncodeParam(PipelineId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePipelineResponse>(await this.callApi(params, req, runtime), new DeletePipelineResponse({}));
  }

  async deletePipeline(PipelineId: string): Promise<DeletePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineWithOptions(PipelineId, headers, runtime);
  }

  async deletePipelineRunWithOptions(PipelineRunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePipelineRunResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeletePipelineRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns/${OpenApiUtil.getEncodeParam(PipelineRunId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePipelineRunResponse>(await this.callApi(params, req, runtime), new DeletePipelineRunResponse({}));
  }

  async deletePipelineRun(PipelineRunId: string): Promise<DeletePipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineRunWithOptions(PipelineRunId, headers, runtime);
  }

  async getPipelineWithOptions(PipelineId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPipeline",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelines/${OpenApiUtil.getEncodeParam(PipelineId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineResponse>(await this.callApi(params, req, runtime), new GetPipelineResponse({}));
  }

  async getPipeline(PipelineId: string): Promise<GetPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineWithOptions(PipelineId, headers, runtime);
  }

  async getPipelineRunWithOptions(PipelineRunId: string, request: GetPipelineRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineRunResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.manifestType)) {
      query["ManifestType"] = request.manifestType;
    }

    if (!Util.isUnset(request.tokenId)) {
      query["TokenId"] = request.tokenId;
    }

    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPipelineRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns/${OpenApiUtil.getEncodeParam(PipelineRunId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineRunResponse>(await this.callApi(params, req, runtime), new GetPipelineRunResponse({}));
  }

  async getPipelineRun(PipelineRunId: string, request: GetPipelineRunRequest): Promise<GetPipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineRunWithOptions(PipelineRunId, request, headers, runtime);
  }

  async getPipelineRunNodeWithOptions(PipelineRunId: string, NodeId: string, request: GetPipelineRunNodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineRunNodeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.depth)) {
      query["Depth"] = request.depth;
    }

    if (!Util.isUnset(request.tokenId)) {
      query["TokenId"] = request.tokenId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPipelineRunNode",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns/${OpenApiUtil.getEncodeParam(PipelineRunId)}/nodes/${OpenApiUtil.getEncodeParam(NodeId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineRunNodeResponse>(await this.callApi(params, req, runtime), new GetPipelineRunNodeResponse({}));
  }

  async getPipelineRunNode(PipelineRunId: string, NodeId: string, request: GetPipelineRunNodeRequest): Promise<GetPipelineRunNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineRunNodeWithOptions(PipelineRunId, NodeId, request, headers, runtime);
  }

  async listPipelineRunNodeLogsWithOptions(PipelineRunId: string, NodeId: string, request: ListPipelineRunNodeLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineRunNodeLogsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fromTimeInSeconds)) {
      query["FromTimeInSeconds"] = request.fromTimeInSeconds;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.offset)) {
      query["Offset"] = request.offset;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.reverse)) {
      query["Reverse"] = request.reverse;
    }

    if (!Util.isUnset(request.toTimeInSeconds)) {
      query["ToTimeInSeconds"] = request.toTimeInSeconds;
    }

    if (!Util.isUnset(request.tokenId)) {
      query["TokenId"] = request.tokenId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelineRunNodeLogs",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns/${OpenApiUtil.getEncodeParam(PipelineRunId)}/nodes/${OpenApiUtil.getEncodeParam(NodeId)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPipelineRunNodeLogsResponse>(await this.callApi(params, req, runtime), new ListPipelineRunNodeLogsResponse({}));
  }

  async listPipelineRunNodeLogs(PipelineRunId: string, NodeId: string, request: ListPipelineRunNodeLogsRequest): Promise<ListPipelineRunNodeLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineRunNodeLogsWithOptions(PipelineRunId, NodeId, request, headers, runtime);
  }

  async listPipelineRunNodeOutputsWithOptions(PipelineRunId: string, NodeId: string, request: ListPipelineRunNodeOutputsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineRunNodeOutputsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.depth)) {
      query["Depth"] = request.depth;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.tokenId)) {
      query["TokenId"] = request.tokenId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelineRunNodeOutputs",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns/${OpenApiUtil.getEncodeParam(PipelineRunId)}/nodes/${OpenApiUtil.getEncodeParam(NodeId)}/outputs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPipelineRunNodeOutputsResponse>(await this.callApi(params, req, runtime), new ListPipelineRunNodeOutputsResponse({}));
  }

  async listPipelineRunNodeOutputs(PipelineRunId: string, NodeId: string, request: ListPipelineRunNodeOutputsRequest): Promise<ListPipelineRunNodeOutputsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineRunNodeOutputsWithOptions(PipelineRunId, NodeId, request, headers, runtime);
  }

  async listPipelineRunNodeStatusWithOptions(PipelineRunId: string, NodeId: string, request: ListPipelineRunNodeStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineRunNodeStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.depth)) {
      query["Depth"] = request.depth;
    }

    if (!Util.isUnset(request.tokenId)) {
      query["TokenId"] = request.tokenId;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelineRunNodeStatus",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns/${OpenApiUtil.getEncodeParam(PipelineRunId)}/nodes/${OpenApiUtil.getEncodeParam(NodeId)}/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPipelineRunNodeStatusResponse>(await this.callApi(params, req, runtime), new ListPipelineRunNodeStatusResponse({}));
  }

  async listPipelineRunNodeStatus(PipelineRunId: string, NodeId: string, request: ListPipelineRunNodeStatusRequest): Promise<ListPipelineRunNodeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineRunNodeStatusWithOptions(PipelineRunId, NodeId, request, headers, runtime);
  }

  async listPipelineRunsWithOptions(request: ListPipelineRunsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineRunsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pipelineIds)) {
      query["PipelineIds"] = request.pipelineIds;
    }

    if (!Util.isUnset(request.pipelineRunId)) {
      query["PipelineRunId"] = request.pipelineRunId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sourceId)) {
      query["SourceId"] = request.sourceId;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelineRuns",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPipelineRunsResponse>(await this.callApi(params, req, runtime), new ListPipelineRunsResponse({}));
  }

  async listPipelineRuns(request: ListPipelineRunsRequest): Promise<ListPipelineRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineRunsWithOptions(request, headers, runtime);
  }

  async listPipelineRunsStatusWithOptions(request: ListPipelineRunsStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelineRunsStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodes)) {
      body["Nodes"] = request.nodes;
    }

    if (!Util.isUnset(request.outputType)) {
      body["OutputType"] = request.outputType;
    }

    if (!Util.isUnset(request.pipelineRuns)) {
      body["PipelineRuns"] = request.pipelineRuns;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelineRunsStatus",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPipelineRunsStatusResponse>(await this.callApi(params, req, runtime), new ListPipelineRunsStatusResponse({}));
  }

  async listPipelineRunsStatus(request: ListPipelineRunsStatusRequest): Promise<ListPipelineRunsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelineRunsStatusWithOptions(request, headers, runtime);
  }

  async listPipelinesWithOptions(request: ListPipelinesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelinesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fuzzyMatching)) {
      query["FuzzyMatching"] = request.fuzzyMatching;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.pipelineIdentifier)) {
      query["PipelineIdentifier"] = request.pipelineIdentifier;
    }

    if (!Util.isUnset(request.pipelineProvider)) {
      query["PipelineProvider"] = request.pipelineProvider;
    }

    if (!Util.isUnset(request.pipelineVersion)) {
      query["PipelineVersion"] = request.pipelineVersion;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPipelines",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPipelinesResponse>(await this.callApi(params, req, runtime), new ListPipelinesResponse({}));
  }

  async listPipelines(request: ListPipelinesRequest): Promise<ListPipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelinesWithOptions(request, headers, runtime);
  }

  async rerunPipelineRunWithOptions(PipelineRunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RerunPipelineRunResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RerunPipelineRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns/${OpenApiUtil.getEncodeParam(PipelineRunId)}/rerun`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RerunPipelineRunResponse>(await this.callApi(params, req, runtime), new RerunPipelineRunResponse({}));
  }

  async rerunPipelineRun(PipelineRunId: string): Promise<RerunPipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.rerunPipelineRunWithOptions(PipelineRunId, headers, runtime);
  }

  async startPipelineRunWithOptions(PipelineRunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartPipelineRunResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartPipelineRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns/${OpenApiUtil.getEncodeParam(PipelineRunId)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartPipelineRunResponse>(await this.callApi(params, req, runtime), new StartPipelineRunResponse({}));
  }

  async startPipelineRun(PipelineRunId: string): Promise<StartPipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startPipelineRunWithOptions(PipelineRunId, headers, runtime);
  }

  async terminatePipelineRunWithOptions(PipelineRunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TerminatePipelineRunResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "TerminatePipelineRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns/${OpenApiUtil.getEncodeParam(PipelineRunId)}/termination`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TerminatePipelineRunResponse>(await this.callApi(params, req, runtime), new TerminatePipelineRunResponse({}));
  }

  async terminatePipelineRun(PipelineRunId: string): Promise<TerminatePipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.terminatePipelineRunWithOptions(PipelineRunId, headers, runtime);
  }

  async updatePipelineWithOptions(PipelineId: string, request: UpdatePipelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePipelineResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.manifest)) {
      body["Manifest"] = request.manifest;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePipeline",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelines/${OpenApiUtil.getEncodeParam(PipelineId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdatePipelineResponse>(await this.callApi(params, req, runtime), new UpdatePipelineResponse({}));
  }

  async updatePipeline(PipelineId: string, request: UpdatePipelineRequest): Promise<UpdatePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelineWithOptions(PipelineId, request, headers, runtime);
  }

  async updatePipelineRunWithOptions(PipelineRunId: string, request: UpdatePipelineRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePipelineRunResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePipelineRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelineruns/${OpenApiUtil.getEncodeParam(PipelineRunId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdatePipelineRunResponse>(await this.callApi(params, req, runtime), new UpdatePipelineRunResponse({}));
  }

  async updatePipelineRun(PipelineRunId: string, request: UpdatePipelineRunRequest): Promise<UpdatePipelineRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelineRunWithOptions(PipelineRunId, request, headers, runtime);
  }

}
