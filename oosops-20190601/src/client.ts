// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AuditPublicTemplateRegistrationRequest extends $tea.Model {
  auditAction?: string;
  comment?: string;
  regionId?: string;
  registrationId?: string;
  static names(): { [key: string]: string } {
    return {
      auditAction: 'AuditAction',
      comment: 'Comment',
      regionId: 'RegionId',
      registrationId: 'RegistrationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditAction: 'string',
      comment: 'string',
      regionId: 'string',
      registrationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditPublicTemplateRegistrationResponseBody extends $tea.Model {
  comment?: string;
  detail?: string;
  registrationId?: string;
  requestId?: string;
  status?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      detail: 'Detail',
      registrationId: 'RegistrationId',
      requestId: 'RequestId',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      detail: 'string',
      registrationId: 'string',
      requestId: 'string',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuditPublicTemplateRegistrationResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuditPublicTemplateRegistrationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuditPublicTemplateRegistrationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateActionRequest extends $tea.Model {
  actionName?: string;
  actionType?: string;
  content?: string;
  popularity?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionType: 'ActionType',
      content: 'Content',
      popularity: 'Popularity',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionType: 'string',
      content: 'string',
      popularity: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateActionResponseBody extends $tea.Model {
  actionName?: string;
  actionType?: string;
  createdDate?: string;
  description?: string;
  popularity?: number;
  properties?: string;
  requestId?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionType: 'ActionType',
      createdDate: 'CreatedDate',
      description: 'Description',
      popularity: 'Popularity',
      properties: 'Properties',
      requestId: 'RequestId',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionType: 'string',
      createdDate: 'string',
      description: 'string',
      popularity: 'number',
      properties: 'string',
      requestId: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateActionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicParameterRequest extends $tea.Model {
  clientToken?: string;
  constraints?: string;
  description?: string;
  name?: string;
  parameterType?: string;
  regionId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      constraints: 'Constraints',
      description: 'Description',
      name: 'Name',
      parameterType: 'ParameterType',
      regionId: 'RegionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      constraints: 'string',
      description: 'string',
      name: 'string',
      parameterType: 'string',
      regionId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicParameterResponseBody extends $tea.Model {
  parameter?: CreatePublicParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: CreatePublicParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePublicParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePublicParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicPatchBaselineRequest extends $tea.Model {
  approvalRules?: string;
  clientToken?: string;
  description?: string;
  name?: string;
  operationSystem?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      operationSystem: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicPatchBaselineResponseBody extends $tea.Model {
  patchBaseline?: CreatePublicPatchBaselineResponseBodyPatchBaseline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: CreatePublicPatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicPatchBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePublicPatchBaselineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePublicPatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicTemplateRequest extends $tea.Model {
  category?: string;
  content?: string;
  isExample?: boolean;
  popularity?: number;
  publisher?: string;
  regionId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      isExample: 'IsExample',
      popularity: 'Popularity',
      publisher: 'Publisher',
      regionId: 'RegionId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      isExample: 'boolean',
      popularity: 'number',
      publisher: 'string',
      regionId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicTemplateResponseBody extends $tea.Model {
  requestId?: string;
  template?: CreatePublicTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: CreatePublicTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreatePublicTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreatePublicTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFailureMsgRequest extends $tea.Model {
  operation?: string;
  requestFingerprint?: string;
  static names(): { [key: string]: string } {
    return {
      operation: 'Operation',
      requestFingerprint: 'RequestFingerprint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operation: 'string',
      requestFingerprint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFailureMsgResponseBody extends $tea.Model {
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

export class DeleteFailureMsgResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFailureMsgResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFailureMsgResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicParameterRequest extends $tea.Model {
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicParameterResponseBody extends $tea.Model {
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

export class DeletePublicParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePublicParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePublicParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicPatchBaselineRequest extends $tea.Model {
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

export class DeletePublicPatchBaselineResponseBody extends $tea.Model {
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

export class DeletePublicPatchBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePublicPatchBaselineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePublicPatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicTemplateRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeletePublicTemplateResponseBody extends $tea.Model {
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

export class DeletePublicTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeletePublicTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeletePublicTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoCheckResourceRequest extends $tea.Model {
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  level?: number;
  message?: string;
  pk?: string;
  prompt?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bid: 'bid',
      country: 'country',
      gmtWakeup: 'gmtWakeup',
      hid: 'hid',
      interrupt: 'interrupt',
      invoker: 'invoker',
      level: 'level',
      message: 'message',
      pk: 'pk',
      prompt: 'prompt',
      success: 'success',
      taskExtraData: 'taskExtraData',
      taskIdentifier: 'taskIdentifier',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      level: 'number',
      message: 'string',
      pk: 'string',
      prompt: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoCheckResourceResponseBody extends $tea.Model {
  requestId?: string;
  bid?: string;
  country?: string;
  gmtWakeup?: string;
  hid?: number;
  interrupt?: boolean;
  invoker?: string;
  level?: number;
  message?: string;
  pk?: string;
  prompt?: string;
  success?: boolean;
  taskExtraData?: string;
  taskIdentifier?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bid: 'bid',
      country: 'country',
      gmtWakeup: 'gmtWakeup',
      hid: 'hid',
      interrupt: 'interrupt',
      invoker: 'invoker',
      level: 'level',
      message: 'message',
      pk: 'pk',
      prompt: 'prompt',
      success: 'success',
      taskExtraData: 'taskExtraData',
      taskIdentifier: 'taskIdentifier',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bid: 'string',
      country: 'string',
      gmtWakeup: 'string',
      hid: 'number',
      interrupt: 'boolean',
      invoker: 'string',
      level: 'number',
      message: 'string',
      pk: 'string',
      prompt: 'string',
      success: 'boolean',
      taskExtraData: 'string',
      taskIdentifier: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DoCheckResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DoCheckResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DoCheckResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActionRequest extends $tea.Model {
  actionName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActionResponseBody extends $tea.Model {
  actionName?: string;
  actionType?: string;
  content?: Buffer;
  createTime?: string;
  modifiedTime?: string;
  popularity?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionType: 'ActionType',
      content: 'Content',
      createTime: 'CreateTime',
      modifiedTime: 'ModifiedTime',
      popularity: 'Popularity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionType: 'string',
      content: 'Buffer',
      createTime: 'string',
      modifiedTime: 'string',
      popularity: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetActionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowControlRequest extends $tea.Model {
  api?: string;
  service?: string;
  type?: number;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      service: 'Service',
      type: 'Type',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      service: 'string',
      type: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowControlResponseBody extends $tea.Model {
  requestId?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFlowControlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFlowControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFlowControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicParameterRequest extends $tea.Model {
  name?: string;
  parameterVersion?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicParameterResponseBody extends $tea.Model {
  parameter?: GetPublicParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: GetPublicParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublicParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPublicParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicPatchBaselineRequest extends $tea.Model {
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicPatchBaselineResponseBody extends $tea.Model {
  patchBaseline?: GetPublicPatchBaselineResponseBodyPatchBaseline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: GetPublicPatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicPatchBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublicPatchBaselineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPublicPatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicTemplateRequest extends $tea.Model {
  regionId?: string;
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicTemplateResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  template?: GetPublicTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      template: GetPublicTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetPublicTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetPublicTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaRequest extends $tea.Model {
  quotaName?: string;
  regionId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      regionId: 'RegionId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      regionId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBody extends $tea.Model {
  quota?: GetQuotaResponseBodyQuota;
  requestId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: GetQuotaResponseBodyQuota,
      requestId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserExecutionTemplateRequest extends $tea.Model {
  aliUid?: string;
  executionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserExecutionTemplateResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  template?: GetUserExecutionTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      template: GetUserExecutionTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserExecutionTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserExecutionTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserExecutionTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTemplateRequest extends $tea.Model {
  aliUid?: string;
  regionId?: string;
  templateName?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      regionId: 'RegionId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      regionId: 'string',
      templateName: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTemplateResponseBody extends $tea.Model {
  content?: string;
  requestId?: string;
  template?: GetUserTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      requestId: 'string',
      template: GetUserTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetUserTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  OOSActionName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OOSActionName: 'OOSActionName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      OOSActionName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponseBody extends $tea.Model {
  actions?: ListActionsResponseBodyActions[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': ListActionsResponseBodyActions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListActionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListActionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultQuotaResponseBody extends $tea.Model {
  quotas?: ListDefaultQuotaResponseBodyQuotas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': ListDefaultQuotaResponseBodyQuotas },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDefaultQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDefaultQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFailureMsgsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestFingerprint?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestFingerprint: 'RequestFingerprint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestFingerprint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFailureMsgsResponseBody extends $tea.Model {
  failureMsgs?: ListFailureMsgsResponseBodyFailureMsgs[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      failureMsgs: 'FailureMsgs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureMsgs: { 'type': 'array', 'itemType': ListFailureMsgsResponseBodyFailureMsgs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFailureMsgsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFailureMsgsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFailureMsgsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOOSLogsRequest extends $tea.Model {
  endTime?: string;
  executionId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  requestFingerprint?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      executionId: 'ExecutionId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      requestFingerprint: 'RequestFingerprint',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      executionId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      requestFingerprint: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOOSLogsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  OOSLogs?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OOSLogs: 'OOSLogs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      OOSLogs: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOOSLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOOSLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOOSLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicParametersRequest extends $tea.Model {
  maxResults?: number;
  name?: string;
  nextToken?: string;
  parameterType?: string;
  path?: string;
  recursive?: boolean;
  regionId?: string;
  sortField?: string;
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      parameterType: 'ParameterType',
      path: 'Path',
      recursive: 'Recursive',
      regionId: 'RegionId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      parameterType: 'string',
      path: 'string',
      recursive: 'boolean',
      regionId: 'string',
      sortField: 'string',
      sortOrder: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicParametersResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  parameters?: ListPublicParametersResponseBodyParameters[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parameters: 'Parameters',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      parameters: { 'type': 'array', 'itemType': ListPublicParametersResponseBodyParameters },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicParametersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicParametersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPublicParametersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicPatchBaselinesRequest extends $tea.Model {
  maxResults?: number;
  name?: string;
  nextToken?: string;
  operationSystem?: string;
  regionId?: string;
  shareType?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      operationSystem: 'OperationSystem',
      regionId: 'RegionId',
      shareType: 'ShareType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      operationSystem: 'string',
      regionId: 'string',
      shareType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicPatchBaselinesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  patchBaselines?: ListPublicPatchBaselinesResponseBodyPatchBaselines[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patchBaselines: 'PatchBaselines',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      patchBaselines: { 'type': 'array', 'itemType': ListPublicPatchBaselinesResponseBodyPatchBaselines },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicPatchBaselinesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicPatchBaselinesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPublicPatchBaselinesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplateRegistrationsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  registrationId?: string;
  status?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      registrationId: 'RegistrationId',
      status: 'Status',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      registrationId: 'string',
      status: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplateRegistrationsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  registrations?: ListPublicTemplateRegistrationsResponseBodyRegistrations[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      registrations: 'Registrations',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      registrations: { 'type': 'array', 'itemType': ListPublicTemplateRegistrationsResponseBodyRegistrations },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplateRegistrationsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicTemplateRegistrationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPublicTemplateRegistrationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplatesRequest extends $tea.Model {
  createdBy?: string;
  createdDateAfter?: string;
  createdDateBefore?: string;
  isExample?: boolean;
  maxResults?: number;
  nextToken?: string;
  popularity?: number;
  regionId?: string;
  shareType?: string;
  sortField?: string;
  sortOrder?: string;
  templateFormat?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDateAfter: 'CreatedDateAfter',
      createdDateBefore: 'CreatedDateBefore',
      isExample: 'IsExample',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      popularity: 'Popularity',
      regionId: 'RegionId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      templateFormat: 'TemplateFormat',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDateAfter: 'string',
      createdDateBefore: 'string',
      isExample: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      popularity: 'number',
      regionId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      templateFormat: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplatesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  templates?: ListPublicTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListPublicTemplatesResponseBodyTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPublicTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListPublicTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionLogsRequest extends $tea.Model {
  aliUid?: string;
  executionId?: string;
  logType?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  taskExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      logType: 'LogType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      taskExecutionId: 'TaskExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      logType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      taskExecutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionLogsResponseBody extends $tea.Model {
  executionLogs?: ListUserExecutionLogsResponseBodyExecutionLogs[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executionLogs: 'ExecutionLogs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionLogs: { 'type': 'array', 'itemType': ListUserExecutionLogsResponseBodyExecutionLogs },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserExecutionLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserExecutionLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionsRequest extends $tea.Model {
  aliUid?: string;
  endDateAfter?: string;
  endDateBefore?: string;
  executedBy?: string;
  executionId?: string;
  includeChildExecution?: boolean;
  maxResults?: number;
  mode?: string;
  nextToken?: string;
  parentExecutionId?: string;
  ramRole?: string;
  regionId?: string;
  sortField?: string;
  sortOrder?: string;
  startDateAfter?: string;
  startDateBefore?: string;
  status?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      includeChildExecution: 'IncludeChildExecution',
      maxResults: 'MaxResults',
      mode: 'Mode',
      nextToken: 'NextToken',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      regionId: 'RegionId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endDateAfter: 'string',
      endDateBefore: 'string',
      executedBy: 'string',
      executionId: 'string',
      includeChildExecution: 'boolean',
      maxResults: 'number',
      mode: 'string',
      nextToken: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      regionId: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionsResponseBody extends $tea.Model {
  executions?: ListUserExecutionsResponseBodyExecutions[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      executions: 'Executions',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executions: { 'type': 'array', 'itemType': ListUserExecutionsResponseBodyExecutions },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserExecutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchStatesRequest extends $tea.Model {
  aliUid?: string;
  instanceIds?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      instanceIds: 'InstanceIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      instanceIds: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchStatesResponseBody extends $tea.Model {
  instancePatchStates?: ListUserInstancePatchStatesResponseBodyInstancePatchStates[];
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instancePatchStates: 'InstancePatchStates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePatchStates: { 'type': 'array', 'itemType': ListUserInstancePatchStatesResponseBodyInstancePatchStates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchStatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserInstancePatchStatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserInstancePatchStatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchesRequest extends $tea.Model {
  aliUid?: string;
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  patches?: ListUserInstancePatchesResponseBodyPatches[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      patches: 'Patches',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      patches: { 'type': 'array', 'itemType': ListUserInstancePatchesResponseBodyPatches },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserInstancePatchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserInstancePatchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInventoryEntriesRequest extends $tea.Model {
  aliUid?: string;
  filter?: ListUserInventoryEntriesRequestFilter[];
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  regionId?: string;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      filter: { 'type': 'array', 'itemType': ListUserInventoryEntriesRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInventoryEntriesResponseBody extends $tea.Model {
  captureTime?: string;
  entries?: { [key: string]: any }[];
  instanceId?: string;
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  schemaVersion?: string;
  typeName?: string;
  static names(): { [key: string]: string } {
    return {
      captureTime: 'CaptureTime',
      entries: 'Entries',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      schemaVersion: 'SchemaVersion',
      typeName: 'TypeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captureTime: 'string',
      entries: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      schemaVersion: 'string',
      typeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInventoryEntriesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserInventoryEntriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserInventoryEntriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTaskExecutionsRequest extends $tea.Model {
  aliUid?: string;
  endDateAfter?: string;
  endDateBefore?: string;
  executionId?: string;
  includeChildTaskExecution?: boolean;
  maxResults?: number;
  nextToken?: string;
  parentTaskExecutionId?: string;
  regionId?: string;
  sortField?: string;
  sortOrder?: string;
  startDateAfter?: string;
  startDateBefore?: string;
  status?: string;
  taskAction?: string;
  taskExecutionId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      endDateAfter: 'EndDateAfter',
      endDateBefore: 'EndDateBefore',
      executionId: 'ExecutionId',
      includeChildTaskExecution: 'IncludeChildTaskExecution',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      regionId: 'RegionId',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      startDateAfter: 'StartDateAfter',
      startDateBefore: 'StartDateBefore',
      status: 'Status',
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      endDateAfter: 'string',
      endDateBefore: 'string',
      executionId: 'string',
      includeChildTaskExecution: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      parentTaskExecutionId: 'string',
      regionId: 'string',
      sortField: 'string',
      sortOrder: 'string',
      startDateAfter: 'string',
      startDateBefore: 'string',
      status: 'string',
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTaskExecutionsResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  taskExecutions?: ListUserTaskExecutionsResponseBodyTaskExecutions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      taskExecutions: 'TaskExecutions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      taskExecutions: { 'type': 'array', 'itemType': ListUserTaskExecutionsResponseBodyTaskExecutions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTaskExecutionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserTaskExecutionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserTaskExecutionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTemplatesRequest extends $tea.Model {
  aliUid?: string;
  category?: string;
  createdBy?: string;
  createdDateAfter?: string;
  createdDateBefore?: string;
  maxResults?: number;
  nextToken?: string;
  popularity?: number;
  regionId?: string;
  shareType?: string;
  sortField?: string;
  sortOrder?: string;
  templateFormat?: string;
  templateName?: string;
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      category: 'Category',
      createdBy: 'CreatedBy',
      createdDateAfter: 'CreatedDateAfter',
      createdDateBefore: 'CreatedDateBefore',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      popularity: 'Popularity',
      regionId: 'RegionId',
      shareType: 'ShareType',
      sortField: 'SortField',
      sortOrder: 'SortOrder',
      templateFormat: 'TemplateFormat',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      category: 'string',
      createdBy: 'string',
      createdDateAfter: 'string',
      createdDateBefore: 'string',
      maxResults: 'number',
      nextToken: 'string',
      popularity: 'number',
      regionId: 'string',
      shareType: 'string',
      sortField: 'string',
      sortOrder: 'string',
      templateFormat: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTemplatesResponseBody extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  requestId?: string;
  templates?: ListUserTemplatesResponseBodyTemplates[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': ListUserTemplatesResponseBodyTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUserTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUserTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetTimerTriggerExecutionRequest extends $tea.Model {
  aliUid?: string;
  executionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetTimerTriggerExecutionResponseBody extends $tea.Model {
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

export class ResetTimerTriggerExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetTimerTriggerExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetTimerTriggerExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserExecutionRequest extends $tea.Model {
  aliUid?: string;
  executionId?: string;
  regionId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      regionId: 'RegionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      regionId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserExecutionResponseBody extends $tea.Model {
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

export class ResetUserExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ResetUserExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResetUserExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFlowControlRequest extends $tea.Model {
  api?: string;
  service?: string;
  type?: number;
  uid?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      api: 'Api',
      service: 'Service',
      type: 'Type',
      uid: 'Uid',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      api: 'string',
      service: 'string',
      type: 'number',
      uid: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetFlowControlResponseBody extends $tea.Model {
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

export class SetFlowControlResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetFlowControlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetFlowControlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQuotaRequest extends $tea.Model {
  quotaName?: string;
  regionId?: string;
  uid?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      quotaName: 'QuotaName',
      regionId: 'RegionId',
      uid: 'Uid',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaName: 'string',
      regionId: 'string',
      uid: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQuotaResponseBody extends $tea.Model {
  quota?: number;
  requestId?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      quota: 'Quota',
      requestId: 'RequestId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quota: 'number',
      requestId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQuotaResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateUserExecutionRequest extends $tea.Model {
  aliUid?: string;
  executionId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateUserExecutionResponseBody extends $tea.Model {
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

export class TerminateUserExecutionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TerminateUserExecutionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TerminateUserExecutionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateActionRequest extends $tea.Model {
  actionName?: string;
  actionType?: string;
  content?: string;
  popularity?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionType: 'ActionType',
      content: 'Content',
      popularity: 'Popularity',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionType: 'string',
      content: 'string',
      popularity: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateActionResponseBody extends $tea.Model {
  actionName?: string;
  actionType?: string;
  createdDate?: string;
  description?: string;
  popularity?: number;
  properties?: string;
  requestId?: string;
  templateVersion?: string;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionType: 'ActionType',
      createdDate: 'CreatedDate',
      description: 'Description',
      popularity: 'Popularity',
      properties: 'Properties',
      requestId: 'RequestId',
      templateVersion: 'TemplateVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: 'string',
      actionType: 'string',
      createdDate: 'string',
      description: 'string',
      popularity: 'number',
      properties: 'string',
      requestId: 'string',
      templateVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateActionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateActionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateActionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicParameterRequest extends $tea.Model {
  description?: string;
  name?: string;
  regionId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      regionId: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicParameterResponseBody extends $tea.Model {
  parameter?: UpdatePublicParameterResponseBodyParameter;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: UpdatePublicParameterResponseBodyParameter,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicParameterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePublicParameterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePublicParameterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicPatchBaselineRequest extends $tea.Model {
  approvalRules?: string;
  clientToken?: string;
  description?: string;
  name?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      clientToken: 'ClientToken',
      description: 'Description',
      name: 'Name',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      clientToken: 'string',
      description: 'string',
      name: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicPatchBaselineResponseBody extends $tea.Model {
  patchBaseline?: UpdatePublicPatchBaselineResponseBodyPatchBaseline;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patchBaseline: 'PatchBaseline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patchBaseline: UpdatePublicPatchBaselineResponseBodyPatchBaseline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicPatchBaselineResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePublicPatchBaselineResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePublicPatchBaselineResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicTemplateRequest extends $tea.Model {
  category?: string;
  content?: string;
  popularity?: number;
  publisher?: string;
  regionId?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      popularity: 'Popularity',
      publisher: 'Publisher',
      regionId: 'RegionId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      popularity: 'number',
      publisher: 'string',
      regionId: 'string',
      templateName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicTemplateResponseBody extends $tea.Model {
  requestId?: string;
  template?: UpdatePublicTemplateResponseBodyTemplate;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      template: UpdatePublicTemplateResponseBodyTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdatePublicTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdatePublicTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePublicTemplateContentRequest extends $tea.Model {
  content?: string;
  regionId?: string;
  templateName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      regionId: 'RegionId',
      templateName: 'TemplateName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      regionId: 'string',
      templateName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePublicTemplateContentResponseBody extends $tea.Model {
  description?: string;
  outputs?: string;
  parameters?: string;
  ramRole?: string;
  requestId?: string;
  tasks?: ValidatePublicTemplateContentResponseBodyTasks[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      outputs: 'Outputs',
      parameters: 'Parameters',
      ramRole: 'RamRole',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      outputs: 'string',
      parameters: 'string',
      ramRole: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ValidatePublicTemplateContentResponseBodyTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePublicTemplateContentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ValidatePublicTemplateContentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ValidatePublicTemplateContentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicParameterResponseBodyParameter extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: number;
  regionId?: string;
  shareType?: string;
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      shareType: 'ShareType',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      shareType: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicPatchBaselineResponseBodyPatchBaseline extends $tea.Model {
  approvalRules?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  operationSystem?: string;
  shareType?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      shareType: 'ShareType',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      shareType: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePublicTemplateResponseBodyTemplate extends $tea.Model {
  category?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  popularity?: number;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      popularity: 'Popularity',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      popularity: 'number',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicParameterResponseBodyParameter extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: number;
  regionId?: string;
  shareType?: string;
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      shareType: 'ShareType',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      shareType: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicPatchBaselineResponseBodyPatchBaseline extends $tea.Model {
  approvalRules?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  operationSystem?: string;
  shareType?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      shareType: 'ShareType',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      shareType: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublicTemplateResponseBodyTemplate extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  popularity?: number;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      popularity: 'Popularity',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      popularity: 'number',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBodyQuota extends $tea.Model {
  concurrentExecution?: number;
  dailyTasks?: number;
  totalTemplate?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentExecution: 'ConcurrentExecution',
      dailyTasks: 'DailyTasks',
      totalTemplate: 'TotalTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentExecution: 'number',
      dailyTasks: 'number',
      totalTemplate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserExecutionTemplateResponseBodyTemplate extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserTemplateResponseBodyTemplate extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListActionsResponseBodyActions extends $tea.Model {
  actionType?: string;
  createdDate?: string;
  description?: string;
  OOSActionName?: string;
  popularity?: number;
  properties?: string;
  templateVersion?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      createdDate: 'CreatedDate',
      description: 'Description',
      OOSActionName: 'OOSActionName',
      popularity: 'Popularity',
      properties: 'Properties',
      templateVersion: 'TemplateVersion',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      createdDate: 'string',
      description: 'string',
      OOSActionName: 'string',
      popularity: 'number',
      properties: 'string',
      templateVersion: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDefaultQuotaResponseBodyQuotas extends $tea.Model {
  concurrentExecution?: number;
  dailyTasks?: number;
  totalTemplate?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentExecution: 'ConcurrentExecution',
      dailyTasks: 'DailyTasks',
      totalTemplate: 'TotalTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentExecution: 'number',
      dailyTasks: 'number',
      totalTemplate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFailureMsgsResponseBodyFailureMsgs extends $tea.Model {
  aliUid?: string;
  executionId?: string;
  messageBody?: string;
  reason?: string;
  taskExecutionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      executionId: 'ExecutionId',
      messageBody: 'MessageBody',
      reason: 'Reason',
      taskExecutionId: 'TaskExecutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      executionId: 'string',
      messageBody: 'string',
      reason: 'string',
      taskExecutionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicParametersResponseBodyParameters extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: string;
  regionId?: string;
  shareType?: string;
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      shareType: 'ShareType',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'string',
      regionId: 'string',
      shareType: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicPatchBaselinesResponseBodyPatchBaselines extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  isDefault?: boolean;
  name?: string;
  operationSystem?: string;
  shareType?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      isDefault: 'IsDefault',
      name: 'Name',
      operationSystem: 'OperationSystem',
      shareType: 'ShareType',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      isDefault: 'boolean',
      name: 'string',
      operationSystem: 'string',
      shareType: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplateRegistrationsResponseBodyRegistrations extends $tea.Model {
  comment?: string;
  createdDate?: string;
  detail?: string;
  registrationId?: string;
  showPages?: string;
  status?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createdDate: 'CreatedDate',
      detail: 'Detail',
      registrationId: 'RegistrationId',
      showPages: 'ShowPages',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createdDate: 'string',
      detail: 'string',
      registrationId: 'string',
      showPages: 'string',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicTemplatesResponseBodyTemplates extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  popularity?: number;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  totalExecutionCount?: number;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      popularity: 'Popularity',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      totalExecutionCount: 'TotalExecutionCount',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      popularity: 'number',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      totalExecutionCount: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionLogsResponseBodyExecutionLogs extends $tea.Model {
  logType?: string;
  message?: string;
  taskExecutionId?: string;
  timestamp?: string;
  static names(): { [key: string]: string } {
    return {
      logType: 'LogType',
      message: 'Message',
      taskExecutionId: 'TaskExecutionId',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logType: 'string',
      message: 'string',
      taskExecutionId: 'string',
      timestamp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionsResponseBodyExecutionsCurrentTasks extends $tea.Model {
  taskAction?: string;
  taskExecutionId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserExecutionsResponseBodyExecutions extends $tea.Model {
  counters?: string;
  createDate?: string;
  currentTasks?: ListUserExecutionsResponseBodyExecutionsCurrentTasks[];
  endDate?: string;
  executedBy?: string;
  executionId?: string;
  isParent?: boolean;
  mode?: string;
  outputs?: string;
  parameters?: string;
  parentExecutionId?: string;
  ramRole?: string;
  safetyCheck?: string;
  startDate?: string;
  status?: string;
  statusMessage?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updateDate?: string;
  waitingStatus?: string;
  static names(): { [key: string]: string } {
    return {
      counters: 'Counters',
      createDate: 'CreateDate',
      currentTasks: 'CurrentTasks',
      endDate: 'EndDate',
      executedBy: 'ExecutedBy',
      executionId: 'ExecutionId',
      isParent: 'IsParent',
      mode: 'Mode',
      outputs: 'Outputs',
      parameters: 'Parameters',
      parentExecutionId: 'ParentExecutionId',
      ramRole: 'RamRole',
      safetyCheck: 'SafetyCheck',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updateDate: 'UpdateDate',
      waitingStatus: 'WaitingStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      counters: 'string',
      createDate: 'string',
      currentTasks: { 'type': 'array', 'itemType': ListUserExecutionsResponseBodyExecutionsCurrentTasks },
      endDate: 'string',
      executedBy: 'string',
      executionId: 'string',
      isParent: 'boolean',
      mode: 'string',
      outputs: 'string',
      parameters: 'string',
      parentExecutionId: 'string',
      ramRole: 'string',
      safetyCheck: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updateDate: 'string',
      waitingStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchStatesResponseBodyInstancePatchStates extends $tea.Model {
  baselineId?: string;
  failedCount?: string;
  installedCount?: string;
  installedOtherCount?: string;
  installedPendingRebootCount?: string;
  installedRejectedCount?: string;
  instanceId?: string;
  missingCount?: string;
  operationEndTime?: string;
  operationStartTime?: string;
  operationType?: string;
  ownerInformation?: string;
  patchGroup?: string;
  static names(): { [key: string]: string } {
    return {
      baselineId: 'BaselineId',
      failedCount: 'FailedCount',
      installedCount: 'InstalledCount',
      installedOtherCount: 'InstalledOtherCount',
      installedPendingRebootCount: 'InstalledPendingRebootCount',
      installedRejectedCount: 'InstalledRejectedCount',
      instanceId: 'InstanceId',
      missingCount: 'MissingCount',
      operationEndTime: 'OperationEndTime',
      operationStartTime: 'OperationStartTime',
      operationType: 'OperationType',
      ownerInformation: 'OwnerInformation',
      patchGroup: 'PatchGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baselineId: 'string',
      failedCount: 'string',
      installedCount: 'string',
      installedOtherCount: 'string',
      installedPendingRebootCount: 'string',
      installedRejectedCount: 'string',
      instanceId: 'string',
      missingCount: 'string',
      operationEndTime: 'string',
      operationStartTime: 'string',
      operationType: 'string',
      ownerInformation: 'string',
      patchGroup: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInstancePatchesResponseBodyPatches extends $tea.Model {
  classification?: string;
  installedTime?: string;
  KBId?: string;
  severity?: string;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      classification: 'Classification',
      installedTime: 'InstalledTime',
      KBId: 'KBId',
      severity: 'Severity',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classification: 'string',
      installedTime: 'string',
      KBId: 'string',
      severity: 'string',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserInventoryEntriesRequestFilter extends $tea.Model {
  name?: string;
  operator?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      operator: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTaskExecutionsResponseBodyTaskExecutions extends $tea.Model {
  childExecutionId?: string;
  createDate?: string;
  endDate?: string;
  executionId?: string;
  extraData?: string;
  loop?: string;
  loopBatchNumber?: number;
  loopItem?: string;
  outputs?: string;
  parentTaskExecutionId?: string;
  properties?: string;
  startDate?: string;
  status?: string;
  statusMessage?: string;
  taskAction?: string;
  taskExecutionId?: string;
  taskName?: string;
  templateId?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      childExecutionId: 'ChildExecutionId',
      createDate: 'CreateDate',
      endDate: 'EndDate',
      executionId: 'ExecutionId',
      extraData: 'ExtraData',
      loop: 'Loop',
      loopBatchNumber: 'LoopBatchNumber',
      loopItem: 'LoopItem',
      outputs: 'Outputs',
      parentTaskExecutionId: 'ParentTaskExecutionId',
      properties: 'Properties',
      startDate: 'StartDate',
      status: 'Status',
      statusMessage: 'StatusMessage',
      taskAction: 'TaskAction',
      taskExecutionId: 'TaskExecutionId',
      taskName: 'TaskName',
      templateId: 'TemplateId',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childExecutionId: 'string',
      createDate: 'string',
      endDate: 'string',
      executionId: 'string',
      extraData: 'string',
      loop: 'string',
      loopBatchNumber: 'number',
      loopItem: 'string',
      outputs: 'string',
      parentTaskExecutionId: 'string',
      properties: 'string',
      startDate: 'string',
      status: 'string',
      statusMessage: 'string',
      taskAction: 'string',
      taskExecutionId: 'string',
      taskName: 'string',
      templateId: 'string',
      updateDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserTemplatesResponseBodyTemplates extends $tea.Model {
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  popularity?: number;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  totalExecutionCount?: number;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      popularity: 'Popularity',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      totalExecutionCount: 'TotalExecutionCount',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      popularity: 'number',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      totalExecutionCount: 'number',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicParameterResponseBodyParameter extends $tea.Model {
  constraints?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  parameterVersion?: number;
  regionId?: string;
  shareType?: string;
  type?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      parameterVersion: 'ParameterVersion',
      regionId: 'RegionId',
      shareType: 'ShareType',
      type: 'Type',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      parameterVersion: 'number',
      regionId: 'string',
      shareType: 'string',
      type: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicPatchBaselineResponseBodyPatchBaseline extends $tea.Model {
  approvalRules?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  name?: string;
  operationSystem?: string;
  shareType?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      approvalRules: 'ApprovalRules',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      operationSystem: 'OperationSystem',
      shareType: 'ShareType',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalRules: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      operationSystem: 'string',
      shareType: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdatePublicTemplateResponseBodyTemplate extends $tea.Model {
  category?: string;
  createdBy?: string;
  createdDate?: string;
  description?: string;
  hash?: string;
  popularity?: number;
  shareType?: string;
  templateFormat?: string;
  templateId?: string;
  templateName?: string;
  templateVersion?: string;
  updatedBy?: string;
  updatedDate?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createdBy: 'CreatedBy',
      createdDate: 'CreatedDate',
      description: 'Description',
      hash: 'Hash',
      popularity: 'Popularity',
      shareType: 'ShareType',
      templateFormat: 'TemplateFormat',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createdBy: 'string',
      createdDate: 'string',
      description: 'string',
      hash: 'string',
      popularity: 'number',
      shareType: 'string',
      templateFormat: 'string',
      templateId: 'string',
      templateName: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ValidatePublicTemplateContentResponseBodyTasks extends $tea.Model {
  description?: string;
  name?: string;
  outputs?: string;
  properties?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      outputs: 'Outputs',
      properties: 'Properties',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      outputs: 'string',
      properties: 'string',
      type: 'string',
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
    this._endpoint = this.getEndpoint("oosops", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  /**
   * @param request AuditPublicTemplateRegistrationRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return AuditPublicTemplateRegistrationResponse
   */
  async auditPublicTemplateRegistrationWithOptions(request: AuditPublicTemplateRegistrationRequest, runtime: $Util.RuntimeOptions): Promise<AuditPublicTemplateRegistrationResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.auditAction)) {
      query["AuditAction"] = request.auditAction;
    }

    if (!Util.isUnset(request.comment)) {
      query["Comment"] = request.comment;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.registrationId)) {
      query["RegistrationId"] = request.registrationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AuditPublicTemplateRegistration",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AuditPublicTemplateRegistrationResponse>(await this.callApi(params, req, runtime), new AuditPublicTemplateRegistrationResponse({}));
  }

  /**
   * @param request AuditPublicTemplateRegistrationRequest
   * @return AuditPublicTemplateRegistrationResponse
   */
  async auditPublicTemplateRegistration(request: AuditPublicTemplateRegistrationRequest): Promise<AuditPublicTemplateRegistrationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.auditPublicTemplateRegistrationWithOptions(request, runtime);
  }

  /**
   * @param request CreateActionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreateActionResponse
   */
  async createActionWithOptions(request: CreateActionRequest, runtime: $Util.RuntimeOptions): Promise<CreateActionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!Util.isUnset(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAction",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateActionResponse>(await this.callApi(params, req, runtime), new CreateActionResponse({}));
  }

  /**
   * @param request CreateActionRequest
   * @return CreateActionResponse
   */
  async createAction(request: CreateActionRequest): Promise<CreateActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createActionWithOptions(request, runtime);
  }

  /**
   * @summary 创建一个公共参数。
   *
   * @param request CreatePublicParameterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePublicParameterResponse
   */
  async createPublicParameterWithOptions(request: CreatePublicParameterRequest, runtime: $Util.RuntimeOptions): Promise<CreatePublicParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.constraints)) {
      query["Constraints"] = request.constraints;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parameterType)) {
      query["ParameterType"] = request.parameterType;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePublicParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePublicParameterResponse>(await this.callApi(params, req, runtime), new CreatePublicParameterResponse({}));
  }

  /**
   * @summary 创建一个公共参数。
   *
   * @param request CreatePublicParameterRequest
   * @return CreatePublicParameterResponse
   */
  async createPublicParameter(request: CreatePublicParameterRequest): Promise<CreatePublicParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPublicParameterWithOptions(request, runtime);
  }

  /**
   * @param request CreatePublicPatchBaselineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePublicPatchBaselineResponse
   */
  async createPublicPatchBaselineWithOptions(request: CreatePublicPatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<CreatePublicPatchBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.approvalRules)) {
      query["ApprovalRules"] = request.approvalRules;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.operationSystem)) {
      query["OperationSystem"] = request.operationSystem;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePublicPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePublicPatchBaselineResponse>(await this.callApi(params, req, runtime), new CreatePublicPatchBaselineResponse({}));
  }

  /**
   * @param request CreatePublicPatchBaselineRequest
   * @return CreatePublicPatchBaselineResponse
   */
  async createPublicPatchBaseline(request: CreatePublicPatchBaselineRequest): Promise<CreatePublicPatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPublicPatchBaselineWithOptions(request, runtime);
  }

  /**
   * @param request CreatePublicTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return CreatePublicTemplateResponse
   */
  async createPublicTemplateWithOptions(request: CreatePublicTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreatePublicTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.isExample)) {
      query["IsExample"] = request.isExample;
    }

    if (!Util.isUnset(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!Util.isUnset(request.publisher)) {
      query["Publisher"] = request.publisher;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreatePublicTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreatePublicTemplateResponse>(await this.callApi(params, req, runtime), new CreatePublicTemplateResponse({}));
  }

  /**
   * @param request CreatePublicTemplateRequest
   * @return CreatePublicTemplateResponse
   */
  async createPublicTemplate(request: CreatePublicTemplateRequest): Promise<CreatePublicTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createPublicTemplateWithOptions(request, runtime);
  }

  /**
   * @param request DeleteFailureMsgRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeleteFailureMsgResponse
   */
  async deleteFailureMsgWithOptions(request: DeleteFailureMsgRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFailureMsgResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.operation)) {
      query["Operation"] = request.operation;
    }

    if (!Util.isUnset(request.requestFingerprint)) {
      query["RequestFingerprint"] = request.requestFingerprint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFailureMsg",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFailureMsgResponse>(await this.callApi(params, req, runtime), new DeleteFailureMsgResponse({}));
  }

  /**
   * @param request DeleteFailureMsgRequest
   * @return DeleteFailureMsgResponse
   */
  async deleteFailureMsg(request: DeleteFailureMsgRequest): Promise<DeleteFailureMsgResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFailureMsgWithOptions(request, runtime);
  }

  /**
   * @summary 删除公共参数。
   *
   * @param request DeletePublicParameterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePublicParameterResponse
   */
  async deletePublicParameterWithOptions(request: DeletePublicParameterRequest, runtime: $Util.RuntimeOptions): Promise<DeletePublicParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePublicParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePublicParameterResponse>(await this.callApi(params, req, runtime), new DeletePublicParameterResponse({}));
  }

  /**
   * @summary 删除公共参数。
   *
   * @param request DeletePublicParameterRequest
   * @return DeletePublicParameterResponse
   */
  async deletePublicParameter(request: DeletePublicParameterRequest): Promise<DeletePublicParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePublicParameterWithOptions(request, runtime);
  }

  /**
   * @param request DeletePublicPatchBaselineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePublicPatchBaselineResponse
   */
  async deletePublicPatchBaselineWithOptions(request: DeletePublicPatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<DeletePublicPatchBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePublicPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePublicPatchBaselineResponse>(await this.callApi(params, req, runtime), new DeletePublicPatchBaselineResponse({}));
  }

  /**
   * @param request DeletePublicPatchBaselineRequest
   * @return DeletePublicPatchBaselineResponse
   */
  async deletePublicPatchBaseline(request: DeletePublicPatchBaselineRequest): Promise<DeletePublicPatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePublicPatchBaselineWithOptions(request, runtime);
  }

  /**
   * @param request DeletePublicTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DeletePublicTemplateResponse
   */
  async deletePublicTemplateWithOptions(request: DeletePublicTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DeletePublicTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeletePublicTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeletePublicTemplateResponse>(await this.callApi(params, req, runtime), new DeletePublicTemplateResponse({}));
  }

  /**
   * @param request DeletePublicTemplateRequest
   * @return DeletePublicTemplateResponse
   */
  async deletePublicTemplate(request: DeletePublicTemplateRequest): Promise<DeletePublicTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deletePublicTemplateWithOptions(request, runtime);
  }

  /**
   * @param request DoCheckResourceRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return DoCheckResourceResponse
   */
  async doCheckResourceWithOptions(request: DoCheckResourceRequest, runtime: $Util.RuntimeOptions): Promise<DoCheckResourceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.bid)) {
      query["bid"] = request.bid;
    }

    if (!Util.isUnset(request.country)) {
      query["country"] = request.country;
    }

    if (!Util.isUnset(request.gmtWakeup)) {
      query["gmtWakeup"] = request.gmtWakeup;
    }

    if (!Util.isUnset(request.hid)) {
      query["hid"] = request.hid;
    }

    if (!Util.isUnset(request.interrupt)) {
      query["interrupt"] = request.interrupt;
    }

    if (!Util.isUnset(request.invoker)) {
      query["invoker"] = request.invoker;
    }

    if (!Util.isUnset(request.level)) {
      query["level"] = request.level;
    }

    if (!Util.isUnset(request.message)) {
      query["message"] = request.message;
    }

    if (!Util.isUnset(request.pk)) {
      query["pk"] = request.pk;
    }

    if (!Util.isUnset(request.prompt)) {
      query["prompt"] = request.prompt;
    }

    if (!Util.isUnset(request.success)) {
      query["success"] = request.success;
    }

    if (!Util.isUnset(request.taskExtraData)) {
      query["taskExtraData"] = request.taskExtraData;
    }

    if (!Util.isUnset(request.taskIdentifier)) {
      query["taskIdentifier"] = request.taskIdentifier;
    }

    if (!Util.isUnset(request.url)) {
      query["url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DoCheckResource",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DoCheckResourceResponse>(await this.callApi(params, req, runtime), new DoCheckResourceResponse({}));
  }

  /**
   * @param request DoCheckResourceRequest
   * @return DoCheckResourceResponse
   */
  async doCheckResource(request: DoCheckResourceRequest): Promise<DoCheckResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.doCheckResourceWithOptions(request, runtime);
  }

  /**
   * @summary 获取action的详细信息
   *
   * @param request GetActionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetActionResponse
   */
  async getActionWithOptions(request: GetActionRequest, runtime: $Util.RuntimeOptions): Promise<GetActionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAction",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetActionResponse>(await this.callApi(params, req, runtime), new GetActionResponse({}));
  }

  /**
   * @summary 获取action的详细信息
   *
   * @param request GetActionRequest
   * @return GetActionResponse
   */
  async getAction(request: GetActionRequest): Promise<GetActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getActionWithOptions(request, runtime);
  }

  /**
   * @param request GetFlowControlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetFlowControlResponse
   */
  async getFlowControlWithOptions(request: GetFlowControlRequest, runtime: $Util.RuntimeOptions): Promise<GetFlowControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.api)) {
      query["Api"] = request.api;
    }

    if (!Util.isUnset(request.service)) {
      query["Service"] = request.service;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFlowControl",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFlowControlResponse>(await this.callApi(params, req, runtime), new GetFlowControlResponse({}));
  }

  /**
   * @param request GetFlowControlRequest
   * @return GetFlowControlResponse
   */
  async getFlowControl(request: GetFlowControlRequest): Promise<GetFlowControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFlowControlWithOptions(request, runtime);
  }

  /**
   * @summary 获取一个公共参数，包括参数值。
   *
   * @param request GetPublicParameterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPublicParameterResponse
   */
  async getPublicParameterWithOptions(request: GetPublicParameterRequest, runtime: $Util.RuntimeOptions): Promise<GetPublicParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.parameterVersion)) {
      query["ParameterVersion"] = request.parameterVersion;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPublicParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPublicParameterResponse>(await this.callApi(params, req, runtime), new GetPublicParameterResponse({}));
  }

  /**
   * @summary 获取一个公共参数，包括参数值。
   *
   * @param request GetPublicParameterRequest
   * @return GetPublicParameterResponse
   */
  async getPublicParameter(request: GetPublicParameterRequest): Promise<GetPublicParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicParameterWithOptions(request, runtime);
  }

  /**
   * @param request GetPublicPatchBaselineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPublicPatchBaselineResponse
   */
  async getPublicPatchBaselineWithOptions(request: GetPublicPatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<GetPublicPatchBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPublicPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPublicPatchBaselineResponse>(await this.callApi(params, req, runtime), new GetPublicPatchBaselineResponse({}));
  }

  /**
   * @param request GetPublicPatchBaselineRequest
   * @return GetPublicPatchBaselineResponse
   */
  async getPublicPatchBaseline(request: GetPublicPatchBaselineRequest): Promise<GetPublicPatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicPatchBaselineWithOptions(request, runtime);
  }

  /**
   * @param request GetPublicTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetPublicTemplateResponse
   */
  async getPublicTemplateWithOptions(request: GetPublicTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetPublicTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPublicTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPublicTemplateResponse>(await this.callApi(params, req, runtime), new GetPublicTemplateResponse({}));
  }

  /**
   * @param request GetPublicTemplateRequest
   * @return GetPublicTemplateResponse
   */
  async getPublicTemplate(request: GetPublicTemplateRequest): Promise<GetPublicTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPublicTemplateWithOptions(request, runtime);
  }

  /**
   * @param request GetQuotaRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetQuotaResponse
   */
  async getQuotaWithOptions(request: GetQuotaRequest, runtime: $Util.RuntimeOptions): Promise<GetQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.quotaName)) {
      query["QuotaName"] = request.quotaName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQuota",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQuotaResponse>(await this.callApi(params, req, runtime), new GetQuotaResponse({}));
  }

  /**
   * @param request GetQuotaRequest
   * @return GetQuotaResponse
   */
  async getQuota(request: GetQuotaRequest): Promise<GetQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQuotaWithOptions(request, runtime);
  }

  /**
   * @param request GetUserExecutionTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUserExecutionTemplateResponse
   */
  async getUserExecutionTemplateWithOptions(request: GetUserExecutionTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetUserExecutionTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserExecutionTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserExecutionTemplateResponse>(await this.callApi(params, req, runtime), new GetUserExecutionTemplateResponse({}));
  }

  /**
   * @param request GetUserExecutionTemplateRequest
   * @return GetUserExecutionTemplateResponse
   */
  async getUserExecutionTemplate(request: GetUserExecutionTemplateRequest): Promise<GetUserExecutionTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserExecutionTemplateWithOptions(request, runtime);
  }

  /**
   * @param request GetUserTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return GetUserTemplateResponse
   */
  async getUserTemplateWithOptions(request: GetUserTemplateRequest, runtime: $Util.RuntimeOptions): Promise<GetUserTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateVersion)) {
      query["TemplateVersion"] = request.templateVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetUserTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetUserTemplateResponse>(await this.callApi(params, req, runtime), new GetUserTemplateResponse({}));
  }

  /**
   * @param request GetUserTemplateRequest
   * @return GetUserTemplateResponse
   */
  async getUserTemplate(request: GetUserTemplateRequest): Promise<GetUserTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getUserTemplateWithOptions(request, runtime);
  }

  /**
   * @param request ListActionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListActionsResponse
   */
  async listActionsWithOptions(request: ListActionsRequest, runtime: $Util.RuntimeOptions): Promise<ListActionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.OOSActionName)) {
      query["OOSActionName"] = request.OOSActionName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListActions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListActionsResponse>(await this.callApi(params, req, runtime), new ListActionsResponse({}));
  }

  /**
   * @param request ListActionsRequest
   * @return ListActionsResponse
   */
  async listActions(request: ListActionsRequest): Promise<ListActionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listActionsWithOptions(request, runtime);
  }

  /**
   * @param request ListDefaultQuotaRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListDefaultQuotaResponse
   */
  async listDefaultQuotaWithOptions(runtime: $Util.RuntimeOptions): Promise<ListDefaultQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListDefaultQuota",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDefaultQuotaResponse>(await this.callApi(params, req, runtime), new ListDefaultQuotaResponse({}));
  }

  /**
   * @return ListDefaultQuotaResponse
   */
  async listDefaultQuota(): Promise<ListDefaultQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDefaultQuotaWithOptions(runtime);
  }

  /**
   * @param request ListFailureMsgsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListFailureMsgsResponse
   */
  async listFailureMsgsWithOptions(request: ListFailureMsgsRequest, runtime: $Util.RuntimeOptions): Promise<ListFailureMsgsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.requestFingerprint)) {
      query["RequestFingerprint"] = request.requestFingerprint;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFailureMsgs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFailureMsgsResponse>(await this.callApi(params, req, runtime), new ListFailureMsgsResponse({}));
  }

  /**
   * @param request ListFailureMsgsRequest
   * @return ListFailureMsgsResponse
   */
  async listFailureMsgs(request: ListFailureMsgsRequest): Promise<ListFailureMsgsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFailureMsgsWithOptions(request, runtime);
  }

  /**
   * @param request ListOOSLogsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListOOSLogsResponse
   */
  async listOOSLogsWithOptions(request: ListOOSLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListOOSLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.requestFingerprint)) {
      query["RequestFingerprint"] = request.requestFingerprint;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOOSLogs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOOSLogsResponse>(await this.callApi(params, req, runtime), new ListOOSLogsResponse({}));
  }

  /**
   * @param request ListOOSLogsRequest
   * @return ListOOSLogsResponse
   */
  async listOOSLogs(request: ListOOSLogsRequest): Promise<ListOOSLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOOSLogsWithOptions(request, runtime);
  }

  /**
   * @summary 查询公共参数。支持多种查询
   *
   * @param request ListPublicParametersRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPublicParametersResponse
   */
  async listPublicParametersWithOptions(request: ListPublicParametersRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicParametersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.parameterType)) {
      query["ParameterType"] = request.parameterType;
    }

    if (!Util.isUnset(request.path)) {
      query["Path"] = request.path;
    }

    if (!Util.isUnset(request.recursive)) {
      query["Recursive"] = request.recursive;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublicParameters",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublicParametersResponse>(await this.callApi(params, req, runtime), new ListPublicParametersResponse({}));
  }

  /**
   * @summary 查询公共参数。支持多种查询
   *
   * @param request ListPublicParametersRequest
   * @return ListPublicParametersResponse
   */
  async listPublicParameters(request: ListPublicParametersRequest): Promise<ListPublicParametersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicParametersWithOptions(request, runtime);
  }

  /**
   * @param request ListPublicPatchBaselinesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPublicPatchBaselinesResponse
   */
  async listPublicPatchBaselinesWithOptions(request: ListPublicPatchBaselinesRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicPatchBaselinesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.operationSystem)) {
      query["OperationSystem"] = request.operationSystem;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublicPatchBaselines",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublicPatchBaselinesResponse>(await this.callApi(params, req, runtime), new ListPublicPatchBaselinesResponse({}));
  }

  /**
   * @param request ListPublicPatchBaselinesRequest
   * @return ListPublicPatchBaselinesResponse
   */
  async listPublicPatchBaselines(request: ListPublicPatchBaselinesRequest): Promise<ListPublicPatchBaselinesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicPatchBaselinesWithOptions(request, runtime);
  }

  /**
   * @param request ListPublicTemplateRegistrationsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPublicTemplateRegistrationsResponse
   */
  async listPublicTemplateRegistrationsWithOptions(request: ListPublicTemplateRegistrationsRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicTemplateRegistrationsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.registrationId)) {
      query["RegistrationId"] = request.registrationId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublicTemplateRegistrations",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublicTemplateRegistrationsResponse>(await this.callApi(params, req, runtime), new ListPublicTemplateRegistrationsResponse({}));
  }

  /**
   * @param request ListPublicTemplateRegistrationsRequest
   * @return ListPublicTemplateRegistrationsResponse
   */
  async listPublicTemplateRegistrations(request: ListPublicTemplateRegistrationsRequest): Promise<ListPublicTemplateRegistrationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicTemplateRegistrationsWithOptions(request, runtime);
  }

  /**
   * @param request ListPublicTemplatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListPublicTemplatesResponse
   */
  async listPublicTemplatesWithOptions(request: ListPublicTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListPublicTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.createdBy)) {
      query["CreatedBy"] = request.createdBy;
    }

    if (!Util.isUnset(request.createdDateAfter)) {
      query["CreatedDateAfter"] = request.createdDateAfter;
    }

    if (!Util.isUnset(request.createdDateBefore)) {
      query["CreatedDateBefore"] = request.createdDateBefore;
    }

    if (!Util.isUnset(request.isExample)) {
      query["IsExample"] = request.isExample;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.templateFormat)) {
      query["TemplateFormat"] = request.templateFormat;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPublicTemplates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPublicTemplatesResponse>(await this.callApi(params, req, runtime), new ListPublicTemplatesResponse({}));
  }

  /**
   * @param request ListPublicTemplatesRequest
   * @return ListPublicTemplatesResponse
   */
  async listPublicTemplates(request: ListPublicTemplatesRequest): Promise<ListPublicTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPublicTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request ListUserExecutionLogsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUserExecutionLogsResponse
   */
  async listUserExecutionLogsWithOptions(request: ListUserExecutionLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserExecutionLogsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserExecutionLogs",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserExecutionLogsResponse>(await this.callApi(params, req, runtime), new ListUserExecutionLogsResponse({}));
  }

  /**
   * @param request ListUserExecutionLogsRequest
   * @return ListUserExecutionLogsResponse
   */
  async listUserExecutionLogs(request: ListUserExecutionLogsRequest): Promise<ListUserExecutionLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserExecutionLogsWithOptions(request, runtime);
  }

  /**
   * @param request ListUserExecutionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUserExecutionsResponse
   */
  async listUserExecutionsWithOptions(request: ListUserExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserExecutionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.endDateAfter)) {
      query["EndDateAfter"] = request.endDateAfter;
    }

    if (!Util.isUnset(request.endDateBefore)) {
      query["EndDateBefore"] = request.endDateBefore;
    }

    if (!Util.isUnset(request.executedBy)) {
      query["ExecutedBy"] = request.executedBy;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.includeChildExecution)) {
      query["IncludeChildExecution"] = request.includeChildExecution;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.parentExecutionId)) {
      query["ParentExecutionId"] = request.parentExecutionId;
    }

    if (!Util.isUnset(request.ramRole)) {
      query["RamRole"] = request.ramRole;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startDateAfter)) {
      query["StartDateAfter"] = request.startDateAfter;
    }

    if (!Util.isUnset(request.startDateBefore)) {
      query["StartDateBefore"] = request.startDateBefore;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserExecutionsResponse>(await this.callApi(params, req, runtime), new ListUserExecutionsResponse({}));
  }

  /**
   * @param request ListUserExecutionsRequest
   * @return ListUserExecutionsResponse
   */
  async listUserExecutions(request: ListUserExecutionsRequest): Promise<ListUserExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserExecutionsWithOptions(request, runtime);
  }

  /**
   * @param request ListUserInstancePatchStatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUserInstancePatchStatesResponse
   */
  async listUserInstancePatchStatesWithOptions(request: ListUserInstancePatchStatesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserInstancePatchStatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserInstancePatchStates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserInstancePatchStatesResponse>(await this.callApi(params, req, runtime), new ListUserInstancePatchStatesResponse({}));
  }

  /**
   * @param request ListUserInstancePatchStatesRequest
   * @return ListUserInstancePatchStatesResponse
   */
  async listUserInstancePatchStates(request: ListUserInstancePatchStatesRequest): Promise<ListUserInstancePatchStatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserInstancePatchStatesWithOptions(request, runtime);
  }

  /**
   * @param request ListUserInstancePatchesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUserInstancePatchesResponse
   */
  async listUserInstancePatchesWithOptions(request: ListUserInstancePatchesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserInstancePatchesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserInstancePatches",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserInstancePatchesResponse>(await this.callApi(params, req, runtime), new ListUserInstancePatchesResponse({}));
  }

  /**
   * @param request ListUserInstancePatchesRequest
   * @return ListUserInstancePatchesResponse
   */
  async listUserInstancePatches(request: ListUserInstancePatchesRequest): Promise<ListUserInstancePatchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserInstancePatchesWithOptions(request, runtime);
  }

  /**
   * @param request ListUserInventoryEntriesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUserInventoryEntriesResponse
   */
  async listUserInventoryEntriesWithOptions(request: ListUserInventoryEntriesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserInventoryEntriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.typeName)) {
      query["TypeName"] = request.typeName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserInventoryEntries",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserInventoryEntriesResponse>(await this.callApi(params, req, runtime), new ListUserInventoryEntriesResponse({}));
  }

  /**
   * @param request ListUserInventoryEntriesRequest
   * @return ListUserInventoryEntriesResponse
   */
  async listUserInventoryEntries(request: ListUserInventoryEntriesRequest): Promise<ListUserInventoryEntriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserInventoryEntriesWithOptions(request, runtime);
  }

  /**
   * @param request ListUserTaskExecutionsRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUserTaskExecutionsResponse
   */
  async listUserTaskExecutionsWithOptions(request: ListUserTaskExecutionsRequest, runtime: $Util.RuntimeOptions): Promise<ListUserTaskExecutionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.endDateAfter)) {
      query["EndDateAfter"] = request.endDateAfter;
    }

    if (!Util.isUnset(request.endDateBefore)) {
      query["EndDateBefore"] = request.endDateBefore;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.includeChildTaskExecution)) {
      query["IncludeChildTaskExecution"] = request.includeChildTaskExecution;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.parentTaskExecutionId)) {
      query["ParentTaskExecutionId"] = request.parentTaskExecutionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.startDateAfter)) {
      query["StartDateAfter"] = request.startDateAfter;
    }

    if (!Util.isUnset(request.startDateBefore)) {
      query["StartDateBefore"] = request.startDateBefore;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.taskAction)) {
      query["TaskAction"] = request.taskAction;
    }

    if (!Util.isUnset(request.taskExecutionId)) {
      query["TaskExecutionId"] = request.taskExecutionId;
    }

    if (!Util.isUnset(request.taskName)) {
      query["TaskName"] = request.taskName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserTaskExecutions",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserTaskExecutionsResponse>(await this.callApi(params, req, runtime), new ListUserTaskExecutionsResponse({}));
  }

  /**
   * @param request ListUserTaskExecutionsRequest
   * @return ListUserTaskExecutionsResponse
   */
  async listUserTaskExecutions(request: ListUserTaskExecutionsRequest): Promise<ListUserTaskExecutionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserTaskExecutionsWithOptions(request, runtime);
  }

  /**
   * @param request ListUserTemplatesRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ListUserTemplatesResponse
   */
  async listUserTemplatesWithOptions(request: ListUserTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListUserTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.createdBy)) {
      query["CreatedBy"] = request.createdBy;
    }

    if (!Util.isUnset(request.createdDateAfter)) {
      query["CreatedDateAfter"] = request.createdDateAfter;
    }

    if (!Util.isUnset(request.createdDateBefore)) {
      query["CreatedDateBefore"] = request.createdDateBefore;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.shareType)) {
      query["ShareType"] = request.shareType;
    }

    if (!Util.isUnset(request.sortField)) {
      query["SortField"] = request.sortField;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.templateFormat)) {
      query["TemplateFormat"] = request.templateFormat;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUserTemplates",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUserTemplatesResponse>(await this.callApi(params, req, runtime), new ListUserTemplatesResponse({}));
  }

  /**
   * @param request ListUserTemplatesRequest
   * @return ListUserTemplatesResponse
   */
  async listUserTemplates(request: ListUserTemplatesRequest): Promise<ListUserTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUserTemplatesWithOptions(request, runtime);
  }

  /**
   * @param request ResetTimerTriggerExecutionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResetTimerTriggerExecutionResponse
   */
  async resetTimerTriggerExecutionWithOptions(request: ResetTimerTriggerExecutionRequest, runtime: $Util.RuntimeOptions): Promise<ResetTimerTriggerExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetTimerTriggerExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetTimerTriggerExecutionResponse>(await this.callApi(params, req, runtime), new ResetTimerTriggerExecutionResponse({}));
  }

  /**
   * @param request ResetTimerTriggerExecutionRequest
   * @return ResetTimerTriggerExecutionResponse
   */
  async resetTimerTriggerExecution(request: ResetTimerTriggerExecutionRequest): Promise<ResetTimerTriggerExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetTimerTriggerExecutionWithOptions(request, runtime);
  }

  /**
   * @param request ResetUserExecutionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ResetUserExecutionResponse
   */
  async resetUserExecutionWithOptions(request: ResetUserExecutionRequest, runtime: $Util.RuntimeOptions): Promise<ResetUserExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetUserExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetUserExecutionResponse>(await this.callApi(params, req, runtime), new ResetUserExecutionResponse({}));
  }

  /**
   * @param request ResetUserExecutionRequest
   * @return ResetUserExecutionResponse
   */
  async resetUserExecution(request: ResetUserExecutionRequest): Promise<ResetUserExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetUserExecutionWithOptions(request, runtime);
  }

  /**
   * @param request SetFlowControlRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetFlowControlResponse
   */
  async setFlowControlWithOptions(request: SetFlowControlRequest, runtime: $Util.RuntimeOptions): Promise<SetFlowControlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.api)) {
      query["Api"] = request.api;
    }

    if (!Util.isUnset(request.service)) {
      query["Service"] = request.service;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetFlowControl",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetFlowControlResponse>(await this.callApi(params, req, runtime), new SetFlowControlResponse({}));
  }

  /**
   * @param request SetFlowControlRequest
   * @return SetFlowControlResponse
   */
  async setFlowControl(request: SetFlowControlRequest): Promise<SetFlowControlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setFlowControlWithOptions(request, runtime);
  }

  /**
   * @param request SetQuotaRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return SetQuotaResponse
   */
  async setQuotaWithOptions(request: SetQuotaRequest, runtime: $Util.RuntimeOptions): Promise<SetQuotaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.quotaName)) {
      query["QuotaName"] = request.quotaName;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.uid)) {
      query["Uid"] = request.uid;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetQuota",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetQuotaResponse>(await this.callApi(params, req, runtime), new SetQuotaResponse({}));
  }

  /**
   * @param request SetQuotaRequest
   * @return SetQuotaResponse
   */
  async setQuota(request: SetQuotaRequest): Promise<SetQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setQuotaWithOptions(request, runtime);
  }

  /**
   * @param request TerminateUserExecutionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return TerminateUserExecutionResponse
   */
  async terminateUserExecutionWithOptions(request: TerminateUserExecutionRequest, runtime: $Util.RuntimeOptions): Promise<TerminateUserExecutionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.aliUid)) {
      query["AliUid"] = request.aliUid;
    }

    if (!Util.isUnset(request.executionId)) {
      query["ExecutionId"] = request.executionId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TerminateUserExecution",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TerminateUserExecutionResponse>(await this.callApi(params, req, runtime), new TerminateUserExecutionResponse({}));
  }

  /**
   * @param request TerminateUserExecutionRequest
   * @return TerminateUserExecutionResponse
   */
  async terminateUserExecution(request: TerminateUserExecutionRequest): Promise<TerminateUserExecutionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.terminateUserExecutionWithOptions(request, runtime);
  }

  /**
   * @param request UpdateActionRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdateActionResponse
   */
  async updateActionWithOptions(request: UpdateActionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateActionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionName)) {
      query["ActionName"] = request.actionName;
    }

    if (!Util.isUnset(request.actionType)) {
      query["ActionType"] = request.actionType;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAction",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateActionResponse>(await this.callApi(params, req, runtime), new UpdateActionResponse({}));
  }

  /**
   * @param request UpdateActionRequest
   * @return UpdateActionResponse
   */
  async updateAction(request: UpdateActionRequest): Promise<UpdateActionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateActionWithOptions(request, runtime);
  }

  /**
   * @summary 更新一个已存在的公共参数。
   *
   * @param request UpdatePublicParameterRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdatePublicParameterResponse
   */
  async updatePublicParameterWithOptions(request: UpdatePublicParameterRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePublicParameterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.value)) {
      query["Value"] = request.value;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePublicParameter",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePublicParameterResponse>(await this.callApi(params, req, runtime), new UpdatePublicParameterResponse({}));
  }

  /**
   * @summary 更新一个已存在的公共参数。
   *
   * @param request UpdatePublicParameterRequest
   * @return UpdatePublicParameterResponse
   */
  async updatePublicParameter(request: UpdatePublicParameterRequest): Promise<UpdatePublicParameterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePublicParameterWithOptions(request, runtime);
  }

  /**
   * @param request UpdatePublicPatchBaselineRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdatePublicPatchBaselineResponse
   */
  async updatePublicPatchBaselineWithOptions(request: UpdatePublicPatchBaselineRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePublicPatchBaselineResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.approvalRules)) {
      query["ApprovalRules"] = request.approvalRules;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePublicPatchBaseline",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePublicPatchBaselineResponse>(await this.callApi(params, req, runtime), new UpdatePublicPatchBaselineResponse({}));
  }

  /**
   * @param request UpdatePublicPatchBaselineRequest
   * @return UpdatePublicPatchBaselineResponse
   */
  async updatePublicPatchBaseline(request: UpdatePublicPatchBaselineRequest): Promise<UpdatePublicPatchBaselineResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePublicPatchBaselineWithOptions(request, runtime);
  }

  /**
   * @param request UpdatePublicTemplateRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return UpdatePublicTemplateResponse
   */
  async updatePublicTemplateWithOptions(request: UpdatePublicTemplateRequest, runtime: $Util.RuntimeOptions): Promise<UpdatePublicTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.category)) {
      query["Category"] = request.category;
    }

    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.popularity)) {
      query["Popularity"] = request.popularity;
    }

    if (!Util.isUnset(request.publisher)) {
      query["Publisher"] = request.publisher;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdatePublicTemplate",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdatePublicTemplateResponse>(await this.callApi(params, req, runtime), new UpdatePublicTemplateResponse({}));
  }

  /**
   * @param request UpdatePublicTemplateRequest
   * @return UpdatePublicTemplateResponse
   */
  async updatePublicTemplate(request: UpdatePublicTemplateRequest): Promise<UpdatePublicTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updatePublicTemplateWithOptions(request, runtime);
  }

  /**
   * @param request ValidatePublicTemplateContentRequest
   * @param runtime runtime options for this request RuntimeOptions
   * @return ValidatePublicTemplateContentResponse
   */
  async validatePublicTemplateContentWithOptions(request: ValidatePublicTemplateContentRequest, runtime: $Util.RuntimeOptions): Promise<ValidatePublicTemplateContentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.templateName)) {
      query["TemplateName"] = request.templateName;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ValidatePublicTemplateContent",
      version: "2019-06-01",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ValidatePublicTemplateContentResponse>(await this.callApi(params, req, runtime), new ValidatePublicTemplateContentResponse({}));
  }

  /**
   * @param request ValidatePublicTemplateContentRequest
   * @return ValidatePublicTemplateContentResponse
   */
  async validatePublicTemplateContent(request: ValidatePublicTemplateContentRequest): Promise<ValidatePublicTemplateContentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.validatePublicTemplateContentWithOptions(request, runtime);
  }

}
