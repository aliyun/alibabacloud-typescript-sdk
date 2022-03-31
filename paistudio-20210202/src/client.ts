// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddImageRequest extends $tea.Model {
  description?: string;
  imageUri?: string;
  labels?: AddImageRequestLabels[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': AddImageRequestLabels },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageLabelsRequest extends $tea.Model {
  labels?: AddImageLabelsRequestLabels[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': AddImageLabelsRequestLabels },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageLabelsResponseBody extends $tea.Model {
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

export class AddImageLabelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddImageLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddImageLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyExperimentRequest extends $tea.Model {
  accessibility?: string;
  description?: string;
  folderId?: string;
  name?: string;
  source?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      folderId: 'FolderId',
      name: 'Name',
      source: 'Source',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      folderId: 'string',
      name: 'string',
      source: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyExperimentResponseBody extends $tea.Model {
  experimentId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CopyExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CopyExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentRequest extends $tea.Model {
  accessibility?: string;
  description?: string;
  folderId?: string;
  name?: string;
  options?: string;
  source?: string;
  templateId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      folderId: 'FolderId',
      name: 'Name',
      options: 'Options',
      source: 'Source',
      templateId: 'TemplateId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      folderId: 'string',
      name: 'string',
      options: 'string',
      source: 'string',
      templateId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentResponseBody extends $tea.Model {
  experimentId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      experimentId: 'ExperimentId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experimentId: 'string',
      requestId: 'string',
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
  accessibility?: string;
  name?: string;
  parentFolderId?: string;
  source?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      name: 'Name',
      parentFolderId: 'ParentFolderId',
      source: 'Source',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      name: 'string',
      parentFolderId: 'string',
      source: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentFolderResponseBody extends $tea.Model {
  folderId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
      requestId: 'string',
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

export class CreateExperimentMigrateValidationRequest extends $tea.Model {
  sourceExpId?: number;
  static names(): { [key: string]: string } {
    return {
      sourceExpId: 'SourceExpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceExpId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateExperimentMigrateValidationResponseBody extends $tea.Model {
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

export class CreateExperimentMigrateValidationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateExperimentMigrateValidationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateExperimentMigrateValidationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  executeType?: string;
  experimentId?: string;
  nodeId?: string;
  options?: string;
  static names(): { [key: string]: string } {
    return {
      executeType: 'ExecuteType',
      experimentId: 'ExperimentId',
      nodeId: 'NodeId',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executeType: 'string',
      experimentId: 'string',
      nodeId: 'string',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
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
  config?: CreateServiceRequestConfig;
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: CreateServiceRequestConfig,
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  requestId?: string;
  serviceId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceId: 'string',
      url: 'string',
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

export class DeleteExperimentResponseBody extends $tea.Model {
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

export class DeleteServiceResponseBody extends $tea.Model {
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

export class DeleteServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceResponseBody,
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
  data?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
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

export class GetAlgorithmDefRequest extends $tea.Model {
  algoVersion?: string;
  identifier?: string;
  provider?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      algoVersion: 'AlgoVersion',
      identifier: 'Identifier',
      provider: 'Provider',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoVersion: 'string',
      identifier: 'string',
      provider: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDefResponseBody extends $tea.Model {
  requestId?: string;
  spec?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDefResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlgorithmDefResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlgorithmDefResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDefsRequest extends $tea.Model {
  latestTimestamp?: string;
  rangeEnd?: number;
  rangeStart?: number;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      latestTimestamp: 'LatestTimestamp',
      rangeEnd: 'RangeEnd',
      rangeStart: 'RangeStart',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestTimestamp: 'string',
      rangeEnd: 'number',
      rangeStart: 'number',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDefsResponseBody extends $tea.Model {
  requestId?: string;
  specs?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      specs: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      specs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmDefsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlgorithmDefsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlgorithmDefsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmTreeRequest extends $tea.Model {
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

export class GetAlgorithmTreeResponseBody extends $tea.Model {
  requestId?: string;
  timestamp?: string;
  tree?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timestamp: 'Timestamp',
      tree: 'Tree',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timestamp: 'string',
      tree: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmTreeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlgorithmTreeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlgorithmTreeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentResponseBody extends $tea.Model {
  accessibility?: string;
  content?: string;
  creator?: string;
  description?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  options?: string;
  requestId?: string;
  source?: string;
  version?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      content: 'Content',
      creator: 'Creator',
      description: 'Description',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      options: 'Options',
      requestId: 'RequestId',
      source: 'Source',
      version: 'Version',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      content: 'string',
      creator: 'string',
      description: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      options: 'string',
      requestId: 'string',
      source: 'string',
      version: 'number',
      workspaceId: 'string',
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

export class GetExperimentFolderChildrenRequest extends $tea.Model {
  accessibility?: string;
  onlyFolder?: boolean;
  source?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      onlyFolder: 'OnlyFolder',
      source: 'Source',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      onlyFolder: 'boolean',
      source: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentFolderChildrenResponseBody extends $tea.Model {
  items?: GetExperimentFolderChildrenResponseBodyItems[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetExperimentFolderChildrenResponseBodyItems },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentFolderChildrenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExperimentFolderChildrenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExperimentFolderChildrenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentMetaResponseBody extends $tea.Model {
  accessibility?: string;
  creator?: string;
  description?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  options?: string;
  requestId?: string;
  source?: string;
  version?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      creator: 'Creator',
      description: 'Description',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      options: 'Options',
      requestId: 'RequestId',
      source: 'Source',
      version: 'Version',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      creator: 'string',
      description: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      options: 'string',
      requestId: 'string',
      source: 'string',
      version: 'string',
      workspaceId: 'string',
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
  nodes?: GetExperimentStatusResponseBodyNodes[];
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': GetExperimentStatusResponseBodyNodes },
      requestId: 'string',
      status: 'string',
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

export class GetExperimentVisualizationMetaRequest extends $tea.Model {
  nodeIds?: string;
  static names(): { [key: string]: string } {
    return {
      nodeIds: 'NodeIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentVisualizationMetaResponseBody extends $tea.Model {
  visualizationMeta?: GetExperimentVisualizationMetaResponseBodyVisualizationMeta[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      visualizationMeta: 'VisualizationMeta',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      visualizationMeta: { 'type': 'array', 'itemType': GetExperimentVisualizationMetaResponseBodyVisualizationMeta },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentVisualizationMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExperimentVisualizationMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExperimentVisualizationMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentsStatisticsRequest extends $tea.Model {
  source?: string;
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      workspaceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentsStatisticsResponseBody extends $tea.Model {
  data?: GetExperimentsStatisticsResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetExperimentsStatisticsResponseBodyData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentsStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExperimentsStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExperimentsStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentsUsersStatisticsRequest extends $tea.Model {
  source?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'Source',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentsUsersStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  users?: GetExperimentsUsersStatisticsResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      users: { 'type': 'array', 'itemType': GetExperimentsUsersStatisticsResponseBodyUsers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentsUsersStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetExperimentsUsersStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetExperimentsUsersStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageRequest extends $tea.Model {
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBody extends $tea.Model {
  description?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageUri?: string;
  labels?: GetImageResponseBodyLabels[];
  name?: string;
  operatorCreate?: string;
  parentOperatorCreate?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
      operatorCreate: 'OperatorCreate',
      parentOperatorCreate: 'ParentOperatorCreate',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': GetImageResponseBodyLabels },
      name: 'string',
      operatorCreate: 'string',
      parentOperatorCreate: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobRequest extends $tea.Model {
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $tea.Model {
  arguments?: string;
  creator?: string;
  executeType?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  jobId?: string;
  nodeId?: string;
  paiflowNodeId?: string;
  requestId?: string;
  runId?: string;
  runInfo?: string;
  snapshot?: string;
  status?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      arguments: 'Arguments',
      creator: 'Creator',
      executeType: 'ExecuteType',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      jobId: 'JobId',
      nodeId: 'NodeId',
      paiflowNodeId: 'PaiflowNodeId',
      requestId: 'RequestId',
      runId: 'RunId',
      runInfo: 'RunInfo',
      snapshot: 'Snapshot',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arguments: 'string',
      creator: 'string',
      executeType: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      jobId: 'string',
      nodeId: 'string',
      paiflowNodeId: 'string',
      requestId: 'string',
      runId: 'string',
      runInfo: 'string',
      snapshot: 'string',
      status: 'string',
      workspaceId: 'string',
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

export class GetMCTableSchemaRequest extends $tea.Model {
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
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

export class GetMCTableSchemaResponseBody extends $tea.Model {
  columns?: GetMCTableSchemaResponseBodyColumns[];
  partitionColumns?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      partitionColumns: 'PartitionColumns',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': GetMCTableSchemaResponseBodyColumns },
      partitionColumns: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMCTableSchemaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetMCTableSchemaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMCTableSchemaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeInputSchemaRequest extends $tea.Model {
  inputId?: string;
  inputIndex?: number;
  static names(): { [key: string]: string } {
    return {
      inputId: 'InputId',
      inputIndex: 'InputIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputId: 'string',
      inputIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeInputSchemaResponseBody extends $tea.Model {
  colNames?: string[];
  colTypes?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      colNames: 'ColNames',
      colTypes: 'ColTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      colNames: { 'type': 'array', 'itemType': 'string' },
      colTypes: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
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

export class GetNodeOutputRequest extends $tea.Model {
  outputIndex?: string;
  static names(): { [key: string]: string } {
    return {
      outputIndex: 'OutputIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputIndex: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeOutputResponseBody extends $tea.Model {
  algoName?: string;
  displayName?: string;
  locationType?: string;
  nodeName?: string;
  requestId?: string;
  type?: string;
  value?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      algoName: 'AlgoName',
      displayName: 'DisplayName',
      locationType: 'LocationType',
      nodeName: 'NodeName',
      requestId: 'RequestId',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoName: 'string',
      displayName: 'string',
      locationType: 'string',
      nodeName: 'string',
      requestId: 'string',
      type: 'string',
      value: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeOutputResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNodeOutputResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNodeOutputResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeVisualizationRequest extends $tea.Model {
  config?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeVisualizationResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  visualizationType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      visualizationType: 'VisualizationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      visualizationType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeVisualizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetNodeVisualizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetNodeVisualizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRequest extends $tea.Model {
  serviceType?: string;
  static names(): { [key: string]: string } {
    return {
      serviceType: 'ServiceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $tea.Model {
  requestId?: string;
  serviceId?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      serviceId: 'string',
      url: 'string',
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

export class GetTemplateResponseBody extends $tea.Model {
  content?: string;
  description?: string;
  detail?: string;
  docLink?: string;
  imageLink?: string;
  name?: string;
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      detail: 'Detail',
      docLink: 'DocLink',
      imageLink: 'ImageLink',
      name: 'Name',
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      detail: 'string',
      docLink: 'string',
      imageLink: 'string',
      name: 'string',
      requestId: 'string',
      templateId: 'string',
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

export class ListAlgoDefsRequest extends $tea.Model {
  body?: ListAlgoDefsRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': ListAlgoDefsRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgoDefsResponseBody extends $tea.Model {
  data?: { [key: string]: any }[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      requestId: 'string',
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

export class ListAuthRolesRequest extends $tea.Model {
  isGenerateToken?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      isGenerateToken: 'IsGenerateToken',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isGenerateToken: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthRolesResponseBody extends $tea.Model {
  requestId?: string;
  roles?: ListAuthRolesResponseBodyRoles[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      roles: 'Roles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      roles: { 'type': 'array', 'itemType': ListAuthRolesResponseBodyRoles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthRolesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAuthRolesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAuthRolesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsRequest extends $tea.Model {
  creator?: string;
  experimentId?: string;
  name?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  source?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      experimentId: 'ExperimentId',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      source: 'Source',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      experimentId: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      source: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBody extends $tea.Model {
  experiments?: ListExperimentsResponseBodyExperiments[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      experiments: 'Experiments',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experiments: { 'type': 'array', 'itemType': ListExperimentsResponseBodyExperiments },
      requestId: 'string',
      totalCount: 'number',
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

export class ListImageLabelsRequest extends $tea.Model {
  imageId?: string;
  labelFilter?: string;
  labelKeys?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      labelFilter: 'LabelFilter',
      labelKeys: 'LabelKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      labelFilter: 'string',
      labelKeys: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsResponseBody extends $tea.Model {
  labels?: ListImageLabelsResponseBodyLabels[];
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': ListImageLabelsResponseBodyLabels },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListImageLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListImageLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesRequest extends $tea.Model {
  labels?: string;
  name?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  verbose?: boolean;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      verbose: 'Verbose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      verbose: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $tea.Model {
  images?: ListImagesResponseBodyImages[];
  totalCount?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      totalCount: 'TotalCount',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListImagesResponseBodyImages },
      totalCount: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  creator?: string;
  experimentId?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      experimentId: 'ExperimentId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      experimentId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  jobs?: ListJobsResponseBodyJobs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyJobs },
      requestId: 'string',
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

export class ListNodeOutputsResponseBody extends $tea.Model {
  outputs?: ListNodeOutputsResponseBodyOutputs[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      outputs: 'Outputs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputs: { 'type': 'array', 'itemType': ListNodeOutputsResponseBodyOutputs },
      requestId: 'string',
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

export class ListRecentExperimentsRequest extends $tea.Model {
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  source?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      source: 'Source',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      source: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentExperimentsResponseBody extends $tea.Model {
  experiments?: ListRecentExperimentsResponseBodyExperiments[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      experiments: 'Experiments',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experiments: { 'type': 'array', 'itemType': ListRecentExperimentsResponseBodyExperiments },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentExperimentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRecentExperimentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRecentExperimentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
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

export class ListServicesResponseBody extends $tea.Model {
  requestId?: string;
  services?: ListServicesResponseBodyServices[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
      totalCount: 'number',
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
  list?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  source?: string;
  tagId?: string;
  typeId?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      source: 'Source',
      tagId: 'TagId',
      typeId: 'TypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      source: 'string',
      tagId: 'string',
      typeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  requestId?: string;
  templateData?: ListTemplatesResponseBodyTemplateData[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateData: 'TemplateData',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateData: { 'type': 'array', 'itemType': ListTemplatesResponseBodyTemplateData },
      totalCount: 'number',
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

export class MigrateExperimentFoldersRequest extends $tea.Model {
  accessibility?: string;
  isOwner?: boolean;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      isOwner: 'IsOwner',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      isOwner: 'boolean',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateExperimentFoldersResponseBody extends $tea.Model {
  code?: string;
  folderIdMapping?: { [key: string]: {[key: string]: any} };
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      folderIdMapping: 'FolderIdMapping',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      folderIdMapping: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateExperimentFoldersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MigrateExperimentFoldersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MigrateExperimentFoldersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateExperimentsRequest extends $tea.Model {
  accessibility?: string;
  destFolderId?: string;
  isOwner?: boolean;
  sourceExpId?: number;
  updateIfExists?: boolean;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      destFolderId: 'DestFolderId',
      isOwner: 'IsOwner',
      sourceExpId: 'SourceExpId',
      updateIfExists: 'UpdateIfExists',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      destFolderId: 'string',
      isOwner: 'boolean',
      sourceExpId: 'number',
      updateIfExists: 'boolean',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateExperimentsResponseBody extends $tea.Model {
  code?: string;
  data?: MigrateExperimentsResponseBodyData;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: MigrateExperimentsResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateExperimentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MigrateExperimentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MigrateExperimentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewMCTableRequest extends $tea.Model {
  endpoint?: string;
  partition?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      partition: 'Partition',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      partition: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewMCTableResponseBody extends $tea.Model {
  content?: string[][];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewMCTableResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PreviewMCTableResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PreviewMCTableResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishExperimentRequest extends $tea.Model {
  folderId?: string;
  static names(): { [key: string]: string } {
    return {
      folderId: 'FolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      folderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishExperimentResponseBody extends $tea.Model {
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

export class PublishExperimentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishExperimentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishExperimentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentVisualizationDataRequest extends $tea.Model {
  body?: QueryExperimentVisualizationDataRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': QueryExperimentVisualizationDataRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentVisualizationDataResponseBody extends $tea.Model {
  visualizationData?: QueryExperimentVisualizationDataResponseBodyVisualizationData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      visualizationData: 'VisualizationData',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      visualizationData: { 'type': 'array', 'itemType': QueryExperimentVisualizationDataResponseBodyVisualizationData },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentVisualizationDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryExperimentVisualizationDataResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryExperimentVisualizationDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageResponseBody extends $tea.Model {
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

export class RemoveImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveImageLabelsResponseBody extends $tea.Model {
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

export class RemoveImageLabelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RemoveImageLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RemoveImageLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMCTablesRequest extends $tea.Model {
  keyword?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMCTablesResponseBody extends $tea.Model {
  requestId?: string;
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMCTablesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SearchMCTablesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SearchMCTablesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopExperimentResponseBody extends $tea.Model {
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

export class UpdateExperimentContentRequest extends $tea.Model {
  content?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentContentResponseBody extends $tea.Model {
  requestId?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateExperimentContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateExperimentContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentFolderRequest extends $tea.Model {
  name?: string;
  parentFolderId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parentFolderId: 'ParentFolderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parentFolderId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentFolderResponseBody extends $tea.Model {
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
  accessibility?: string;
  description?: string;
  folderId?: string;
  name?: string;
  options?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      description: 'Description',
      folderId: 'FolderId',
      name: 'Name',
      options: 'Options',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      description: 'string',
      folderId: 'string',
      name: 'string',
      options: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateExperimentMetaResponseBody extends $tea.Model {
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

export class AddImageRequestLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class AddImageLabelsRequestLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class CreateServiceRequestConfig extends $tea.Model {
  logDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      logDirectory: 'LogDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logDirectory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentFolderChildrenResponseBodyItems extends $tea.Model {
  empty?: boolean;
  icon?: string;
  id?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      empty: 'Empty',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      empty: 'boolean',
      icon: 'string',
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentStatusResponseBodyNodes extends $tea.Model {
  finishedAt?: string;
  jobId?: string;
  nodeId?: string;
  runId?: string;
  runNodeId?: string;
  startedAt?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      finishedAt: 'FinishedAt',
      jobId: 'JobId',
      nodeId: 'NodeId',
      runId: 'RunId',
      runNodeId: 'RunNodeId',
      startedAt: 'StartedAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedAt: 'string',
      jobId: 'string',
      nodeId: 'string',
      runId: 'string',
      runNodeId: 'string',
      startedAt: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentVisualizationMetaResponseBodyVisualizationMeta extends $tea.Model {
  meta?: string;
  nodeId?: string;
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      meta: 'Meta',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meta: 'string',
      nodeId: 'string',
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentsStatisticsResponseBodyData extends $tea.Model {
  createCount?: number;
  totalCount?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createCount: 'CreateCount',
      totalCount: 'TotalCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCount: 'number',
      totalCount: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetExperimentsUsersStatisticsResponseBodyUsers extends $tea.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageResponseBodyLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class GetMCTableSchemaResponseBodyColumns extends $tea.Model {
  name?: string;
  preview?: string[];
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      preview: 'Preview',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      preview: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgoDefsRequestBody extends $tea.Model {
  identifier?: string;
  provider?: string;
  signature?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      provider: 'Provider',
      signature: 'Signature',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      provider: 'string',
      signature: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthRolesResponseBodyRolesToken extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  expiration?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      expiration: 'Expiration',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      expiration: 'string',
      securityToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthRolesResponseBodyRoles extends $tea.Model {
  isEnabled?: string;
  roleARN?: string;
  roleName?: string;
  roleType?: string;
  token?: ListAuthRolesResponseBodyRolesToken;
  static names(): { [key: string]: string } {
    return {
      isEnabled: 'IsEnabled',
      roleARN: 'RoleARN',
      roleName: 'RoleName',
      roleType: 'RoleType',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnabled: 'string',
      roleARN: 'string',
      roleName: 'string',
      roleType: 'string',
      token: ListAuthRolesResponseBodyRolesToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListExperimentsResponseBodyExperiments extends $tea.Model {
  accessibility?: string;
  creator?: string;
  description?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  name?: string;
  source?: string;
  version?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      creator: 'Creator',
      description: 'Description',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      source: 'Source',
      version: 'Version',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      creator: 'string',
      description: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      source: 'string',
      version: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageLabelsResponseBodyLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class ListImagesResponseBodyImagesLabels extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class ListImagesResponseBodyImages extends $tea.Model {
  description?: string;
  gmtCreateTime?: string;
  imageId?: string;
  imageUri?: string;
  labels?: ListImagesResponseBodyImagesLabels[];
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      gmtCreateTime: 'GmtCreateTime',
      imageId: 'ImageId',
      imageUri: 'ImageUri',
      labels: 'Labels',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gmtCreateTime: 'string',
      imageId: 'string',
      imageUri: 'string',
      labels: { 'type': 'array', 'itemType': ListImagesResponseBodyImagesLabels },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $tea.Model {
  creator?: string;
  executeType?: string;
  experimentId?: string;
  gmtCreateTime?: string;
  jobId?: string;
  nodeId?: string;
  paiflowNodeId?: string;
  runId?: string;
  status?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      executeType: 'ExecuteType',
      experimentId: 'ExperimentId',
      gmtCreateTime: 'GmtCreateTime',
      jobId: 'JobId',
      nodeId: 'NodeId',
      paiflowNodeId: 'PaiflowNodeId',
      runId: 'RunId',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      executeType: 'string',
      experimentId: 'string',
      gmtCreateTime: 'string',
      jobId: 'string',
      nodeId: 'string',
      paiflowNodeId: 'string',
      runId: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeOutputsResponseBodyOutputs extends $tea.Model {
  algoName?: string;
  displayName?: string;
  locationType?: string;
  nodeName?: string;
  outputId?: string;
  outputIndex?: string;
  type?: string;
  value?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      algoName: 'AlgoName',
      displayName: 'DisplayName',
      locationType: 'LocationType',
      nodeName: 'NodeName',
      outputId: 'OutputId',
      outputIndex: 'OutputIndex',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoName: 'string',
      displayName: 'string',
      locationType: 'string',
      nodeName: 'string',
      outputId: 'string',
      outputIndex: 'string',
      type: 'string',
      value: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecentExperimentsResponseBodyExperiments extends $tea.Model {
  description?: string;
  experimentId?: string;
  modifyCnt?: number;
  name?: string;
  recentGmtModifiedTime?: string;
  source?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      experimentId: 'ExperimentId',
      modifyCnt: 'ModifyCnt',
      name: 'Name',
      recentGmtModifiedTime: 'RecentGmtModifiedTime',
      source: 'Source',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      experimentId: 'string',
      modifyCnt: 'number',
      name: 'string',
      recentGmtModifiedTime: 'string',
      source: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServices extends $tea.Model {
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

export class ListTemplatesResponseBodyTemplateDataTemplate extends $tea.Model {
  content?: string;
  description?: string;
  detail?: string;
  docLink?: string;
  imageLink?: string;
  name?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      detail: 'Detail',
      docLink: 'DocLink',
      imageLink: 'ImageLink',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      detail: 'string',
      docLink: 'string',
      imageLink: 'string',
      name: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplateDataTemplateTag extends $tea.Model {
  name?: string;
  tagId?: string;
  typeId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tagId: 'TagId',
      typeId: 'TypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tagId: 'string',
      typeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplateDataTemplateType extends $tea.Model {
  name?: string;
  typeId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      typeId: 'TypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      typeId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyTemplateData extends $tea.Model {
  template?: ListTemplatesResponseBodyTemplateDataTemplate;
  templateTag?: ListTemplatesResponseBodyTemplateDataTemplateTag;
  templateType?: ListTemplatesResponseBodyTemplateDataTemplateType;
  static names(): { [key: string]: string } {
    return {
      template: 'Template',
      templateTag: 'TemplateTag',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: ListTemplatesResponseBodyTemplateDataTemplate,
      templateTag: ListTemplatesResponseBodyTemplateDataTemplateTag,
      templateType: ListTemplatesResponseBodyTemplateDataTemplateType,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrateExperimentsResponseBodyData extends $tea.Model {
  alreadyExists?: boolean;
  experimentId?: string;
  updated?: boolean;
  static names(): { [key: string]: string } {
    return {
      alreadyExists: 'AlreadyExists',
      experimentId: 'ExperimentId',
      updated: 'Updated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyExists: 'boolean',
      experimentId: 'string',
      updated: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentVisualizationDataRequestBody extends $tea.Model {
  endTime?: string;
  nodeId?: string;
  startTime?: string;
  visualizationDataIds?: string[];
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      nodeId: 'NodeId',
      startTime: 'StartTime',
      visualizationDataIds: 'VisualizationDataIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      nodeId: 'string',
      startTime: 'string',
      visualizationDataIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryExperimentVisualizationDataResponseBodyVisualizationData extends $tea.Model {
  createTime?: string;
  data?: string;
  dataId?: string;
  nodeId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      data: 'Data',
      dataId: 'DataId',
      nodeId: 'NodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      data: 'string',
      dataId: 'string',
      nodeId: 'string',
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
      'cn-hangzhou': "pai.cn-hangzhou.aliyuncs.com",
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

  async addImage(request: AddImageRequest): Promise<AddImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addImageWithOptions(request, headers, runtime);
  }

  async addImageWithOptions(request: AddImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.imageUri)) {
      body["ImageUri"] = request.imageUri;
    }

    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddImage",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/images`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddImageResponse>(await this.callApi(params, req, runtime), new AddImageResponse({}));
  }

  async addImageLabels(ImageId: string, request: AddImageLabelsRequest): Promise<AddImageLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.addImageLabelsWithOptions(ImageId, request, headers, runtime);
  }

  async addImageLabelsWithOptions(ImageId: string, request: AddImageLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AddImageLabelsResponse> {
    Util.validateModel(request);
    ImageId = OpenApiUtil.getEncodeParam(ImageId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddImageLabels",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${ImageId}/labels`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AddImageLabelsResponse>(await this.callApi(params, req, runtime), new AddImageLabelsResponse({}));
  }

  async copyExperiment(ExperimentId: string, request: CopyExperimentRequest): Promise<CopyExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.copyExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  async copyExperimentWithOptions(ExperimentId: string, request: CopyExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CopyExperimentResponse> {
    Util.validateModel(request);
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
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
      action: "CopyExperiment",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/[ExperimentId]/copy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CopyExperimentResponse>(await this.callApi(params, req, runtime), new CopyExperimentResponse({}));
  }

  async createExperiment(request: CreateExperimentRequest): Promise<CreateExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentWithOptions(request, headers, runtime);
  }

  async createExperimentWithOptions(request: CreateExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExperimentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.options)) {
      body["Options"] = request.options;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateExperiment",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateExperimentResponse>(await this.callApi(params, req, runtime), new CreateExperimentResponse({}));
  }

  async createExperimentFolder(request: CreateExperimentFolderRequest): Promise<CreateExperimentFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentFolderWithOptions(request, headers, runtime);
  }

  async createExperimentFolderWithOptions(request: CreateExperimentFolderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExperimentFolderResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      body["ParentFolderId"] = request.parentFolderId;
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
      action: "CreateExperimentFolder",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentfolders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateExperimentFolderResponse>(await this.callApi(params, req, runtime), new CreateExperimentFolderResponse({}));
  }

  async createExperimentMigrateValidation(request: CreateExperimentMigrateValidationRequest): Promise<CreateExperimentMigrateValidationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createExperimentMigrateValidationWithOptions(request, headers, runtime);
  }

  async createExperimentMigrateValidationWithOptions(request: CreateExperimentMigrateValidationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateExperimentMigrateValidationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sourceExpId)) {
      query["SourceExpId"] = request.sourceExpId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateExperimentMigrateValidation",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/migrate/experimentvalidation`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateExperimentMigrateValidationResponse>(await this.callApi(params, req, runtime), new CreateExperimentMigrateValidationResponse({}));
  }

  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobWithOptions(request, headers, runtime);
  }

  async createJobWithOptions(request: CreateJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.executeType)) {
      body["ExecuteType"] = request.executeType;
    }

    if (!Util.isUnset(request.experimentId)) {
      body["ExperimentId"] = request.experimentId;
    }

    if (!Util.isUnset(request.nodeId)) {
      body["NodeId"] = request.nodeId;
    }

    if (!Util.isUnset(request.options)) {
      body["Options"] = request.options;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateJob",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateJobResponse>(await this.callApi(params, req, runtime), new CreateJobResponse({}));
  }

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  async createServiceWithOptions(request: CreateServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.config))) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.serviceType)) {
      body["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateService",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
  }

  async deleteExperiment(ExperimentId: string): Promise<DeleteExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentWithOptions(ExperimentId, headers, runtime);
  }

  async deleteExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentResponse> {
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteExperiment",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteExperimentResponse>(await this.callApi(params, req, runtime), new DeleteExperimentResponse({}));
  }

  async deleteExperimentFolder(FolderId: string): Promise<DeleteExperimentFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteExperimentFolderWithOptions(FolderId, headers, runtime);
  }

  async deleteExperimentFolderWithOptions(FolderId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteExperimentFolderResponse> {
    FolderId = OpenApiUtil.getEncodeParam(FolderId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteExperimentFolder",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentfolders/${FolderId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteExperimentFolderResponse>(await this.callApi(params, req, runtime), new DeleteExperimentFolderResponse({}));
  }

  async deleteService(ServiceId: string): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(ServiceId, headers, runtime);
  }

  async deleteServiceWithOptions(ServiceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    ServiceId = OpenApiUtil.getEncodeParam(ServiceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteService",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/services/${ServiceId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
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
    let params = new $OpenApi.Params({
      action: "GetAlgoTree",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/algo/tree`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAlgoTreeResponse>(await this.callApi(params, req, runtime), new GetAlgoTreeResponse({}));
  }

  async getAlgorithmDef(request: GetAlgorithmDefRequest): Promise<GetAlgorithmDefResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgorithmDefWithOptions(request, headers, runtime);
  }

  async getAlgorithmDefWithOptions(request: GetAlgorithmDefRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmDefResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algoVersion)) {
      query["AlgoVersion"] = request.algoVersion;
    }

    if (!Util.isUnset(request.identifier)) {
      query["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.provider)) {
      query["Provider"] = request.provider;
    }

    if (!Util.isUnset(request.signature)) {
      query["Signature"] = request.signature;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithmDef",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithm/def`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmDefResponse>(await this.callApi(params, req, runtime), new GetAlgorithmDefResponse({}));
  }

  async getAlgorithmDefs(request: GetAlgorithmDefsRequest): Promise<GetAlgorithmDefsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgorithmDefsWithOptions(request, headers, runtime);
  }

  async getAlgorithmDefsWithOptions(request: GetAlgorithmDefsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmDefsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.latestTimestamp)) {
      query["LatestTimestamp"] = request.latestTimestamp;
    }

    if (!Util.isUnset(request.rangeEnd)) {
      query["RangeEnd"] = request.rangeEnd;
    }

    if (!Util.isUnset(request.rangeStart)) {
      query["RangeStart"] = request.rangeStart;
    }

    if (!Util.isUnset(request.timestamp)) {
      query["Timestamp"] = request.timestamp;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithmDefs",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithm/defs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmDefsResponse>(await this.callApi(params, req, runtime), new GetAlgorithmDefsResponse({}));
  }

  async getAlgorithmTree(request: GetAlgorithmTreeRequest): Promise<GetAlgorithmTreeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgorithmTreeWithOptions(request, headers, runtime);
  }

  async getAlgorithmTreeWithOptions(request: GetAlgorithmTreeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmTreeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithmTree",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/algorithm/tree`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmTreeResponse>(await this.callApi(params, req, runtime), new GetAlgorithmTreeResponse({}));
  }

  async getExperiment(ExperimentId: string): Promise<GetExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentWithOptions(ExperimentId, headers, runtime);
  }

  async getExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentResponse> {
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetExperiment",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentResponse>(await this.callApi(params, req, runtime), new GetExperimentResponse({}));
  }

  async getExperimentFolderChildren(FolderId: string, request: GetExperimentFolderChildrenRequest): Promise<GetExperimentFolderChildrenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentFolderChildrenWithOptions(FolderId, request, headers, runtime);
  }

  async getExperimentFolderChildrenWithOptions(FolderId: string, request: GetExperimentFolderChildrenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentFolderChildrenResponse> {
    Util.validateModel(request);
    FolderId = OpenApiUtil.getEncodeParam(FolderId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.onlyFolder)) {
      query["OnlyFolder"] = request.onlyFolder;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
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
      action: "GetExperimentFolderChildren",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentfolders/${FolderId}/children`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentFolderChildrenResponse>(await this.callApi(params, req, runtime), new GetExperimentFolderChildrenResponse({}));
  }

  async getExperimentMeta(ExperimentId: string): Promise<GetExperimentMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentMetaWithOptions(ExperimentId, headers, runtime);
  }

  async getExperimentMetaWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentMetaResponse> {
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetExperimentMeta",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/meta`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentMetaResponse>(await this.callApi(params, req, runtime), new GetExperimentMetaResponse({}));
  }

  async getExperimentStatus(ExperimentId: string): Promise<GetExperimentStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentStatusWithOptions(ExperimentId, headers, runtime);
  }

  async getExperimentStatusWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentStatusResponse> {
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetExperimentStatus",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentStatusResponse>(await this.callApi(params, req, runtime), new GetExperimentStatusResponse({}));
  }

  async getExperimentVisualizationMeta(ExperimentId: string, request: GetExperimentVisualizationMetaRequest): Promise<GetExperimentVisualizationMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentVisualizationMetaWithOptions(ExperimentId, request, headers, runtime);
  }

  async getExperimentVisualizationMetaWithOptions(ExperimentId: string, request: GetExperimentVisualizationMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentVisualizationMetaResponse> {
    Util.validateModel(request);
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.nodeIds)) {
      query["NodeIds"] = request.nodeIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExperimentVisualizationMeta",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/visualizationMeta`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentVisualizationMetaResponse>(await this.callApi(params, req, runtime), new GetExperimentVisualizationMetaResponse({}));
  }

  async getExperimentsStatistics(request: GetExperimentsStatisticsRequest): Promise<GetExperimentsStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentsStatisticsWithOptions(request, headers, runtime);
  }

  async getExperimentsStatisticsWithOptions(request: GetExperimentsStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentsStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExperimentsStatistics",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/statistics/experiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentsStatisticsResponse>(await this.callApi(params, req, runtime), new GetExperimentsStatisticsResponse({}));
  }

  async getExperimentsUsersStatistics(request: GetExperimentsUsersStatisticsRequest): Promise<GetExperimentsUsersStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getExperimentsUsersStatisticsWithOptions(request, headers, runtime);
  }

  async getExperimentsUsersStatisticsWithOptions(request: GetExperimentsUsersStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetExperimentsUsersStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetExperimentsUsersStatistics",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/statistics/experimentsusers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetExperimentsUsersStatisticsResponse>(await this.callApi(params, req, runtime), new GetExperimentsUsersStatisticsResponse({}));
  }

  async getImage(ImageId: string, request: GetImageRequest): Promise<GetImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getImageWithOptions(ImageId, request, headers, runtime);
  }

  async getImageWithOptions(ImageId: string, request: GetImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetImageResponse> {
    Util.validateModel(request);
    ImageId = OpenApiUtil.getEncodeParam(ImageId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImage",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${ImageId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetImageResponse>(await this.callApi(params, req, runtime), new GetImageResponse({}));
  }

  async getJob(JobId: string, request: GetJobRequest): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobWithOptions(JobId, request, headers, runtime);
  }

  async getJobWithOptions(JobId: string, request: GetJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJobResponse> {
    Util.validateModel(request);
    JobId = OpenApiUtil.getEncodeParam(JobId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJob",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${JobId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
  }

  async getMCTableSchema(TableName: string, request: GetMCTableSchemaRequest): Promise<GetMCTableSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMCTableSchemaWithOptions(TableName, request, headers, runtime);
  }

  async getMCTableSchemaWithOptions(TableName: string, request: GetMCTableSchemaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMCTableSchemaResponse> {
    Util.validateModel(request);
    TableName = OpenApiUtil.getEncodeParam(TableName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMCTableSchema",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/datasources/maxcompute/tables/${TableName}/schema`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMCTableSchemaResponse>(await this.callApi(params, req, runtime), new GetMCTableSchemaResponse({}));
  }

  async getNodeInputSchema(ExperimentId: string, NodeId: string, request: GetNodeInputSchemaRequest): Promise<GetNodeInputSchemaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeInputSchemaWithOptions(ExperimentId, NodeId, request, headers, runtime);
  }

  async getNodeInputSchemaWithOptions(ExperimentId: string, NodeId: string, request: GetNodeInputSchemaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNodeInputSchemaResponse> {
    Util.validateModel(request);
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    NodeId = OpenApiUtil.getEncodeParam(NodeId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inputId)) {
      query["InputId"] = request.inputId;
    }

    if (!Util.isUnset(request.inputIndex)) {
      query["InputIndex"] = request.inputIndex;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeInputSchema",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/nodes/${NodeId}/schema`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetNodeInputSchemaResponse>(await this.callApi(params, req, runtime), new GetNodeInputSchemaResponse({}));
  }

  async getNodeOutput(ExperimentId: string, NodeId: string, OutputId: string, request: GetNodeOutputRequest): Promise<GetNodeOutputResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeOutputWithOptions(ExperimentId, NodeId, OutputId, request, headers, runtime);
  }

  async getNodeOutputWithOptions(ExperimentId: string, NodeId: string, OutputId: string, request: GetNodeOutputRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNodeOutputResponse> {
    Util.validateModel(request);
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    NodeId = OpenApiUtil.getEncodeParam(NodeId);
    OutputId = OpenApiUtil.getEncodeParam(OutputId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.outputIndex)) {
      query["OutputIndex"] = request.outputIndex;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeOutput",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/nodes/${NodeId}/outputs/${OutputId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetNodeOutputResponse>(await this.callApi(params, req, runtime), new GetNodeOutputResponse({}));
  }

  async getNodeVisualization(ExperimentId: string, NodeId: string, VisualizationId: string, request: GetNodeVisualizationRequest): Promise<GetNodeVisualizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNodeVisualizationWithOptions(ExperimentId, NodeId, VisualizationId, request, headers, runtime);
  }

  async getNodeVisualizationWithOptions(ExperimentId: string, NodeId: string, VisualizationId: string, request: GetNodeVisualizationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNodeVisualizationResponse> {
    Util.validateModel(request);
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    NodeId = OpenApiUtil.getEncodeParam(NodeId);
    VisualizationId = OpenApiUtil.getEncodeParam(VisualizationId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.config)) {
      query["Config"] = request.config;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNodeVisualization",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/nodes/${NodeId}/visualizations/${VisualizationId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetNodeVisualizationResponse>(await this.callApi(params, req, runtime), new GetNodeVisualizationResponse({}));
  }

  async getService(ServiceId: string, request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(ServiceId, request, headers, runtime);
  }

  async getServiceWithOptions(ServiceId: string, request: GetServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    Util.validateModel(request);
    ServiceId = OpenApiUtil.getEncodeParam(ServiceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetService",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/services/${ServiceId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
  }

  async getTemplate(TemplateId: string): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(TemplateId, headers, runtime);
  }

  async getTemplateWithOptions(TemplateId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    TemplateId = OpenApiUtil.getEncodeParam(TemplateId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/templates/${TemplateId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  async listAlgoDefs(request: ListAlgoDefsRequest): Promise<ListAlgoDefsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlgoDefsWithOptions(request, headers, runtime);
  }

  async listAlgoDefsWithOptions(request: ListAlgoDefsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAlgoDefsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "ListAlgoDefs",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/algo/detail`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAlgoDefsResponse>(await this.callApi(params, req, runtime), new ListAlgoDefsResponse({}));
  }

  async listAuthRoles(request: ListAuthRolesRequest): Promise<ListAuthRolesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAuthRolesWithOptions(request, headers, runtime);
  }

  async listAuthRolesWithOptions(request: ListAuthRolesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAuthRolesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isGenerateToken)) {
      query["IsGenerateToken"] = request.isGenerateToken;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuthRoles",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/authorization/roles`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAuthRolesResponse>(await this.callApi(params, req, runtime), new ListAuthRolesResponse({}));
  }

  async listExperiments(request: ListExperimentsRequest): Promise<ListExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listExperimentsWithOptions(request, headers, runtime);
  }

  async listExperimentsWithOptions(request: ListExperimentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListExperimentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.creator)) {
      query["Creator"] = request.creator;
    }

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

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListExperiments",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListExperimentsResponse>(await this.callApi(params, req, runtime), new ListExperimentsResponse({}));
  }

  async listImageLabels(request: ListImageLabelsRequest): Promise<ListImageLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listImageLabelsWithOptions(request, headers, runtime);
  }

  async listImageLabelsWithOptions(request: ListImageLabelsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListImageLabelsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageId)) {
      query["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.labelFilter)) {
      query["LabelFilter"] = request.labelFilter;
    }

    if (!Util.isUnset(request.labelKeys)) {
      query["LabelKeys"] = request.labelKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListImageLabels",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/image/labels`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListImageLabelsResponse>(await this.callApi(params, req, runtime), new ListImageLabelsResponse({}));
  }

  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listImagesWithOptions(request, headers, runtime);
  }

  async listImagesWithOptions(request: ListImagesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListImagesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      query["Labels"] = request.labels;
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

    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListImages",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/images`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
  }

  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(request, headers, runtime);
  }

  async listJobsWithOptions(request: ListJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.creator)) {
      query["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.experimentId)) {
      query["ExperimentId"] = request.experimentId;
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  async listNodeOutputs(ExperimentId: string, NodeId: string): Promise<ListNodeOutputsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNodeOutputsWithOptions(ExperimentId, NodeId, headers, runtime);
  }

  async listNodeOutputsWithOptions(ExperimentId: string, NodeId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNodeOutputsResponse> {
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    NodeId = OpenApiUtil.getEncodeParam(NodeId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListNodeOutputs",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/nodes/${NodeId}/outputs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListNodeOutputsResponse>(await this.callApi(params, req, runtime), new ListNodeOutputsResponse({}));
  }

  async listRecentExperiments(request: ListRecentExperimentsRequest): Promise<ListRecentExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRecentExperimentsWithOptions(request, headers, runtime);
  }

  async listRecentExperimentsWithOptions(request: ListRecentExperimentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRecentExperimentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

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
    let params = new $OpenApi.Params({
      action: "ListRecentExperiments",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/recentexperiments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRecentExperimentsResponse>(await this.callApi(params, req, runtime), new ListRecentExperimentsResponse({}));
  }

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  async listServicesWithOptions(request: ListServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
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
    let params = new $OpenApi.Params({
      action: "ListServices",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(request, headers, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.list)) {
      query["List"] = request.list;
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

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.tagId)) {
      query["TagId"] = request.tagId;
    }

    if (!Util.isUnset(request.typeId)) {
      query["TypeId"] = request.typeId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplates",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTemplatesResponse>(await this.callApi(params, req, runtime), new ListTemplatesResponse({}));
  }

  async migrateExperimentFolders(request: MigrateExperimentFoldersRequest): Promise<MigrateExperimentFoldersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateExperimentFoldersWithOptions(request, headers, runtime);
  }

  async migrateExperimentFoldersWithOptions(request: MigrateExperimentFoldersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<MigrateExperimentFoldersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.isOwner)) {
      query["IsOwner"] = request.isOwner;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MigrateExperimentFolders",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/migrate/folders`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<MigrateExperimentFoldersResponse>(await this.callApi(params, req, runtime), new MigrateExperimentFoldersResponse({}));
  }

  async migrateExperiments(request: MigrateExperimentsRequest): Promise<MigrateExperimentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.migrateExperimentsWithOptions(request, headers, runtime);
  }

  async migrateExperimentsWithOptions(request: MigrateExperimentsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<MigrateExperimentsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      query["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.destFolderId)) {
      query["DestFolderId"] = request.destFolderId;
    }

    if (!Util.isUnset(request.isOwner)) {
      query["IsOwner"] = request.isOwner;
    }

    if (!Util.isUnset(request.sourceExpId)) {
      query["SourceExpId"] = request.sourceExpId;
    }

    if (!Util.isUnset(request.updateIfExists)) {
      query["UpdateIfExists"] = request.updateIfExists;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MigrateExperiments",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/migrate/experiments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<MigrateExperimentsResponse>(await this.callApi(params, req, runtime), new MigrateExperimentsResponse({}));
  }

  async previewMCTable(TableName: string, request: PreviewMCTableRequest): Promise<PreviewMCTableResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.previewMCTableWithOptions(TableName, request, headers, runtime);
  }

  async previewMCTableWithOptions(TableName: string, request: PreviewMCTableRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PreviewMCTableResponse> {
    Util.validateModel(request);
    TableName = OpenApiUtil.getEncodeParam(TableName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endpoint)) {
      query["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.partition)) {
      query["Partition"] = request.partition;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PreviewMCTable",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/datasources/maxcompute/tables/${TableName}/preview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PreviewMCTableResponse>(await this.callApi(params, req, runtime), new PreviewMCTableResponse({}));
  }

  async publishExperiment(ExperimentId: string, request: PublishExperimentRequest): Promise<PublishExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishExperimentWithOptions(ExperimentId, request, headers, runtime);
  }

  async publishExperimentWithOptions(ExperimentId: string, request: PublishExperimentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishExperimentResponse> {
    Util.validateModel(request);
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishExperiment",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/publish`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishExperimentResponse>(await this.callApi(params, req, runtime), new PublishExperimentResponse({}));
  }

  async queryExperimentVisualizationData(ExperimentId: string, request: QueryExperimentVisualizationDataRequest): Promise<QueryExperimentVisualizationDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryExperimentVisualizationDataWithOptions(ExperimentId, request, headers, runtime);
  }

  async queryExperimentVisualizationDataWithOptions(ExperimentId: string, request: QueryExperimentVisualizationDataRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryExperimentVisualizationDataResponse> {
    Util.validateModel(request);
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "QueryExperimentVisualizationData",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/visualizationDataQuery`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryExperimentVisualizationDataResponse>(await this.callApi(params, req, runtime), new QueryExperimentVisualizationDataResponse({}));
  }

  async removeImage(ImageId: string): Promise<RemoveImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageWithOptions(ImageId, headers, runtime);
  }

  async removeImageWithOptions(ImageId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveImageResponse> {
    ImageId = OpenApiUtil.getEncodeParam(ImageId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveImage",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${ImageId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveImageResponse>(await this.callApi(params, req, runtime), new RemoveImageResponse({}));
  }

  async removeImageLabels(ImageId: string, LabelKey: string): Promise<RemoveImageLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeImageLabelsWithOptions(ImageId, LabelKey, headers, runtime);
  }

  async removeImageLabelsWithOptions(ImageId: string, LabelKey: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveImageLabelsResponse> {
    ImageId = OpenApiUtil.getEncodeParam(ImageId);
    LabelKey = OpenApiUtil.getEncodeParam(LabelKey);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveImageLabels",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/images/${ImageId}/labels/${LabelKey}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveImageLabelsResponse>(await this.callApi(params, req, runtime), new RemoveImageLabelsResponse({}));
  }

  async searchMCTables(request: SearchMCTablesRequest): Promise<SearchMCTablesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.searchMCTablesWithOptions(request, headers, runtime);
  }

  async searchMCTablesWithOptions(request: SearchMCTablesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SearchMCTablesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchMCTables",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/datasources/maxcompute/tables`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SearchMCTablesResponse>(await this.callApi(params, req, runtime), new SearchMCTablesResponse({}));
  }

  async stopExperiment(ExperimentId: string): Promise<StopExperimentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopExperimentWithOptions(ExperimentId, headers, runtime);
  }

  async stopExperimentWithOptions(ExperimentId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopExperimentResponse> {
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopExperiment",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/stop`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopExperimentResponse>(await this.callApi(params, req, runtime), new StopExperimentResponse({}));
  }

  async stopJob(JobId: string): Promise<StopJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopJobWithOptions(JobId, headers, runtime);
  }

  async stopJobWithOptions(JobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopJobResponse> {
    JobId = OpenApiUtil.getEncodeParam(JobId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopJob",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/jobs/${JobId}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopJobResponse>(await this.callApi(params, req, runtime), new StopJobResponse({}));
  }

  async updateExperimentContent(ExperimentId: string, request: UpdateExperimentContentRequest): Promise<UpdateExperimentContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentContentWithOptions(ExperimentId, request, headers, runtime);
  }

  async updateExperimentContentWithOptions(ExperimentId: string, request: UpdateExperimentContentRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentContentResponse> {
    Util.validateModel(request);
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.version)) {
      body["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateExperimentContent",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/content`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateExperimentContentResponse>(await this.callApi(params, req, runtime), new UpdateExperimentContentResponse({}));
  }

  async updateExperimentFolder(FolderId: string, request: UpdateExperimentFolderRequest): Promise<UpdateExperimentFolderResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentFolderWithOptions(FolderId, request, headers, runtime);
  }

  async updateExperimentFolderWithOptions(FolderId: string, request: UpdateExperimentFolderRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentFolderResponse> {
    Util.validateModel(request);
    FolderId = OpenApiUtil.getEncodeParam(FolderId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.parentFolderId)) {
      body["ParentFolderId"] = request.parentFolderId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateExperimentFolder",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experimentfolders/${FolderId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateExperimentFolderResponse>(await this.callApi(params, req, runtime), new UpdateExperimentFolderResponse({}));
  }

  async updateExperimentMeta(ExperimentId: string, request: UpdateExperimentMetaRequest): Promise<UpdateExperimentMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateExperimentMetaWithOptions(ExperimentId, request, headers, runtime);
  }

  async updateExperimentMetaWithOptions(ExperimentId: string, request: UpdateExperimentMetaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateExperimentMetaResponse> {
    Util.validateModel(request);
    ExperimentId = OpenApiUtil.getEncodeParam(ExperimentId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.folderId)) {
      body["FolderId"] = request.folderId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.options)) {
      body["Options"] = request.options;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateExperimentMeta",
      version: "2021-02-02",
      protocol: "HTTPS",
      pathname: `/api/v1/experiments/${ExperimentId}/meta`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateExperimentMetaResponse>(await this.callApi(params, req, runtime), new UpdateExperimentMetaResponse({}));
  }

}
