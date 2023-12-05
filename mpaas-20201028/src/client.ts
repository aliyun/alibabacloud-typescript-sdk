// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddMdsMiniConfigRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMiniConfigAddJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMiniConfigAddJsonStr: 'MpaasMappcenterMiniConfigAddJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMiniConfigAddJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMdsMiniConfigResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: AddMdsMiniConfigResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: AddMdsMiniConfigResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMdsMiniConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddMdsMiniConfigResponseBody;
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
      body: AddMdsMiniConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPushSchedulerRequest extends $tea.Model {
  appId?: string;
  type?: number;
  uniqueIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      type: 'Type',
      uniqueIds: 'UniqueIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      type: 'number',
      uniqueIds: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPushSchedulerResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelPushSchedulerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelPushSchedulerResponseBody;
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
      body: CancelPushSchedulerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubeMiniTaskStatusRequest extends $tea.Model {
  appId?: string;
  bizType?: string;
  packageId?: number;
  taskId?: number;
  taskStatus?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizType: 'BizType',
      packageId: 'PackageId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bizType: 'string',
      packageId: 'number',
      taskId: 'number',
      taskStatus: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubeMiniTaskStatusResponseBody extends $tea.Model {
  changeMiniTaskStatusResult?: ChangeMcubeMiniTaskStatusResponseBodyChangeMiniTaskStatusResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      changeMiniTaskStatusResult: 'ChangeMiniTaskStatusResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeMiniTaskStatusResult: ChangeMcubeMiniTaskStatusResponseBodyChangeMiniTaskStatusResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubeMiniTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeMcubeMiniTaskStatusResponseBody;
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
      body: ChangeMcubeMiniTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubeNebulaTaskStatusRequest extends $tea.Model {
  appId?: string;
  bizType?: string;
  packageId?: string;
  taskId?: string;
  taskStatus?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bizType: 'BizType',
      packageId: 'PackageId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bizType: 'string',
      packageId: 'string',
      taskId: 'string',
      taskStatus: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubeNebulaTaskStatusResponseBody extends $tea.Model {
  changeMcubeNebulaTaskStatusResult?: ChangeMcubeNebulaTaskStatusResponseBodyChangeMcubeNebulaTaskStatusResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      changeMcubeNebulaTaskStatusResult: 'ChangeMcubeNebulaTaskStatusResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeMcubeNebulaTaskStatusResult: ChangeMcubeNebulaTaskStatusResponseBodyChangeMcubeNebulaTaskStatusResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubeNebulaTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeMcubeNebulaTaskStatusResponseBody;
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
      body: ChangeMcubeNebulaTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubePublicTaskStatusRequest extends $tea.Model {
  appId?: string;
  taskId?: string;
  taskStatus?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskId: 'string',
      taskStatus: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubePublicTaskStatusResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: ChangeMcubePublicTaskStatusResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: ChangeMcubePublicTaskStatusResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubePublicTaskStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeMcubePublicTaskStatusResponseBody;
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
      body: ChangeMcubePublicTaskStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyMcdpGroupRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpGroupCopyJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpGroupCopyJsonStr: 'MpaasMappcenterMcdpGroupCopyJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpGroupCopyJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyMcdpGroupResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CopyMcdpGroupResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CopyMcdpGroupResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyMcdpGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CopyMcdpGroupResponseBody;
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
      body: CopyMcdpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasCrowdRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpMasCrowdCreateJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpMasCrowdCreateJsonStr: 'MpaasMappcenterMcdpMasCrowdCreateJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpMasCrowdCreateJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasCrowdResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CreateMasCrowdResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CreateMasCrowdResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasCrowdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMasCrowdResponseBody;
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
      body: CreateMasCrowdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasFunnelRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpMasFunnelCreateJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpMasFunnelCreateJsonStr: 'MpaasMappcenterMcdpMasFunnelCreateJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpMasFunnelCreateJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasFunnelResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CreateMasFunnelResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CreateMasFunnelResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasFunnelResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMasFunnelResponseBody;
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
      body: CreateMasFunnelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpEventRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpEventCreateJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpEventCreateJsonStr: 'MpaasMappcenterMcdpEventCreateJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpEventCreateJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpEventResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CreateMcdpEventResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CreateMcdpEventResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpEventResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcdpEventResponseBody;
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
      body: CreateMcdpEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpEventAttributeRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpEventAttributeCreateJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpEventAttributeCreateJsonStr: 'MpaasMappcenterMcdpEventAttributeCreateJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpEventAttributeCreateJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpEventAttributeResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CreateMcdpEventAttributeResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CreateMcdpEventAttributeResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpEventAttributeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcdpEventAttributeResponseBody;
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
      body: CreateMcdpEventAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpGroupRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpGroupCreateJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpGroupCreateJsonStr: 'MpaasMappcenterMcdpGroupCreateJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpGroupCreateJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpGroupResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CreateMcdpGroupResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CreateMcdpGroupResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcdpGroupResponseBody;
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
      body: CreateMcdpGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpMaterialRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpMaterialCreateJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpMaterialCreateJsonStr: 'MpaasMappcenterMcdpMaterialCreateJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpMaterialCreateJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpMaterialResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CreateMcdpMaterialResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CreateMcdpMaterialResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcdpMaterialResponseBody;
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
      body: CreateMcdpMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpZoneRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpZoneCreateJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpZoneCreateJsonStr: 'MpaasMappcenterMcdpZoneCreateJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpZoneCreateJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpZoneResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CreateMcdpZoneResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CreateMcdpZoneResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcdpZoneResponseBody;
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
      body: CreateMcdpZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniAppRequest extends $tea.Model {
  appId?: string;
  h5Id?: string;
  h5Name?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      h5Name: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniAppResponseBody extends $tea.Model {
  createMiniResult?: CreateMcubeMiniAppResponseBodyCreateMiniResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createMiniResult: 'CreateMiniResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMiniResult: CreateMcubeMiniAppResponseBodyCreateMiniResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcubeMiniAppResponseBody;
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
      body: CreateMcubeMiniAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniTaskRequest extends $tea.Model {
  appId?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  memo?: string;
  packageId?: number;
  publishMode?: number;
  publishType?: number;
  tenantId?: string;
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      memo: 'Memo',
      packageId: 'PackageId',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      tenantId: 'TenantId',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      memo: 'string',
      packageId: 'number',
      publishMode: 'number',
      publishType: 'number',
      tenantId: 'string',
      whitelistIds: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniTaskResponseBody extends $tea.Model {
  createMiniTaskResult?: CreateMcubeMiniTaskResponseBodyCreateMiniTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createMiniTaskResult: 'CreateMiniTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMiniTaskResult: CreateMcubeMiniTaskResponseBodyCreateMiniTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcubeMiniTaskResponseBody;
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
      body: CreateMcubeMiniTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaAppRequest extends $tea.Model {
  appId?: string;
  h5Id?: string;
  h5Name?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      h5Name: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaAppResponseBody extends $tea.Model {
  createNebulaAppResult?: CreateMcubeNebulaAppResponseBodyCreateNebulaAppResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createNebulaAppResult: 'CreateNebulaAppResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createNebulaAppResult: CreateMcubeNebulaAppResponseBodyCreateNebulaAppResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcubeNebulaAppResponseBody;
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
      body: CreateMcubeNebulaAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaResourceRequest extends $tea.Model {
  appId?: string;
  autoInstall?: number;
  clientVersionMax?: string;
  clientVersionMin?: string;
  customDomainName?: string;
  extendInfo?: string;
  fileUrl?: string;
  h5Id?: string;
  h5Name?: string;
  h5Version?: string;
  installType?: number;
  mainUrl?: string;
  onexFlag?: boolean;
  platform?: string;
  repeatNebula?: number;
  resourceType?: number;
  subUrl?: string;
  tenantId?: string;
  vhost?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      customDomainName: 'CustomDomainName',
      extendInfo: 'ExtendInfo',
      fileUrl: 'FileUrl',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      onexFlag: 'OnexFlag',
      platform: 'Platform',
      repeatNebula: 'RepeatNebula',
      resourceType: 'ResourceType',
      subUrl: 'SubUrl',
      tenantId: 'TenantId',
      vhost: 'Vhost',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      customDomainName: 'string',
      extendInfo: 'string',
      fileUrl: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      installType: 'number',
      mainUrl: 'string',
      onexFlag: 'boolean',
      platform: 'string',
      repeatNebula: 'number',
      resourceType: 'number',
      subUrl: 'string',
      tenantId: 'string',
      vhost: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaResourceResponseBody extends $tea.Model {
  createMcubeNebulaResourceReslult?: CreateMcubeNebulaResourceResponseBodyCreateMcubeNebulaResourceReslult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createMcubeNebulaResourceReslult: 'CreateMcubeNebulaResourceReslult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMcubeNebulaResourceReslult: CreateMcubeNebulaResourceResponseBodyCreateMcubeNebulaResourceReslult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcubeNebulaResourceResponseBody;
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
      body: CreateMcubeNebulaResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaTaskRequest extends $tea.Model {
  appCode?: string;
  appId?: string;
  bizType?: string;
  creator?: string;
  gmtCreate?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyEndtimeData?: string;
  greyEndtimeStr?: string;
  greyNum?: number;
  greyUrl?: string;
  id?: number;
  memo?: string;
  modifier?: string;
  packageId?: number;
  percent?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  releaseVersion?: string;
  resIds?: string;
  serialVersionUID?: number;
  status?: number;
  syncMode?: string;
  syncResult?: string;
  taskName?: string;
  taskStatus?: number;
  taskType?: number;
  taskVersion?: number;
  tenantId?: string;
  upgradeNoticeNum?: number;
  upgradeProgress?: string;
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
      bizType: 'BizType',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyEndtimeData: 'GreyEndtimeData',
      greyEndtimeStr: 'GreyEndtimeStr',
      greyNum: 'GreyNum',
      greyUrl: 'GreyUrl',
      id: 'Id',
      memo: 'Memo',
      modifier: 'Modifier',
      packageId: 'PackageId',
      percent: 'Percent',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      releaseVersion: 'ReleaseVersion',
      resIds: 'ResIds',
      serialVersionUID: 'SerialVersionUID',
      status: 'Status',
      syncMode: 'SyncMode',
      syncResult: 'SyncResult',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      taskVersion: 'TaskVersion',
      tenantId: 'TenantId',
      upgradeNoticeNum: 'UpgradeNoticeNum',
      upgradeProgress: 'UpgradeProgress',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'string',
      bizType: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyEndtimeData: 'string',
      greyEndtimeStr: 'string',
      greyNum: 'number',
      greyUrl: 'string',
      id: 'number',
      memo: 'string',
      modifier: 'string',
      packageId: 'number',
      percent: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      releaseVersion: 'string',
      resIds: 'string',
      serialVersionUID: 'number',
      status: 'number',
      syncMode: 'string',
      syncResult: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskType: 'number',
      taskVersion: 'number',
      tenantId: 'string',
      upgradeNoticeNum: 'number',
      upgradeProgress: 'string',
      whitelistIds: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaTaskResponseBody extends $tea.Model {
  createMcubeNebulaTaskResult?: CreateMcubeNebulaTaskResponseBodyCreateMcubeNebulaTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createMcubeNebulaTaskResult: 'CreateMcubeNebulaTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMcubeNebulaTaskResult: CreateMcubeNebulaTaskResponseBodyCreateMcubeNebulaTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcubeNebulaTaskResponseBody;
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
      body: CreateMcubeNebulaTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeUpgradePackageRequest extends $tea.Model {
  appId?: string;
  appVersion?: string;
  appstoreUrl?: string;
  bundleId?: string;
  customDomainName?: string;
  desc?: string;
  downloadUrl?: string;
  fileUrl?: string;
  iconFileUrl?: string;
  installAmount?: number;
  iosSymbolfileUrl?: string;
  isEnterprise?: number;
  needCheck?: number;
  onexFlag?: boolean;
  platform?: string;
  tenantId?: string;
  validDays?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      appstoreUrl: 'AppstoreUrl',
      bundleId: 'BundleId',
      customDomainName: 'CustomDomainName',
      desc: 'Desc',
      downloadUrl: 'DownloadUrl',
      fileUrl: 'FileUrl',
      iconFileUrl: 'IconFileUrl',
      installAmount: 'InstallAmount',
      iosSymbolfileUrl: 'IosSymbolfileUrl',
      isEnterprise: 'IsEnterprise',
      needCheck: 'NeedCheck',
      onexFlag: 'OnexFlag',
      platform: 'Platform',
      tenantId: 'TenantId',
      validDays: 'ValidDays',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      appstoreUrl: 'string',
      bundleId: 'string',
      customDomainName: 'string',
      desc: 'string',
      downloadUrl: 'string',
      fileUrl: 'string',
      iconFileUrl: 'string',
      installAmount: 'number',
      iosSymbolfileUrl: 'string',
      isEnterprise: 'number',
      needCheck: 'number',
      onexFlag: 'boolean',
      platform: 'string',
      tenantId: 'string',
      validDays: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeUpgradePackageResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CreateMcubeUpgradePackageResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CreateMcubeUpgradePackageResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeUpgradePackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcubeUpgradePackageResponseBody;
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
      body: CreateMcubeUpgradePackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeUpgradeTaskRequest extends $tea.Model {
  appId?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  historyForce?: number;
  memo?: string;
  packageInfoId?: number;
  publishMode?: number;
  publishType?: number;
  tenantId?: string;
  upgradeContent?: string;
  upgradeType?: number;
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      historyForce: 'HistoryForce',
      memo: 'Memo',
      packageInfoId: 'PackageInfoId',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      tenantId: 'TenantId',
      upgradeContent: 'UpgradeContent',
      upgradeType: 'UpgradeType',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      historyForce: 'number',
      memo: 'string',
      packageInfoId: 'number',
      publishMode: 'number',
      publishType: 'number',
      tenantId: 'string',
      upgradeContent: 'string',
      upgradeType: 'number',
      whitelistIds: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeUpgradeTaskResponseBody extends $tea.Model {
  createTaskResult?: CreateMcubeUpgradeTaskResponseBodyCreateTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createTaskResult: 'CreateTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTaskResult: CreateMcubeUpgradeTaskResponseBodyCreateTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeUpgradeTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcubeUpgradeTaskResponseBody;
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
      body: CreateMcubeUpgradeTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeVhostRequest extends $tea.Model {
  appId?: string;
  tenantId?: string;
  vhost?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      vhost: 'Vhost',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      vhost: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeVhostResponseBody extends $tea.Model {
  createVhostResult?: CreateMcubeVhostResponseBodyCreateVhostResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createVhostResult: 'CreateVhostResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createVhostResult: CreateMcubeVhostResponseBodyCreateVhostResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeVhostResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcubeVhostResponseBody;
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
      body: CreateMcubeVhostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistRequest extends $tea.Model {
  appId?: string;
  tenantId?: string;
  whiteListName?: string;
  whitelistType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      whiteListName: 'WhiteListName',
      whitelistType: 'WhitelistType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      whiteListName: 'string',
      whitelistType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistResponseBody extends $tea.Model {
  createWhitelistResult?: CreateMcubeWhitelistResponseBodyCreateWhitelistResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createWhitelistResult: 'CreateWhitelistResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createWhitelistResult: CreateMcubeWhitelistResponseBodyCreateWhitelistResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcubeWhitelistResponseBody;
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
      body: CreateMcubeWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistForIdeRequest extends $tea.Model {
  appId?: string;
  tenantId?: string;
  userId?: string;
  whitelistValue?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      userId: 'UserId',
      whitelistValue: 'WhitelistValue',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      userId: 'string',
      whitelistValue: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistForIdeResponseBody extends $tea.Model {
  createWhitelistForIdeResult?: CreateMcubeWhitelistForIdeResponseBodyCreateWhitelistForIdeResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      createWhitelistForIdeResult: 'CreateWhitelistForIdeResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createWhitelistForIdeResult: CreateMcubeWhitelistForIdeResponseBodyCreateWhitelistForIdeResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistForIdeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMcubeWhitelistForIdeResponseBody;
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
      body: CreateMcubeWhitelistForIdeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMdsMiniprogramTaskRequest extends $tea.Model {
  appId?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: string;
  id?: number;
  memo?: string;
  packageId?: number;
  publishMode?: string;
  publishType?: number;
  syncMode?: string;
  tenantId?: string;
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      id: 'Id',
      memo: 'Memo',
      packageId: 'PackageId',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      syncMode: 'SyncMode',
      tenantId: 'TenantId',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNum: 'string',
      id: 'number',
      memo: 'string',
      packageId: 'number',
      publishMode: 'string',
      publishType: 'number',
      syncMode: 'string',
      tenantId: 'string',
      whitelistIds: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMdsMiniprogramTaskResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CreateMdsMiniprogramTaskResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CreateMdsMiniprogramTaskResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMdsMiniprogramTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMdsMiniprogramTaskResponseBody;
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
      body: CreateMdsMiniprogramTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMsaEnhanceRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMsaEnhanceCreateJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMsaEnhanceCreateJsonStr: 'MpaasMappcenterMsaEnhanceCreateJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMsaEnhanceCreateJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMsaEnhanceResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: CreateMsaEnhanceResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: CreateMsaEnhanceResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMsaEnhanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMsaEnhanceResponseBody;
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
      body: CreateMsaEnhanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpenGlobalDataRequest extends $tea.Model {
  appId?: string;
  appMaxVersion?: string;
  appMinVersion?: string;
  bizType?: string;
  extAttrStr?: string;
  maxUid?: number;
  minUid?: number;
  osType?: string;
  payload?: string;
  thirdMsgId?: string;
  uids?: string;
  validTimeEnd?: number;
  validTimeStart?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appMaxVersion: 'AppMaxVersion',
      appMinVersion: 'AppMinVersion',
      bizType: 'BizType',
      extAttrStr: 'ExtAttrStr',
      maxUid: 'MaxUid',
      minUid: 'MinUid',
      osType: 'OsType',
      payload: 'Payload',
      thirdMsgId: 'ThirdMsgId',
      uids: 'Uids',
      validTimeEnd: 'ValidTimeEnd',
      validTimeStart: 'ValidTimeStart',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appMaxVersion: 'string',
      appMinVersion: 'string',
      bizType: 'string',
      extAttrStr: 'string',
      maxUid: 'number',
      minUid: 'number',
      osType: 'string',
      payload: 'string',
      thirdMsgId: 'string',
      uids: 'string',
      validTimeEnd: 'number',
      validTimeStart: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpenGlobalDataResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpenGlobalDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOpenGlobalDataResponseBody;
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
      body: CreateOpenGlobalDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpenSingleDataRequest extends $tea.Model {
  appId?: string;
  appMaxVersion?: string;
  appMinVersion?: string;
  bizType?: string;
  checkOnline?: boolean;
  extAttrStr?: string;
  linkToken?: string;
  osType?: string;
  payload?: string;
  thirdMsgId?: string;
  validTimeEnd?: number;
  validTimeStart?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appMaxVersion: 'AppMaxVersion',
      appMinVersion: 'AppMinVersion',
      bizType: 'BizType',
      checkOnline: 'CheckOnline',
      extAttrStr: 'ExtAttrStr',
      linkToken: 'LinkToken',
      osType: 'OsType',
      payload: 'Payload',
      thirdMsgId: 'ThirdMsgId',
      validTimeEnd: 'ValidTimeEnd',
      validTimeStart: 'ValidTimeStart',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appMaxVersion: 'string',
      appMinVersion: 'string',
      bizType: 'string',
      checkOnline: 'boolean',
      extAttrStr: 'string',
      linkToken: 'string',
      osType: 'string',
      payload: 'string',
      thirdMsgId: 'string',
      validTimeEnd: 'number',
      validTimeStart: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpenSingleDataResponseBody extends $tea.Model {
  requestId?: string;
  result?: boolean;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOpenSingleDataResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOpenSingleDataResponseBody;
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
      body: CreateOpenSingleDataResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCubecardWhitelistContentRequest extends $tea.Model {
  appId?: string;
  tenantId?: string;
  whitelistId?: string;
  whitelistValue?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      whitelistId: 'WhitelistId',
      whitelistValue: 'WhitelistValue',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      whitelistId: 'string',
      whitelistValue: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCubecardWhitelistContentResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: DeleteCubecardWhitelistContentResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: DeleteCubecardWhitelistContentResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCubecardWhitelistContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCubecardWhitelistContentResponseBody;
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
      body: DeleteCubecardWhitelistContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpAimRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpAimDeleteJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpAimDeleteJsonStr: 'MpaasMappcenterMcdpAimDeleteJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpAimDeleteJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpAimResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: DeleteMcdpAimResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: DeleteMcdpAimResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpAimResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMcdpAimResponseBody;
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
      body: DeleteMcdpAimResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpCrowdRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpCrowdDeleteJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpCrowdDeleteJsonStr: 'MpaasMappcenterMcdpCrowdDeleteJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpCrowdDeleteJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpCrowdResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: DeleteMcdpCrowdResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: DeleteMcdpCrowdResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpCrowdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMcdpCrowdResponseBody;
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
      body: DeleteMcdpCrowdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpEventAttributeByIdRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpEventAttributeDeleteJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpEventAttributeDeleteJsonStr: 'MpaasMappcenterMcdpEventAttributeDeleteJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpEventAttributeDeleteJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpEventAttributeByIdResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: DeleteMcdpEventAttributeByIdResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: DeleteMcdpEventAttributeByIdResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpEventAttributeByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMcdpEventAttributeByIdResponseBody;
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
      body: DeleteMcdpEventAttributeByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpEventByIdRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpEventDeleteJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpEventDeleteJsonStr: 'MpaasMappcenterMcdpEventDeleteJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpEventDeleteJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpEventByIdResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: DeleteMcdpEventByIdResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: DeleteMcdpEventByIdResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpEventByIdResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMcdpEventByIdResponseBody;
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
      body: DeleteMcdpEventByIdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpMaterialRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpMaterialDeleteJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpMaterialDeleteJsonStr: 'MpaasMappcenterMcdpMaterialDeleteJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpMaterialDeleteJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpMaterialResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: DeleteMcdpMaterialResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: DeleteMcdpMaterialResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpMaterialResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMcdpMaterialResponseBody;
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
      body: DeleteMcdpMaterialResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpZoneRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMcdpZoneDeleteJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMcdpZoneDeleteJsonStr: 'MpaasMappcenterMcdpZoneDeleteJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMcdpZoneDeleteJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpZoneResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: DeleteMcdpZoneResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: DeleteMcdpZoneResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMcdpZoneResponseBody;
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
      body: DeleteMcdpZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeMiniAppRequest extends $tea.Model {
  appId?: string;
  h5Id?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeMiniAppResponseBody extends $tea.Model {
  deleteMiniResult?: DeleteMcubeMiniAppResponseBodyDeleteMiniResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMiniResult: 'DeleteMiniResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMiniResult: DeleteMcubeMiniAppResponseBodyDeleteMiniResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeMiniAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMcubeMiniAppResponseBody;
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
      body: DeleteMcubeMiniAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeNebulaAppRequest extends $tea.Model {
  appId?: string;
  h5Id?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeNebulaAppResponseBody extends $tea.Model {
  deleteMcubeNebulaAppResult?: DeleteMcubeNebulaAppResponseBodyDeleteMcubeNebulaAppResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      deleteMcubeNebulaAppResult: 'DeleteMcubeNebulaAppResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteMcubeNebulaAppResult: DeleteMcubeNebulaAppResponseBodyDeleteMcubeNebulaAppResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeNebulaAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMcubeNebulaAppResponseBody;
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
      body: DeleteMcubeNebulaAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeUpgradeResourceRequest extends $tea.Model {
  appId?: string;
  id?: string;
  platform?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      platform: 'Platform',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
      platform: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeUpgradeResourceResponseBody extends $tea.Model {
  deleteResult?: DeleteMcubeUpgradeResourceResponseBodyDeleteResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      deleteResult: 'DeleteResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteResult: DeleteMcubeUpgradeResourceResponseBodyDeleteResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeUpgradeResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMcubeUpgradeResourceResponseBody;
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
      body: DeleteMcubeUpgradeResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeWhitelistRequest extends $tea.Model {
  appId?: string;
  id?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeWhitelistResponseBody extends $tea.Model {
  deleteWhitelistResult?: DeleteMcubeWhitelistResponseBodyDeleteWhitelistResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      deleteWhitelistResult: 'DeleteWhitelistResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteWhitelistResult: DeleteMcubeWhitelistResponseBodyDeleteWhitelistResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMcubeWhitelistResponseBody;
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
      body: DeleteMcubeWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMdsWhitelistContentRequest extends $tea.Model {
  appId?: string;
  tenantId?: string;
  whitelistId?: string;
  whitelistValue?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      whitelistId: 'WhitelistId',
      whitelistValue: 'WhitelistValue',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      whitelistId: 'string',
      whitelistValue: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMdsWhitelistContentResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: DeleteMdsWhitelistContentResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: DeleteMdsWhitelistContentResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMdsWhitelistContentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteMdsWhitelistContentResponseBody;
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
      body: DeleteMdsWhitelistContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExistMcubeRsaKeyRequest extends $tea.Model {
  appId?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExistMcubeRsaKeyResponseBody extends $tea.Model {
  checkRsaKeyResult?: ExistMcubeRsaKeyResponseBodyCheckRsaKeyResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      checkRsaKeyResult: 'CheckRsaKeyResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkRsaKeyResult: ExistMcubeRsaKeyResponseBodyCheckRsaKeyResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExistMcubeRsaKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExistMcubeRsaKeyResponseBody;
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
      body: ExistMcubeRsaKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMappCenterAppConfigRequest extends $tea.Model {
  apkFileUrl?: string;
  appId?: string;
  certRsaBase64?: string;
  identifier?: string;
  onexFlag?: boolean;
  systemType?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apkFileUrl: 'ApkFileUrl',
      appId: 'AppId',
      certRsaBase64: 'CertRsaBase64',
      identifier: 'Identifier',
      onexFlag: 'OnexFlag',
      systemType: 'SystemType',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkFileUrl: 'string',
      appId: 'string',
      certRsaBase64: 'string',
      identifier: 'string',
      onexFlag: 'boolean',
      systemType: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMappCenterAppConfigResponseBody extends $tea.Model {
  exportMappCenterAppConfigResult?: ExportMappCenterAppConfigResponseBodyExportMappCenterAppConfigResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      exportMappCenterAppConfigResult: 'ExportMappCenterAppConfigResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportMappCenterAppConfigResult: ExportMappCenterAppConfigResponseBodyExportMappCenterAppConfigResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMappCenterAppConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportMappCenterAppConfigResponseBody;
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
      body: ExportMappCenterAppConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTokenForUploadToMsaRequest extends $tea.Model {
  appId?: string;
  onexFlag?: boolean;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      onexFlag: 'OnexFlag',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      onexFlag: 'boolean',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTokenForUploadToMsaResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: GetFileTokenForUploadToMsaResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: GetFileTokenForUploadToMsaResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTokenForUploadToMsaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFileTokenForUploadToMsaResponseBody;
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
      body: GetFileTokenForUploadToMsaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogUrlInMsaRequest extends $tea.Model {
  appId?: string;
  id?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogUrlInMsaResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: GetLogUrlInMsaResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: GetLogUrlInMsaResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogUrlInMsaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetLogUrlInMsaResponseBody;
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
      body: GetLogUrlInMsaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeFileTokenRequest extends $tea.Model {
  appId?: string;
  onexFlag?: boolean;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      onexFlag: 'OnexFlag',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      onexFlag: 'boolean',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeFileTokenResponseBody extends $tea.Model {
  getFileTokenResult?: GetMcubeFileTokenResponseBodyGetFileTokenResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      getFileTokenResult: 'GetFileTokenResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getFileTokenResult: GetMcubeFileTokenResponseBodyGetFileTokenResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeFileTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMcubeFileTokenResponseBody;
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
      body: GetMcubeFileTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaResourceRequest extends $tea.Model {
  appId?: string;
  id?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaResourceResponseBody extends $tea.Model {
  getNebulaResourceResult?: GetMcubeNebulaResourceResponseBodyGetNebulaResourceResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      getNebulaResourceResult: 'GetNebulaResourceResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getNebulaResourceResult: GetMcubeNebulaResourceResponseBodyGetNebulaResourceResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMcubeNebulaResourceResponseBody;
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
      body: GetMcubeNebulaResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaTaskDetailRequest extends $tea.Model {
  appId?: string;
  taskId?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskId: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaTaskDetailResponseBody extends $tea.Model {
  getMcubeNebulaTaskDetailResult?: GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      getMcubeNebulaTaskDetailResult: 'GetMcubeNebulaTaskDetailResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getMcubeNebulaTaskDetailResult: GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMcubeNebulaTaskDetailResponseBody;
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
      body: GetMcubeNebulaTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradePackageInfoRequest extends $tea.Model {
  appId?: string;
  packageId?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      packageId: 'PackageId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      packageId: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradePackageInfoResponseBody extends $tea.Model {
  getPackageResult?: GetMcubeUpgradePackageInfoResponseBodyGetPackageResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      getPackageResult: 'GetPackageResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getPackageResult: GetMcubeUpgradePackageInfoResponseBodyGetPackageResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradePackageInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMcubeUpgradePackageInfoResponseBody;
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
      body: GetMcubeUpgradePackageInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradeTaskInfoRequest extends $tea.Model {
  appId?: string;
  taskId?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskId: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradeTaskInfoResponseBody extends $tea.Model {
  getTaskResult?: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      getTaskResult: 'GetTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getTaskResult: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradeTaskInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMcubeUpgradeTaskInfoResponseBody;
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
      body: GetMcubeUpgradeTaskInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigRequest extends $tea.Model {
  appId?: string;
  h5Id?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: GetMdsMiniConfigResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: GetMdsMiniConfigResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMdsMiniConfigResponseBody;
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
      body: GetMdsMiniConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppDonwloadUrlInMsaRequest extends $tea.Model {
  appId?: string;
  id?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppDonwloadUrlInMsaResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: GetUserAppDonwloadUrlInMsaResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: GetUserAppDonwloadUrlInMsaResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppDonwloadUrlInMsaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserAppDonwloadUrlInMsaResponseBody;
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
      body: GetUserAppDonwloadUrlInMsaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppEnhanceProcessInMsaRequest extends $tea.Model {
  appId?: string;
  id?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppEnhanceProcessInMsaResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: GetUserAppEnhanceProcessInMsaResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: GetUserAppEnhanceProcessInMsaResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppEnhanceProcessInMsaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserAppEnhanceProcessInMsaResponseBody;
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
      body: GetUserAppEnhanceProcessInMsaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppUploadProcessInMsaRequest extends $tea.Model {
  appId?: string;
  id?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppUploadProcessInMsaResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: GetUserAppUploadProcessInMsaResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: GetUserAppUploadProcessInMsaResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppUploadProcessInMsaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserAppUploadProcessInMsaResponseBody;
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
      body: GetUserAppUploadProcessInMsaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseBody extends $tea.Model {
  listMappCenterAppResult?: ListMappCenterAppsResponseBodyListMappCenterAppResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMappCenterAppResult: 'ListMappCenterAppResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMappCenterAppResult: ListMappCenterAppsResponseBodyListMappCenterAppResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMappCenterAppsResponseBody;
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
      body: ListMappCenterAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterWorkspacesResponseBody extends $tea.Model {
  listMappCenterWorkspaceResult?: ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMappCenterWorkspaceResult: 'ListMappCenterWorkspaceResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMappCenterWorkspaceResult: ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterWorkspacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMappCenterWorkspacesResponseBody;
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
      body: ListMappCenterWorkspacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcdpAimRequest extends $tea.Model {
  appId?: string;
  emptyTag?: string;
  keyword?: string;
  name?: string;
  pageNo?: number;
  pageSize?: number;
  sort?: string;
  sortField?: string;
  tenantId?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      emptyTag: 'EmptyTag',
      keyword: 'Keyword',
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      sort: 'Sort',
      sortField: 'SortField',
      tenantId: 'TenantId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      emptyTag: 'string',
      keyword: 'string',
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      sort: 'string',
      sortField: 'string',
      tenantId: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcdpAimResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: ListMcdpAimResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: ListMcdpAimResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcdpAimResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMcdpAimResponseBody;
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
      body: ListMcdpAimResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniAppsRequest extends $tea.Model {
  appId?: string;
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniAppsResponseBody extends $tea.Model {
  listMiniResult?: ListMcubeMiniAppsResponseBodyListMiniResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMiniResult: 'ListMiniResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMiniResult: ListMcubeMiniAppsResponseBodyListMiniResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMcubeMiniAppsResponseBody;
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
      body: ListMcubeMiniAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniPackagesRequest extends $tea.Model {
  appId?: string;
  h5Id?: string;
  packageTypes?: string;
  pageNum?: number;
  pageSize?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      packageTypes: 'PackageTypes',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      packageTypes: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniPackagesResponseBody extends $tea.Model {
  listMiniPackageResult?: ListMcubeMiniPackagesResponseBodyListMiniPackageResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMiniPackageResult: 'ListMiniPackageResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMiniPackageResult: ListMcubeMiniPackagesResponseBodyListMiniPackageResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniPackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMcubeMiniPackagesResponseBody;
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
      body: ListMcubeMiniPackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniTasksRequest extends $tea.Model {
  appId?: string;
  id?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniTasksResponseBody extends $tea.Model {
  listMiniTaskResult?: ListMcubeMiniTasksResponseBodyListMiniTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMiniTaskResult: 'ListMiniTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMiniTaskResult: ListMcubeMiniTasksResponseBodyListMiniTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMcubeMiniTasksResponseBody;
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
      body: ListMcubeMiniTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaAppsRequest extends $tea.Model {
  appId?: string;
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaAppsResponseBody extends $tea.Model {
  listMcubeNebulaAppsResult?: ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMcubeNebulaAppsResult: 'ListMcubeNebulaAppsResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMcubeNebulaAppsResult: ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMcubeNebulaAppsResponseBody;
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
      body: ListMcubeNebulaAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaResourcesRequest extends $tea.Model {
  appId?: string;
  h5Id?: string;
  pageNum?: number;
  pageSize?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaResourcesResponseBody extends $tea.Model {
  listMcubeNebulaResourceResult?: ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMcubeNebulaResourceResult: 'ListMcubeNebulaResourceResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMcubeNebulaResourceResult: ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMcubeNebulaResourcesResponseBody;
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
      body: ListMcubeNebulaResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaTasksRequest extends $tea.Model {
  appId?: string;
  id?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaTasksResponseBody extends $tea.Model {
  listMcubeNebulaTaskResult?: ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listMcubeNebulaTaskResult: 'ListMcubeNebulaTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listMcubeNebulaTaskResult: ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMcubeNebulaTasksResponseBody;
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
      body: ListMcubeNebulaTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradePackagesRequest extends $tea.Model {
  appId?: string;
  pageNum?: number;
  pageSize?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradePackagesResponseBody extends $tea.Model {
  listPackagesResult?: ListMcubeUpgradePackagesResponseBodyListPackagesResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listPackagesResult: 'ListPackagesResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listPackagesResult: ListMcubeUpgradePackagesResponseBodyListPackagesResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradePackagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMcubeUpgradePackagesResponseBody;
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
      body: ListMcubeUpgradePackagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradeTasksRequest extends $tea.Model {
  appId?: string;
  packageId?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      packageId: 'PackageId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      packageId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradeTasksResponseBody extends $tea.Model {
  listTaskResult?: ListMcubeUpgradeTasksResponseBodyListTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listTaskResult: 'ListTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listTaskResult: ListMcubeUpgradeTasksResponseBodyListTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradeTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMcubeUpgradeTasksResponseBody;
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
      body: ListMcubeUpgradeTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeWhitelistsRequest extends $tea.Model {
  appId?: string;
  pageNum?: number;
  pageSize?: number;
  tenantId?: string;
  whitelistName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      tenantId: 'TenantId',
      whitelistName: 'WhitelistName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      tenantId: 'string',
      whitelistName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeWhitelistsResponseBody extends $tea.Model {
  listWhitelistResult?: ListMcubeWhitelistsResponseBodyListWhitelistResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      listWhitelistResult: 'ListWhitelistResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listWhitelistResult: ListMcubeWhitelistsResponseBodyListWhitelistResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeWhitelistsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMcubeWhitelistsResponseBody;
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
      body: ListMcubeWhitelistsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiRequest extends $tea.Model {
  apiStatus?: string;
  apiType?: string;
  appId?: string;
  format?: string;
  host?: string;
  needEncrypt?: string;
  needEtag?: string;
  needSign?: string;
  operationType?: string;
  optFuzzy?: string;
  pageIndex?: number;
  pageSize?: number;
  sysId?: number;
  sysName?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      format: 'Format',
      host: 'Host',
      needEncrypt: 'NeedEncrypt',
      needEtag: 'NeedEtag',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      optFuzzy: 'OptFuzzy',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      sysId: 'SysId',
      sysName: 'SysName',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      format: 'string',
      host: 'string',
      needEncrypt: 'string',
      needEtag: 'string',
      needSign: 'string',
      operationType: 'string',
      optFuzzy: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      sysId: 'number',
      sysName: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: ListMgsApiResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: ListMgsApiResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListMgsApiResponseBody;
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
      body: ListMgsApiResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogMsaQueryRequest extends $tea.Model {
  appId?: string;
  id?: string;
  onexFlag?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      onexFlag: 'OnexFlag',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
      onexFlag: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogMsaQueryResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: LogMsaQueryResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: LogMsaQueryResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogMsaQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: LogMsaQueryResponseBody;
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
      body: LogMsaQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MTRSOCRServiceRequest extends $tea.Model {
  appId?: string;
  imageRaw?: string;
  mask?: boolean;
  tenantId?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      imageRaw: 'ImageRaw',
      mask: 'Mask',
      tenantId: 'TenantId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      imageRaw: 'string',
      mask: 'boolean',
      tenantId: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MTRSOCRServiceResponseBody extends $tea.Model {
  code?: string;
  msg?: string;
  requestId?: string;
  result?: string;
  status?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      msg: 'Msg',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      msg: 'string',
      requestId: 'string',
      result: 'string',
      status: 'boolean',
      traceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MTRSOCRServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: MTRSOCRServiceResponseBody;
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
      body: MTRSOCRServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiAddActiveCodeRequest extends $tea.Model {
  appId?: string;
  mpaasMqcpOpenApiAddActiveCodeReqJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMqcpOpenApiAddActiveCodeReqJsonStr: 'MpaasMqcpOpenApiAddActiveCodeReqJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMqcpOpenApiAddActiveCodeReqJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiAddActiveCodeResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiAddActiveCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenApiAddActiveCodeResponseBody;
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
      body: OpenApiAddActiveCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiAddActiveSceneRequest extends $tea.Model {
  appId?: string;
  mpaasMqcpOpenApiAddActiveSceneReqJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMqcpOpenApiAddActiveSceneReqJsonStr: 'MpaasMqcpOpenApiAddActiveSceneReqJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMqcpOpenApiAddActiveSceneReqJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiAddActiveSceneResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiAddActiveSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenApiAddActiveSceneResponseBody;
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
      body: OpenApiAddActiveSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiCallbackRequest extends $tea.Model {
  appId?: string;
  mpaasMqcpOpenApiCallbackRequestJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMqcpOpenApiCallbackRequestJsonStr: 'MpaasMqcpOpenApiCallbackRequestJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMqcpOpenApiCallbackRequestJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiCallbackResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiCallbackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenApiCallbackResponseBody;
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
      body: OpenApiCallbackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiDecodeRequest extends $tea.Model {
  appId?: string;
  mpaasMqcpOpenApiDecodeRequestJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMqcpOpenApiDecodeRequestJsonStr: 'MpaasMqcpOpenApiDecodeRequestJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMqcpOpenApiDecodeRequestJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiDecodeResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiDecodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenApiDecodeResponseBody;
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
      body: OpenApiDecodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiDeleteActiveCodeRequest extends $tea.Model {
  appId?: string;
  mpaasMqcpOpenApiDeleteActiveCodeReqJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMqcpOpenApiDeleteActiveCodeReqJsonStr: 'MpaasMqcpOpenApiDeleteActiveCodeReqJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMqcpOpenApiDeleteActiveCodeReqJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiDeleteActiveCodeResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiDeleteActiveCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenApiDeleteActiveCodeResponseBody;
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
      body: OpenApiDeleteActiveCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiEncodeRequest extends $tea.Model {
  appId?: string;
  mpaasMqcpOpenApiEncodeRequestJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMqcpOpenApiEncodeRequestJsonStr: 'MpaasMqcpOpenApiEncodeRequestJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMqcpOpenApiEncodeRequestJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiEncodeResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiEncodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenApiEncodeResponseBody;
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
      body: OpenApiEncodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiQueryActiveCodeRequest extends $tea.Model {
  appId?: string;
  mpaasMqcpOpenApiQueryActiveCodeReqJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMqcpOpenApiQueryActiveCodeReqJsonStr: 'MpaasMqcpOpenApiQueryActiveCodeReqJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMqcpOpenApiQueryActiveCodeReqJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiQueryActiveCodeResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiQueryActiveCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenApiQueryActiveCodeResponseBody;
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
      body: OpenApiQueryActiveCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiQueryActiveSceneRequest extends $tea.Model {
  appId?: string;
  mpaasMqcpOpenApiQueryActiveSceneReqJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMqcpOpenApiQueryActiveSceneReqJsonStr: 'MpaasMqcpOpenApiQueryActiveSceneReqJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMqcpOpenApiQueryActiveSceneReqJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiQueryActiveSceneResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiQueryActiveSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenApiQueryActiveSceneResponseBody;
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
      body: OpenApiQueryActiveSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiUniqueEncodeRequest extends $tea.Model {
  appId?: string;
  mpaasMqcpOpenApiUniqueEncodeRequestJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMqcpOpenApiUniqueEncodeRequestJsonStr: 'MpaasMqcpOpenApiUniqueEncodeRequestJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMqcpOpenApiUniqueEncodeRequestJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiUniqueEncodeResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiUniqueEncodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenApiUniqueEncodeResponseBody;
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
      body: OpenApiUniqueEncodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiUpdateActiveCodeRequest extends $tea.Model {
  appId?: string;
  mpaasMqcpOpenApiUpdateActiveCodeReqJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMqcpOpenApiUpdateActiveCodeReqJsonStr: 'MpaasMqcpOpenApiUpdateActiveCodeReqJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMqcpOpenApiUpdateActiveCodeReqJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiUpdateActiveCodeResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiUpdateActiveCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenApiUpdateActiveCodeResponseBody;
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
      body: OpenApiUpdateActiveCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiUpdateActiveSceneRequest extends $tea.Model {
  appId?: string;
  mpaasMqcpOpenApiUpdateActiveSceneReqJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMqcpOpenApiUpdateActiveSceneReqJsonStr: 'MpaasMqcpOpenApiUpdateActiveSceneReqJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMqcpOpenApiUpdateActiveSceneReqJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiUpdateActiveSceneResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenApiUpdateActiveSceneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: OpenApiUpdateActiveSceneResponseBody;
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
      body: OpenApiUpdateActiveSceneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushBindRequest extends $tea.Model {
  appId?: string;
  deliveryToken?: string;
  osType?: number;
  phoneNumber?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deliveryToken: 'DeliveryToken',
      osType: 'OsType',
      phoneNumber: 'PhoneNumber',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deliveryToken: 'string',
      osType: 'number',
      phoneNumber: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushBindResponseBody extends $tea.Model {
  pushResult?: PushBindResponseBodyPushResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: PushBindResponseBodyPushResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushBindResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushBindResponseBody;
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
      body: PushBindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushBroadcastRequest extends $tea.Model {
  androidChannel?: number;
  appId?: string;
  bindPeriod?: number;
  channelId?: string;
  classification?: string;
  deliveryType?: number;
  expiredSeconds?: number;
  extendedParams?: string;
  miChannelId?: string;
  msgkey?: string;
  notifyType?: string;
  pushAction?: number;
  pushStatus?: number;
  silent?: number;
  strategyContent?: string;
  strategyType?: number;
  taskName?: string;
  templateKeyValue?: string;
  templateName?: string;
  thirdChannelCategory?: { [key: string]: any };
  unBindPeriod?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      androidChannel: 'AndroidChannel',
      appId: 'AppId',
      bindPeriod: 'BindPeriod',
      channelId: 'ChannelId',
      classification: 'Classification',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      miChannelId: 'MiChannelId',
      msgkey: 'Msgkey',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      pushStatus: 'PushStatus',
      silent: 'Silent',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      taskName: 'TaskName',
      templateKeyValue: 'TemplateKeyValue',
      templateName: 'TemplateName',
      thirdChannelCategory: 'ThirdChannelCategory',
      unBindPeriod: 'UnBindPeriod',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidChannel: 'number',
      appId: 'string',
      bindPeriod: 'number',
      channelId: 'string',
      classification: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      miChannelId: 'string',
      msgkey: 'string',
      notifyType: 'string',
      pushAction: 'number',
      pushStatus: 'number',
      silent: 'number',
      strategyContent: 'string',
      strategyType: 'number',
      taskName: 'string',
      templateKeyValue: 'string',
      templateName: 'string',
      thirdChannelCategory: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      unBindPeriod: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushBroadcastShrinkRequest extends $tea.Model {
  androidChannel?: number;
  appId?: string;
  bindPeriod?: number;
  channelId?: string;
  classification?: string;
  deliveryType?: number;
  expiredSeconds?: number;
  extendedParams?: string;
  miChannelId?: string;
  msgkey?: string;
  notifyType?: string;
  pushAction?: number;
  pushStatus?: number;
  silent?: number;
  strategyContent?: string;
  strategyType?: number;
  taskName?: string;
  templateKeyValue?: string;
  templateName?: string;
  thirdChannelCategoryShrink?: string;
  unBindPeriod?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      androidChannel: 'AndroidChannel',
      appId: 'AppId',
      bindPeriod: 'BindPeriod',
      channelId: 'ChannelId',
      classification: 'Classification',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      miChannelId: 'MiChannelId',
      msgkey: 'Msgkey',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      pushStatus: 'PushStatus',
      silent: 'Silent',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      taskName: 'TaskName',
      templateKeyValue: 'TemplateKeyValue',
      templateName: 'TemplateName',
      thirdChannelCategoryShrink: 'ThirdChannelCategory',
      unBindPeriod: 'UnBindPeriod',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidChannel: 'number',
      appId: 'string',
      bindPeriod: 'number',
      channelId: 'string',
      classification: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      miChannelId: 'string',
      msgkey: 'string',
      notifyType: 'string',
      pushAction: 'number',
      pushStatus: 'number',
      silent: 'number',
      strategyContent: 'string',
      strategyType: 'number',
      taskName: 'string',
      templateKeyValue: 'string',
      templateName: 'string',
      thirdChannelCategoryShrink: 'string',
      unBindPeriod: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushBroadcastResponseBody extends $tea.Model {
  pushResult?: PushBroadcastResponseBodyPushResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: PushBroadcastResponseBodyPushResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushBroadcastResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushBroadcastResponseBody;
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
      body: PushBroadcastResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  classification?: string;
  deliveryType?: number;
  expiredSeconds?: number;
  extendedParams?: string;
  miChannelId?: string;
  notifyType?: string;
  pushAction?: number;
  silent?: number;
  strategyContent?: string;
  strategyType?: number;
  targetMsg?: PushMultipleRequestTargetMsg[];
  taskName?: string;
  templateName?: string;
  thirdChannelCategory?: { [key: string]: any };
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      classification: 'Classification',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      miChannelId: 'MiChannelId',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      silent: 'Silent',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      targetMsg: 'TargetMsg',
      taskName: 'TaskName',
      templateName: 'TemplateName',
      thirdChannelCategory: 'ThirdChannelCategory',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      classification: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      miChannelId: 'string',
      notifyType: 'string',
      pushAction: 'number',
      silent: 'number',
      strategyContent: 'string',
      strategyType: 'number',
      targetMsg: { 'type': 'array', 'itemType': PushMultipleRequestTargetMsg },
      taskName: 'string',
      templateName: 'string',
      thirdChannelCategory: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleShrinkRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  classification?: string;
  deliveryType?: number;
  expiredSeconds?: number;
  extendedParams?: string;
  miChannelId?: string;
  notifyType?: string;
  pushAction?: number;
  silent?: number;
  strategyContent?: string;
  strategyType?: number;
  targetMsg?: PushMultipleShrinkRequestTargetMsg[];
  taskName?: string;
  templateName?: string;
  thirdChannelCategoryShrink?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      classification: 'Classification',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      miChannelId: 'MiChannelId',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      silent: 'Silent',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      targetMsg: 'TargetMsg',
      taskName: 'TaskName',
      templateName: 'TemplateName',
      thirdChannelCategoryShrink: 'ThirdChannelCategory',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      classification: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      miChannelId: 'string',
      notifyType: 'string',
      pushAction: 'number',
      silent: 'number',
      strategyContent: 'string',
      strategyType: 'number',
      targetMsg: { 'type': 'array', 'itemType': PushMultipleShrinkRequestTargetMsg },
      taskName: 'string',
      templateName: 'string',
      thirdChannelCategoryShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleResponseBody extends $tea.Model {
  pushResult?: PushMultipleResponseBodyPushResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: PushMultipleResponseBodyPushResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushMultipleResponseBody;
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
      body: PushMultipleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushReportRequest extends $tea.Model {
  appId?: string;
  appVersion?: string;
  channel?: string;
  connectType?: string;
  deliveryToken?: string;
  imei?: string;
  imsi?: string;
  model?: string;
  osType?: number;
  pushVersion?: string;
  thirdChannel?: number;
  thirdChannelDeviceToken?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      channel: 'Channel',
      connectType: 'ConnectType',
      deliveryToken: 'DeliveryToken',
      imei: 'Imei',
      imsi: 'Imsi',
      model: 'Model',
      osType: 'OsType',
      pushVersion: 'PushVersion',
      thirdChannel: 'ThirdChannel',
      thirdChannelDeviceToken: 'ThirdChannelDeviceToken',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      channel: 'string',
      connectType: 'string',
      deliveryToken: 'string',
      imei: 'string',
      imsi: 'string',
      model: 'string',
      osType: 'number',
      pushVersion: 'string',
      thirdChannel: 'number',
      thirdChannelDeviceToken: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushReportResponseBody extends $tea.Model {
  pushResult?: PushReportResponseBodyPushResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: PushReportResponseBodyPushResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushReportResponseBody;
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
      body: PushReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushSimpleRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  classification?: string;
  content?: string;
  deliveryType?: number;
  expiredSeconds?: number;
  extendedParams?: string;
  iconUrls?: string;
  imageUrls?: string;
  miChannelId?: string;
  notifyType?: string;
  pushAction?: number;
  pushStyle?: number;
  silent?: number;
  smsSignName?: string;
  smsStrategy?: number;
  smsTemplateCode?: string;
  smsTemplateParam?: string;
  strategyContent?: string;
  strategyType?: number;
  targetMsgkey?: string;
  taskName?: string;
  thirdChannelCategory?: { [key: string]: any };
  title?: string;
  uri?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      classification: 'Classification',
      content: 'Content',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      iconUrls: 'IconUrls',
      imageUrls: 'ImageUrls',
      miChannelId: 'MiChannelId',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      pushStyle: 'PushStyle',
      silent: 'Silent',
      smsSignName: 'SmsSignName',
      smsStrategy: 'SmsStrategy',
      smsTemplateCode: 'SmsTemplateCode',
      smsTemplateParam: 'SmsTemplateParam',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      targetMsgkey: 'TargetMsgkey',
      taskName: 'TaskName',
      thirdChannelCategory: 'ThirdChannelCategory',
      title: 'Title',
      uri: 'Uri',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      classification: 'string',
      content: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      iconUrls: 'string',
      imageUrls: 'string',
      miChannelId: 'string',
      notifyType: 'string',
      pushAction: 'number',
      pushStyle: 'number',
      silent: 'number',
      smsSignName: 'string',
      smsStrategy: 'number',
      smsTemplateCode: 'string',
      smsTemplateParam: 'string',
      strategyContent: 'string',
      strategyType: 'number',
      targetMsgkey: 'string',
      taskName: 'string',
      thirdChannelCategory: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
      uri: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushSimpleShrinkRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  classification?: string;
  content?: string;
  deliveryType?: number;
  expiredSeconds?: number;
  extendedParams?: string;
  iconUrls?: string;
  imageUrls?: string;
  miChannelId?: string;
  notifyType?: string;
  pushAction?: number;
  pushStyle?: number;
  silent?: number;
  smsSignName?: string;
  smsStrategy?: number;
  smsTemplateCode?: string;
  smsTemplateParam?: string;
  strategyContent?: string;
  strategyType?: number;
  targetMsgkey?: string;
  taskName?: string;
  thirdChannelCategoryShrink?: string;
  title?: string;
  uri?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      classification: 'Classification',
      content: 'Content',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      iconUrls: 'IconUrls',
      imageUrls: 'ImageUrls',
      miChannelId: 'MiChannelId',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      pushStyle: 'PushStyle',
      silent: 'Silent',
      smsSignName: 'SmsSignName',
      smsStrategy: 'SmsStrategy',
      smsTemplateCode: 'SmsTemplateCode',
      smsTemplateParam: 'SmsTemplateParam',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      targetMsgkey: 'TargetMsgkey',
      taskName: 'TaskName',
      thirdChannelCategoryShrink: 'ThirdChannelCategory',
      title: 'Title',
      uri: 'Uri',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      classification: 'string',
      content: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      iconUrls: 'string',
      imageUrls: 'string',
      miChannelId: 'string',
      notifyType: 'string',
      pushAction: 'number',
      pushStyle: 'number',
      silent: 'number',
      smsSignName: 'string',
      smsStrategy: 'number',
      smsTemplateCode: 'string',
      smsTemplateParam: 'string',
      strategyContent: 'string',
      strategyType: 'number',
      targetMsgkey: 'string',
      taskName: 'string',
      thirdChannelCategoryShrink: 'string',
      title: 'string',
      uri: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushSimpleResponseBody extends $tea.Model {
  pushResult?: PushSimpleResponseBodyPushResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: PushSimpleResponseBodyPushResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushSimpleResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushSimpleResponseBody;
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
      body: PushSimpleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTemplateRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  classification?: string;
  deliveryType?: number;
  expiredSeconds?: number;
  extendedParams?: string;
  miChannelId?: string;
  notifyType?: string;
  pushAction?: number;
  silent?: number;
  smsSignName?: string;
  smsStrategy?: number;
  smsTemplateCode?: string;
  smsTemplateParam?: string;
  strategyContent?: string;
  strategyType?: number;
  targetMsgkey?: string;
  taskName?: string;
  templateKeyValue?: string;
  templateName?: string;
  thirdChannelCategory?: { [key: string]: any };
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      classification: 'Classification',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      miChannelId: 'MiChannelId',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      silent: 'Silent',
      smsSignName: 'SmsSignName',
      smsStrategy: 'SmsStrategy',
      smsTemplateCode: 'SmsTemplateCode',
      smsTemplateParam: 'SmsTemplateParam',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      targetMsgkey: 'TargetMsgkey',
      taskName: 'TaskName',
      templateKeyValue: 'TemplateKeyValue',
      templateName: 'TemplateName',
      thirdChannelCategory: 'ThirdChannelCategory',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      classification: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      miChannelId: 'string',
      notifyType: 'string',
      pushAction: 'number',
      silent: 'number',
      smsSignName: 'string',
      smsStrategy: 'number',
      smsTemplateCode: 'string',
      smsTemplateParam: 'string',
      strategyContent: 'string',
      strategyType: 'number',
      targetMsgkey: 'string',
      taskName: 'string',
      templateKeyValue: 'string',
      templateName: 'string',
      thirdChannelCategory: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTemplateShrinkRequest extends $tea.Model {
  appId?: string;
  channelId?: string;
  classification?: string;
  deliveryType?: number;
  expiredSeconds?: number;
  extendedParams?: string;
  miChannelId?: string;
  notifyType?: string;
  pushAction?: number;
  silent?: number;
  smsSignName?: string;
  smsStrategy?: number;
  smsTemplateCode?: string;
  smsTemplateParam?: string;
  strategyContent?: string;
  strategyType?: number;
  targetMsgkey?: string;
  taskName?: string;
  templateKeyValue?: string;
  templateName?: string;
  thirdChannelCategoryShrink?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      classification: 'Classification',
      deliveryType: 'DeliveryType',
      expiredSeconds: 'ExpiredSeconds',
      extendedParams: 'ExtendedParams',
      miChannelId: 'MiChannelId',
      notifyType: 'NotifyType',
      pushAction: 'PushAction',
      silent: 'Silent',
      smsSignName: 'SmsSignName',
      smsStrategy: 'SmsStrategy',
      smsTemplateCode: 'SmsTemplateCode',
      smsTemplateParam: 'SmsTemplateParam',
      strategyContent: 'StrategyContent',
      strategyType: 'StrategyType',
      targetMsgkey: 'TargetMsgkey',
      taskName: 'TaskName',
      templateKeyValue: 'TemplateKeyValue',
      templateName: 'TemplateName',
      thirdChannelCategoryShrink: 'ThirdChannelCategory',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      classification: 'string',
      deliveryType: 'number',
      expiredSeconds: 'number',
      extendedParams: 'string',
      miChannelId: 'string',
      notifyType: 'string',
      pushAction: 'number',
      silent: 'number',
      smsSignName: 'string',
      smsStrategy: 'number',
      smsTemplateCode: 'string',
      smsTemplateParam: 'string',
      strategyContent: 'string',
      strategyType: 'number',
      targetMsgkey: 'string',
      taskName: 'string',
      templateKeyValue: 'string',
      templateName: 'string',
      thirdChannelCategoryShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTemplateResponseBody extends $tea.Model {
  pushResult?: PushTemplateResponseBodyPushResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: PushTemplateResponseBodyPushResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushTemplateResponseBody;
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
      body: PushTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUnBindRequest extends $tea.Model {
  appId?: string;
  deliveryToken?: string;
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      deliveryToken: 'DeliveryToken',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      deliveryToken: 'string',
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUnBindResponseBody extends $tea.Model {
  pushResult?: PushUnBindResponseBodyPushResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: PushUnBindResponseBodyPushResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUnBindResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PushUnBindResponseBody;
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
      body: PushUnBindResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppRequest extends $tea.Model {
  appId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponseBody extends $tea.Model {
  queryMappCenterAppResult?: QueryMappCenterAppResponseBodyQueryMappCenterAppResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      queryMappCenterAppResult: 'QueryMappCenterAppResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryMappCenterAppResult: QueryMappCenterAppResponseBodyQueryMappCenterAppResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMappCenterAppResponseBody;
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
      body: QueryMappCenterAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcdpAimRequest extends $tea.Model {
  appId?: string;
  id?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcdpAimResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryMcdpAimResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryMcdpAimResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcdpAimResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMcdpAimResponseBody;
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
      body: QueryMcdpAimResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcdpZoneRequest extends $tea.Model {
  appId?: string;
  id?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcdpZoneResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryMcdpZoneResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryMcdpZoneResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcdpZoneResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMcdpZoneResponseBody;
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
      body: QueryMcdpZoneResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniPackageRequest extends $tea.Model {
  appId?: string;
  h5Id?: string;
  id?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      h5Id: 'H5Id',
      id: 'Id',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      h5Id: 'string',
      id: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniPackageResponseBody extends $tea.Model {
  queryMiniPackageResult?: QueryMcubeMiniPackageResponseBodyQueryMiniPackageResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      queryMiniPackageResult: 'QueryMiniPackageResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryMiniPackageResult: QueryMcubeMiniPackageResponseBodyQueryMiniPackageResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMcubeMiniPackageResponseBody;
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
      body: QueryMcubeMiniPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniTaskRequest extends $tea.Model {
  appId?: string;
  taskId?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskId: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniTaskResponseBody extends $tea.Model {
  queryMiniTaskResult?: QueryMcubeMiniTaskResponseBodyQueryMiniTaskResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      queryMiniTaskResult: 'QueryMiniTaskResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryMiniTaskResult: QueryMcubeMiniTaskResponseBodyQueryMiniTaskResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMcubeMiniTaskResponseBody;
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
      body: QueryMcubeMiniTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeVhostRequest extends $tea.Model {
  appId?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeVhostResponseBody extends $tea.Model {
  queryVhostResult?: QueryMcubeVhostResponseBodyQueryVhostResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      queryVhostResult: 'QueryVhostResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryVhostResult: QueryMcubeVhostResponseBodyQueryVhostResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeVhostResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMcubeVhostResponseBody;
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
      body: QueryMcubeVhostResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailRequest extends $tea.Model {
  appId?: string;
  taskId?: number;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskId: 'TaskId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskId: 'number',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryMdsUpgradeTaskDetailResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryMdsUpgradeTaskDetailResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMdsUpgradeTaskDetailResponseBody;
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
      body: QueryMdsUpgradeTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageRequest extends $tea.Model {
  apiStatus?: string;
  apiType?: string;
  appId?: string;
  format?: string;
  host?: string;
  needEncrypt?: string;
  needEtag?: string;
  needSign?: string;
  operationType?: string;
  optFuzzy?: string;
  pageIndex?: number;
  pageSize?: number;
  sysId?: number;
  sysName?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      format: 'Format',
      host: 'Host',
      needEncrypt: 'NeedEncrypt',
      needEtag: 'NeedEtag',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      optFuzzy: 'OptFuzzy',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      sysId: 'SysId',
      sysName: 'SysName',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      format: 'string',
      host: 'string',
      needEncrypt: 'string',
      needEtag: 'string',
      needSign: 'string',
      operationType: 'string',
      optFuzzy: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      sysId: 'number',
      sysName: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryMgsApipageResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryMgsApipageResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMgsApipageResponseBody;
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
      body: QueryMgsApipageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestRequest extends $tea.Model {
  appId?: string;
  format?: string;
  id?: number;
  tenantId?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      format: 'Format',
      id: 'Id',
      tenantId: 'TenantId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      format: 'string',
      id: 'number',
      tenantId: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryMgsApirestResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryMgsApirestResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMgsApirestResponseBody;
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
      body: QueryMgsApirestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsTestreqbodyautogenRequest extends $tea.Model {
  appId?: string;
  format?: string;
  mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      format: 'Format',
      mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr: 'MpaasMappcenterMgsTestreqbodyautogenQueryJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      format: 'string',
      mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsTestreqbodyautogenResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsTestreqbodyautogenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMgsTestreqbodyautogenResponseBody;
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
      body: QueryMgsTestreqbodyautogenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpsSchedulerListRequest extends $tea.Model {
  appId?: string;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  type?: number;
  uniqueId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      type: 'Type',
      uniqueId: 'UniqueId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      type: 'number',
      uniqueId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpsSchedulerListResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryMpsSchedulerListResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryMpsSchedulerListResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpsSchedulerListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryMpsSchedulerListResponseBody;
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
      body: QueryMpsSchedulerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisCoreIndexRequest extends $tea.Model {
  appId?: string;
  channel?: string;
  endTime?: number;
  platform?: string;
  startTime?: number;
  taskId?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channel: 'Channel',
      endTime: 'EndTime',
      platform: 'Platform',
      startTime: 'StartTime',
      taskId: 'TaskId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channel: 'string',
      endTime: 'number',
      platform: 'string',
      startTime: 'number',
      taskId: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisCoreIndexResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryPushAnalysisCoreIndexResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryPushAnalysisCoreIndexResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisCoreIndexResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPushAnalysisCoreIndexResponseBody;
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
      body: QueryPushAnalysisCoreIndexResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskDetailRequest extends $tea.Model {
  appId?: string;
  taskId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskDetailResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryPushAnalysisTaskDetailResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryPushAnalysisTaskDetailResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskDetailResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPushAnalysisTaskDetailResponseBody;
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
      body: QueryPushAnalysisTaskDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskListRequest extends $tea.Model {
  appId?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  taskId?: string;
  taskName?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      taskId: 'TaskId',
      taskName: 'TaskName',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      taskId: 'string',
      taskName: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskListResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryPushAnalysisTaskListResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryPushAnalysisTaskListResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPushAnalysisTaskListResponseBody;
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
      body: QueryPushAnalysisTaskListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushSchedulerListRequest extends $tea.Model {
  appId?: string;
  endTime?: number;
  pageNumber?: number;
  pageSize?: number;
  startTime?: number;
  type?: number;
  uniqueId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      type: 'Type',
      uniqueId: 'UniqueId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      endTime: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
      type: 'number',
      uniqueId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushSchedulerListResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: QueryPushSchedulerListResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: QueryPushSchedulerListResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushSchedulerListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryPushSchedulerListResponseBody;
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
      body: QueryPushSchedulerListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePushMessageRequest extends $tea.Model {
  appId?: string;
  messageId?: string;
  targetId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      messageId: 'MessageId',
      targetId: 'TargetId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      messageId: 'string',
      targetId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePushMessageResponseBody extends $tea.Model {
  pushResult?: RevokePushMessageResponseBodyPushResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: RevokePushMessageResponseBodyPushResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePushMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokePushMessageResponseBody;
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
      body: RevokePushMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePushTaskRequest extends $tea.Model {
  appId?: string;
  taskId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      taskId: 'TaskId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      taskId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePushTaskResponseBody extends $tea.Model {
  pushResult?: RevokePushTaskResponseBodyPushResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      pushResult: 'PushResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResult: RevokePushTaskResponseBodyPushResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePushTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RevokePushTaskResponseBody;
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
      body: RevokePushTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMsaDiffRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMsaDiffRunJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMsaDiffRunJsonStr: 'MpaasMappcenterMsaDiffRunJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMsaDiffRunJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMsaDiffResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: RunMsaDiffResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: RunMsaDiffResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMsaDiffResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RunMsaDiffResponseBody;
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
      body: RunMsaDiffResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMgsApirestRequest extends $tea.Model {
  appId?: string;
  mpaasMappcenterMgsApirestSaveJsonStr?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      mpaasMappcenterMgsApirestSaveJsonStr: 'MpaasMappcenterMgsApirestSaveJsonStr',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      mpaasMappcenterMgsApirestSaveJsonStr: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMgsApirestResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: SaveMgsApirestResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: SaveMgsApirestResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMgsApirestResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveMgsApirestResponseBody;
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
      body: SaveMgsApirestResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartUserAppAsyncEnhanceInMsaRequest extends $tea.Model {
  apkProtector?: boolean;
  appId?: string;
  assetsFileList?: string;
  classes?: string;
  dalvikDebugger?: number;
  emulatorEnvironment?: number;
  id?: number;
  javaHook?: number;
  memoryDump?: number;
  nativeDebugger?: number;
  nativeHook?: number;
  packageTampered?: number;
  root?: number;
  runMode?: string;
  soFileList?: string;
  taskType?: string;
  tenantId?: string;
  totalSwitch?: boolean;
  useAShield?: boolean;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apkProtector: 'ApkProtector',
      appId: 'AppId',
      assetsFileList: 'AssetsFileList',
      classes: 'Classes',
      dalvikDebugger: 'DalvikDebugger',
      emulatorEnvironment: 'EmulatorEnvironment',
      id: 'Id',
      javaHook: 'JavaHook',
      memoryDump: 'MemoryDump',
      nativeDebugger: 'NativeDebugger',
      nativeHook: 'NativeHook',
      packageTampered: 'PackageTampered',
      root: 'Root',
      runMode: 'RunMode',
      soFileList: 'SoFileList',
      taskType: 'TaskType',
      tenantId: 'TenantId',
      totalSwitch: 'TotalSwitch',
      useAShield: 'UseAShield',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkProtector: 'boolean',
      appId: 'string',
      assetsFileList: 'string',
      classes: 'string',
      dalvikDebugger: 'number',
      emulatorEnvironment: 'number',
      id: 'number',
      javaHook: 'number',
      memoryDump: 'number',
      nativeDebugger: 'number',
      nativeHook: 'number',
      packageTampered: 'number',
      root: 'number',
      runMode: 'string',
      soFileList: 'string',
      taskType: 'string',
      tenantId: 'string',
      totalSwitch: 'boolean',
      useAShield: 'boolean',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartUserAppAsyncEnhanceInMsaResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: StartUserAppAsyncEnhanceInMsaResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: StartUserAppAsyncEnhanceInMsaResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartUserAppAsyncEnhanceInMsaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartUserAppAsyncEnhanceInMsaResponseBody;
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
      body: StartUserAppAsyncEnhanceInMsaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcubeWhitelistRequest extends $tea.Model {
  appId?: string;
  id?: string;
  keyIds?: string;
  onexFlag?: boolean;
  ossUrl?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      id: 'Id',
      keyIds: 'KeyIds',
      onexFlag: 'OnexFlag',
      ossUrl: 'OssUrl',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      id: 'string',
      keyIds: 'string',
      onexFlag: 'boolean',
      ossUrl: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcubeWhitelistResponseBody extends $tea.Model {
  addWhitelistResult?: UpdateMcubeWhitelistResponseBodyAddWhitelistResult;
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      addWhitelistResult: 'AddWhitelistResult',
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWhitelistResult: UpdateMcubeWhitelistResponseBodyAddWhitelistResult,
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcubeWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMcubeWhitelistResponseBody;
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
      body: UpdateMcubeWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMpaasAppInfoRequest extends $tea.Model {
  appId?: string;
  appName?: string;
  iconFileUrl?: string;
  identifier?: string;
  onexFlag?: boolean;
  systemType?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      iconFileUrl: 'IconFileUrl',
      identifier: 'Identifier',
      onexFlag: 'OnexFlag',
      systemType: 'SystemType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      iconFileUrl: 'string',
      identifier: 'string',
      onexFlag: 'boolean',
      systemType: 'string',
      tenantId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMpaasAppInfoResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: UpdateMpaasAppInfoResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: UpdateMpaasAppInfoResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMpaasAppInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateMpaasAppInfoResponseBody;
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
      body: UpdateMpaasAppInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadBitcodeToMsaRequest extends $tea.Model {
  appId?: string;
  bitcode?: string;
  codeVersion?: string;
  license?: string;
  tenantId?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      bitcode: 'Bitcode',
      codeVersion: 'CodeVersion',
      license: 'License',
      tenantId: 'TenantId',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      bitcode: 'string',
      codeVersion: 'string',
      license: 'string',
      tenantId: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadBitcodeToMsaResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: UploadBitcodeToMsaResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: UploadBitcodeToMsaResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadBitcodeToMsaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadBitcodeToMsaResponseBody;
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
      body: UploadBitcodeToMsaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeMiniPackageRequest extends $tea.Model {
  appId?: string;
  autoInstall?: number;
  clientVersionMax?: string;
  clientVersionMin?: string;
  enableKeepAlive?: string;
  enableOptionMenu?: string;
  enableTabBar?: number;
  extendInfo?: string;
  h5Id?: string;
  h5Name?: string;
  h5Version?: string;
  iconFileUrl?: string;
  iconUrl?: string;
  installType?: number;
  mainUrl?: string;
  onexFlag?: boolean;
  packageType?: number;
  platform?: string;
  resourceFileUrl?: string;
  resourceType?: number;
  tenantId?: string;
  userId?: string;
  uuid?: string;
  vhost?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      enableKeepAlive: 'EnableKeepAlive',
      enableOptionMenu: 'EnableOptionMenu',
      enableTabBar: 'EnableTabBar',
      extendInfo: 'ExtendInfo',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      iconFileUrl: 'IconFileUrl',
      iconUrl: 'IconUrl',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      onexFlag: 'OnexFlag',
      packageType: 'PackageType',
      platform: 'Platform',
      resourceFileUrl: 'ResourceFileUrl',
      resourceType: 'ResourceType',
      tenantId: 'TenantId',
      userId: 'UserId',
      uuid: 'Uuid',
      vhost: 'Vhost',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      enableKeepAlive: 'string',
      enableOptionMenu: 'string',
      enableTabBar: 'number',
      extendInfo: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      iconFileUrl: 'string',
      iconUrl: 'string',
      installType: 'number',
      mainUrl: 'string',
      onexFlag: 'boolean',
      packageType: 'number',
      platform: 'string',
      resourceFileUrl: 'string',
      resourceType: 'number',
      tenantId: 'string',
      userId: 'string',
      uuid: 'string',
      vhost: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeMiniPackageResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  uploadMiniPackageResult?: UploadMcubeMiniPackageResponseBodyUploadMiniPackageResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      uploadMiniPackageResult: 'UploadMiniPackageResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      uploadMiniPackageResult: UploadMcubeMiniPackageResponseBodyUploadMiniPackageResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeMiniPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadMcubeMiniPackageResponseBody;
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
      body: UploadMcubeMiniPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeRsaKeyRequest extends $tea.Model {
  appId?: string;
  fileUrl?: string;
  onexFlag?: boolean;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fileUrl: 'FileUrl',
      onexFlag: 'OnexFlag',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fileUrl: 'string',
      onexFlag: 'boolean',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeRsaKeyResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultMessage?: string;
  uploadRsaResult?: UploadMcubeRsaKeyResponseBodyUploadRsaResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultMessage: 'ResultMessage',
      uploadRsaResult: 'UploadRsaResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultMessage: 'string',
      uploadRsaResult: UploadMcubeRsaKeyResponseBodyUploadRsaResult,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeRsaKeyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadMcubeRsaKeyResponseBody;
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
      body: UploadMcubeRsaKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserAppToMsaRequest extends $tea.Model {
  appId?: string;
  fileUrl?: string;
  tenantId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      fileUrl: 'FileUrl',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      fileUrl: 'string',
      tenantId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserAppToMsaResponseBody extends $tea.Model {
  requestId?: string;
  resultCode?: string;
  resultContent?: UploadUserAppToMsaResponseBodyResultContent;
  resultMessage?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultCode: 'ResultCode',
      resultContent: 'ResultContent',
      resultMessage: 'ResultMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultCode: 'string',
      resultContent: UploadUserAppToMsaResponseBodyResultContent,
      resultMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserAppToMsaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadUserAppToMsaResponseBody;
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
      body: UploadUserAppToMsaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMdsMiniConfigResponseBodyResultContentData extends $tea.Model {
  content?: string;
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddMdsMiniConfigResponseBodyResultContent extends $tea.Model {
  data?: AddMdsMiniConfigResponseBodyResultContentData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: AddMdsMiniConfigResponseBodyResultContentData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubeMiniTaskStatusResponseBodyChangeMiniTaskStatusResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubeNebulaTaskStatusResponseBodyChangeMcubeNebulaTaskStatusResult extends $tea.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeMcubePublicTaskStatusResponseBodyResultContent extends $tea.Model {
  data?: string;
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CopyMcdpGroupResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasCrowdResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasFunnelResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpEventResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpEventAttributeResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpGroupResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpMaterialResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcdpZoneResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniAppResponseBodyCreateMiniResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeMiniTaskResponseBodyCreateMiniTaskResult extends $tea.Model {
  miniTaskId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      miniTaskId: 'MiniTaskId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniTaskId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaAppResponseBodyCreateNebulaAppResult extends $tea.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaResourceResponseBodyCreateMcubeNebulaResourceReslult extends $tea.Model {
  errorCode?: string;
  nebulaResourceId?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      nebulaResourceId: 'NebulaResourceId',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      nebulaResourceId: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeNebulaTaskResponseBodyCreateMcubeNebulaTaskResult extends $tea.Model {
  errorCode?: string;
  nebulaTaskId?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      nebulaTaskId: 'NebulaTaskId',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      nebulaTaskId: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeUpgradePackageResponseBodyResultContent extends $tea.Model {
  data?: string;
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeUpgradeTaskResponseBodyCreateTaskResult extends $tea.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  upgradeTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      upgradeTaskId: 'upgradeTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      upgradeTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeVhostResponseBodyCreateVhostResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistResponseBodyCreateWhitelistResult extends $tea.Model {
  resultMsg?: string;
  success?: boolean;
  whitelistId?: string;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      whitelistId: 'WhitelistId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      whitelistId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMcubeWhitelistForIdeResponseBodyCreateWhitelistForIdeResult extends $tea.Model {
  resultMsg?: string;
  success?: boolean;
  whitelistId?: string;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      success: 'Success',
      whitelistId: 'WhitelistId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      success: 'boolean',
      whitelistId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMdsMiniprogramTaskResponseBodyResultContentData extends $tea.Model {
  content?: string;
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMdsMiniprogramTaskResponseBodyResultContent extends $tea.Model {
  data?: CreateMdsMiniprogramTaskResponseBodyResultContentData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateMdsMiniprogramTaskResponseBodyResultContentData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMsaEnhanceResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCubecardWhitelistContentResponseBodyResultContentData extends $tea.Model {
  content?: string;
  errorCode?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errorCode: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCubecardWhitelistContentResponseBodyResultContent extends $tea.Model {
  data?: DeleteCubecardWhitelistContentResponseBodyResultContentData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteCubecardWhitelistContentResponseBodyResultContentData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpAimResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpCrowdResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpEventAttributeByIdResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpEventByIdResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpMaterialResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcdpZoneResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeMiniAppResponseBodyDeleteMiniResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeNebulaAppResponseBodyDeleteMcubeNebulaAppResult extends $tea.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeUpgradeResourceResponseBodyDeleteResult extends $tea.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMcubeWhitelistResponseBodyDeleteWhitelistResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMdsWhitelistContentResponseBodyResultContentData extends $tea.Model {
  content?: string;
  errorCode?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      errorCode: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteMdsWhitelistContentResponseBodyResultContent extends $tea.Model {
  data?: DeleteMdsWhitelistContentResponseBodyResultContentData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteMdsWhitelistContentResponseBodyResultContentData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExistMcubeRsaKeyResponseBodyCheckRsaKeyResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportMappCenterAppConfigResponseBodyExportMappCenterAppConfigResult extends $tea.Model {
  configDownloadUrl?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      configDownloadUrl: 'ConfigDownloadUrl',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configDownloadUrl: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTokenForUploadToMsaResponseBodyResultContentContent extends $tea.Model {
  accessid?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileTokenForUploadToMsaResponseBodyResultContent extends $tea.Model {
  content?: GetFileTokenForUploadToMsaResponseBodyResultContentContent;
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetFileTokenForUploadToMsaResponseBodyResultContentContent,
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogUrlInMsaResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeFileTokenResponseBodyGetFileTokenResultFileToken extends $tea.Model {
  accessid?: string;
  dir?: string;
  expire?: string;
  host?: string;
  policy?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      dir: 'Dir',
      expire: 'Expire',
      host: 'Host',
      policy: 'Policy',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      dir: 'string',
      expire: 'string',
      host: 'string',
      policy: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeFileTokenResponseBodyGetFileTokenResult extends $tea.Model {
  fileToken?: GetMcubeFileTokenResponseBodyGetFileTokenResultFileToken;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      fileToken: 'FileToken',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileToken: GetMcubeFileTokenResponseBodyGetFileTokenResultFileToken,
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaResourceResponseBodyGetNebulaResourceResultNebulaResourceInfo extends $tea.Model {
  appCode?: string;
  autoInstall?: number;
  clientVersionMax?: string;
  clientVersionMin?: string;
  creator?: string;
  downloadUrl?: string;
  extendInfo?: string;
  extraData?: string;
  fallbackBaseUrl?: string;
  fileSize?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  h5Version?: string;
  id?: number;
  installType?: number;
  mainUrl?: string;
  memo?: string;
  metaId?: number;
  modifier?: string;
  packageType?: number;
  platform?: string;
  publishPeriod?: number;
  resourceType?: string;
  status?: number;
  vhost?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      extendInfo: 'ExtendInfo',
      extraData: 'ExtraData',
      fallbackBaseUrl: 'FallbackBaseUrl',
      fileSize: 'FileSize',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      id: 'Id',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      memo: 'Memo',
      metaId: 'MetaId',
      modifier: 'Modifier',
      packageType: 'PackageType',
      platform: 'Platform',
      publishPeriod: 'PublishPeriod',
      resourceType: 'ResourceType',
      status: 'Status',
      vhost: 'Vhost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      creator: 'string',
      downloadUrl: 'string',
      extendInfo: 'string',
      extraData: 'string',
      fallbackBaseUrl: 'string',
      fileSize: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      id: 'number',
      installType: 'number',
      mainUrl: 'string',
      memo: 'string',
      metaId: 'number',
      modifier: 'string',
      packageType: 'number',
      platform: 'string',
      publishPeriod: 'number',
      resourceType: 'string',
      status: 'number',
      vhost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaResourceResponseBodyGetNebulaResourceResult extends $tea.Model {
  errorCode?: string;
  nebulaResourceInfo?: GetMcubeNebulaResourceResponseBodyGetNebulaResourceResultNebulaResourceInfo;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      nebulaResourceInfo: 'NebulaResourceInfo',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      nebulaResourceInfo: GetMcubeNebulaResourceResponseBodyGetNebulaResourceResultNebulaResourceInfo,
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetailRuleJsonList extends $tea.Model {
  operation?: string;
  ruleElement?: string;
  ruleType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      ruleElement: 'RuleElement',
      ruleType: 'RuleType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      ruleElement: 'string',
      ruleType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetail extends $tea.Model {
  appCode?: string;
  appId?: string;
  atomic?: number;
  baseInfoId?: number;
  bizType?: string;
  creator?: string;
  cronexpress?: number;
  downloadUrl?: string;
  extraData?: string;
  fileSize?: string;
  fullRepair?: number;
  gmtCreate?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyEndtimeData?: string;
  greyEndtimeStr?: string;
  greyNum?: number;
  greyUrl?: string;
  id?: number;
  issueDesc?: string;
  memo?: string;
  modifier?: string;
  ossPath?: string;
  packageId?: number;
  percent?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishPeriod?: number;
  publishType?: number;
  quickRollback?: number;
  releaseVersion?: string;
  ruleJsonList?: GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetailRuleJsonList[];
  sourceId?: string;
  sourceName?: string;
  sourceType?: string;
  status?: number;
  syncResult?: string;
  syncType?: number;
  taskName?: string;
  taskStatus?: number;
  taskType?: number;
  taskVersion?: number;
  upgradeNoticeNum?: number;
  upgradeProgress?: string;
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
      atomic: 'Atomic',
      baseInfoId: 'BaseInfoId',
      bizType: 'BizType',
      creator: 'Creator',
      cronexpress: 'Cronexpress',
      downloadUrl: 'DownloadUrl',
      extraData: 'ExtraData',
      fileSize: 'FileSize',
      fullRepair: 'FullRepair',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyEndtimeData: 'GreyEndtimeData',
      greyEndtimeStr: 'GreyEndtimeStr',
      greyNum: 'GreyNum',
      greyUrl: 'GreyUrl',
      id: 'Id',
      issueDesc: 'IssueDesc',
      memo: 'Memo',
      modifier: 'Modifier',
      ossPath: 'OssPath',
      packageId: 'PackageId',
      percent: 'Percent',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishPeriod: 'PublishPeriod',
      publishType: 'PublishType',
      quickRollback: 'QuickRollback',
      releaseVersion: 'ReleaseVersion',
      ruleJsonList: 'RuleJsonList',
      sourceId: 'SourceId',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
      status: 'Status',
      syncResult: 'SyncResult',
      syncType: 'SyncType',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      taskVersion: 'TaskVersion',
      upgradeNoticeNum: 'UpgradeNoticeNum',
      upgradeProgress: 'UpgradeProgress',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'string',
      atomic: 'number',
      baseInfoId: 'number',
      bizType: 'string',
      creator: 'string',
      cronexpress: 'number',
      downloadUrl: 'string',
      extraData: 'string',
      fileSize: 'string',
      fullRepair: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyEndtimeData: 'string',
      greyEndtimeStr: 'string',
      greyNum: 'number',
      greyUrl: 'string',
      id: 'number',
      issueDesc: 'string',
      memo: 'string',
      modifier: 'string',
      ossPath: 'string',
      packageId: 'number',
      percent: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishPeriod: 'number',
      publishType: 'number',
      quickRollback: 'number',
      releaseVersion: 'string',
      ruleJsonList: { 'type': 'array', 'itemType': GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetailRuleJsonList },
      sourceId: 'string',
      sourceName: 'string',
      sourceType: 'string',
      status: 'number',
      syncResult: 'string',
      syncType: 'number',
      taskName: 'string',
      taskStatus: 'number',
      taskType: 'number',
      taskVersion: 'number',
      upgradeNoticeNum: 'number',
      upgradeProgress: 'string',
      whitelistIds: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResult extends $tea.Model {
  errorCode?: string;
  nebulaTaskDetail?: GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetail;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      nebulaTaskDetail: 'NebulaTaskDetail',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      nebulaTaskDetail: GetMcubeNebulaTaskDetailResponseBodyGetMcubeNebulaTaskDetailResultNebulaTaskDetail,
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoMobileTestFlightConfigDO extends $tea.Model {
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  installAmount?: number;
  invalidTime?: string;
  upgradeId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      installAmount: 'InstallAmount',
      invalidTime: 'InvalidTime',
      upgradeId: 'UpgradeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      installAmount: 'number',
      invalidTime: 'string',
      upgradeId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoUpgradeBaseInfoDO extends $tea.Model {
  allowCreateTask?: boolean;
  appCode?: string;
  appstoreUrl?: string;
  backLog?: string;
  changeLog?: string;
  clientFileSize?: number;
  clientName?: string;
  cpId?: string;
  creator?: string;
  downloadUrl?: string;
  globalVariables?: string;
  gmtCreate?: string;
  gmtCreateStr?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  id?: number;
  innerVersion?: string;
  iosSymbol?: string;
  isEnterprise?: number;
  isRc?: number;
  isRelease?: number;
  maxVersion?: string;
  md5?: string;
  modifier?: string;
  needCheck?: number;
  ossPath?: string;
  packageType?: string;
  platform?: string;
  productId?: string;
  productName?: string;
  productVersion?: string;
  publishPeriod?: number;
  qrcodeUrl?: string;
  releaseType?: string;
  releaseWindow?: string;
  scmDownloadUrl?: string;
  serverVersion?: number;
  verificationCode?: string;
  verifyResult?: number;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      allowCreateTask: 'AllowCreateTask',
      appCode: 'AppCode',
      appstoreUrl: 'AppstoreUrl',
      backLog: 'BackLog',
      changeLog: 'ChangeLog',
      clientFileSize: 'ClientFileSize',
      clientName: 'ClientName',
      cpId: 'CpId',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      globalVariables: 'GlobalVariables',
      gmtCreate: 'GmtCreate',
      gmtCreateStr: 'GmtCreateStr',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      id: 'Id',
      innerVersion: 'InnerVersion',
      iosSymbol: 'IosSymbol',
      isEnterprise: 'IsEnterprise',
      isRc: 'IsRc',
      isRelease: 'IsRelease',
      maxVersion: 'MaxVersion',
      md5: 'Md5',
      modifier: 'Modifier',
      needCheck: 'NeedCheck',
      ossPath: 'OssPath',
      packageType: 'PackageType',
      platform: 'Platform',
      productId: 'ProductId',
      productName: 'ProductName',
      productVersion: 'ProductVersion',
      publishPeriod: 'PublishPeriod',
      qrcodeUrl: 'QrcodeUrl',
      releaseType: 'ReleaseType',
      releaseWindow: 'ReleaseWindow',
      scmDownloadUrl: 'ScmDownloadUrl',
      serverVersion: 'ServerVersion',
      verificationCode: 'VerificationCode',
      verifyResult: 'VerifyResult',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCreateTask: 'boolean',
      appCode: 'string',
      appstoreUrl: 'string',
      backLog: 'string',
      changeLog: 'string',
      clientFileSize: 'number',
      clientName: 'string',
      cpId: 'string',
      creator: 'string',
      downloadUrl: 'string',
      globalVariables: 'string',
      gmtCreate: 'string',
      gmtCreateStr: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      id: 'number',
      innerVersion: 'string',
      iosSymbol: 'string',
      isEnterprise: 'number',
      isRc: 'number',
      isRelease: 'number',
      maxVersion: 'string',
      md5: 'string',
      modifier: 'string',
      needCheck: 'number',
      ossPath: 'string',
      packageType: 'string',
      platform: 'string',
      productId: 'string',
      productName: 'string',
      productVersion: 'string',
      publishPeriod: 'number',
      qrcodeUrl: 'string',
      releaseType: 'string',
      releaseWindow: 'string',
      scmDownloadUrl: 'string',
      serverVersion: 'number',
      verificationCode: 'string',
      verifyResult: 'number',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfo extends $tea.Model {
  mobileTestFlightConfigDO?: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoMobileTestFlightConfigDO;
  upgradeBaseInfoDO?: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoUpgradeBaseInfoDO;
  static names(): { [key: string]: string } {
    return {
      mobileTestFlightConfigDO: 'MobileTestFlightConfigDO',
      upgradeBaseInfoDO: 'UpgradeBaseInfoDO',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mobileTestFlightConfigDO: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoMobileTestFlightConfigDO,
      upgradeBaseInfoDO: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfoUpgradeBaseInfoDO,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradePackageInfoResponseBodyGetPackageResult extends $tea.Model {
  errorCode?: string;
  packageInfo?: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfo;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      packageInfo: 'PackageInfo',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      packageInfo: GetMcubeUpgradePackageInfoResponseBodyGetPackageResultPackageInfo,
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoRuleJsonList extends $tea.Model {
  operation?: string;
  ruleElement?: string;
  ruleType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      ruleElement: 'RuleElement',
      ruleType: 'RuleType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      ruleElement: 'string',
      ruleType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoWhitelist extends $tea.Model {
  appCode?: string;
  id?: number;
  idType?: string;
  platform?: string;
  status?: number;
  userType?: string;
  whiteListCount?: number;
  whiteListName?: string;
  whitelistType?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      id: 'Id',
      idType: 'IdType',
      platform: 'Platform',
      status: 'Status',
      userType: 'UserType',
      whiteListCount: 'WhiteListCount',
      whiteListName: 'WhiteListName',
      whitelistType: 'WhitelistType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      id: 'number',
      idType: 'string',
      platform: 'string',
      status: 'number',
      userType: 'string',
      whiteListCount: 'number',
      whiteListName: 'string',
      whitelistType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfo extends $tea.Model {
  appCode?: string;
  appId?: string;
  appstoreUrl?: string;
  creater?: string;
  creator?: string;
  downloadUrl?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  historyForce?: number;
  id?: number;
  isEnterprise?: number;
  isOfficial?: number;
  isRc?: number;
  isRelease?: number;
  memo?: string;
  modifier?: string;
  netType?: string;
  osVersion?: string;
  packageInfoId?: number;
  packageType?: string;
  platform?: string;
  productId?: string;
  publishMode?: number;
  publishType?: number;
  pushContent?: string;
  qrcodeUrl?: string;
  ruleJsonList?: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoRuleJsonList[];
  silentType?: number;
  taskStatus?: number;
  upgradeContent?: string;
  upgradeType?: number;
  upgradeValidTime?: number;
  whitelist?: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoWhitelist[];
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
      appstoreUrl: 'AppstoreUrl',
      creater: 'Creater',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      historyForce: 'HistoryForce',
      id: 'Id',
      isEnterprise: 'IsEnterprise',
      isOfficial: 'IsOfficial',
      isRc: 'IsRc',
      isRelease: 'IsRelease',
      memo: 'Memo',
      modifier: 'Modifier',
      netType: 'NetType',
      osVersion: 'OsVersion',
      packageInfoId: 'PackageInfoId',
      packageType: 'PackageType',
      platform: 'Platform',
      productId: 'ProductId',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      pushContent: 'PushContent',
      qrcodeUrl: 'QrcodeUrl',
      ruleJsonList: 'RuleJsonList',
      silentType: 'SilentType',
      taskStatus: 'TaskStatus',
      upgradeContent: 'UpgradeContent',
      upgradeType: 'UpgradeType',
      upgradeValidTime: 'UpgradeValidTime',
      whitelist: 'Whitelist',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'string',
      appstoreUrl: 'string',
      creater: 'string',
      creator: 'string',
      downloadUrl: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      historyForce: 'number',
      id: 'number',
      isEnterprise: 'number',
      isOfficial: 'number',
      isRc: 'number',
      isRelease: 'number',
      memo: 'string',
      modifier: 'string',
      netType: 'string',
      osVersion: 'string',
      packageInfoId: 'number',
      packageType: 'string',
      platform: 'string',
      productId: 'string',
      publishMode: 'number',
      publishType: 'number',
      pushContent: 'string',
      qrcodeUrl: 'string',
      ruleJsonList: { 'type': 'array', 'itemType': GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoRuleJsonList },
      silentType: 'number',
      taskStatus: 'number',
      upgradeContent: 'string',
      upgradeType: 'number',
      upgradeValidTime: 'number',
      whitelist: { 'type': 'array', 'itemType': GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfoWhitelist },
      whitelistIds: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMcubeUpgradeTaskInfoResponseBodyGetTaskResult extends $tea.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  taskInfo?: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfo;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      taskInfo: GetMcubeUpgradeTaskInfoResponseBodyGetTaskResultTaskInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContentDataContentApiConfigList extends $tea.Model {
  appCode?: string;
  configStatus?: number;
  configType?: string;
  configValue?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      configStatus: 'ConfigStatus',
      configType: 'ConfigType',
      configValue: 'ConfigValue',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      configStatus: 'number',
      configType: 'string',
      configValue: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContentDataContentPrivilegeSwitch extends $tea.Model {
  appCode?: string;
  configStatus?: number;
  configType?: string;
  configValue?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      configStatus: 'ConfigStatus',
      configType: 'ConfigType',
      configValue: 'ConfigValue',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      configStatus: 'number',
      configType: 'string',
      configValue: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContentDataContentServerDomainConfigList extends $tea.Model {
  appCode?: string;
  configStatus?: number;
  configType?: string;
  configValue?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      configStatus: 'ConfigStatus',
      configType: 'ConfigType',
      configValue: 'ConfigValue',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      configStatus: 'number',
      configType: 'string',
      configValue: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContentDataContentWebviewDomainConfigList extends $tea.Model {
  appCode?: string;
  configStatus?: number;
  configType?: string;
  configValue?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      configStatus: 'ConfigStatus',
      configType: 'ConfigType',
      configValue: 'ConfigValue',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      configStatus: 'number',
      configType: 'string',
      configValue: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContentDataContent extends $tea.Model {
  apiConfigList?: GetMdsMiniConfigResponseBodyResultContentDataContentApiConfigList[];
  appCode?: string;
  enableServerDomainCount?: string;
  h5Id?: string;
  h5Name?: string;
  privilegeSwitch?: GetMdsMiniConfigResponseBodyResultContentDataContentPrivilegeSwitch;
  serverDomainConfigList?: GetMdsMiniConfigResponseBodyResultContentDataContentServerDomainConfigList[];
  webviewDomainConfigList?: GetMdsMiniConfigResponseBodyResultContentDataContentWebviewDomainConfigList[];
  static names(): { [key: string]: string } {
    return {
      apiConfigList: 'ApiConfigList',
      appCode: 'AppCode',
      enableServerDomainCount: 'EnableServerDomainCount',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      privilegeSwitch: 'PrivilegeSwitch',
      serverDomainConfigList: 'ServerDomainConfigList',
      webviewDomainConfigList: 'WebviewDomainConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiConfigList: { 'type': 'array', 'itemType': GetMdsMiniConfigResponseBodyResultContentDataContentApiConfigList },
      appCode: 'string',
      enableServerDomainCount: 'string',
      h5Id: 'string',
      h5Name: 'string',
      privilegeSwitch: GetMdsMiniConfigResponseBodyResultContentDataContentPrivilegeSwitch,
      serverDomainConfigList: { 'type': 'array', 'itemType': GetMdsMiniConfigResponseBodyResultContentDataContentServerDomainConfigList },
      webviewDomainConfigList: { 'type': 'array', 'itemType': GetMdsMiniConfigResponseBodyResultContentDataContentWebviewDomainConfigList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContentData extends $tea.Model {
  content?: GetMdsMiniConfigResponseBodyResultContentDataContent;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: GetMdsMiniConfigResponseBodyResultContentDataContent,
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMdsMiniConfigResponseBodyResultContent extends $tea.Model {
  data?: GetMdsMiniConfigResponseBodyResultContentData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetMdsMiniConfigResponseBodyResultContentData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppDonwloadUrlInMsaResponseBodyResultContentData extends $tea.Model {
  filename?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      filename: 'Filename',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filename: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppDonwloadUrlInMsaResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: GetUserAppDonwloadUrlInMsaResponseBodyResultContentData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUserAppDonwloadUrlInMsaResponseBodyResultContentData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppEnhanceProcessInMsaResponseBodyResultContentDataEnhanceMapping extends $tea.Model {
  info?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppEnhanceProcessInMsaResponseBodyResultContentData extends $tea.Model {
  afterMd5?: string;
  afterSize?: number;
  appCode?: string;
  appPackage?: string;
  assetsFileList?: string[];
  beforeMd5?: string;
  beforeSize?: number;
  classForest?: string[];
  enhanceMapping?: GetUserAppEnhanceProcessInMsaResponseBodyResultContentDataEnhanceMapping[];
  enhanceRules?: string[];
  enhancedAssetsFiles?: string[];
  enhancedClasses?: string[];
  enhancedSoFiles?: string[];
  id?: number;
  label?: string;
  progress?: number;
  soFileList?: string[];
  status?: number;
  taskType?: string;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      afterMd5: 'AfterMd5',
      afterSize: 'AfterSize',
      appCode: 'AppCode',
      appPackage: 'AppPackage',
      assetsFileList: 'AssetsFileList',
      beforeMd5: 'BeforeMd5',
      beforeSize: 'BeforeSize',
      classForest: 'ClassForest',
      enhanceMapping: 'EnhanceMapping',
      enhanceRules: 'EnhanceRules',
      enhancedAssetsFiles: 'EnhancedAssetsFiles',
      enhancedClasses: 'EnhancedClasses',
      enhancedSoFiles: 'EnhancedSoFiles',
      id: 'Id',
      label: 'Label',
      progress: 'Progress',
      soFileList: 'SoFileList',
      status: 'Status',
      taskType: 'TaskType',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterMd5: 'string',
      afterSize: 'number',
      appCode: 'string',
      appPackage: 'string',
      assetsFileList: { 'type': 'array', 'itemType': 'string' },
      beforeMd5: 'string',
      beforeSize: 'number',
      classForest: { 'type': 'array', 'itemType': 'string' },
      enhanceMapping: { 'type': 'array', 'itemType': GetUserAppEnhanceProcessInMsaResponseBodyResultContentDataEnhanceMapping },
      enhanceRules: { 'type': 'array', 'itemType': 'string' },
      enhancedAssetsFiles: { 'type': 'array', 'itemType': 'string' },
      enhancedClasses: { 'type': 'array', 'itemType': 'string' },
      enhancedSoFiles: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      label: 'string',
      progress: 'number',
      soFileList: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      taskType: 'string',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppEnhanceProcessInMsaResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: GetUserAppEnhanceProcessInMsaResponseBodyResultContentData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUserAppEnhanceProcessInMsaResponseBodyResultContentData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfoEnhanceMapping extends $tea.Model {
  info?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfo extends $tea.Model {
  afterMd5?: string;
  afterSize?: number;
  appCode?: string;
  appPackage?: string;
  assetsFileList?: string[];
  beforeMd5?: string;
  beforeSize?: number;
  classForest?: string;
  enhanceMapping?: GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfoEnhanceMapping[];
  enhanceRules?: string[];
  enhancedAssetsFiles?: string[];
  enhancedClasses?: string[];
  enhancedSoFiles?: string[];
  id?: number;
  label?: string;
  progress?: number;
  soFileList?: string[];
  status?: number;
  taskType?: string;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      afterMd5: 'AfterMd5',
      afterSize: 'AfterSize',
      appCode: 'AppCode',
      appPackage: 'AppPackage',
      assetsFileList: 'AssetsFileList',
      beforeMd5: 'BeforeMd5',
      beforeSize: 'BeforeSize',
      classForest: 'ClassForest',
      enhanceMapping: 'EnhanceMapping',
      enhanceRules: 'EnhanceRules',
      enhancedAssetsFiles: 'EnhancedAssetsFiles',
      enhancedClasses: 'EnhancedClasses',
      enhancedSoFiles: 'EnhancedSoFiles',
      id: 'Id',
      label: 'Label',
      progress: 'Progress',
      soFileList: 'SoFileList',
      status: 'Status',
      taskType: 'TaskType',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterMd5: 'string',
      afterSize: 'number',
      appCode: 'string',
      appPackage: 'string',
      assetsFileList: { 'type': 'array', 'itemType': 'string' },
      beforeMd5: 'string',
      beforeSize: 'number',
      classForest: 'string',
      enhanceMapping: { 'type': 'array', 'itemType': GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfoEnhanceMapping },
      enhanceRules: { 'type': 'array', 'itemType': 'string' },
      enhancedAssetsFiles: { 'type': 'array', 'itemType': 'string' },
      enhancedClasses: { 'type': 'array', 'itemType': 'string' },
      enhancedSoFiles: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      label: 'string',
      progress: 'number',
      soFileList: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      taskType: 'string',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppUploadProcessInMsaResponseBodyResultContentData extends $tea.Model {
  apkInfo?: GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfo;
  enhanceTaskId?: number;
  id?: number;
  progress?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      apkInfo: 'ApkInfo',
      enhanceTaskId: 'EnhanceTaskId',
      id: 'Id',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkInfo: GetUserAppUploadProcessInMsaResponseBodyResultContentDataApkInfo,
      enhanceTaskId: 'number',
      id: 'number',
      progress: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAppUploadProcessInMsaResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: GetUserAppUploadProcessInMsaResponseBodyResultContentData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetUserAppUploadProcessInMsaResponseBodyResultContentData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListAndroidConfig extends $tea.Model {
  certRSA?: string;
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      certRSA: 'CertRSA',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certRSA: 'string',
      packageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListIosConfig extends $tea.Model {
  bundleId?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppList extends $tea.Model {
  androidConfig?: ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListAndroidConfig;
  appDesc?: string;
  appIcon?: string;
  appId?: string;
  appName?: string;
  appSecret?: string;
  creator?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  iosConfig?: ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListIosConfig;
  modifier?: string;
  monitorJson?: string;
  status?: number;
  tenantId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      androidConfig: 'AndroidConfig',
      appDesc: 'AppDesc',
      appIcon: 'AppIcon',
      appId: 'AppId',
      appName: 'AppName',
      appSecret: 'AppSecret',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      iosConfig: 'IosConfig',
      modifier: 'Modifier',
      monitorJson: 'MonitorJson',
      status: 'Status',
      tenantId: 'TenantId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidConfig: ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListAndroidConfig,
      appDesc: 'string',
      appIcon: 'string',
      appId: 'string',
      appName: 'string',
      appSecret: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      iosConfig: ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppListIosConfig,
      modifier: 'string',
      monitorJson: 'string',
      status: 'number',
      tenantId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterAppsResponseBodyListMappCenterAppResult extends $tea.Model {
  mappCenterAppList?: ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppList[];
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mappCenterAppList: 'MappCenterAppList',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappCenterAppList: { 'type': 'array', 'itemType': ListMappCenterAppsResponseBodyListMappCenterAppResultMappCenterAppList },
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResultMappCenterWorkspaceList extends $tea.Model {
  compatibleId?: string;
  createTime?: string;
  displayName?: string;
  id?: string;
  region?: string;
  status?: string;
  tenantId?: string;
  type?: string;
  uid?: number;
  updateTime?: string;
  workspaceId?: string;
  zones?: string;
  static names(): { [key: string]: string } {
    return {
      compatibleId: 'CompatibleId',
      createTime: 'CreateTime',
      displayName: 'DisplayName',
      id: 'Id',
      region: 'Region',
      status: 'Status',
      tenantId: 'TenantId',
      type: 'Type',
      uid: 'Uid',
      updateTime: 'UpdateTime',
      workspaceId: 'WorkspaceId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compatibleId: 'string',
      createTime: 'string',
      displayName: 'string',
      id: 'string',
      region: 'string',
      status: 'string',
      tenantId: 'string',
      type: 'string',
      uid: 'number',
      updateTime: 'string',
      workspaceId: 'string',
      zones: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResult extends $tea.Model {
  mappCenterWorkspaceList?: ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResultMappCenterWorkspaceList[];
  resultMsg?: string;
  success?: boolean;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      mappCenterWorkspaceList: 'MappCenterWorkspaceList',
      resultMsg: 'ResultMsg',
      success: 'Success',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappCenterWorkspaceList: { 'type': 'array', 'itemType': ListMappCenterWorkspacesResponseBodyListMappCenterWorkspaceResultMappCenterWorkspaceList },
      resultMsg: 'string',
      success: 'boolean',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcdpAimResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniAppsResponseBodyListMiniResultMiniProgramList extends $tea.Model {
  appCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniAppsResponseBodyListMiniResult extends $tea.Model {
  currentPage?: number;
  hasMore?: boolean;
  miniProgramList?: ListMcubeMiniAppsResponseBodyListMiniResultMiniProgramList[];
  pageSize?: number;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasMore: 'HasMore',
      miniProgramList: 'MiniProgramList',
      pageSize: 'PageSize',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasMore: 'boolean',
      miniProgramList: { 'type': 'array', 'itemType': ListMcubeMiniAppsResponseBodyListMiniResultMiniProgramList },
      pageSize: 'number',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniPackagesResponseBodyListMiniPackageResultMiniPackageList extends $tea.Model {
  appCode?: string;
  autoInstall?: number;
  clientVersionMax?: string;
  clientVersionMin?: string;
  downloadUrl?: string;
  extendInfo?: string;
  extraData?: string;
  fallbackBaseUrl?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  h5Version?: string;
  id?: number;
  installType?: number;
  mainUrl?: string;
  memo?: string;
  packageType?: number;
  platform?: string;
  publishPeriod?: number;
  resourceType?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      downloadUrl: 'DownloadUrl',
      extendInfo: 'ExtendInfo',
      extraData: 'ExtraData',
      fallbackBaseUrl: 'FallbackBaseUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      id: 'Id',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      memo: 'Memo',
      packageType: 'PackageType',
      platform: 'Platform',
      publishPeriod: 'PublishPeriod',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      downloadUrl: 'string',
      extendInfo: 'string',
      extraData: 'string',
      fallbackBaseUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      id: 'number',
      installType: 'number',
      mainUrl: 'string',
      memo: 'string',
      packageType: 'number',
      platform: 'string',
      publishPeriod: 'number',
      resourceType: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniPackagesResponseBodyListMiniPackageResult extends $tea.Model {
  currentPage?: number;
  hasMore?: boolean;
  miniPackageList?: ListMcubeMiniPackagesResponseBodyListMiniPackageResultMiniPackageList[];
  pageSize?: number;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasMore: 'HasMore',
      miniPackageList: 'MiniPackageList',
      pageSize: 'PageSize',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasMore: 'boolean',
      miniPackageList: { 'type': 'array', 'itemType': ListMcubeMiniPackagesResponseBodyListMiniPackageResultMiniPackageList },
      pageSize: 'number',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniTasksResponseBodyListMiniTaskResultMiniTaskList extends $tea.Model {
  appCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  id?: number;
  memo?: string;
  packageId?: number;
  platform?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  status?: string;
  taskStatus?: number;
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      id: 'Id',
      memo: 'Memo',
      packageId: 'PackageId',
      platform: 'Platform',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      status: 'Status',
      taskStatus: 'TaskStatus',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      id: 'number',
      memo: 'string',
      packageId: 'number',
      platform: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      status: 'string',
      taskStatus: 'number',
      whitelistIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeMiniTasksResponseBodyListMiniTaskResult extends $tea.Model {
  miniTaskList?: ListMcubeMiniTasksResponseBodyListMiniTaskResultMiniTaskList[];
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      miniTaskList: 'MiniTaskList',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniTaskList: { 'type': 'array', 'itemType': ListMcubeMiniTasksResponseBodyListMiniTaskResultMiniTaskList },
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResultNebulaAppInfos extends $tea.Model {
  h5Id?: string;
  h5Name?: string;
  static names(): { [key: string]: string } {
    return {
      h5Id: 'H5Id',
      h5Name: 'H5Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h5Id: 'string',
      h5Name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResult extends $tea.Model {
  currentPage?: number;
  errorCode?: string;
  hasMore?: boolean;
  nebulaAppInfos?: ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResultNebulaAppInfos[];
  pageSize?: number;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      errorCode: 'ErrorCode',
      hasMore: 'HasMore',
      nebulaAppInfos: 'NebulaAppInfos',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      errorCode: 'string',
      hasMore: 'boolean',
      nebulaAppInfos: { 'type': 'array', 'itemType': ListMcubeNebulaAppsResponseBodyListMcubeNebulaAppsResultNebulaAppInfos },
      pageSize: 'number',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResultNebulaResourceInfo extends $tea.Model {
  appCode?: string;
  autoInstall?: number;
  clientVersionMax?: string;
  clientVersionMin?: string;
  creator?: string;
  debugUrl?: string;
  downloadUrl?: string;
  extendInfo?: string;
  extraData?: string;
  fallbackBaseUrl?: string;
  fileSize?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  h5Version?: string;
  id?: number;
  installType?: number;
  lazyLoad?: number;
  mainUrl?: string;
  md5?: string;
  memo?: string;
  metaId?: number;
  modifier?: string;
  packageType?: number;
  platform?: string;
  publishPeriod?: number;
  releaseVersion?: string;
  resourceType?: string;
  status?: number;
  vhost?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      creator: 'Creator',
      debugUrl: 'DebugUrl',
      downloadUrl: 'DownloadUrl',
      extendInfo: 'ExtendInfo',
      extraData: 'ExtraData',
      fallbackBaseUrl: 'FallbackBaseUrl',
      fileSize: 'FileSize',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      id: 'Id',
      installType: 'InstallType',
      lazyLoad: 'LazyLoad',
      mainUrl: 'MainUrl',
      md5: 'Md5',
      memo: 'Memo',
      metaId: 'MetaId',
      modifier: 'Modifier',
      packageType: 'PackageType',
      platform: 'Platform',
      publishPeriod: 'PublishPeriod',
      releaseVersion: 'ReleaseVersion',
      resourceType: 'ResourceType',
      status: 'Status',
      vhost: 'Vhost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      creator: 'string',
      debugUrl: 'string',
      downloadUrl: 'string',
      extendInfo: 'string',
      extraData: 'string',
      fallbackBaseUrl: 'string',
      fileSize: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      id: 'number',
      installType: 'number',
      lazyLoad: 'number',
      mainUrl: 'string',
      md5: 'string',
      memo: 'string',
      metaId: 'number',
      modifier: 'string',
      packageType: 'number',
      platform: 'string',
      publishPeriod: 'number',
      releaseVersion: 'string',
      resourceType: 'string',
      status: 'number',
      vhost: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResult extends $tea.Model {
  currentPage?: number;
  errorCode?: string;
  hasMore?: boolean;
  nebulaResourceInfo?: ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResultNebulaResourceInfo[];
  pageSize?: number;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      errorCode: 'ErrorCode',
      hasMore: 'HasMore',
      nebulaResourceInfo: 'NebulaResourceInfo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      errorCode: 'string',
      hasMore: 'boolean',
      nebulaResourceInfo: { 'type': 'array', 'itemType': ListMcubeNebulaResourcesResponseBodyListMcubeNebulaResourceResultNebulaResourceInfo },
      pageSize: 'number',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResultNebulaTaskInfo extends $tea.Model {
  appCode?: string;
  bizType?: string;
  creator?: string;
  gmtCreate?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyEndtimeData?: string;
  greyEndtimeStr?: string;
  greyNum?: number;
  greyUrl?: string;
  id?: number;
  memo?: string;
  modifier?: string;
  packageId?: number;
  percent?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  releaseVersion?: string;
  status?: number;
  syncResult?: string;
  taskName?: string;
  taskStatus?: number;
  taskType?: number;
  taskVersion?: number;
  upgradeNoticeNum?: number;
  upgradeProgress?: string;
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      bizType: 'BizType',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyEndtimeData: 'GreyEndtimeData',
      greyEndtimeStr: 'GreyEndtimeStr',
      greyNum: 'GreyNum',
      greyUrl: 'GreyUrl',
      id: 'Id',
      memo: 'Memo',
      modifier: 'Modifier',
      packageId: 'PackageId',
      percent: 'Percent',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      releaseVersion: 'ReleaseVersion',
      status: 'Status',
      syncResult: 'SyncResult',
      taskName: 'TaskName',
      taskStatus: 'TaskStatus',
      taskType: 'TaskType',
      taskVersion: 'TaskVersion',
      upgradeNoticeNum: 'UpgradeNoticeNum',
      upgradeProgress: 'UpgradeProgress',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      bizType: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyEndtimeData: 'string',
      greyEndtimeStr: 'string',
      greyNum: 'number',
      greyUrl: 'string',
      id: 'number',
      memo: 'string',
      modifier: 'string',
      packageId: 'number',
      percent: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      releaseVersion: 'string',
      status: 'number',
      syncResult: 'string',
      taskName: 'string',
      taskStatus: 'number',
      taskType: 'number',
      taskVersion: 'number',
      upgradeNoticeNum: 'number',
      upgradeProgress: 'string',
      whitelistIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResult extends $tea.Model {
  errorCode?: string;
  nebulaTaskInfo?: ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResultNebulaTaskInfo[];
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      nebulaTaskInfo: 'NebulaTaskInfo',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      nebulaTaskInfo: { 'type': 'array', 'itemType': ListMcubeNebulaTasksResponseBodyListMcubeNebulaTaskResultNebulaTaskInfo },
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradePackagesResponseBodyListPackagesResultPackages extends $tea.Model {
  allowCreateTask?: boolean;
  appCode?: string;
  appstoreUrl?: string;
  backLog?: string;
  changeLog?: string;
  clientFileSize?: number;
  clientName?: string;
  cpId?: string;
  creator?: string;
  downloadUrl?: string;
  globalVariables?: string;
  gmtCreate?: string;
  gmtCreateStr?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  id?: number;
  innerVersion?: string;
  iosSymbol?: string;
  isEnterprise?: number;
  isRc?: number;
  isRelease?: number;
  maxVersion?: string;
  md5?: string;
  modifier?: string;
  needCheck?: number;
  ossPath?: string;
  packageType?: string;
  platform?: string;
  productId?: string;
  productName?: string;
  productVersion?: string;
  publishPeriod?: number;
  qrcodeUrl?: string;
  releaseType?: string;
  releaseWindow?: string;
  scmDownloadUrl?: string;
  serverVersion?: number;
  verificationCode?: string;
  verifyResult?: number;
  versionCode?: string;
  static names(): { [key: string]: string } {
    return {
      allowCreateTask: 'AllowCreateTask',
      appCode: 'AppCode',
      appstoreUrl: 'AppstoreUrl',
      backLog: 'BackLog',
      changeLog: 'ChangeLog',
      clientFileSize: 'ClientFileSize',
      clientName: 'ClientName',
      cpId: 'CpId',
      creator: 'Creator',
      downloadUrl: 'DownloadUrl',
      globalVariables: 'GlobalVariables',
      gmtCreate: 'GmtCreate',
      gmtCreateStr: 'GmtCreateStr',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      id: 'Id',
      innerVersion: 'InnerVersion',
      iosSymbol: 'IosSymbol',
      isEnterprise: 'IsEnterprise',
      isRc: 'IsRc',
      isRelease: 'IsRelease',
      maxVersion: 'MaxVersion',
      md5: 'Md5',
      modifier: 'Modifier',
      needCheck: 'NeedCheck',
      ossPath: 'OssPath',
      packageType: 'PackageType',
      platform: 'Platform',
      productId: 'ProductId',
      productName: 'ProductName',
      productVersion: 'ProductVersion',
      publishPeriod: 'PublishPeriod',
      qrcodeUrl: 'QrcodeUrl',
      releaseType: 'ReleaseType',
      releaseWindow: 'ReleaseWindow',
      scmDownloadUrl: 'ScmDownloadUrl',
      serverVersion: 'ServerVersion',
      verificationCode: 'VerificationCode',
      verifyResult: 'VerifyResult',
      versionCode: 'VersionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowCreateTask: 'boolean',
      appCode: 'string',
      appstoreUrl: 'string',
      backLog: 'string',
      changeLog: 'string',
      clientFileSize: 'number',
      clientName: 'string',
      cpId: 'string',
      creator: 'string',
      downloadUrl: 'string',
      globalVariables: 'string',
      gmtCreate: 'string',
      gmtCreateStr: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      id: 'number',
      innerVersion: 'string',
      iosSymbol: 'string',
      isEnterprise: 'number',
      isRc: 'number',
      isRelease: 'number',
      maxVersion: 'string',
      md5: 'string',
      modifier: 'string',
      needCheck: 'number',
      ossPath: 'string',
      packageType: 'string',
      platform: 'string',
      productId: 'string',
      productName: 'string',
      productVersion: 'string',
      publishPeriod: 'number',
      qrcodeUrl: 'string',
      releaseType: 'string',
      releaseWindow: 'string',
      scmDownloadUrl: 'string',
      serverVersion: 'number',
      verificationCode: 'string',
      verifyResult: 'number',
      versionCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradePackagesResponseBodyListPackagesResult extends $tea.Model {
  currentPage?: number;
  errorCode?: string;
  hasMore?: boolean;
  packages?: ListMcubeUpgradePackagesResponseBodyListPackagesResultPackages[];
  pageSize?: number;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      errorCode: 'ErrorCode',
      hasMore: 'HasMore',
      packages: 'Packages',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      errorCode: 'string',
      hasMore: 'boolean',
      packages: { 'type': 'array', 'itemType': ListMcubeUpgradePackagesResponseBodyListPackagesResultPackages },
      pageSize: 'number',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradeTasksResponseBodyListTaskResultTaskInfo extends $tea.Model {
  appCode?: string;
  creator?: string;
  devicePercent?: number;
  executionOrder?: number;
  gmtCreate?: string;
  gmtCreateStr?: string;
  gmtModified?: string;
  gmtModifiedStr?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyNotice?: number;
  greyNum?: number;
  greyPausePoint?: number;
  greyPauseType?: number;
  greyUv?: number;
  historyForce?: number;
  huobanNoticeId?: string;
  huobanUrl?: string;
  id?: number;
  innerVersion?: string;
  isEnterprise?: number;
  isOfficial?: number;
  isPush?: number;
  isRelease?: number;
  maxVersion?: string;
  memo?: string;
  modifier?: string;
  packageInfoId?: number;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  pushContent?: string;
  realGreyEndtime?: string;
  realGreyEndtimeStr?: string;
  realGreyEndtype?: number;
  realGreyNum?: number;
  realGreyUv?: number;
  silentType?: number;
  syncResult?: string;
  taskStatus?: number;
  upgradeContent?: string;
  upgradeType?: number;
  upgradeValidTime?: number;
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      creator: 'Creator',
      devicePercent: 'DevicePercent',
      executionOrder: 'ExecutionOrder',
      gmtCreate: 'GmtCreate',
      gmtCreateStr: 'GmtCreateStr',
      gmtModified: 'GmtModified',
      gmtModifiedStr: 'GmtModifiedStr',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyNotice: 'GreyNotice',
      greyNum: 'GreyNum',
      greyPausePoint: 'GreyPausePoint',
      greyPauseType: 'GreyPauseType',
      greyUv: 'GreyUv',
      historyForce: 'HistoryForce',
      huobanNoticeId: 'HuobanNoticeId',
      huobanUrl: 'HuobanUrl',
      id: 'Id',
      innerVersion: 'InnerVersion',
      isEnterprise: 'IsEnterprise',
      isOfficial: 'IsOfficial',
      isPush: 'IsPush',
      isRelease: 'IsRelease',
      maxVersion: 'MaxVersion',
      memo: 'Memo',
      modifier: 'Modifier',
      packageInfoId: 'PackageInfoId',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      pushContent: 'PushContent',
      realGreyEndtime: 'RealGreyEndtime',
      realGreyEndtimeStr: 'RealGreyEndtimeStr',
      realGreyEndtype: 'RealGreyEndtype',
      realGreyNum: 'RealGreyNum',
      realGreyUv: 'RealGreyUv',
      silentType: 'SilentType',
      syncResult: 'SyncResult',
      taskStatus: 'TaskStatus',
      upgradeContent: 'UpgradeContent',
      upgradeType: 'UpgradeType',
      upgradeValidTime: 'UpgradeValidTime',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      creator: 'string',
      devicePercent: 'number',
      executionOrder: 'number',
      gmtCreate: 'string',
      gmtCreateStr: 'string',
      gmtModified: 'string',
      gmtModifiedStr: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyNotice: 'number',
      greyNum: 'number',
      greyPausePoint: 'number',
      greyPauseType: 'number',
      greyUv: 'number',
      historyForce: 'number',
      huobanNoticeId: 'string',
      huobanUrl: 'string',
      id: 'number',
      innerVersion: 'string',
      isEnterprise: 'number',
      isOfficial: 'number',
      isPush: 'number',
      isRelease: 'number',
      maxVersion: 'string',
      memo: 'string',
      modifier: 'string',
      packageInfoId: 'number',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      pushContent: 'string',
      realGreyEndtime: 'string',
      realGreyEndtimeStr: 'string',
      realGreyEndtype: 'number',
      realGreyNum: 'number',
      realGreyUv: 'number',
      silentType: 'number',
      syncResult: 'string',
      taskStatus: 'number',
      upgradeContent: 'string',
      upgradeType: 'number',
      upgradeValidTime: 'number',
      whitelistIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeUpgradeTasksResponseBodyListTaskResult extends $tea.Model {
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  taskInfo?: ListMcubeUpgradeTasksResponseBodyListTaskResultTaskInfo[];
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
      taskInfo: 'TaskInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
      taskInfo: { 'type': 'array', 'itemType': ListMcubeUpgradeTasksResponseBodyListTaskResultTaskInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeWhitelistsResponseBodyListWhitelistResultWhitelists extends $tea.Model {
  appCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  whiteListCount?: number;
  whiteListName?: string;
  whitelistType?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      whiteListCount: 'WhiteListCount',
      whiteListName: 'WhiteListName',
      whitelistType: 'WhitelistType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      whiteListCount: 'number',
      whiteListName: 'string',
      whitelistType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcubeWhitelistsResponseBodyListWhitelistResult extends $tea.Model {
  currentPage?: number;
  hasMore?: boolean;
  pageSize?: number;
  resultMsg?: string;
  success?: boolean;
  totalCount?: number;
  whitelists?: ListMcubeWhitelistsResponseBodyListWhitelistResultWhitelists[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      hasMore: 'HasMore',
      pageSize: 'PageSize',
      resultMsg: 'ResultMsg',
      success: 'Success',
      totalCount: 'TotalCount',
      whitelists: 'Whitelists',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      hasMore: 'boolean',
      pageSize: 'number',
      resultMsg: 'string',
      success: 'boolean',
      totalCount: 'number',
      whitelists: { 'type': 'array', 'itemType': ListMcubeWhitelistsResponseBodyListWhitelistResultWhitelists },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContentValueApiInvokerHttpInvoker extends $tea.Model {
  charset?: string;
  contentType?: string;
  host?: string;
  method?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      contentType: 'ContentType',
      host: 'Host',
      method: 'Method',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      contentType: 'string',
      host: 'string',
      method: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContentValueApiInvoker extends $tea.Model {
  httpInvoker?: ListMgsApiResponseBodyResultContentValueApiInvokerHttpInvoker;
  rpcInvoker?: string;
  static names(): { [key: string]: string } {
    return {
      httpInvoker: 'HttpInvoker',
      rpcInvoker: 'RpcInvoker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpInvoker: ListMgsApiResponseBodyResultContentValueApiInvokerHttpInvoker,
      rpcInvoker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContentValueCacheRule extends $tea.Model {
  cacheKey?: string;
  needCache?: boolean;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      cacheKey: 'CacheKey',
      needCache: 'NeedCache',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKey: 'string',
      needCache: 'boolean',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContentValueCircuitBreakerRule extends $tea.Model {
  appId?: string;
  defaultResponse?: string;
  errorThreshold?: number;
  id?: number;
  model?: string;
  openTimeoutSeconds?: number;
  slowRatioThreshold?: number;
  switchStatus?: string;
  windowsInSeconds?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      defaultResponse: 'DefaultResponse',
      errorThreshold: 'ErrorThreshold',
      id: 'Id',
      model: 'Model',
      openTimeoutSeconds: 'OpenTimeoutSeconds',
      slowRatioThreshold: 'SlowRatioThreshold',
      switchStatus: 'SwitchStatus',
      windowsInSeconds: 'WindowsInSeconds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      defaultResponse: 'string',
      errorThreshold: 'number',
      id: 'number',
      model: 'string',
      openTimeoutSeconds: 'number',
      slowRatioThreshold: 'number',
      switchStatus: 'string',
      windowsInSeconds: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContentValueHeaderRule extends $tea.Model {
  headerKey?: string;
  location?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContentValueHeaderRules extends $tea.Model {
  headerKey?: string;
  location?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContentValueLimitRule extends $tea.Model {
  defaultResponse?: string;
  i18nResponse?: string;
  interval?: number;
  limit?: number;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResponse: 'DefaultResponse',
      i18nResponse: 'I18nResponse',
      interval: 'Interval',
      limit: 'Limit',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResponse: 'string',
      i18nResponse: 'string',
      interval: 'number',
      limit: 'number',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContentValueMigrateRule extends $tea.Model {
  flowPercent?: number;
  needMigrate?: boolean;
  needSwitchCompletely?: boolean;
  sysId?: number;
  sysName?: string;
  upstreamType?: string;
  static names(): { [key: string]: string } {
    return {
      flowPercent: 'FlowPercent',
      needMigrate: 'NeedMigrate',
      needSwitchCompletely: 'NeedSwitchCompletely',
      sysId: 'SysId',
      sysName: 'SysName',
      upstreamType: 'UpstreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowPercent: 'number',
      needMigrate: 'boolean',
      needSwitchCompletely: 'boolean',
      sysId: 'number',
      sysName: 'string',
      upstreamType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContentValueMockRule extends $tea.Model {
  mockData?: string;
  needMock?: boolean;
  percentage?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mockData: 'MockData',
      needMock: 'NeedMock',
      percentage: 'Percentage',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockData: 'string',
      needMock: 'boolean',
      percentage: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContentValueRequestParams extends $tea.Model {
  apiId?: string;
  appId?: string;
  defaultValue?: string;
  description?: string;
  id?: number;
  location?: string;
  name?: string;
  refType?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appId: 'AppId',
      defaultValue: 'DefaultValue',
      description: 'Description',
      id: 'Id',
      location: 'Location',
      name: 'Name',
      refType: 'RefType',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appId: 'string',
      defaultValue: 'string',
      description: 'string',
      id: 'number',
      location: 'string',
      name: 'string',
      refType: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContentValue extends $tea.Model {
  apiInvoker?: ListMgsApiResponseBodyResultContentValueApiInvoker;
  apiName?: string;
  apiStatus?: string;
  apiType?: string;
  appId?: string;
  authRuleName?: string;
  cacheRule?: ListMgsApiResponseBodyResultContentValueCacheRule;
  charset?: string;
  circuitBreakerRule?: ListMgsApiResponseBodyResultContentValueCircuitBreakerRule;
  contentType?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  headerRule?: ListMgsApiResponseBodyResultContentValueHeaderRule[];
  headerRules?: ListMgsApiResponseBodyResultContentValueHeaderRules[];
  host?: string;
  id?: number;
  interfaceType?: string;
  limitRule?: ListMgsApiResponseBodyResultContentValueLimitRule;
  method?: string;
  methodName?: string;
  migrateRule?: ListMgsApiResponseBodyResultContentValueMigrateRule;
  mockRule?: ListMgsApiResponseBodyResultContentValueMockRule;
  needETag?: string;
  needEncrypt?: string;
  needJsonp?: string;
  needSign?: string;
  operationType?: string;
  paramGetMethod?: string;
  path?: string;
  requestBodyModel?: string;
  requestParams?: ListMgsApiResponseBodyResultContentValueRequestParams[];
  responseBodyModel?: string;
  sysId?: number;
  sysName?: string;
  timeout?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiInvoker: 'ApiInvoker',
      apiName: 'ApiName',
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      authRuleName: 'AuthRuleName',
      cacheRule: 'CacheRule',
      charset: 'Charset',
      circuitBreakerRule: 'CircuitBreakerRule',
      contentType: 'ContentType',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      headerRule: 'HeaderRule',
      headerRules: 'HeaderRules',
      host: 'Host',
      id: 'Id',
      interfaceType: 'InterfaceType',
      limitRule: 'LimitRule',
      method: 'Method',
      methodName: 'MethodName',
      migrateRule: 'MigrateRule',
      mockRule: 'MockRule',
      needETag: 'NeedETag',
      needEncrypt: 'NeedEncrypt',
      needJsonp: 'NeedJsonp',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      paramGetMethod: 'ParamGetMethod',
      path: 'Path',
      requestBodyModel: 'RequestBodyModel',
      requestParams: 'RequestParams',
      responseBodyModel: 'ResponseBodyModel',
      sysId: 'SysId',
      sysName: 'SysName',
      timeout: 'Timeout',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInvoker: ListMgsApiResponseBodyResultContentValueApiInvoker,
      apiName: 'string',
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      authRuleName: 'string',
      cacheRule: ListMgsApiResponseBodyResultContentValueCacheRule,
      charset: 'string',
      circuitBreakerRule: ListMgsApiResponseBodyResultContentValueCircuitBreakerRule,
      contentType: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      headerRule: { 'type': 'array', 'itemType': ListMgsApiResponseBodyResultContentValueHeaderRule },
      headerRules: { 'type': 'array', 'itemType': ListMgsApiResponseBodyResultContentValueHeaderRules },
      host: 'string',
      id: 'number',
      interfaceType: 'string',
      limitRule: ListMgsApiResponseBodyResultContentValueLimitRule,
      method: 'string',
      methodName: 'string',
      migrateRule: ListMgsApiResponseBodyResultContentValueMigrateRule,
      mockRule: ListMgsApiResponseBodyResultContentValueMockRule,
      needETag: 'string',
      needEncrypt: 'string',
      needJsonp: 'string',
      needSign: 'string',
      operationType: 'string',
      paramGetMethod: 'string',
      path: 'string',
      requestBodyModel: 'string',
      requestParams: { 'type': 'array', 'itemType': ListMgsApiResponseBodyResultContentValueRequestParams },
      responseBodyModel: 'string',
      sysId: 'number',
      sysName: 'string',
      timeout: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMgsApiResponseBodyResultContent extends $tea.Model {
  errorMessage?: string;
  success?: boolean;
  value?: ListMgsApiResponseBodyResultContentValue[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      success: 'Success',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      success: 'boolean',
      value: { 'type': 'array', 'itemType': ListMgsApiResponseBodyResultContentValue },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogMsaQueryResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushBindResponseBodyPushResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushBroadcastResponseBodyPushResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleRequestTargetMsg extends $tea.Model {
  extendedParams?: string;
  msgKey?: string;
  target?: string;
  templateKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      extendedParams: 'ExtendedParams',
      msgKey: 'MsgKey',
      target: 'Target',
      templateKeyValue: 'TemplateKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedParams: 'string',
      msgKey: 'string',
      target: 'string',
      templateKeyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleShrinkRequestTargetMsg extends $tea.Model {
  extendedParams?: string;
  msgKey?: string;
  target?: string;
  templateKeyValue?: string;
  static names(): { [key: string]: string } {
    return {
      extendedParams: 'ExtendedParams',
      msgKey: 'MsgKey',
      target: 'Target',
      templateKeyValue: 'TemplateKeyValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedParams: 'string',
      msgKey: 'string',
      target: 'string',
      templateKeyValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushMultipleResponseBodyPushResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushReportResponseBodyPushResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushSimpleResponseBodyPushResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushTemplateResponseBodyPushResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushUnBindResponseBodyPushResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppAndroidConfig extends $tea.Model {
  certRSA?: string;
  packageName?: string;
  static names(): { [key: string]: string } {
    return {
      certRSA: 'CertRSA',
      packageName: 'PackageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certRSA: 'string',
      packageName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppIosConfig extends $tea.Model {
  bundleId?: string;
  static names(): { [key: string]: string } {
    return {
      bundleId: 'BundleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bundleId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterApp extends $tea.Model {
  androidConfig?: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppAndroidConfig;
  appDesc?: string;
  appIcon?: string;
  appId?: string;
  appName?: string;
  appSecret?: string;
  creator?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  iosConfig?: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppIosConfig;
  modifier?: string;
  monitorJson?: string;
  status?: number;
  tenantId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      androidConfig: 'AndroidConfig',
      appDesc: 'AppDesc',
      appIcon: 'AppIcon',
      appId: 'AppId',
      appName: 'AppName',
      appSecret: 'AppSecret',
      creator: 'Creator',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      iosConfig: 'IosConfig',
      modifier: 'Modifier',
      monitorJson: 'MonitorJson',
      status: 'Status',
      tenantId: 'TenantId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidConfig: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppAndroidConfig,
      appDesc: 'string',
      appIcon: 'string',
      appId: 'string',
      appName: 'string',
      appSecret: 'string',
      creator: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      iosConfig: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterAppIosConfig,
      modifier: 'string',
      monitorJson: 'string',
      status: 'number',
      tenantId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMappCenterAppResponseBodyQueryMappCenterAppResult extends $tea.Model {
  mappCenterApp?: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterApp;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      mappCenterApp: 'MappCenterApp',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mappCenterApp: QueryMappCenterAppResponseBodyQueryMappCenterAppResultMappCenterApp,
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcdpAimResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcdpZoneResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniPackageResponseBodyQueryMiniPackageResultMiniPackageInfo extends $tea.Model {
  appCode?: string;
  autoInstall?: number;
  clientVersionMax?: string;
  clientVersionMin?: string;
  downloadUrl?: string;
  extendInfo?: string;
  extraData?: string;
  fallbackBaseUrl?: string;
  gmtCreate?: string;
  gmtModified?: string;
  h5Id?: string;
  h5Name?: string;
  h5Version?: string;
  id?: number;
  installType?: number;
  mainUrl?: string;
  memo?: string;
  packageType?: number;
  platform?: string;
  publishPeriod?: number;
  resourceType?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      autoInstall: 'AutoInstall',
      clientVersionMax: 'ClientVersionMax',
      clientVersionMin: 'ClientVersionMin',
      downloadUrl: 'DownloadUrl',
      extendInfo: 'ExtendInfo',
      extraData: 'ExtraData',
      fallbackBaseUrl: 'FallbackBaseUrl',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      h5Id: 'H5Id',
      h5Name: 'H5Name',
      h5Version: 'H5Version',
      id: 'Id',
      installType: 'InstallType',
      mainUrl: 'MainUrl',
      memo: 'Memo',
      packageType: 'PackageType',
      platform: 'Platform',
      publishPeriod: 'PublishPeriod',
      resourceType: 'ResourceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      autoInstall: 'number',
      clientVersionMax: 'string',
      clientVersionMin: 'string',
      downloadUrl: 'string',
      extendInfo: 'string',
      extraData: 'string',
      fallbackBaseUrl: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      h5Id: 'string',
      h5Name: 'string',
      h5Version: 'string',
      id: 'number',
      installType: 'number',
      mainUrl: 'string',
      memo: 'string',
      packageType: 'number',
      platform: 'string',
      publishPeriod: 'number',
      resourceType: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniPackageResponseBodyQueryMiniPackageResult extends $tea.Model {
  miniPackageInfo?: QueryMcubeMiniPackageResponseBodyQueryMiniPackageResultMiniPackageInfo;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      miniPackageInfo: 'MiniPackageInfo',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniPackageInfo: QueryMcubeMiniPackageResponseBodyQueryMiniPackageResultMiniPackageInfo,
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniTaskResponseBodyQueryMiniTaskResultMiniTaskInfo extends $tea.Model {
  appCode?: string;
  gmtCreate?: string;
  gmtModified?: string;
  greyConfigInfo?: string;
  greyEndtime?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  id?: number;
  memo?: string;
  packageId?: number;
  platform?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  status?: string;
  taskStatus?: number;
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtime: 'GreyEndtime',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      id: 'Id',
      memo: 'Memo',
      packageId: 'PackageId',
      platform: 'Platform',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      status: 'Status',
      taskStatus: 'TaskStatus',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      greyConfigInfo: 'string',
      greyEndtime: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      id: 'number',
      memo: 'string',
      packageId: 'number',
      platform: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      status: 'string',
      taskStatus: 'number',
      whitelistIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeMiniTaskResponseBodyQueryMiniTaskResult extends $tea.Model {
  miniTaskInfo?: QueryMcubeMiniTaskResponseBodyQueryMiniTaskResultMiniTaskInfo;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      miniTaskInfo: 'MiniTaskInfo',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      miniTaskInfo: QueryMcubeMiniTaskResponseBodyQueryMiniTaskResultMiniTaskInfo,
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMcubeVhostResponseBodyQueryVhostResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentRuleJsonList extends $tea.Model {
  operation?: string;
  ruleElement?: string;
  ruleType?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      ruleElement: 'RuleElement',
      ruleType: 'RuleType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      ruleElement: 'string',
      ruleType: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentWhitelist extends $tea.Model {
  appCode?: string;
  business?: string;
  gmtModified?: string;
  id?: number;
  idType?: string;
  platform?: string;
  status?: number;
  whiteListCount?: number;
  whiteListName?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      business: 'Business',
      gmtModified: 'GmtModified',
      id: 'Id',
      idType: 'IdType',
      platform: 'Platform',
      status: 'Status',
      whiteListCount: 'WhiteListCount',
      whiteListName: 'WhiteListName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      business: 'string',
      gmtModified: 'string',
      id: 'number',
      idType: 'string',
      platform: 'string',
      status: 'number',
      whiteListCount: 'number',
      whiteListName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContent extends $tea.Model {
  appCode?: string;
  appId?: string;
  appstoreurl?: string;
  channelContains?: string;
  channelExcludes?: string;
  cityContains?: string;
  cityExcludes?: string;
  creator?: string;
  deviceGreyNum?: number;
  devicePercent?: number;
  downloadUrl?: string;
  executionOrder?: number;
  gmtCreateStr?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNotice?: number;
  greyNum?: number;
  greyUv?: number;
  id?: number;
  innerVersion?: string;
  isEnterprise?: number;
  isOfficial?: number;
  isPush?: number;
  isRc?: number;
  isRelease?: number;
  memo?: string;
  mobileModelContains?: string;
  mobileModelExcludes?: string;
  modifier?: string;
  netType?: string;
  osVersion?: string;
  packageInfoId?: number;
  packageType?: string;
  platform?: string;
  productId?: string;
  productVersion?: string;
  publishMode?: number;
  publishType?: number;
  pushContent?: string;
  qrcodeUrl?: string;
  releaseType?: string;
  ruleJsonList?: QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentRuleJsonList[];
  silentType?: number;
  syncMode?: string;
  syncResult?: string;
  taskStatus?: number;
  upgradeContent?: string;
  upgradeType?: number;
  upgradeValidTime?: number;
  whitelist?: QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentWhitelist[];
  whitelistIds?: string;
  static names(): { [key: string]: string } {
    return {
      appCode: 'AppCode',
      appId: 'AppId',
      appstoreurl: 'Appstoreurl',
      channelContains: 'ChannelContains',
      channelExcludes: 'ChannelExcludes',
      cityContains: 'CityContains',
      cityExcludes: 'CityExcludes',
      creator: 'Creator',
      deviceGreyNum: 'DeviceGreyNum',
      devicePercent: 'DevicePercent',
      downloadUrl: 'DownloadUrl',
      executionOrder: 'ExecutionOrder',
      gmtCreateStr: 'GmtCreateStr',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNotice: 'GreyNotice',
      greyNum: 'GreyNum',
      greyUv: 'GreyUv',
      id: 'Id',
      innerVersion: 'InnerVersion',
      isEnterprise: 'IsEnterprise',
      isOfficial: 'IsOfficial',
      isPush: 'IsPush',
      isRc: 'IsRc',
      isRelease: 'IsRelease',
      memo: 'Memo',
      mobileModelContains: 'MobileModelContains',
      mobileModelExcludes: 'MobileModelExcludes',
      modifier: 'Modifier',
      netType: 'NetType',
      osVersion: 'OsVersion',
      packageInfoId: 'PackageInfoId',
      packageType: 'PackageType',
      platform: 'Platform',
      productId: 'ProductId',
      productVersion: 'ProductVersion',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      pushContent: 'PushContent',
      qrcodeUrl: 'QrcodeUrl',
      releaseType: 'ReleaseType',
      ruleJsonList: 'RuleJsonList',
      silentType: 'SilentType',
      syncMode: 'SyncMode',
      syncResult: 'SyncResult',
      taskStatus: 'TaskStatus',
      upgradeContent: 'UpgradeContent',
      upgradeType: 'UpgradeType',
      upgradeValidTime: 'UpgradeValidTime',
      whitelist: 'Whitelist',
      whitelistIds: 'WhitelistIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCode: 'string',
      appId: 'string',
      appstoreurl: 'string',
      channelContains: 'string',
      channelExcludes: 'string',
      cityContains: 'string',
      cityExcludes: 'string',
      creator: 'string',
      deviceGreyNum: 'number',
      devicePercent: 'number',
      downloadUrl: 'string',
      executionOrder: 'number',
      gmtCreateStr: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNotice: 'number',
      greyNum: 'number',
      greyUv: 'number',
      id: 'number',
      innerVersion: 'string',
      isEnterprise: 'number',
      isOfficial: 'number',
      isPush: 'number',
      isRc: 'number',
      isRelease: 'number',
      memo: 'string',
      mobileModelContains: 'string',
      mobileModelExcludes: 'string',
      modifier: 'string',
      netType: 'string',
      osVersion: 'string',
      packageInfoId: 'number',
      packageType: 'string',
      platform: 'string',
      productId: 'string',
      productVersion: 'string',
      publishMode: 'number',
      publishType: 'number',
      pushContent: 'string',
      qrcodeUrl: 'string',
      releaseType: 'string',
      ruleJsonList: { 'type': 'array', 'itemType': QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentRuleJsonList },
      silentType: 'number',
      syncMode: 'string',
      syncResult: 'string',
      taskStatus: 'number',
      upgradeContent: 'string',
      upgradeType: 'number',
      upgradeValidTime: 'number',
      whitelist: { 'type': 'array', 'itemType': QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContentWhitelist },
      whitelistIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponseBodyResultContentData extends $tea.Model {
  content?: QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContent;
  errorCode?: string;
  requestId?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      errorCode: 'ErrorCode',
      requestId: 'RequestId',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: QueryMdsUpgradeTaskDetailResponseBodyResultContentDataContent,
      errorCode: 'string',
      requestId: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMdsUpgradeTaskDetailResponseBodyResultContent extends $tea.Model {
  data?: QueryMdsUpgradeTaskDetailResponseBodyResultContentData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryMdsUpgradeTaskDetailResponseBodyResultContentData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListApiInvokerHttpInvoker extends $tea.Model {
  charset?: string;
  contentType?: string;
  host?: string;
  method?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      contentType: 'ContentType',
      host: 'Host',
      method: 'Method',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      contentType: 'string',
      host: 'string',
      method: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListApiInvoker extends $tea.Model {
  httpInvoker?: QueryMgsApipageResponseBodyResultContentListApiInvokerHttpInvoker;
  rpcInvoker?: string;
  static names(): { [key: string]: string } {
    return {
      httpInvoker: 'HttpInvoker',
      rpcInvoker: 'RpcInvoker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpInvoker: QueryMgsApipageResponseBodyResultContentListApiInvokerHttpInvoker,
      rpcInvoker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListCacheRule extends $tea.Model {
  cacheKey?: string;
  needCache?: boolean;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      cacheKey: 'CacheKey',
      needCache: 'NeedCache',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKey: 'string',
      needCache: 'boolean',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListCircuitBreakerRule extends $tea.Model {
  appId?: string;
  defaultResponse?: string;
  errorThreshold?: number;
  id?: number;
  model?: string;
  openTimeoutSeconds?: number;
  slowRatioThreshold?: number;
  switchStatus?: string;
  windowsInSeconds?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      defaultResponse: 'DefaultResponse',
      errorThreshold: 'ErrorThreshold',
      id: 'Id',
      model: 'Model',
      openTimeoutSeconds: 'OpenTimeoutSeconds',
      slowRatioThreshold: 'SlowRatioThreshold',
      switchStatus: 'SwitchStatus',
      windowsInSeconds: 'WindowsInSeconds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      defaultResponse: 'string',
      errorThreshold: 'number',
      id: 'number',
      model: 'string',
      openTimeoutSeconds: 'number',
      slowRatioThreshold: 'number',
      switchStatus: 'string',
      windowsInSeconds: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListHeaderRule extends $tea.Model {
  headerKey?: string;
  location?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListHeaderRules extends $tea.Model {
  headerKey?: string;
  location?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListLimitRule extends $tea.Model {
  defaultResponse?: string;
  i18nResponse?: string;
  interval?: number;
  limit?: number;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResponse: 'DefaultResponse',
      i18nResponse: 'I18nResponse',
      interval: 'Interval',
      limit: 'Limit',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResponse: 'string',
      i18nResponse: 'string',
      interval: 'number',
      limit: 'number',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListMigrateRule extends $tea.Model {
  flowPercent?: number;
  needMigrate?: boolean;
  needSwitchCompletely?: boolean;
  sysId?: number;
  sysName?: string;
  upstreamType?: string;
  static names(): { [key: string]: string } {
    return {
      flowPercent: 'FlowPercent',
      needMigrate: 'NeedMigrate',
      needSwitchCompletely: 'NeedSwitchCompletely',
      sysId: 'SysId',
      sysName: 'SysName',
      upstreamType: 'UpstreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowPercent: 'number',
      needMigrate: 'boolean',
      needSwitchCompletely: 'boolean',
      sysId: 'number',
      sysName: 'string',
      upstreamType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListMockRule extends $tea.Model {
  mockData?: string;
  needMock?: boolean;
  percentage?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mockData: 'MockData',
      needMock: 'NeedMock',
      percentage: 'Percentage',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockData: 'string',
      needMock: 'boolean',
      percentage: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentListRequestParams extends $tea.Model {
  apiId?: string;
  appId?: string;
  defaultValue?: string;
  description?: string;
  id?: number;
  location?: string;
  name?: string;
  refType?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appId: 'AppId',
      defaultValue: 'DefaultValue',
      description: 'Description',
      id: 'Id',
      location: 'Location',
      name: 'Name',
      refType: 'RefType',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appId: 'string',
      defaultValue: 'string',
      description: 'string',
      id: 'number',
      location: 'string',
      name: 'string',
      refType: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContentList extends $tea.Model {
  apiInvoker?: QueryMgsApipageResponseBodyResultContentListApiInvoker;
  apiName?: string;
  apiStatus?: string;
  apiType?: string;
  appId?: string;
  authRuleName?: string;
  cacheRule?: QueryMgsApipageResponseBodyResultContentListCacheRule;
  charset?: string;
  circuitBreakerRule?: QueryMgsApipageResponseBodyResultContentListCircuitBreakerRule;
  contentType?: string;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  headerRule?: QueryMgsApipageResponseBodyResultContentListHeaderRule[];
  headerRules?: QueryMgsApipageResponseBodyResultContentListHeaderRules[];
  host?: string;
  id?: number;
  interfaceType?: string;
  limitRule?: QueryMgsApipageResponseBodyResultContentListLimitRule;
  method?: string;
  methodName?: string;
  migrateRule?: QueryMgsApipageResponseBodyResultContentListMigrateRule;
  mockRule?: QueryMgsApipageResponseBodyResultContentListMockRule;
  needETag?: string;
  needEncrypt?: string;
  needJsonp?: string;
  needSign?: string;
  operationType?: string;
  paramGetMethod?: string;
  path?: string;
  requestBodyModel?: string;
  requestParams?: QueryMgsApipageResponseBodyResultContentListRequestParams[];
  responseBodyModel?: string;
  sysId?: number;
  sysName?: string;
  timeout?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiInvoker: 'ApiInvoker',
      apiName: 'ApiName',
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      authRuleName: 'AuthRuleName',
      cacheRule: 'CacheRule',
      charset: 'Charset',
      circuitBreakerRule: 'CircuitBreakerRule',
      contentType: 'ContentType',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      headerRule: 'HeaderRule',
      headerRules: 'HeaderRules',
      host: 'Host',
      id: 'Id',
      interfaceType: 'InterfaceType',
      limitRule: 'LimitRule',
      method: 'Method',
      methodName: 'MethodName',
      migrateRule: 'MigrateRule',
      mockRule: 'MockRule',
      needETag: 'NeedETag',
      needEncrypt: 'NeedEncrypt',
      needJsonp: 'NeedJsonp',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      paramGetMethod: 'ParamGetMethod',
      path: 'Path',
      requestBodyModel: 'RequestBodyModel',
      requestParams: 'RequestParams',
      responseBodyModel: 'ResponseBodyModel',
      sysId: 'SysId',
      sysName: 'SysName',
      timeout: 'Timeout',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInvoker: QueryMgsApipageResponseBodyResultContentListApiInvoker,
      apiName: 'string',
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      authRuleName: 'string',
      cacheRule: QueryMgsApipageResponseBodyResultContentListCacheRule,
      charset: 'string',
      circuitBreakerRule: QueryMgsApipageResponseBodyResultContentListCircuitBreakerRule,
      contentType: 'string',
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      headerRule: { 'type': 'array', 'itemType': QueryMgsApipageResponseBodyResultContentListHeaderRule },
      headerRules: { 'type': 'array', 'itemType': QueryMgsApipageResponseBodyResultContentListHeaderRules },
      host: 'string',
      id: 'number',
      interfaceType: 'string',
      limitRule: QueryMgsApipageResponseBodyResultContentListLimitRule,
      method: 'string',
      methodName: 'string',
      migrateRule: QueryMgsApipageResponseBodyResultContentListMigrateRule,
      mockRule: QueryMgsApipageResponseBodyResultContentListMockRule,
      needETag: 'string',
      needEncrypt: 'string',
      needJsonp: 'string',
      needSign: 'string',
      operationType: 'string',
      paramGetMethod: 'string',
      path: 'string',
      requestBodyModel: 'string',
      requestParams: { 'type': 'array', 'itemType': QueryMgsApipageResponseBodyResultContentListRequestParams },
      responseBodyModel: 'string',
      sysId: 'number',
      sysName: 'string',
      timeout: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApipageResponseBodyResultContent extends $tea.Model {
  current?: number;
  list?: QueryMgsApipageResponseBodyResultContentList[];
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'Current',
      list: 'List',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      list: { 'type': 'array', 'itemType': QueryMgsApipageResponseBodyResultContentList },
      pageSize: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValueApiInvokerHttpInvoker extends $tea.Model {
  charset?: string;
  contentType?: string;
  host?: string;
  method?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      charset: 'Charset',
      contentType: 'ContentType',
      host: 'Host',
      method: 'Method',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charset: 'string',
      contentType: 'string',
      host: 'string',
      method: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValueApiInvoker extends $tea.Model {
  httpInvoker?: QueryMgsApirestResponseBodyResultContentValueApiInvokerHttpInvoker;
  rpcInvoker?: string;
  static names(): { [key: string]: string } {
    return {
      httpInvoker: 'HttpInvoker',
      rpcInvoker: 'RpcInvoker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      httpInvoker: QueryMgsApirestResponseBodyResultContentValueApiInvokerHttpInvoker,
      rpcInvoker: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValueCacheRule extends $tea.Model {
  cacheKey?: string;
  needCache?: boolean;
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      cacheKey: 'CacheKey',
      needCache: 'NeedCache',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cacheKey: 'string',
      needCache: 'boolean',
      ttl: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValueCircuitBreakerRule extends $tea.Model {
  appId?: string;
  defaultResponse?: string;
  errorThreshold?: number;
  id?: number;
  model?: string;
  openTimeoutSeconds?: number;
  slowRatioThreshold?: number;
  switchStatus?: string;
  windowsInSeconds?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      defaultResponse: 'DefaultResponse',
      errorThreshold: 'ErrorThreshold',
      id: 'Id',
      model: 'Model',
      openTimeoutSeconds: 'OpenTimeoutSeconds',
      slowRatioThreshold: 'SlowRatioThreshold',
      switchStatus: 'SwitchStatus',
      windowsInSeconds: 'WindowsInSeconds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      defaultResponse: 'string',
      errorThreshold: 'number',
      id: 'number',
      model: 'string',
      openTimeoutSeconds: 'number',
      slowRatioThreshold: 'number',
      switchStatus: 'string',
      windowsInSeconds: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValueDefaultLimitRule extends $tea.Model {
  configId?: number;
  defaultLimit?: boolean;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      defaultLimit: 'DefaultLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      defaultLimit: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValueHeaderRule extends $tea.Model {
  headerKey?: string;
  location?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValueHeaderRules extends $tea.Model {
  headerKey?: string;
  location?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      headerKey: 'HeaderKey',
      location: 'Location',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headerKey: 'string',
      location: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValueLimitRule extends $tea.Model {
  defaultResponse?: string;
  i18nResponse?: string;
  interval?: number;
  limit?: number;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      defaultResponse: 'DefaultResponse',
      i18nResponse: 'I18nResponse',
      interval: 'Interval',
      limit: 'Limit',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultResponse: 'string',
      i18nResponse: 'string',
      interval: 'number',
      limit: 'number',
      mode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValueMigrateRule extends $tea.Model {
  flowPercent?: number;
  needMigrate?: boolean;
  needSwitchCompletely?: boolean;
  sysId?: number;
  sysName?: string;
  upstreamType?: string;
  static names(): { [key: string]: string } {
    return {
      flowPercent: 'FlowPercent',
      needMigrate: 'NeedMigrate',
      needSwitchCompletely: 'NeedSwitchCompletely',
      sysId: 'SysId',
      sysName: 'SysName',
      upstreamType: 'UpstreamType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flowPercent: 'number',
      needMigrate: 'boolean',
      needSwitchCompletely: 'boolean',
      sysId: 'number',
      sysName: 'string',
      upstreamType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValueMockRule extends $tea.Model {
  mockData?: string;
  needMock?: boolean;
  percentage?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      mockData: 'MockData',
      needMock: 'NeedMock',
      percentage: 'Percentage',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mockData: 'string',
      needMock: 'boolean',
      percentage: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValueRequestParams extends $tea.Model {
  apiId?: string;
  appId?: string;
  defaultValue?: string;
  description?: string;
  id?: number;
  location?: string;
  name?: string;
  refType?: string;
  type?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appId: 'AppId',
      defaultValue: 'DefaultValue',
      description: 'Description',
      id: 'Id',
      location: 'Location',
      name: 'Name',
      refType: 'RefType',
      type: 'Type',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      appId: 'string',
      defaultValue: 'string',
      description: 'string',
      id: 'number',
      location: 'string',
      name: 'string',
      refType: 'string',
      type: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContentValue extends $tea.Model {
  apiInvoker?: QueryMgsApirestResponseBodyResultContentValueApiInvoker;
  apiName?: string;
  apiStatus?: string;
  apiType?: string;
  appId?: string;
  authRuleName?: string;
  cacheRule?: QueryMgsApirestResponseBodyResultContentValueCacheRule;
  charset?: string;
  circuitBreakerRule?: QueryMgsApirestResponseBodyResultContentValueCircuitBreakerRule;
  contentType?: string;
  defaultLimitRule?: QueryMgsApirestResponseBodyResultContentValueDefaultLimitRule;
  description?: string;
  gmtCreate?: string;
  gmtModified?: string;
  headerRule?: QueryMgsApirestResponseBodyResultContentValueHeaderRule[];
  headerRules?: QueryMgsApirestResponseBodyResultContentValueHeaderRules[];
  host?: string;
  id?: number;
  interfaceType?: string;
  limitRule?: QueryMgsApirestResponseBodyResultContentValueLimitRule;
  method?: string;
  methodName?: string;
  migrateRule?: QueryMgsApirestResponseBodyResultContentValueMigrateRule;
  mockRule?: QueryMgsApirestResponseBodyResultContentValueMockRule;
  needETag?: string;
  needEncrypt?: string;
  needJsonp?: string;
  needSign?: string;
  operationType?: string;
  paramGetMethod?: string;
  path?: string;
  requestBodyModel?: string;
  requestParams?: QueryMgsApirestResponseBodyResultContentValueRequestParams[];
  responseBodyModel?: string;
  sysId?: number;
  sysName?: string;
  timeout?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiInvoker: 'ApiInvoker',
      apiName: 'ApiName',
      apiStatus: 'ApiStatus',
      apiType: 'ApiType',
      appId: 'AppId',
      authRuleName: 'AuthRuleName',
      cacheRule: 'CacheRule',
      charset: 'Charset',
      circuitBreakerRule: 'CircuitBreakerRule',
      contentType: 'ContentType',
      defaultLimitRule: 'DefaultLimitRule',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      headerRule: 'HeaderRule',
      headerRules: 'HeaderRules',
      host: 'Host',
      id: 'Id',
      interfaceType: 'InterfaceType',
      limitRule: 'LimitRule',
      method: 'Method',
      methodName: 'MethodName',
      migrateRule: 'MigrateRule',
      mockRule: 'MockRule',
      needETag: 'NeedETag',
      needEncrypt: 'NeedEncrypt',
      needJsonp: 'NeedJsonp',
      needSign: 'NeedSign',
      operationType: 'OperationType',
      paramGetMethod: 'ParamGetMethod',
      path: 'Path',
      requestBodyModel: 'RequestBodyModel',
      requestParams: 'RequestParams',
      responseBodyModel: 'ResponseBodyModel',
      sysId: 'SysId',
      sysName: 'SysName',
      timeout: 'Timeout',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInvoker: QueryMgsApirestResponseBodyResultContentValueApiInvoker,
      apiName: 'string',
      apiStatus: 'string',
      apiType: 'string',
      appId: 'string',
      authRuleName: 'string',
      cacheRule: QueryMgsApirestResponseBodyResultContentValueCacheRule,
      charset: 'string',
      circuitBreakerRule: QueryMgsApirestResponseBodyResultContentValueCircuitBreakerRule,
      contentType: 'string',
      defaultLimitRule: QueryMgsApirestResponseBodyResultContentValueDefaultLimitRule,
      description: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      headerRule: { 'type': 'array', 'itemType': QueryMgsApirestResponseBodyResultContentValueHeaderRule },
      headerRules: { 'type': 'array', 'itemType': QueryMgsApirestResponseBodyResultContentValueHeaderRules },
      host: 'string',
      id: 'number',
      interfaceType: 'string',
      limitRule: QueryMgsApirestResponseBodyResultContentValueLimitRule,
      method: 'string',
      methodName: 'string',
      migrateRule: QueryMgsApirestResponseBodyResultContentValueMigrateRule,
      mockRule: QueryMgsApirestResponseBodyResultContentValueMockRule,
      needETag: 'string',
      needEncrypt: 'string',
      needJsonp: 'string',
      needSign: 'string',
      operationType: 'string',
      paramGetMethod: 'string',
      path: 'string',
      requestBodyModel: 'string',
      requestParams: { 'type': 'array', 'itemType': QueryMgsApirestResponseBodyResultContentValueRequestParams },
      responseBodyModel: 'string',
      sysId: 'number',
      sysName: 'string',
      timeout: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMgsApirestResponseBodyResultContent extends $tea.Model {
  errorMessage?: string;
  success?: boolean;
  value?: QueryMgsApirestResponseBodyResultContentValue;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      success: 'Success',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      success: 'boolean',
      value: QueryMgsApirestResponseBodyResultContentValue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpsSchedulerListResponseBodyResultContentDataList extends $tea.Model {
  createType?: number;
  deliveryType?: number;
  executedStatus?: string;
  gmtCreate?: number;
  parentId?: string;
  pushContent?: string;
  pushTime?: number;
  pushTitle?: string;
  strategyType?: number;
  type?: number;
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      createType: 'CreateType',
      deliveryType: 'DeliveryType',
      executedStatus: 'ExecutedStatus',
      gmtCreate: 'GmtCreate',
      parentId: 'ParentId',
      pushContent: 'PushContent',
      pushTime: 'PushTime',
      pushTitle: 'PushTitle',
      strategyType: 'StrategyType',
      type: 'Type',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createType: 'number',
      deliveryType: 'number',
      executedStatus: 'string',
      gmtCreate: 'number',
      parentId: 'string',
      pushContent: 'string',
      pushTime: 'number',
      pushTitle: 'string',
      strategyType: 'number',
      type: 'number',
      uniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpsSchedulerListResponseBodyResultContentData extends $tea.Model {
  list?: QueryMpsSchedulerListResponseBodyResultContentDataList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryMpsSchedulerListResponseBodyResultContentDataList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMpsSchedulerListResponseBodyResultContent extends $tea.Model {
  data?: QueryMpsSchedulerListResponseBodyResultContentData;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryMpsSchedulerListResponseBodyResultContentData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisCoreIndexResponseBodyResultContentData extends $tea.Model {
  arrivalNum?: number;
  arrivalRate?: number;
  ignoreNum?: number;
  ignoreRate?: number;
  openNum?: number;
  openRate?: number;
  pushNum?: number;
  pushTotalNum?: number;
  static names(): { [key: string]: string } {
    return {
      arrivalNum: 'ArrivalNum',
      arrivalRate: 'ArrivalRate',
      ignoreNum: 'IgnoreNum',
      ignoreRate: 'IgnoreRate',
      openNum: 'OpenNum',
      openRate: 'OpenRate',
      pushNum: 'PushNum',
      pushTotalNum: 'PushTotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrivalNum: 'number',
      arrivalRate: 'number',
      ignoreNum: 'number',
      ignoreRate: 'number',
      openNum: 'number',
      openRate: 'number',
      pushNum: 'number',
      pushTotalNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisCoreIndexResponseBodyResultContent extends $tea.Model {
  data?: QueryPushAnalysisCoreIndexResponseBodyResultContentData;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryPushAnalysisCoreIndexResponseBodyResultContentData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskDetailResponseBodyResultContentData extends $tea.Model {
  duration?: string;
  endTime?: number;
  pushArrivalNum?: number;
  pushNum?: number;
  pushSuccessNum?: number;
  startTime?: number;
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      endTime: 'EndTime',
      pushArrivalNum: 'PushArrivalNum',
      pushNum: 'PushNum',
      pushSuccessNum: 'PushSuccessNum',
      startTime: 'StartTime',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      endTime: 'number',
      pushArrivalNum: 'number',
      pushNum: 'number',
      pushSuccessNum: 'number',
      startTime: 'number',
      taskId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskDetailResponseBodyResultContent extends $tea.Model {
  data?: QueryPushAnalysisTaskDetailResponseBodyResultContentData;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryPushAnalysisTaskDetailResponseBodyResultContentData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskListResponseBodyResultContentDataList extends $tea.Model {
  gmtCreate?: number;
  taskId?: string;
  taskName?: string;
  templateId?: string;
  templateName?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      taskId: 'TaskId',
      taskName: 'TaskName',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      taskId: 'string',
      taskName: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskListResponseBodyResultContentData extends $tea.Model {
  gmtCreate?: number;
  list?: QueryPushAnalysisTaskListResponseBodyResultContentDataList[];
  taskId?: string;
  taskName?: string;
  templateId?: string;
  templateName?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      list: 'List',
      taskId: 'TaskId',
      taskName: 'TaskName',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      list: { 'type': 'array', 'itemType': QueryPushAnalysisTaskListResponseBodyResultContentDataList },
      taskId: 'string',
      taskName: 'string',
      templateId: 'string',
      templateName: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushAnalysisTaskListResponseBodyResultContent extends $tea.Model {
  data?: QueryPushAnalysisTaskListResponseBodyResultContentData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryPushAnalysisTaskListResponseBodyResultContentData },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushSchedulerListResponseBodyResultContentDataList extends $tea.Model {
  createType?: number;
  deliveryType?: number;
  executedStatus?: string;
  gmtCreate?: number;
  parentId?: string;
  pushContent?: string;
  pushTime?: number;
  pushTitle?: string;
  strategyType?: number;
  type?: number;
  uniqueId?: string;
  static names(): { [key: string]: string } {
    return {
      createType: 'CreateType',
      deliveryType: 'DeliveryType',
      executedStatus: 'ExecutedStatus',
      gmtCreate: 'GmtCreate',
      parentId: 'ParentId',
      pushContent: 'PushContent',
      pushTime: 'PushTime',
      pushTitle: 'PushTitle',
      strategyType: 'StrategyType',
      type: 'Type',
      uniqueId: 'UniqueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createType: 'number',
      deliveryType: 'number',
      executedStatus: 'string',
      gmtCreate: 'number',
      parentId: 'string',
      pushContent: 'string',
      pushTime: 'number',
      pushTitle: 'string',
      strategyType: 'number',
      type: 'number',
      uniqueId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushSchedulerListResponseBodyResultContentData extends $tea.Model {
  list?: QueryPushSchedulerListResponseBodyResultContentDataList[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryPushSchedulerListResponseBodyResultContentDataList },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryPushSchedulerListResponseBodyResultContent extends $tea.Model {
  data?: QueryPushSchedulerListResponseBodyResultContentData;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryPushSchedulerListResponseBodyResultContentData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePushMessageResponseBodyPushResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RevokePushTaskResponseBodyPushResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunMsaDiffResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMgsApirestResponseBodyResultContent extends $tea.Model {
  errorMessage?: string;
  success?: boolean;
  value?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      success: 'Success',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      success: 'boolean',
      value: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartUserAppAsyncEnhanceInMsaResponseBodyResultContentDataEnhanceMapping extends $tea.Model {
  info?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartUserAppAsyncEnhanceInMsaResponseBodyResultContentData extends $tea.Model {
  afterMd5?: string;
  afterSize?: number;
  appCode?: string;
  appPackage?: string;
  assetsFileList?: string[];
  beforeMd5?: string;
  beforeSize?: number;
  classForest?: string;
  enhanceMapping?: StartUserAppAsyncEnhanceInMsaResponseBodyResultContentDataEnhanceMapping[];
  enhanceRules?: string[];
  enhancedAssetsFiles?: string[];
  enhancedClasses?: string[];
  enhancedSoFiles?: string[];
  id?: number;
  label?: string;
  progress?: number;
  soFileList?: string[];
  status?: number;
  taskType?: string;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      afterMd5: 'AfterMd5',
      afterSize: 'AfterSize',
      appCode: 'AppCode',
      appPackage: 'AppPackage',
      assetsFileList: 'AssetsFileList',
      beforeMd5: 'BeforeMd5',
      beforeSize: 'BeforeSize',
      classForest: 'ClassForest',
      enhanceMapping: 'EnhanceMapping',
      enhanceRules: 'EnhanceRules',
      enhancedAssetsFiles: 'EnhancedAssetsFiles',
      enhancedClasses: 'EnhancedClasses',
      enhancedSoFiles: 'EnhancedSoFiles',
      id: 'Id',
      label: 'Label',
      progress: 'Progress',
      soFileList: 'SoFileList',
      status: 'Status',
      taskType: 'TaskType',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterMd5: 'string',
      afterSize: 'number',
      appCode: 'string',
      appPackage: 'string',
      assetsFileList: { 'type': 'array', 'itemType': 'string' },
      beforeMd5: 'string',
      beforeSize: 'number',
      classForest: 'string',
      enhanceMapping: { 'type': 'array', 'itemType': StartUserAppAsyncEnhanceInMsaResponseBodyResultContentDataEnhanceMapping },
      enhanceRules: { 'type': 'array', 'itemType': 'string' },
      enhancedAssetsFiles: { 'type': 'array', 'itemType': 'string' },
      enhancedClasses: { 'type': 'array', 'itemType': 'string' },
      enhancedSoFiles: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      label: 'string',
      progress: 'number',
      soFileList: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
      taskType: 'string',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartUserAppAsyncEnhanceInMsaResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: StartUserAppAsyncEnhanceInMsaResponseBodyResultContentData;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StartUserAppAsyncEnhanceInMsaResponseBodyResultContentData,
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcubeWhitelistResponseBodyAddWhitelistResultAddWhitelistInfo extends $tea.Model {
  failNum?: number;
  failUserIds?: string;
  successNum?: number;
  static names(): { [key: string]: string } {
    return {
      failNum: 'FailNum',
      failUserIds: 'FailUserIds',
      successNum: 'SuccessNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failNum: 'number',
      failUserIds: 'string',
      successNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMcubeWhitelistResponseBodyAddWhitelistResult extends $tea.Model {
  addWhitelistInfo?: UpdateMcubeWhitelistResponseBodyAddWhitelistResultAddWhitelistInfo;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      addWhitelistInfo: 'AddWhitelistInfo',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addWhitelistInfo: UpdateMcubeWhitelistResponseBodyAddWhitelistResultAddWhitelistInfo,
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMpaasAppInfoResponseBodyResultContentData extends $tea.Model {
  appId?: string;
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMpaasAppInfoResponseBodyResultContent extends $tea.Model {
  data?: UpdateMpaasAppInfoResponseBodyResultContentData;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateMpaasAppInfoResponseBodyResultContentData,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadBitcodeToMsaResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeMiniPackageResponseBodyUploadMiniPackageResultReturnPackageResult extends $tea.Model {
  debugUrl?: string;
  packageId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      debugUrl: 'DebugUrl',
      packageId: 'PackageId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugUrl: 'string',
      packageId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeMiniPackageResponseBodyUploadMiniPackageResult extends $tea.Model {
  resultMsg?: string;
  returnPackageResult?: UploadMcubeMiniPackageResponseBodyUploadMiniPackageResultReturnPackageResult;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      resultMsg: 'ResultMsg',
      returnPackageResult: 'ReturnPackageResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resultMsg: 'string',
      returnPackageResult: UploadMcubeMiniPackageResponseBodyUploadMiniPackageResultReturnPackageResult,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadMcubeRsaKeyResponseBodyUploadRsaResult extends $tea.Model {
  data?: string;
  resultMsg?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      resultMsg: 'ResultMsg',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      resultMsg: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserAppToMsaResponseBodyResultContentDataApkInfoEnhanceMapping extends $tea.Model {
  info?: string;
  reason?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      reason: 'Reason',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      reason: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserAppToMsaResponseBodyResultContentDataApkInfo extends $tea.Model {
  afterMd5?: string;
  afterSize?: number;
  appCode?: string;
  appPackage?: string;
  beforeMd5?: string;
  beforeSize?: number;
  classForest?: string;
  enhanceMapping?: UploadUserAppToMsaResponseBodyResultContentDataApkInfoEnhanceMapping;
  enhanceRules?: string[];
  enhancedClasses?: string[];
  id?: number;
  label?: string;
  progress?: number;
  status?: number;
  taskType?: string;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      afterMd5: 'AfterMd5',
      afterSize: 'AfterSize',
      appCode: 'AppCode',
      appPackage: 'AppPackage',
      beforeMd5: 'BeforeMd5',
      beforeSize: 'BeforeSize',
      classForest: 'ClassForest',
      enhanceMapping: 'EnhanceMapping',
      enhanceRules: 'EnhanceRules',
      enhancedClasses: 'EnhancedClasses',
      id: 'Id',
      label: 'Label',
      progress: 'Progress',
      status: 'Status',
      taskType: 'TaskType',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterMd5: 'string',
      afterSize: 'number',
      appCode: 'string',
      appPackage: 'string',
      beforeMd5: 'string',
      beforeSize: 'number',
      classForest: 'string',
      enhanceMapping: UploadUserAppToMsaResponseBodyResultContentDataApkInfoEnhanceMapping,
      enhanceRules: { 'type': 'array', 'itemType': 'string' },
      enhancedClasses: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      label: 'string',
      progress: 'number',
      status: 'number',
      taskType: 'string',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserAppToMsaResponseBodyResultContentData extends $tea.Model {
  apkInfo?: UploadUserAppToMsaResponseBodyResultContentDataApkInfo;
  enhanceTaskId?: number;
  id?: number;
  progress?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      apkInfo: 'ApkInfo',
      enhanceTaskId: 'EnhanceTaskId',
      id: 'Id',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apkInfo: UploadUserAppToMsaResponseBodyResultContentDataApkInfo,
      enhanceTaskId: 'number',
      id: 'number',
      progress: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadUserAppToMsaResponseBodyResultContent extends $tea.Model {
  code?: string;
  data?: UploadUserAppToMsaResponseBodyResultContentData;
  extra?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      extra: 'Extra',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UploadUserAppToMsaResponseBodyResultContentData,
      extra: 'string',
      message: 'string',
      success: 'boolean',
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
      'cn-hangzhou': "mpaas.aliyuncs.com",
      'ap-northeast-1': "mpaas.aliyuncs.com",
      'ap-northeast-2-pop': "mpaas.aliyuncs.com",
      'ap-south-1': "mpaas.aliyuncs.com",
      'ap-southeast-1': "mpaas.aliyuncs.com",
      'ap-southeast-2': "mpaas.aliyuncs.com",
      'ap-southeast-3': "mpaas.aliyuncs.com",
      'ap-southeast-5': "mpaas.aliyuncs.com",
      'cn-beijing': "mpaas.aliyuncs.com",
      'cn-beijing-finance-1': "mpaas.aliyuncs.com",
      'cn-beijing-finance-pop': "mpaas.aliyuncs.com",
      'cn-beijing-gov-1': "mpaas.aliyuncs.com",
      'cn-beijing-nu16-b01': "mpaas.aliyuncs.com",
      'cn-chengdu': "mpaas.aliyuncs.com",
      'cn-edge-1': "mpaas.aliyuncs.com",
      'cn-fujian': "mpaas.aliyuncs.com",
      'cn-haidian-cm12-c01': "mpaas.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mpaas.aliyuncs.com",
      'cn-hangzhou-finance': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mpaas.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mpaas.aliyuncs.com",
      'cn-hangzhou-test-306': "mpaas.aliyuncs.com",
      'cn-hongkong': "mpaas.aliyuncs.com",
      'cn-hongkong-finance-pop': "mpaas.aliyuncs.com",
      'cn-huhehaote': "mpaas.aliyuncs.com",
      'cn-north-2-gov-1': "mpaas.aliyuncs.com",
      'cn-qingdao': "mpaas.aliyuncs.com",
      'cn-qingdao-nebula': "mpaas.aliyuncs.com",
      'cn-shanghai': "mpaas.aliyuncs.com",
      'cn-shanghai-et15-b01': "mpaas.aliyuncs.com",
      'cn-shanghai-et2-b01': "mpaas.aliyuncs.com",
      'cn-shanghai-finance-1': "mpaas.aliyuncs.com",
      'cn-shanghai-inner': "mpaas.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mpaas.aliyuncs.com",
      'cn-shenzhen': "mpaas.aliyuncs.com",
      'cn-shenzhen-finance-1': "mpaas.aliyuncs.com",
      'cn-shenzhen-inner': "mpaas.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mpaas.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mpaas.aliyuncs.com",
      'cn-wuhan': "mpaas.aliyuncs.com",
      'cn-yushanfang': "mpaas.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mpaas.aliyuncs.com",
      'cn-zhangjiakou': "mpaas.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mpaas.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mpaas.aliyuncs.com",
      'eu-central-1': "mpaas.aliyuncs.com",
      'eu-west-1': "mpaas.aliyuncs.com",
      'eu-west-1-oxs': "mpaas.aliyuncs.com",
      'me-east-1': "mpaas.aliyuncs.com",
      'rus-west-1-pop': "mpaas.aliyuncs.com",
      'us-east-1': "mpaas.aliyuncs.com",
      'us-west-1': "mpaas.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mpaas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async addMdsMiniConfigWithOptions(request: AddMdsMiniConfigRequest, runtime: $Util.RuntimeOptions): Promise<AddMdsMiniConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMiniConfigAddJsonStr)) {
      body["MpaasMappcenterMiniConfigAddJsonStr"] = request.mpaasMappcenterMiniConfigAddJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddMdsMiniConfig",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddMdsMiniConfigResponse>(await this.callApi(params, req, runtime), new AddMdsMiniConfigResponse({}));
  }

  async addMdsMiniConfig(request: AddMdsMiniConfigRequest): Promise<AddMdsMiniConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addMdsMiniConfigWithOptions(request, runtime);
  }

  async cancelPushSchedulerWithOptions(request: CancelPushSchedulerRequest, runtime: $Util.RuntimeOptions): Promise<CancelPushSchedulerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.uniqueIds)) {
      body["UniqueIds"] = request.uniqueIds;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelPushScheduler",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelPushSchedulerResponse>(await this.callApi(params, req, runtime), new CancelPushSchedulerResponse({}));
  }

  async cancelPushScheduler(request: CancelPushSchedulerRequest): Promise<CancelPushSchedulerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelPushSchedulerWithOptions(request, runtime);
  }

  async changeMcubeMiniTaskStatusWithOptions(request: ChangeMcubeMiniTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<ChangeMcubeMiniTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeMcubeMiniTaskStatus",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeMcubeMiniTaskStatusResponse>(await this.callApi(params, req, runtime), new ChangeMcubeMiniTaskStatusResponse({}));
  }

  async changeMcubeMiniTaskStatus(request: ChangeMcubeMiniTaskStatusRequest): Promise<ChangeMcubeMiniTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeMcubeMiniTaskStatusWithOptions(request, runtime);
  }

  async changeMcubeNebulaTaskStatusWithOptions(request: ChangeMcubeNebulaTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<ChangeMcubeNebulaTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeMcubeNebulaTaskStatus",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeMcubeNebulaTaskStatusResponse>(await this.callApi(params, req, runtime), new ChangeMcubeNebulaTaskStatusResponse({}));
  }

  async changeMcubeNebulaTaskStatus(request: ChangeMcubeNebulaTaskStatusRequest): Promise<ChangeMcubeNebulaTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeMcubeNebulaTaskStatusWithOptions(request, runtime);
  }

  async changeMcubePublicTaskStatusWithOptions(request: ChangeMcubePublicTaskStatusRequest, runtime: $Util.RuntimeOptions): Promise<ChangeMcubePublicTaskStatusResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ChangeMcubePublicTaskStatus",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeMcubePublicTaskStatusResponse>(await this.callApi(params, req, runtime), new ChangeMcubePublicTaskStatusResponse({}));
  }

  async changeMcubePublicTaskStatus(request: ChangeMcubePublicTaskStatusRequest): Promise<ChangeMcubePublicTaskStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeMcubePublicTaskStatusWithOptions(request, runtime);
  }

  async copyMcdpGroupWithOptions(request: CopyMcdpGroupRequest, runtime: $Util.RuntimeOptions): Promise<CopyMcdpGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpGroupCopyJsonStr)) {
      body["MpaasMappcenterMcdpGroupCopyJsonStr"] = request.mpaasMappcenterMcdpGroupCopyJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CopyMcdpGroup",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CopyMcdpGroupResponse>(await this.callApi(params, req, runtime), new CopyMcdpGroupResponse({}));
  }

  async copyMcdpGroup(request: CopyMcdpGroupRequest): Promise<CopyMcdpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.copyMcdpGroupWithOptions(request, runtime);
  }

  async createMasCrowdWithOptions(request: CreateMasCrowdRequest, runtime: $Util.RuntimeOptions): Promise<CreateMasCrowdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpMasCrowdCreateJsonStr)) {
      body["MpaasMappcenterMcdpMasCrowdCreateJsonStr"] = request.mpaasMappcenterMcdpMasCrowdCreateJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMasCrowd",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMasCrowdResponse>(await this.callApi(params, req, runtime), new CreateMasCrowdResponse({}));
  }

  async createMasCrowd(request: CreateMasCrowdRequest): Promise<CreateMasCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMasCrowdWithOptions(request, runtime);
  }

  async createMasFunnelWithOptions(request: CreateMasFunnelRequest, runtime: $Util.RuntimeOptions): Promise<CreateMasFunnelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpMasFunnelCreateJsonStr)) {
      body["MpaasMappcenterMcdpMasFunnelCreateJsonStr"] = request.mpaasMappcenterMcdpMasFunnelCreateJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMasFunnel",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMasFunnelResponse>(await this.callApi(params, req, runtime), new CreateMasFunnelResponse({}));
  }

  async createMasFunnel(request: CreateMasFunnelRequest): Promise<CreateMasFunnelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMasFunnelWithOptions(request, runtime);
  }

  async createMcdpEventWithOptions(request: CreateMcdpEventRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcdpEventResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpEventCreateJsonStr)) {
      body["MpaasMappcenterMcdpEventCreateJsonStr"] = request.mpaasMappcenterMcdpEventCreateJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcdpEvent",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcdpEventResponse>(await this.callApi(params, req, runtime), new CreateMcdpEventResponse({}));
  }

  async createMcdpEvent(request: CreateMcdpEventRequest): Promise<CreateMcdpEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcdpEventWithOptions(request, runtime);
  }

  async createMcdpEventAttributeWithOptions(request: CreateMcdpEventAttributeRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcdpEventAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpEventAttributeCreateJsonStr)) {
      body["MpaasMappcenterMcdpEventAttributeCreateJsonStr"] = request.mpaasMappcenterMcdpEventAttributeCreateJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcdpEventAttribute",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcdpEventAttributeResponse>(await this.callApi(params, req, runtime), new CreateMcdpEventAttributeResponse({}));
  }

  async createMcdpEventAttribute(request: CreateMcdpEventAttributeRequest): Promise<CreateMcdpEventAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcdpEventAttributeWithOptions(request, runtime);
  }

  async createMcdpGroupWithOptions(request: CreateMcdpGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcdpGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpGroupCreateJsonStr)) {
      body["MpaasMappcenterMcdpGroupCreateJsonStr"] = request.mpaasMappcenterMcdpGroupCreateJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcdpGroup",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcdpGroupResponse>(await this.callApi(params, req, runtime), new CreateMcdpGroupResponse({}));
  }

  async createMcdpGroup(request: CreateMcdpGroupRequest): Promise<CreateMcdpGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcdpGroupWithOptions(request, runtime);
  }

  async createMcdpMaterialWithOptions(request: CreateMcdpMaterialRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcdpMaterialResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpMaterialCreateJsonStr)) {
      body["MpaasMappcenterMcdpMaterialCreateJsonStr"] = request.mpaasMappcenterMcdpMaterialCreateJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcdpMaterial",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcdpMaterialResponse>(await this.callApi(params, req, runtime), new CreateMcdpMaterialResponse({}));
  }

  async createMcdpMaterial(request: CreateMcdpMaterialRequest): Promise<CreateMcdpMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcdpMaterialWithOptions(request, runtime);
  }

  async createMcdpZoneWithOptions(request: CreateMcdpZoneRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcdpZoneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpZoneCreateJsonStr)) {
      body["MpaasMappcenterMcdpZoneCreateJsonStr"] = request.mpaasMappcenterMcdpZoneCreateJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcdpZone",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcdpZoneResponse>(await this.callApi(params, req, runtime), new CreateMcdpZoneResponse({}));
  }

  async createMcdpZone(request: CreateMcdpZoneRequest): Promise<CreateMcdpZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcdpZoneWithOptions(request, runtime);
  }

  async createMcubeMiniAppWithOptions(request: CreateMcubeMiniAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeMiniAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!Util.isUnset(request.h5Name)) {
      body["H5Name"] = request.h5Name;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcubeMiniApp",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcubeMiniAppResponse>(await this.callApi(params, req, runtime), new CreateMcubeMiniAppResponse({}));
  }

  async createMcubeMiniApp(request: CreateMcubeMiniAppRequest): Promise<CreateMcubeMiniAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeMiniAppWithOptions(request, runtime);
  }

  async createMcubeMiniTaskWithOptions(request: CreateMcubeMiniTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeMiniTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.greyConfigInfo)) {
      body["GreyConfigInfo"] = request.greyConfigInfo;
    }

    if (!Util.isUnset(request.greyEndtimeData)) {
      body["GreyEndtimeData"] = request.greyEndtimeData;
    }

    if (!Util.isUnset(request.greyNum)) {
      body["GreyNum"] = request.greyNum;
    }

    if (!Util.isUnset(request.memo)) {
      body["Memo"] = request.memo;
    }

    if (!Util.isUnset(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!Util.isUnset(request.publishMode)) {
      body["PublishMode"] = request.publishMode;
    }

    if (!Util.isUnset(request.publishType)) {
      body["PublishType"] = request.publishType;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.whitelistIds)) {
      body["WhitelistIds"] = request.whitelistIds;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcubeMiniTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcubeMiniTaskResponse>(await this.callApi(params, req, runtime), new CreateMcubeMiniTaskResponse({}));
  }

  async createMcubeMiniTask(request: CreateMcubeMiniTaskRequest): Promise<CreateMcubeMiniTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeMiniTaskWithOptions(request, runtime);
  }

  async createMcubeNebulaAppWithOptions(request: CreateMcubeNebulaAppRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeNebulaAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!Util.isUnset(request.h5Name)) {
      body["H5Name"] = request.h5Name;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcubeNebulaApp",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcubeNebulaAppResponse>(await this.callApi(params, req, runtime), new CreateMcubeNebulaAppResponse({}));
  }

  async createMcubeNebulaApp(request: CreateMcubeNebulaAppRequest): Promise<CreateMcubeNebulaAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeNebulaAppWithOptions(request, runtime);
  }

  async createMcubeNebulaResourceWithOptions(request: CreateMcubeNebulaResourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeNebulaResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoInstall)) {
      body["AutoInstall"] = request.autoInstall;
    }

    if (!Util.isUnset(request.clientVersionMax)) {
      body["ClientVersionMax"] = request.clientVersionMax;
    }

    if (!Util.isUnset(request.clientVersionMin)) {
      body["ClientVersionMin"] = request.clientVersionMin;
    }

    if (!Util.isUnset(request.customDomainName)) {
      body["CustomDomainName"] = request.customDomainName;
    }

    if (!Util.isUnset(request.extendInfo)) {
      body["ExtendInfo"] = request.extendInfo;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!Util.isUnset(request.h5Name)) {
      body["H5Name"] = request.h5Name;
    }

    if (!Util.isUnset(request.h5Version)) {
      body["H5Version"] = request.h5Version;
    }

    if (!Util.isUnset(request.installType)) {
      body["InstallType"] = request.installType;
    }

    if (!Util.isUnset(request.mainUrl)) {
      body["MainUrl"] = request.mainUrl;
    }

    if (!Util.isUnset(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!Util.isUnset(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.repeatNebula)) {
      body["RepeatNebula"] = request.repeatNebula;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.subUrl)) {
      body["SubUrl"] = request.subUrl;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.vhost)) {
      body["Vhost"] = request.vhost;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcubeNebulaResource",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcubeNebulaResourceResponse>(await this.callApi(params, req, runtime), new CreateMcubeNebulaResourceResponse({}));
  }

  async createMcubeNebulaResource(request: CreateMcubeNebulaResourceRequest): Promise<CreateMcubeNebulaResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeNebulaResourceWithOptions(request, runtime);
  }

  async createMcubeNebulaTaskWithOptions(request: CreateMcubeNebulaTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeNebulaTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appCode)) {
      body["AppCode"] = request.appCode;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.creator)) {
      body["Creator"] = request.creator;
    }

    if (!Util.isUnset(request.gmtCreate)) {
      body["GmtCreate"] = request.gmtCreate;
    }

    if (!Util.isUnset(request.gmtModified)) {
      body["GmtModified"] = request.gmtModified;
    }

    if (!Util.isUnset(request.gmtModifiedStr)) {
      body["GmtModifiedStr"] = request.gmtModifiedStr;
    }

    if (!Util.isUnset(request.greyConfigInfo)) {
      body["GreyConfigInfo"] = request.greyConfigInfo;
    }

    if (!Util.isUnset(request.greyEndtime)) {
      body["GreyEndtime"] = request.greyEndtime;
    }

    if (!Util.isUnset(request.greyEndtimeData)) {
      body["GreyEndtimeData"] = request.greyEndtimeData;
    }

    if (!Util.isUnset(request.greyEndtimeStr)) {
      body["GreyEndtimeStr"] = request.greyEndtimeStr;
    }

    if (!Util.isUnset(request.greyNum)) {
      body["GreyNum"] = request.greyNum;
    }

    if (!Util.isUnset(request.greyUrl)) {
      body["GreyUrl"] = request.greyUrl;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.memo)) {
      body["Memo"] = request.memo;
    }

    if (!Util.isUnset(request.modifier)) {
      body["Modifier"] = request.modifier;
    }

    if (!Util.isUnset(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!Util.isUnset(request.percent)) {
      body["Percent"] = request.percent;
    }

    if (!Util.isUnset(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.productId)) {
      body["ProductId"] = request.productId;
    }

    if (!Util.isUnset(request.productVersion)) {
      body["ProductVersion"] = request.productVersion;
    }

    if (!Util.isUnset(request.publishMode)) {
      body["PublishMode"] = request.publishMode;
    }

    if (!Util.isUnset(request.publishType)) {
      body["PublishType"] = request.publishType;
    }

    if (!Util.isUnset(request.releaseVersion)) {
      body["ReleaseVersion"] = request.releaseVersion;
    }

    if (!Util.isUnset(request.resIds)) {
      body["ResIds"] = request.resIds;
    }

    if (!Util.isUnset(request.serialVersionUID)) {
      body["SerialVersionUID"] = request.serialVersionUID;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.syncMode)) {
      body["SyncMode"] = request.syncMode;
    }

    if (!Util.isUnset(request.syncResult)) {
      body["SyncResult"] = request.syncResult;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.taskStatus)) {
      body["TaskStatus"] = request.taskStatus;
    }

    if (!Util.isUnset(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.taskVersion)) {
      body["TaskVersion"] = request.taskVersion;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.upgradeNoticeNum)) {
      body["UpgradeNoticeNum"] = request.upgradeNoticeNum;
    }

    if (!Util.isUnset(request.upgradeProgress)) {
      body["UpgradeProgress"] = request.upgradeProgress;
    }

    if (!Util.isUnset(request.whitelistIds)) {
      body["WhitelistIds"] = request.whitelistIds;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcubeNebulaTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcubeNebulaTaskResponse>(await this.callApi(params, req, runtime), new CreateMcubeNebulaTaskResponse({}));
  }

  async createMcubeNebulaTask(request: CreateMcubeNebulaTaskRequest): Promise<CreateMcubeNebulaTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeNebulaTaskWithOptions(request, runtime);
  }

  async createMcubeUpgradePackageWithOptions(request: CreateMcubeUpgradePackageRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeUpgradePackageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.appstoreUrl)) {
      body["AppstoreUrl"] = request.appstoreUrl;
    }

    if (!Util.isUnset(request.bundleId)) {
      body["BundleId"] = request.bundleId;
    }

    if (!Util.isUnset(request.customDomainName)) {
      body["CustomDomainName"] = request.customDomainName;
    }

    if (!Util.isUnset(request.desc)) {
      body["Desc"] = request.desc;
    }

    if (!Util.isUnset(request.downloadUrl)) {
      body["DownloadUrl"] = request.downloadUrl;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.iconFileUrl)) {
      body["IconFileUrl"] = request.iconFileUrl;
    }

    if (!Util.isUnset(request.installAmount)) {
      body["InstallAmount"] = request.installAmount;
    }

    if (!Util.isUnset(request.iosSymbolfileUrl)) {
      body["IosSymbolfileUrl"] = request.iosSymbolfileUrl;
    }

    if (!Util.isUnset(request.isEnterprise)) {
      body["IsEnterprise"] = request.isEnterprise;
    }

    if (!Util.isUnset(request.needCheck)) {
      body["NeedCheck"] = request.needCheck;
    }

    if (!Util.isUnset(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!Util.isUnset(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.validDays)) {
      body["ValidDays"] = request.validDays;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcubeUpgradePackage",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcubeUpgradePackageResponse>(await this.callApi(params, req, runtime), new CreateMcubeUpgradePackageResponse({}));
  }

  async createMcubeUpgradePackage(request: CreateMcubeUpgradePackageRequest): Promise<CreateMcubeUpgradePackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeUpgradePackageWithOptions(request, runtime);
  }

  async createMcubeUpgradeTaskWithOptions(request: CreateMcubeUpgradeTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeUpgradeTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.greyConfigInfo)) {
      body["GreyConfigInfo"] = request.greyConfigInfo;
    }

    if (!Util.isUnset(request.greyEndtimeData)) {
      body["GreyEndtimeData"] = request.greyEndtimeData;
    }

    if (!Util.isUnset(request.greyNum)) {
      body["GreyNum"] = request.greyNum;
    }

    if (!Util.isUnset(request.historyForce)) {
      body["HistoryForce"] = request.historyForce;
    }

    if (!Util.isUnset(request.memo)) {
      body["Memo"] = request.memo;
    }

    if (!Util.isUnset(request.packageInfoId)) {
      body["PackageInfoId"] = request.packageInfoId;
    }

    if (!Util.isUnset(request.publishMode)) {
      body["PublishMode"] = request.publishMode;
    }

    if (!Util.isUnset(request.publishType)) {
      body["PublishType"] = request.publishType;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.upgradeContent)) {
      body["UpgradeContent"] = request.upgradeContent;
    }

    if (!Util.isUnset(request.upgradeType)) {
      body["UpgradeType"] = request.upgradeType;
    }

    if (!Util.isUnset(request.whitelistIds)) {
      body["WhitelistIds"] = request.whitelistIds;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcubeUpgradeTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcubeUpgradeTaskResponse>(await this.callApi(params, req, runtime), new CreateMcubeUpgradeTaskResponse({}));
  }

  async createMcubeUpgradeTask(request: CreateMcubeUpgradeTaskRequest): Promise<CreateMcubeUpgradeTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeUpgradeTaskWithOptions(request, runtime);
  }

  async createMcubeVhostWithOptions(request: CreateMcubeVhostRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeVhostResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.vhost)) {
      body["Vhost"] = request.vhost;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcubeVhost",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcubeVhostResponse>(await this.callApi(params, req, runtime), new CreateMcubeVhostResponse({}));
  }

  async createMcubeVhost(request: CreateMcubeVhostRequest): Promise<CreateMcubeVhostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeVhostWithOptions(request, runtime);
  }

  async createMcubeWhitelistWithOptions(request: CreateMcubeWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeWhitelistResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.whiteListName)) {
      body["WhiteListName"] = request.whiteListName;
    }

    if (!Util.isUnset(request.whitelistType)) {
      body["WhitelistType"] = request.whitelistType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcubeWhitelist",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcubeWhitelistResponse>(await this.callApi(params, req, runtime), new CreateMcubeWhitelistResponse({}));
  }

  async createMcubeWhitelist(request: CreateMcubeWhitelistRequest): Promise<CreateMcubeWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeWhitelistWithOptions(request, runtime);
  }

  async createMcubeWhitelistForIdeWithOptions(request: CreateMcubeWhitelistForIdeRequest, runtime: $Util.RuntimeOptions): Promise<CreateMcubeWhitelistForIdeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.whitelistValue)) {
      body["WhitelistValue"] = request.whitelistValue;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMcubeWhitelistForIde",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMcubeWhitelistForIdeResponse>(await this.callApi(params, req, runtime), new CreateMcubeWhitelistForIdeResponse({}));
  }

  async createMcubeWhitelistForIde(request: CreateMcubeWhitelistForIdeRequest): Promise<CreateMcubeWhitelistForIdeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMcubeWhitelistForIdeWithOptions(request, runtime);
  }

  async createMdsMiniprogramTaskWithOptions(request: CreateMdsMiniprogramTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateMdsMiniprogramTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.greyConfigInfo)) {
      body["GreyConfigInfo"] = request.greyConfigInfo;
    }

    if (!Util.isUnset(request.greyEndtimeData)) {
      body["GreyEndtimeData"] = request.greyEndtimeData;
    }

    if (!Util.isUnset(request.greyNum)) {
      body["GreyNum"] = request.greyNum;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.memo)) {
      body["Memo"] = request.memo;
    }

    if (!Util.isUnset(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!Util.isUnset(request.publishMode)) {
      body["PublishMode"] = request.publishMode;
    }

    if (!Util.isUnset(request.publishType)) {
      body["PublishType"] = request.publishType;
    }

    if (!Util.isUnset(request.syncMode)) {
      body["SyncMode"] = request.syncMode;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.whitelistIds)) {
      body["WhitelistIds"] = request.whitelistIds;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMdsMiniprogramTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMdsMiniprogramTaskResponse>(await this.callApi(params, req, runtime), new CreateMdsMiniprogramTaskResponse({}));
  }

  async createMdsMiniprogramTask(request: CreateMdsMiniprogramTaskRequest): Promise<CreateMdsMiniprogramTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMdsMiniprogramTaskWithOptions(request, runtime);
  }

  async createMsaEnhanceWithOptions(request: CreateMsaEnhanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateMsaEnhanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMsaEnhanceCreateJsonStr)) {
      body["MpaasMappcenterMsaEnhanceCreateJsonStr"] = request.mpaasMappcenterMsaEnhanceCreateJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateMsaEnhance",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMsaEnhanceResponse>(await this.callApi(params, req, runtime), new CreateMsaEnhanceResponse({}));
  }

  async createMsaEnhance(request: CreateMsaEnhanceRequest): Promise<CreateMsaEnhanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMsaEnhanceWithOptions(request, runtime);
  }

  async createOpenGlobalDataWithOptions(request: CreateOpenGlobalDataRequest, runtime: $Util.RuntimeOptions): Promise<CreateOpenGlobalDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appMaxVersion)) {
      body["AppMaxVersion"] = request.appMaxVersion;
    }

    if (!Util.isUnset(request.appMinVersion)) {
      body["AppMinVersion"] = request.appMinVersion;
    }

    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.extAttrStr)) {
      body["ExtAttrStr"] = request.extAttrStr;
    }

    if (!Util.isUnset(request.maxUid)) {
      body["MaxUid"] = request.maxUid;
    }

    if (!Util.isUnset(request.minUid)) {
      body["MinUid"] = request.minUid;
    }

    if (!Util.isUnset(request.osType)) {
      body["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!Util.isUnset(request.thirdMsgId)) {
      body["ThirdMsgId"] = request.thirdMsgId;
    }

    if (!Util.isUnset(request.uids)) {
      body["Uids"] = request.uids;
    }

    if (!Util.isUnset(request.validTimeEnd)) {
      body["ValidTimeEnd"] = request.validTimeEnd;
    }

    if (!Util.isUnset(request.validTimeStart)) {
      body["ValidTimeStart"] = request.validTimeStart;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOpenGlobalData",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOpenGlobalDataResponse>(await this.callApi(params, req, runtime), new CreateOpenGlobalDataResponse({}));
  }

  async createOpenGlobalData(request: CreateOpenGlobalDataRequest): Promise<CreateOpenGlobalDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOpenGlobalDataWithOptions(request, runtime);
  }

  async createOpenSingleDataWithOptions(request: CreateOpenSingleDataRequest, runtime: $Util.RuntimeOptions): Promise<CreateOpenSingleDataResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appMaxVersion)) {
      body["AppMaxVersion"] = request.appMaxVersion;
    }

    if (!Util.isUnset(request.appMinVersion)) {
      body["AppMinVersion"] = request.appMinVersion;
    }

    if (!Util.isUnset(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!Util.isUnset(request.checkOnline)) {
      body["CheckOnline"] = request.checkOnline;
    }

    if (!Util.isUnset(request.extAttrStr)) {
      body["ExtAttrStr"] = request.extAttrStr;
    }

    if (!Util.isUnset(request.linkToken)) {
      body["LinkToken"] = request.linkToken;
    }

    if (!Util.isUnset(request.osType)) {
      body["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.payload)) {
      body["Payload"] = request.payload;
    }

    if (!Util.isUnset(request.thirdMsgId)) {
      body["ThirdMsgId"] = request.thirdMsgId;
    }

    if (!Util.isUnset(request.validTimeEnd)) {
      body["ValidTimeEnd"] = request.validTimeEnd;
    }

    if (!Util.isUnset(request.validTimeStart)) {
      body["ValidTimeStart"] = request.validTimeStart;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateOpenSingleData",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOpenSingleDataResponse>(await this.callApi(params, req, runtime), new CreateOpenSingleDataResponse({}));
  }

  async createOpenSingleData(request: CreateOpenSingleDataRequest): Promise<CreateOpenSingleDataResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOpenSingleDataWithOptions(request, runtime);
  }

  async deleteCubecardWhitelistContentWithOptions(request: DeleteCubecardWhitelistContentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteCubecardWhitelistContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.whitelistId)) {
      body["WhitelistId"] = request.whitelistId;
    }

    if (!Util.isUnset(request.whitelistValue)) {
      body["WhitelistValue"] = request.whitelistValue;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCubecardWhitelistContent",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteCubecardWhitelistContentResponse>(await this.callApi(params, req, runtime), new DeleteCubecardWhitelistContentResponse({}));
  }

  async deleteCubecardWhitelistContent(request: DeleteCubecardWhitelistContentRequest): Promise<DeleteCubecardWhitelistContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteCubecardWhitelistContentWithOptions(request, runtime);
  }

  async deleteMcdpAimWithOptions(request: DeleteMcdpAimRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcdpAimResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpAimDeleteJsonStr)) {
      body["MpaasMappcenterMcdpAimDeleteJsonStr"] = request.mpaasMappcenterMcdpAimDeleteJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMcdpAim",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMcdpAimResponse>(await this.callApi(params, req, runtime), new DeleteMcdpAimResponse({}));
  }

  async deleteMcdpAim(request: DeleteMcdpAimRequest): Promise<DeleteMcdpAimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcdpAimWithOptions(request, runtime);
  }

  async deleteMcdpCrowdWithOptions(request: DeleteMcdpCrowdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcdpCrowdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpCrowdDeleteJsonStr)) {
      body["MpaasMappcenterMcdpCrowdDeleteJsonStr"] = request.mpaasMappcenterMcdpCrowdDeleteJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMcdpCrowd",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMcdpCrowdResponse>(await this.callApi(params, req, runtime), new DeleteMcdpCrowdResponse({}));
  }

  async deleteMcdpCrowd(request: DeleteMcdpCrowdRequest): Promise<DeleteMcdpCrowdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcdpCrowdWithOptions(request, runtime);
  }

  async deleteMcdpEventAttributeByIdWithOptions(request: DeleteMcdpEventAttributeByIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcdpEventAttributeByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpEventAttributeDeleteJsonStr)) {
      body["MpaasMappcenterMcdpEventAttributeDeleteJsonStr"] = request.mpaasMappcenterMcdpEventAttributeDeleteJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMcdpEventAttributeById",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMcdpEventAttributeByIdResponse>(await this.callApi(params, req, runtime), new DeleteMcdpEventAttributeByIdResponse({}));
  }

  async deleteMcdpEventAttributeById(request: DeleteMcdpEventAttributeByIdRequest): Promise<DeleteMcdpEventAttributeByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcdpEventAttributeByIdWithOptions(request, runtime);
  }

  async deleteMcdpEventByIdWithOptions(request: DeleteMcdpEventByIdRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcdpEventByIdResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpEventDeleteJsonStr)) {
      body["MpaasMappcenterMcdpEventDeleteJsonStr"] = request.mpaasMappcenterMcdpEventDeleteJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMcdpEventById",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMcdpEventByIdResponse>(await this.callApi(params, req, runtime), new DeleteMcdpEventByIdResponse({}));
  }

  async deleteMcdpEventById(request: DeleteMcdpEventByIdRequest): Promise<DeleteMcdpEventByIdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcdpEventByIdWithOptions(request, runtime);
  }

  async deleteMcdpMaterialWithOptions(request: DeleteMcdpMaterialRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcdpMaterialResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpMaterialDeleteJsonStr)) {
      body["MpaasMappcenterMcdpMaterialDeleteJsonStr"] = request.mpaasMappcenterMcdpMaterialDeleteJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMcdpMaterial",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMcdpMaterialResponse>(await this.callApi(params, req, runtime), new DeleteMcdpMaterialResponse({}));
  }

  async deleteMcdpMaterial(request: DeleteMcdpMaterialRequest): Promise<DeleteMcdpMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcdpMaterialWithOptions(request, runtime);
  }

  async deleteMcdpZoneWithOptions(request: DeleteMcdpZoneRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcdpZoneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMcdpZoneDeleteJsonStr)) {
      body["MpaasMappcenterMcdpZoneDeleteJsonStr"] = request.mpaasMappcenterMcdpZoneDeleteJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMcdpZone",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMcdpZoneResponse>(await this.callApi(params, req, runtime), new DeleteMcdpZoneResponse({}));
  }

  async deleteMcdpZone(request: DeleteMcdpZoneRequest): Promise<DeleteMcdpZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcdpZoneWithOptions(request, runtime);
  }

  async deleteMcubeMiniAppWithOptions(request: DeleteMcubeMiniAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcubeMiniAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMcubeMiniApp",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMcubeMiniAppResponse>(await this.callApi(params, req, runtime), new DeleteMcubeMiniAppResponse({}));
  }

  async deleteMcubeMiniApp(request: DeleteMcubeMiniAppRequest): Promise<DeleteMcubeMiniAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcubeMiniAppWithOptions(request, runtime);
  }

  async deleteMcubeNebulaAppWithOptions(request: DeleteMcubeNebulaAppRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcubeNebulaAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMcubeNebulaApp",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMcubeNebulaAppResponse>(await this.callApi(params, req, runtime), new DeleteMcubeNebulaAppResponse({}));
  }

  async deleteMcubeNebulaApp(request: DeleteMcubeNebulaAppRequest): Promise<DeleteMcubeNebulaAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcubeNebulaAppWithOptions(request, runtime);
  }

  async deleteMcubeUpgradeResourceWithOptions(request: DeleteMcubeUpgradeResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcubeUpgradeResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMcubeUpgradeResource",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMcubeUpgradeResourceResponse>(await this.callApi(params, req, runtime), new DeleteMcubeUpgradeResourceResponse({}));
  }

  async deleteMcubeUpgradeResource(request: DeleteMcubeUpgradeResourceRequest): Promise<DeleteMcubeUpgradeResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcubeUpgradeResourceWithOptions(request, runtime);
  }

  async deleteMcubeWhitelistWithOptions(request: DeleteMcubeWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMcubeWhitelistResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMcubeWhitelist",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMcubeWhitelistResponse>(await this.callApi(params, req, runtime), new DeleteMcubeWhitelistResponse({}));
  }

  async deleteMcubeWhitelist(request: DeleteMcubeWhitelistRequest): Promise<DeleteMcubeWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMcubeWhitelistWithOptions(request, runtime);
  }

  async deleteMdsWhitelistContentWithOptions(request: DeleteMdsWhitelistContentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteMdsWhitelistContentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.whitelistId)) {
      body["WhitelistId"] = request.whitelistId;
    }

    if (!Util.isUnset(request.whitelistValue)) {
      body["WhitelistValue"] = request.whitelistValue;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteMdsWhitelistContent",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteMdsWhitelistContentResponse>(await this.callApi(params, req, runtime), new DeleteMdsWhitelistContentResponse({}));
  }

  async deleteMdsWhitelistContent(request: DeleteMdsWhitelistContentRequest): Promise<DeleteMdsWhitelistContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteMdsWhitelistContentWithOptions(request, runtime);
  }

  async existMcubeRsaKeyWithOptions(request: ExistMcubeRsaKeyRequest, runtime: $Util.RuntimeOptions): Promise<ExistMcubeRsaKeyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExistMcubeRsaKey",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExistMcubeRsaKeyResponse>(await this.callApi(params, req, runtime), new ExistMcubeRsaKeyResponse({}));
  }

  async existMcubeRsaKey(request: ExistMcubeRsaKeyRequest): Promise<ExistMcubeRsaKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.existMcubeRsaKeyWithOptions(request, runtime);
  }

  async exportMappCenterAppConfigWithOptions(request: ExportMappCenterAppConfigRequest, runtime: $Util.RuntimeOptions): Promise<ExportMappCenterAppConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apkFileUrl)) {
      body["ApkFileUrl"] = request.apkFileUrl;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.certRsaBase64)) {
      body["CertRsaBase64"] = request.certRsaBase64;
    }

    if (!Util.isUnset(request.identifier)) {
      body["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!Util.isUnset(request.systemType)) {
      body["SystemType"] = request.systemType;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExportMappCenterAppConfig",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportMappCenterAppConfigResponse>(await this.callApi(params, req, runtime), new ExportMappCenterAppConfigResponse({}));
  }

  async exportMappCenterAppConfig(request: ExportMappCenterAppConfigRequest): Promise<ExportMappCenterAppConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportMappCenterAppConfigWithOptions(request, runtime);
  }

  async getFileTokenForUploadToMsaWithOptions(request: GetFileTokenForUploadToMsaRequest, runtime: $Util.RuntimeOptions): Promise<GetFileTokenForUploadToMsaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetFileTokenForUploadToMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFileTokenForUploadToMsaResponse>(await this.callApi(params, req, runtime), new GetFileTokenForUploadToMsaResponse({}));
  }

  async getFileTokenForUploadToMsa(request: GetFileTokenForUploadToMsaRequest): Promise<GetFileTokenForUploadToMsaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileTokenForUploadToMsaWithOptions(request, runtime);
  }

  async getLogUrlInMsaWithOptions(request: GetLogUrlInMsaRequest, runtime: $Util.RuntimeOptions): Promise<GetLogUrlInMsaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetLogUrlInMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLogUrlInMsaResponse>(await this.callApi(params, req, runtime), new GetLogUrlInMsaResponse({}));
  }

  async getLogUrlInMsa(request: GetLogUrlInMsaRequest): Promise<GetLogUrlInMsaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLogUrlInMsaWithOptions(request, runtime);
  }

  async getMcubeFileTokenWithOptions(request: GetMcubeFileTokenRequest, runtime: $Util.RuntimeOptions): Promise<GetMcubeFileTokenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMcubeFileToken",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMcubeFileTokenResponse>(await this.callApi(params, req, runtime), new GetMcubeFileTokenResponse({}));
  }

  async getMcubeFileToken(request: GetMcubeFileTokenRequest): Promise<GetMcubeFileTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMcubeFileTokenWithOptions(request, runtime);
  }

  async getMcubeNebulaResourceWithOptions(request: GetMcubeNebulaResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetMcubeNebulaResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMcubeNebulaResource",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMcubeNebulaResourceResponse>(await this.callApi(params, req, runtime), new GetMcubeNebulaResourceResponse({}));
  }

  async getMcubeNebulaResource(request: GetMcubeNebulaResourceRequest): Promise<GetMcubeNebulaResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMcubeNebulaResourceWithOptions(request, runtime);
  }

  async getMcubeNebulaTaskDetailWithOptions(request: GetMcubeNebulaTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetMcubeNebulaTaskDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMcubeNebulaTaskDetail",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMcubeNebulaTaskDetailResponse>(await this.callApi(params, req, runtime), new GetMcubeNebulaTaskDetailResponse({}));
  }

  async getMcubeNebulaTaskDetail(request: GetMcubeNebulaTaskDetailRequest): Promise<GetMcubeNebulaTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMcubeNebulaTaskDetailWithOptions(request, runtime);
  }

  async getMcubeUpgradePackageInfoWithOptions(request: GetMcubeUpgradePackageInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMcubeUpgradePackageInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMcubeUpgradePackageInfo",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMcubeUpgradePackageInfoResponse>(await this.callApi(params, req, runtime), new GetMcubeUpgradePackageInfoResponse({}));
  }

  async getMcubeUpgradePackageInfo(request: GetMcubeUpgradePackageInfoRequest): Promise<GetMcubeUpgradePackageInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMcubeUpgradePackageInfoWithOptions(request, runtime);
  }

  async getMcubeUpgradeTaskInfoWithOptions(request: GetMcubeUpgradeTaskInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetMcubeUpgradeTaskInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMcubeUpgradeTaskInfo",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMcubeUpgradeTaskInfoResponse>(await this.callApi(params, req, runtime), new GetMcubeUpgradeTaskInfoResponse({}));
  }

  async getMcubeUpgradeTaskInfo(request: GetMcubeUpgradeTaskInfoRequest): Promise<GetMcubeUpgradeTaskInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMcubeUpgradeTaskInfoWithOptions(request, runtime);
  }

  async getMdsMiniConfigWithOptions(request: GetMdsMiniConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetMdsMiniConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetMdsMiniConfig",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMdsMiniConfigResponse>(await this.callApi(params, req, runtime), new GetMdsMiniConfigResponse({}));
  }

  async getMdsMiniConfig(request: GetMdsMiniConfigRequest): Promise<GetMdsMiniConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMdsMiniConfigWithOptions(request, runtime);
  }

  async getUserAppDonwloadUrlInMsaWithOptions(request: GetUserAppDonwloadUrlInMsaRequest, runtime: $Util.RuntimeOptions): Promise<GetUserAppDonwloadUrlInMsaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserAppDonwloadUrlInMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserAppDonwloadUrlInMsaResponse>(await this.callApi(params, req, runtime), new GetUserAppDonwloadUrlInMsaResponse({}));
  }

  async getUserAppDonwloadUrlInMsa(request: GetUserAppDonwloadUrlInMsaRequest): Promise<GetUserAppDonwloadUrlInMsaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserAppDonwloadUrlInMsaWithOptions(request, runtime);
  }

  async getUserAppEnhanceProcessInMsaWithOptions(request: GetUserAppEnhanceProcessInMsaRequest, runtime: $Util.RuntimeOptions): Promise<GetUserAppEnhanceProcessInMsaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserAppEnhanceProcessInMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserAppEnhanceProcessInMsaResponse>(await this.callApi(params, req, runtime), new GetUserAppEnhanceProcessInMsaResponse({}));
  }

  async getUserAppEnhanceProcessInMsa(request: GetUserAppEnhanceProcessInMsaRequest): Promise<GetUserAppEnhanceProcessInMsaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserAppEnhanceProcessInMsaWithOptions(request, runtime);
  }

  async getUserAppUploadProcessInMsaWithOptions(request: GetUserAppUploadProcessInMsaRequest, runtime: $Util.RuntimeOptions): Promise<GetUserAppUploadProcessInMsaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GetUserAppUploadProcessInMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserAppUploadProcessInMsaResponse>(await this.callApi(params, req, runtime), new GetUserAppUploadProcessInMsaResponse({}));
  }

  async getUserAppUploadProcessInMsa(request: GetUserAppUploadProcessInMsaRequest): Promise<GetUserAppUploadProcessInMsaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserAppUploadProcessInMsaWithOptions(request, runtime);
  }

  async listMappCenterAppsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListMappCenterAppsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListMappCenterApps",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMappCenterAppsResponse>(await this.callApi(params, req, runtime), new ListMappCenterAppsResponse({}));
  }

  async listMappCenterApps(): Promise<ListMappCenterAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMappCenterAppsWithOptions(runtime);
  }

  async listMappCenterWorkspacesWithOptions(runtime: $Util.RuntimeOptions): Promise<ListMappCenterWorkspacesResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListMappCenterWorkspaces",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMappCenterWorkspacesResponse>(await this.callApi(params, req, runtime), new ListMappCenterWorkspacesResponse({}));
  }

  async listMappCenterWorkspaces(): Promise<ListMappCenterWorkspacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMappCenterWorkspacesWithOptions(runtime);
  }

  async listMcdpAimWithOptions(request: ListMcdpAimRequest, runtime: $Util.RuntimeOptions): Promise<ListMcdpAimResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.emptyTag)) {
      body["EmptyTag"] = request.emptyTag;
    }

    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNo)) {
      body["PageNo"] = request.pageNo;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sort)) {
      body["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.sortField)) {
      body["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMcdpAim",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMcdpAimResponse>(await this.callApi(params, req, runtime), new ListMcdpAimResponse({}));
  }

  async listMcdpAim(request: ListMcdpAimRequest): Promise<ListMcdpAimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcdpAimWithOptions(request, runtime);
  }

  async listMcubeMiniAppsWithOptions(request: ListMcubeMiniAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeMiniAppsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMcubeMiniApps",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMcubeMiniAppsResponse>(await this.callApi(params, req, runtime), new ListMcubeMiniAppsResponse({}));
  }

  async listMcubeMiniApps(request: ListMcubeMiniAppsRequest): Promise<ListMcubeMiniAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeMiniAppsWithOptions(request, runtime);
  }

  async listMcubeMiniPackagesWithOptions(request: ListMcubeMiniPackagesRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeMiniPackagesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!Util.isUnset(request.packageTypes)) {
      body["PackageTypes"] = request.packageTypes;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMcubeMiniPackages",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMcubeMiniPackagesResponse>(await this.callApi(params, req, runtime), new ListMcubeMiniPackagesResponse({}));
  }

  async listMcubeMiniPackages(request: ListMcubeMiniPackagesRequest): Promise<ListMcubeMiniPackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeMiniPackagesWithOptions(request, runtime);
  }

  async listMcubeMiniTasksWithOptions(request: ListMcubeMiniTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeMiniTasksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMcubeMiniTasks",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMcubeMiniTasksResponse>(await this.callApi(params, req, runtime), new ListMcubeMiniTasksResponse({}));
  }

  async listMcubeMiniTasks(request: ListMcubeMiniTasksRequest): Promise<ListMcubeMiniTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeMiniTasksWithOptions(request, runtime);
  }

  async listMcubeNebulaAppsWithOptions(request: ListMcubeNebulaAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeNebulaAppsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.keyword)) {
      body["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMcubeNebulaApps",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMcubeNebulaAppsResponse>(await this.callApi(params, req, runtime), new ListMcubeNebulaAppsResponse({}));
  }

  async listMcubeNebulaApps(request: ListMcubeNebulaAppsRequest): Promise<ListMcubeNebulaAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeNebulaAppsWithOptions(request, runtime);
  }

  async listMcubeNebulaResourcesWithOptions(request: ListMcubeNebulaResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeNebulaResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMcubeNebulaResources",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMcubeNebulaResourcesResponse>(await this.callApi(params, req, runtime), new ListMcubeNebulaResourcesResponse({}));
  }

  async listMcubeNebulaResources(request: ListMcubeNebulaResourcesRequest): Promise<ListMcubeNebulaResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeNebulaResourcesWithOptions(request, runtime);
  }

  async listMcubeNebulaTasksWithOptions(request: ListMcubeNebulaTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeNebulaTasksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMcubeNebulaTasks",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMcubeNebulaTasksResponse>(await this.callApi(params, req, runtime), new ListMcubeNebulaTasksResponse({}));
  }

  async listMcubeNebulaTasks(request: ListMcubeNebulaTasksRequest): Promise<ListMcubeNebulaTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeNebulaTasksWithOptions(request, runtime);
  }

  async listMcubeUpgradePackagesWithOptions(request: ListMcubeUpgradePackagesRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeUpgradePackagesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMcubeUpgradePackages",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMcubeUpgradePackagesResponse>(await this.callApi(params, req, runtime), new ListMcubeUpgradePackagesResponse({}));
  }

  async listMcubeUpgradePackages(request: ListMcubeUpgradePackagesRequest): Promise<ListMcubeUpgradePackagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeUpgradePackagesWithOptions(request, runtime);
  }

  async listMcubeUpgradeTasksWithOptions(request: ListMcubeUpgradeTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeUpgradeTasksResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.packageId)) {
      body["PackageId"] = request.packageId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMcubeUpgradeTasks",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMcubeUpgradeTasksResponse>(await this.callApi(params, req, runtime), new ListMcubeUpgradeTasksResponse({}));
  }

  async listMcubeUpgradeTasks(request: ListMcubeUpgradeTasksRequest): Promise<ListMcubeUpgradeTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeUpgradeTasksWithOptions(request, runtime);
  }

  async listMcubeWhitelistsWithOptions(request: ListMcubeWhitelistsRequest, runtime: $Util.RuntimeOptions): Promise<ListMcubeWhitelistsResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNum)) {
      body["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.whitelistName)) {
      body["WhitelistName"] = request.whitelistName;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMcubeWhitelists",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMcubeWhitelistsResponse>(await this.callApi(params, req, runtime), new ListMcubeWhitelistsResponse({}));
  }

  async listMcubeWhitelists(request: ListMcubeWhitelistsRequest): Promise<ListMcubeWhitelistsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMcubeWhitelistsWithOptions(request, runtime);
  }

  async listMgsApiWithOptions(request: ListMgsApiRequest, runtime: $Util.RuntimeOptions): Promise<ListMgsApiResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiStatus)) {
      body["ApiStatus"] = request.apiStatus;
    }

    if (!Util.isUnset(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.format)) {
      body["Format"] = request.format;
    }

    if (!Util.isUnset(request.host)) {
      body["Host"] = request.host;
    }

    if (!Util.isUnset(request.needEncrypt)) {
      body["NeedEncrypt"] = request.needEncrypt;
    }

    if (!Util.isUnset(request.needEtag)) {
      body["NeedEtag"] = request.needEtag;
    }

    if (!Util.isUnset(request.needSign)) {
      body["NeedSign"] = request.needSign;
    }

    if (!Util.isUnset(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.optFuzzy)) {
      body["OptFuzzy"] = request.optFuzzy;
    }

    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sysId)) {
      body["SysId"] = request.sysId;
    }

    if (!Util.isUnset(request.sysName)) {
      body["SysName"] = request.sysName;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListMgsApi",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListMgsApiResponse>(await this.callApi(params, req, runtime), new ListMgsApiResponse({}));
  }

  async listMgsApi(request: ListMgsApiRequest): Promise<ListMgsApiResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listMgsApiWithOptions(request, runtime);
  }

  async logMsaQueryWithOptions(request: LogMsaQueryRequest, runtime: $Util.RuntimeOptions): Promise<LogMsaQueryResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LogMsaQuery",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LogMsaQueryResponse>(await this.callApi(params, req, runtime), new LogMsaQueryResponse({}));
  }

  async logMsaQuery(request: LogMsaQueryRequest): Promise<LogMsaQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.logMsaQueryWithOptions(request, runtime);
  }

  async mTRSOCRServiceWithOptions(request: MTRSOCRServiceRequest, runtime: $Util.RuntimeOptions): Promise<MTRSOCRServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.imageRaw)) {
      body["ImageRaw"] = request.imageRaw;
    }

    if (!Util.isUnset(request.mask)) {
      body["Mask"] = request.mask;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MTRSOCRService",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MTRSOCRServiceResponse>(await this.callApi(params, req, runtime), new MTRSOCRServiceResponse({}));
  }

  async mTRSOCRService(request: MTRSOCRServiceRequest): Promise<MTRSOCRServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mTRSOCRServiceWithOptions(request, runtime);
  }

  async openApiAddActiveCodeWithOptions(request: OpenApiAddActiveCodeRequest, runtime: $Util.RuntimeOptions): Promise<OpenApiAddActiveCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMqcpOpenApiAddActiveCodeReqJsonStr)) {
      body["MpaasMqcpOpenApiAddActiveCodeReqJsonStr"] = request.mpaasMqcpOpenApiAddActiveCodeReqJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenApiAddActiveCode",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiAddActiveCodeResponse>(await this.callApi(params, req, runtime), new OpenApiAddActiveCodeResponse({}));
  }

  async openApiAddActiveCode(request: OpenApiAddActiveCodeRequest): Promise<OpenApiAddActiveCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiAddActiveCodeWithOptions(request, runtime);
  }

  async openApiAddActiveSceneWithOptions(request: OpenApiAddActiveSceneRequest, runtime: $Util.RuntimeOptions): Promise<OpenApiAddActiveSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMqcpOpenApiAddActiveSceneReqJsonStr)) {
      body["MpaasMqcpOpenApiAddActiveSceneReqJsonStr"] = request.mpaasMqcpOpenApiAddActiveSceneReqJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenApiAddActiveScene",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiAddActiveSceneResponse>(await this.callApi(params, req, runtime), new OpenApiAddActiveSceneResponse({}));
  }

  async openApiAddActiveScene(request: OpenApiAddActiveSceneRequest): Promise<OpenApiAddActiveSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiAddActiveSceneWithOptions(request, runtime);
  }

  async openApiCallbackWithOptions(request: OpenApiCallbackRequest, runtime: $Util.RuntimeOptions): Promise<OpenApiCallbackResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMqcpOpenApiCallbackRequestJsonStr)) {
      body["MpaasMqcpOpenApiCallbackRequestJsonStr"] = request.mpaasMqcpOpenApiCallbackRequestJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenApiCallback",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiCallbackResponse>(await this.callApi(params, req, runtime), new OpenApiCallbackResponse({}));
  }

  async openApiCallback(request: OpenApiCallbackRequest): Promise<OpenApiCallbackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiCallbackWithOptions(request, runtime);
  }

  async openApiDecodeWithOptions(request: OpenApiDecodeRequest, runtime: $Util.RuntimeOptions): Promise<OpenApiDecodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMqcpOpenApiDecodeRequestJsonStr)) {
      body["MpaasMqcpOpenApiDecodeRequestJsonStr"] = request.mpaasMqcpOpenApiDecodeRequestJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenApiDecode",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiDecodeResponse>(await this.callApi(params, req, runtime), new OpenApiDecodeResponse({}));
  }

  async openApiDecode(request: OpenApiDecodeRequest): Promise<OpenApiDecodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiDecodeWithOptions(request, runtime);
  }

  async openApiDeleteActiveCodeWithOptions(request: OpenApiDeleteActiveCodeRequest, runtime: $Util.RuntimeOptions): Promise<OpenApiDeleteActiveCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMqcpOpenApiDeleteActiveCodeReqJsonStr)) {
      body["MpaasMqcpOpenApiDeleteActiveCodeReqJsonStr"] = request.mpaasMqcpOpenApiDeleteActiveCodeReqJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenApiDeleteActiveCode",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiDeleteActiveCodeResponse>(await this.callApi(params, req, runtime), new OpenApiDeleteActiveCodeResponse({}));
  }

  async openApiDeleteActiveCode(request: OpenApiDeleteActiveCodeRequest): Promise<OpenApiDeleteActiveCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiDeleteActiveCodeWithOptions(request, runtime);
  }

  async openApiEncodeWithOptions(request: OpenApiEncodeRequest, runtime: $Util.RuntimeOptions): Promise<OpenApiEncodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMqcpOpenApiEncodeRequestJsonStr)) {
      body["MpaasMqcpOpenApiEncodeRequestJsonStr"] = request.mpaasMqcpOpenApiEncodeRequestJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenApiEncode",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiEncodeResponse>(await this.callApi(params, req, runtime), new OpenApiEncodeResponse({}));
  }

  async openApiEncode(request: OpenApiEncodeRequest): Promise<OpenApiEncodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiEncodeWithOptions(request, runtime);
  }

  async openApiQueryActiveCodeWithOptions(request: OpenApiQueryActiveCodeRequest, runtime: $Util.RuntimeOptions): Promise<OpenApiQueryActiveCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMqcpOpenApiQueryActiveCodeReqJsonStr)) {
      body["MpaasMqcpOpenApiQueryActiveCodeReqJsonStr"] = request.mpaasMqcpOpenApiQueryActiveCodeReqJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenApiQueryActiveCode",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiQueryActiveCodeResponse>(await this.callApi(params, req, runtime), new OpenApiQueryActiveCodeResponse({}));
  }

  async openApiQueryActiveCode(request: OpenApiQueryActiveCodeRequest): Promise<OpenApiQueryActiveCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiQueryActiveCodeWithOptions(request, runtime);
  }

  async openApiQueryActiveSceneWithOptions(request: OpenApiQueryActiveSceneRequest, runtime: $Util.RuntimeOptions): Promise<OpenApiQueryActiveSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMqcpOpenApiQueryActiveSceneReqJsonStr)) {
      body["MpaasMqcpOpenApiQueryActiveSceneReqJsonStr"] = request.mpaasMqcpOpenApiQueryActiveSceneReqJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenApiQueryActiveScene",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiQueryActiveSceneResponse>(await this.callApi(params, req, runtime), new OpenApiQueryActiveSceneResponse({}));
  }

  async openApiQueryActiveScene(request: OpenApiQueryActiveSceneRequest): Promise<OpenApiQueryActiveSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiQueryActiveSceneWithOptions(request, runtime);
  }

  async openApiUniqueEncodeWithOptions(request: OpenApiUniqueEncodeRequest, runtime: $Util.RuntimeOptions): Promise<OpenApiUniqueEncodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMqcpOpenApiUniqueEncodeRequestJsonStr)) {
      body["MpaasMqcpOpenApiUniqueEncodeRequestJsonStr"] = request.mpaasMqcpOpenApiUniqueEncodeRequestJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenApiUniqueEncode",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiUniqueEncodeResponse>(await this.callApi(params, req, runtime), new OpenApiUniqueEncodeResponse({}));
  }

  async openApiUniqueEncode(request: OpenApiUniqueEncodeRequest): Promise<OpenApiUniqueEncodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiUniqueEncodeWithOptions(request, runtime);
  }

  async openApiUpdateActiveCodeWithOptions(request: OpenApiUpdateActiveCodeRequest, runtime: $Util.RuntimeOptions): Promise<OpenApiUpdateActiveCodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMqcpOpenApiUpdateActiveCodeReqJsonStr)) {
      body["MpaasMqcpOpenApiUpdateActiveCodeReqJsonStr"] = request.mpaasMqcpOpenApiUpdateActiveCodeReqJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenApiUpdateActiveCode",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiUpdateActiveCodeResponse>(await this.callApi(params, req, runtime), new OpenApiUpdateActiveCodeResponse({}));
  }

  async openApiUpdateActiveCode(request: OpenApiUpdateActiveCodeRequest): Promise<OpenApiUpdateActiveCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiUpdateActiveCodeWithOptions(request, runtime);
  }

  async openApiUpdateActiveSceneWithOptions(request: OpenApiUpdateActiveSceneRequest, runtime: $Util.RuntimeOptions): Promise<OpenApiUpdateActiveSceneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMqcpOpenApiUpdateActiveSceneReqJsonStr)) {
      body["MpaasMqcpOpenApiUpdateActiveSceneReqJsonStr"] = request.mpaasMqcpOpenApiUpdateActiveSceneReqJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "OpenApiUpdateActiveScene",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<OpenApiUpdateActiveSceneResponse>(await this.callApi(params, req, runtime), new OpenApiUpdateActiveSceneResponse({}));
  }

  async openApiUpdateActiveScene(request: OpenApiUpdateActiveSceneRequest): Promise<OpenApiUpdateActiveSceneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.openApiUpdateActiveSceneWithOptions(request, runtime);
  }

  async pushBindWithOptions(request: PushBindRequest, runtime: $Util.RuntimeOptions): Promise<PushBindResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.deliveryToken)) {
      body["DeliveryToken"] = request.deliveryToken;
    }

    if (!Util.isUnset(request.osType)) {
      body["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushBind",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushBindResponse>(await this.callApi(params, req, runtime), new PushBindResponse({}));
  }

  async pushBind(request: PushBindRequest): Promise<PushBindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushBindWithOptions(request, runtime);
  }

  async pushBroadcastWithOptions(tmpReq: PushBroadcastRequest, runtime: $Util.RuntimeOptions): Promise<PushBroadcastResponse> {
    Util.validateModel(tmpReq);
    let request = new PushBroadcastShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.thirdChannelCategory)) {
      request.thirdChannelCategoryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdChannelCategory, "ThirdChannelCategory", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.androidChannel)) {
      body["AndroidChannel"] = request.androidChannel;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bindPeriod)) {
      body["BindPeriod"] = request.bindPeriod;
    }

    if (!Util.isUnset(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.classification)) {
      body["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!Util.isUnset(request.expiredSeconds)) {
      body["ExpiredSeconds"] = request.expiredSeconds;
    }

    if (!Util.isUnset(request.extendedParams)) {
      body["ExtendedParams"] = request.extendedParams;
    }

    if (!Util.isUnset(request.miChannelId)) {
      body["MiChannelId"] = request.miChannelId;
    }

    if (!Util.isUnset(request.msgkey)) {
      body["Msgkey"] = request.msgkey;
    }

    if (!Util.isUnset(request.notifyType)) {
      body["NotifyType"] = request.notifyType;
    }

    if (!Util.isUnset(request.pushAction)) {
      body["PushAction"] = request.pushAction;
    }

    if (!Util.isUnset(request.pushStatus)) {
      body["PushStatus"] = request.pushStatus;
    }

    if (!Util.isUnset(request.silent)) {
      body["Silent"] = request.silent;
    }

    if (!Util.isUnset(request.strategyContent)) {
      body["StrategyContent"] = request.strategyContent;
    }

    if (!Util.isUnset(request.strategyType)) {
      body["StrategyType"] = request.strategyType;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.templateKeyValue)) {
      body["TemplateKeyValue"] = request.templateKeyValue;
    }

    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.thirdChannelCategoryShrink)) {
      body["ThirdChannelCategory"] = request.thirdChannelCategoryShrink;
    }

    if (!Util.isUnset(request.unBindPeriod)) {
      body["UnBindPeriod"] = request.unBindPeriod;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushBroadcast",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushBroadcastResponse>(await this.callApi(params, req, runtime), new PushBroadcastResponse({}));
  }

  async pushBroadcast(request: PushBroadcastRequest): Promise<PushBroadcastResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushBroadcastWithOptions(request, runtime);
  }

  async pushMultipleWithOptions(tmpReq: PushMultipleRequest, runtime: $Util.RuntimeOptions): Promise<PushMultipleResponse> {
    Util.validateModel(tmpReq);
    let request = new PushMultipleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.thirdChannelCategory)) {
      request.thirdChannelCategoryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdChannelCategory, "ThirdChannelCategory", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.classification)) {
      body["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!Util.isUnset(request.expiredSeconds)) {
      body["ExpiredSeconds"] = request.expiredSeconds;
    }

    if (!Util.isUnset(request.extendedParams)) {
      body["ExtendedParams"] = request.extendedParams;
    }

    if (!Util.isUnset(request.miChannelId)) {
      body["MiChannelId"] = request.miChannelId;
    }

    if (!Util.isUnset(request.notifyType)) {
      body["NotifyType"] = request.notifyType;
    }

    if (!Util.isUnset(request.pushAction)) {
      body["PushAction"] = request.pushAction;
    }

    if (!Util.isUnset(request.silent)) {
      body["Silent"] = request.silent;
    }

    if (!Util.isUnset(request.strategyContent)) {
      body["StrategyContent"] = request.strategyContent;
    }

    if (!Util.isUnset(request.strategyType)) {
      body["StrategyType"] = request.strategyType;
    }

    if (!Util.isUnset(request.targetMsg)) {
      body["TargetMsg"] = request.targetMsg;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.thirdChannelCategoryShrink)) {
      body["ThirdChannelCategory"] = request.thirdChannelCategoryShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushMultiple",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushMultipleResponse>(await this.callApi(params, req, runtime), new PushMultipleResponse({}));
  }

  async pushMultiple(request: PushMultipleRequest): Promise<PushMultipleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushMultipleWithOptions(request, runtime);
  }

  async pushReportWithOptions(request: PushReportRequest, runtime: $Util.RuntimeOptions): Promise<PushReportResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.connectType)) {
      body["ConnectType"] = request.connectType;
    }

    if (!Util.isUnset(request.deliveryToken)) {
      body["DeliveryToken"] = request.deliveryToken;
    }

    if (!Util.isUnset(request.imei)) {
      body["Imei"] = request.imei;
    }

    if (!Util.isUnset(request.imsi)) {
      body["Imsi"] = request.imsi;
    }

    if (!Util.isUnset(request.model)) {
      body["Model"] = request.model;
    }

    if (!Util.isUnset(request.osType)) {
      body["OsType"] = request.osType;
    }

    if (!Util.isUnset(request.pushVersion)) {
      body["PushVersion"] = request.pushVersion;
    }

    if (!Util.isUnset(request.thirdChannel)) {
      body["ThirdChannel"] = request.thirdChannel;
    }

    if (!Util.isUnset(request.thirdChannelDeviceToken)) {
      body["ThirdChannelDeviceToken"] = request.thirdChannelDeviceToken;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushReport",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushReportResponse>(await this.callApi(params, req, runtime), new PushReportResponse({}));
  }

  async pushReport(request: PushReportRequest): Promise<PushReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushReportWithOptions(request, runtime);
  }

  async pushSimpleWithOptions(tmpReq: PushSimpleRequest, runtime: $Util.RuntimeOptions): Promise<PushSimpleResponse> {
    Util.validateModel(tmpReq);
    let request = new PushSimpleShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.thirdChannelCategory)) {
      request.thirdChannelCategoryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdChannelCategory, "ThirdChannelCategory", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.classification)) {
      body["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!Util.isUnset(request.expiredSeconds)) {
      body["ExpiredSeconds"] = request.expiredSeconds;
    }

    if (!Util.isUnset(request.extendedParams)) {
      body["ExtendedParams"] = request.extendedParams;
    }

    if (!Util.isUnset(request.iconUrls)) {
      body["IconUrls"] = request.iconUrls;
    }

    if (!Util.isUnset(request.imageUrls)) {
      body["ImageUrls"] = request.imageUrls;
    }

    if (!Util.isUnset(request.miChannelId)) {
      body["MiChannelId"] = request.miChannelId;
    }

    if (!Util.isUnset(request.notifyType)) {
      body["NotifyType"] = request.notifyType;
    }

    if (!Util.isUnset(request.pushAction)) {
      body["PushAction"] = request.pushAction;
    }

    if (!Util.isUnset(request.pushStyle)) {
      body["PushStyle"] = request.pushStyle;
    }

    if (!Util.isUnset(request.silent)) {
      body["Silent"] = request.silent;
    }

    if (!Util.isUnset(request.smsSignName)) {
      body["SmsSignName"] = request.smsSignName;
    }

    if (!Util.isUnset(request.smsStrategy)) {
      body["SmsStrategy"] = request.smsStrategy;
    }

    if (!Util.isUnset(request.smsTemplateCode)) {
      body["SmsTemplateCode"] = request.smsTemplateCode;
    }

    if (!Util.isUnset(request.smsTemplateParam)) {
      body["SmsTemplateParam"] = request.smsTemplateParam;
    }

    if (!Util.isUnset(request.strategyContent)) {
      body["StrategyContent"] = request.strategyContent;
    }

    if (!Util.isUnset(request.strategyType)) {
      body["StrategyType"] = request.strategyType;
    }

    if (!Util.isUnset(request.targetMsgkey)) {
      body["TargetMsgkey"] = request.targetMsgkey;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.thirdChannelCategoryShrink)) {
      body["ThirdChannelCategory"] = request.thirdChannelCategoryShrink;
    }

    if (!Util.isUnset(request.title)) {
      body["Title"] = request.title;
    }

    if (!Util.isUnset(request.uri)) {
      body["Uri"] = request.uri;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushSimple",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushSimpleResponse>(await this.callApi(params, req, runtime), new PushSimpleResponse({}));
  }

  async pushSimple(request: PushSimpleRequest): Promise<PushSimpleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushSimpleWithOptions(request, runtime);
  }

  async pushTemplateWithOptions(tmpReq: PushTemplateRequest, runtime: $Util.RuntimeOptions): Promise<PushTemplateResponse> {
    Util.validateModel(tmpReq);
    let request = new PushTemplateShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.thirdChannelCategory)) {
      request.thirdChannelCategoryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.thirdChannelCategory, "ThirdChannelCategory", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channelId)) {
      body["ChannelId"] = request.channelId;
    }

    if (!Util.isUnset(request.classification)) {
      body["Classification"] = request.classification;
    }

    if (!Util.isUnset(request.deliveryType)) {
      body["DeliveryType"] = request.deliveryType;
    }

    if (!Util.isUnset(request.expiredSeconds)) {
      body["ExpiredSeconds"] = request.expiredSeconds;
    }

    if (!Util.isUnset(request.extendedParams)) {
      body["ExtendedParams"] = request.extendedParams;
    }

    if (!Util.isUnset(request.miChannelId)) {
      body["MiChannelId"] = request.miChannelId;
    }

    if (!Util.isUnset(request.notifyType)) {
      body["NotifyType"] = request.notifyType;
    }

    if (!Util.isUnset(request.pushAction)) {
      body["PushAction"] = request.pushAction;
    }

    if (!Util.isUnset(request.silent)) {
      body["Silent"] = request.silent;
    }

    if (!Util.isUnset(request.smsSignName)) {
      body["SmsSignName"] = request.smsSignName;
    }

    if (!Util.isUnset(request.smsStrategy)) {
      body["SmsStrategy"] = request.smsStrategy;
    }

    if (!Util.isUnset(request.smsTemplateCode)) {
      body["SmsTemplateCode"] = request.smsTemplateCode;
    }

    if (!Util.isUnset(request.smsTemplateParam)) {
      body["SmsTemplateParam"] = request.smsTemplateParam;
    }

    if (!Util.isUnset(request.strategyContent)) {
      body["StrategyContent"] = request.strategyContent;
    }

    if (!Util.isUnset(request.strategyType)) {
      body["StrategyType"] = request.strategyType;
    }

    if (!Util.isUnset(request.targetMsgkey)) {
      body["TargetMsgkey"] = request.targetMsgkey;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.templateKeyValue)) {
      body["TemplateKeyValue"] = request.templateKeyValue;
    }

    if (!Util.isUnset(request.templateName)) {
      body["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.thirdChannelCategoryShrink)) {
      body["ThirdChannelCategory"] = request.thirdChannelCategoryShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushTemplate",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushTemplateResponse>(await this.callApi(params, req, runtime), new PushTemplateResponse({}));
  }

  async pushTemplate(request: PushTemplateRequest): Promise<PushTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushTemplateWithOptions(request, runtime);
  }

  async pushUnBindWithOptions(request: PushUnBindRequest, runtime: $Util.RuntimeOptions): Promise<PushUnBindResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.deliveryToken)) {
      body["DeliveryToken"] = request.deliveryToken;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PushUnBind",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PushUnBindResponse>(await this.callApi(params, req, runtime), new PushUnBindResponse({}));
  }

  async pushUnBind(request: PushUnBindRequest): Promise<PushUnBindResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pushUnBindWithOptions(request, runtime);
  }

  async queryMappCenterAppWithOptions(request: QueryMappCenterAppRequest, runtime: $Util.RuntimeOptions): Promise<QueryMappCenterAppResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMappCenterApp",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMappCenterAppResponse>(await this.callApi(params, req, runtime), new QueryMappCenterAppResponse({}));
  }

  async queryMappCenterApp(request: QueryMappCenterAppRequest): Promise<QueryMappCenterAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMappCenterAppWithOptions(request, runtime);
  }

  async queryMcdpAimWithOptions(request: QueryMcdpAimRequest, runtime: $Util.RuntimeOptions): Promise<QueryMcdpAimResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMcdpAim",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMcdpAimResponse>(await this.callApi(params, req, runtime), new QueryMcdpAimResponse({}));
  }

  async queryMcdpAim(request: QueryMcdpAimRequest): Promise<QueryMcdpAimResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMcdpAimWithOptions(request, runtime);
  }

  async queryMcdpZoneWithOptions(request: QueryMcdpZoneRequest, runtime: $Util.RuntimeOptions): Promise<QueryMcdpZoneResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMcdpZone",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMcdpZoneResponse>(await this.callApi(params, req, runtime), new QueryMcdpZoneResponse({}));
  }

  async queryMcdpZone(request: QueryMcdpZoneRequest): Promise<QueryMcdpZoneResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMcdpZoneWithOptions(request, runtime);
  }

  async queryMcubeMiniPackageWithOptions(request: QueryMcubeMiniPackageRequest, runtime: $Util.RuntimeOptions): Promise<QueryMcubeMiniPackageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMcubeMiniPackage",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMcubeMiniPackageResponse>(await this.callApi(params, req, runtime), new QueryMcubeMiniPackageResponse({}));
  }

  async queryMcubeMiniPackage(request: QueryMcubeMiniPackageRequest): Promise<QueryMcubeMiniPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMcubeMiniPackageWithOptions(request, runtime);
  }

  async queryMcubeMiniTaskWithOptions(request: QueryMcubeMiniTaskRequest, runtime: $Util.RuntimeOptions): Promise<QueryMcubeMiniTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMcubeMiniTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMcubeMiniTaskResponse>(await this.callApi(params, req, runtime), new QueryMcubeMiniTaskResponse({}));
  }

  async queryMcubeMiniTask(request: QueryMcubeMiniTaskRequest): Promise<QueryMcubeMiniTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMcubeMiniTaskWithOptions(request, runtime);
  }

  async queryMcubeVhostWithOptions(request: QueryMcubeVhostRequest, runtime: $Util.RuntimeOptions): Promise<QueryMcubeVhostResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMcubeVhost",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMcubeVhostResponse>(await this.callApi(params, req, runtime), new QueryMcubeVhostResponse({}));
  }

  async queryMcubeVhost(request: QueryMcubeVhostRequest): Promise<QueryMcubeVhostResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMcubeVhostWithOptions(request, runtime);
  }

  async queryMdsUpgradeTaskDetailWithOptions(request: QueryMdsUpgradeTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryMdsUpgradeTaskDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMdsUpgradeTaskDetail",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMdsUpgradeTaskDetailResponse>(await this.callApi(params, req, runtime), new QueryMdsUpgradeTaskDetailResponse({}));
  }

  async queryMdsUpgradeTaskDetail(request: QueryMdsUpgradeTaskDetailRequest): Promise<QueryMdsUpgradeTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMdsUpgradeTaskDetailWithOptions(request, runtime);
  }

  async queryMgsApipageWithOptions(request: QueryMgsApipageRequest, runtime: $Util.RuntimeOptions): Promise<QueryMgsApipageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apiStatus)) {
      body["ApiStatus"] = request.apiStatus;
    }

    if (!Util.isUnset(request.apiType)) {
      body["ApiType"] = request.apiType;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.format)) {
      body["Format"] = request.format;
    }

    if (!Util.isUnset(request.host)) {
      body["Host"] = request.host;
    }

    if (!Util.isUnset(request.needEncrypt)) {
      body["NeedEncrypt"] = request.needEncrypt;
    }

    if (!Util.isUnset(request.needEtag)) {
      body["NeedEtag"] = request.needEtag;
    }

    if (!Util.isUnset(request.needSign)) {
      body["NeedSign"] = request.needSign;
    }

    if (!Util.isUnset(request.operationType)) {
      body["OperationType"] = request.operationType;
    }

    if (!Util.isUnset(request.optFuzzy)) {
      body["OptFuzzy"] = request.optFuzzy;
    }

    if (!Util.isUnset(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sysId)) {
      body["SysId"] = request.sysId;
    }

    if (!Util.isUnset(request.sysName)) {
      body["SysName"] = request.sysName;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMgsApipage",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMgsApipageResponse>(await this.callApi(params, req, runtime), new QueryMgsApipageResponse({}));
  }

  async queryMgsApipage(request: QueryMgsApipageRequest): Promise<QueryMgsApipageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMgsApipageWithOptions(request, runtime);
  }

  async queryMgsApirestWithOptions(request: QueryMgsApirestRequest, runtime: $Util.RuntimeOptions): Promise<QueryMgsApirestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.format)) {
      body["Format"] = request.format;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMgsApirest",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMgsApirestResponse>(await this.callApi(params, req, runtime), new QueryMgsApirestResponse({}));
  }

  async queryMgsApirest(request: QueryMgsApirestRequest): Promise<QueryMgsApirestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMgsApirestWithOptions(request, runtime);
  }

  async queryMgsTestreqbodyautogenWithOptions(request: QueryMgsTestreqbodyautogenRequest, runtime: $Util.RuntimeOptions): Promise<QueryMgsTestreqbodyautogenResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.format)) {
      body["Format"] = request.format;
    }

    if (!Util.isUnset(request.mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr)) {
      body["MpaasMappcenterMgsTestreqbodyautogenQueryJsonStr"] = request.mpaasMappcenterMgsTestreqbodyautogenQueryJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMgsTestreqbodyautogen",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMgsTestreqbodyautogenResponse>(await this.callApi(params, req, runtime), new QueryMgsTestreqbodyautogenResponse({}));
  }

  async queryMgsTestreqbodyautogen(request: QueryMgsTestreqbodyautogenRequest): Promise<QueryMgsTestreqbodyautogenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMgsTestreqbodyautogenWithOptions(request, runtime);
  }

  async queryMpsSchedulerListWithOptions(request: QueryMpsSchedulerListRequest, runtime: $Util.RuntimeOptions): Promise<QueryMpsSchedulerListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.uniqueId)) {
      body["UniqueId"] = request.uniqueId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryMpsSchedulerList",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryMpsSchedulerListResponse>(await this.callApi(params, req, runtime), new QueryMpsSchedulerListResponse({}));
  }

  async queryMpsSchedulerList(request: QueryMpsSchedulerListRequest): Promise<QueryMpsSchedulerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryMpsSchedulerListWithOptions(request, runtime);
  }

  async queryPushAnalysisCoreIndexWithOptions(request: QueryPushAnalysisCoreIndexRequest, runtime: $Util.RuntimeOptions): Promise<QueryPushAnalysisCoreIndexResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.channel)) {
      body["Channel"] = request.channel;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryPushAnalysisCoreIndex",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPushAnalysisCoreIndexResponse>(await this.callApi(params, req, runtime), new QueryPushAnalysisCoreIndexResponse({}));
  }

  async queryPushAnalysisCoreIndex(request: QueryPushAnalysisCoreIndexRequest): Promise<QueryPushAnalysisCoreIndexResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushAnalysisCoreIndexWithOptions(request, runtime);
  }

  async queryPushAnalysisTaskDetailWithOptions(request: QueryPushAnalysisTaskDetailRequest, runtime: $Util.RuntimeOptions): Promise<QueryPushAnalysisTaskDetailResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryPushAnalysisTaskDetail",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPushAnalysisTaskDetailResponse>(await this.callApi(params, req, runtime), new QueryPushAnalysisTaskDetailResponse({}));
  }

  async queryPushAnalysisTaskDetail(request: QueryPushAnalysisTaskDetailRequest): Promise<QueryPushAnalysisTaskDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushAnalysisTaskDetailWithOptions(request, runtime);
  }

  async queryPushAnalysisTaskListWithOptions(request: QueryPushAnalysisTaskListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPushAnalysisTaskListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryPushAnalysisTaskList",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPushAnalysisTaskListResponse>(await this.callApi(params, req, runtime), new QueryPushAnalysisTaskListResponse({}));
  }

  async queryPushAnalysisTaskList(request: QueryPushAnalysisTaskListRequest): Promise<QueryPushAnalysisTaskListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushAnalysisTaskListWithOptions(request, runtime);
  }

  async queryPushSchedulerListWithOptions(request: QueryPushSchedulerListRequest, runtime: $Util.RuntimeOptions): Promise<QueryPushSchedulerListResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.uniqueId)) {
      body["UniqueId"] = request.uniqueId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryPushSchedulerList",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryPushSchedulerListResponse>(await this.callApi(params, req, runtime), new QueryPushSchedulerListResponse({}));
  }

  async queryPushSchedulerList(request: QueryPushSchedulerListRequest): Promise<QueryPushSchedulerListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryPushSchedulerListWithOptions(request, runtime);
  }

  async revokePushMessageWithOptions(request: RevokePushMessageRequest, runtime: $Util.RuntimeOptions): Promise<RevokePushMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    if (!Util.isUnset(request.targetId)) {
      body["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevokePushMessage",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokePushMessageResponse>(await this.callApi(params, req, runtime), new RevokePushMessageResponse({}));
  }

  async revokePushMessage(request: RevokePushMessageRequest): Promise<RevokePushMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokePushMessageWithOptions(request, runtime);
  }

  async revokePushTaskWithOptions(request: RevokePushTaskRequest, runtime: $Util.RuntimeOptions): Promise<RevokePushTaskResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.taskId)) {
      body["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RevokePushTask",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RevokePushTaskResponse>(await this.callApi(params, req, runtime), new RevokePushTaskResponse({}));
  }

  async revokePushTask(request: RevokePushTaskRequest): Promise<RevokePushTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.revokePushTaskWithOptions(request, runtime);
  }

  async runMsaDiffWithOptions(request: RunMsaDiffRequest, runtime: $Util.RuntimeOptions): Promise<RunMsaDiffResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMsaDiffRunJsonStr)) {
      body["MpaasMappcenterMsaDiffRunJsonStr"] = request.mpaasMappcenterMsaDiffRunJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RunMsaDiff",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunMsaDiffResponse>(await this.callApi(params, req, runtime), new RunMsaDiffResponse({}));
  }

  async runMsaDiff(request: RunMsaDiffRequest): Promise<RunMsaDiffResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runMsaDiffWithOptions(request, runtime);
  }

  async saveMgsApirestWithOptions(request: SaveMgsApirestRequest, runtime: $Util.RuntimeOptions): Promise<SaveMgsApirestResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.mpaasMappcenterMgsApirestSaveJsonStr)) {
      body["MpaasMappcenterMgsApirestSaveJsonStr"] = request.mpaasMappcenterMgsApirestSaveJsonStr;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SaveMgsApirest",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveMgsApirestResponse>(await this.callApi(params, req, runtime), new SaveMgsApirestResponse({}));
  }

  async saveMgsApirest(request: SaveMgsApirestRequest): Promise<SaveMgsApirestResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveMgsApirestWithOptions(request, runtime);
  }

  async startUserAppAsyncEnhanceInMsaWithOptions(request: StartUserAppAsyncEnhanceInMsaRequest, runtime: $Util.RuntimeOptions): Promise<StartUserAppAsyncEnhanceInMsaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.apkProtector)) {
      body["ApkProtector"] = request.apkProtector;
    }

    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.assetsFileList)) {
      body["AssetsFileList"] = request.assetsFileList;
    }

    if (!Util.isUnset(request.classes)) {
      body["Classes"] = request.classes;
    }

    if (!Util.isUnset(request.dalvikDebugger)) {
      body["DalvikDebugger"] = request.dalvikDebugger;
    }

    if (!Util.isUnset(request.emulatorEnvironment)) {
      body["EmulatorEnvironment"] = request.emulatorEnvironment;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.javaHook)) {
      body["JavaHook"] = request.javaHook;
    }

    if (!Util.isUnset(request.memoryDump)) {
      body["MemoryDump"] = request.memoryDump;
    }

    if (!Util.isUnset(request.nativeDebugger)) {
      body["NativeDebugger"] = request.nativeDebugger;
    }

    if (!Util.isUnset(request.nativeHook)) {
      body["NativeHook"] = request.nativeHook;
    }

    if (!Util.isUnset(request.packageTampered)) {
      body["PackageTampered"] = request.packageTampered;
    }

    if (!Util.isUnset(request.root)) {
      body["Root"] = request.root;
    }

    if (!Util.isUnset(request.runMode)) {
      body["RunMode"] = request.runMode;
    }

    if (!Util.isUnset(request.soFileList)) {
      body["SoFileList"] = request.soFileList;
    }

    if (!Util.isUnset(request.taskType)) {
      body["TaskType"] = request.taskType;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.totalSwitch)) {
      body["TotalSwitch"] = request.totalSwitch;
    }

    if (!Util.isUnset(request.useAShield)) {
      body["UseAShield"] = request.useAShield;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartUserAppAsyncEnhanceInMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartUserAppAsyncEnhanceInMsaResponse>(await this.callApi(params, req, runtime), new StartUserAppAsyncEnhanceInMsaResponse({}));
  }

  async startUserAppAsyncEnhanceInMsa(request: StartUserAppAsyncEnhanceInMsaRequest): Promise<StartUserAppAsyncEnhanceInMsaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startUserAppAsyncEnhanceInMsaWithOptions(request, runtime);
  }

  async updateMcubeWhitelistWithOptions(request: UpdateMcubeWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMcubeWhitelistResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.keyIds)) {
      body["KeyIds"] = request.keyIds;
    }

    if (!Util.isUnset(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!Util.isUnset(request.ossUrl)) {
      body["OssUrl"] = request.ossUrl;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMcubeWhitelist",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMcubeWhitelistResponse>(await this.callApi(params, req, runtime), new UpdateMcubeWhitelistResponse({}));
  }

  async updateMcubeWhitelist(request: UpdateMcubeWhitelistRequest): Promise<UpdateMcubeWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMcubeWhitelistWithOptions(request, runtime);
  }

  async updateMpaasAppInfoWithOptions(request: UpdateMpaasAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<UpdateMpaasAppInfoResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!Util.isUnset(request.iconFileUrl)) {
      body["IconFileUrl"] = request.iconFileUrl;
    }

    if (!Util.isUnset(request.identifier)) {
      body["Identifier"] = request.identifier;
    }

    if (!Util.isUnset(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!Util.isUnset(request.systemType)) {
      body["SystemType"] = request.systemType;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateMpaasAppInfo",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateMpaasAppInfoResponse>(await this.callApi(params, req, runtime), new UpdateMpaasAppInfoResponse({}));
  }

  async updateMpaasAppInfo(request: UpdateMpaasAppInfoRequest): Promise<UpdateMpaasAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateMpaasAppInfoWithOptions(request, runtime);
  }

  async uploadBitcodeToMsaWithOptions(request: UploadBitcodeToMsaRequest, runtime: $Util.RuntimeOptions): Promise<UploadBitcodeToMsaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.bitcode)) {
      body["Bitcode"] = request.bitcode;
    }

    if (!Util.isUnset(request.codeVersion)) {
      body["CodeVersion"] = request.codeVersion;
    }

    if (!Util.isUnset(request.license)) {
      body["License"] = request.license;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadBitcodeToMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadBitcodeToMsaResponse>(await this.callApi(params, req, runtime), new UploadBitcodeToMsaResponse({}));
  }

  async uploadBitcodeToMsa(request: UploadBitcodeToMsaRequest): Promise<UploadBitcodeToMsaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadBitcodeToMsaWithOptions(request, runtime);
  }

  async uploadMcubeMiniPackageWithOptions(request: UploadMcubeMiniPackageRequest, runtime: $Util.RuntimeOptions): Promise<UploadMcubeMiniPackageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.autoInstall)) {
      body["AutoInstall"] = request.autoInstall;
    }

    if (!Util.isUnset(request.clientVersionMax)) {
      body["ClientVersionMax"] = request.clientVersionMax;
    }

    if (!Util.isUnset(request.clientVersionMin)) {
      body["ClientVersionMin"] = request.clientVersionMin;
    }

    if (!Util.isUnset(request.enableKeepAlive)) {
      body["EnableKeepAlive"] = request.enableKeepAlive;
    }

    if (!Util.isUnset(request.enableOptionMenu)) {
      body["EnableOptionMenu"] = request.enableOptionMenu;
    }

    if (!Util.isUnset(request.enableTabBar)) {
      body["EnableTabBar"] = request.enableTabBar;
    }

    if (!Util.isUnset(request.extendInfo)) {
      body["ExtendInfo"] = request.extendInfo;
    }

    if (!Util.isUnset(request.h5Id)) {
      body["H5Id"] = request.h5Id;
    }

    if (!Util.isUnset(request.h5Name)) {
      body["H5Name"] = request.h5Name;
    }

    if (!Util.isUnset(request.h5Version)) {
      body["H5Version"] = request.h5Version;
    }

    if (!Util.isUnset(request.iconFileUrl)) {
      body["IconFileUrl"] = request.iconFileUrl;
    }

    if (!Util.isUnset(request.iconUrl)) {
      body["IconUrl"] = request.iconUrl;
    }

    if (!Util.isUnset(request.installType)) {
      body["InstallType"] = request.installType;
    }

    if (!Util.isUnset(request.mainUrl)) {
      body["MainUrl"] = request.mainUrl;
    }

    if (!Util.isUnset(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!Util.isUnset(request.packageType)) {
      body["PackageType"] = request.packageType;
    }

    if (!Util.isUnset(request.platform)) {
      body["Platform"] = request.platform;
    }

    if (!Util.isUnset(request.resourceFileUrl)) {
      body["ResourceFileUrl"] = request.resourceFileUrl;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    if (!Util.isUnset(request.vhost)) {
      body["Vhost"] = request.vhost;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadMcubeMiniPackage",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadMcubeMiniPackageResponse>(await this.callApi(params, req, runtime), new UploadMcubeMiniPackageResponse({}));
  }

  async uploadMcubeMiniPackage(request: UploadMcubeMiniPackageRequest): Promise<UploadMcubeMiniPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadMcubeMiniPackageWithOptions(request, runtime);
  }

  async uploadMcubeRsaKeyWithOptions(request: UploadMcubeRsaKeyRequest, runtime: $Util.RuntimeOptions): Promise<UploadMcubeRsaKeyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.onexFlag)) {
      body["OnexFlag"] = request.onexFlag;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadMcubeRsaKey",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadMcubeRsaKeyResponse>(await this.callApi(params, req, runtime), new UploadMcubeRsaKeyResponse({}));
  }

  async uploadMcubeRsaKey(request: UploadMcubeRsaKeyRequest): Promise<UploadMcubeRsaKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadMcubeRsaKeyWithOptions(request, runtime);
  }

  async uploadUserAppToMsaWithOptions(request: UploadUserAppToMsaRequest, runtime: $Util.RuntimeOptions): Promise<UploadUserAppToMsaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appId)) {
      body["AppId"] = request.appId;
    }

    if (!Util.isUnset(request.fileUrl)) {
      body["FileUrl"] = request.fileUrl;
    }

    if (!Util.isUnset(request.tenantId)) {
      body["TenantId"] = request.tenantId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UploadUserAppToMsa",
      version: "2020-10-28",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadUserAppToMsaResponse>(await this.callApi(params, req, runtime), new UploadUserAppToMsaResponse({}));
  }

  async uploadUserAppToMsa(request: UploadUserAppToMsaRequest): Promise<UploadUserAppToMsaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadUserAppToMsaWithOptions(request, runtime);
  }

}
