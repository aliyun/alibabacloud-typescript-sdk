// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  body: CreatePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineReleaseRequest extends $tea.Model {
  targetPipelineProvider?: string;
  static names(): { [key: string]: string } {
    return {
      targetPipelineProvider: 'TargetPipelineProvider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetPipelineProvider: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePipelineReleaseResponseBody extends $tea.Model {
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

export class CreatePipelineReleaseResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreatePipelineReleaseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreatePipelineReleaseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunRequest extends $tea.Model {
  accessibility?: string;
  arguments?: string;
  experimentId?: string;
  name?: string;
  noConfirmRequired?: boolean;
  options?: string;
  pipelineId?: string;
  pipelineManifest?: string;
  source?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      arguments: 'Arguments',
      experimentId: 'ExperimentId',
      name: 'Name',
      noConfirmRequired: 'NoConfirmRequired',
      options: 'Options',
      pipelineId: 'PipelineId',
      pipelineManifest: 'PipelineManifest',
      source: 'Source',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      arguments: 'string',
      experimentId: 'string',
      name: 'string',
      noConfirmRequired: 'boolean',
      options: 'string',
      pipelineId: 'string',
      pipelineManifest: 'string',
      source: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponseBody extends $tea.Model {
  requestId?: string;
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRunResponseBody,
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
  body: DeletePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeletePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRunResponseBody extends $tea.Model {
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

export class DeleteRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallerProviderResponseBody extends $tea.Model {
  provider?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      provider: 'Provider',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      provider: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCallerProviderResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCallerProviderResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCallerProviderResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeRequest extends $tea.Model {
  depth?: number;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBody extends $tea.Model {
  apiVersion?: string;
  metadata?: GetNodeResponseBodyMetadata;
  requestId?: string;
  spec?: GetNodeResponseBodySpec;
  statusInfo?: GetNodeResponseBodyStatusInfo;
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
      metadata: GetNodeResponseBodyMetadata,
      requestId: 'string',
      spec: GetNodeResponseBodySpec,
      statusInfo: GetNodeResponseBodyStatusInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNodeResponseBody,
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
  body: GetPipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPipelineSchemaResponseBody extends $tea.Model {
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

export class GetPipelineSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPipelineSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPipelineSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunRequest extends $tea.Model {
  manifestType?: string;
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      manifestType: 'ManifestType',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      manifestType: 'string',
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunResponseBody extends $tea.Model {
  arguments?: string;
  duration?: number;
  experimentId?: string;
  finishedAt?: number;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  manifest?: string;
  message?: string;
  name?: string;
  nodeId?: string;
  options?: string;
  parentUserId?: string;
  pipelineId?: string;
  requestId?: string;
  runId?: string;
  source?: string;
  startedAt?: number;
  status?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      duration: 'Duration',
      experimentId: 'ExperimentId',
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
      requestId: 'RequestId',
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
      arguments: 'string',
      duration: 'number',
      experimentId: 'string',
      finishedAt: 'number',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      manifest: 'string',
      message: 'string',
      name: 'string',
      nodeId: 'string',
      options: 'string',
      parentUserId: 'string',
      pipelineId: 'string',
      requestId: 'string',
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

export class GetRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunStatisticsRequest extends $tea.Model {
  experimentId?: string;
  isShowAll?: boolean;
  name?: string;
  pipelineId?: string;
  scope?: string;
  source?: string;
  status?: string[];
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      isShowAll: 'IsShowAll',
      name: 'Name',
      pipelineId: 'PipelineId',
      scope: 'Scope',
      source: 'Source',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      isShowAll: 'boolean',
      name: 'string',
      pipelineId: 'string',
      scope: 'string',
      source: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunStatisticsShrinkRequest extends $tea.Model {
  experimentId?: string;
  isShowAll?: boolean;
  name?: string;
  pipelineId?: string;
  scope?: string;
  source?: string;
  statusShrink?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      isShowAll: 'IsShowAll',
      name: 'Name',
      pipelineId: 'PipelineId',
      scope: 'Scope',
      source: 'Source',
      statusShrink: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      isShowAll: 'boolean',
      name: 'string',
      pipelineId: 'string',
      scope: 'string',
      source: 'string',
      statusShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunStatisticsResponseBody extends $tea.Model {
  failed?: number;
  running?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failed: 'Failed',
      running: 'Running',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failed: 'number',
      running: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRunStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetRunStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetRunStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeLogsRequest extends $tea.Model {
  fromTimeInSeconds?: number;
  keyword?: string;
  offset?: number;
  pageSize?: number;
  reverse?: boolean;
  toTimeInSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      fromTimeInSeconds: 'FromTimeInSeconds',
      keyword: 'Keyword',
      offset: 'Offset',
      pageSize: 'PageSize',
      reverse: 'Reverse',
      toTimeInSeconds: 'ToTimeInSeconds',
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
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeLogsResponseBody extends $tea.Model {
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

export class ListNodeLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodeLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodeLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeOutputsRequest extends $tea.Model {
  depth?: number;
  name?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
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
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeOutputsResponseBody extends $tea.Model {
  outputs?: ListNodeOutputsResponseBodyOutputs[];
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
      outputs: { 'type': 'array', 'itemType': ListNodeOutputsResponseBodyOutputs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeOutputsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodeOutputsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodeOutputsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeStatusRequest extends $tea.Model {
  depth?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'Depth',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeStatusResponseBody extends $tea.Model {
  requestId?: string;
  status?: ListNodeStatusResponseBodyStatus[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: { 'type': 'array', 'itemType': ListNodeStatusResponseBodyStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodeStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodeStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinePrivilegesResponseBody extends $tea.Model {
  actions?: string[];
  pipelineId?: string;
  requestId?: string;
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      pipelineId: 'PipelineId',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': 'string' },
      pipelineId: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinePrivilegesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPipelinePrivilegesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPipelinePrivilegesResponseBody,
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
  body: ListPipelinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPipelinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsRequest extends $tea.Model {
  experimentId?: string;
  name?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  pipelineId?: string;
  pipelineIds?: string;
  runId?: string;
  sortBy?: string;
  source?: string;
  status?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineId: 'PipelineId',
      pipelineIds: 'PipelineIds',
      runId: 'RunId',
      sortBy: 'SortBy',
      source: 'Source',
      status: 'Status',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pipelineId: 'string',
      pipelineIds: 'string',
      runId: 'string',
      sortBy: 'string',
      source: 'string',
      status: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponseBody extends $tea.Model {
  requestId?: string;
  runs?: ListRunsResponseBodyRuns[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      runs: 'Runs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      runs: { 'type': 'array', 'itemType': ListRunsResponseBodyRuns },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRunsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRunsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsStatusRequest extends $tea.Model {
  nodes?: ListRunsStatusRequestNodes[];
  runs?: string[];
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      runs: 'Runs',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListRunsStatusRequestNodes },
      runs: { 'type': 'array', 'itemType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsStatusResponseBody extends $tea.Model {
  nodes?: ListRunsStatusResponseBodyNodes[];
  requestId?: string;
  runs?: ListRunsStatusResponseBodyRuns[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
      runs: 'Runs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListRunsStatusResponseBodyNodes },
      requestId: 'string',
      runs: { 'type': 'array', 'itemType': ListRunsStatusResponseBodyRuns },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRunsStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRunsStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartRunResponseBody extends $tea.Model {
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

export class StartRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateRunResponseBody extends $tea.Model {
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

export class TerminateRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: TerminateRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: TerminateRunResponseBody,
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
  body: UpdatePipelineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePipelineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelinePrivilegesRequest extends $tea.Model {
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePipelinePrivilegesResponseBody extends $tea.Model {
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

export class UpdatePipelinePrivilegesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdatePipelinePrivilegesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdatePipelinePrivilegesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRunRequest extends $tea.Model {
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

export class UpdateRunResponseBody extends $tea.Model {
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

export class UpdateRunResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateRunResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateRunResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBodyMetadata extends $tea.Model {
  displayName?: string;
  identifier?: string;
  name?: string;
  namespace?: string;
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
      namespace: 'Namespace',
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
      namespace: 'string',
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

export class GetNodeResponseBodySpecInputs extends $tea.Model {
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

export class GetNodeResponseBodySpecOutputs extends $tea.Model {
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

export class GetNodeResponseBodySpec extends $tea.Model {
  dependencies?: string[];
  hasPipelines?: boolean;
  inputs?: GetNodeResponseBodySpecInputs;
  outputs?: GetNodeResponseBodySpecOutputs;
  pipelines?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      dependencies: 'Dependencies',
      hasPipelines: 'HasPipelines',
      inputs: 'Inputs',
      outputs: 'Outputs',
      pipelines: 'Pipelines',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dependencies: { 'type': 'array', 'itemType': 'string' },
      hasPipelines: 'boolean',
      inputs: GetNodeResponseBodySpecInputs,
      outputs: GetNodeResponseBodySpecOutputs,
      pipelines: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBodyStatusInfo extends $tea.Model {
  finishedAt?: string;
  startedAt?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishedAt: 'FinishedAt',
      startedAt: 'StartedAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedAt: 'string',
      startedAt: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeOutputsResponseBodyOutputs extends $tea.Model {
  expandableArtifactName?: string;
  expandedArtifactIndex?: number;
  gmtCreateTime?: string;
  id?: string;
  info?: { [key: string]: any };
  name?: string;
  nodeId?: string;
  producer?: string;
  type?: string;
  value?: string;
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
      value: 'Value',
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
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeStatusResponseBodyStatus extends $tea.Model {
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

export class ListRunsResponseBodyRuns extends $tea.Model {
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

export class ListRunsStatusRequestNodes extends $tea.Model {
  nodeId?: string;
  runId?: string;
  static names(): { [key: string]: string } {
    return {
      nodeId: 'NodeId',
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeId: 'string',
      runId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsStatusResponseBodyNodes extends $tea.Model {
  finishedAt?: string;
  inputArtifactArchived?: boolean;
  nodeId?: string;
  nodeName?: string;
  outputArtifactArchived?: boolean;
  runId?: string;
  startedAt?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishedAt: 'FinishedAt',
      inputArtifactArchived: 'InputArtifactArchived',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
      outputArtifactArchived: 'OutputArtifactArchived',
      runId: 'RunId',
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
      runId: 'string',
      startedAt: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRunsStatusResponseBodyRuns extends $tea.Model {
  experimentId?: string;
  isDeleted?: boolean;
  name?: string;
  nodeId?: string;
  parentUserId?: string;
  runId?: string;
  status?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      isDeleted: 'IsDeleted',
      name: 'Name',
      nodeId: 'NodeId',
      parentUserId: 'ParentUserId',
      runId: 'RunId',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      isDeleted: 'boolean',
      name: 'string',
      nodeId: 'string',
      parentUserId: 'string',
      runId: 'string',
      status: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "central";
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
    };
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

  async createPipeline(request: CreatePipelineRequest): Promise<CreatePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineWithOptions(request, headers, runtime);
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

  async createPipelineRelease(PipelineId: string, request: CreatePipelineReleaseRequest): Promise<CreatePipelineReleaseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineReleaseWithOptions(PipelineId, request, headers, runtime);
  }

  async createPipelineReleaseWithOptions(PipelineId: string, request: CreatePipelineReleaseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreatePipelineReleaseResponse> {
    Util.validateModel(request);
    PipelineId = OpenApiUtil.getEncodeParam(PipelineId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.targetPipelineProvider)) {
      body["TargetPipelineProvider"] = request.targetPipelineProvider;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreatePipelineRelease",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelines/${PipelineId}/releases`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreatePipelineReleaseResponse>(await this.callApi(params, req, runtime), new CreatePipelineReleaseResponse({}));
  }

  async createRun(request: CreateRunRequest): Promise<CreateRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRunWithOptions(request, headers, runtime);
  }

  async createRunWithOptions(request: CreateRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRunResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.arguments)) {
      body["Arguments"] = request.arguments;
    }

    if (!Util.isUnset(request.experimentId)) {
      body["ExperimentId"] = request.experimentId;
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

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRunResponse>(await this.callApi(params, req, runtime), new CreateRunResponse({}));
  }

  async deletePipeline(PipelineId: string): Promise<DeletePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deletePipelineWithOptions(PipelineId, headers, runtime);
  }

  async deletePipelineWithOptions(PipelineId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeletePipelineResponse> {
    PipelineId = OpenApiUtil.getEncodeParam(PipelineId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeletePipeline",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelines/${PipelineId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeletePipelineResponse>(await this.callApi(params, req, runtime), new DeletePipelineResponse({}));
  }

  async deleteRun(RunId: string): Promise<DeleteRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRunWithOptions(RunId, headers, runtime);
  }

  async deleteRunWithOptions(RunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRunResponse> {
    RunId = OpenApiUtil.getEncodeParam(RunId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${RunId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRunResponse>(await this.callApi(params, req, runtime), new DeleteRunResponse({}));
  }

  async getCallerProvider(): Promise<GetCallerProviderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCallerProviderWithOptions(headers, runtime);
  }

  async getCallerProviderWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCallerProviderResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetCallerProvider",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/provider`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCallerProviderResponse>(await this.callApi(params, req, runtime), new GetCallerProviderResponse({}));
  }

  async getNode(RunId: string, NodeId: string, request: GetNodeRequest): Promise<GetNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeWithOptions(RunId, NodeId, request, headers, runtime);
  }

  async getNodeWithOptions(RunId: string, NodeId: string, request: GetNodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNodeResponse> {
    Util.validateModel(request);
    RunId = OpenApiUtil.getEncodeParam(RunId);
    NodeId = OpenApiUtil.getEncodeParam(NodeId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.depth)) {
      query["Depth"] = request.depth;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNode",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${RunId}/nodes/${NodeId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetNodeResponse>(await this.callApi(params, req, runtime), new GetNodeResponse({}));
  }

  async getPipeline(PipelineId: string): Promise<GetPipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineWithOptions(PipelineId, headers, runtime);
  }

  async getPipelineWithOptions(PipelineId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineResponse> {
    PipelineId = OpenApiUtil.getEncodeParam(PipelineId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPipeline",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelines/${PipelineId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineResponse>(await this.callApi(params, req, runtime), new GetPipelineResponse({}));
  }

  async getPipelineSchema(PipelineId: string): Promise<GetPipelineSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineSchemaWithOptions(PipelineId, headers, runtime);
  }

  async getPipelineSchemaWithOptions(PipelineId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPipelineSchemaResponse> {
    PipelineId = OpenApiUtil.getEncodeParam(PipelineId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetPipelineSchema",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelines/${PipelineId}/schema`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetPipelineSchemaResponse>(await this.callApi(params, req, runtime), new GetPipelineSchemaResponse({}));
  }

  async getRun(RunId: string, request: GetRunRequest): Promise<GetRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRunWithOptions(RunId, request, headers, runtime);
  }

  async getRunWithOptions(RunId: string, request: GetRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRunResponse> {
    Util.validateModel(request);
    RunId = OpenApiUtil.getEncodeParam(RunId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.manifestType)) {
      query["ManifestType"] = request.manifestType;
    }

    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${RunId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRunResponse>(await this.callApi(params, req, runtime), new GetRunResponse({}));
  }

  async getRunStatistics(request: GetRunStatisticsRequest): Promise<GetRunStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRunStatisticsWithOptions(request, headers, runtime);
  }

  async getRunStatisticsWithOptions(tmpReq: GetRunStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRunStatisticsResponse> {
    Util.validateModel(tmpReq);
    let request = new GetRunStatisticsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "Status", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.isShowAll)) {
      query["IsShowAll"] = request.isShowAll;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!Util.isUnset(request.scope)) {
      query["Scope"] = request.scope;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.statusShrink)) {
      query["Status"] = request.statusShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetRunStatistics",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/statistics/runs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRunStatisticsResponse>(await this.callApi(params, req, runtime), new GetRunStatisticsResponse({}));
  }

  async listNodeLogs(RunId: string, NodeId: string, request: ListNodeLogsRequest): Promise<ListNodeLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNodeLogsWithOptions(RunId, NodeId, request, headers, runtime);
  }

  async listNodeLogsWithOptions(RunId: string, NodeId: string, request: ListNodeLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNodeLogsResponse> {
    Util.validateModel(request);
    RunId = OpenApiUtil.getEncodeParam(RunId);
    NodeId = OpenApiUtil.getEncodeParam(NodeId);
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeLogs",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${RunId}/nodes/${NodeId}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListNodeLogsResponse>(await this.callApi(params, req, runtime), new ListNodeLogsResponse({}));
  }

  async listNodeOutputs(RunId: string, NodeId: string, request: ListNodeOutputsRequest): Promise<ListNodeOutputsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNodeOutputsWithOptions(RunId, NodeId, request, headers, runtime);
  }

  async listNodeOutputsWithOptions(RunId: string, NodeId: string, request: ListNodeOutputsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNodeOutputsResponse> {
    Util.validateModel(request);
    RunId = OpenApiUtil.getEncodeParam(RunId);
    NodeId = OpenApiUtil.getEncodeParam(NodeId);
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

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeOutputs",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${RunId}/nodes/${NodeId}/outputs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListNodeOutputsResponse>(await this.callApi(params, req, runtime), new ListNodeOutputsResponse({}));
  }

  async listNodeStatus(RunId: string, NodeId: string, request: ListNodeStatusRequest): Promise<ListNodeStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNodeStatusWithOptions(RunId, NodeId, request, headers, runtime);
  }

  async listNodeStatusWithOptions(RunId: string, NodeId: string, request: ListNodeStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNodeStatusResponse> {
    Util.validateModel(request);
    RunId = OpenApiUtil.getEncodeParam(RunId);
    NodeId = OpenApiUtil.getEncodeParam(NodeId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.depth)) {
      query["Depth"] = request.depth;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeStatus",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${RunId}/nodes/${NodeId}/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListNodeStatusResponse>(await this.callApi(params, req, runtime), new ListNodeStatusResponse({}));
  }

  async listPipelinePrivileges(PipelineId: string): Promise<ListPipelinePrivilegesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelinePrivilegesWithOptions(PipelineId, headers, runtime);
  }

  async listPipelinePrivilegesWithOptions(PipelineId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListPipelinePrivilegesResponse> {
    PipelineId = OpenApiUtil.getEncodeParam(PipelineId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListPipelinePrivileges",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelines/${PipelineId}/privileges`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListPipelinePrivilegesResponse>(await this.callApi(params, req, runtime), new ListPipelinePrivilegesResponse({}));
  }

  async listPipelines(request: ListPipelinesRequest): Promise<ListPipelinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelinesWithOptions(request, headers, runtime);
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

  async listRuns(request: ListRunsRequest): Promise<ListRunsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRunsWithOptions(request, headers, runtime);
  }

  async listRunsWithOptions(request: ListRunsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRunsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
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

    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!Util.isUnset(request.pipelineIds)) {
      query["PipelineIds"] = request.pipelineIds;
    }

    if (!Util.isUnset(request.runId)) {
      query["RunId"] = request.runId;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
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
      action: "ListRuns",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRunsResponse>(await this.callApi(params, req, runtime), new ListRunsResponse({}));
  }

  async listRunsStatus(request: ListRunsStatusRequest): Promise<ListRunsStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRunsStatusWithOptions(request, headers, runtime);
  }

  async listRunsStatusWithOptions(request: ListRunsStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRunsStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodes)) {
      body["Nodes"] = request.nodes;
    }

    if (!Util.isUnset(request.runs)) {
      body["Runs"] = request.runs;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListRunsStatus",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRunsStatusResponse>(await this.callApi(params, req, runtime), new ListRunsStatusResponse({}));
  }

  async startRun(RunId: string): Promise<StartRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startRunWithOptions(RunId, headers, runtime);
  }

  async startRunWithOptions(RunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartRunResponse> {
    RunId = OpenApiUtil.getEncodeParam(RunId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${RunId}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartRunResponse>(await this.callApi(params, req, runtime), new StartRunResponse({}));
  }

  async terminateRun(RunId: string): Promise<TerminateRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.terminateRunWithOptions(RunId, headers, runtime);
  }

  async terminateRunWithOptions(RunId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TerminateRunResponse> {
    RunId = OpenApiUtil.getEncodeParam(RunId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "TerminateRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${RunId}/termination`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<TerminateRunResponse>(await this.callApi(params, req, runtime), new TerminateRunResponse({}));
  }

  async updatePipeline(PipelineId: string, request: UpdatePipelineRequest): Promise<UpdatePipelineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelineWithOptions(PipelineId, request, headers, runtime);
  }

  async updatePipelineWithOptions(PipelineId: string, request: UpdatePipelineRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePipelineResponse> {
    Util.validateModel(request);
    PipelineId = OpenApiUtil.getEncodeParam(PipelineId);
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
      pathname: `/api/v1/pipelines/${PipelineId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdatePipelineResponse>(await this.callApi(params, req, runtime), new UpdatePipelineResponse({}));
  }

  async updatePipelinePrivileges(PipelineId: string, request: UpdatePipelinePrivilegesRequest): Promise<UpdatePipelinePrivilegesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updatePipelinePrivilegesWithOptions(PipelineId, request, headers, runtime);
  }

  async updatePipelinePrivilegesWithOptions(PipelineId: string, request: UpdatePipelinePrivilegesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdatePipelinePrivilegesResponse> {
    Util.validateModel(request);
    PipelineId = OpenApiUtil.getEncodeParam(PipelineId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.users)) {
      body["Users"] = request.users;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePipelinePrivileges",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/pipelines/${PipelineId}/privileges`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdatePipelinePrivilegesResponse>(await this.callApi(params, req, runtime), new UpdatePipelinePrivilegesResponse({}));
  }

  async updateRun(RunId: string, request: UpdateRunRequest): Promise<UpdateRunResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRunWithOptions(RunId, request, headers, runtime);
  }

  async updateRunWithOptions(RunId: string, request: UpdateRunRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRunResponse> {
    Util.validateModel(request);
    RunId = OpenApiUtil.getEncodeParam(RunId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRun",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/runs/${RunId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRunResponse>(await this.callApi(params, req, runtime), new UpdateRunResponse({}));
  }

}
