// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AbolishDeploymentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1606087c-9ac4-43f0-83a8-0b5ced21XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishDeploymentResponseBody extends $tea.Model {
  /**
   * @example
   * 55D786C9-DD57-524D-884C-C5239278XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AbolishDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AbolishDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AbolishDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentRequest extends $tea.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  objectIds?: string[];
  /**
   * @remarks
   * 项目Id
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Online
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      objectIds: 'ObjectIds',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      objectIds: { 'type': 'array', 'itemType': 'string' },
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentShrinkRequest extends $tea.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  objectIdsShrink?: string;
  /**
   * @remarks
   * 项目Id
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Online
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      objectIdsShrink: 'ObjectIds',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      objectIdsShrink: 'string',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDeploymentResponseBody extends $tea.Model {
  /**
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
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

export class CreateDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponseBody extends $tea.Model {
  /**
   * @example
   * 580667964888595XXXX
   */
  id?: string;
  /**
   * @example
   * AE49C88D-5BEE-5ADD-8B8C-C4BBC0D7XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
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

export class CreateFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeRequest extends $tea.Model {
  /**
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  containerId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DATAWORKS_PROJECT
   */
  scene?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      projectId: 'ProjectId',
      scene: 'Scene',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      projectId: 'string',
      scene: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodeResponseBody extends $tea.Model {
  /**
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
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

export class CreateNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequest extends $tea.Model {
  /**
   * @remarks
   * 资源文件的项目id
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @example
   * A5B97987-66EA-5563-9599-A2752292XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
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

export class CreateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @example
   * 0EF298E5-0940-5AC7-9CB0-65025070XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
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

export class CreateWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponseBody extends $tea.Model {
  /**
   * @example
   * 88198F19-A36B-52A9-AE44-4518A688XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeResponseBody extends $tea.Model {
  /**
   * @example
   * A1E54497-5122-505E-91C6-BAC14980XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 88198F19-A36B-52A9-AE44-4518A688XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * B17730C0-D959-548A-AE23-E754177CXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDeploymentStageRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDeploymentStageResponseBody extends $tea.Model {
  /**
   * @example
   * AFBB799F-8578-51C5-A766-E922EDB8XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExecDeploymentStageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ExecDeploymentStageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExecDeploymentStageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBody extends $tea.Model {
  pipeline?: GetDeploymentResponseBodyPipeline;
  /**
   * @example
   * 08468352-032C-5262-AEDC-68C9FA05XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipeline: 'Pipeline',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipeline: GetDeploymentResponseBodyPipeline,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDeploymentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDeploymentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponseBody extends $tea.Model {
  function?: GetFunctionResponseBodyFunction;
  /**
   * @example
   * 6CF95929-6D12-5A88-8CC3-4B2F4C2EXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      function: 'Function',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      function: GetFunctionResponseBodyFunction,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBody extends $tea.Model {
  node?: GetNodeResponseBodyNode;
  /**
   * @example
   * 22C97E95-F023-56B5-8852-B1A77A17XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: GetNodeResponseBodyNode,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBody extends $tea.Model {
  /**
   * @example
   * E871F6C0-2EFF-5790-A00D-C57543EEXXXX
   */
  requestId?: string;
  resource?: GetResourceResponseBodyResource;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resource: GetResourceResponseBodyResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * F2BDD628-8A21-5BD1-B930-1A2D5989XXXX
   */
  requestId?: string;
  workflowDefinition?: GetWorkflowDefinitionResponseBodyWorkflowDefinition;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workflowDefinition: 'WorkflowDefinition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workflowDefinition: GetWorkflowDefinitionResponseBodyWorkflowDefinition,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsRequest extends $tea.Model {
  /**
   * @example
   * 110755000425XXXX
   */
  creator?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBody extends $tea.Model {
  pagingInfo?: ListDeploymentsResponseBodyPagingInfo;
  /**
   * @example
   * 7C352CB7-CD88-50CF-9D0D-E81BDF02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDeploymentsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDeploymentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDeploymentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsRequest extends $tea.Model {
  /**
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  /**
   * @example
   * MATH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBody extends $tea.Model {
  pagingInfo?: ListFunctionsResponseBodyPagingInfo;
  /**
   * @example
   * 89FB2BF0-EB00-5D03-9C34-05931001XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListFunctionsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFunctionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListFunctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBody extends $tea.Model {
  pagingInfo?: ListNodeDependenciesResponseBodyPagingInfo;
  /**
   * @example
   * 204EAF68-CCE3-5112-8DA0-E7A60F02XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListNodeDependenciesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodeDependenciesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodeDependenciesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  /**
   * @example
   * 860438872620113XXXX
   */
  containerId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  /**
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @example
   * Normal
   */
  rerurrence?: string;
  /**
   * @example
   * DATAWORKS_PROJECT
   */
  scene?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      rerunMode: 'RerunMode',
      rerurrence: 'Rerurrence',
      scene: 'Scene',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      rerunMode: 'string',
      rerurrence: 'string',
      scene: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  pagingInfo?: ListNodesResponseBodyPagingInfo;
  /**
   * @example
   * 2197B9C4-39CE-55EA-8EEA-FDBAE52DXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListNodesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequest extends $tea.Model {
  /**
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  projectId?: string;
  /**
   * @example
   * python
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $tea.Model {
  pagingInfo?: ListResourcesResponseBodyPagingInfo;
  /**
   * @example
   * 99EBE7CF-69C0-5089-BE3E-79563C31XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListResourcesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
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

export class ListWorkflowDefinitionsRequest extends $tea.Model {
  /**
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @example
   * CycleWorkflow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBody extends $tea.Model {
  pagingInfo?: ListWorkflowDefinitionsResponseBodyPagingInfo;
  /**
   * @example
   * 8C3ED0C5-ABAB-55E1-854B-DAC02B11XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListWorkflowDefinitionsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListWorkflowDefinitionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListWorkflowDefinitionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFunctionResponseBody extends $tea.Model {
  /**
   * @example
   * 48C0E2F0-52BA-5888-BDFA-28F1B9AFXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveNodeResponseBody extends $tea.Model {
  /**
   * @example
   * C99E2BE6-9DEA-5C2E-8F51-1DDCFEADXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceResponseBody extends $tea.Model {
  /**
   * @example
   * F332BED4-DD73-5972-A9C2-642BA6CFXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * 05ADAF4F-7709-5FB1-B606-3513483FXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFunctionResponseBody extends $tea.Model {
  /**
   * @example
   * 1ED4C97F-BA2A-57C5-BA7C-8853627EXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameNodeResponseBody extends $tea.Model {
  /**
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA81XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA8XXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      projectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * 975BD43D-C421-595C-A29C-565A8AD5XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenameWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenameWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenameWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponseBody extends $tea.Model {
  /**
   * @example
   * 12123960-CB2C-5086-868E-C6C1D024XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeResponseBody extends $tea.Model {
  /**
   * @example
   * 99EBE7CF-69C0-5089-BE3E-79563C31XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponseBody extends $tea.Model {
  /**
   * @example
   * 4CDF7B72-020B-542A-8465-21CFFA81XXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDefinitionRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDefinitionResponseBody extends $tea.Model {
  /**
   * @example
   * 20BF7E80-668A-5620-8AD8-879B8FEAXXXX
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWorkflowDefinitionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateWorkflowDefinitionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateWorkflowDefinitionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBodyPipelineStages extends $tea.Model {
  /**
   * @remarks
   * 阶段代号
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * 阶段描述
   */
  description?: string;
  detail?: { [key: string]: any };
  /**
   * @remarks
   * 阶段信息
   */
  message?: string;
  /**
   * @remarks
   * 阶段名称
   */
  name?: string;
  /**
   * @remarks
   * 阶段状态
   * 
   * @example
   * INIT
   */
  status?: string;
  /**
   * @remarks
   * 步骤
   * 
   * @example
   * 1
   */
  step?: number;
  /**
   * @remarks
   * 阶段类型
   * 
   * @example
   * BUILD
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      detail: 'Detail',
      message: 'Message',
      name: 'Name',
      status: 'Status',
      step: 'Step',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      status: 'string',
      step: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDeploymentResponseBodyPipeline extends $tea.Model {
  /**
   * @remarks
   * 发布包创建时间戳
   * 
   * @example
   * 1724984066000
   */
  createTime?: number;
  /**
   * @remarks
   * 创建人
   * 
   * @example
   * 137946317766XXXX
   */
  creator?: string;
  /**
   * @remarks
   * 发布流程Id
   * 
   * @example
   * a7ef0634-20ec-4a7c-a214-54020f91XXXX
   */
  id?: string;
  message?: string;
  /**
   * @remarks
   * 修改时间
   * 
   * @example
   * 1724984066000
   */
  modifyTime?: number;
  /**
   * @example
   * 56160
   */
  projectId?: string;
  /**
   * @remarks
   * 步骤详情
   */
  stages?: GetDeploymentResponseBodyPipelineStages[];
  /**
   * @remarks
   * 发布流程状态
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      id: 'Id',
      message: 'Message',
      modifyTime: 'ModifyTime',
      projectId: 'ProjectId',
      stages: 'Stages',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      id: 'string',
      message: 'string',
      modifyTime: 'number',
      projectId: 'string',
      stages: { 'type': 'array', 'itemType': GetDeploymentResponseBodyPipelineStages },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponseBodyFunction extends $tea.Model {
  /**
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 1724506661000
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNodeResponseBodyNode extends $tea.Model {
  /**
   * @example
   * 1700539206000
   */
  createTime?: number;
  /**
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 1700539206000
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 196596664824XXXX
   */
  owner?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceResponseBodyResource extends $tea.Model {
  /**
   * @example
   * 1700539206000
   */
  createTime?: number;
  /**
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @example
   * 1700539206000
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkflowDefinitionResponseBodyWorkflowDefinition extends $tea.Model {
  /**
   * @example
   * 1708481905000
   */
  createTime?: number;
  /**
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @example
   * 1708481905000
   */
  modifyTime?: number;
  name?: string;
  /**
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 307XXX
   */
  projectId?: string;
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      spec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBodyPagingInfoDeploymentsStages extends $tea.Model {
  /**
   * @remarks
   * 阶段代号
   * 
   * @example
   * DEV_CHECK
   */
  code?: string;
  /**
   * @remarks
   * 阶段描述
   */
  description?: string;
  /**
   * @remarks
   * 阶段详细信息
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * 阶段信息
   */
  message?: string;
  /**
   * @remarks
   * 阶段名称
   */
  name?: string;
  /**
   * @remarks
   * 阶段状态
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * 步骤
   * 
   * @example
   * 1
   */
  step?: number;
  /**
   * @remarks
   * 阶段类型
   * 
   * @example
   * CHECK
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      description: 'Description',
      detail: 'Detail',
      message: 'Message',
      name: 'Name',
      status: 'Status',
      step: 'Step',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      message: 'string',
      name: 'string',
      status: 'string',
      step: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBodyPagingInfoDeployments extends $tea.Model {
  /**
   * @remarks
   * 发布包创建时间戳
   * 
   * @example
   * 1702736654000
   */
  createTime?: number;
  /**
   * @remarks
   * 创建人
   * 
   * @example
   * 110755000425XXXX
   */
  creator?: string;
  /**
   * @remarks
   * 发布流程Id
   * 
   * @example
   * ddf354a5-03df-48fc-94c1-cc973f79XXXX
   */
  id?: string;
  message?: string;
  /**
   * @remarks
   * 修改时间
   * 
   * @example
   * 1702736654000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 项目Id
   * 
   * @example
   * 44683
   */
  projectId?: string;
  /**
   * @remarks
   * 步骤详情
   */
  stages?: ListDeploymentsResponseBodyPagingInfoDeploymentsStages[];
  /**
   * @remarks
   * 发布流程状态
   * 
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      id: 'Id',
      message: 'Message',
      modifyTime: 'ModifyTime',
      projectId: 'ProjectId',
      stages: 'Stages',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      creator: 'string',
      id: 'string',
      message: 'string',
      modifyTime: 'number',
      projectId: 'string',
      stages: { 'type': 'array', 'itemType': ListDeploymentsResponseBodyPagingInfoDeploymentsStages },
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDeploymentsResponseBodyPagingInfo extends $tea.Model {
  deployments?: ListDeploymentsResponseBodyPagingInfoDeployments[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 2524
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      deployments: 'Deployments',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployments: { 'type': 'array', 'itemType': ListDeploymentsResponseBodyPagingInfoDeployments },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctionsDataSource extends $tea.Model {
  /**
   * @remarks
   * 数据源名称
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource extends $tea.Model {
  /**
   * @remarks
   * 运行时资源组Id
   * 
   * @example
   * S_resgrop_xxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
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

export class ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * 脚本所属类型
   * 
   * @example
   * ODPS_FUNCTION
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctionsScript extends $tea.Model {
  /**
   * @remarks
   * 脚本的id
   * 
   * @example
   * 652567824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * 脚本路径
   */
  path?: string;
  /**
   * @remarks
   * 脚本的运行时信息
   */
  runtime?: ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListFunctionsResponseBodyPagingInfoFunctionsScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfoFunctions extends $tea.Model {
  /**
   * @remarks
   * ARM集群资源文件列表
   * 
   * @example
   * xxx.jar,yyy.jar
   */
  armResource?: string;
  /**
   * @remarks
   * 函数实现类名
   * 
   * @example
   * com.demo.Main
   */
  className?: string;
  /**
   * @remarks
   * 命令描述
   * 
   * @example
   * testUdf(xx,yy)
   */
  commandDescription?: string;
  /**
   * @remarks
   * 代表创建时间的资源属性字段
   * 
   * @example
   * 1655953028000
   */
  createTime?: number;
  /**
   * @remarks
   * 函数注册到的数据源信息
   */
  dataSource?: ListFunctionsResponseBodyPagingInfoFunctionsDataSource;
  /**
   * @remarks
   * 数据库名，可选
   * 
   * @example
   * odps_first
   */
  databaseName?: string;
  /**
   * @remarks
   * 对funciotn的描述
   */
  description?: string;
  /**
   * @remarks
   * 嵌套函数代码内容
   * 
   * @example
   * print(\\"hello,world!\\")
   */
  embeddedCode?: string;
  /**
   * @remarks
   * 嵌套代码类型
   * 
   * @example
   * Python2
   */
  embeddedCodeType?: string;
  /**
   * @remarks
   * 嵌套资源类型
   * 
   * @example
   * File
   */
  embeddedResourceType?: string;
  /**
   * @remarks
   * 示例说明
   */
  exampleDescription?: string;
  /**
   * @remarks
   * 函数的实现代码
   * 
   * @example
   * xxx.jar,yyy.jar
   */
  fileResource?: string;
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * 580667964888595XXXX
   */
  id?: string;
  /**
   * @remarks
   * 修改时间
   * 
   * @example
   * 1655953028000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   */
  name?: string;
  /**
   * @remarks
   * 函数责任人
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * 命令描述
   */
  parameterDescription?: string;
  /**
   * @remarks
   * 项目Id
   * 
   * @example
   * 307XXX
   */
  projectId?: string;
  /**
   * @remarks
   * 返回值说明
   */
  returnValueDescription?: string;
  /**
   * @remarks
   * 运行时资源组信息
   */
  runtimeResource?: ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource;
  /**
   * @remarks
   * 工作流的脚本信息
   */
  script?: ListFunctionsResponseBodyPagingInfoFunctionsScript;
  /**
   * @remarks
   * 函数类型
   * 
   * @example
   * MATH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      armResource: 'ArmResource',
      className: 'ClassName',
      commandDescription: 'CommandDescription',
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      databaseName: 'DatabaseName',
      description: 'Description',
      embeddedCode: 'EmbeddedCode',
      embeddedCodeType: 'EmbeddedCodeType',
      embeddedResourceType: 'EmbeddedResourceType',
      exampleDescription: 'ExampleDescription',
      fileResource: 'FileResource',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      parameterDescription: 'ParameterDescription',
      projectId: 'ProjectId',
      returnValueDescription: 'ReturnValueDescription',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armResource: 'string',
      className: 'string',
      commandDescription: 'string',
      createTime: 'number',
      dataSource: ListFunctionsResponseBodyPagingInfoFunctionsDataSource,
      databaseName: 'string',
      description: 'string',
      embeddedCode: 'string',
      embeddedCodeType: 'string',
      embeddedResourceType: 'string',
      exampleDescription: 'string',
      fileResource: 'string',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      parameterDescription: 'string',
      projectId: 'string',
      returnValueDescription: 'string',
      runtimeResource: ListFunctionsResponseBodyPagingInfoFunctionsRuntimeResource,
      script: ListFunctionsResponseBodyPagingInfoFunctionsScript,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyPagingInfo extends $tea.Model {
  functions?: ListFunctionsResponseBodyPagingInfoFunctions[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 294
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      functions: 'Functions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': ListFunctionsResponseBodyPagingInfoFunctions },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesDataSource extends $tea.Model {
  /**
   * @remarks
   * 数据源名称
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 860438872620113XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables extends $tea.Model {
  /**
   * @remarks
   * 表id
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 860438872620113XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables extends $tea.Model {
  /**
   * @remarks
   * 制品类型
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * 变量id
   * 
   * @example
   * 543218872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * 变量名
   * 
   * @example
   * input
   */
  name?: string;
  /**
   * @remarks
   * 变量所属节点
   */
  node?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode;
  /**
   * @remarks
   * 范围
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * 类型
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * 变量值
   * 
   * @example
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesInputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出列表
   */
  nodeOutputs?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs[];
  /**
   * @remarks
   * 表列表
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables[];
  /**
   * @remarks
   * 变量列表
   */
  variables?: ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsTables },
      variables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesInputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 463497880880954XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables extends $tea.Model {
  /**
   * @remarks
   * 表id
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 463497880880954XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables extends $tea.Model {
  /**
   * @remarks
   * 制品类型
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * 变量id
   * 
   * @example
   * 543217824470354XXXX
   */
  id?: string;
  /**
   * @remarks
   * 变量名
   * 
   * @example
   * output
   */
  name?: string;
  /**
   * @remarks
   * 变量所属节点
   */
  node?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode;
  /**
   * @remarks
   * 范围
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * 类型
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * 变量值
   * 
   * @example
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出列表
   */
  nodeOutputs?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs[];
  /**
   * @remarks
   * 表列表
   */
  tables?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables[];
  /**
   * @remarks
   * 变量列表
   */
  variables?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsTables },
      variables: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesOutputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource extends $tea.Model {
  /**
   * @remarks
   * 资源组id
   * 
   * @example
   * S_res_group_XXXX_XXXX
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
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

export class ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * 脚本所属类型
   * 
   * @example
   * ODPS_SQL
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesScript extends $tea.Model {
  /**
   * @remarks
   * 脚本的id
   * 
   * @example
   * 853573334108680XXXX
   */
  id?: string;
  /**
   * @remarks
   * 脚本路径
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * 脚本的运行时信息
   */
  runtime?: ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListNodeDependenciesResponseBodyPagingInfoNodesScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesStrategy extends $tea.Model {
  /**
   * @remarks
   * 生成实例的模式
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * 重试时间间隔
   * 
   * @example
   * 180000
   */
  rerunInterval?: number;
  /**
   * @remarks
   * 允许重跑的模式
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * 重试次数
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * 超时时间
   * 
   * @example
   * 0
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      instanceMode: 'InstanceMode',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMode: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodesTags extends $tea.Model {
  /**
   * @remarks
   * 标签键
   * 
   * @example
   * null
   */
  key?: string;
  /**
   * @remarks
   * 标签值
   * 
   * @example
   * null
   */
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

export class ListNodeDependenciesResponseBodyPagingInfoNodesTrigger extends $tea.Model {
  /**
   * @remarks
   * 触发器的cron表达式
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * 结束时间，格式为yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * 触发器id
   * 
   * @example
   * 543680677872062XXXX
   */
  id?: string;
  /**
   * @remarks
   * 开始时间，格式为yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * 时区
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * 触发器类型
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
      timezone: 'Timezone',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      id: 'string',
      startTime: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfoNodes extends $tea.Model {
  /**
   * @remarks
   * 节点的创建时间
   * 
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @remarks
   * 数据源信息
   */
  dataSource?: ListNodeDependenciesResponseBodyPagingInfoNodesDataSource;
  /**
   * @remarks
   * 描述
   */
  description?: string;
  /**
   * @example
   * 723932906364267XXXX
   */
  id?: string;
  /**
   * @remarks
   * 节点输入
   */
  inputs?: ListNodeDependenciesResponseBodyPagingInfoNodesInputs;
  /**
   * @remarks
   * 属性修改时间
   * 
   * @example
   * 1724505917000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 节点名
   */
  name?: string;
  /**
   * @remarks
   * 节点输出
   */
  outputs?: ListNodeDependenciesResponseBodyPagingInfoNodesOutputs;
  /**
   * @remarks
   * 节点的责任人
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 65133
   */
  projectId?: string;
  /**
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * 资源组信息
   */
  runtimeResource?: ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource;
  /**
   * @remarks
   * 工作流的脚本信息
   */
  script?: ListNodeDependenciesResponseBodyPagingInfoNodesScript;
  /**
   * @remarks
   * 调度策略
   */
  strategy?: ListNodeDependenciesResponseBodyPagingInfoNodesStrategy;
  /**
   * @remarks
   * 标签信息
   */
  tags?: ListNodeDependenciesResponseBodyPagingInfoNodesTags[];
  /**
   * @remarks
   * 调度任务Id
   * 
   * @example
   * 580667964888595XXXX
   */
  taskId?: string;
  /**
   * @remarks
   * 触发器信息
   */
  trigger?: ListNodeDependenciesResponseBodyPagingInfoNodesTrigger;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      description: 'Description',
      id: 'Id',
      inputs: 'Inputs',
      modifyTime: 'ModifyTime',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      projectId: 'ProjectId',
      recurrence: 'Recurrence',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      strategy: 'Strategy',
      tags: 'Tags',
      taskId: 'TaskId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSource: ListNodeDependenciesResponseBodyPagingInfoNodesDataSource,
      description: 'string',
      id: 'string',
      inputs: ListNodeDependenciesResponseBodyPagingInfoNodesInputs,
      modifyTime: 'number',
      name: 'string',
      outputs: ListNodeDependenciesResponseBodyPagingInfoNodesOutputs,
      owner: 'string',
      projectId: 'string',
      recurrence: 'string',
      runtimeResource: ListNodeDependenciesResponseBodyPagingInfoNodesRuntimeResource,
      script: ListNodeDependenciesResponseBodyPagingInfoNodesScript,
      strategy: ListNodeDependenciesResponseBodyPagingInfoNodesStrategy,
      tags: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodesTags },
      taskId: 'string',
      trigger: ListNodeDependenciesResponseBodyPagingInfoNodesTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodeDependenciesResponseBodyPagingInfo extends $tea.Model {
  nodes?: ListNodeDependenciesResponseBodyPagingInfoNodes[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 90
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodeDependenciesResponseBodyPagingInfoNodes },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesDataSource extends $tea.Model {
  /**
   * @remarks
   * 数据源名称
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 623731286945488XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputsTables extends $tea.Model {
  /**
   * @remarks
   * 表id
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 623731286945488XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputsVariables extends $tea.Model {
  /**
   * @remarks
   * 制品类型
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * 变量id
   * 
   * @example
   * 543211286945488XXXX
   */
  id?: string;
  /**
   * @remarks
   * 变量名
   * 
   * @example
   * input
   */
  name?: string;
  /**
   * @remarks
   * 变量所属节点
   */
  node?: ListNodesResponseBodyPagingInfoNodesInputsVariablesNode;
  /**
   * @remarks
   * 范围
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * 类型
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * 变量值
   * 
   * @example
   * 222
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodesResponseBodyPagingInfoNodesInputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesInputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出列表
   */
  nodeOutputs?: ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs[];
  /**
   * @remarks
   * 表列表
   */
  tables?: ListNodesResponseBodyPagingInfoNodesInputsTables[];
  /**
   * @remarks
   * 变量列表
   */
  variables?: ListNodesResponseBodyPagingInfoNodesInputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsTables },
      variables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesInputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 860438872620113XXXX
   */
  data?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsTables extends $tea.Model {
  /**
   * @remarks
   * 表id
   * 
   * @example
   * odps.autotest.test_output_table_1
   */
  guid?: string;
  static names(): { [key: string]: string } {
    return {
      guid: 'Guid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode extends $tea.Model {
  /**
   * @remarks
   * 节点输出
   * 
   * @example
   * 860438872620113XXXX
   */
  output?: string;
  static names(): { [key: string]: string } {
    return {
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputsVariables extends $tea.Model {
  /**
   * @remarks
   * 制品类型
   * 
   * @example
   * Variable
   */
  artifactType?: string;
  /**
   * @remarks
   * 变量id
   * 
   * @example
   * 623731286945488XXXX
   */
  id?: string;
  /**
   * @remarks
   * 变量名
   * 
   * @example
   * output
   */
  name?: string;
  /**
   * @remarks
   * 变量所属节点
   */
  node?: ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode;
  /**
   * @remarks
   * 范围
   * 
   * @example
   * NodeParameter
   */
  scope?: string;
  /**
   * @remarks
   * 类型
   * 
   * @example
   * Constant
   */
  type?: string;
  /**
   * @remarks
   * 变量值
   * 
   * @example
   * 111
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      artifactType: 'ArtifactType',
      id: 'Id',
      name: 'Name',
      node: 'Node',
      scope: 'Scope',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactType: 'string',
      id: 'string',
      name: 'string',
      node: ListNodesResponseBodyPagingInfoNodesOutputsVariablesNode,
      scope: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesOutputs extends $tea.Model {
  /**
   * @remarks
   * 节点输出列表
   */
  nodeOutputs?: ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs[];
  /**
   * @remarks
   * 表列表
   */
  tables?: ListNodesResponseBodyPagingInfoNodesOutputsTables[];
  /**
   * @remarks
   * 变量列表
   */
  variables?: ListNodesResponseBodyPagingInfoNodesOutputsVariables[];
  static names(): { [key: string]: string } {
    return {
      nodeOutputs: 'NodeOutputs',
      tables: 'Tables',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeOutputs: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsNodeOutputs },
      tables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsTables },
      variables: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesOutputsVariables },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesRuntimeResource extends $tea.Model {
  /**
   * @remarks
   * 资源组id
   * 
   * @example
   * S_resgrop_xxx
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
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

export class ListNodesResponseBodyPagingInfoNodesScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * 脚本所属类型
   * 
   * @example
   * ODPS_SQL
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesScript extends $tea.Model {
  /**
   * @remarks
   * 脚本的id
   * 
   * @example
   * 853573334108680XXXX
   */
  id?: string;
  /**
   * @remarks
   * 脚本路径
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * 脚本的运行时信息
   */
  runtime?: ListNodesResponseBodyPagingInfoNodesScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListNodesResponseBodyPagingInfoNodesScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesStrategy extends $tea.Model {
  /**
   * @remarks
   * 生成实例的模式
   * 
   * @example
   * T+1
   */
  instanceMode?: string;
  /**
   * @remarks
   * 重试时间间隔
   * 
   * @example
   * 180000
   */
  rerunInterval?: number;
  /**
   * @remarks
   * 允许重跑的模式
   * 
   * @example
   * Allowed
   */
  rerunMode?: string;
  /**
   * @remarks
   * 重试次数
   * 
   * @example
   * 3
   */
  rerunTimes?: number;
  /**
   * @remarks
   * 超时时间
   * 
   * @example
   * 0
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      instanceMode: 'InstanceMode',
      rerunInterval: 'RerunInterval',
      rerunMode: 'RerunMode',
      rerunTimes: 'RerunTimes',
      timeout: 'Timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceMode: 'string',
      rerunInterval: 'number',
      rerunMode: 'string',
      rerunTimes: 'number',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodesTags extends $tea.Model {
  /**
   * @remarks
   * 标签键
   * 
   * @example
   * null
   */
  key?: string;
  /**
   * @remarks
   * 标签值
   * 
   * @example
   * null
   */
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

export class ListNodesResponseBodyPagingInfoNodesTrigger extends $tea.Model {
  /**
   * @remarks
   * 触发器的cron表达式
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * 结束时间，格式为yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * 触发器id
   * 
   * @example
   * 543680677872062XXXX
   */
  id?: string;
  /**
   * @remarks
   * 开始时间，格式为yyyy-MM-dd HH:mm:ss
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * 时区
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * 触发器类型
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
      timezone: 'Timezone',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      id: 'string',
      startTime: 'string',
      timezone: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfoNodes extends $tea.Model {
  /**
   * @remarks
   * 节点的创建时间
   * 
   * @example
   * 1722910655000
   */
  createTime?: number;
  /**
   * @remarks
   * 数据源信息
   */
  dataSource?: ListNodesResponseBodyPagingInfoNodesDataSource;
  /**
   * @remarks
   * 描述
   */
  description?: string;
  /**
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * 节点输入
   */
  inputs?: ListNodesResponseBodyPagingInfoNodesInputs;
  /**
   * @remarks
   * 属性修改时间
   * 
   * @example
   * 1722910655000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 节点名
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * 节点输出
   */
  outputs?: ListNodesResponseBodyPagingInfoNodesOutputs;
  /**
   * @remarks
   * 节点的责任人
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @example
   * 33233
   */
  projectId?: string;
  /**
   * @example
   * Normal
   */
  recurrence?: string;
  /**
   * @remarks
   * 资源组信息
   */
  runtimeResource?: ListNodesResponseBodyPagingInfoNodesRuntimeResource;
  /**
   * @remarks
   * 工作流的脚本信息
   */
  script?: ListNodesResponseBodyPagingInfoNodesScript;
  /**
   * @remarks
   * 调度策略
   */
  strategy?: ListNodesResponseBodyPagingInfoNodesStrategy;
  /**
   * @remarks
   * 标签信息
   */
  tags?: ListNodesResponseBodyPagingInfoNodesTags[];
  /**
   * @remarks
   * 调度任务Id
   * 
   * @example
   * 88888888888
   */
  taskId?: string;
  /**
   * @remarks
   * 触发器信息
   */
  trigger?: ListNodesResponseBodyPagingInfoNodesTrigger;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      description: 'Description',
      id: 'Id',
      inputs: 'Inputs',
      modifyTime: 'ModifyTime',
      name: 'Name',
      outputs: 'Outputs',
      owner: 'Owner',
      projectId: 'ProjectId',
      recurrence: 'Recurrence',
      runtimeResource: 'RuntimeResource',
      script: 'Script',
      strategy: 'Strategy',
      tags: 'Tags',
      taskId: 'TaskId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSource: ListNodesResponseBodyPagingInfoNodesDataSource,
      description: 'string',
      id: 'string',
      inputs: ListNodesResponseBodyPagingInfoNodesInputs,
      modifyTime: 'number',
      name: 'string',
      outputs: ListNodesResponseBodyPagingInfoNodesOutputs,
      owner: 'string',
      projectId: 'string',
      recurrence: 'string',
      runtimeResource: ListNodesResponseBodyPagingInfoNodesRuntimeResource,
      script: ListNodesResponseBodyPagingInfoNodesScript,
      strategy: ListNodesResponseBodyPagingInfoNodesStrategy,
      tags: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodesTags },
      taskId: 'string',
      trigger: ListNodesResponseBodyPagingInfoNodesTrigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyPagingInfo extends $tea.Model {
  nodes?: ListNodesResponseBodyPagingInfoNodes[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 42
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyPagingInfoNodes },
      pageNumber: 'string',
      pageSize: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfoResourcesDataSource extends $tea.Model {
  /**
   * @remarks
   * 数据源名称
   * 
   * @example
   * odps_first
   */
  name?: string;
  /**
   * @remarks
   * 数据源类型
   * 
   * @example
   * odps
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfoResourcesScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * 脚本所属类型
   * 
   * @example
   * ODPS_PYTHON
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfoResourcesScript extends $tea.Model {
  /**
   * @remarks
   * 工作流脚本的id
   * 
   * @example
   * 123348864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * 工作流的脚本路径
   * 
   * @example
   * root/demo
   */
  path?: string;
  /**
   * @remarks
   * 脚本的运行时信息
   */
  runtime?: ListResourcesResponseBodyPagingInfoResourcesScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListResourcesResponseBodyPagingInfoResourcesScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfoResources extends $tea.Model {
  /**
   * @example
   * 1724505917000
   */
  createTime?: number;
  /**
   * @remarks
   * 函数注册到的数据源信息
   */
  dataSource?: ListResourcesResponseBodyPagingInfoResourcesDataSource;
  /**
   * @remarks
   * 代表资源组的资源属性字段
   * 
   * @example
   * 631478864897630XXXX
   */
  id?: string;
  /**
   * @remarks
   * 资源文件的最近修改时间
   * 
   * @example
   * 1724505917000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 代表资源名称的资源属性字段
   * 
   * @example
   * math.py
   */
  name?: string;
  /**
   * @remarks
   * 资源文件的责任人
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * 资源文件的项目id
   * 
   * @example
   * 344247
   */
  projectId?: string;
  /**
   * @remarks
   * 工作流的脚本信息
   */
  script?: ListResourcesResponseBodyPagingInfoResourcesScript;
  /**
   * @remarks
   * 文件目标存储路径
   * 
   * @example
   * XXX/unknown/ide/1/XXX/20240820200851_963a9da676de44ef8d06a6576a8c4d6a.py
   */
  sourcePath?: string;
  /**
   * @remarks
   * 文件资源来源存储类型
   * 
   * @example
   * local
   */
  sourceType?: string;
  /**
   * @remarks
   * 文件来源路径
   * 
   * @example
   * XXX/unknown/ide/1/XXX/20240820200851_963a9da676de44ef8d06a6576a8c4d6a.py
   */
  targetPath?: string;
  /**
   * @remarks
   * 文件目标存储类型
   * 
   * @example
   * oss
   */
  targetType?: string;
  /**
   * @remarks
   * 资源类型
   * 
   * @example
   * jar
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      dataSource: 'DataSource',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      script: 'Script',
      sourcePath: 'SourcePath',
      sourceType: 'SourceType',
      targetPath: 'TargetPath',
      targetType: 'TargetType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      dataSource: ListResourcesResponseBodyPagingInfoResourcesDataSource,
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      script: ListResourcesResponseBodyPagingInfoResourcesScript,
      sourcePath: 'string',
      sourceType: 'string',
      targetPath: 'string',
      targetType: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBodyPagingInfo extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  resources?: ListResourcesResponseBodyPagingInfoResources[];
  /**
   * @example
   * 131
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resources: { 'type': 'array', 'itemType': ListResourcesResponseBodyPagingInfoResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime extends $tea.Model {
  /**
   * @remarks
   * 脚本所属类型
   * 
   * @example
   * WORKFLOW
   */
  command?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript extends $tea.Model {
  /**
   * @remarks
   * 工作流脚本的id
   * 
   * @example
   * 698002781368644XXXX
   */
  id?: string;
  /**
   * @remarks
   * 工作流的脚本路径
   */
  path?: string;
  /**
   * @remarks
   * 脚本的运行时信息
   */
  runtime?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      path: 'Path',
      runtime: 'Runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      path: 'string',
      runtime: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScriptRuntime,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions extends $tea.Model {
  /**
   * @remarks
   * 工作流的创建时间
   * 
   * @example
   * 1698057323000
   */
  createTime?: number;
  /**
   * @remarks
   * 工作流的描述
   */
  description?: string;
  /**
   * @remarks
   * 工作流定义的唯一ID
   * 
   * @example
   * 463497880880954XXXX
   */
  id?: string;
  /**
   * @remarks
   * 工作流的最近修改时间
   * 
   * @example
   * 1698057323000
   */
  modifyTime?: number;
  /**
   * @remarks
   * 工作流的名称
   */
  name?: string;
  /**
   * @remarks
   * 工作流的责任人
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * 工作流定义的所属项目空间
   * 
   * This parameter is required.
   * 
   * @example
   * 4710
   */
  projectId?: string;
  /**
   * @remarks
   * 工作流的脚本信息
   */
  script?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript;
  /**
   * @remarks
   * 工作流类型，可选值：CycleWorkflow、ManualWorkflow，分别表示周期工作流和手动工作流
   * 
   * @example
   * CycleWorkflow
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      owner: 'Owner',
      projectId: 'ProjectId',
      script: 'Script',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      owner: 'string',
      projectId: 'string',
      script: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitionsScript,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkflowDefinitionsResponseBodyPagingInfo extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 227
   */
  totalCount?: number;
  workflowDefinitions?: ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      workflowDefinitions: 'WorkflowDefinitions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      workflowDefinitions: { 'type': 'array', 'itemType': ListWorkflowDefinitionsResponseBodyPagingInfoWorkflowDefinitions },
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
      'ap-northeast-1': "dataworks.ap-northeast-1.aliyuncs.com",
      'ap-south-1': "dataworks.ap-south-1.aliyuncs.com",
      'ap-southeast-1': "dataworks.ap-southeast-1.aliyuncs.com",
      'ap-southeast-2': "dataworks.ap-southeast-2.aliyuncs.com",
      'ap-southeast-3': "dataworks.ap-southeast-3.aliyuncs.com",
      'ap-southeast-5': "dataworks.ap-southeast-5.aliyuncs.com",
      'cn-beijing': "dataworks.cn-beijing.aliyuncs.com",
      'cn-chengdu': "dataworks.cn-chengdu.aliyuncs.com",
      'cn-hangzhou': "dataworks.cn-hangzhou.aliyuncs.com",
      'cn-hongkong': "dataworks.cn-hongkong.aliyuncs.com",
      'cn-huhehaote': "dataworks.aliyuncs.com",
      'cn-qingdao': "dataworks.aliyuncs.com",
      'cn-shanghai': "dataworks.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "dataworks.cn-shenzhen.aliyuncs.com",
      'cn-zhangjiakou': "dataworks.aliyuncs.com",
      'eu-central-1': "dataworks.eu-central-1.aliyuncs.com",
      'eu-west-1': "dataworks.eu-west-1.aliyuncs.com",
      'me-east-1': "dataworks.me-east-1.aliyuncs.com",
      'us-east-1': "dataworks.us-east-1.aliyuncs.com",
      'us-west-1': "dataworks.us-west-1.aliyuncs.com",
      'cn-hangzhou-finance': "dataworks.aliyuncs.com",
      'cn-shenzhen-finance-1': "dataworks.aliyuncs.com",
      'cn-shanghai-finance-1': "dataworks.aliyuncs.com",
      'cn-north-2-gov-1': "dataworks.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("dataworks-public", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 终止发布流程
   * 
   * @param request - AbolishDeploymentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AbolishDeploymentResponse
   */
  async abolishDeploymentWithOptions(request: AbolishDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<AbolishDeploymentResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AbolishDeployment",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AbolishDeploymentResponse>(await this.callApi(params, req, runtime), new AbolishDeploymentResponse({}));
  }

  /**
   * 终止发布流程
   * 
   * @param request - AbolishDeploymentRequest
   * @returns AbolishDeploymentResponse
   */
  async abolishDeployment(request: AbolishDeploymentRequest): Promise<AbolishDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.abolishDeploymentWithOptions(request, runtime);
  }

  /**
   * 创建发布流程
   * 
   * @param tmpReq - CreateDeploymentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateDeploymentResponse
   */
  async createDeploymentWithOptions(tmpReq: CreateDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<CreateDeploymentResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateDeploymentShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.objectIds)) {
      request.objectIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectIds, "ObjectIds", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.objectIdsShrink)) {
      body["ObjectIds"] = request.objectIdsShrink;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateDeployment",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDeploymentResponse>(await this.callApi(params, req, runtime), new CreateDeploymentResponse({}));
  }

  /**
   * 创建发布流程
   * 
   * @param request - CreateDeploymentRequest
   * @returns CreateDeploymentResponse
   */
  async createDeployment(request: CreateDeploymentRequest): Promise<CreateDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDeploymentWithOptions(request, runtime);
  }

  /**
   * 创建udf函数
   * 
   * @param request - CreateFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionResponse
   */
  async createFunctionWithOptions(request: CreateFunctionRequest, runtime: $Util.RuntimeOptions): Promise<CreateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFunctionResponse>(await this.callApi(params, req, runtime), new CreateFunctionResponse({}));
  }

  /**
   * 创建udf函数
   * 
   * @param request - CreateFunctionRequest
   * @returns CreateFunctionResponse
   */
  async createFunction(request: CreateFunctionRequest): Promise<CreateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFunctionWithOptions(request, runtime);
  }

  /**
   * 创建节点
   * 
   * @param request - CreateNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodeResponse
   */
  async createNodeWithOptions(request: CreateNodeRequest, runtime: $Util.RuntimeOptions): Promise<CreateNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.containerId)) {
      body["ContainerId"] = request.containerId;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.scene)) {
      body["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNodeResponse>(await this.callApi(params, req, runtime), new CreateNodeResponse({}));
  }

  /**
   * 创建节点
   * 
   * @param request - CreateNodeRequest
   * @returns CreateNodeResponse
   */
  async createNode(request: CreateNodeRequest): Promise<CreateNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNodeWithOptions(request, runtime);
  }

  /**
   * 创建资源文件
   * 
   * @param request - CreateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
  async createResourceWithOptions(request: CreateResourceRequest, runtime: $Util.RuntimeOptions): Promise<CreateResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceResponse>(await this.callApi(params, req, runtime), new CreateResourceResponse({}));
  }

  /**
   * 创建资源文件
   * 
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(request: CreateResourceRequest): Promise<CreateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createResourceWithOptions(request, runtime);
  }

  /**
   * 创建工作流
   * 
   * @param request - CreateWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateWorkflowDefinitionResponse
   */
  async createWorkflowDefinitionWithOptions(request: CreateWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<CreateWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new CreateWorkflowDefinitionResponse({}));
  }

  /**
   * 创建工作流
   * 
   * @param request - CreateWorkflowDefinitionRequest
   * @returns CreateWorkflowDefinitionResponse
   */
  async createWorkflowDefinition(request: CreateWorkflowDefinitionRequest): Promise<CreateWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 删除udf函数
   * 
   * @param request - DeleteFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionResponse
   */
  async deleteFunctionWithOptions(request: DeleteFunctionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFunctionResponse>(await this.callApi(params, req, runtime), new DeleteFunctionResponse({}));
  }

  /**
   * 删除udf函数
   * 
   * @param request - DeleteFunctionRequest
   * @returns DeleteFunctionResponse
   */
  async deleteFunction(request: DeleteFunctionRequest): Promise<DeleteFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFunctionWithOptions(request, runtime);
  }

  /**
   * 删除节点
   * 
   * @param request - DeleteNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodeResponse
   */
  async deleteNodeWithOptions(request: DeleteNodeRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNodeResponse>(await this.callApi(params, req, runtime), new DeleteNodeResponse({}));
  }

  /**
   * 删除节点
   * 
   * @param request - DeleteNodeRequest
   * @returns DeleteNodeResponse
   */
  async deleteNode(request: DeleteNodeRequest): Promise<DeleteNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNodeWithOptions(request, runtime);
  }

  /**
   * 删除资源文件
   * 
   * @param request - DeleteResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceResponse
   */
  async deleteResourceWithOptions(request: DeleteResourceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceResponse>(await this.callApi(params, req, runtime), new DeleteResourceResponse({}));
  }

  /**
   * 删除资源文件
   * 
   * @param request - DeleteResourceRequest
   * @returns DeleteResourceResponse
   */
  async deleteResource(request: DeleteResourceRequest): Promise<DeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteResourceWithOptions(request, runtime);
  }

  /**
   * 删除工作流
   * 
   * @param request - DeleteWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteWorkflowDefinitionResponse
   */
  async deleteWorkflowDefinitionWithOptions(request: DeleteWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new DeleteWorkflowDefinitionResponse({}));
  }

  /**
   * 删除工作流
   * 
   * @param request - DeleteWorkflowDefinitionRequest
   * @returns DeleteWorkflowDefinitionResponse
   */
  async deleteWorkflowDefinition(request: DeleteWorkflowDefinitionRequest): Promise<DeleteWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 执行Deployment一个阶段
   * 
   * @param request - ExecDeploymentStageRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ExecDeploymentStageResponse
   */
  async execDeploymentStageWithOptions(request: ExecDeploymentStageRequest, runtime: $Util.RuntimeOptions): Promise<ExecDeploymentStageResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["Code"] = request.code;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ExecDeploymentStage",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExecDeploymentStageResponse>(await this.callApi(params, req, runtime), new ExecDeploymentStageResponse({}));
  }

  /**
   * 执行Deployment一个阶段
   * 
   * @param request - ExecDeploymentStageRequest
   * @returns ExecDeploymentStageResponse
   */
  async execDeploymentStage(request: ExecDeploymentStageRequest): Promise<ExecDeploymentStageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.execDeploymentStageWithOptions(request, runtime);
  }

  /**
   * 获取发布流程详情
   * 
   * @param request - GetDeploymentRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDeploymentResponse
   */
  async getDeploymentWithOptions(request: GetDeploymentRequest, runtime: $Util.RuntimeOptions): Promise<GetDeploymentResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDeployment",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDeploymentResponse>(await this.callApi(params, req, runtime), new GetDeploymentResponse({}));
  }

  /**
   * 获取发布流程详情
   * 
   * @param request - GetDeploymentRequest
   * @returns GetDeploymentResponse
   */
  async getDeployment(request: GetDeploymentRequest): Promise<GetDeploymentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDeploymentWithOptions(request, runtime);
  }

  /**
   * 获取函数信息
   * 
   * @param request - GetFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionResponse
   */
  async getFunctionWithOptions(request: GetFunctionRequest, runtime: $Util.RuntimeOptions): Promise<GetFunctionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionResponse>(await this.callApi(params, req, runtime), new GetFunctionResponse({}));
  }

  /**
   * 获取函数信息
   * 
   * @param request - GetFunctionRequest
   * @returns GetFunctionResponse
   */
  async getFunction(request: GetFunctionRequest): Promise<GetFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFunctionWithOptions(request, runtime);
  }

  /**
   * @param request - GetNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNodeResponse
   */
  async getNodeWithOptions(request: GetNodeRequest, runtime: $Util.RuntimeOptions): Promise<GetNodeResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNodeResponse>(await this.callApi(params, req, runtime), new GetNodeResponse({}));
  }

  /**
   * @param request - GetNodeRequest
   * @returns GetNodeResponse
   */
  async getNode(request: GetNodeRequest): Promise<GetNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNodeWithOptions(request, runtime);
  }

  /**
   * 获取资源文件
   * 
   * @param request - GetResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourceResponse
   */
  async getResourceWithOptions(request: GetResourceRequest, runtime: $Util.RuntimeOptions): Promise<GetResourceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetResourceResponse>(await this.callApi(params, req, runtime), new GetResourceResponse({}));
  }

  /**
   * 获取资源文件
   * 
   * @param request - GetResourceRequest
   * @returns GetResourceResponse
   */
  async getResource(request: GetResourceRequest): Promise<GetResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getResourceWithOptions(request, runtime);
  }

  /**
   * 获取工作流详情
   * 
   * @param request - GetWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetWorkflowDefinitionResponse
   */
  async getWorkflowDefinitionWithOptions(request: GetWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<GetWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new GetWorkflowDefinitionResponse({}));
  }

  /**
   * 获取工作流详情
   * 
   * @param request - GetWorkflowDefinitionRequest
   * @returns GetWorkflowDefinitionResponse
   */
  async getWorkflowDefinition(request: GetWorkflowDefinitionRequest): Promise<GetWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 分页获取发布流程
   * 
   * @param request - ListDeploymentsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDeploymentsResponse
   */
  async listDeploymentsWithOptions(request: ListDeploymentsRequest, runtime: $Util.RuntimeOptions): Promise<ListDeploymentsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDeployments",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDeploymentsResponse>(await this.callApi(params, req, runtime), new ListDeploymentsResponse({}));
  }

  /**
   * 分页获取发布流程
   * 
   * @param request - ListDeploymentsRequest
   * @returns ListDeploymentsResponse
   */
  async listDeployments(request: ListDeploymentsRequest): Promise<ListDeploymentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDeploymentsWithOptions(request, runtime);
  }

  /**
   * 获取udf函数列表
   * 
   * @param request - ListFunctionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionsResponse
   */
  async listFunctionsWithOptions(request: ListFunctionsRequest, runtime: $Util.RuntimeOptions): Promise<ListFunctionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctions",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionsResponse>(await this.callApi(params, req, runtime), new ListFunctionsResponse({}));
  }

  /**
   * 获取udf函数列表
   * 
   * @param request - ListFunctionsRequest
   * @returns ListFunctionsResponse
   */
  async listFunctions(request: ListFunctionsRequest): Promise<ListFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFunctionsWithOptions(request, runtime);
  }

  /**
   * 获取节点依赖列表
   * 
   * @param request - ListNodeDependenciesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodeDependenciesResponse
   */
  async listNodeDependenciesWithOptions(request: ListNodeDependenciesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodeDependenciesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodeDependencies",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodeDependenciesResponse>(await this.callApi(params, req, runtime), new ListNodeDependenciesResponse({}));
  }

  /**
   * 获取节点依赖列表
   * 
   * @param request - ListNodeDependenciesRequest
   * @returns ListNodeDependenciesResponse
   */
  async listNodeDependencies(request: ListNodeDependenciesRequest): Promise<ListNodeDependenciesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodeDependenciesWithOptions(request, runtime);
  }

  /**
   * 获取节点列表
   * 
   * @param request - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(request: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodes",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  /**
   * 获取节点列表
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * 分页获取资源文件
   * 
   * @param request - ListResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
  async listResourcesWithOptions(request: ListResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListResourcesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResources",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
  }

  /**
   * 分页获取资源文件
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourcesWithOptions(request, runtime);
  }

  /**
   * 获取workflowDefinition的列表
   * 
   * @param request - ListWorkflowDefinitionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListWorkflowDefinitionsResponse
   */
  async listWorkflowDefinitionsWithOptions(request: ListWorkflowDefinitionsRequest, runtime: $Util.RuntimeOptions): Promise<ListWorkflowDefinitionsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListWorkflowDefinitions",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListWorkflowDefinitionsResponse>(await this.callApi(params, req, runtime), new ListWorkflowDefinitionsResponse({}));
  }

  /**
   * 获取workflowDefinition的列表
   * 
   * @param request - ListWorkflowDefinitionsRequest
   * @returns ListWorkflowDefinitionsResponse
   */
  async listWorkflowDefinitions(request: ListWorkflowDefinitionsRequest): Promise<ListWorkflowDefinitionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listWorkflowDefinitionsWithOptions(request, runtime);
  }

  /**
   * 移动funciton的路径
   * 
   * @param request - MoveFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveFunctionResponse
   */
  async moveFunctionWithOptions(request: MoveFunctionRequest, runtime: $Util.RuntimeOptions): Promise<MoveFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveFunctionResponse>(await this.callApi(params, req, runtime), new MoveFunctionResponse({}));
  }

  /**
   * 移动funciton的路径
   * 
   * @param request - MoveFunctionRequest
   * @returns MoveFunctionResponse
   */
  async moveFunction(request: MoveFunctionRequest): Promise<MoveFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveFunctionWithOptions(request, runtime);
  }

  /**
   * 移动节点路径
   * 
   * @param request - MoveNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveNodeResponse
   */
  async moveNodeWithOptions(request: MoveNodeRequest, runtime: $Util.RuntimeOptions): Promise<MoveNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveNodeResponse>(await this.callApi(params, req, runtime), new MoveNodeResponse({}));
  }

  /**
   * 移动节点路径
   * 
   * @param request - MoveNodeRequest
   * @returns MoveNodeResponse
   */
  async moveNode(request: MoveNodeRequest): Promise<MoveNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveNodeWithOptions(request, runtime);
  }

  /**
   * 移动资源文件路径
   * 
   * @param request - MoveResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceResponse
   */
  async moveResourceWithOptions(request: MoveResourceRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceResponse>(await this.callApi(params, req, runtime), new MoveResourceResponse({}));
  }

  /**
   * 移动资源文件路径
   * 
   * @param request - MoveResourceRequest
   * @returns MoveResourceResponse
   */
  async moveResource(request: MoveResourceRequest): Promise<MoveResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceWithOptions(request, runtime);
  }

  /**
   * 移动工作流的路径
   * 
   * @param request - MoveWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveWorkflowDefinitionResponse
   */
  async moveWorkflowDefinitionWithOptions(request: MoveWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<MoveWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new MoveWorkflowDefinitionResponse({}));
  }

  /**
   * 移动工作流的路径
   * 
   * @param request - MoveWorkflowDefinitionRequest
   * @returns MoveWorkflowDefinitionResponse
   */
  async moveWorkflowDefinition(request: MoveWorkflowDefinitionRequest): Promise<MoveWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 对function重命名
   * 
   * @param request - RenameFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameFunctionResponse
   */
  async renameFunctionWithOptions(request: RenameFunctionRequest, runtime: $Util.RuntimeOptions): Promise<RenameFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameFunctionResponse>(await this.callApi(params, req, runtime), new RenameFunctionResponse({}));
  }

  /**
   * 对function重命名
   * 
   * @param request - RenameFunctionRequest
   * @returns RenameFunctionResponse
   */
  async renameFunction(request: RenameFunctionRequest): Promise<RenameFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameFunctionWithOptions(request, runtime);
  }

  /**
   * 重命名节点
   * 
   * @param request - RenameNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameNodeResponse
   */
  async renameNodeWithOptions(request: RenameNodeRequest, runtime: $Util.RuntimeOptions): Promise<RenameNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameNodeResponse>(await this.callApi(params, req, runtime), new RenameNodeResponse({}));
  }

  /**
   * 重命名节点
   * 
   * @param request - RenameNodeRequest
   * @returns RenameNodeResponse
   */
  async renameNode(request: RenameNodeRequest): Promise<RenameNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameNodeWithOptions(request, runtime);
  }

  /**
   * 对资源文件重命名
   * 
   * @param request - RenameResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameResourceResponse
   */
  async renameResourceWithOptions(request: RenameResourceRequest, runtime: $Util.RuntimeOptions): Promise<RenameResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RenameResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameResourceResponse>(await this.callApi(params, req, runtime), new RenameResourceResponse({}));
  }

  /**
   * 对资源文件重命名
   * 
   * @param request - RenameResourceRequest
   * @returns RenameResourceResponse
   */
  async renameResource(request: RenameResourceRequest): Promise<RenameResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameResourceWithOptions(request, runtime);
  }

  /**
   * 重命名工作流
   * 
   * @param request - RenameWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenameWorkflowDefinitionResponse
   */
  async renameWorkflowDefinitionWithOptions(request: RenameWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<RenameWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.projectId)) {
      query["ProjectId"] = request.projectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RenameWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RenameWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new RenameWorkflowDefinitionResponse({}));
  }

  /**
   * 重命名工作流
   * 
   * @param request - RenameWorkflowDefinitionRequest
   * @returns RenameWorkflowDefinitionResponse
   */
  async renameWorkflowDefinition(request: RenameWorkflowDefinitionRequest): Promise<RenameWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.renameWorkflowDefinitionWithOptions(request, runtime);
  }

  /**
   * 更新udf函数
   * 
   * @param request - UpdateFunctionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionResponse
   */
  async updateFunctionWithOptions(request: UpdateFunctionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFunction",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFunctionResponse>(await this.callApi(params, req, runtime), new UpdateFunctionResponse({}));
  }

  /**
   * 更新udf函数
   * 
   * @param request - UpdateFunctionRequest
   * @returns UpdateFunctionResponse
   */
  async updateFunction(request: UpdateFunctionRequest): Promise<UpdateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFunctionWithOptions(request, runtime);
  }

  /**
   * 更新节点
   * 
   * @param request - UpdateNodeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodeResponse
   */
  async updateNodeWithOptions(request: UpdateNodeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNodeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNode",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNodeResponse>(await this.callApi(params, req, runtime), new UpdateNodeResponse({}));
  }

  /**
   * 更新节点
   * 
   * @param request - UpdateNodeRequest
   * @returns UpdateNodeResponse
   */
  async updateNode(request: UpdateNodeRequest): Promise<UpdateNodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNodeWithOptions(request, runtime);
  }

  /**
   * 更新资源文件
   * 
   * @param request - UpdateResourceRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceResponse
   */
  async updateResourceWithOptions(request: UpdateResourceRequest, runtime: $Util.RuntimeOptions): Promise<UpdateResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResource",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceResponse>(await this.callApi(params, req, runtime), new UpdateResourceResponse({}));
  }

  /**
   * 更新资源文件
   * 
   * @param request - UpdateResourceRequest
   * @returns UpdateResourceResponse
   */
  async updateResource(request: UpdateResourceRequest): Promise<UpdateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateResourceWithOptions(request, runtime);
  }

  /**
   * 更新工作流
   * 
   * @param request - UpdateWorkflowDefinitionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateWorkflowDefinitionResponse
   */
  async updateWorkflowDefinitionWithOptions(request: UpdateWorkflowDefinitionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateWorkflowDefinitionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectId)) {
      body["ProjectId"] = request.projectId;
    }

    if (!Util.isUnset(request.spec)) {
      body["Spec"] = request.spec;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateWorkflowDefinition",
      version: "2024-05-18",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateWorkflowDefinitionResponse>(await this.callApi(params, req, runtime), new UpdateWorkflowDefinitionResponse({}));
  }

  /**
   * 更新工作流
   * 
   * @param request - UpdateWorkflowDefinitionRequest
   * @returns UpdateWorkflowDefinitionResponse
   */
  async updateWorkflowDefinition(request: UpdateWorkflowDefinitionRequest): Promise<UpdateWorkflowDefinitionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateWorkflowDefinitionWithOptions(request, runtime);
  }

}
