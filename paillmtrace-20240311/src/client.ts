// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class EvaluationConfigAnswer extends $dara.Model {
  jsonPathInSpan?: string;
  jsonPathInSpanValue?: string;
  spanName?: string;
  static names(): { [key: string]: string } {
    return {
      jsonPathInSpan: 'JsonPathInSpan',
      jsonPathInSpanValue: 'JsonPathInSpanValue',
      spanName: 'SpanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonPathInSpan: 'string',
      jsonPathInSpanValue: 'string',
      spanName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluationConfigContext extends $dara.Model {
  jsonPathInSpan?: string;
  jsonPathInSpanValue?: string;
  spanName?: string;
  static names(): { [key: string]: string } {
    return {
      jsonPathInSpan: 'JsonPathInSpan',
      jsonPathInSpanValue: 'JsonPathInSpanValue',
      spanName: 'SpanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonPathInSpan: 'string',
      jsonPathInSpanValue: 'string',
      spanName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluationConfigQuery extends $dara.Model {
  jsonPathInSpan?: string;
  jsonPathInSpanValue?: string;
  spanName?: string;
  static names(): { [key: string]: string } {
    return {
      jsonPathInSpan: 'JsonPathInSpan',
      jsonPathInSpanValue: 'JsonPathInSpanValue',
      spanName: 'SpanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jsonPathInSpan: 'string',
      jsonPathInSpanValue: 'string',
      spanName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOnlineEvalTaskRequestBodyFilters extends $dara.Model {
  /**
   * @example
   * ServiceId
   * ServiceName
   * Input
   * Output
   * Status
   * TraceType
   * SpanType
   * TraceName
   * SpanName
   */
  key?: string;
  /**
   * @example
   * =
   * StartsWith
   * Contains
   */
  operator?: string;
  /**
   * @example
   * foo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOnlineEvalTaskRequestBody extends $dara.Model {
  /**
   * @example
   * my-best-llm-app
   */
  appName?: string;
  description?: string;
  /**
   * @example
   * 2025-06-05 14:00:01
   * 2025-06-05
   */
  endTime?: string;
  evaluationConfig?: EvaluationConfig;
  filters?: CreateOnlineEvalTaskRequestBodyFilters[];
  modelConfig?: ModelConfig;
  /**
   * @example
   * 9
   */
  samplingFrequencyMinutes?: number;
  /**
   * @example
   * 50
   */
  samplingRatio?: number;
  /**
   * @example
   * 2025-04-05 14:00:01
   * 2025-04-05
   */
  startTime?: string;
  /**
   * @example
   * my-llm-app-eval-task-1
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      description: 'Description',
      endTime: 'EndTime',
      evaluationConfig: 'EvaluationConfig',
      filters: 'Filters',
      modelConfig: 'ModelConfig',
      samplingFrequencyMinutes: 'SamplingFrequencyMinutes',
      samplingRatio: 'SamplingRatio',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      description: 'string',
      endTime: 'string',
      evaluationConfig: EvaluationConfig,
      filters: { 'type': 'array', 'itemType': CreateOnlineEvalTaskRequestBodyFilters },
      modelConfig: ModelConfig,
      samplingFrequencyMinutes: 'number',
      samplingRatio: 'number',
      startTime: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(this.evaluationConfig && typeof (this.evaluationConfig as any).validate === 'function') {
      (this.evaluationConfig as any).validate();
    }
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineEvalTaskResponseBodyTaskFilters extends $dara.Model {
  /**
   * @example
   * ServiceId
   * ServiceName
   * Input
   * Output
   * Status
   * TraceType
   * SpanType
   * TraceName
   * SpanName
   */
  key?: string;
  /**
   * @example
   * =
   * StartsWith
   * Contains
   */
  operator?: string;
  /**
   * @example
   * foo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineEvalTaskResponseBodyTask extends $dara.Model {
  /**
   * @example
   * 1195531608511111
   */
  aliyunUid?: string;
  /**
   * @example
   * my-llm-app
   */
  appName?: string;
  description?: string;
  evalResults?: string;
  evaluationConfig?: EvaluationConfig;
  filters?: GetOnlineEvalTaskResponseBodyTaskFilters[];
  /**
   * @example
   * 2024-07-31 08:30:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2024-08-10 13:20:00
   */
  gmtEndTime?: string;
  /**
   * @example
   * 2024-08-10 13:14:00
   */
  gmtLastSamplingWindowEndTime?: string;
  /**
   * @example
   * 2024-08-10 13:11:00
   */
  gmtLastSamplingWindowStartTime?: string;
  /**
   * @example
   * 2024-08-02
   */
  gmtStartTime?: string;
  /**
   * @example
   * 0839a02d-aa24-4174-90bb-7a773885934d
   */
  id?: string;
  modelConfig?: ModelConfig;
  /**
   * @example
   * my-eval-task-1
   */
  name?: string;
  /**
   * @example
   * 999
   */
  recordCount?: number;
  /**
   * @example
   * 3
   */
  samplingFrequencyMinutes?: number;
  /**
   * @example
   * 70
   */
  samplingRatio?: number;
  /**
   * @example
   * CREATED
   * RUNNING
   * FINISHED
   * USER_CANCELED
   */
  status?: string;
  /**
   * @example
   * 222222222222222222
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      appName: 'AppName',
      description: 'Description',
      evalResults: 'EvalResults',
      evaluationConfig: 'EvaluationConfig',
      filters: 'Filters',
      gmtCreateTime: 'GmtCreateTime',
      gmtEndTime: 'GmtEndTime',
      gmtLastSamplingWindowEndTime: 'GmtLastSamplingWindowEndTime',
      gmtLastSamplingWindowStartTime: 'GmtLastSamplingWindowStartTime',
      gmtStartTime: 'GmtStartTime',
      id: 'Id',
      modelConfig: 'ModelConfig',
      name: 'Name',
      recordCount: 'RecordCount',
      samplingFrequencyMinutes: 'SamplingFrequencyMinutes',
      samplingRatio: 'SamplingRatio',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      appName: 'string',
      description: 'string',
      evalResults: 'string',
      evaluationConfig: EvaluationConfig,
      filters: { 'type': 'array', 'itemType': GetOnlineEvalTaskResponseBodyTaskFilters },
      gmtCreateTime: 'string',
      gmtEndTime: 'string',
      gmtLastSamplingWindowEndTime: 'string',
      gmtLastSamplingWindowStartTime: 'string',
      gmtStartTime: 'string',
      id: 'string',
      modelConfig: ModelConfig,
      name: 'string',
      recordCount: 'number',
      samplingFrequencyMinutes: 'number',
      samplingRatio: 'number',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.evaluationConfig && typeof (this.evaluationConfig as any).validate === 'function') {
      (this.evaluationConfig as any).validate();
    }
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineEvalTasksResponseBodyTasksFilters extends $dara.Model {
  /**
   * @example
   * ServiceId
   * ServiceName
   * Input
   * Output
   * Status
   * TraceType
   * SpanType
   * TraceName
   * SpanName
   */
  key?: string;
  /**
   * @example
   * =
   * StartsWith
   * Contains
   */
  operator?: string;
  /**
   * @example
   * foo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineEvalTasksResponseBodyTasks extends $dara.Model {
  /**
   * @example
   * 1512522691911111
   */
  aliyunUid?: string;
  /**
   * @example
   * my-llm-app
   */
  appName?: string;
  description?: string;
  evaluationConfig?: EvaluationConfig;
  filters?: ListOnlineEvalTasksResponseBodyTasksFilters[];
  /**
   * @example
   * 2025-04-07 13:24:35
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2025-04-09 13:24:35
   */
  gmtEndTime?: string;
  /**
   * @example
   * 2025-04-08 13:24:35
   */
  gmtStartTime?: string;
  /**
   * @example
   * 9f50cd72efcf36535152ee811a911115
   */
  id?: string;
  modelConfig?: ModelConfig;
  /**
   * @example
   * my-foo-evaluation-task
   */
  name?: string;
  /**
   * @example
   * 12
   */
  samplingFrequencyMinutes?: number;
  /**
   * @example
   * 50
   */
  samplingRatio?: number;
  /**
   * @example
   * CREATED
   * RUNNING
   * FINISHED
   * USER_CANCELED
   */
  status?: string;
  /**
   * @example
   * 2222222222
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      appName: 'AppName',
      description: 'Description',
      evaluationConfig: 'EvaluationConfig',
      filters: 'Filters',
      gmtCreateTime: 'GmtCreateTime',
      gmtEndTime: 'GmtEndTime',
      gmtStartTime: 'GmtStartTime',
      id: 'Id',
      modelConfig: 'ModelConfig',
      name: 'Name',
      samplingFrequencyMinutes: 'SamplingFrequencyMinutes',
      samplingRatio: 'SamplingRatio',
      status: 'Status',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      appName: 'string',
      description: 'string',
      evaluationConfig: EvaluationConfig,
      filters: { 'type': 'array', 'itemType': ListOnlineEvalTasksResponseBodyTasksFilters },
      gmtCreateTime: 'string',
      gmtEndTime: 'string',
      gmtStartTime: 'string',
      id: 'string',
      modelConfig: ModelConfig,
      name: 'string',
      samplingFrequencyMinutes: 'number',
      samplingRatio: 'number',
      status: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.evaluationConfig && typeof (this.evaluationConfig as any).validate === 'function') {
      (this.evaluationConfig as any).validate();
    }
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTracesDatasRequestFilters extends $dara.Model {
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOnlineEvalTaskRequestFilters extends $dara.Model {
  /**
   * @example
   * ServiceId
   * ServiceName
   * Input
   * Output
   * Status
   * TraceType
   * SpanType
   * TraceName
   * SpanName
   */
  key?: string;
  /**
   * @example
   * =
   * StartsWith
   * Contains
   */
  operator?: string;
  /**
   * @example
   * foo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluationConfig extends $dara.Model {
  answer?: EvaluationConfigAnswer;
  context?: EvaluationConfigContext;
  query?: EvaluationConfigQuery;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      context: 'Context',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: EvaluationConfigAnswer,
      context: EvaluationConfigContext,
      query: EvaluationConfigQuery,
    };
  }

  validate() {
    if(this.answer && typeof (this.answer as any).validate === 'function') {
      (this.answer as any).validate();
    }
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.query && typeof (this.query as any).validate === 'function') {
      (this.query as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelConfig extends $dara.Model {
  apiKey?: string;
  endpoint?: string;
  isSelfHost?: boolean;
  name?: string;
  temperature?: number;
  topP?: number;
  useFunctionCall?: boolean;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      endpoint: 'Endpoint',
      isSelfHost: 'IsSelfHost',
      name: 'Name',
      temperature: 'Temperature',
      topP: 'TopP',
      useFunctionCall: 'UseFunctionCall',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      endpoint: 'string',
      isSelfHost: 'boolean',
      name: 'string',
      temperature: 'number',
      topP: 'number',
      useFunctionCall: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOnlineEvalTaskRequest extends $dara.Model {
  body?: CreateOnlineEvalTaskRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateOnlineEvalTaskRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOnlineEvalTaskShrinkRequest extends $dara.Model {
  bodyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      bodyShrink: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOnlineEvalTaskResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @example
   * EvaluationConfig.Answer.SpanName is required.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  /**
   * @example
   * 711ef9112343286810abbfce04e161ee
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOnlineEvalTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateOnlineEvalTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOnlineEvalTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceIdentityRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * User don\\"t have permission to create SLR.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  /**
   * @remarks
   * The role details.
   * 
   * @example
   * AliyunServiceRoleForPaiLLMTrace
   */
  roleDetails?: string;
  /**
   * @remarks
   * The name of the service-linked role. Default value: AliyunServiceRoleForPaiLLMTrace.
   * 
   * @example
   * AliyunServiceRoleForPaiLLMTrace
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      roleDetails: 'RoleDetails',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      roleDetails: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceIdentityRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceIdentityRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServiceIdentityRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOnlineEvalTaskResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @example
   * task id is empty
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOnlineEvalTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteOnlineEvalTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteOnlineEvalTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateTraceRequest extends $dara.Model {
  /**
   * @example
   * my-llm-app
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  evaluationConfig?: EvaluationConfig;
  /**
   * @example
   * 44aea0ee00000000be5be24b2abb8f98
   */
  evaluationId?: string;
  /**
   * @example
   * 2025-04-05 13:24:25
   * 2025-04-05
   */
  maxTime?: string;
  /**
   * @example
   * 2025-04-05 13:24:25
   * 2025-04-05
   */
  minTime?: string;
  modelConfig?: ModelConfig;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      evaluationConfig: 'EvaluationConfig',
      evaluationId: 'EvaluationId',
      maxTime: 'MaxTime',
      minTime: 'MinTime',
      modelConfig: 'ModelConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      evaluationConfig: EvaluationConfig,
      evaluationId: 'string',
      maxTime: 'string',
      minTime: 'string',
      modelConfig: ModelConfig,
    };
  }

  validate() {
    if(this.evaluationConfig && typeof (this.evaluationConfig as any).validate === 'function') {
      (this.evaluationConfig as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateTraceResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @example
   * 6000043e103011f0922edec44617e03c
   */
  evaluationId?: string;
  /**
   * @example
   * eval_request missing dataset id or times
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F1AB295E-0D1F-5ECE-9FFA-98ABB4CB5DF5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      evaluationId: 'EvaluationId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      evaluationId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EvaluateTraceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EvaluateTraceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EvaluateTraceResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEvaluationTemplatesResponseBody extends $dara.Model {
  /**
   * @example
   * ExecutionFailure
   */
  code?: string;
  evaluationTemplates?: any[];
  /**
   * @example
   * cannot get data back.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      evaluationTemplates: 'EvaluationTemplates',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      evaluationTemplates: { 'type': 'array', 'itemType': 'any' },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.evaluationTemplates)) {
      $dara.Model.validateArray(this.evaluationTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEvaluationTemplatesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetEvaluationTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEvaluationTemplatesResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineEvalTaskResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @example
   * task id is empty
   */
  message?: string;
  /**
   * @remarks
   * POP request id
   * 
   * @example
   * 6F352A02-9C0D-54A7-B57C-663CF71D5714
   */
  requestId?: string;
  task?: GetOnlineEvalTaskResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      task: GetOnlineEvalTaskResponseBodyTask,
    };
  }

  validate() {
    if(this.task && typeof (this.task as any).validate === 'function') {
      (this.task as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOnlineEvalTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetOnlineEvalTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOnlineEvalTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceIdentityRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code. This parameter is returned only when an error occurs.
   * 
   * @example
   * EntityNotExist
   */
  code?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only when an error occurs.
   * 
   * @example
   * Serivce role does not exit.
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  /**
   * @remarks
   * The role details.
   * 
   * @example
   * AliyunServiceRoleForPaiLLMTrace
   */
  roleDetail?: string;
  /**
   * @remarks
   * The name of the service-linked role. Default value: AliyunServiceRoleForPaiLLMTrace.
   * 
   * @example
   * AliyunServiceRoleForPaiLLMTrace
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      roleDetail: 'RoleDetail',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      roleDetail: 'string',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceIdentityRoleResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceIdentityRoleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetServiceIdentityRoleResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXtraceTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code. This parameter is returned only when an error occurs.
   * 
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @remarks
   * The gRPC endpoint used for uploading ARM traces.
   * 
   * @example
   * http://tracing-analysis-dc-hz.aliyuncs.com:8090
   */
  grpcEndpoint?: string;
  /**
   * @remarks
   * The internal gRPC endpoint used for uploading ARMS traces used by Alibaba Cloud.
   * 
   * @example
   * http://tracing-analysis-dc-hz-internal.aliyuncs.com:8090
   */
  grpcInternalEndpoint?: string;
  /**
   * @remarks
   * The endpoint used for uploading ARMS traces.
   * 
   * @example
   * http://tracing-analysis-dc-hz.aliyuncs.com/aaa@bbb@ccc/api/otlp/traces
   */
  httpEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint used for uploading ARMS traces used by Alibaba Cloud.
   * 
   * @example
   * http://tracing-analysis-dc-hz-internal.aliyuncs.com/aaa@bbb@ccc/api/otlp/traces
   */
  httpInternalEndpoint?: string;
  /**
   * @remarks
   * The error message. This parameter is returned only when an error occurs.
   * 
   * @example
   * get_xtrace_token: failed, ERROR: NoPermission
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  /**
   * @remarks
   * The token used for uploading ARMS traces.
   * 
   * @example
   * h1abcw7@5abcb_h1abcw7@5abc01
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      grpcEndpoint: 'GrpcEndpoint',
      grpcInternalEndpoint: 'GrpcInternalEndpoint',
      httpEndpoint: 'HttpEndpoint',
      httpInternalEndpoint: 'HttpInternalEndpoint',
      message: 'Message',
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      grpcEndpoint: 'string',
      grpcInternalEndpoint: 'string',
      httpEndpoint: 'string',
      httpInternalEndpoint: 'string',
      message: 'string',
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetXtraceTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetXtraceTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetXtraceTokenResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineEvalTaskResultsRequest extends $dara.Model {
  /**
   * @example
   * 0bb05ae8888c11ef9757faaa2a1ec0c6
   */
  evaluationId?: string;
  /**
   * @example
   * True
   */
  mostRecentResultsOnly?: boolean;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  traceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      evaluationId: 'EvaluationId',
      mostRecentResultsOnly: 'MostRecentResultsOnly',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      traceIds: 'TraceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationId: 'string',
      mostRecentResultsOnly: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      traceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.traceIds)) {
      $dara.Model.validateArray(this.traceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineEvalTaskResultsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 0bb05ae8888c11ef9757faaa2a1ec0c6
   */
  evaluationId?: string;
  /**
   * @example
   * True
   */
  mostRecentResultsOnly?: boolean;
  /**
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  traceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      evaluationId: 'EvaluationId',
      mostRecentResultsOnly: 'MostRecentResultsOnly',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      traceIdsShrink: 'TraceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationId: 'string',
      mostRecentResultsOnly: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      traceIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineEvalTaskResultsResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidInputParams
   */
  code?: string;
  evaluationResults?: string[];
  /**
   * @example
   * must provide trace_id(s) or eval_id
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 22BA9A5A-E3D8-5B4C-90FC-F33F6E5853F8
   */
  requestId?: string;
  /**
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      evaluationResults: 'EvaluationResults',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      evaluationResults: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.evaluationResults)) {
      $dara.Model.validateArray(this.evaluationResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineEvalTaskResultsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOnlineEvalTaskResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOnlineEvalTaskResultsResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineEvalTasksRequest extends $dara.Model {
  /**
   * @example
   * foo
   */
  keyword?: string;
  /**
   * @example
   * 2025-04-07 13:24:25
   * 2025-04-07
   */
  maxTime?: string;
  /**
   * @example
   * 2025-04-05 13:24:25
   * 2025-04-05
   */
  minTime?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'Keyword',
      maxTime: 'MaxTime',
      minTime: 'MinTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxTime: 'string',
      minTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineEvalTasksResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @example
   * page number should be greater than 0
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6F352A02-9C0D-54A7-B57C-663CF71D5714
   */
  requestId?: string;
  tasks?: ListOnlineEvalTasksResponseBodyTasks[];
  /**
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListOnlineEvalTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnlineEvalTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListOnlineEvalTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOnlineEvalTasksResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTracesDatasRequest extends $dara.Model {
  /**
   * @example
   * end-user.12345
   */
  endUserId?: string;
  filters?: ListTracesDatasRequestFilters[];
  /**
   * @example
   * False
   */
  hasEvents?: boolean;
  /**
   * @example
   * False
   */
  hasStatusMessage?: boolean;
  /**
   * @example
   * My.super_LLM-app2
   */
  llmAppName?: string;
  /**
   * @example
   * 2024-01-31
   * 2024-12-31 23:59:59
   */
  maxTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-01-31
   * 2024-12-31 23:59:59
   */
  minTime?: string;
  /**
   * @example
   * False
   */
  opentelemetryCompatible?: boolean;
  ownerId?: string;
  /**
   * @example
   * 123456789
   */
  ownerSubId?: string;
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
  sortBy?: string;
  sortOrder?: string;
  spanIds?: string[];
  traceIds?: string[];
  traceReduceMethod?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      filters: 'Filters',
      hasEvents: 'HasEvents',
      hasStatusMessage: 'HasStatusMessage',
      llmAppName: 'LlmAppName',
      maxTime: 'MaxTime',
      minTime: 'MinTime',
      opentelemetryCompatible: 'OpentelemetryCompatible',
      ownerId: 'OwnerId',
      ownerSubId: 'OwnerSubId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      spanIds: 'SpanIds',
      traceIds: 'TraceIds',
      traceReduceMethod: 'TraceReduceMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      filters: { 'type': 'array', 'itemType': ListTracesDatasRequestFilters },
      hasEvents: 'boolean',
      hasStatusMessage: 'boolean',
      llmAppName: 'string',
      maxTime: 'string',
      minTime: 'string',
      opentelemetryCompatible: 'boolean',
      ownerId: 'string',
      ownerSubId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      spanIds: { 'type': 'array', 'itemType': 'string' },
      traceIds: { 'type': 'array', 'itemType': 'string' },
      traceReduceMethod: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(Array.isArray(this.spanIds)) {
      $dara.Model.validateArray(this.spanIds);
    }
    if(Array.isArray(this.traceIds)) {
      $dara.Model.validateArray(this.traceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTracesDatasShrinkRequest extends $dara.Model {
  /**
   * @example
   * end-user.12345
   */
  endUserId?: string;
  filtersShrink?: string;
  /**
   * @example
   * False
   */
  hasEvents?: boolean;
  /**
   * @example
   * False
   */
  hasStatusMessage?: boolean;
  /**
   * @example
   * My.super_LLM-app2
   */
  llmAppName?: string;
  /**
   * @example
   * 2024-01-31
   * 2024-12-31 23:59:59
   */
  maxTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2024-01-31
   * 2024-12-31 23:59:59
   */
  minTime?: string;
  /**
   * @example
   * False
   */
  opentelemetryCompatible?: boolean;
  ownerId?: string;
  /**
   * @example
   * 123456789
   */
  ownerSubId?: string;
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
  sortBy?: string;
  sortOrder?: string;
  spanIdsShrink?: string;
  traceIdsShrink?: string;
  traceReduceMethod?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      filtersShrink: 'Filters',
      hasEvents: 'HasEvents',
      hasStatusMessage: 'HasStatusMessage',
      llmAppName: 'LlmAppName',
      maxTime: 'MaxTime',
      minTime: 'MinTime',
      opentelemetryCompatible: 'OpentelemetryCompatible',
      ownerId: 'OwnerId',
      ownerSubId: 'OwnerSubId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      spanIdsShrink: 'SpanIds',
      traceIdsShrink: 'TraceIds',
      traceReduceMethod: 'TraceReduceMethod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      filtersShrink: 'string',
      hasEvents: 'boolean',
      hasStatusMessage: 'boolean',
      llmAppName: 'string',
      maxTime: 'string',
      minTime: 'string',
      opentelemetryCompatible: 'boolean',
      ownerId: 'string',
      ownerSubId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      sortOrder: 'string',
      spanIdsShrink: 'string',
      traceIdsShrink: 'string',
      traceReduceMethod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTracesDatasResponseBody extends $dara.Model {
  /**
   * @example
   * ExecutionFailure
   */
  code?: string;
  /**
   * @example
   * failed to get trace data
   */
  message?: string;
  /**
   * @remarks
   * POP request id
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  /**
   * @example
   * 22
   */
  totalCount?: number;
  traces?: any[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      traces: 'Traces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      totalCount: 'number',
      traces: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.traces)) {
      $dara.Model.validateArray(this.traces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTracesDatasResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTracesDatasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTracesDatasResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopOnlineEvalTaskResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @example
   * task id is empty
   */
  message?: string;
  /**
   * @remarks
   * Id of the POP request
   * 
   * @example
   * 31E5FBC2-792D-5B5C-A5EB-3019984ABFC8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopOnlineEvalTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopOnlineEvalTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopOnlineEvalTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOnlineEvalTaskRequest extends $dara.Model {
  /**
   * @example
   * my-llm-one
   */
  appName?: string;
  description?: string;
  /**
   * @example
   * 2024-09-02 22:24:00
   */
  endTime?: string;
  evaluationConfig?: EvaluationConfig;
  filters?: UpdateOnlineEvalTaskRequestFilters[];
  modelConfig?: ModelConfig;
  /**
   * @example
   * 10
   */
  samplingFrequencyMinutes?: number;
  /**
   * @example
   * 50
   */
  samplingRatio?: number;
  /**
   * @example
   * 2024-07-31 08:30:00
   */
  startTime?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      description: 'Description',
      endTime: 'EndTime',
      evaluationConfig: 'EvaluationConfig',
      filters: 'Filters',
      modelConfig: 'ModelConfig',
      samplingFrequencyMinutes: 'SamplingFrequencyMinutes',
      samplingRatio: 'SamplingRatio',
      startTime: 'StartTime',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      description: 'string',
      endTime: 'string',
      evaluationConfig: EvaluationConfig,
      filters: { 'type': 'array', 'itemType': UpdateOnlineEvalTaskRequestFilters },
      modelConfig: ModelConfig,
      samplingFrequencyMinutes: 'number',
      samplingRatio: 'number',
      startTime: 'string',
      taskName: 'string',
    };
  }

  validate() {
    if(this.evaluationConfig && typeof (this.evaluationConfig as any).validate === 'function') {
      (this.evaluationConfig as any).validate();
    }
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOnlineEvalTaskResponseBody extends $dara.Model {
  /**
   * @example
   * InvalidInputParams
   */
  code?: string;
  /**
   * @example
   * cannot modify a stopped task
   */
  message?: string;
  /**
   * @remarks
   * Id of the POP request
   * 
   * @example
   * 6A87228C-969A-1381-98CF-AE07AE630FA5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateOnlineEvalTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateOnlineEvalTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateOnlineEvalTaskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("paillmtrace", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 创建一个在线评估任务
   * 
   * @param tmpReq - CreateOnlineEvalTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateOnlineEvalTaskResponse
   */
  async createOnlineEvalTaskWithOptions(tmpReq: CreateOnlineEvalTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateOnlineEvalTaskResponse> {
    tmpReq.validate();
    let request = new CreateOnlineEvalTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.body)) {
      request.bodyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.body, "body", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bodyShrink)) {
      query["body"] = request.bodyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateOnlineEvalTask",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateOnlineEvalTaskResponse>(await this.callApi(params, req, runtime), new CreateOnlineEvalTaskResponse({}));
  }

  /**
   * 创建一个在线评估任务
   * 
   * @param request - CreateOnlineEvalTaskRequest
   * @returns CreateOnlineEvalTaskResponse
   */
  async createOnlineEvalTask(request: CreateOnlineEvalTaskRequest): Promise<CreateOnlineEvalTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createOnlineEvalTaskWithOptions(request, headers, runtime);
  }

  /**
   * Creates a service-linked role required for the PaiLLMTrace service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceIdentityRoleResponse
   */
  async createServiceIdentityRoleWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateServiceIdentityRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateServiceIdentityRole",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/ServiceIdentityRole`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<CreateServiceIdentityRoleResponse>(await this.callApi(params, req, runtime), new CreateServiceIdentityRoleResponse({}));
  }

  /**
   * Creates a service-linked role required for the PaiLLMTrace service.
   * @returns CreateServiceIdentityRoleResponse
   */
  async createServiceIdentityRole(): Promise<CreateServiceIdentityRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceIdentityRoleWithOptions(headers, runtime);
  }

  /**
   * 删除一个在线评估任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteOnlineEvalTaskResponse
   */
  async deleteOnlineEvalTaskWithOptions(TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteOnlineEvalTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteOnlineEvalTask",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<DeleteOnlineEvalTaskResponse>(await this.callApi(params, req, runtime), new DeleteOnlineEvalTaskResponse({}));
  }

  /**
   * 删除一个在线评估任务
   * @returns DeleteOnlineEvalTaskResponse
   */
  async deleteOnlineEvalTask(TaskId: string): Promise<DeleteOnlineEvalTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteOnlineEvalTaskWithOptions(TaskId, headers, runtime);
  }

  /**
   * 基于traceId创建和执行评估任务
   * 
   * @param request - EvaluateTraceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EvaluateTraceResponse
   */
  async evaluateTraceWithOptions(TraceId: string, request: EvaluateTraceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<EvaluateTraceResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.evaluationConfig)) {
      body["EvaluationConfig"] = request.evaluationConfig;
    }

    if (!$dara.isNull(request.evaluationId)) {
      body["EvaluationId"] = request.evaluationId;
    }

    if (!$dara.isNull(request.maxTime)) {
      body["MaxTime"] = request.maxTime;
    }

    if (!$dara.isNull(request.minTime)) {
      body["MinTime"] = request.minTime;
    }

    if (!$dara.isNull(request.modelConfig)) {
      body["ModelConfig"] = request.modelConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "EvaluateTrace",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/eval/trace/${$dara.URL.percentEncode(TraceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<EvaluateTraceResponse>(await this.callApi(params, req, runtime), new EvaluateTraceResponse({}));
  }

  /**
   * 基于traceId创建和执行评估任务
   * 
   * @param request - EvaluateTraceRequest
   * @returns EvaluateTraceResponse
   */
  async evaluateTrace(TraceId: string, request: EvaluateTraceRequest): Promise<EvaluateTraceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.evaluateTraceWithOptions(TraceId, request, headers, runtime);
  }

  /**
   * 获取用于评估的prompt templates内容
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEvaluationTemplatesResponse
   */
  async getEvaluationTemplatesWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetEvaluationTemplatesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEvaluationTemplates",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/eval/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetEvaluationTemplatesResponse>(await this.callApi(params, req, runtime), new GetEvaluationTemplatesResponse({}));
  }

  /**
   * 获取用于评估的prompt templates内容
   * @returns GetEvaluationTemplatesResponse
   */
  async getEvaluationTemplates(): Promise<GetEvaluationTemplatesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEvaluationTemplatesWithOptions(headers, runtime);
  }

  /**
   * 获取一个在线评估任务的详情
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetOnlineEvalTaskResponse
   */
  async getOnlineEvalTaskWithOptions(TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetOnlineEvalTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetOnlineEvalTask",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetOnlineEvalTaskResponse>(await this.callApi(params, req, runtime), new GetOnlineEvalTaskResponse({}));
  }

  /**
   * 获取一个在线评估任务的详情
   * @returns GetOnlineEvalTaskResponse
   */
  async getOnlineEvalTask(TaskId: string): Promise<GetOnlineEvalTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getOnlineEvalTaskWithOptions(TaskId, headers, runtime);
  }

  /**
   * Obtains the information related to the service-linked role.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceIdentityRoleResponse
   */
  async getServiceIdentityRoleWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetServiceIdentityRoleResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceIdentityRole",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/ServiceIdentityRole`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetServiceIdentityRoleResponse>(await this.callApi(params, req, runtime), new GetServiceIdentityRoleResponse({}));
  }

  /**
   * Obtains the information related to the service-linked role.
   * @returns GetServiceIdentityRoleResponse
   */
  async getServiceIdentityRole(): Promise<GetServiceIdentityRoleResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceIdentityRoleWithOptions(headers, runtime);
  }

  /**
   * Obtains the token used in the Xtrace service and the endpoint required for uploading trace data.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetXtraceTokenResponse
   */
  async getXtraceTokenWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetXtraceTokenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetXtraceToken",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/XtraceToken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<GetXtraceTokenResponse>(await this.callApi(params, req, runtime), new GetXtraceTokenResponse({}));
  }

  /**
   * Obtains the token used in the Xtrace service and the endpoint required for uploading trace data.
   * @returns GetXtraceTokenResponse
   */
  async getXtraceToken(): Promise<GetXtraceTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getXtraceTokenWithOptions(headers, runtime);
  }

  /**
   * 查看符合条件的在线评估任务的结果
   * 
   * @param tmpReq - ListOnlineEvalTaskResultsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOnlineEvalTaskResultsResponse
   */
  async listOnlineEvalTaskResultsWithOptions(tmpReq: ListOnlineEvalTaskResultsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListOnlineEvalTaskResultsResponse> {
    tmpReq.validate();
    let request = new ListOnlineEvalTaskResultsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.traceIds)) {
      request.traceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.traceIds, "TraceIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.evaluationId)) {
      query["EvaluationId"] = request.evaluationId;
    }

    if (!$dara.isNull(request.mostRecentResultsOnly)) {
      query["MostRecentResultsOnly"] = request.mostRecentResultsOnly;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.traceIdsShrink)) {
      query["TraceIds"] = request.traceIdsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOnlineEvalTaskResults",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltaskresults`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListOnlineEvalTaskResultsResponse>(await this.callApi(params, req, runtime), new ListOnlineEvalTaskResultsResponse({}));
  }

  /**
   * 查看符合条件的在线评估任务的结果
   * 
   * @param request - ListOnlineEvalTaskResultsRequest
   * @returns ListOnlineEvalTaskResultsResponse
   */
  async listOnlineEvalTaskResults(request: ListOnlineEvalTaskResultsRequest): Promise<ListOnlineEvalTaskResultsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOnlineEvalTaskResultsWithOptions(request, headers, runtime);
  }

  /**
   * 查看符合条件的在线评估任务
   * 
   * @param request - ListOnlineEvalTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListOnlineEvalTasksResponse
   */
  async listOnlineEvalTasksWithOptions(request: ListOnlineEvalTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListOnlineEvalTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.maxTime)) {
      query["MaxTime"] = request.maxTime;
    }

    if (!$dara.isNull(request.minTime)) {
      query["MinTime"] = request.minTime;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListOnlineEvalTasks",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListOnlineEvalTasksResponse>(await this.callApi(params, req, runtime), new ListOnlineEvalTasksResponse({}));
  }

  /**
   * 查看符合条件的在线评估任务
   * 
   * @param request - ListOnlineEvalTasksRequest
   * @returns ListOnlineEvalTasksResponse
   */
  async listOnlineEvalTasks(request: ListOnlineEvalTasksRequest): Promise<ListOnlineEvalTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOnlineEvalTasksWithOptions(request, headers, runtime);
  }

  /**
   * 从trace日志中list出符合条件的trace数据。
   * 
   * @param tmpReq - ListTracesDatasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTracesDatasResponse
   */
  async listTracesDatasWithOptions(tmpReq: ListTracesDatasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTracesDatasResponse> {
    tmpReq.validate();
    let request = new ListTracesDatasShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filters)) {
      request.filtersShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filters, "Filters", "json");
    }

    if (!$dara.isNull(tmpReq.spanIds)) {
      request.spanIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.spanIds, "SpanIds", "simple");
    }

    if (!$dara.isNull(tmpReq.traceIds)) {
      request.traceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.traceIds, "TraceIds", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endUserId)) {
      query["EndUserId"] = request.endUserId;
    }

    if (!$dara.isNull(request.filtersShrink)) {
      query["Filters"] = request.filtersShrink;
    }

    if (!$dara.isNull(request.hasEvents)) {
      query["HasEvents"] = request.hasEvents;
    }

    if (!$dara.isNull(request.hasStatusMessage)) {
      query["HasStatusMessage"] = request.hasStatusMessage;
    }

    if (!$dara.isNull(request.llmAppName)) {
      query["LlmAppName"] = request.llmAppName;
    }

    if (!$dara.isNull(request.maxTime)) {
      query["MaxTime"] = request.maxTime;
    }

    if (!$dara.isNull(request.minTime)) {
      query["MinTime"] = request.minTime;
    }

    if (!$dara.isNull(request.opentelemetryCompatible)) {
      query["OpentelemetryCompatible"] = request.opentelemetryCompatible;
    }

    if (!$dara.isNull(request.ownerId)) {
      query["OwnerId"] = request.ownerId;
    }

    if (!$dara.isNull(request.ownerSubId)) {
      query["OwnerSubId"] = request.ownerSubId;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!$dara.isNull(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!$dara.isNull(request.spanIdsShrink)) {
      query["SpanIds"] = request.spanIdsShrink;
    }

    if (!$dara.isNull(request.traceIdsShrink)) {
      query["TraceIds"] = request.traceIdsShrink;
    }

    if (!$dara.isNull(request.traceReduceMethod)) {
      query["TraceReduceMethod"] = request.traceReduceMethod;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTracesDatas",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/TracesDatas`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<ListTracesDatasResponse>(await this.callApi(params, req, runtime), new ListTracesDatasResponse({}));
  }

  /**
   * 从trace日志中list出符合条件的trace数据。
   * 
   * @param request - ListTracesDatasRequest
   * @returns ListTracesDatasResponse
   */
  async listTracesDatas(request: ListTracesDatasRequest): Promise<ListTracesDatasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTracesDatasWithOptions(request, headers, runtime);
  }

  /**
   * 停止一个在线评估任务的执行
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopOnlineEvalTaskResponse
   */
  async stopOnlineEvalTaskWithOptions(TaskId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopOnlineEvalTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StopOnlineEvalTask",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks/${$dara.URL.percentEncode(TaskId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<StopOnlineEvalTaskResponse>(await this.callApi(params, req, runtime), new StopOnlineEvalTaskResponse({}));
  }

  /**
   * 停止一个在线评估任务的执行
   * @returns StopOnlineEvalTaskResponse
   */
  async stopOnlineEvalTask(TaskId: string): Promise<StopOnlineEvalTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopOnlineEvalTaskWithOptions(TaskId, headers, runtime);
  }

  /**
   * 更改一个在线评估任务的配置
   * 
   * @param request - UpdateOnlineEvalTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateOnlineEvalTaskResponse
   */
  async updateOnlineEvalTaskWithOptions(TaskId: string, request: UpdateOnlineEvalTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateOnlineEvalTaskResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appName)) {
      body["AppName"] = request.appName;
    }

    if (!$dara.isNull(request.description)) {
      body["Description"] = request.description;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.evaluationConfig)) {
      body["EvaluationConfig"] = request.evaluationConfig;
    }

    if (!$dara.isNull(request.filters)) {
      body["Filters"] = request.filters;
    }

    if (!$dara.isNull(request.modelConfig)) {
      body["ModelConfig"] = request.modelConfig;
    }

    if (!$dara.isNull(request.samplingFrequencyMinutes)) {
      body["SamplingFrequencyMinutes"] = request.samplingFrequencyMinutes;
    }

    if (!$dara.isNull(request.samplingRatio)) {
      body["SamplingRatio"] = request.samplingRatio;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.taskName)) {
      body["TaskName"] = request.taskName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateOnlineEvalTask",
      version: "2024-03-11",
      protocol: "HTTPS",
      pathname: `/api/v1/PAILLMTrace/onlineevaltasks/${$dara.URL.percentEncode(TaskId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $dara.cast<UpdateOnlineEvalTaskResponse>(await this.callApi(params, req, runtime), new UpdateOnlineEvalTaskResponse({}));
  }

  /**
   * 更改一个在线评估任务的配置
   * 
   * @param request - UpdateOnlineEvalTaskRequest
   * @returns UpdateOnlineEvalTaskResponse
   */
  async updateOnlineEvalTask(TaskId: string, request: UpdateOnlineEvalTaskRequest): Promise<UpdateOnlineEvalTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateOnlineEvalTaskWithOptions(TaskId, request, headers, runtime);
  }

}
