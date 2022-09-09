// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class JobStatusDetailValue extends $tea.Model {
  comment?: string;
  timeStamps?: string;
  jobResult?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      timeStamps: 'timeStamps',
      jobResult: 'jobResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      timeStamps: 'string',
      jobResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectBuildConfigTaskPoliciesValue extends $tea.Model {
  taskId?: string;
  priority?: number;
  destroyAfterExecution?: boolean;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
      priority: 'priority',
      destroyAfterExecution: 'destroyAfterExecution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      priority: 'number',
      destroyAfterExecution: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobsStatusDetailValue extends $tea.Model {
  comment?: string;
  timeStamps?: string;
  jobResult?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
      timeStamps: 'timeStamps',
      jobResult: 'jobResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      timeStamps: 'string',
      jobResult: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateParameterSetRequest extends $tea.Model {
  parameterSetIds?: string[];
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSetIds: 'parameterSetIds',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSetIds: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateParameterSetResponseBody extends $tea.Model {
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

export class AssociateParameterSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateParameterSetResponseBody;
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
      body: AssociateParameterSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateTaskGroupRequest extends $tea.Model {
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateTaskGroupResponseBody extends $tea.Model {
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

export class AssociateTaskGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssociateTaskGroupResponseBody;
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
      body: AssociateTaskGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachRabbitmqPublisherRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachRabbitmqPublisherResponseBody extends $tea.Model {
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

export class AttachRabbitmqPublisherResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachRabbitmqPublisherResponseBody;
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
      body: AttachRabbitmqPublisherResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelResourceExportTaskRequest extends $tea.Model {
  clientToken?: string;
  ramRole?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      ramRole: 'ramRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ramRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelResourceExportTaskResponseBody extends $tea.Model {
  exportTaskId?: string;
  exportVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      exportVersion: 'exportVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      exportVersion: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelResourceExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelResourceExportTaskResponseBody;
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
      body: CancelResourceExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModuleRequest extends $tea.Model {
  description?: string;
  moduleId?: string;
  moduleSource?: string;
  moduleVersion?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      moduleId: 'moduleId',
      moduleSource: 'moduleSource',
      moduleVersion: 'moduleVersion',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      moduleId: 'string',
      moduleSource: 'string',
      moduleVersion: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModuleResponseBody extends $tea.Model {
  moduleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'moduleId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneModuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CloneModuleResponseBody;
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
      body: CloneModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationRequest extends $tea.Model {
  clientToken?: string;
  dueTime?: string;
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      dueTime: 'dueTime',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dueTime: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationResponseBody extends $tea.Model {
  authorizationId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'authorizationId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateAuthorizationResponseBody;
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
      body: CreateAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  name?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGroupResponseBody;
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
      body: CreateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  subCommand?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      subCommand: 'subCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      subCommand: 'string',
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
      jobId: 'jobId',
      requestId: 'requestId',
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
  statusCode: number;
  body: CreateJobResponseBody;
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
      body: CreateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  name?: string;
  source?: string;
  sourcePath?: string;
  statePath?: string;
  versionStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
      versionStrategy: 'versionStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
      versionStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleResponseBody extends $tea.Model {
  moduleId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'moduleId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateModuleResponseBody;
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
      body: CreateModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleMarketRequest extends $tea.Model {
  clientToken?: string;
  codeUrl?: string;
  description?: string;
  moduleDetail?: string;
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      codeUrl: 'codeUrl',
      description: 'description',
      moduleDetail: 'moduleDetail',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      codeUrl: 'string',
      description: 'string',
      moduleDetail: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleMarketResponseBody extends $tea.Model {
  moduleMarketId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleMarketId: 'moduleMarketId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleMarketId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleMarketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateModuleMarketResponseBody;
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
      body: CreateModuleMarketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleVersionRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleVersionResponseBody extends $tea.Model {
  moduleVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleVersion: 'moduleVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleVersion: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateModuleVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateModuleVersionResponseBody;
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
      body: CreateModuleVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterSetRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  name?: string;
  parameters?: CreateParameterSetRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      parameters: { 'type': 'array', 'itemType': CreateParameterSetRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterSetResponseBody extends $tea.Model {
  parameterSetId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSetId: 'parameterSetId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSetId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateParameterSetResponseBody;
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
      body: CreateParameterSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProjectResponseBody;
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
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectBuildRequest extends $tea.Model {
  clientToken?: string;
  projectBuildAction?: string;
  taskIds?: string[];
  taskPolicies?: CreateProjectBuildRequestTaskPolicies[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      projectBuildAction: 'projectBuildAction',
      taskIds: 'taskIds',
      taskPolicies: 'taskPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      projectBuildAction: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      taskPolicies: { 'type': 'array', 'itemType': CreateProjectBuildRequestTaskPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectBuildResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectBuildResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateProjectBuildResponseBody;
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
      body: CreateProjectBuildResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRabbitmqPublisherRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  exchangeName?: string;
  exchangeType?: string;
  hostName?: string;
  name?: string;
  password?: string;
  port?: number;
  userName?: string;
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      exchangeName: 'exchangeName',
      exchangeType: 'exchangeType',
      hostName: 'hostName',
      name: 'name',
      password: 'password',
      port: 'port',
      userName: 'userName',
      virtualHost: 'virtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      exchangeName: 'string',
      exchangeType: 'string',
      hostName: 'string',
      name: 'string',
      password: 'string',
      port: 'number',
      userName: 'string',
      virtualHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRabbitmqPublisherResponseBody extends $tea.Model {
  publisherId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      publisherId: 'publisherId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publisherId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRabbitmqPublisherResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateRabbitmqPublisherResponseBody;
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
      body: CreateRabbitmqPublisherResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  excludeRules?: CreateResourceExportTaskRequestExcludeRules[];
  exportToModule?: CreateResourceExportTaskRequestExportToModule;
  includeRules?: CreateResourceExportTaskRequestIncludeRules[];
  name?: string;
  ramRole?: string;
  terraformVersion?: string;
  triggerStrategy?: string;
  variables?: CreateResourceExportTaskRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      excludeRules: 'excludeRules',
      exportToModule: 'exportToModule',
      includeRules: 'includeRules',
      name: 'name',
      ramRole: 'ramRole',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      excludeRules: { 'type': 'array', 'itemType': CreateResourceExportTaskRequestExcludeRules },
      exportToModule: CreateResourceExportTaskRequestExportToModule,
      includeRules: { 'type': 'array', 'itemType': CreateResourceExportTaskRequestIncludeRules },
      name: 'string',
      ramRole: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      variables: { 'type': 'array', 'itemType': CreateResourceExportTaskRequestVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskResponseBody extends $tea.Model {
  exportTaskId?: string;
  exportVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      exportVersion: 'exportVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      exportVersion: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateResourceExportTaskResponseBody;
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
      body: CreateResourceExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequest extends $tea.Model {
  autoApply?: boolean;
  clientToken?: string;
  groupInfo?: CreateTaskRequestGroupInfo;
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  parameters?: { [key: string]: string };
  protectionStrategy?: string[];
  ramRole?: string;
  terraformVersion?: string;
  triggerStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      clientToken: 'clientToken',
      groupInfo: 'groupInfo',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      parameters: 'parameters',
      protectionStrategy: 'protectionStrategy',
      ramRole: 'ramRole',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      clientToken: 'string',
      groupInfo: CreateTaskRequestGroupInfo,
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      protectionStrategy: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTaskResponseBody;
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
      body: CreateTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAuthorizationResponseBody extends $tea.Model {
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

export class DeleteAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAuthorizationResponseBody;
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
      body: DeleteAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponseBody extends $tea.Model {
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

export class DeleteGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGroupResponseBody;
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
      body: DeleteGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModuleResponseBody extends $tea.Model {
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

export class DeleteModuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteModuleResponseBody;
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
      body: DeleteModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteParameterSetResponseBody extends $tea.Model {
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

export class DeleteParameterSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteParameterSetResponseBody;
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
      body: DeleteParameterSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
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

export class DeleteProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteProjectResponseBody;
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
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteRabbitmqPublisherResponseBody extends $tea.Model {
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

export class DeleteRabbitmqPublisherResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteRabbitmqPublisherResponseBody;
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
      body: DeleteRabbitmqPublisherResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceExportTaskResponseBody extends $tea.Model {
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

export class DeleteResourceExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteResourceExportTaskResponseBody;
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
      body: DeleteResourceExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceLinkRequest extends $tea.Model {
  productCode?: string;
  resourceTypeCode?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'productCode',
      resourceTypeCode: 'resourceTypeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      resourceTypeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceLinkResponseBody extends $tea.Model {
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

export class DeleteResourceLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteResourceLinkResponseBody;
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
      body: DeleteResourceLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTaskResponseBody extends $tea.Model {
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

export class DeleteTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTaskResponseBody;
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
      body: DeleteTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachRabbitmqPublisherRequest extends $tea.Model {
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachRabbitmqPublisherResponseBody extends $tea.Model {
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

export class DetachRabbitmqPublisherResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachRabbitmqPublisherResponseBody;
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
      body: DetachRabbitmqPublisherResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateParameterSetRequest extends $tea.Model {
  parameterSetIds?: string[];
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSetIds: 'parameterSetIds',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSetIds: { 'type': 'array', 'itemType': 'string' },
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateParameterSetResponseBody extends $tea.Model {
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

export class DissociateParameterSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DissociateParameterSetResponseBody;
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
      body: DissociateParameterSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateTaskGroupRequest extends $tea.Model {
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DissociateTaskGroupResponseBody extends $tea.Model {
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

export class DissociateTaskGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DissociateTaskGroupResponseBody;
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
      body: DissociateTaskGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteResourceExportTaskRequest extends $tea.Model {
  clientToken?: string;
  ramRole?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      ramRole: 'ramRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ramRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteResourceExportTaskResponseBody extends $tea.Model {
  exportTaskId?: string;
  exportVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      exportVersion: 'exportVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      exportVersion: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecuteResourceExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExecuteResourceExportTaskResponseBody;
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
      body: ExecuteResourceExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBody extends $tea.Model {
  group?: GetGroupResponseBodyGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: GetGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetGroupResponseBody;
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
      body: GetGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $tea.Model {
  job?: GetJobResponseBodyJob;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      job: 'job',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      job: GetJobResponseBodyJob,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetJobResponseBody;
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
      body: GetJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleResponseBody extends $tea.Model {
  module?: GetModuleResponseBodyModule;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      module: 'module',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      module: GetModuleResponseBodyModule,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetModuleResponseBody;
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
      body: GetModuleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleMarketResponseBody extends $tea.Model {
  moduleMarket?: GetModuleMarketResponseBodyModuleMarket;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      moduleMarket: 'moduleMarket',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleMarket: GetModuleMarketResponseBodyModuleMarket,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleMarketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetModuleMarketResponseBody;
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
      body: GetModuleMarketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleVersionResponseBody extends $tea.Model {
  requestId?: string;
  version?: GetModuleVersionResponseBodyVersion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      version: GetModuleVersionResponseBodyVersion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetModuleVersionResponseBody;
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
      body: GetModuleVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterSetResponseBody extends $tea.Model {
  parameterSet?: GetParameterSetResponseBodyParameterSet;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterSet: 'parameterSet',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSet: GetParameterSetResponseBodyParameterSet,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterSetResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetParameterSetResponseBody;
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
      body: GetParameterSetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $tea.Model {
  project?: GetProjectResponseBodyProject;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: GetProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProjectResponseBody;
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
      body: GetProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildConfigRequest extends $tea.Model {
  projectBuildId?: string;
  static names(): { [key: string]: string } {
    return {
      projectBuildId: 'projectBuildId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectBuildId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildConfigResponseBody extends $tea.Model {
  projectBuildConfig?: GetProjectBuildConfigResponseBodyProjectBuildConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectBuildConfig: 'projectBuildConfig',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectBuildConfig: GetProjectBuildConfigResponseBodyProjectBuildConfig,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProjectBuildConfigResponseBody;
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
      body: GetProjectBuildConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildContextResponseBody extends $tea.Model {
  projectBuild?: GetProjectBuildContextResponseBodyProjectBuild;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectBuild: 'ProjectBuild',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectBuild: GetProjectBuildContextResponseBodyProjectBuild,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildContextResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProjectBuildContextResponseBody;
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
      body: GetProjectBuildContextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectJobSummaryResponseBody extends $tea.Model {
  jobSummary?: GetProjectJobSummaryResponseBodyJobSummary;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobSummary: 'jobSummary',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobSummary: GetProjectJobSummaryResponseBodyJobSummary,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectJobSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProjectJobSummaryResponseBody;
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
      body: GetProjectJobSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResourceSummaryResponseBody extends $tea.Model {
  requestId?: string;
  resourceSummary?: GetProjectResourceSummaryResponseBodyResourceSummary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resourceSummary: 'resourceSummary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceSummary: GetProjectResourceSummaryResponseBodyResourceSummary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResourceSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetProjectResourceSummaryResponseBody;
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
      body: GetProjectResourceSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRabbitmqPublisherResponseBody extends $tea.Model {
  publisher?: GetRabbitmqPublisherResponseBodyPublisher;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      publisher: 'publisher',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publisher: GetRabbitmqPublisherResponseBodyPublisher,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRabbitmqPublisherResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetRabbitmqPublisherResponseBody;
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
      body: GetRabbitmqPublisherResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskRequest extends $tea.Model {
  exportVersion?: string;
  static names(): { [key: string]: string } {
    return {
      exportVersion: 'exportVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBody extends $tea.Model {
  requestId?: string;
  task?: GetResourceExportTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetResourceExportTaskResponseBodyTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceExportTaskResponseBody;
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
      body: GetResourceExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceLinkRequest extends $tea.Model {
  productCode?: string;
  resourceTypeCode?: string;
  static names(): { [key: string]: string } {
    return {
      productCode: 'productCode',
      resourceTypeCode: 'resourceTypeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      productCode: 'string',
      resourceTypeCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceLinkResponseBody extends $tea.Model {
  link?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      link: 'link',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      link: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceLinkResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetResourceLinkResponseBody;
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
      body: GetResourceLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $tea.Model {
  requestId?: string;
  task?: GetTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetTaskResponseBodyTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTaskResponseBody;
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
      body: GetTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskContextResponseBody extends $tea.Model {
  requestId?: string;
  task?: GetTaskContextResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetTaskContextResponseBodyTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskContextResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTaskContextResponseBody;
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
      body: GetTaskContextResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationsRequest extends $tea.Model {
  authorizationId?: string;
  authorizationType?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'authorizationId',
      authorizationType: 'authorizationType',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'string',
      authorizationType: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationsResponseBody extends $tea.Model {
  authorizations?: ListAuthorizationsResponseBodyAuthorizations[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizations: 'authorizations',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizations: { 'type': 'array', 'itemType': ListAuthorizationsResponseBodyAuthorizations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAuthorizationsResponseBody;
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
      body: ListAuthorizationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupRequest extends $tea.Model {
  pageNumber?: string;
  pageSize?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupResponseBody extends $tea.Model {
  count?: number;
  groups?: ListGroupResponseBodyGroups[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      groups: 'groups',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      groups: { 'type': 'array', 'itemType': ListGroupResponseBodyGroups },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGroupResponseBody;
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
      body: ListGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  jobs?: ListJobsResponseBodyJobs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'jobs',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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

export class ListModuleMarketsRequest extends $tea.Model {
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleMarketsResponseBody extends $tea.Model {
  moduleMarkets?: ListModuleMarketsResponseBodyModuleMarkets[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      moduleMarkets: 'moduleMarkets',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleMarkets: { 'type': 'array', 'itemType': ListModuleMarketsResponseBodyModuleMarkets },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleMarketsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListModuleMarketsResponseBody;
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
      body: ListModuleMarketsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleVersionRequest extends $tea.Model {
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleVersionResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  versions?: ListModuleVersionResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ListModuleVersionResponseBodyVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListModuleVersionResponseBody;
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
      body: ListModuleVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesRequest extends $tea.Model {
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponseBody extends $tea.Model {
  modules?: ListModulesResponseBodyModules[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      modules: 'modules',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modules: { 'type': 'array', 'itemType': ListModulesResponseBodyModules },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListModulesResponseBody;
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
      body: ListModulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetRelationRequest extends $tea.Model {
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

export class ListParameterSetRelationResponseBody extends $tea.Model {
  parameterSets?: ListParameterSetRelationResponseBodyParameterSets[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      parameterSets: 'parameterSets',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterSets: { 'type': 'array', 'itemType': ListParameterSetRelationResponseBodyParameterSets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetRelationResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListParameterSetRelationResponseBody;
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
      body: ListParameterSetRelationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsRequest extends $tea.Model {
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  parameterSets?: ListParameterSetsResponseBodyParameterSets[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      parameterSets: 'parameterSets',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parameterSets: { 'type': 'array', 'itemType': ListParameterSetsResponseBodyParameterSets },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListParameterSetsResponseBody;
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
      body: ListParameterSetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectRequest extends $tea.Model {
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBody extends $tea.Model {
  count?: number;
  pageNumber?: number;
  pageSize?: number;
  projects?: ListProjectResponseBodyProjects[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projects: 'projects',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projects: { 'type': 'array', 'itemType': ListProjectResponseBodyProjects },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProjectResponseBody;
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
      body: ListProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectBuildsResponseBody extends $tea.Model {
  projectBuilds?: ListProjectBuildsResponseBodyProjectBuilds[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      projectBuilds: 'ProjectBuilds',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectBuilds: { 'type': 'array', 'itemType': ListProjectBuildsResponseBodyProjectBuilds },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectBuildsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListProjectBuildsResponseBody;
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
      body: ListProjectBuildsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRabbitmqPublishersRequest extends $tea.Model {
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRabbitmqPublishersResponseBody extends $tea.Model {
  authorizations?: ListRabbitmqPublishersResponseBodyAuthorizations[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      authorizations: 'authorizations',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizations: { 'type': 'array', 'itemType': ListRabbitmqPublishersResponseBodyAuthorizations },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRabbitmqPublishersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRabbitmqPublishersResponseBody;
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
      body: ListRabbitmqPublishersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRelationModulesResponseBody extends $tea.Model {
  modules?: ListRelationModulesResponseBodyModules[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      modules: 'modules',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modules: { 'type': 'array', 'itemType': ListRelationModulesResponseBodyModules },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRelationModulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRelationModulesResponseBody;
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
      body: ListRelationModulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRelationTasksRequest extends $tea.Model {
  keyword?: string;
  moduleId?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      moduleId: 'moduleId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      moduleId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRelationTasksResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tasks?: ListRelationTasksResponseBodyTasks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      tasks: 'tasks',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListRelationTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRelationTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRelationTasksResponseBody;
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
      body: ListRelationTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsRequest extends $tea.Model {
  exportVersion?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      exportVersion: 'exportVersion',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportVersion: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBody extends $tea.Model {
  exportTasks?: ListResourceExportTaskVersionsResponseBodyExportTasks[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      exportTasks: 'exportTasks',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTasks: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceExportTaskVersionsResponseBody;
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
      body: ListResourceExportTaskVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksRequest extends $tea.Model {
  exportTaskId?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      keyword: 'keyword',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBody extends $tea.Model {
  exportTasks?: ListResourceExportTasksResponseBodyExportTasks[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      exportTasks: 'exportTasks',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTasks: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasks },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceExportTasksResponseBody;
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
      body: ListResourceExportTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  sourceType?: string;
  sourceValue?: string;
  specType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      sourceType: 'sourceType',
      sourceValue: 'sourceValue',
      specType: 'specType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      sourceType: 'string',
      sourceValue: 'string',
      specType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $tea.Model {
  resources?: ListResourcesResponseBodyResources[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      resources: 'Resources',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyResources },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourcesResponseBody;
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
      body: ListResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResourceRequest extends $tea.Model {
  pageNumber?: string;
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResourceResponseBody extends $tea.Model {
  count?: number;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resources?: ListTaskResourceResponseBodyResources[];
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ListTaskResourceResponseBodyResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTaskResourceResponseBody;
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
      body: ListTaskResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  groupId?: string;
  keyword?: string;
  moduleId?: string;
  pageNumber?: number;
  pageSize?: number;
  projectId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      keyword: 'keyword',
      moduleId: 'moduleId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      projectId: 'projectId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      keyword: 'string',
      moduleId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tasks?: ListTasksResponseBodyTasks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      tasks: 'tasks',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTasksResponseBody;
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
      body: ListTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateJobRequest extends $tea.Model {
  comment?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'comment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperateJobResponseBody extends $tea.Model {
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

export class OperateJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OperateJobResponseBody;
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
      body: OperateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveResourceExportTaskVersionResponseBody extends $tea.Model {
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

export class RemoveResourceExportTaskVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveResourceExportTaskVersionResponseBody;
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
      body: RemoveResourceExportTaskVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationAttributeRequest extends $tea.Model {
  dueTime?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'dueTime',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAuthorizationAttributeResponseBody extends $tea.Model {
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

export class UpdateAuthorizationAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateAuthorizationAttributeResponseBody;
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
      body: UpdateAuthorizationAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBody extends $tea.Model {
  group?: UpdateGroupResponseBodyGroup;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'group',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: UpdateGroupResponseBodyGroup,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateGroupResponseBody;
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
      body: UpdateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleAttributeRequest extends $tea.Model {
  description?: string;
  name?: string;
  source?: string;
  sourcePath?: string;
  statePath?: string;
  versionStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
      versionStrategy: 'versionStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
      versionStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleAttributeResponseBody extends $tea.Model {
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

export class UpdateModuleAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateModuleAttributeResponseBody;
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
      body: UpdateModuleAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleMarketAttributeRequest extends $tea.Model {
  description?: string;
  moduleDetail?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      moduleDetail: 'moduleDetail',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      moduleDetail: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateModuleMarketAttributeResponseBody extends $tea.Model {
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

export class UpdateModuleMarketAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateModuleMarketAttributeResponseBody;
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
      body: UpdateModuleMarketAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterSetAttributeRequest extends $tea.Model {
  description?: string;
  name?: string;
  parameters?: UpdateParameterSetAttributeRequestParameters[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parameters: { 'type': 'array', 'itemType': UpdateParameterSetAttributeRequestParameters },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterSetAttributeResponseBody extends $tea.Model {
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

export class UpdateParameterSetAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateParameterSetAttributeResponseBody;
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
      body: UpdateParameterSetAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
  project?: UpdateProjectResponseBodyProject;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'project',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: UpdateProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateProjectResponseBody;
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
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRabbitmqPublisherAttributeRequest extends $tea.Model {
  description?: string;
  exchangeName?: string;
  exchangeType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      exchangeName: 'exchangeName',
      exchangeType: 'exchangeType',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      exchangeName: 'string',
      exchangeType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRabbitmqPublisherAttributeResponseBody extends $tea.Model {
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

export class UpdateRabbitmqPublisherAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateRabbitmqPublisherAttributeResponseBody;
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
      body: UpdateRabbitmqPublisherAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeRequest extends $tea.Model {
  clientToken?: string;
  description?: string;
  excludeRules?: UpdateResourceExportTaskAttributeRequestExcludeRules[];
  exportToModule?: UpdateResourceExportTaskAttributeRequestExportToModule;
  includeRules?: UpdateResourceExportTaskAttributeRequestIncludeRules[];
  name?: string;
  ramRole?: string;
  terraformVersion?: string;
  triggerStrategy?: string;
  variables?: UpdateResourceExportTaskAttributeRequestVariables[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      excludeRules: 'excludeRules',
      exportToModule: 'exportToModule',
      includeRules: 'includeRules',
      name: 'name',
      ramRole: 'ramRole',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      excludeRules: { 'type': 'array', 'itemType': UpdateResourceExportTaskAttributeRequestExcludeRules },
      exportToModule: UpdateResourceExportTaskAttributeRequestExportToModule,
      includeRules: { 'type': 'array', 'itemType': UpdateResourceExportTaskAttributeRequestIncludeRules },
      name: 'string',
      ramRole: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      variables: { 'type': 'array', 'itemType': UpdateResourceExportTaskAttributeRequestVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeResponseBody extends $tea.Model {
  exportTaskId?: string;
  exportVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportTaskId: 'exportTaskId',
      exportVersion: 'exportVersion',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskId: 'string',
      exportVersion: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateResourceExportTaskAttributeResponseBody;
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
      body: UpdateResourceExportTaskAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAttributeRequest extends $tea.Model {
  autoApply?: boolean;
  groupInfo?: UpdateTaskAttributeRequestGroupInfo;
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  parameters?: { [key: string]: string };
  protectionStrategy?: string[];
  ramRole?: string;
  terraformVersion?: string;
  triggerStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      groupInfo: 'groupInfo',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      parameters: 'parameters',
      protectionStrategy: 'protectionStrategy',
      ramRole: 'ramRole',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      groupInfo: UpdateTaskAttributeRequestGroupInfo,
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      protectionStrategy: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAttributeResponseBody extends $tea.Model {
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

export class UpdateTaskAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTaskAttributeResponseBody;
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
      body: UpdateTaskAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateParameterSetRequestParameters extends $tea.Model {
  name?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectBuildRequestTaskPolicies extends $tea.Model {
  destroyAfterExecution?: boolean;
  priority?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      destroyAfterExecution: 'destroyAfterExecution',
      priority: 'priority',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destroyAfterExecution: 'boolean',
      priority: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequestExcludeRules extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequestExportToModule extends $tea.Model {
  source?: string;
  sourcePath?: string;
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequestIncludeRules extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceExportTaskRequestVariables extends $tea.Model {
  properties?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskRequestGroupInfo extends $tea.Model {
  groupId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyGroup extends $tea.Model {
  createTime?: string;
  description?: string;
  id?: string;
  name?: string;
  projectId?: string;
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      id: 'id',
      name: 'name',
      projectId: 'projectId',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      projectId: 'string',
      taskCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJobConfig extends $tea.Model {
  autoApply?: boolean;
  isDestroy?: boolean;
  moduleVersion?: string;
  resourcesChanged?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      isDestroy: 'isDestroy',
      moduleVersion: 'moduleVersion',
      resourcesChanged: 'resourcesChanged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      isDestroy: 'boolean',
      moduleVersion: 'string',
      resourcesChanged: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyJob extends $tea.Model {
  config?: GetJobResponseBodyJobConfig;
  createTime?: string;
  description?: string;
  jobId?: string;
  output?: string;
  parameters?: { [key: string]: string };
  runtimeType?: string;
  status?: string;
  statusDetail?: { [key: string]: JobStatusDetailValue };
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createTime: 'createTime',
      description: 'description',
      jobId: 'jobId',
      output: 'output',
      parameters: 'parameters',
      runtimeType: 'runtimeType',
      status: 'status',
      statusDetail: 'statusDetail',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: GetJobResponseBodyJobConfig,
      createTime: 'string',
      description: 'string',
      jobId: 'string',
      output: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      runtimeType: 'string',
      status: 'string',
      statusDetail: { 'type': 'map', 'keyType': 'string', 'valueType': JobStatusDetailValue },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleResponseBodyModule extends $tea.Model {
  createTime?: string;
  description?: string;
  latestVersion?: string;
  moduleId?: string;
  name?: string;
  outputPath?: string;
  source?: string;
  sourcePath?: string;
  statePath?: string;
  status?: string;
  versionStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      latestVersion: 'latestVersion',
      moduleId: 'moduleId',
      name: 'name',
      outputPath: 'outputPath',
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
      status: 'status',
      versionStrategy: 'versionStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      latestVersion: 'string',
      moduleId: 'string',
      name: 'string',
      outputPath: 'string',
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
      status: 'string',
      versionStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleMarketResponseBodyModuleMarket extends $tea.Model {
  description?: string;
  message?: string;
  moduleDetail?: string;
  moduleId?: string;
  moduleMarketId?: string;
  moduleVersion?: string;
  name?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      message: 'message',
      moduleDetail: 'moduleDetail',
      moduleId: 'moduleId',
      moduleMarketId: 'moduleMarketId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      message: 'string',
      moduleDetail: 'string',
      moduleId: 'string',
      moduleMarketId: 'string',
      moduleVersion: 'string',
      name: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleVersionResponseBodyVersion extends $tea.Model {
  createTime?: string;
  description?: string;
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  source?: string;
  sourcePath?: string;
  statePath?: string;
  terraformContext?: { [key: string]: any };
  versionStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
      terraformContext: 'terraformContext',
      versionStrategy: 'versionStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
      terraformContext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      versionStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterSetResponseBodyParameterSetParameters extends $tea.Model {
  name?: string;
  type?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterSetResponseBodyParameterSetRelationList extends $tea.Model {
  createTime?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetParameterSetResponseBodyParameterSet extends $tea.Model {
  createTime?: string;
  description?: string;
  name?: string;
  parameterSetId?: string;
  parameters?: GetParameterSetResponseBodyParameterSetParameters[];
  relationList?: GetParameterSetResponseBodyParameterSetRelationList[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      parameterSetId: 'parameterSetId',
      parameters: 'parameters',
      relationList: 'relationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      parameterSetId: 'string',
      parameters: { 'type': 'array', 'itemType': GetParameterSetResponseBodyParameterSetParameters },
      relationList: { 'type': 'array', 'itemType': GetParameterSetResponseBodyParameterSetRelationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBodyProject extends $tea.Model {
  createTime?: string;
  description?: string;
  id?: string;
  name?: string;
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      id: 'id',
      name: 'name',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      taskCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildConfigResponseBodyProjectBuildConfig extends $tea.Model {
  taskPolicies?: { [key: string]: ProjectBuildConfigTaskPoliciesValue };
  static names(): { [key: string]: string } {
    return {
      taskPolicies: 'taskPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskPolicies: { 'type': 'map', 'keyType': 'string', 'valueType': ProjectBuildConfigTaskPoliciesValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildContextResponseBodyProjectBuildJobList extends $tea.Model {
  isDeleted?: number;
  jobId?: string;
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      isDeleted: 'isDeleted',
      jobId: 'jobId',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDeleted: 'number',
      jobId: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildContextResponseBodyProjectBuildResourceList extends $tea.Model {
  info?: { [key: string]: string };
  resourceCnt?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'info',
      resourceCnt: 'resourceCnt',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      resourceCnt: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectBuildContextResponseBodyProjectBuild extends $tea.Model {
  endTime?: string;
  failCnt?: number;
  jobList?: GetProjectBuildContextResponseBodyProjectBuildJobList[];
  jobTotalCnt?: number;
  projectBuildId?: string;
  projectId?: string;
  resourceCnt?: number;
  resourceList?: GetProjectBuildContextResponseBodyProjectBuildResourceList[];
  resourceTypeCnt?: number;
  status?: string;
  successCnt?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      failCnt: 'failCnt',
      jobList: 'jobList',
      jobTotalCnt: 'jobTotalCnt',
      projectBuildId: 'projectBuildId',
      projectId: 'projectId',
      resourceCnt: 'resourceCnt',
      resourceList: 'resourceList',
      resourceTypeCnt: 'resourceTypeCnt',
      status: 'status',
      successCnt: 'successCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      failCnt: 'number',
      jobList: { 'type': 'array', 'itemType': GetProjectBuildContextResponseBodyProjectBuildJobList },
      jobTotalCnt: 'number',
      projectBuildId: 'string',
      projectId: 'string',
      resourceCnt: 'number',
      resourceList: { 'type': 'array', 'itemType': GetProjectBuildContextResponseBodyProjectBuildResourceList },
      resourceTypeCnt: 'number',
      status: 'string',
      successCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectJobSummaryResponseBodyJobSummaryDetail extends $tea.Model {
  failCnt?: number;
  runningCnt?: number;
  successCnt?: number;
  taskId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      failCnt: 'failCnt',
      runningCnt: 'runningCnt',
      successCnt: 'successCnt',
      taskId: 'taskId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCnt: 'number',
      runningCnt: 'number',
      successCnt: 'number',
      taskId: 'string',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectJobSummaryResponseBodyJobSummary extends $tea.Model {
  detail?: GetProjectJobSummaryResponseBodyJobSummaryDetail[];
  failCnt?: number;
  runningCnt?: number;
  successCnt?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      failCnt: 'failCnt',
      runningCnt: 'runningCnt',
      successCnt: 'successCnt',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': GetProjectJobSummaryResponseBodyJobSummaryDetail },
      failCnt: 'number',
      runningCnt: 'number',
      successCnt: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResourceSummaryResponseBodyResourceSummaryDetail extends $tea.Model {
  resourceCnt?: number;
  resourceType?: string;
  taskIds?: string[];
  static names(): { [key: string]: string } {
    return {
      resourceCnt: 'resourceCnt',
      resourceType: 'resourceType',
      taskIds: 'taskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCnt: 'number',
      resourceType: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResourceSummaryResponseBodyResourceSummary extends $tea.Model {
  detail?: GetProjectResourceSummaryResponseBodyResourceSummaryDetail[];
  resourceCnt?: number;
  resourceTypeCnt?: number;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      resourceCnt: 'resourceCnt',
      resourceTypeCnt: 'resourceTypeCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': GetProjectResourceSummaryResponseBodyResourceSummaryDetail },
      resourceCnt: 'number',
      resourceTypeCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRabbitmqPublisherResponseBodyPublisher extends $tea.Model {
  createTime?: string;
  description?: string;
  exchangeName?: string;
  exchangeType?: string;
  hostName?: string;
  name?: string;
  port?: number;
  publisherId?: string;
  taskIds?: string[];
  userName?: string;
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      exchangeName: 'exchangeName',
      exchangeType: 'exchangeType',
      hostName: 'hostName',
      name: 'name',
      port: 'port',
      publisherId: 'publisherId',
      taskIds: 'taskIds',
      userName: 'userName',
      virtualHost: 'virtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      exchangeName: 'string',
      exchangeType: 'string',
      hostName: 'string',
      name: 'string',
      port: 'number',
      publisherId: 'string',
      taskIds: { 'type': 'array', 'itemType': 'string' },
      userName: 'string',
      virtualHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskExcludeRules extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskExportToModule extends $tea.Model {
  source?: string;
  sourcePath?: string;
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskIncludeRules extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskModules extends $tea.Model {
  source?: string;
  sourcePath?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTaskVariables extends $tea.Model {
  properties?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceExportTaskResponseBodyTask extends $tea.Model {
  createTime?: string;
  description?: string;
  excludeRules?: GetResourceExportTaskResponseBodyTaskExcludeRules[];
  exportTaskId?: string;
  exportToModule?: GetResourceExportTaskResponseBodyTaskExportToModule;
  exportVersion?: string;
  failedReason?: string;
  includeRules?: GetResourceExportTaskResponseBodyTaskIncludeRules[];
  modules?: GetResourceExportTaskResponseBodyTaskModules[];
  name?: string;
  ramRole?: string;
  status?: string;
  taskOutputPath?: string;
  terraformVersion?: string;
  triggerStrategy?: string;
  variables?: GetResourceExportTaskResponseBodyTaskVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      excludeRules: 'excludeRules',
      exportTaskId: 'exportTaskId',
      exportToModule: 'exportToModule',
      exportVersion: 'exportVersion',
      failedReason: 'failedReason',
      includeRules: 'includeRules',
      modules: 'modules',
      name: 'name',
      ramRole: 'ramRole',
      status: 'status',
      taskOutputPath: 'taskOutputPath',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      excludeRules: { 'type': 'array', 'itemType': GetResourceExportTaskResponseBodyTaskExcludeRules },
      exportTaskId: 'string',
      exportToModule: GetResourceExportTaskResponseBodyTaskExportToModule,
      exportVersion: 'string',
      failedReason: 'string',
      includeRules: { 'type': 'array', 'itemType': GetResourceExportTaskResponseBodyTaskIncludeRules },
      modules: { 'type': 'array', 'itemType': GetResourceExportTaskResponseBodyTaskModules },
      name: 'string',
      ramRole: 'string',
      status: 'string',
      taskOutputPath: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
      variables: { 'type': 'array', 'itemType': GetResourceExportTaskResponseBodyTaskVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTaskGroupInfo extends $tea.Model {
  groupId?: string;
  groupName?: string;
  projectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      groupName: 'groupName',
      projectId: 'projectId',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBodyTask extends $tea.Model {
  autoApply?: boolean;
  createTime?: string;
  currentJobId?: string;
  groupInfo?: GetTaskResponseBodyTaskGroupInfo;
  meta?: { [key: string]: string };
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  parameters?: { [key: string]: string };
  protectionStrategy?: string[];
  ramRole?: string;
  status?: string;
  taskId?: string;
  taskOutputPath?: string;
  terraformVersion?: string;
  triggerStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      createTime: 'createTime',
      currentJobId: 'currentJobId',
      groupInfo: 'groupInfo',
      meta: 'meta',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      parameters: 'parameters',
      protectionStrategy: 'protectionStrategy',
      ramRole: 'ramRole',
      status: 'status',
      taskId: 'taskId',
      taskOutputPath: 'taskOutputPath',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      createTime: 'string',
      currentJobId: 'string',
      groupInfo: GetTaskResponseBodyTaskGroupInfo,
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      protectionStrategy: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      status: 'string',
      taskId: 'string',
      taskOutputPath: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskContextResponseBodyTaskJobConfig extends $tea.Model {
  isDestroy?: boolean;
  jobModuleVersion?: string;
  resourcesChanged?: string;
  static names(): { [key: string]: string } {
    return {
      isDestroy: 'isDestroy',
      jobModuleVersion: 'jobModuleVersion',
      resourcesChanged: 'resourcesChanged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDestroy: 'boolean',
      jobModuleVersion: 'string',
      resourcesChanged: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskContextResponseBodyTask extends $tea.Model {
  autoApply?: boolean;
  jobConfig?: GetTaskContextResponseBodyTaskJobConfig;
  jobDescription?: string;
  jobGmtCreate?: string;
  jobId?: string;
  jobStatus?: string;
  moduleId?: string;
  modulePath?: string;
  moduleVersion?: string;
  parameters?: { [key: string]: string };
  ramRole?: string;
  resourceCount?: number;
  taskGmtCreate?: string;
  taskId?: string;
  taskName?: string;
  taskOutputPath?: string;
  taskStatus?: string;
  terraformVersion?: string;
  triggerStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      autoApply: 'autoApply',
      jobConfig: 'jobConfig',
      jobDescription: 'jobDescription',
      jobGmtCreate: 'jobGmtCreate',
      jobId: 'jobId',
      jobStatus: 'jobStatus',
      moduleId: 'moduleId',
      modulePath: 'modulePath',
      moduleVersion: 'moduleVersion',
      parameters: 'parameters',
      ramRole: 'ramRole',
      resourceCount: 'resourceCount',
      taskGmtCreate: 'taskGmtCreate',
      taskId: 'taskId',
      taskName: 'taskName',
      taskOutputPath: 'taskOutputPath',
      taskStatus: 'taskStatus',
      terraformVersion: 'terraformVersion',
      triggerStrategy: 'triggerStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApply: 'boolean',
      jobConfig: GetTaskContextResponseBodyTaskJobConfig,
      jobDescription: 'string',
      jobGmtCreate: 'string',
      jobId: 'string',
      jobStatus: 'string',
      moduleId: 'string',
      modulePath: 'string',
      moduleVersion: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ramRole: 'string',
      resourceCount: 'number',
      taskGmtCreate: 'string',
      taskId: 'string',
      taskName: 'string',
      taskOutputPath: 'string',
      taskStatus: 'string',
      terraformVersion: 'string',
      triggerStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuthorizationsResponseBodyAuthorizations extends $tea.Model {
  authorizationId?: string;
  createTime?: string;
  dueTime?: string;
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  ownerUid?: number;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'authorizationId',
      createTime: 'createTime',
      dueTime: 'dueTime',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      ownerUid: 'ownerUid',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'string',
      createTime: 'string',
      dueTime: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      ownerUid: 'number',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupResponseBodyGroups extends $tea.Model {
  createTime?: string;
  description?: string;
  id?: string;
  isDefault?: boolean;
  name?: string;
  projectId?: string;
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      id: 'id',
      isDefault: 'isDefault',
      name: 'name',
      projectId: 'projectId',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      id: 'string',
      isDefault: 'boolean',
      name: 'string',
      projectId: 'string',
      taskCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsConfig extends $tea.Model {
  moduleVersion?: string;
  resourcesChanged?: string;
  static names(): { [key: string]: string } {
    return {
      moduleVersion: 'moduleVersion',
      resourcesChanged: 'resourcesChanged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleVersion: 'string',
      resourcesChanged: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $tea.Model {
  config?: ListJobsResponseBodyJobsConfig;
  createTime?: string;
  description?: string;
  jobId?: string;
  status?: string;
  statusDetail?: { [key: string]: JobsStatusDetailValue };
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createTime: 'createTime',
      description: 'description',
      jobId: 'jobId',
      status: 'status',
      statusDetail: 'statusDetail',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListJobsResponseBodyJobsConfig,
      createTime: 'string',
      description: 'string',
      jobId: 'string',
      status: 'string',
      statusDetail: { 'type': 'map', 'keyType': 'string', 'valueType': JobsStatusDetailValue },
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleMarketsResponseBodyModuleMarkets extends $tea.Model {
  cloneCount?: number;
  codeUrl?: string;
  config?: { [key: string]: string };
  description?: string;
  message?: string;
  moduleDetail?: string;
  moduleId?: string;
  moduleMarketId?: string;
  moduleVersion?: string;
  name?: string;
  relatedId?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cloneCount: 'cloneCount',
      codeUrl: 'codeUrl',
      config: 'config',
      description: 'description',
      message: 'message',
      moduleDetail: 'moduleDetail',
      moduleId: 'moduleId',
      moduleMarketId: 'moduleMarketId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      relatedId: 'relatedId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneCount: 'number',
      codeUrl: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      description: 'string',
      message: 'string',
      moduleDetail: 'string',
      moduleId: 'string',
      moduleMarketId: 'string',
      moduleVersion: 'string',
      name: 'string',
      relatedId: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModuleVersionResponseBodyVersions extends $tea.Model {
  createTime?: string;
  description?: string;
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  sourcePath?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      sourcePath: 'sourcePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      sourcePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListModulesResponseBodyModules extends $tea.Model {
  createTime?: string;
  deletionProtection?: boolean;
  description?: string;
  latestVersion?: string;
  meta?: { [key: string]: any };
  moduleId?: string;
  name?: string;
  source?: string;
  sourceConfig?: { [key: string]: any };
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      deletionProtection: 'deletionProtection',
      description: 'description',
      latestVersion: 'latestVersion',
      meta: 'meta',
      moduleId: 'moduleId',
      name: 'name',
      source: 'source',
      sourceConfig: 'sourceConfig',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      deletionProtection: 'boolean',
      description: 'string',
      latestVersion: 'string',
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      moduleId: 'string',
      name: 'string',
      source: 'string',
      sourceConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetRelationResponseBodyParameterSets extends $tea.Model {
  createTime?: string;
  description?: string;
  name?: string;
  parameterSetId?: string;
  parameters?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      parameterSetId: 'parameterSetId',
      parameters: 'parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      parameterSetId: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponseBodyParameterSetsParameters extends $tea.Model {
  name?: string;
  type?: string;
  value?: any;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'any',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponseBodyParameterSetsRelationList extends $tea.Model {
  createTime?: string;
  resourceId?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListParameterSetsResponseBodyParameterSets extends $tea.Model {
  createTime?: string;
  description?: string;
  name?: string;
  parameterSetId?: string;
  parameters?: ListParameterSetsResponseBodyParameterSetsParameters[];
  relationList?: ListParameterSetsResponseBodyParameterSetsRelationList[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      name: 'name',
      parameterSetId: 'parameterSetId',
      parameters: 'parameters',
      relationList: 'relationList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      parameterSetId: 'string',
      parameters: { 'type': 'array', 'itemType': ListParameterSetsResponseBodyParameterSetsParameters },
      relationList: { 'type': 'array', 'itemType': ListParameterSetsResponseBodyParameterSetsRelationList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectResponseBodyProjects extends $tea.Model {
  createTime?: string;
  description?: string;
  id?: string;
  name?: string;
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      id: 'id',
      name: 'name',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      taskCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectBuildsResponseBodyProjectBuilds extends $tea.Model {
  createTime?: string;
  projectBuildAction?: string;
  projectBuildId?: string;
  projectBuildIndex?: number;
  projectId?: string;
  status?: string;
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      projectBuildAction: 'projectBuildAction',
      projectBuildId: 'projectBuildId',
      projectBuildIndex: 'projectBuildIndex',
      projectId: 'projectId',
      status: 'status',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      projectBuildAction: 'string',
      projectBuildId: 'string',
      projectBuildIndex: 'number',
      projectId: 'string',
      status: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRabbitmqPublishersResponseBodyAuthorizations extends $tea.Model {
  createTime?: string;
  description?: string;
  exchangeName?: string;
  exchangeType?: string;
  hostName?: string;
  name?: string;
  port?: number;
  publisherId?: string;
  userName?: string;
  virtualHost?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      exchangeName: 'exchangeName',
      exchangeType: 'exchangeType',
      hostName: 'hostName',
      name: 'name',
      port: 'port',
      publisherId: 'publisherId',
      userName: 'userName',
      virtualHost: 'virtualHost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      exchangeName: 'string',
      exchangeType: 'string',
      hostName: 'string',
      name: 'string',
      port: 'number',
      publisherId: 'string',
      userName: 'string',
      virtualHost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRelationModulesResponseBodyModules extends $tea.Model {
  latestVersion?: string;
  moduleId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      latestVersion: 'latestVersion',
      moduleId: 'moduleId',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestVersion: 'string',
      moduleId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRelationTasksResponseBodyTasks extends $tea.Model {
  createTime?: string;
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasksExcludeRules extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule extends $tea.Model {
  source?: string;
  sourcePath?: string;
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasksModules extends $tea.Model {
  source?: string;
  sourcePath?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasksVariables extends $tea.Model {
  properties?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTaskVersionsResponseBodyExportTasks extends $tea.Model {
  createTime?: string;
  description?: string;
  excludeRules?: ListResourceExportTaskVersionsResponseBodyExportTasksExcludeRules[];
  exportTaskId?: string;
  exportToModule?: ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule;
  exportVersion?: string;
  failedReason?: string;
  hasDestroy?: boolean;
  includeRules?: ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules[];
  modules?: ListResourceExportTaskVersionsResponseBodyExportTasksModules[];
  name?: string;
  status?: string;
  variables?: ListResourceExportTaskVersionsResponseBodyExportTasksVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      excludeRules: 'excludeRules',
      exportTaskId: 'exportTaskId',
      exportToModule: 'exportToModule',
      exportVersion: 'exportVersion',
      failedReason: 'failedReason',
      hasDestroy: 'hasDestroy',
      includeRules: 'includeRules',
      modules: 'modules',
      name: 'name',
      status: 'status',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      excludeRules: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasksExcludeRules },
      exportTaskId: 'string',
      exportToModule: ListResourceExportTaskVersionsResponseBodyExportTasksExportToModule,
      exportVersion: 'string',
      failedReason: 'string',
      hasDestroy: 'boolean',
      includeRules: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasksIncludeRules },
      modules: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasksModules },
      name: 'string',
      status: 'string',
      variables: { 'type': 'array', 'itemType': ListResourceExportTaskVersionsResponseBodyExportTasksVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasksExcludeRules extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasksExportToModule extends $tea.Model {
  source?: string;
  sourcePath?: string;
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasksIncludeRules extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasksModules extends $tea.Model {
  source?: string;
  sourcePath?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasksVariables extends $tea.Model {
  properties?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceExportTasksResponseBodyExportTasks extends $tea.Model {
  createTime?: string;
  description?: string;
  excludeRules?: ListResourceExportTasksResponseBodyExportTasksExcludeRules[];
  exportTaskId?: string;
  exportToModule?: ListResourceExportTasksResponseBodyExportTasksExportToModule;
  exportVersion?: string;
  hasDestroy?: boolean;
  includeRules?: ListResourceExportTasksResponseBodyExportTasksIncludeRules[];
  modules?: ListResourceExportTasksResponseBodyExportTasksModules[];
  name?: string;
  status?: string;
  variables?: ListResourceExportTasksResponseBodyExportTasksVariables[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      excludeRules: 'excludeRules',
      exportTaskId: 'exportTaskId',
      exportToModule: 'exportToModule',
      exportVersion: 'exportVersion',
      hasDestroy: 'hasDestroy',
      includeRules: 'includeRules',
      modules: 'modules',
      name: 'name',
      status: 'status',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      excludeRules: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasksExcludeRules },
      exportTaskId: 'string',
      exportToModule: ListResourceExportTasksResponseBodyExportTasksExportToModule,
      exportVersion: 'string',
      hasDestroy: 'boolean',
      includeRules: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasksIncludeRules },
      modules: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasksModules },
      name: 'string',
      status: 'string',
      variables: { 'type': 'array', 'itemType': ListResourceExportTasksResponseBodyExportTasksVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyResourcesTags extends $tea.Model {
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

export class ListResourcesResponseBodyResources extends $tea.Model {
  accountId?: string;
  createTime?: string;
  dependsOnResourceIds?: string[];
  productCode?: string;
  properties?: { [key: string]: any };
  propertyVariables?: { [key: string]: any };
  regionId?: string;
  resourceArn?: string;
  resourceGroupId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  status?: string;
  tags?: ListResourcesResponseBodyResourcesTags[];
  terraformArn?: string;
  terraformCode?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      createTime: 'createTime',
      dependsOnResourceIds: 'dependsOnResourceIds',
      productCode: 'productCode',
      properties: 'properties',
      propertyVariables: 'propertyVariables',
      regionId: 'regionId',
      resourceArn: 'resourceArn',
      resourceGroupId: 'resourceGroupId',
      resourceId: 'resourceId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      status: 'status',
      tags: 'tags',
      terraformArn: 'terraformArn',
      terraformCode: 'terraformCode',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      createTime: 'string',
      dependsOnResourceIds: { 'type': 'array', 'itemType': 'string' },
      productCode: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      propertyVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      resourceArn: 'string',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListResourcesResponseBodyResourcesTags },
      terraformArn: 'string',
      terraformCode: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaskResourceResponseBodyResources extends $tea.Model {
  instanceAttribute?: string;
  instanceId?: string;
  jobId?: string;
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceAttribute: 'instanceAttribute',
      instanceId: 'instanceId',
      jobId: 'jobId',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceAttribute: 'string',
      instanceId: 'string',
      jobId: 'string',
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTasksGroupInfo extends $tea.Model {
  groupId?: string;
  groupName?: string;
  projectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      groupName: 'groupName',
      projectId: 'projectId',
      projectName: 'projectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      groupName: 'string',
      projectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTasks extends $tea.Model {
  createTime?: string;
  currentJobId?: string;
  currentJobStatus?: string;
  groupInfo?: ListTasksResponseBodyTasksGroupInfo;
  hasDestroy?: boolean;
  moduleId?: string;
  moduleVersion?: string;
  name?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      currentJobId: 'currentJobId',
      currentJobStatus: 'currentJobStatus',
      groupInfo: 'groupInfo',
      hasDestroy: 'hasDestroy',
      moduleId: 'moduleId',
      moduleVersion: 'moduleVersion',
      name: 'name',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      currentJobId: 'string',
      currentJobStatus: 'string',
      groupInfo: ListTasksResponseBodyTasksGroupInfo,
      hasDestroy: 'boolean',
      moduleId: 'string',
      moduleVersion: 'string',
      name: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGroupResponseBodyGroup extends $tea.Model {
  createTime?: string;
  description?: string;
  id?: string;
  name?: string;
  projectId?: string;
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      id: 'id',
      name: 'name',
      projectId: 'projectId',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      projectId: 'string',
      taskCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateParameterSetAttributeRequestParameters extends $tea.Model {
  name?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBodyProject extends $tea.Model {
  createTime?: string;
  description?: string;
  groupCnt?: number;
  id?: string;
  name?: string;
  taskCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      groupCnt: 'groupCnt',
      id: 'id',
      name: 'name',
      taskCnt: 'taskCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      groupCnt: 'number',
      id: 'string',
      name: 'string',
      taskCnt: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeRequestExcludeRules extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeRequestExportToModule extends $tea.Model {
  source?: string;
  sourcePath?: string;
  statePath?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      sourcePath: 'sourcePath',
      statePath: 'statePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      sourcePath: 'string',
      statePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeRequestIncludeRules extends $tea.Model {
  key?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceExportTaskAttributeRequestVariables extends $tea.Model {
  properties?: string[];
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      properties: 'properties',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      properties: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTaskAttributeRequestGroupInfo extends $tea.Model {
  groupId?: string;
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      projectId: 'string',
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
    this._endpoint = this.getEndpoint("iacservice", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async associateParameterSet(request: AssociateParameterSetRequest): Promise<AssociateParameterSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.associateParameterSetWithOptions(request, headers, runtime);
  }

  async associateParameterSetWithOptions(request: AssociateParameterSetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AssociateParameterSetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.parameterSetIds)) {
      body["parameterSetIds"] = request.parameterSetIds;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AssociateParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/operations/associate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AssociateParameterSetResponse>(await this.callApi(params, req, runtime), new AssociateParameterSetResponse({}));
  }

  async associateTaskGroup(projectId: string, groupId: string, request: AssociateTaskGroupRequest): Promise<AssociateTaskGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.associateTaskGroupWithOptions(projectId, groupId, request, headers, runtime);
  }

  async associateTaskGroupWithOptions(projectId: string, groupId: string, request: AssociateTaskGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AssociateTaskGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskIds)) {
      body["taskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AssociateTaskGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${OpenApiUtil.getEncodeParam(projectId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}/associate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AssociateTaskGroupResponse>(await this.callApi(params, req, runtime), new AssociateTaskGroupResponse({}));
  }

  async attachRabbitmqPublisher(publisherId: string, request: AttachRabbitmqPublisherRequest): Promise<AttachRabbitmqPublisherResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.attachRabbitmqPublisherWithOptions(publisherId, request, headers, runtime);
  }

  async attachRabbitmqPublisherWithOptions(publisherId: string, request: AttachRabbitmqPublisherRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AttachRabbitmqPublisherResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachRabbitmqPublisher",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers/${OpenApiUtil.getEncodeParam(publisherId)}/attach`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AttachRabbitmqPublisherResponse>(await this.callApi(params, req, runtime), new AttachRabbitmqPublisherResponse({}));
  }

  async cancelResourceExportTask(exportTaskId: string, request: CancelResourceExportTaskRequest): Promise<CancelResourceExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  async cancelResourceExportTaskWithOptions(exportTaskId: string, request: CancelResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CancelResourceExportTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/cancel/${OpenApiUtil.getEncodeParam(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CancelResourceExportTaskResponse>(await this.callApi(params, req, runtime), new CancelResourceExportTaskResponse({}));
  }

  async cloneModule(request: CloneModuleRequest): Promise<CloneModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneModuleWithOptions(request, headers, runtime);
  }

  async cloneModuleWithOptions(request: CloneModuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneModuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.moduleSource)) {
      body["moduleSource"] = request.moduleSource;
    }

    if (!Util.isUnset(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CloneModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/operations/clone`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloneModuleResponse>(await this.callApi(params, req, runtime), new CloneModuleResponse({}));
  }

  async createAuthorization(request: CreateAuthorizationRequest): Promise<CreateAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAuthorizationWithOptions(request, headers, runtime);
  }

  async createAuthorizationWithOptions(request: CreateAuthorizationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAuthorizationResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!Util.isUnset(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.uid)) {
      body["uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAuthorization",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/authorizations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAuthorizationResponse>(await this.callApi(params, req, runtime), new CreateAuthorizationResponse({}));
  }

  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGroupWithOptions(request, headers, runtime);
  }

  async createGroupWithOptions(request: CreateGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["projectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupResponse>(await this.callApi(params, req, runtime), new CreateGroupResponse({}));
  }

  async createJob(taskId: string, request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobWithOptions(taskId, request, headers, runtime);
  }

  async createJobWithOptions(taskId: string, request: CreateJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.subCommand)) {
      body["subCommand"] = request.subCommand;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateJobResponse>(await this.callApi(params, req, runtime), new CreateJobResponse({}));
  }

  async createModule(request: CreateModuleRequest): Promise<CreateModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModuleWithOptions(request, headers, runtime);
  }

  async createModuleWithOptions(request: CreateModuleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateModuleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.source)) {
      body["source"] = request.source;
    }

    if (!Util.isUnset(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    if (!Util.isUnset(request.statePath)) {
      body["statePath"] = request.statePath;
    }

    if (!Util.isUnset(request.versionStrategy)) {
      body["versionStrategy"] = request.versionStrategy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateModuleResponse>(await this.callApi(params, req, runtime), new CreateModuleResponse({}));
  }

  async createModuleMarket(request: CreateModuleMarketRequest): Promise<CreateModuleMarketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModuleMarketWithOptions(request, headers, runtime);
  }

  async createModuleMarketWithOptions(request: CreateModuleMarketRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateModuleMarketResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.codeUrl)) {
      body["codeUrl"] = request.codeUrl;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.moduleDetail)) {
      body["moduleDetail"] = request.moduleDetail;
    }

    if (!Util.isUnset(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateModuleMarket",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/moduleMarkets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateModuleMarketResponse>(await this.callApi(params, req, runtime), new CreateModuleMarketResponse({}));
  }

  async createModuleVersion(moduleId: string, request: CreateModuleVersionRequest): Promise<CreateModuleVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createModuleVersionWithOptions(moduleId, request, headers, runtime);
  }

  async createModuleVersionWithOptions(moduleId: string, request: CreateModuleVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateModuleVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${OpenApiUtil.getEncodeParam(moduleId)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateModuleVersionResponse>(await this.callApi(params, req, runtime), new CreateModuleVersionResponse({}));
  }

  async createParameterSet(request: CreateParameterSetRequest): Promise<CreateParameterSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createParameterSetWithOptions(request, headers, runtime);
  }

  async createParameterSetWithOptions(request: CreateParameterSetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateParameterSetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateParameterSetResponse>(await this.callApi(params, req, runtime), new CreateParameterSetResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProjectBuild(projectId: string, request: CreateProjectBuildRequest): Promise<CreateProjectBuildResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectBuildWithOptions(projectId, request, headers, runtime);
  }

  async createProjectBuildWithOptions(projectId: string, request: CreateProjectBuildRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateProjectBuildResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.projectBuildAction)) {
      body["projectBuildAction"] = request.projectBuildAction;
    }

    if (!Util.isUnset(request.taskIds)) {
      body["taskIds"] = request.taskIds;
    }

    if (!Util.isUnset(request.taskPolicies)) {
      body["taskPolicies"] = request.taskPolicies;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateProjectBuild",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${OpenApiUtil.getEncodeParam(projectId)}/build`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectBuildResponse>(await this.callApi(params, req, runtime), new CreateProjectBuildResponse({}));
  }

  async createRabbitmqPublisher(request: CreateRabbitmqPublisherRequest): Promise<CreateRabbitmqPublisherResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createRabbitmqPublisherWithOptions(request, headers, runtime);
  }

  async createRabbitmqPublisherWithOptions(request: CreateRabbitmqPublisherRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateRabbitmqPublisherResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.exchangeName)) {
      body["exchangeName"] = request.exchangeName;
    }

    if (!Util.isUnset(request.exchangeType)) {
      body["exchangeType"] = request.exchangeType;
    }

    if (!Util.isUnset(request.hostName)) {
      body["hostName"] = request.hostName;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.password)) {
      body["password"] = request.password;
    }

    if (!Util.isUnset(request.port)) {
      body["port"] = request.port;
    }

    if (!Util.isUnset(request.userName)) {
      body["userName"] = request.userName;
    }

    if (!Util.isUnset(request.virtualHost)) {
      body["virtualHost"] = request.virtualHost;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateRabbitmqPublisher",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateRabbitmqPublisherResponse>(await this.callApi(params, req, runtime), new CreateRabbitmqPublisherResponse({}));
  }

  async createResourceExportTask(request: CreateResourceExportTaskRequest): Promise<CreateResourceExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceExportTaskWithOptions(request, headers, runtime);
  }

  async createResourceExportTaskWithOptions(request: CreateResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceExportTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.excludeRules)) {
      body["excludeRules"] = request.excludeRules;
    }

    if (!Util.isUnset($tea.toMap(request.exportToModule))) {
      body["exportToModule"] = request.exportToModule;
    }

    if (!Util.isUnset(request.includeRules)) {
      body["includeRules"] = request.includeRules;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!Util.isUnset(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!Util.isUnset(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    if (!Util.isUnset(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceExportTaskResponse>(await this.callApi(params, req, runtime), new CreateResourceExportTaskResponse({}));
  }

  async createTask(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(request, headers, runtime);
  }

  async createTaskWithOptions(request: CreateTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoApply)) {
      body["autoApply"] = request.autoApply;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset($tea.toMap(request.groupInfo))) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!Util.isUnset(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.protectionStrategy)) {
      body["protectionStrategy"] = request.protectionStrategy;
    }

    if (!Util.isUnset(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!Util.isUnset(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!Util.isUnset(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
  }

  async deleteAuthorization(authorizationId: string): Promise<DeleteAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAuthorizationWithOptions(authorizationId, headers, runtime);
  }

  async deleteAuthorizationWithOptions(authorizationId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAuthorizationResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAuthorization",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/authorizations/${OpenApiUtil.getEncodeParam(authorizationId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAuthorizationResponse>(await this.callApi(params, req, runtime), new DeleteAuthorizationResponse({}));
  }

  async deleteGroup(id: string): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupWithOptions(id, headers, runtime);
  }

  async deleteGroupWithOptions(id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${OpenApiUtil.getEncodeParam(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupResponse>(await this.callApi(params, req, runtime), new DeleteGroupResponse({}));
  }

  async deleteModule(moduleId: string): Promise<DeleteModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteModuleWithOptions(moduleId, headers, runtime);
  }

  async deleteModuleWithOptions(moduleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteModuleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${OpenApiUtil.getEncodeParam(moduleId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteModuleResponse>(await this.callApi(params, req, runtime), new DeleteModuleResponse({}));
  }

  async deleteParameterSet(parameterSetId: string): Promise<DeleteParameterSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteParameterSetWithOptions(parameterSetId, headers, runtime);
  }

  async deleteParameterSetWithOptions(parameterSetId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteParameterSetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/${OpenApiUtil.getEncodeParam(parameterSetId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteParameterSetResponse>(await this.callApi(params, req, runtime), new DeleteParameterSetResponse({}));
  }

  async deleteProject(id: string): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(id, headers, runtime);
  }

  async deleteProjectWithOptions(id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${OpenApiUtil.getEncodeParam(id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  async deleteRabbitmqPublisher(publisherId: string): Promise<DeleteRabbitmqPublisherResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteRabbitmqPublisherWithOptions(publisherId, headers, runtime);
  }

  async deleteRabbitmqPublisherWithOptions(publisherId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteRabbitmqPublisherResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteRabbitmqPublisher",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers/${OpenApiUtil.getEncodeParam(publisherId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteRabbitmqPublisherResponse>(await this.callApi(params, req, runtime), new DeleteRabbitmqPublisherResponse({}));
  }

  async deleteResourceExportTask(exportTaskId: string): Promise<DeleteResourceExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceExportTaskWithOptions(exportTaskId, headers, runtime);
  }

  async deleteResourceExportTaskWithOptions(exportTaskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceExportTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${OpenApiUtil.getEncodeParam(exportTaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceExportTaskResponse>(await this.callApi(params, req, runtime), new DeleteResourceExportTaskResponse({}));
  }

  async deleteResourceLink(request: DeleteResourceLinkRequest): Promise<DeleteResourceLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceLinkWithOptions(request, headers, runtime);
  }

  async deleteResourceLinkWithOptions(request: DeleteResourceLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceLinkResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productCode)) {
      query["productCode"] = request.productCode;
    }

    if (!Util.isUnset(request.resourceTypeCode)) {
      query["resourceTypeCode"] = request.resourceTypeCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceLink",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/resources`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceLinkResponse>(await this.callApi(params, req, runtime), new DeleteResourceLinkResponse({}));
  }

  async deleteTask(taskId: string): Promise<DeleteTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTaskWithOptions(taskId, headers, runtime);
  }

  async deleteTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTaskResponse>(await this.callApi(params, req, runtime), new DeleteTaskResponse({}));
  }

  async detachRabbitmqPublisher(publisherId: string, request: DetachRabbitmqPublisherRequest): Promise<DetachRabbitmqPublisherResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.detachRabbitmqPublisherWithOptions(publisherId, request, headers, runtime);
  }

  async detachRabbitmqPublisherWithOptions(publisherId: string, request: DetachRabbitmqPublisherRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DetachRabbitmqPublisherResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      body["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetachRabbitmqPublisher",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers/${OpenApiUtil.getEncodeParam(publisherId)}/detach`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DetachRabbitmqPublisherResponse>(await this.callApi(params, req, runtime), new DetachRabbitmqPublisherResponse({}));
  }

  async dissociateParameterSet(request: DissociateParameterSetRequest): Promise<DissociateParameterSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dissociateParameterSetWithOptions(request, headers, runtime);
  }

  async dissociateParameterSetWithOptions(request: DissociateParameterSetRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DissociateParameterSetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.parameterSetIds)) {
      body["parameterSetIds"] = request.parameterSetIds;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["resourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["resourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DissociateParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/operations/dissociate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DissociateParameterSetResponse>(await this.callApi(params, req, runtime), new DissociateParameterSetResponse({}));
  }

  async dissociateTaskGroup(projectId: string, groupId: string, request: DissociateTaskGroupRequest): Promise<DissociateTaskGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.dissociateTaskGroupWithOptions(projectId, groupId, request, headers, runtime);
  }

  async dissociateTaskGroupWithOptions(projectId: string, groupId: string, request: DissociateTaskGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DissociateTaskGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskIds)) {
      body["taskIds"] = request.taskIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DissociateTaskGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${OpenApiUtil.getEncodeParam(projectId)}/groups/${OpenApiUtil.getEncodeParam(groupId)}/dissociate`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DissociateTaskGroupResponse>(await this.callApi(params, req, runtime), new DissociateTaskGroupResponse({}));
  }

  async executeResourceExportTask(exportTaskId: string, request: ExecuteResourceExportTaskRequest): Promise<ExecuteResourceExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.executeResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  async executeResourceExportTaskWithOptions(exportTaskId: string, request: ExecuteResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ExecuteResourceExportTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecuteResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/execute/${OpenApiUtil.getEncodeParam(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ExecuteResourceExportTaskResponse>(await this.callApi(params, req, runtime), new ExecuteResourceExportTaskResponse({}));
  }

  async getGroup(id: string): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupWithOptions(id, headers, runtime);
  }

  async getGroupWithOptions(id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${OpenApiUtil.getEncodeParam(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGroupResponse>(await this.callApi(params, req, runtime), new GetGroupResponse({}));
  }

  async getJob(taskId: string, jobId: string): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobWithOptions(taskId, jobId, headers, runtime);
  }

  async getJobWithOptions(taskId: string, jobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJobResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}/jobs/${OpenApiUtil.getEncodeParam(jobId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetJobResponse>(await this.callApi(params, req, runtime), new GetJobResponse({}));
  }

  async getModule(moduleId: string): Promise<GetModuleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModuleWithOptions(moduleId, headers, runtime);
  }

  async getModuleWithOptions(moduleId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetModuleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetModule",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${OpenApiUtil.getEncodeParam(moduleId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetModuleResponse>(await this.callApi(params, req, runtime), new GetModuleResponse({}));
  }

  async getModuleMarket(moduleMarketId: string): Promise<GetModuleMarketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModuleMarketWithOptions(moduleMarketId, headers, runtime);
  }

  async getModuleMarketWithOptions(moduleMarketId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetModuleMarketResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetModuleMarket",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/moduleMarkets/${OpenApiUtil.getEncodeParam(moduleMarketId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetModuleMarketResponse>(await this.callApi(params, req, runtime), new GetModuleMarketResponse({}));
  }

  async getModuleVersion(moduleId: string, moduleVersion: string): Promise<GetModuleVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getModuleVersionWithOptions(moduleId, moduleVersion, headers, runtime);
  }

  async getModuleVersionWithOptions(moduleId: string, moduleVersion: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetModuleVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${OpenApiUtil.getEncodeParam(moduleId)}/versions/${OpenApiUtil.getEncodeParam(moduleVersion)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetModuleVersionResponse>(await this.callApi(params, req, runtime), new GetModuleVersionResponse({}));
  }

  async getParameterSet(parameterSetId: string): Promise<GetParameterSetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getParameterSetWithOptions(parameterSetId, headers, runtime);
  }

  async getParameterSetWithOptions(parameterSetId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetParameterSetResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetParameterSet",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/${OpenApiUtil.getEncodeParam(parameterSetId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetParameterSetResponse>(await this.callApi(params, req, runtime), new GetParameterSetResponse({}));
  }

  async getProject(id: string): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(id, headers, runtime);
  }

  async getProjectWithOptions(id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${OpenApiUtil.getEncodeParam(id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  async getProjectBuildConfig(projectId: string, request: GetProjectBuildConfigRequest): Promise<GetProjectBuildConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectBuildConfigWithOptions(projectId, request, headers, runtime);
  }

  async getProjectBuildConfigWithOptions(projectId: string, request: GetProjectBuildConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectBuildConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectBuildId)) {
      query["projectBuildId"] = request.projectBuildId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProjectBuildConfig",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${OpenApiUtil.getEncodeParam(projectId)}/buildConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectBuildConfigResponse>(await this.callApi(params, req, runtime), new GetProjectBuildConfigResponse({}));
  }

  async getProjectBuildContext(projectId: string, projectBuildId: string): Promise<GetProjectBuildContextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectBuildContextWithOptions(projectId, projectBuildId, headers, runtime);
  }

  async getProjectBuildContextWithOptions(projectId: string, projectBuildId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectBuildContextResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProjectBuildContext",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${OpenApiUtil.getEncodeParam(projectId)}/build/${OpenApiUtil.getEncodeParam(projectBuildId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectBuildContextResponse>(await this.callApi(params, req, runtime), new GetProjectBuildContextResponse({}));
  }

  async getProjectJobSummary(projectId: string): Promise<GetProjectJobSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectJobSummaryWithOptions(projectId, headers, runtime);
  }

  async getProjectJobSummaryWithOptions(projectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectJobSummaryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProjectJobSummary",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${OpenApiUtil.getEncodeParam(projectId)}/job/statistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectJobSummaryResponse>(await this.callApi(params, req, runtime), new GetProjectJobSummaryResponse({}));
  }

  async getProjectResourceSummary(projectId: string): Promise<GetProjectResourceSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectResourceSummaryWithOptions(projectId, headers, runtime);
  }

  async getProjectResourceSummaryWithOptions(projectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProjectResourceSummaryResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetProjectResourceSummary",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${OpenApiUtil.getEncodeParam(projectId)}/resource/statistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResourceSummaryResponse>(await this.callApi(params, req, runtime), new GetProjectResourceSummaryResponse({}));
  }

  async getRabbitmqPublisher(publisherId: string): Promise<GetRabbitmqPublisherResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRabbitmqPublisherWithOptions(publisherId, headers, runtime);
  }

  async getRabbitmqPublisherWithOptions(publisherId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetRabbitmqPublisherResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetRabbitmqPublisher",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers/${OpenApiUtil.getEncodeParam(publisherId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetRabbitmqPublisherResponse>(await this.callApi(params, req, runtime), new GetRabbitmqPublisherResponse({}));
  }

  async getResourceExportTask(exportTaskId: string, request: GetResourceExportTaskRequest): Promise<GetResourceExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceExportTaskWithOptions(exportTaskId, request, headers, runtime);
  }

  async getResourceExportTaskWithOptions(exportTaskId: string, request: GetResourceExportTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceExportTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exportVersion)) {
      query["exportVersion"] = request.exportVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceExportTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${OpenApiUtil.getEncodeParam(exportTaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceExportTaskResponse>(await this.callApi(params, req, runtime), new GetResourceExportTaskResponse({}));
  }

  async getResourceLink(request: GetResourceLinkRequest): Promise<GetResourceLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceLinkWithOptions(request, headers, runtime);
  }

  async getResourceLinkWithOptions(request: GetResourceLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceLinkResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.productCode)) {
      query["productCode"] = request.productCode;
    }

    if (!Util.isUnset(request.resourceTypeCode)) {
      query["resourceTypeCode"] = request.resourceTypeCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceLink",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceLinkResponse>(await this.callApi(params, req, runtime), new GetResourceLinkResponse({}));
  }

  async getTask(taskId: string): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(taskId, headers, runtime);
  }

  async getTaskWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTask",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  async getTaskContext(taskId: string): Promise<GetTaskContextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskContextWithOptions(taskId, headers, runtime);
  }

  async getTaskContextWithOptions(taskId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTaskContextResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTaskContext",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}/context`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTaskContextResponse>(await this.callApi(params, req, runtime), new GetTaskContextResponse({}));
  }

  async listAuthorizations(request: ListAuthorizationsRequest): Promise<ListAuthorizationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAuthorizationsWithOptions(request, headers, runtime);
  }

  async listAuthorizationsWithOptions(request: ListAuthorizationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAuthorizationsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.authorizationId)) {
      query["authorizationId"] = request.authorizationId;
    }

    if (!Util.isUnset(request.authorizationType)) {
      query["authorizationType"] = request.authorizationType;
    }

    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAuthorizations",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/authorizations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAuthorizationsResponse>(await this.callApi(params, req, runtime), new ListAuthorizationsResponse({}));
  }

  async listGroup(request: ListGroupRequest): Promise<ListGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupWithOptions(request, headers, runtime);
  }

  async listGroupWithOptions(request: ListGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGroupResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGroupResponse>(await this.callApi(params, req, runtime), new ListGroupResponse({}));
  }

  async listJobs(taskId: string, request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(taskId, request, headers, runtime);
  }

  async listJobsWithOptions(taskId: string, request: ListJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  async listModuleMarkets(request: ListModuleMarketsRequest): Promise<ListModuleMarketsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModuleMarketsWithOptions(request, headers, runtime);
  }

  async listModuleMarketsWithOptions(request: ListModuleMarketsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListModuleMarketsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModuleMarkets",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/moduleMarkets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListModuleMarketsResponse>(await this.callApi(params, req, runtime), new ListModuleMarketsResponse({}));
  }

  async listModuleVersion(moduleId: string, request: ListModuleVersionRequest): Promise<ListModuleVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModuleVersionWithOptions(moduleId, request, headers, runtime);
  }

  async listModuleVersionWithOptions(moduleId: string, request: ListModuleVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListModuleVersionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModuleVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${OpenApiUtil.getEncodeParam(moduleId)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListModuleVersionResponse>(await this.callApi(params, req, runtime), new ListModuleVersionResponse({}));
  }

  async listModules(request: ListModulesRequest): Promise<ListModulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listModulesWithOptions(request, headers, runtime);
  }

  async listModulesWithOptions(request: ListModulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListModulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListModules",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListModulesResponse>(await this.callApi(params, req, runtime), new ListModulesResponse({}));
  }

  async listParameterSetRelation(request: ListParameterSetRelationRequest): Promise<ListParameterSetRelationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listParameterSetRelationWithOptions(request, headers, runtime);
  }

  async listParameterSetRelationWithOptions(request: ListParameterSetRelationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListParameterSetRelationResponse> {
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
      action: "ListParameterSetRelation",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/operations/relation`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListParameterSetRelationResponse>(await this.callApi(params, req, runtime), new ListParameterSetRelationResponse({}));
  }

  async listParameterSets(request: ListParameterSetsRequest): Promise<ListParameterSetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listParameterSetsWithOptions(request, headers, runtime);
  }

  async listParameterSetsWithOptions(request: ListParameterSetsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListParameterSetsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListParameterSets",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListParameterSetsResponse>(await this.callApi(params, req, runtime), new ListParameterSetsResponse({}));
  }

  async listProject(request: ListProjectRequest): Promise<ListProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectWithOptions(request, headers, runtime);
  }

  async listProjectWithOptions(request: ListProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectResponse>(await this.callApi(params, req, runtime), new ListProjectResponse({}));
  }

  async listProjectBuilds(projectId: string): Promise<ListProjectBuildsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectBuildsWithOptions(projectId, headers, runtime);
  }

  async listProjectBuildsWithOptions(projectId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProjectBuildsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListProjectBuilds",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${OpenApiUtil.getEncodeParam(projectId)}/build`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectBuildsResponse>(await this.callApi(params, req, runtime), new ListProjectBuildsResponse({}));
  }

  async listRabbitmqPublishers(request: ListRabbitmqPublishersRequest): Promise<ListRabbitmqPublishersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRabbitmqPublishersWithOptions(request, headers, runtime);
  }

  async listRabbitmqPublishersWithOptions(request: ListRabbitmqPublishersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRabbitmqPublishersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRabbitmqPublishers",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRabbitmqPublishersResponse>(await this.callApi(params, req, runtime), new ListRabbitmqPublishersResponse({}));
  }

  async listRelationModules(type: string): Promise<ListRelationModulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRelationModulesWithOptions(type, headers, runtime);
  }

  async listRelationModulesWithOptions(type: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRelationModulesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListRelationModules",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/relation/${OpenApiUtil.getEncodeParam(type)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRelationModulesResponse>(await this.callApi(params, req, runtime), new ListRelationModulesResponse({}));
  }

  async listRelationTasks(type: string, request: ListRelationTasksRequest): Promise<ListRelationTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRelationTasksWithOptions(type, request, headers, runtime);
  }

  async listRelationTasksWithOptions(type: string, request: ListRelationTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRelationTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["moduleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRelationTasks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/relation/${OpenApiUtil.getEncodeParam(type)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListRelationTasksResponse>(await this.callApi(params, req, runtime), new ListRelationTasksResponse({}));
  }

  async listResourceExportTaskVersions(exportTaskId: string, request: ListResourceExportTaskVersionsRequest): Promise<ListResourceExportTaskVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceExportTaskVersionsWithOptions(exportTaskId, request, headers, runtime);
  }

  async listResourceExportTaskVersionsWithOptions(exportTaskId: string, request: ListResourceExportTaskVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceExportTaskVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exportVersion)) {
      query["exportVersion"] = request.exportVersion;
    }

    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceExportTaskVersions",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${OpenApiUtil.getEncodeParam(exportTaskId)}/exportVersions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceExportTaskVersionsResponse>(await this.callApi(params, req, runtime), new ListResourceExportTaskVersionsResponse({}));
  }

  async listResourceExportTasks(request: ListResourceExportTasksRequest): Promise<ListResourceExportTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceExportTasksWithOptions(request, headers, runtime);
  }

  async listResourceExportTasksWithOptions(request: ListResourceExportTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceExportTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exportTaskId)) {
      query["exportTaskId"] = request.exportTaskId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceExportTasks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceExportTasksResponse>(await this.callApi(params, req, runtime), new ListResourceExportTasksResponse({}));
  }

  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(request, headers, runtime);
  }

  async listResourcesWithOptions(request: ListResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["sourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.sourceValue)) {
      query["sourceValue"] = request.sourceValue;
    }

    if (!Util.isUnset(request.specType)) {
      query["specType"] = request.specType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResources",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/resources/stateparser`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
  }

  async listTaskResource(taskId: string, request: ListTaskResourceRequest): Promise<ListTaskResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTaskResourceWithOptions(taskId, request, headers, runtime);
  }

  async listTaskResourceWithOptions(taskId: string, request: ListTaskResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTaskResourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaskResource",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTaskResourceResponse>(await this.callApi(params, req, runtime), new ListTaskResourceResponse({}));
  }

  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(request, headers, runtime);
  }

  async listTasksWithOptions(request: ListTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      query["groupId"] = request.groupId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.moduleId)) {
      query["moduleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.projectId)) {
      query["projectId"] = request.projectId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["taskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTasks",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  async operateJob(taskId: string, jobId: string, operationType: string, request: OperateJobRequest): Promise<OperateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.operateJobWithOptions(taskId, jobId, operationType, request, headers, runtime);
  }

  async operateJobWithOptions(taskId: string, jobId: string, operationType: string, request: OperateJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<OperateJobResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.comment)) {
      query["comment"] = request.comment;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "OperateJob",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}/jobs/${OpenApiUtil.getEncodeParam(jobId)}/operation/${OpenApiUtil.getEncodeParam(operationType)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<OperateJobResponse>(await this.callApi(params, req, runtime), new OperateJobResponse({}));
  }

  async removeResourceExportTaskVersion(exportTaskId: string, exportVersion: string): Promise<RemoveResourceExportTaskVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.removeResourceExportTaskVersionWithOptions(exportTaskId, exportVersion, headers, runtime);
  }

  async removeResourceExportTaskVersionWithOptions(exportTaskId: string, exportVersion: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RemoveResourceExportTaskVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RemoveResourceExportTaskVersion",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${OpenApiUtil.getEncodeParam(exportTaskId)}/${OpenApiUtil.getEncodeParam(exportVersion)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RemoveResourceExportTaskVersionResponse>(await this.callApi(params, req, runtime), new RemoveResourceExportTaskVersionResponse({}));
  }

  async updateAuthorizationAttribute(authorizationId: string, request: UpdateAuthorizationAttributeRequest): Promise<UpdateAuthorizationAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAuthorizationAttributeWithOptions(authorizationId, request, headers, runtime);
  }

  async updateAuthorizationAttributeWithOptions(authorizationId: string, request: UpdateAuthorizationAttributeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAuthorizationAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dueTime)) {
      body["dueTime"] = request.dueTime;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAuthorizationAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/authorizations/${OpenApiUtil.getEncodeParam(authorizationId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAuthorizationAttributeResponse>(await this.callApi(params, req, runtime), new UpdateAuthorizationAttributeResponse({}));
  }

  async updateGroup(id: string, request: UpdateGroupRequest): Promise<UpdateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGroupWithOptions(id, request, headers, runtime);
  }

  async updateGroupWithOptions(id: string, request: UpdateGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGroup",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/group/${OpenApiUtil.getEncodeParam(id)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateGroupResponse>(await this.callApi(params, req, runtime), new UpdateGroupResponse({}));
  }

  async updateModuleAttribute(moduleId: string, request: UpdateModuleAttributeRequest): Promise<UpdateModuleAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModuleAttributeWithOptions(moduleId, request, headers, runtime);
  }

  async updateModuleAttributeWithOptions(moduleId: string, request: UpdateModuleAttributeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateModuleAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.source)) {
      body["source"] = request.source;
    }

    if (!Util.isUnset(request.sourcePath)) {
      body["sourcePath"] = request.sourcePath;
    }

    if (!Util.isUnset(request.statePath)) {
      body["statePath"] = request.statePath;
    }

    if (!Util.isUnset(request.versionStrategy)) {
      body["versionStrategy"] = request.versionStrategy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateModuleAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/modules/${OpenApiUtil.getEncodeParam(moduleId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateModuleAttributeResponse>(await this.callApi(params, req, runtime), new UpdateModuleAttributeResponse({}));
  }

  async updateModuleMarketAttribute(moduleMarketId: string, request: UpdateModuleMarketAttributeRequest): Promise<UpdateModuleMarketAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateModuleMarketAttributeWithOptions(moduleMarketId, request, headers, runtime);
  }

  async updateModuleMarketAttributeWithOptions(moduleMarketId: string, request: UpdateModuleMarketAttributeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateModuleMarketAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.moduleDetail)) {
      body["moduleDetail"] = request.moduleDetail;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateModuleMarketAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/moduleMarkets/${OpenApiUtil.getEncodeParam(moduleMarketId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateModuleMarketAttributeResponse>(await this.callApi(params, req, runtime), new UpdateModuleMarketAttributeResponse({}));
  }

  async updateParameterSetAttribute(parameterSetId: string, request: UpdateParameterSetAttributeRequest): Promise<UpdateParameterSetAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateParameterSetAttributeWithOptions(parameterSetId, request, headers, runtime);
  }

  async updateParameterSetAttributeWithOptions(parameterSetId: string, request: UpdateParameterSetAttributeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateParameterSetAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateParameterSetAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/parameterSets/${OpenApiUtil.getEncodeParam(parameterSetId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateParameterSetAttributeResponse>(await this.callApi(params, req, runtime), new UpdateParameterSetAttributeResponse({}));
  }

  async updateProject(id: string, request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(id, request, headers, runtime);
  }

  async updateProjectWithOptions(id: string, request: UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProject",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/project/${OpenApiUtil.getEncodeParam(id)}`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  async updateRabbitmqPublisherAttribute(publisherId: string, request: UpdateRabbitmqPublisherAttributeRequest): Promise<UpdateRabbitmqPublisherAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateRabbitmqPublisherAttributeWithOptions(publisherId, request, headers, runtime);
  }

  async updateRabbitmqPublisherAttributeWithOptions(publisherId: string, request: UpdateRabbitmqPublisherAttributeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateRabbitmqPublisherAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.exchangeName)) {
      body["exchangeName"] = request.exchangeName;
    }

    if (!Util.isUnset(request.exchangeType)) {
      body["exchangeType"] = request.exchangeType;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateRabbitmqPublisherAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/publishers/${OpenApiUtil.getEncodeParam(publisherId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateRabbitmqPublisherAttributeResponse>(await this.callApi(params, req, runtime), new UpdateRabbitmqPublisherAttributeResponse({}));
  }

  async updateResourceExportTaskAttribute(exportTaskId: string, request: UpdateResourceExportTaskAttributeRequest): Promise<UpdateResourceExportTaskAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceExportTaskAttributeWithOptions(exportTaskId, request, headers, runtime);
  }

  async updateResourceExportTaskAttributeWithOptions(exportTaskId: string, request: UpdateResourceExportTaskAttributeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceExportTaskAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["clientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.excludeRules)) {
      body["excludeRules"] = request.excludeRules;
    }

    if (!Util.isUnset($tea.toMap(request.exportToModule))) {
      body["exportToModule"] = request.exportToModule;
    }

    if (!Util.isUnset(request.includeRules)) {
      body["includeRules"] = request.includeRules;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!Util.isUnset(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!Util.isUnset(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    if (!Util.isUnset(request.variables)) {
      body["variables"] = request.variables;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceExportTaskAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/exportTasks/${OpenApiUtil.getEncodeParam(exportTaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceExportTaskAttributeResponse>(await this.callApi(params, req, runtime), new UpdateResourceExportTaskAttributeResponse({}));
  }

  async updateTaskAttribute(taskId: string, request: UpdateTaskAttributeRequest): Promise<UpdateTaskAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTaskAttributeWithOptions(taskId, request, headers, runtime);
  }

  async updateTaskAttributeWithOptions(taskId: string, request: UpdateTaskAttributeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTaskAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoApply)) {
      body["autoApply"] = request.autoApply;
    }

    if (!Util.isUnset($tea.toMap(request.groupInfo))) {
      body["groupInfo"] = request.groupInfo;
    }

    if (!Util.isUnset(request.moduleId)) {
      body["moduleId"] = request.moduleId;
    }

    if (!Util.isUnset(request.moduleVersion)) {
      body["moduleVersion"] = request.moduleVersion;
    }

    if (!Util.isUnset(request.name)) {
      body["name"] = request.name;
    }

    if (!Util.isUnset(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!Util.isUnset(request.protectionStrategy)) {
      body["protectionStrategy"] = request.protectionStrategy;
    }

    if (!Util.isUnset(request.ramRole)) {
      body["ramRole"] = request.ramRole;
    }

    if (!Util.isUnset(request.terraformVersion)) {
      body["terraformVersion"] = request.terraformVersion;
    }

    if (!Util.isUnset(request.triggerStrategy)) {
      body["triggerStrategy"] = request.triggerStrategy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTaskAttribute",
      version: "2021-08-06",
      protocol: "HTTPS",
      pathname: `/tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTaskAttributeResponse>(await this.callApi(params, req, runtime), new UpdateTaskAttributeResponse({}));
  }

}
