// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ApplyNumberDistrictInfoParsingResultRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNumberDistrictInfoParsingResultResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNumberDistrictInfoParsingResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ApplyNumberDistrictInfoParsingResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ApplyNumberDistrictInfoParsingResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignJobsRequest extends $tea.Model {
  callingNumber?: string[];
  instanceId?: string;
  isAsynchrony?: boolean;
  jobDataParsingTaskId?: string;
  jobGroupId?: string;
  jobsJson?: string[];
  rosterType?: string;
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      isAsynchrony: 'IsAsynchrony',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobGroupId: 'JobGroupId',
      jobsJson: 'JobsJson',
      rosterType: 'RosterType',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      isAsynchrony: 'boolean',
      jobDataParsingTaskId: 'string',
      jobGroupId: 'string',
      jobsJson: { 'type': 'array', 'itemType': 'string' },
      rosterType: 'string',
      strategyJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroupId?: string;
  jobsId?: string[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroupId: 'JobGroupId',
      jobsId: 'JobsId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroupId: 'string',
      jobsId: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssignJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AssignJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssignJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobsRequest extends $tea.Model {
  all?: boolean;
  instanceId?: string;
  jobGroupId?: string;
  jobId?: string[];
  jobReferenceId?: string[];
  scenarioId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      jobReferenceId: 'JobReferenceId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobReferenceId: { 'type': 'array', 'itemType': 'string' },
      scenarioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CancelJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupRequest extends $tea.Model {
  newResourceGroupId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ChangeResourceGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ChangeResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ChangeResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsRequest extends $tea.Model {
  batchJobDescription?: string;
  batchJobName?: string;
  callingNumber?: string[];
  instanceId?: string;
  jobFilePath?: string;
  scenarioId?: string;
  scriptId?: string;
  strategyJson?: string;
  submitted?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchJobDescription: 'BatchJobDescription',
      batchJobName: 'BatchJobName',
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      jobFilePath: 'JobFilePath',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      strategyJson: 'StrategyJson',
      submitted: 'Submitted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchJobDescription: 'string',
      batchJobName: 'string',
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      jobFilePath: 'string',
      scenarioId: 'string',
      scriptId: 'string',
      strategyJson: 'string',
      submitted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBody extends $tea.Model {
  batchJob?: CreateBatchJobsResponseBodyBatchJob;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchJob: 'BatchJob',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchJob: CreateBatchJobsResponseBodyBatchJob,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBatchJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBatchJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchRepeatJobRequest extends $tea.Model {
  callingNumber?: string[];
  description?: string;
  filterStatus?: string;
  instanceId?: string;
  minConcurrency?: number;
  name?: string;
  priority?: string;
  recallStrategyJson?: string;
  ringingDuration?: number;
  scriptId?: string;
  sourceGroupId?: string;
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      description: 'Description',
      filterStatus: 'FilterStatus',
      instanceId: 'InstanceId',
      minConcurrency: 'MinConcurrency',
      name: 'Name',
      priority: 'Priority',
      recallStrategyJson: 'RecallStrategyJson',
      ringingDuration: 'RingingDuration',
      scriptId: 'ScriptId',
      sourceGroupId: 'SourceGroupId',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      filterStatus: 'string',
      instanceId: 'string',
      minConcurrency: 'number',
      name: 'string',
      priority: 'string',
      recallStrategyJson: 'string',
      ringingDuration: 'number',
      scriptId: 'string',
      sourceGroupId: 'string',
      strategyJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchRepeatJobResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroup?: CreateBatchRepeatJobResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: CreateBatchRepeatJobResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchRepeatJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBatchRepeatJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBatchRepeatJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogueFlowRequest extends $tea.Model {
  dialogueFlowType?: string;
  dialogueName?: string;
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueFlowType: 'DialogueFlowType',
      dialogueName: 'DialogueName',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueFlowType: 'string',
      dialogueName: 'string',
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogueFlowResponseBody extends $tea.Model {
  code?: string;
  dialogueFlowId?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dialogueFlowId: 'DialogueFlowId',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dialogueFlowId: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDialogueFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDialogueFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDialogueFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadUrlRequest extends $tea.Model {
  downloadTaskId?: string;
  fileId?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskId: 'DownloadTaskId',
      fileId: 'FileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskId: 'string',
      fileId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  fileHttpUrl?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileHttpUrl: 'FileHttpUrl',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileHttpUrl: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalQuestionRequest extends $tea.Model {
  answers?: string;
  globalQuestionName?: string;
  globalQuestionType?: string;
  instanceId?: string;
  questions?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      globalQuestionName: 'GlobalQuestionName',
      globalQuestionType: 'GlobalQuestionType',
      instanceId: 'InstanceId',
      questions: 'Questions',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      globalQuestionName: 'string',
      globalQuestionType: 'string',
      instanceId: 'string',
      questions: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalQuestionResponseBody extends $tea.Model {
  code?: string;
  globalQuestionId?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      globalQuestionId: 'GlobalQuestionId',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      globalQuestionId: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGlobalQuestionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateGlobalQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateGlobalQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  callingNumber?: string[];
  instanceDescription?: string;
  instanceName?: string;
  maxConcurrentConversation?: number;
  nluServiceType?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceDescription: 'InstanceDescription',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      nluServiceType: 'NluServiceType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceDescription: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
      nluServiceType: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instance?: CreateInstanceResponseBodyInstance;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instance: CreateInstanceResponseBodyInstance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceBindNumberRequest extends $tea.Model {
  instanceList?: string;
  number?: string;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: 'string',
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceBindNumberResponseBody extends $tea.Model {
  code?: string;
  data?: CreateInstanceBindNumberResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: CreateInstanceBindNumberResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceBindNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateInstanceBindNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInstanceBindNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentRequest extends $tea.Model {
  instanceId?: string;
  intentDescription?: string;
  intentName?: string;
  keywords?: string;
  scriptId?: string;
  utterances?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intentDescription: 'IntentDescription',
      intentName: 'IntentName',
      keywords: 'Keywords',
      scriptId: 'ScriptId',
      utterances: 'Utterances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intentDescription: 'string',
      intentName: 'string',
      keywords: 'string',
      scriptId: 'string',
      utterances: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  intentId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      intentId: 'IntentId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      intentId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateIntentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobDataParsingTaskRequest extends $tea.Model {
  instanceId?: string;
  jobFilePath?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobFilePath: 'JobFilePath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobFilePath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobDataParsingTaskResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobDataParsingTaskId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobDataParsingTaskId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobDataParsingTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateJobDataParsingTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateJobDataParsingTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupRequest extends $tea.Model {
  callingNumber?: string[];
  instanceId?: string;
  jobGroupDescription?: string;
  jobGroupName?: string;
  minConcurrency?: number;
  priority?: string;
  recallStrategyJson?: string;
  ringingDuration?: number;
  scenarioId?: string;
  scriptId?: string;
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupName: 'JobGroupName',
      minConcurrency: 'MinConcurrency',
      priority: 'Priority',
      recallStrategyJson: 'RecallStrategyJson',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      jobGroupDescription: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      priority: 'string',
      recallStrategyJson: 'string',
      ringingDuration: 'number',
      scenarioId: 'string',
      scriptId: 'string',
      strategyJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroup?: CreateJobGroupResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: CreateJobGroupResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupExportTaskRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  option?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      option: 'Option',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      option: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupExportTaskResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateJobGroupExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateJobGroupExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNumberDistrictInfoDownloadUrlRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNumberDistrictInfoDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  fileHttpUrl?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileHttpUrl: 'FileHttpUrl',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileHttpUrl: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNumberDistrictInfoDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNumberDistrictInfoDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNumberDistrictInfoDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNumberDistrictInfoParsingTaskRequest extends $tea.Model {
  filePath?: string;
  fileSize?: number;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      fileSize: 'FileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      fileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNumberDistrictInfoParsingTaskResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNumberDistrictInfoParsingTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateNumberDistrictInfoParsingTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNumberDistrictInfoParsingTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundCallNumberRequest extends $tea.Model {
  instanceId?: string;
  number?: string;
  rateLimitCount?: number;
  rateLimitPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
      rateLimitCount: 'RateLimitCount',
      rateLimitPeriod: 'RateLimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
      rateLimitCount: 'number',
      rateLimitPeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundCallNumberResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  outboundCallNumberId?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      outboundCallNumberId: 'OutboundCallNumberId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      outboundCallNumberId: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOutboundCallNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateOutboundCallNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateOutboundCallNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScriptRequest extends $tea.Model {
  asrConfig?: string;
  chatbotId?: string;
  emotionEnable?: boolean;
  industry?: string;
  instanceId?: string;
  longWaitEnable?: boolean;
  miniPlaybackEnable?: boolean;
  newBargeInEnable?: boolean;
  scene?: string;
  scriptContent?: string[];
  scriptDescription?: string;
  scriptName?: string;
  scriptWaveform?: string[];
  ttsConfig?: string;
  static names(): { [key: string]: string } {
    return {
      asrConfig: 'AsrConfig',
      chatbotId: 'ChatbotId',
      emotionEnable: 'EmotionEnable',
      industry: 'Industry',
      instanceId: 'InstanceId',
      longWaitEnable: 'LongWaitEnable',
      miniPlaybackEnable: 'MiniPlaybackEnable',
      newBargeInEnable: 'NewBargeInEnable',
      scene: 'Scene',
      scriptContent: 'ScriptContent',
      scriptDescription: 'ScriptDescription',
      scriptName: 'ScriptName',
      scriptWaveform: 'ScriptWaveform',
      ttsConfig: 'TtsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrConfig: 'string',
      chatbotId: 'string',
      emotionEnable: 'boolean',
      industry: 'string',
      instanceId: 'string',
      longWaitEnable: 'boolean',
      miniPlaybackEnable: 'boolean',
      newBargeInEnable: 'boolean',
      scene: 'string',
      scriptContent: { 'type': 'array', 'itemType': 'string' },
      scriptDescription: 'string',
      scriptName: 'string',
      scriptWaveform: { 'type': 'array', 'itemType': 'string' },
      ttsConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScriptResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  script?: CreateScriptResponseBodyScript;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      script: 'Script',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      script: CreateScriptResponseBodyScript,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScriptWaveformRequest extends $tea.Model {
  fileId?: string;
  fileName?: string;
  instanceId?: string;
  scriptContent?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      instanceId: 'InstanceId',
      scriptContent: 'ScriptContent',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      instanceId: 'string',
      scriptContent: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScriptWaveformResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scriptWaveformId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scriptWaveformId: 'ScriptWaveformId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptWaveformId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScriptWaveformResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateScriptWaveformResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateScriptWaveformResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  tagGroup?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      tagGroup: 'TagGroup',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      tagGroup: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTagResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTagResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTagResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskExportTaskRequest extends $tea.Model {
  actualTimeGte?: number;
  actualTimeLte?: number;
  callDurationGte?: number;
  callDurationLte?: number;
  calledNumber?: string;
  hasAnswered?: boolean;
  hasHangUpByRejection?: boolean;
  hasReachedEndOfFlow?: boolean;
  instanceId?: string;
  jobGroupId?: string;
  jobGroupNameQuery?: string;
  jobId?: string;
  jobStatusStringList?: string;
  otherId?: string;
  pageIndex?: number;
  pageSize?: number;
  recordingDurationGte?: number;
  recordingDurationLte?: number;
  scriptNameQuery?: string;
  sortBy?: string;
  sortOrder?: string;
  taskCreateTimeGte?: number;
  taskCreateTimeLte?: number;
  taskId?: string;
  taskStatusStringList?: string;
  userIdMatch?: string;
  static names(): { [key: string]: string } {
    return {
      actualTimeGte: 'ActualTimeGte',
      actualTimeLte: 'ActualTimeLte',
      callDurationGte: 'CallDurationGte',
      callDurationLte: 'CallDurationLte',
      calledNumber: 'CalledNumber',
      hasAnswered: 'HasAnswered',
      hasHangUpByRejection: 'HasHangUpByRejection',
      hasReachedEndOfFlow: 'HasReachedEndOfFlow',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupNameQuery: 'JobGroupNameQuery',
      jobId: 'JobId',
      jobStatusStringList: 'JobStatusStringList',
      otherId: 'OtherId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      recordingDurationGte: 'RecordingDurationGte',
      recordingDurationLte: 'RecordingDurationLte',
      scriptNameQuery: 'ScriptNameQuery',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      taskCreateTimeGte: 'TaskCreateTimeGte',
      taskCreateTimeLte: 'TaskCreateTimeLte',
      taskId: 'TaskId',
      taskStatusStringList: 'TaskStatusStringList',
      userIdMatch: 'UserIdMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTimeGte: 'number',
      actualTimeLte: 'number',
      callDurationGte: 'number',
      callDurationLte: 'number',
      calledNumber: 'string',
      hasAnswered: 'boolean',
      hasHangUpByRejection: 'boolean',
      hasReachedEndOfFlow: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupNameQuery: 'string',
      jobId: 'string',
      jobStatusStringList: 'string',
      otherId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      recordingDurationGte: 'number',
      recordingDurationLte: 'number',
      scriptNameQuery: 'string',
      sortBy: 'string',
      sortOrder: 'string',
      taskCreateTimeGte: 'number',
      taskCreateTimeLte: 'number',
      taskId: 'string',
      taskStatusStringList: 'string',
      userIdMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskExportTaskResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTaskExportTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTaskExportTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTaskExportTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllNumberDistrictInfoResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAllNumberDistrictInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteAllNumberDistrictInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteAllNumberDistrictInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactBlockListRequest extends $tea.Model {
  contactBlockListId?: string;
  instanceId?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      contactBlockListId: 'ContactBlockListId',
      instanceId: 'InstanceId',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactBlockListId: 'string',
      instanceId: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactBlockListResponseBody extends $tea.Model {
  affectedRows?: number;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactBlockListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteContactBlockListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteContactBlockListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactWhiteListRequest extends $tea.Model {
  contactWhiteListId?: string;
  instanceId?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      contactWhiteListId: 'ContactWhiteListId',
      instanceId: 'InstanceId',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactWhiteListId: 'string',
      instanceId: 'string',
      operator: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactWhiteListResponseBody extends $tea.Model {
  affectedRows?: number;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContactWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteContactWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteContactWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDialogueFlowRequest extends $tea.Model {
  dialogueFlowId?: string;
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueFlowId: 'DialogueFlowId',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueFlowId: 'string',
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDialogueFlowResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDialogueFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteDialogueFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDialogueFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalQuestionRequest extends $tea.Model {
  globalQuestionId?: string;
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      globalQuestionId: 'GlobalQuestionId',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalQuestionId: 'string',
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalQuestionResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGlobalQuestionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteGlobalQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteGlobalQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
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

export class DeleteInstanceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntentRequest extends $tea.Model {
  instanceId?: string;
  intentId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intentId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntentResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteIntentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobGroupRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundCallNumberRequest extends $tea.Model {
  instanceId?: string;
  outboundCallNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      outboundCallNumberId: 'OutboundCallNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      outboundCallNumberId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundCallNumberResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteOutboundCallNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteOutboundCallNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteOutboundCallNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScriptRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScriptResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScriptRecordingRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  uuidsJson?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      uuidsJson: 'UuidsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      uuidsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScriptRecordingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScriptRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteScriptRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteScriptRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScriptWaveformRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  scriptWaveformId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      scriptWaveformId: 'ScriptWaveformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      scriptWaveformId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScriptWaveformResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScriptWaveformResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteScriptWaveformResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteScriptWaveformResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogueNodeStatisticsRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogueNodeStatisticsResponseBody extends $tea.Model {
  code?: string;
  groupId?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  noAnswerDialogueNodes?: DescribeDialogueNodeStatisticsResponseBodyNoAnswerDialogueNodes[];
  requestId?: string;
  success?: boolean;
  totalCompleted?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      groupId: 'GroupId',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      noAnswerDialogueNodes: 'NoAnswerDialogueNodes',
      requestId: 'RequestId',
      success: 'Success',
      totalCompleted: 'TotalCompleted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      groupId: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      noAnswerDialogueNodes: { 'type': 'array', 'itemType': DescribeDialogueNodeStatisticsResponseBodyNoAnswerDialogueNodes },
      requestId: 'string',
      success: 'boolean',
      totalCompleted: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogueNodeStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDialogueNodeStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDialogueNodeStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDsReportsRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDsReportsResponseBody extends $tea.Model {
  code?: string;
  dsReports?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dsReports: 'DsReports',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dsReports: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDsReportsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeDsReportsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeDsReportsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalQuestionRequest extends $tea.Model {
  globalQuestionId?: string;
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      globalQuestionId: 'GlobalQuestionId',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalQuestionId: 'string',
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalQuestionResponseBody extends $tea.Model {
  code?: string;
  globalQuestion?: DescribeGlobalQuestionResponseBodyGlobalQuestion;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      globalQuestion: 'GlobalQuestion',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      globalQuestion: DescribeGlobalQuestionResponseBodyGlobalQuestion,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalQuestionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGlobalQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGlobalQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupExecutingInfoRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupExecutingInfoResponseBody extends $tea.Model {
  code?: string;
  executingInfo?: DescribeGroupExecutingInfoResponseBodyExecutingInfo;
  groupId?: string;
  httpStatusCode?: number;
  instanceId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      executingInfo: 'ExecutingInfo',
      groupId: 'GroupId',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      executingInfo: DescribeGroupExecutingInfoResponseBodyExecutingInfo,
      groupId: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupExecutingInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeGroupExecutingInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeGroupExecutingInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
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

export class DescribeInstanceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instance?: DescribeInstanceResponseBodyInstance;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instance: DescribeInstanceResponseBodyInstance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentRequest extends $tea.Model {
  instanceId?: string;
  intentId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intentId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  intent?: DescribeIntentResponseBodyIntent;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      intent: 'Intent',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      intent: DescribeIntentResponseBodyIntent,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentStatisticsRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      limit: 'Limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
      limit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentStatisticsResponseBody extends $tea.Model {
  code?: string;
  globalIntentNum?: number;
  globalIntents?: DescribeIntentStatisticsResponseBodyGlobalIntents[];
  groupId?: string;
  httpStatusCode?: number;
  instanceId?: string;
  intentsAfterNoAnswer?: DescribeIntentStatisticsResponseBodyIntentsAfterNoAnswer[];
  message?: string;
  processIntentNum?: number;
  processIntents?: DescribeIntentStatisticsResponseBodyProcessIntents[];
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      globalIntentNum: 'GlobalIntentNum',
      globalIntents: 'GlobalIntents',
      groupId: 'GroupId',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      intentsAfterNoAnswer: 'IntentsAfterNoAnswer',
      message: 'Message',
      processIntentNum: 'ProcessIntentNum',
      processIntents: 'ProcessIntents',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      globalIntentNum: 'number',
      globalIntents: { 'type': 'array', 'itemType': DescribeIntentStatisticsResponseBodyGlobalIntents },
      groupId: 'string',
      httpStatusCode: 'number',
      instanceId: 'string',
      intentsAfterNoAnswer: { 'type': 'array', 'itemType': DescribeIntentStatisticsResponseBodyIntentsAfterNoAnswer },
      message: 'string',
      processIntentNum: 'number',
      processIntents: { 'type': 'array', 'itemType': DescribeIntentStatisticsResponseBodyProcessIntents },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeIntentStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeIntentStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobRequest extends $tea.Model {
  instanceId?: string;
  jobId?: string;
  withScript?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
      withScript: 'WithScript',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: 'string',
      withScript: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  job?: DescribeJobResponseBodyJob;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      job: 'Job',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      job: DescribeJobResponseBodyJob,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobDataParsingTaskProgressRequest extends $tea.Model {
  instanceId?: string;
  jobDataParsingTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobDataParsingTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobDataParsingTaskProgressResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  progress?: DescribeJobDataParsingTaskProgressResponseBodyProgress;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      progress: 'Progress',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      progress: DescribeJobDataParsingTaskProgressResponseBodyProgress,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobDataParsingTaskProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeJobDataParsingTaskProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeJobDataParsingTaskProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupRequest extends $tea.Model {
  briefTypes?: string[];
  instanceId?: string;
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      briefTypes: 'BriefTypes',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      briefTypes: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroup?: DescribeJobGroupResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: DescribeJobGroupResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupExportTaskProgressRequest extends $tea.Model {
  instanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupExportTaskProgressResponseBody extends $tea.Model {
  code?: string;
  fileHttpUrl?: string;
  httpStatusCode?: number;
  message?: string;
  progress?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileHttpUrl: 'FileHttpUrl',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      progress: 'Progress',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileHttpUrl: 'string',
      httpStatusCode: 'number',
      message: 'string',
      progress: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupExportTaskProgressResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeJobGroupExportTaskProgressResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeJobGroupExportTaskProgressResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNumberDistrictInfoStatusResponseBody extends $tea.Model {
  appliedVersion?: DescribeNumberDistrictInfoStatusResponseBodyAppliedVersion;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  parsingVersion?: DescribeNumberDistrictInfoStatusResponseBodyParsingVersion;
  requestId?: string;
  status?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      appliedVersion: 'AppliedVersion',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      parsingVersion: 'ParsingVersion',
      requestId: 'RequestId',
      status: 'Status',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedVersion: DescribeNumberDistrictInfoStatusResponseBodyAppliedVersion,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      parsingVersion: DescribeNumberDistrictInfoStatusResponseBodyParsingVersion,
      requestId: 'string',
      status: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNumberDistrictInfoStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeNumberDistrictInfoStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeNumberDistrictInfoStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScriptRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScriptResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  nlsConfig?: string;
  requestId?: string;
  script?: DescribeScriptResponseBodyScript;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nlsConfig: 'NlsConfig',
      requestId: 'RequestId',
      script: 'Script',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nlsConfig: 'string',
      requestId: 'string',
      script: DescribeScriptResponseBodyScript,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScriptVoiceConfigRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  scriptVoiceConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      scriptVoiceConfigId: 'ScriptVoiceConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      scriptVoiceConfigId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScriptVoiceConfigResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scriptVoiceConfig?: DescribeScriptVoiceConfigResponseBodyScriptVoiceConfig;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scriptVoiceConfig: 'ScriptVoiceConfig',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptVoiceConfig: DescribeScriptVoiceConfigResponseBodyScriptVoiceConfig,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScriptVoiceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeScriptVoiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeScriptVoiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSConfigRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSConfigResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  TTSConfig?: DescribeTTSConfigResponseBodyTTSConfig;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      TTSConfig: 'TTSConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      TTSConfig: DescribeTTSConfigResponseBodyTTSConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTTSConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTTSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSDemoRequest extends $tea.Model {
  instanceId?: string;
  pitchRate?: number;
  scriptId?: string;
  speechRate?: number;
  text?: string;
  voice?: string;
  volume?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pitchRate: 'PitchRate',
      scriptId: 'ScriptId',
      speechRate: 'SpeechRate',
      text: 'Text',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pitchRate: 'number',
      scriptId: 'string',
      speechRate: 'number',
      text: 'string',
      voice: 'string',
      volume: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSDemoResponseBody extends $tea.Model {
  auditionUrl?: string;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auditionUrl: 'AuditionUrl',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditionUrl: 'string',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSDemoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTTSDemoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTTSDemoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagHitsSummaryRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagHitsSummaryResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  tagGroups?: DescribeTagHitsSummaryResponseBodyTagGroups[];
  tagHitsList?: DescribeTagHitsSummaryResponseBodyTagHitsList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagGroups: 'TagGroups',
      tagHitsList: 'TagHitsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagGroups: { 'type': 'array', 'itemType': DescribeTagHitsSummaryResponseBodyTagGroups },
      tagHitsList: { 'type': 'array', 'itemType': DescribeTagHitsSummaryResponseBodyTagHitsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagHitsSummaryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTagHitsSummaryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTagHitsSummaryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantBindNumberRequest extends $tea.Model {
  number?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantBindNumberResponseBody extends $tea.Model {
  code?: string;
  data?: DescribeTenantBindNumberResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeTenantBindNumberResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantBindNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DescribeTenantBindNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeTenantBindNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueRequest extends $tea.Model {
  actionKey?: string;
  actionParams?: string;
  callId?: string;
  callType?: string;
  calledNumber?: string;
  callingNumber?: string;
  instanceId?: string;
  scenarioId?: string;
  scriptId?: string;
  taskId?: string;
  utterance?: string;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'ActionKey',
      actionParams: 'ActionParams',
      callId: 'CallId',
      callType: 'CallType',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      taskId: 'TaskId',
      utterance: 'Utterance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      actionParams: 'string',
      callId: 'string',
      callType: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      instanceId: 'string',
      scenarioId: 'string',
      scriptId: 'string',
      taskId: 'string',
      utterance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBody extends $tea.Model {
  code?: string;
  feedback?: DialogueResponseBodyFeedback;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      feedback: 'Feedback',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      feedback: DialogueResponseBodyFeedback,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DialogueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DialogueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissNumberDistrictInfoParsingResultRequest extends $tea.Model {
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissNumberDistrictInfoParsingResultResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DismissNumberDistrictInfoParsingResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DismissNumberDistrictInfoParsingResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DismissNumberDistrictInfoParsingResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadRecordingRequest extends $tea.Model {
  instanceId?: string;
  needVoiceSliceRecording?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      needVoiceSliceRecording: 'NeedVoiceSliceRecording',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      needVoiceSliceRecording: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadRecordingResponseBody extends $tea.Model {
  code?: string;
  downloadParams?: DownloadRecordingResponseBodyDownloadParams;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadParams: 'DownloadParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadParams: DownloadRecordingResponseBodyDownloadParams,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DownloadRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadScriptRecordingRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadScriptRecordingResponseBody extends $tea.Model {
  code?: string;
  downloadParams?: DownloadScriptRecordingResponseBodyDownloadParams;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadParams: 'DownloadParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadParams: DownloadScriptRecordingResponseBodyDownloadParams,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadScriptRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DownloadScriptRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DownloadScriptRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DuplicateScriptRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  sourceScriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      sourceScriptId: 'SourceScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      sourceScriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DuplicateScriptResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scriptId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scriptId: 'ScriptId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DuplicateScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DuplicateScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DuplicateScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportScriptRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportScriptResponseBody extends $tea.Model {
  code?: string;
  downloadParams?: ExportScriptResponseBodyDownloadParams;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadParams: 'DownloadParams',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadParams: ExportScriptResponseBodyDownloadParams,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExportScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExportScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadUrlRequest extends $tea.Model {
  fileName?: string;
  key?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      key: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadUrlResponseBody extends $tea.Model {
  code?: string;
  data?: GenerateUploadUrlResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GenerateUploadUrlResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAfterAnswerDelayPlaybackRequest extends $tea.Model {
  entryId?: string;
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      strategyLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAfterAnswerDelayPlaybackResponseBody extends $tea.Model {
  afterAnswerDelayPlayback?: number;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      afterAnswerDelayPlayback: 'AfterAnswerDelayPlayback',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterAnswerDelayPlayback: 'number',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAfterAnswerDelayPlaybackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAfterAnswerDelayPlaybackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAfterAnswerDelayPlaybackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrServerInfoRequest extends $tea.Model {
  entryId?: string;
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      strategyLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrServerInfoResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsrServerInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAsrServerInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAsrServerInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaseStrategyPeriodRequest extends $tea.Model {
  entryId?: string;
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      strategyLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaseStrategyPeriodResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  onlyWeekdays?: boolean;
  requestId?: string;
  success?: boolean;
  workingTime?: GetBaseStrategyPeriodResponseBodyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      onlyWeekdays: 'OnlyWeekdays',
      requestId: 'RequestId',
      success: 'Success',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      onlyWeekdays: 'boolean',
      requestId: 'string',
      success: 'boolean',
      workingTime: { 'type': 'array', 'itemType': GetBaseStrategyPeriodResponseBodyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaseStrategyPeriodResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBaseStrategyPeriodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBaseStrategyPeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConcurrentConversationQuotaResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  maxConcurrent?: number;
  message?: string;
  remainingConcurrent?: number;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      maxConcurrent: 'MaxConcurrent',
      message: 'Message',
      remainingConcurrent: 'RemainingConcurrent',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      maxConcurrent: 'number',
      message: 'string',
      remainingConcurrent: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConcurrentConversationQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetConcurrentConversationQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetConcurrentConversationQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactBlockListRequest extends $tea.Model {
  countTotalRow?: boolean;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      countTotalRow: 'CountTotalRow',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countTotalRow: 'boolean',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactBlockListResponseBody extends $tea.Model {
  code?: string;
  contactBlocklistList?: GetContactBlockListResponseBodyContactBlocklistList;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactBlocklistList: 'ContactBlocklistList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactBlocklistList: GetContactBlockListResponseBodyContactBlocklistList,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactBlockListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetContactBlockListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetContactBlockListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactWhiteListRequest extends $tea.Model {
  countTotalRow?: boolean;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      countTotalRow: 'CountTotalRow',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countTotalRow: 'boolean',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactWhiteListResponseBody extends $tea.Model {
  code?: string;
  contactWhitelistList?: GetContactWhiteListResponseBodyContactWhitelistList;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      contactWhitelistList: 'ContactWhitelistList',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      contactWhitelistList: GetContactWhiteListResponseBodyContactWhitelistList,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetContactWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetContactWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentConcurrencyRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
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

export class GetCurrentConcurrencyResponseBody extends $tea.Model {
  code?: string;
  currentConcurrency?: number;
  httpStatusCode?: number;
  instanceId?: string;
  maxConcurrentConversation?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentConcurrency: 'CurrentConcurrency',
      httpStatusCode: 'HttpStatusCode',
      instanceId: 'InstanceId',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentConcurrency: 'number',
      httpStatusCode: 'number',
      instanceId: 'string',
      maxConcurrentConversation: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCurrentConcurrencyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCurrentConcurrencyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCurrentConcurrencyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectiveDaysRequest extends $tea.Model {
  entryId?: string;
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      strategyLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectiveDaysResponseBody extends $tea.Model {
  code?: string;
  effectiveDays?: number;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      effectiveDays: 'EffectiveDays',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      effectiveDays: 'number',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEffectiveDaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEffectiveDaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEffectiveDaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmptyNumberNoMoreCallsInfoRequest extends $tea.Model {
  entryId?: string;
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      strategyLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmptyNumberNoMoreCallsInfoResponseBody extends $tea.Model {
  code?: string;
  emptyNumberNoMoreCalls?: boolean;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      emptyNumberNoMoreCalls: 'EmptyNumberNoMoreCalls',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      emptyNumberNoMoreCalls: 'boolean',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEmptyNumberNoMoreCallsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetEmptyNumberNoMoreCallsInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetEmptyNumberNoMoreCallsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaxAttemptsPerDayRequest extends $tea.Model {
  entryId?: string;
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      strategyLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaxAttemptsPerDayResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  maxAttemptsPerDay?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      maxAttemptsPerDay: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaxAttemptsPerDayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMaxAttemptsPerDayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMaxAttemptsPerDayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberDistrictInfoTemplateDownloadUrlResponseBody extends $tea.Model {
  code?: string;
  fileHttpUrl?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      fileHttpUrl: 'FileHttpUrl',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      fileHttpUrl: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNumberDistrictInfoTemplateDownloadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetNumberDistrictInfoTemplateDownloadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetNumberDistrictInfoTemplateDownloadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryInfoRequest extends $tea.Model {
  instanceIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIdList: 'InstanceIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryInfoResponseBody extends $tea.Model {
  agentBotInstanceSummaryList?: GetSummaryInfoResponseBodyAgentBotInstanceSummaryList[];
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      agentBotInstanceSummaryList: 'AgentBotInstanceSummaryList',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentBotInstanceSummaryList: { 'type': 'array', 'itemType': GetSummaryInfoResponseBodyAgentBotInstanceSummaryList },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetSummaryInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetSummaryInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskByUuidRequest extends $tea.Model {
  instanceId?: string;
  taskId?: string;
  withConversations?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      taskId: 'TaskId',
      withConversations: 'WithConversations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      taskId: 'string',
      withConversations: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskByUuidResponseBody extends $tea.Model {
  requestId?: string;
  task?: GetTaskByUuidResponseBodyTask;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      task: 'Task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      task: GetTaskByUuidResponseBodyTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskByUuidResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTaskByUuidResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskByUuidResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVersionResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportScriptRequest extends $tea.Model {
  instanceId?: string;
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      signatureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportScriptResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scriptId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scriptId: 'ScriptId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImportScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ImportScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ImportScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InflightTaskTimeoutRequest extends $tea.Model {
  instanceId?: string;
  instanceOwnerId?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceOwnerId: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InflightTaskTimeoutResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InflightTaskTimeoutResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: InflightTaskTimeoutResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InflightTaskTimeoutResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTenantBindNumberBindingResponseBody extends $tea.Model {
  code?: string;
  data?: ListAllTenantBindNumberBindingResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListAllTenantBindNumberBindingResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTenantBindNumberBindingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListAllTenantBindNumberBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAllTenantBindNumberBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesResponseBody extends $tea.Model {
  bots?: ListChatbotInstancesResponseBodyBots[];
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bots: 'Bots',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bots: { 'type': 'array', 'itemType': ListChatbotInstancesResponseBodyBots },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListChatbotInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListChatbotInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueFlowsRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueFlowsResponseBody extends $tea.Model {
  code?: string;
  dialogueFlows?: ListDialogueFlowsResponseBodyDialogueFlows[];
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dialogueFlows: 'DialogueFlows',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dialogueFlows: { 'type': 'array', 'itemType': ListDialogueFlowsResponseBodyDialogueFlows },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueFlowsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDialogueFlowsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDialogueFlowsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksResponseBody extends $tea.Model {
  code?: string;
  downloadTasks?: ListDownloadTasksResponseBodyDownloadTasks;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      downloadTasks: 'DownloadTasks',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      downloadTasks: ListDownloadTasksResponseBodyDownloadTasks,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListDownloadTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDownloadTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalQuestionsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalQuestionsResponseBody extends $tea.Model {
  code?: string;
  globalQuestions?: ListGlobalQuestionsResponseBodyGlobalQuestions;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      globalQuestions: 'GlobalQuestions',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      globalQuestions: ListGlobalQuestionsResponseBodyGlobalQuestions,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalQuestionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListGlobalQuestionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGlobalQuestionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  resourceGroupId?: string;
  tag?: ListInstancesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListInstancesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instances?: ListInstancesResponseBodyInstances[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instances: 'Instances',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentsRequest extends $tea.Model {
  instanceId?: string;
  keyword?: string;
  pageNumber?: number;
  pageSize?: number;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  intents?: ListIntentsResponseBodyIntents;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      intents: 'Intents',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      intents: ListIntentsResponseBodyIntents,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListIntentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListIntentsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsRequest extends $tea.Model {
  asyncQuery?: boolean;
  endTime?: number;
  instanceId?: string;
  jobGroupStatusFilter?: string;
  pageNumber?: number;
  pageSize?: number;
  searchText?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      asyncQuery: 'AsyncQuery',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobGroupStatusFilter: 'JobGroupStatusFilter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchText: 'SearchText',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncQuery: 'boolean',
      endTime: 'number',
      instanceId: 'string',
      jobGroupStatusFilter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchText: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBody extends $tea.Model {
  asyncTaskId?: string;
  code?: string;
  httpStatusCode?: number;
  jobGroups?: ListJobGroupsResponseBodyJobGroups;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroups: 'JobGroups',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
      code: 'string',
      httpStatusCode: 'number',
      jobGroups: ListJobGroupsResponseBodyJobGroups,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListJobGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsAsyncRequest extends $tea.Model {
  asyncTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncTaskId: 'AsyncTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTaskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsAsyncResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroups?: ListJobGroupsAsyncResponseBodyJobGroups[];
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  timeout?: boolean;
  totalCount?: number;
  vaild?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroups: 'JobGroups',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      timeout: 'Timeout',
      totalCount: 'TotalCount',
      vaild: 'Vaild',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroups: { 'type': 'array', 'itemType': ListJobGroupsAsyncResponseBodyJobGroups },
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      timeout: 'boolean',
      totalCount: 'number',
      vaild: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsAsyncResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListJobGroupsAsyncResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobGroupsAsyncResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  instanceId?: string;
  jobId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobs?: ListJobsResponseBodyJobs[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobs: 'Jobs',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobs: { 'type': 'array', 'itemType': ListJobsResponseBodyJobs },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

export class ListJobsByGroupRequest extends $tea.Model {
  instanceId?: string;
  jobFailureReason?: string;
  jobGroupId?: string;
  jobStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobFailureReason: 'JobFailureReason',
      jobGroupId: 'JobGroupId',
      jobStatus: 'JobStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobFailureReason: 'string',
      jobGroupId: 'string',
      jobStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobs?: ListJobsByGroupResponseBodyJobs;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobs: 'Jobs',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobs: ListJobsByGroupResponseBodyJobs,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListJobsByGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListJobsByGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundCallNumbersRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundCallNumbersResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  outboundCallNumbers?: ListOutboundCallNumbersResponseBodyOutboundCallNumbers;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      outboundCallNumbers: 'OutboundCallNumbers',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      outboundCallNumbers: ListOutboundCallNumbersResponseBodyOutboundCallNumbers,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundCallNumbersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListOutboundCallNumbersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListOutboundCallNumbersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  resourceTags?: ListResourceTagsResponseBodyResourceTags;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      resourceTags: 'ResourceTags',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      resourceTags: ListResourceTagsResponseBodyResourceTags,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListResourceTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListResourceTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulerInstancesRequest extends $tea.Model {
  instanceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceOwnerId: 'InstanceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceOwnerId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulerInstancesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  schedulerInstances?: ListSchedulerInstancesResponseBodySchedulerInstances[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      schedulerInstances: 'SchedulerInstances',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      schedulerInstances: { 'type': 'array', 'itemType': ListSchedulerInstancesResponseBodySchedulerInstances },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulerInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListSchedulerInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSchedulerInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptPublishHistoriesRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptPublishHistoriesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scriptPublishHistories?: ListScriptPublishHistoriesResponseBodyScriptPublishHistories;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scriptPublishHistories: 'ScriptPublishHistories',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptPublishHistories: ListScriptPublishHistoriesResponseBodyScriptPublishHistories,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptPublishHistoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListScriptPublishHistoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScriptPublishHistoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptRecordingRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  scriptId?: string;
  search?: string;
  statesJson?: string;
  uuidsJson?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptId: 'ScriptId',
      search: 'Search',
      statesJson: 'StatesJson',
      uuidsJson: 'UuidsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scriptId: 'string',
      search: 'string',
      statesJson: 'string',
      uuidsJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptRecordingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  scriptRecordings?: ListScriptRecordingResponseBodyScriptRecordings[];
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      scriptRecordings: 'ScriptRecordings',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      scriptRecordings: { 'type': 'array', 'itemType': ListScriptRecordingResponseBodyScriptRecordings },
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListScriptRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScriptRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptVoiceConfigsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptVoiceConfigsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scriptVoiceConfigs?: ListScriptVoiceConfigsResponseBodyScriptVoiceConfigs;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scriptVoiceConfigs: 'ScriptVoiceConfigs',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptVoiceConfigs: ListScriptVoiceConfigsResponseBodyScriptVoiceConfigs,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptVoiceConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListScriptVoiceConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScriptVoiceConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scripts?: ListScriptsResponseBodyScripts;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scripts: 'Scripts',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scripts: ListScriptsResponseBodyScripts,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListScriptsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListScriptsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  nextToken?: string;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  tagGroups?: ListTagsResponseBodyTagGroups[];
  tags?: ListTagsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagGroups: 'TagGroups',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagGroups: { 'type': 'array', 'itemType': ListTagsResponseBodyTagGroups },
      tags: { 'type': 'array', 'itemType': ListTagsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBatchJobsRequest extends $tea.Model {
  batchJobName?: string;
  callingNumber?: string[];
  description?: string;
  instanceId?: string;
  jobFilePath?: string;
  jobGroupId?: string;
  scenarioId?: string;
  scriptId?: string;
  strategyJson?: string;
  submitted?: boolean;
  static names(): { [key: string]: string } {
    return {
      batchJobName: 'BatchJobName',
      callingNumber: 'CallingNumber',
      description: 'Description',
      instanceId: 'InstanceId',
      jobFilePath: 'JobFilePath',
      jobGroupId: 'JobGroupId',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      strategyJson: 'StrategyJson',
      submitted: 'Submitted',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchJobName: 'string',
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      instanceId: 'string',
      jobFilePath: 'string',
      jobGroupId: 'string',
      scenarioId: 'string',
      scriptId: 'string',
      strategyJson: 'string',
      submitted: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBatchJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroup?: ModifyBatchJobsResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: ModifyBatchJobsResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBatchJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyBatchJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyBatchJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDialogueFlowRequest extends $tea.Model {
  dialogueFlowDefinition?: string;
  dialogueFlowId?: string;
  instanceId?: string;
  isDrafted?: boolean;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueFlowDefinition: 'DialogueFlowDefinition',
      dialogueFlowId: 'DialogueFlowId',
      instanceId: 'InstanceId',
      isDrafted: 'IsDrafted',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueFlowDefinition: 'string',
      dialogueFlowId: 'string',
      instanceId: 'string',
      isDrafted: 'boolean',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDialogueFlowResponseBody extends $tea.Model {
  code?: string;
  dialogueFlowDefinition?: string;
  dialogueFlowId?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dialogueFlowDefinition: 'DialogueFlowDefinition',
      dialogueFlowId: 'DialogueFlowId',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dialogueFlowDefinition: 'string',
      dialogueFlowId: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDialogueFlowResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyDialogueFlowResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyDialogueFlowResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEmptyNumberNoMoreCallsInfoRequest extends $tea.Model {
  emptyNumberNoMoreCalls?: boolean;
  entryId?: string;
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      emptyNumberNoMoreCalls: 'EmptyNumberNoMoreCalls',
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emptyNumberNoMoreCalls: 'boolean',
      entryId: 'string',
      strategyLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEmptyNumberNoMoreCallsInfoResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyEmptyNumberNoMoreCallsInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyEmptyNumberNoMoreCallsInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyEmptyNumberNoMoreCallsInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalQuestionRequest extends $tea.Model {
  answers?: string;
  globalQuestionId?: string;
  globalQuestionName?: string;
  globalQuestionType?: string;
  instanceId?: string;
  questions?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      globalQuestionId: 'GlobalQuestionId',
      globalQuestionName: 'GlobalQuestionName',
      globalQuestionType: 'GlobalQuestionType',
      instanceId: 'InstanceId',
      questions: 'Questions',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      globalQuestionId: 'string',
      globalQuestionName: 'string',
      globalQuestionType: 'string',
      instanceId: 'string',
      questions: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalQuestionResponseBody extends $tea.Model {
  code?: string;
  dialogueQuestionId?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dialogueQuestionId: 'DialogueQuestionId',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dialogueQuestionId: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyGlobalQuestionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyGlobalQuestionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyGlobalQuestionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceRequest extends $tea.Model {
  callingNumber?: string[];
  instanceDescription?: string;
  instanceId?: string;
  instanceName?: string;
  maxConcurrentConversation?: number;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  instance?: ModifyInstanceResponseBodyInstance;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      instance: 'Instance',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      instance: ModifyInstanceResponseBodyInstance,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIntentRequest extends $tea.Model {
  instanceId?: string;
  intentDescription?: string;
  intentId?: string;
  intentName?: string;
  keywords?: string;
  scriptId?: string;
  utterances?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      intentDescription: 'IntentDescription',
      intentId: 'IntentId',
      intentName: 'IntentName',
      keywords: 'Keywords',
      scriptId: 'ScriptId',
      utterances: 'Utterances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      intentDescription: 'string',
      intentId: 'string',
      intentName: 'string',
      keywords: 'string',
      scriptId: 'string',
      utterances: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIntentResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  intentId?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      intentId: 'IntentId',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      intentId: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyIntentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyIntentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyIntentResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobGroupRequest extends $tea.Model {
  callingNumber?: string[];
  description?: string;
  instanceId?: string;
  jobGroupId?: string;
  jobGroupStatus?: string;
  minConcurrency?: number;
  name?: string;
  priority?: string;
  recallStrategyJson?: string;
  ringingDuration?: number;
  scenarioId?: string;
  scriptId?: string;
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      description: 'Description',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupStatus: 'JobGroupStatus',
      minConcurrency: 'MinConcurrency',
      name: 'Name',
      priority: 'Priority',
      recallStrategyJson: 'RecallStrategyJson',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupStatus: 'string',
      minConcurrency: 'number',
      name: 'string',
      priority: 'string',
      recallStrategyJson: 'string',
      ringingDuration: 'number',
      scenarioId: 'string',
      scriptId: 'string',
      strategyJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobGroupResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobGroup?: ModifyJobGroupResponseBodyJobGroup;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobGroup: 'JobGroup',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobGroup: ModifyJobGroupResponseBodyJobGroup,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyJobGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyJobGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOutboundCallNumberRequest extends $tea.Model {
  instanceId?: string;
  number?: string;
  outboundCallNumberId?: string;
  rateLimitCount?: number;
  rateLimitPeriod?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      number: 'Number',
      outboundCallNumberId: 'OutboundCallNumberId',
      rateLimitCount: 'RateLimitCount',
      rateLimitPeriod: 'RateLimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      number: 'string',
      outboundCallNumberId: 'string',
      rateLimitCount: 'number',
      rateLimitPeriod: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOutboundCallNumberResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  outboundCallNumber?: ModifyOutboundCallNumberResponseBodyOutboundCallNumber;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      outboundCallNumber: 'OutboundCallNumber',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      outboundCallNumber: ModifyOutboundCallNumberResponseBodyOutboundCallNumber,
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOutboundCallNumberResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyOutboundCallNumberResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyOutboundCallNumberResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScriptRequest extends $tea.Model {
  asrConfig?: string;
  chatbotId?: string;
  emotionEnable?: boolean;
  industry?: string;
  instanceId?: string;
  longWaitEnable?: boolean;
  miniPlaybackConfigListJsonString?: string;
  miniPlaybackEnable?: boolean;
  newBargeInEnable?: boolean;
  nlsConfig?: string;
  scene?: string;
  scriptContent?: string[];
  scriptDescription?: string;
  scriptId?: string;
  scriptName?: string;
  scriptWaveform?: string[];
  ttsConfig?: string;
  static names(): { [key: string]: string } {
    return {
      asrConfig: 'AsrConfig',
      chatbotId: 'ChatbotId',
      emotionEnable: 'EmotionEnable',
      industry: 'Industry',
      instanceId: 'InstanceId',
      longWaitEnable: 'LongWaitEnable',
      miniPlaybackConfigListJsonString: 'MiniPlaybackConfigListJsonString',
      miniPlaybackEnable: 'MiniPlaybackEnable',
      newBargeInEnable: 'NewBargeInEnable',
      nlsConfig: 'NlsConfig',
      scene: 'Scene',
      scriptContent: 'ScriptContent',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptWaveform: 'ScriptWaveform',
      ttsConfig: 'TtsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrConfig: 'string',
      chatbotId: 'string',
      emotionEnable: 'boolean',
      industry: 'string',
      instanceId: 'string',
      longWaitEnable: 'boolean',
      miniPlaybackConfigListJsonString: 'string',
      miniPlaybackEnable: 'boolean',
      newBargeInEnable: 'boolean',
      nlsConfig: 'string',
      scene: 'string',
      scriptContent: { 'type': 'array', 'itemType': 'string' },
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
      scriptWaveform: { 'type': 'array', 'itemType': 'string' },
      ttsConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScriptResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  script?: ModifyScriptResponseBodyScript;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      script: 'Script',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      script: ModifyScriptResponseBodyScript,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScriptVoiceConfigRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  scriptVoiceConfigId?: string;
  scriptWaveformRelation?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      scriptVoiceConfigId: 'ScriptVoiceConfigId',
      scriptWaveformRelation: 'ScriptWaveformRelation',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      scriptVoiceConfigId: 'string',
      scriptWaveformRelation: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScriptVoiceConfigResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scriptVoiceConfig?: ModifyScriptVoiceConfigResponseBodyScriptVoiceConfig;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scriptVoiceConfig: 'ScriptVoiceConfig',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptVoiceConfig: ModifyScriptVoiceConfigResponseBodyScriptVoiceConfig,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScriptVoiceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyScriptVoiceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyScriptVoiceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTTSConfigRequest extends $tea.Model {
  appKey?: string;
  instanceId?: string;
  nlsServiceType?: string;
  scriptId?: string;
  speechRate?: string;
  voice?: string;
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      instanceId: 'InstanceId',
      nlsServiceType: 'NlsServiceType',
      scriptId: 'ScriptId',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      instanceId: 'string',
      nlsServiceType: 'string',
      scriptId: 'string',
      speechRate: 'string',
      voice: 'string',
      volume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTTSConfigResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  TTSConfig?: ModifyTTSConfigResponseBodyTTSConfig;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      TTSConfig: 'TTSConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      TTSConfig: ModifyTTSConfigResponseBodyTTSConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTTSConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTTSConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTTSConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagGroupsRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  tagGroups?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      tagGroups: 'TagGroups',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      tagGroups: 'string',
      tags: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagGroupsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  tagGroups?: ModifyTagGroupsResponseBodyTagGroups[];
  tags?: ModifyTagGroupsResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tagGroups: 'TagGroups',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tagGroups: { 'type': 'array', 'itemType': ModifyTagGroupsResponseBodyTagGroups },
      tags: { 'type': 'array', 'itemType': ModifyTagGroupsResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ModifyTagGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ModifyTagGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishScriptRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishScriptResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PublishScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishScriptForDebugRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishScriptForDebugResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishScriptForDebugResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: PublishScriptForDebugResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: PublishScriptForDebugResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsRequest extends $tea.Model {
  contactName?: string;
  endTime?: number;
  instanceId?: string;
  jobGroupId?: string;
  pageNumber?: number;
  pageSize?: number;
  phoneNumber?: string;
  scenarioId?: string;
  startTime?: number;
  timeAlignment?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      scenarioId: 'ScenarioId',
      startTime: 'StartTime',
      timeAlignment: 'TimeAlignment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      endTime: 'number',
      instanceId: 'string',
      jobGroupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      scenarioId: 'string',
      startTime: 'number',
      timeAlignment: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobs?: QueryJobsResponseBodyJobs;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobs: 'Jobs',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobs: QueryJobsResponseBodyJobs,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultRequest extends $tea.Model {
  hasAnsweredFilter?: boolean;
  hasHangUpByRejectionFilter?: boolean;
  hasReachedEndOfFlowFilter?: boolean;
  instanceId?: string;
  jobGroupId?: string;
  jobStatusFilter?: string;
  pageNumber?: number;
  pageSize?: number;
  queryText?: string;
  taskStatusFilter?: string;
  static names(): { [key: string]: string } {
    return {
      hasAnsweredFilter: 'HasAnsweredFilter',
      hasHangUpByRejectionFilter: 'HasHangUpByRejectionFilter',
      hasReachedEndOfFlowFilter: 'HasReachedEndOfFlowFilter',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobStatusFilter: 'JobStatusFilter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryText: 'QueryText',
      taskStatusFilter: 'TaskStatusFilter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasAnsweredFilter: 'boolean',
      hasHangUpByRejectionFilter: 'boolean',
      hasReachedEndOfFlowFilter: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobStatusFilter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryText: 'string',
      taskStatusFilter: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  jobs?: QueryJobsWithResultResponseBodyJobs;
  message?: string;
  requestId?: string;
  success?: boolean;
  variableNames?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      jobs: 'Jobs',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      variableNames: 'VariableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      jobs: QueryJobsWithResultResponseBodyJobs,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      variableNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryJobsWithResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryJobsWithResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScriptWaveformsRequest extends $tea.Model {
  instanceId?: string;
  scriptContent?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptContent: 'ScriptContent',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptContent: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScriptWaveformsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scriptWaveforms?: QueryScriptWaveformsResponseBodyScriptWaveforms[];
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scriptWaveforms: 'ScriptWaveforms',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scriptWaveforms: { 'type': 'array', 'itemType': QueryScriptWaveformsResponseBodyScriptWaveforms },
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScriptWaveformsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryScriptWaveformsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryScriptWaveformsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScriptsByStatusRequest extends $tea.Model {
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  statusList?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      statusList: 'StatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      statusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScriptsByStatusResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  scripts?: QueryScriptsByStatusResponseBodyScripts;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      scripts: 'Scripts',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      scripts: QueryScriptsByStatusResponseBodyScripts,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScriptsByStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryScriptsByStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryScriptsByStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordFailureRequest extends $tea.Model {
  actualTime?: number;
  callId?: string;
  calledNumber?: string;
  callingNumber?: string;
  dispositionCode?: string;
  exceptionCodes?: string;
  instanceId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      dispositionCode: 'DispositionCode',
      exceptionCodes: 'ExceptionCodes',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      dispositionCode: 'string',
      exceptionCodes: 'string',
      instanceId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordFailureResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecordFailureResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RecordFailureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RecordFailureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeJobsRequest extends $tea.Model {
  all?: boolean;
  instanceId?: string;
  jobGroupId?: string;
  jobId?: string[];
  jobReferenceId?: string[];
  scenarioId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      jobReferenceId: 'JobReferenceId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobReferenceId: { 'type': 'array', 'itemType': 'string' },
      scenarioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumeJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackScriptRequest extends $tea.Model {
  instanceId?: string;
  rollbackVersion?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      rollbackVersion: 'RollbackVersion',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      rollbackVersion: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackScriptResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RollbackScriptResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RollbackScriptResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RollbackScriptResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAfterAnswerDelayPlaybackRequest extends $tea.Model {
  afterAnswerDelayPlayback?: number;
  entryId?: string;
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      afterAnswerDelayPlayback: 'AfterAnswerDelayPlayback',
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      afterAnswerDelayPlayback: 'number',
      entryId: 'string',
      strategyLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAfterAnswerDelayPlaybackResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveAfterAnswerDelayPlaybackResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveAfterAnswerDelayPlaybackResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveAfterAnswerDelayPlaybackResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBaseStrategyPeriodRequest extends $tea.Model {
  entryId?: string;
  onlyWeekdays?: boolean;
  strategyLevel?: number;
  workingTime?: string[];
  workingTimeFramesJson?: string;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      onlyWeekdays: 'OnlyWeekdays',
      strategyLevel: 'StrategyLevel',
      workingTime: 'WorkingTime',
      workingTimeFramesJson: 'WorkingTimeFramesJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      onlyWeekdays: 'boolean',
      strategyLevel: 'number',
      workingTime: { 'type': 'array', 'itemType': 'string' },
      workingTimeFramesJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBaseStrategyPeriodResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveBaseStrategyPeriodResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveBaseStrategyPeriodResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveBaseStrategyPeriodResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveContactBlockListRequest extends $tea.Model {
  contactBlockListList?: string[];
  contactBlockListsJson?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactBlockListList: 'ContactBlockListList',
      contactBlockListsJson: 'ContactBlockListsJson',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactBlockListList: { 'type': 'array', 'itemType': 'string' },
      contactBlockListsJson: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveContactBlockListResponseBody extends $tea.Model {
  affectedRows?: number;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveContactBlockListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveContactBlockListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveContactBlockListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveContactWhiteListRequest extends $tea.Model {
  contactWhiteListList?: string[];
  contactWhiteListsJson?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      contactWhiteListList: 'ContactWhiteListList',
      contactWhiteListsJson: 'ContactWhiteListsJson',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactWhiteListList: { 'type': 'array', 'itemType': 'string' },
      contactWhiteListsJson: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveContactWhiteListResponseBody extends $tea.Model {
  affectedRows?: number;
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'AffectedRows',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveContactWhiteListResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveContactWhiteListResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveContactWhiteListResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveEffectiveDaysRequest extends $tea.Model {
  effectiveDays?: number;
  entryId?: string;
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveDays: 'EffectiveDays',
      entryId: 'EntryId',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveDays: 'number',
      entryId: 'string',
      strategyLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveEffectiveDaysResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveEffectiveDaysResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveEffectiveDaysResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveEffectiveDaysResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMaxAttemptsPerDayRequest extends $tea.Model {
  entryId?: string;
  maxAttemptsPerDay?: number;
  strategyLevel?: number;
  static names(): { [key: string]: string } {
    return {
      entryId: 'EntryId',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      strategyLevel: 'StrategyLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entryId: 'string',
      maxAttemptsPerDay: 'number',
      strategyLevel: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMaxAttemptsPerDayResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveMaxAttemptsPerDayResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SaveMaxAttemptsPerDayResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SaveMaxAttemptsPerDayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTaskRequest extends $tea.Model {
  actualTimeGte?: number;
  actualTimeLte?: number;
  callDurationGte?: number;
  callDurationLte?: number;
  calledNumber?: string;
  instanceId?: string;
  jobGroupId?: string;
  jobGroupNameQuery?: string;
  jobId?: string;
  jobStatusStringList?: string;
  otherId?: string;
  pageIndex?: number;
  pageSize?: number;
  recordingDurationGte?: number;
  recordingDurationLte?: number;
  scriptNameQuery?: string;
  sortBy?: string;
  sortOrder?: string;
  taskCreateTimeGte?: number;
  taskCreateTimeLte?: number;
  taskId?: string;
  taskStatusStringList?: string;
  userIdMatch?: string;
  static names(): { [key: string]: string } {
    return {
      actualTimeGte: 'ActualTimeGte',
      actualTimeLte: 'ActualTimeLte',
      callDurationGte: 'CallDurationGte',
      callDurationLte: 'CallDurationLte',
      calledNumber: 'CalledNumber',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupNameQuery: 'JobGroupNameQuery',
      jobId: 'JobId',
      jobStatusStringList: 'JobStatusStringList',
      otherId: 'OtherId',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      recordingDurationGte: 'RecordingDurationGte',
      recordingDurationLte: 'RecordingDurationLte',
      scriptNameQuery: 'ScriptNameQuery',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      taskCreateTimeGte: 'TaskCreateTimeGte',
      taskCreateTimeLte: 'TaskCreateTimeLte',
      taskId: 'TaskId',
      taskStatusStringList: 'TaskStatusStringList',
      userIdMatch: 'UserIdMatch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTimeGte: 'number',
      actualTimeLte: 'number',
      callDurationGte: 'number',
      callDurationLte: 'number',
      calledNumber: 'string',
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupNameQuery: 'string',
      jobId: 'string',
      jobStatusStringList: 'string',
      otherId: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      recordingDurationGte: 'number',
      recordingDurationLte: 'number',
      scriptNameQuery: 'string',
      sortBy: 'string',
      sortOrder: 'string',
      taskCreateTimeGte: 'number',
      taskCreateTimeLte: 'number',
      taskId: 'string',
      taskStatusStringList: 'string',
      userIdMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTaskResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  pageIndex?: number;
  pageSize?: number;
  requestId?: string;
  searchTaskInfoList?: SearchTaskResponseBodySearchTaskInfoList[];
  success?: boolean;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      searchTaskInfoList: 'SearchTaskInfoList',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      searchTaskInfoList: { 'type': 'array', 'itemType': SearchTaskResponseBodySearchTaskInfoList },
      success: 'boolean',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobRequest extends $tea.Model {
  callingNumber?: string[];
  instanceId?: string;
  jobGroupId?: string;
  jobJson?: string;
  scenarioId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobJson: 'JobJson',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      jobGroupId: 'string',
      jobJson: 'string',
      scenarioId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponseBody extends $tea.Model {
  callIds?: StartJobResponseBodyCallIds[];
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskIds?: StartJobResponseBodyTaskIds[];
  static names(): { [key: string]: string } {
    return {
      callIds: 'CallIds',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskIds: 'TaskIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callIds: { 'type': 'array', 'itemType': StartJobResponseBodyCallIds },
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskIds: { 'type': 'array', 'itemType': StartJobResponseBodyTaskIds },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: StartJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchJobsRequest extends $tea.Model {
  instanceId?: string;
  jobGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      jobGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitBatchJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitBatchJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitBatchJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitRecordingRequest extends $tea.Model {
  instanceId?: string;
  mergedRecording?: string;
  resourceRecording?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mergedRecording: 'MergedRecording',
      resourceRecording: 'ResourceRecording',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mergedRecording: 'string',
      resourceRecording: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitRecordingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitScriptReviewRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitScriptReviewResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitScriptReviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitScriptReviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitScriptReviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendCallRequest extends $tea.Model {
  calledNumbers?: string[];
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      calledNumbers: 'CalledNumbers',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calledNumbers: { 'type': 'array', 'itemType': 'string' },
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SuspendCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SuspendCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendCallWithFileRequest extends $tea.Model {
  filePath?: string;
  groupId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      filePath: 'FilePath',
      groupId: 'GroupId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filePath: 'string',
      groupId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendCallWithFileResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendCallWithFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SuspendCallWithFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SuspendCallWithFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendJobsRequest extends $tea.Model {
  all?: boolean;
  instanceId?: string;
  jobGroupId?: string;
  jobId?: string[];
  jobReferenceId?: string[];
  scenarioId?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      jobReferenceId: 'JobReferenceId',
      scenarioId: 'ScenarioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: { 'type': 'array', 'itemType': 'string' },
      jobReferenceId: { 'type': 'array', 'itemType': 'string' },
      scenarioId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendJobsResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SuspendJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SuspendJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskPreparingRequest extends $tea.Model {
  instanceId?: string;
  instanceOwnerId?: number;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceOwnerId: 'number',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskPreparingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskPreparingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TaskPreparingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TaskPreparingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateCallRequest extends $tea.Model {
  callId?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateCallResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TerminateCallResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: TerminateCallResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TerminateCallResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  all?: boolean;
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadScriptRecordingRequest extends $tea.Model {
  content?: string;
  fileId?: string;
  fileName?: string;
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      fileId: 'FileId',
      fileName: 'FileName',
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      fileId: 'string',
      fileName: 'string',
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadScriptRecordingResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadScriptRecordingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UploadScriptRecordingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UploadScriptRecordingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawScriptReviewRequest extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawScriptReviewResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  script?: WithdrawScriptReviewResponseBodyScript;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      script: 'Script',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      script: WithdrawScriptReviewResponseBodyScript,
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WithdrawScriptReviewResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: WithdrawScriptReviewResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: WithdrawScriptReviewResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBodyBatchJobStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBodyBatchJobStrategy extends $tea.Model {
  customized?: string;
  endTime?: number;
  followUpStrategy?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  strategyDescription?: string;
  strategyId?: string;
  strategyName?: string;
  type?: string;
  workingTime?: CreateBatchJobsResponseBodyBatchJobStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': CreateBatchJobsResponseBodyBatchJobStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchJobsResponseBodyBatchJob extends $tea.Model {
  batchJobId?: string;
  callingNumbers?: string[];
  creationTime?: number;
  jobFilePath?: string;
  jobGroupDescription?: string;
  jobGroupName?: string;
  scenarioId?: string;
  strategy?: CreateBatchJobsResponseBodyBatchJobStrategy;
  static names(): { [key: string]: string } {
    return {
      batchJobId: 'BatchJobId',
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupName: 'JobGroupName',
      scenarioId: 'ScenarioId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchJobId: 'string',
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupName: 'string',
      scenarioId: 'string',
      strategy: CreateBatchJobsResponseBodyBatchJobStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchRepeatJobResponseBodyJobGroup extends $tea.Model {
  id?: string;
  minConcurrency?: number;
  priority?: string;
  ringingDuration?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      minConcurrency: 'MinConcurrency',
      priority: 'Priority',
      ringingDuration: 'RingingDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      minConcurrency: 'number',
      priority: 'string',
      ringingDuration: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBodyInstance extends $tea.Model {
  creationTime?: number;
  creatorId?: number;
  creatorName?: string;
  instanceDescription?: string;
  instanceId?: string;
  instanceName?: string;
  maxConcurrentConversation?: number;
  ownerName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      ownerName: 'OwnerName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      creatorId: 'number',
      creatorName: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
      ownerName: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceBindNumberResponseBodyDataList extends $tea.Model {
  instanceId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceBindNumberResponseBodyData extends $tea.Model {
  list?: CreateInstanceBindNumberResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CreateInstanceBindNumberResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroupExportProgress extends $tea.Model {
  fileHttpUrl?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileHttpUrl: 'FileHttpUrl',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHttpUrl: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroupRecallStrategy extends $tea.Model {
  emptyNumberIgnore?: boolean;
  inArrearsIgnore?: boolean;
  outOfServiceIgnore?: boolean;
  static names(): { [key: string]: string } {
    return {
      emptyNumberIgnore: 'EmptyNumberIgnore',
      inArrearsIgnore: 'InArrearsIgnore',
      outOfServiceIgnore: 'OutOfServiceIgnore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emptyNumberIgnore: 'boolean',
      inArrearsIgnore: 'boolean',
      outOfServiceIgnore: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroupStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroupStrategy extends $tea.Model {
  customized?: string;
  endTime?: number;
  followUpStrategy?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  strategyDescription?: string;
  strategyId?: string;
  strategyName?: string;
  type?: string;
  workingTime?: CreateJobGroupResponseBodyJobGroupStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': CreateJobGroupResponseBodyJobGroupStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobGroupResponseBodyJobGroup extends $tea.Model {
  callingNumbers?: string[];
  creationTime?: number;
  exportProgress?: CreateJobGroupResponseBodyJobGroupExportProgress;
  jobDataParsingTaskId?: string;
  jobFilePath?: string;
  jobGroupDescription?: string;
  jobGroupId?: string;
  jobGroupName?: string;
  minConcurrency?: number;
  modifyTime?: string;
  priority?: string;
  recallStrategy?: CreateJobGroupResponseBodyJobGroupRecallStrategy;
  ringingDuration?: number;
  scenarioId?: string;
  scriptName?: string;
  scriptVersion?: string;
  status?: string;
  strategy?: CreateJobGroupResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      exportProgress: 'ExportProgress',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      minConcurrency: 'MinConcurrency',
      modifyTime: 'ModifyTime',
      priority: 'Priority',
      recallStrategy: 'RecallStrategy',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      scriptName: 'ScriptName',
      scriptVersion: 'ScriptVersion',
      status: 'Status',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      exportProgress: CreateJobGroupResponseBodyJobGroupExportProgress,
      jobDataParsingTaskId: 'string',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      modifyTime: 'string',
      priority: 'string',
      recallStrategy: CreateJobGroupResponseBodyJobGroupRecallStrategy,
      ringingDuration: 'number',
      scenarioId: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      status: 'string',
      strategy: CreateJobGroupResponseBodyJobGroupStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScriptResponseBodyScript extends $tea.Model {
  debugStatus?: string;
  industry?: string;
  isDebugDrafted?: boolean;
  isDrafted?: boolean;
  scene?: string;
  scriptDescription?: string;
  scriptId?: string;
  scriptName?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      debugStatus: 'DebugStatus',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      scene: 'Scene',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugStatus: 'string',
      industry: 'string',
      isDebugDrafted: 'boolean',
      isDrafted: 'boolean',
      scene: 'string',
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDialogueNodeStatisticsResponseBodyNoAnswerDialogueNodes extends $tea.Model {
  groupId?: string;
  hangUpNum?: number;
  hitNum?: number;
  id?: string;
  instanceId?: string;
  noAnswerNum?: number;
  nodeId?: string;
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      hangUpNum: 'HangUpNum',
      hitNum: 'HitNum',
      id: 'Id',
      instanceId: 'InstanceId',
      noAnswerNum: 'NoAnswerNum',
      nodeId: 'NodeId',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      hangUpNum: 'number',
      hitNum: 'number',
      id: 'string',
      instanceId: 'string',
      noAnswerNum: 'number',
      nodeId: 'string',
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGlobalQuestionResponseBodyGlobalQuestion extends $tea.Model {
  answers?: string;
  globalQuestionId?: string;
  globalQuestionName?: string;
  globalQuestionType?: string;
  questions?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      globalQuestionId: 'GlobalQuestionId',
      globalQuestionName: 'GlobalQuestionName',
      globalQuestionType: 'GlobalQuestionType',
      questions: 'Questions',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      globalQuestionId: 'string',
      globalQuestionName: 'string',
      globalQuestionType: 'string',
      questions: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupExecutingInfoResponseBodyExecutingInfoJobsProgress extends $tea.Model {
  cancelledNum?: number;
  executingNum?: number;
  failedNum?: number;
  pausedNum?: number;
  schedulingNum?: number;
  totalCompletedNum?: number;
  totalJobs?: number;
  totalNotAnsweredNum?: number;
  static names(): { [key: string]: string } {
    return {
      cancelledNum: 'CancelledNum',
      executingNum: 'ExecutingNum',
      failedNum: 'FailedNum',
      pausedNum: 'PausedNum',
      schedulingNum: 'SchedulingNum',
      totalCompletedNum: 'TotalCompletedNum',
      totalJobs: 'TotalJobs',
      totalNotAnsweredNum: 'TotalNotAnsweredNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledNum: 'number',
      executingNum: 'number',
      failedNum: 'number',
      pausedNum: 'number',
      schedulingNum: 'number',
      totalCompletedNum: 'number',
      totalJobs: 'number',
      totalNotAnsweredNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupExecutingInfoResponseBodyExecutingInfo extends $tea.Model {
  callFailedNum?: number;
  callNum?: number;
  creatorName?: string;
  endTime?: number;
  finishedNum?: number;
  hangUpByClientNum?: number;
  jobsProgress?: DescribeGroupExecutingInfoResponseBodyExecutingInfoJobsProgress;
  startTime?: number;
  transferByIntentNum?: number;
  transferByNoAnswer?: number;
  static names(): { [key: string]: string } {
    return {
      callFailedNum: 'CallFailedNum',
      callNum: 'CallNum',
      creatorName: 'CreatorName',
      endTime: 'EndTime',
      finishedNum: 'FinishedNum',
      hangUpByClientNum: 'HangUpByClientNum',
      jobsProgress: 'JobsProgress',
      startTime: 'StartTime',
      transferByIntentNum: 'TransferByIntentNum',
      transferByNoAnswer: 'TransferByNoAnswer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callFailedNum: 'number',
      callNum: 'number',
      creatorName: 'string',
      endTime: 'number',
      finishedNum: 'number',
      hangUpByClientNum: 'number',
      jobsProgress: DescribeGroupExecutingInfoResponseBodyExecutingInfoJobsProgress,
      startTime: 'number',
      transferByIntentNum: 'number',
      transferByNoAnswer: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceResponseBodyInstance extends $tea.Model {
  creationTime?: number;
  creatorId?: number;
  creatorName?: string;
  instanceDescription?: string;
  instanceId?: string;
  instanceName?: string;
  maxConcurrentConversation?: number;
  ownerName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      ownerName: 'OwnerName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      creatorId: 'number',
      creatorName: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
      ownerName: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentResponseBodyIntent extends $tea.Model {
  createTime?: number;
  intentDescription?: string;
  intentId?: string;
  intentName?: string;
  keywords?: string;
  scriptId?: string;
  updateTime?: number;
  utterances?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      intentDescription: 'IntentDescription',
      intentId: 'IntentId',
      intentName: 'IntentName',
      keywords: 'Keywords',
      scriptId: 'ScriptId',
      updateTime: 'UpdateTime',
      utterances: 'Utterances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      intentDescription: 'string',
      intentId: 'string',
      intentName: 'string',
      keywords: 'string',
      scriptId: 'string',
      updateTime: 'number',
      utterances: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentStatisticsResponseBodyGlobalIntents extends $tea.Model {
  groupId?: string;
  hitAfterNoAnswer?: number;
  hitNum?: number;
  instanceId?: string;
  intentId?: string;
  intentName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      hitAfterNoAnswer: 'HitAfterNoAnswer',
      hitNum: 'HitNum',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      intentName: 'IntentName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      hitAfterNoAnswer: 'number',
      hitNum: 'number',
      instanceId: 'string',
      intentId: 'string',
      intentName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIntentStatisticsResponseBodyIntentsAfterNoAnswer extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
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

export class DescribeIntentStatisticsResponseBodyProcessIntents extends $tea.Model {
  groupId?: string;
  hitAfterNoAnswer?: number;
  hitNum?: number;
  instanceId?: string;
  intentId?: string;
  intentName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      hitAfterNoAnswer: 'HitAfterNoAnswer',
      hitNum: 'HitNum',
      instanceId: 'InstanceId',
      intentId: 'IntentId',
      intentName: 'IntentName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      hitAfterNoAnswer: 'number',
      hitNum: 'number',
      instanceId: 'string',
      intentId: 'string',
      intentName: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyJobContacts extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyJobExtras extends $tea.Model {
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

export class DescribeJobResponseBodyJobScript extends $tea.Model {
  asrConfig?: string;
  chatbotId?: string;
  debugStatus?: string;
  industry?: string;
  isDebugDrafted?: boolean;
  isDrafted?: boolean;
  miniPlaybackConfigEnabled?: boolean;
  name?: string;
  scene?: string;
  scriptDescription?: string;
  scriptId?: string;
  status?: string;
  ttsConfig?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      asrConfig: 'AsrConfig',
      chatbotId: 'ChatbotId',
      debugStatus: 'DebugStatus',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      miniPlaybackConfigEnabled: 'MiniPlaybackConfigEnabled',
      name: 'Name',
      scene: 'Scene',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      status: 'Status',
      ttsConfig: 'TtsConfig',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrConfig: 'string',
      chatbotId: 'string',
      debugStatus: 'string',
      industry: 'string',
      isDebugDrafted: 'boolean',
      isDrafted: 'boolean',
      miniPlaybackConfigEnabled: 'boolean',
      name: 'string',
      scene: 'string',
      scriptDescription: 'string',
      scriptId: 'string',
      status: 'string',
      ttsConfig: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyJobSummary extends $tea.Model {
  category?: string;
  content?: string;
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyJobTasksContact extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyJobTasksConversationSummary extends $tea.Model {
  category?: string;
  content?: string;
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyJobTasksConversation extends $tea.Model {
  action?: string;
  actionParams?: string;
  script?: string;
  sequenceId?: string;
  speaker?: string;
  summary?: DescribeJobResponseBodyJobTasksConversationSummary[];
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      script: 'Script',
      sequenceId: 'SequenceId',
      speaker: 'Speaker',
      summary: 'Summary',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      script: 'string',
      sequenceId: 'string',
      speaker: 'string',
      summary: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobTasksConversationSummary },
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyJobTasks extends $tea.Model {
  actualTime?: number;
  brief?: string;
  callId?: string;
  calledNumber?: string;
  callingNumber?: string;
  chatbotId?: string;
  contact?: DescribeJobResponseBodyJobTasksContact;
  conversation?: DescribeJobResponseBodyJobTasksConversation[];
  duration?: number;
  endReason?: string;
  endTime?: number;
  hangUpDirection?: string;
  jobId?: string;
  planedTime?: number;
  ringingDuration?: number;
  scenarioId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      brief: 'Brief',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      chatbotId: 'ChatbotId',
      contact: 'Contact',
      conversation: 'Conversation',
      duration: 'Duration',
      endReason: 'EndReason',
      endTime: 'EndTime',
      hangUpDirection: 'HangUpDirection',
      jobId: 'JobId',
      planedTime: 'PlanedTime',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      brief: 'string',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      chatbotId: 'string',
      contact: DescribeJobResponseBodyJobTasksContact,
      conversation: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobTasksConversation },
      duration: 'number',
      endReason: 'string',
      endTime: 'number',
      hangUpDirection: 'string',
      jobId: 'string',
      planedTime: 'number',
      ringingDuration: 'number',
      scenarioId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyJob extends $tea.Model {
  actualTime?: number;
  calledNumber?: string;
  callingNumbers?: string[];
  contacts?: DescribeJobResponseBodyJobContacts[];
  dsReport?: string;
  endReason?: number;
  extras?: DescribeJobResponseBodyJobExtras[];
  failureReason?: string;
  instanceId?: string;
  jobGroupId?: string;
  jobId?: string;
  nextExecutionTime?: number;
  priority?: number;
  referenceId?: string;
  scenarioId?: string;
  script?: DescribeJobResponseBodyJobScript;
  status?: string;
  strategyId?: string;
  summary?: DescribeJobResponseBodyJobSummary[];
  systemPriority?: number;
  tasks?: DescribeJobResponseBodyJobTasks[];
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      calledNumber: 'CalledNumber',
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      dsReport: 'DsReport',
      endReason: 'EndReason',
      extras: 'Extras',
      failureReason: 'FailureReason',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      nextExecutionTime: 'NextExecutionTime',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      script: 'Script',
      status: 'Status',
      strategyId: 'StrategyId',
      summary: 'Summary',
      systemPriority: 'SystemPriority',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      calledNumber: 'string',
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobContacts },
      dsReport: 'string',
      endReason: 'number',
      extras: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobExtras },
      failureReason: 'string',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      nextExecutionTime: 'number',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      script: DescribeJobResponseBodyJobScript,
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobSummary },
      systemPriority: 'number',
      tasks: { 'type': 'array', 'itemType': DescribeJobResponseBodyJobTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobDataParsingTaskProgressResponseBodyProgress extends $tea.Model {
  failErrorCode?: string;
  failReason?: string;
  feedbackUrl?: string;
  handledJobCount?: number;
  status?: string;
  totalJobCount?: number;
  static names(): { [key: string]: string } {
    return {
      failErrorCode: 'FailErrorCode',
      failReason: 'FailReason',
      feedbackUrl: 'FeedbackUrl',
      handledJobCount: 'HandledJobCount',
      status: 'Status',
      totalJobCount: 'TotalJobCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failErrorCode: 'string',
      failReason: 'string',
      feedbackUrl: 'string',
      handledJobCount: 'number',
      status: 'string',
      totalJobCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupExportProgress extends $tea.Model {
  fileHttpUrl?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileHttpUrl: 'FileHttpUrl',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHttpUrl: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupProgressBriefs extends $tea.Model {
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

export class DescribeJobGroupResponseBodyJobGroupProgressCategories extends $tea.Model {
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

export class DescribeJobGroupResponseBodyJobGroupProgress extends $tea.Model {
  briefs?: DescribeJobGroupResponseBodyJobGroupProgressBriefs[];
  cancelled?: number;
  categories?: DescribeJobGroupResponseBodyJobGroupProgressCategories[];
  duration?: number;
  executing?: number;
  failed?: number;
  paused?: number;
  scheduling?: number;
  startTime?: number;
  status?: string;
  totalCompleted?: number;
  totalJobs?: number;
  totalNotAnswered?: number;
  static names(): { [key: string]: string } {
    return {
      briefs: 'Briefs',
      cancelled: 'Cancelled',
      categories: 'Categories',
      duration: 'Duration',
      executing: 'Executing',
      failed: 'Failed',
      paused: 'Paused',
      scheduling: 'Scheduling',
      startTime: 'StartTime',
      status: 'Status',
      totalCompleted: 'TotalCompleted',
      totalJobs: 'TotalJobs',
      totalNotAnswered: 'TotalNotAnswered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      briefs: { 'type': 'array', 'itemType': DescribeJobGroupResponseBodyJobGroupProgressBriefs },
      cancelled: 'number',
      categories: { 'type': 'array', 'itemType': DescribeJobGroupResponseBodyJobGroupProgressCategories },
      duration: 'number',
      executing: 'number',
      failed: 'number',
      paused: 'number',
      scheduling: 'number',
      startTime: 'number',
      status: 'string',
      totalCompleted: 'number',
      totalJobs: 'number',
      totalNotAnswered: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupRecallStrategy extends $tea.Model {
  emptyNumberIgnore?: boolean;
  inArrearsIgnore?: boolean;
  outOfServiceIgnore?: boolean;
  static names(): { [key: string]: string } {
    return {
      emptyNumberIgnore: 'EmptyNumberIgnore',
      inArrearsIgnore: 'InArrearsIgnore',
      outOfServiceIgnore: 'OutOfServiceIgnore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emptyNumberIgnore: 'boolean',
      inArrearsIgnore: 'boolean',
      outOfServiceIgnore: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupResult extends $tea.Model {
  clientHangupNum?: number;
  finishedNum?: number;
  noInteractNum?: number;
  timeoutHangupNum?: number;
  unrecognizedNum?: number;
  static names(): { [key: string]: string } {
    return {
      clientHangupNum: 'ClientHangupNum',
      finishedNum: 'FinishedNum',
      noInteractNum: 'NoInteractNum',
      timeoutHangupNum: 'TimeoutHangupNum',
      unrecognizedNum: 'UnrecognizedNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientHangupNum: 'number',
      finishedNum: 'number',
      noInteractNum: 'number',
      timeoutHangupNum: 'number',
      unrecognizedNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroupStrategy extends $tea.Model {
  customized?: string;
  endTime?: number;
  followUpStrategy?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  strategyDescription?: string;
  strategyId?: string;
  strategyName?: string;
  type?: string;
  workingTime?: DescribeJobGroupResponseBodyJobGroupStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': DescribeJobGroupResponseBodyJobGroupStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobGroupResponseBodyJobGroup extends $tea.Model {
  callingNumbers?: string[];
  creationTime?: number;
  exportProgress?: DescribeJobGroupResponseBodyJobGroupExportProgress;
  jobDataParsingTaskId?: string;
  jobFilePath?: string;
  jobGroupDescription?: string;
  jobGroupId?: string;
  jobGroupName?: string;
  minConcurrency?: number;
  modifyTime?: string;
  priority?: string;
  progress?: DescribeJobGroupResponseBodyJobGroupProgress;
  recallStrategy?: DescribeJobGroupResponseBodyJobGroupRecallStrategy;
  result?: DescribeJobGroupResponseBodyJobGroupResult;
  ringingDuration?: number;
  scenarioId?: string;
  scriptId?: string;
  scriptName?: string;
  scriptVersion?: string;
  status?: string;
  strategy?: DescribeJobGroupResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      exportProgress: 'ExportProgress',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      minConcurrency: 'MinConcurrency',
      modifyTime: 'ModifyTime',
      priority: 'Priority',
      progress: 'Progress',
      recallStrategy: 'RecallStrategy',
      result: 'Result',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptVersion: 'ScriptVersion',
      status: 'Status',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      exportProgress: DescribeJobGroupResponseBodyJobGroupExportProgress,
      jobDataParsingTaskId: 'string',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      modifyTime: 'string',
      priority: 'string',
      progress: DescribeJobGroupResponseBodyJobGroupProgress,
      recallStrategy: DescribeJobGroupResponseBodyJobGroupRecallStrategy,
      result: DescribeJobGroupResponseBodyJobGroupResult,
      ringingDuration: 'number',
      scenarioId: 'string',
      scriptId: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      status: 'string',
      strategy: DescribeJobGroupResponseBodyJobGroupStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNumberDistrictInfoStatusResponseBodyAppliedVersion extends $tea.Model {
  fileName?: string;
  fileSize?: number;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSize: 'FileSize',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNumberDistrictInfoStatusResponseBodyParsingVersion extends $tea.Model {
  fileName?: string;
  fileSize?: number;
  parseProgress?: number;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      fileSize: 'FileSize',
      parseProgress: 'ParseProgress',
      versionId: 'VersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      fileSize: 'number',
      parseProgress: 'number',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScriptResponseBodyScript extends $tea.Model {
  asrConfig?: string;
  chatbotId?: string;
  debugStatus?: string;
  emotionEnable?: boolean;
  industry?: string;
  isDebugDrafted?: boolean;
  isDrafted?: boolean;
  longWaitEnable?: boolean;
  miniPlaybackEnable?: boolean;
  newBargeInEnable?: boolean;
  scene?: string;
  scriptDescription?: string;
  scriptId?: string;
  scriptName?: string;
  status?: string;
  ttsConfig?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      asrConfig: 'AsrConfig',
      chatbotId: 'ChatbotId',
      debugStatus: 'DebugStatus',
      emotionEnable: 'EmotionEnable',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      longWaitEnable: 'LongWaitEnable',
      miniPlaybackEnable: 'MiniPlaybackEnable',
      newBargeInEnable: 'NewBargeInEnable',
      scene: 'Scene',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      status: 'Status',
      ttsConfig: 'TtsConfig',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asrConfig: 'string',
      chatbotId: 'string',
      debugStatus: 'string',
      emotionEnable: 'boolean',
      industry: 'string',
      isDebugDrafted: 'boolean',
      isDrafted: 'boolean',
      longWaitEnable: 'boolean',
      miniPlaybackEnable: 'boolean',
      newBargeInEnable: 'boolean',
      scene: 'string',
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
      status: 'string',
      ttsConfig: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScriptVoiceConfigResponseBodyScriptVoiceConfig extends $tea.Model {
  instanceId?: string;
  scriptContent?: string;
  scriptId?: string;
  scriptVoiceConfigId?: string;
  scriptWaveformRelation?: string;
  source?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptContent: 'ScriptContent',
      scriptId: 'ScriptId',
      scriptVoiceConfigId: 'ScriptVoiceConfigId',
      scriptWaveformRelation: 'ScriptWaveformRelation',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptContent: 'string',
      scriptId: 'string',
      scriptVoiceConfigId: 'string',
      scriptWaveformRelation: 'string',
      source: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTTSConfigResponseBodyTTSConfig extends $tea.Model {
  appKey?: string;
  instanceId?: string;
  nlsServiceType?: string;
  speechRate?: string;
  voice?: string;
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      instanceId: 'InstanceId',
      nlsServiceType: 'NlsServiceType',
      speechRate: 'SpeechRate',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'string',
      instanceId: 'string',
      nlsServiceType: 'string',
      speechRate: 'string',
      voice: 'string',
      volume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagHitsSummaryResponseBodyTagGroups extends $tea.Model {
  id?: string;
  scriptId?: string;
  tagGroup?: string;
  tagGroupIndex?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      scriptId: 'ScriptId',
      tagGroup: 'TagGroup',
      tagGroupIndex: 'TagGroupIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      scriptId: 'string',
      tagGroup: 'string',
      tagGroupIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTagHitsSummaryResponseBodyTagHitsList extends $tea.Model {
  hitCount?: number;
  tagGroup?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      hitCount: 'HitCount',
      tagGroup: 'TagGroup',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hitCount: 'number',
      tagGroup: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantBindNumberResponseBodyDataList extends $tea.Model {
  instanceId?: string;
  instanceName?: string;
  isBinding?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isBinding: 'IsBinding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      isBinding: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTenantBindNumberResponseBodyData extends $tea.Model {
  list?: DescribeTenantBindNumberResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': DescribeTenantBindNumberResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DialogueResponseBodyFeedback extends $tea.Model {
  action?: string;
  actionParams?: string;
  content?: string;
  contentParams?: string;
  interruptible?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actionParams: 'ActionParams',
      content: 'Content',
      contentParams: 'ContentParams',
      interruptible: 'Interruptible',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actionParams: 'string',
      content: 'string',
      contentParams: 'string',
      interruptible: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadRecordingResponseBodyDownloadParams extends $tea.Model {
  fileName?: string;
  signatureUrl?: string;
  voiceSliceRecordingListJson?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      signatureUrl: 'SignatureUrl',
      voiceSliceRecordingListJson: 'VoiceSliceRecordingListJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      signatureUrl: 'string',
      voiceSliceRecordingListJson: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadScriptRecordingResponseBodyDownloadParams extends $tea.Model {
  fileName?: string;
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'FileName',
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      signatureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportScriptResponseBodyDownloadParams extends $tea.Model {
  signatureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      signatureUrl: 'SignatureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      signatureUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateUploadUrlResponseBodyData extends $tea.Model {
  accessId?: string;
  expire?: number;
  folder?: string;
  host?: string;
  message?: string;
  policy?: string;
  signature?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      expire: 'Expire',
      folder: 'Folder',
      host: 'Host',
      message: 'Message',
      policy: 'Policy',
      signature: 'Signature',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      expire: 'number',
      folder: 'string',
      host: 'string',
      message: 'string',
      policy: 'string',
      signature: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBaseStrategyPeriodResponseBodyWorkingTime extends $tea.Model {
  beginTime?: string;
  beginTimeMillis?: number;
  endTime?: string;
  endTimeMillis?: number;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      beginTimeMillis: 'BeginTimeMillis',
      endTime: 'EndTime',
      endTimeMillis: 'EndTimeMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      beginTimeMillis: 'number',
      endTime: 'string',
      endTimeMillis: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactBlockListResponseBodyContactBlocklistListList extends $tea.Model {
  contactBlockListId?: string;
  creationTime?: number;
  creator?: string;
  instanceId?: string;
  name?: string;
  operator?: string;
  phoneNumber?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      contactBlockListId: 'ContactBlockListId',
      creationTime: 'CreationTime',
      creator: 'Creator',
      instanceId: 'InstanceId',
      name: 'Name',
      operator: 'Operator',
      phoneNumber: 'PhoneNumber',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactBlockListId: 'string',
      creationTime: 'number',
      creator: 'string',
      instanceId: 'string',
      name: 'string',
      operator: 'string',
      phoneNumber: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactBlockListResponseBodyContactBlocklistList extends $tea.Model {
  list?: GetContactBlockListResponseBodyContactBlocklistListList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetContactBlockListResponseBodyContactBlocklistListList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactWhiteListResponseBodyContactWhitelistListList extends $tea.Model {
  contactWhiteListId?: string;
  creationTime?: number;
  creator?: string;
  instanceId?: string;
  name?: string;
  operator?: string;
  phoneNumber?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      contactWhiteListId: 'ContactWhiteListId',
      creationTime: 'CreationTime',
      creator: 'Creator',
      instanceId: 'InstanceId',
      name: 'Name',
      operator: 'Operator',
      phoneNumber: 'PhoneNumber',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactWhiteListId: 'string',
      creationTime: 'number',
      creator: 'string',
      instanceId: 'string',
      name: 'string',
      operator: 'string',
      phoneNumber: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactWhiteListResponseBodyContactWhitelistList extends $tea.Model {
  list?: GetContactWhiteListResponseBodyContactWhitelistListList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetContactWhiteListResponseBodyContactWhitelistListList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSummaryInfoResponseBodyAgentBotInstanceSummaryList extends $tea.Model {
  instanceId?: string;
  totalCallCount?: number;
  totalCallTime?: number;
  usedRecordingStorageSpace?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      totalCallCount: 'TotalCallCount',
      totalCallTime: 'TotalCallTime',
      usedRecordingStorageSpace: 'UsedRecordingStorageSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      totalCallCount: 'number',
      totalCallTime: 'number',
      usedRecordingStorageSpace: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskByUuidResponseBodyTask extends $tea.Model {
  actualTime?: number;
  callId?: string;
  calledNumber?: string;
  callingNumber?: string;
  endReason?: number;
  endTime?: number;
  id?: string;
  instanceId?: string;
  jobGroupId?: string;
  jobId?: string;
  plannedTime?: number;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      endReason: 'EndReason',
      endTime: 'EndTime',
      id: 'Id',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      plannedTime: 'PlannedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      endReason: 'number',
      endTime: 'number',
      id: 'string',
      instanceId: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      plannedTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTenantBindNumberBindingResponseBodyDataList extends $tea.Model {
  billingType?: string;
  bindingId?: string;
  instanceNameList?: string[];
  number?: string;
  serializedParams?: string;
  trunkName?: string;
  static names(): { [key: string]: string } {
    return {
      billingType: 'BillingType',
      bindingId: 'BindingId',
      instanceNameList: 'InstanceNameList',
      number: 'Number',
      serializedParams: 'SerializedParams',
      trunkName: 'TrunkName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingType: 'string',
      bindingId: 'string',
      instanceNameList: { 'type': 'array', 'itemType': 'string' },
      number: 'string',
      serializedParams: 'string',
      trunkName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAllTenantBindNumberBindingResponseBodyData extends $tea.Model {
  list?: ListAllTenantBindNumberBindingResponseBodyDataList[];
  static names(): { [key: string]: string } {
    return {
      list: 'List',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListAllTenantBindNumberBindingResponseBodyDataList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListChatbotInstancesResponseBodyBots extends $tea.Model {
  avatar?: string;
  createTime?: string;
  instanceId?: string;
  introduction?: string;
  languageCode?: string;
  name?: string;
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      createTime: 'CreateTime',
      instanceId: 'InstanceId',
      introduction: 'Introduction',
      languageCode: 'LanguageCode',
      name: 'Name',
      timeZone: 'TimeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      createTime: 'string',
      instanceId: 'string',
      introduction: 'string',
      languageCode: 'string',
      name: 'string',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDialogueFlowsResponseBodyDialogueFlows extends $tea.Model {
  dialogueFlowDefinition?: string;
  dialogueFlowId?: string;
  dialogueFlowName?: string;
  dialogueFlowType?: string;
  scriptId?: string;
  scriptVersion?: string;
  static names(): { [key: string]: string } {
    return {
      dialogueFlowDefinition: 'DialogueFlowDefinition',
      dialogueFlowId: 'DialogueFlowId',
      dialogueFlowName: 'DialogueFlowName',
      dialogueFlowType: 'DialogueFlowType',
      scriptId: 'ScriptId',
      scriptVersion: 'ScriptVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dialogueFlowDefinition: 'string',
      dialogueFlowId: 'string',
      dialogueFlowName: 'string',
      dialogueFlowType: 'string',
      scriptId: 'string',
      scriptVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles extends $tea.Model {
  fileId?: string;
  progress?: number;
  status?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      progress: 'Progress',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      progress: 'number',
      status: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksResponseBodyDownloadTasksList extends $tea.Model {
  downloadTaskFiles?: ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles[];
  expireTime?: number;
  status?: string;
  taskId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      downloadTaskFiles: 'DownloadTaskFiles',
      expireTime: 'ExpireTime',
      status: 'Status',
      taskId: 'TaskId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadTaskFiles: { 'type': 'array', 'itemType': ListDownloadTasksResponseBodyDownloadTasksListDownloadTaskFiles },
      expireTime: 'number',
      status: 'string',
      taskId: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDownloadTasksResponseBodyDownloadTasks extends $tea.Model {
  list?: ListDownloadTasksResponseBodyDownloadTasksList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListDownloadTasksResponseBodyDownloadTasksList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalQuestionsResponseBodyGlobalQuestionsList extends $tea.Model {
  answers?: string;
  globalQuestionId?: string;
  globalQuestionName?: string;
  globalQuestionType?: string;
  questions?: string;
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'Answers',
      globalQuestionId: 'GlobalQuestionId',
      globalQuestionName: 'GlobalQuestionName',
      globalQuestionType: 'GlobalQuestionType',
      questions: 'Questions',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: 'string',
      globalQuestionId: 'string',
      globalQuestionName: 'string',
      globalQuestionType: 'string',
      questions: 'string',
      scriptId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalQuestionsResponseBodyGlobalQuestions extends $tea.Model {
  list?: ListGlobalQuestionsResponseBodyGlobalQuestionsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListGlobalQuestionsResponseBodyGlobalQuestionsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequestTag extends $tea.Model {
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

export class ListInstancesResponseBodyInstancesResourceTags extends $tea.Model {
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

export class ListInstancesResponseBodyInstances extends $tea.Model {
  creationTime?: number;
  creatorId?: number;
  creatorName?: string;
  instanceDescription?: string;
  instanceId?: string;
  instanceName?: string;
  isPreset?: boolean;
  maxConcurrentConversation?: number;
  ownerName?: string;
  resourceGroupId?: string;
  resourceTags?: ListInstancesResponseBodyInstancesResourceTags[];
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      isPreset: 'IsPreset',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      ownerName: 'OwnerName',
      resourceGroupId: 'ResourceGroupId',
      resourceTags: 'ResourceTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      creatorId: 'number',
      creatorName: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      isPreset: 'boolean',
      maxConcurrentConversation: 'number',
      ownerName: 'string',
      resourceGroupId: 'string',
      resourceTags: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstancesResourceTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentsResponseBodyIntentsList extends $tea.Model {
  createTime?: number;
  intentDescription?: string;
  intentId?: string;
  intentName?: string;
  keywords?: string;
  scriptId?: string;
  updateTime?: number;
  utterances?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      intentDescription: 'IntentDescription',
      intentId: 'IntentId',
      intentName: 'IntentName',
      keywords: 'Keywords',
      scriptId: 'ScriptId',
      updateTime: 'UpdateTime',
      utterances: 'Utterances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      intentDescription: 'string',
      intentId: 'string',
      intentName: 'string',
      keywords: 'string',
      scriptId: 'string',
      updateTime: 'number',
      utterances: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentsResponseBodyIntents extends $tea.Model {
  list?: ListIntentsResponseBodyIntentsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListIntentsResponseBodyIntentsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsListExportProgress extends $tea.Model {
  fileHttpUrl?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileHttpUrl: 'FileHttpUrl',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHttpUrl: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsListProgress extends $tea.Model {
  cancelledNum?: number;
  duration?: number;
  executingNum?: number;
  failedNum?: number;
  pausedNum?: number;
  scheduling?: number;
  startTime?: number;
  status?: string;
  totalCompleted?: number;
  totalJobs?: number;
  totalNotAnswered?: number;
  static names(): { [key: string]: string } {
    return {
      cancelledNum: 'CancelledNum',
      duration: 'Duration',
      executingNum: 'ExecutingNum',
      failedNum: 'FailedNum',
      pausedNum: 'PausedNum',
      scheduling: 'Scheduling',
      startTime: 'StartTime',
      status: 'Status',
      totalCompleted: 'TotalCompleted',
      totalJobs: 'TotalJobs',
      totalNotAnswered: 'TotalNotAnswered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledNum: 'number',
      duration: 'number',
      executingNum: 'number',
      failedNum: 'number',
      pausedNum: 'number',
      scheduling: 'number',
      startTime: 'number',
      status: 'string',
      totalCompleted: 'number',
      totalJobs: 'number',
      totalNotAnswered: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsListStrategy extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroupsList extends $tea.Model {
  creationTime?: number;
  exportProgress?: ListJobGroupsResponseBodyJobGroupsListExportProgress;
  jobDataParsingTaskId?: string;
  jobGroupDescription?: string;
  jobGroupId?: string;
  jobGroupName?: string;
  modifyTime?: string;
  progress?: ListJobGroupsResponseBodyJobGroupsListProgress;
  scriptId?: string;
  scriptName?: string;
  scriptVersion?: string;
  status?: string;
  strategy?: ListJobGroupsResponseBodyJobGroupsListStrategy;
  totalCallNum?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      exportProgress: 'ExportProgress',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      modifyTime: 'ModifyTime',
      progress: 'Progress',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptVersion: 'ScriptVersion',
      status: 'Status',
      strategy: 'Strategy',
      totalCallNum: 'TotalCallNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      exportProgress: ListJobGroupsResponseBodyJobGroupsListExportProgress,
      jobDataParsingTaskId: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      modifyTime: 'string',
      progress: ListJobGroupsResponseBodyJobGroupsListProgress,
      scriptId: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      status: 'string',
      strategy: ListJobGroupsResponseBodyJobGroupsListStrategy,
      totalCallNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsResponseBodyJobGroups extends $tea.Model {
  list?: ListJobGroupsResponseBodyJobGroupsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListJobGroupsResponseBodyJobGroupsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsAsyncResponseBodyJobGroupsExportProgress extends $tea.Model {
  fileHttpUrl?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileHttpUrl: 'FileHttpUrl',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHttpUrl: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsAsyncResponseBodyJobGroupsProgress extends $tea.Model {
  cancelledNum?: number;
  duration?: number;
  executingNum?: number;
  failedNum?: number;
  pausedNum?: number;
  scheduling?: number;
  startTime?: number;
  status?: string;
  totalCompleted?: number;
  totalJobs?: number;
  totalNotAnswered?: number;
  static names(): { [key: string]: string } {
    return {
      cancelledNum: 'CancelledNum',
      duration: 'Duration',
      executingNum: 'ExecutingNum',
      failedNum: 'FailedNum',
      pausedNum: 'PausedNum',
      scheduling: 'Scheduling',
      startTime: 'StartTime',
      status: 'Status',
      totalCompleted: 'TotalCompleted',
      totalJobs: 'TotalJobs',
      totalNotAnswered: 'TotalNotAnswered',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelledNum: 'number',
      duration: 'number',
      executingNum: 'number',
      failedNum: 'number',
      pausedNum: 'number',
      scheduling: 'number',
      startTime: 'number',
      status: 'string',
      totalCompleted: 'number',
      totalJobs: 'number',
      totalNotAnswered: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsAsyncResponseBodyJobGroupsStrategy extends $tea.Model {
  endTime?: number;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobGroupsAsyncResponseBodyJobGroups extends $tea.Model {
  creationTime?: number;
  exportProgress?: ListJobGroupsAsyncResponseBodyJobGroupsExportProgress;
  jobDataParsingTaskId?: string;
  jobGroupDescription?: string;
  jobGroupId?: string;
  jobGroupName?: string;
  modifyTime?: string;
  progress?: ListJobGroupsAsyncResponseBodyJobGroupsProgress;
  scriptId?: string;
  scriptName?: string;
  scriptVersion?: string;
  status?: string;
  strategy?: ListJobGroupsAsyncResponseBodyJobGroupsStrategy;
  totalCallNum?: number;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      exportProgress: 'ExportProgress',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      modifyTime: 'ModifyTime',
      progress: 'Progress',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      scriptVersion: 'ScriptVersion',
      status: 'Status',
      strategy: 'Strategy',
      totalCallNum: 'TotalCallNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      exportProgress: ListJobGroupsAsyncResponseBodyJobGroupsExportProgress,
      jobDataParsingTaskId: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      modifyTime: 'string',
      progress: ListJobGroupsAsyncResponseBodyJobGroupsProgress,
      scriptId: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      status: 'string',
      strategy: ListJobGroupsAsyncResponseBodyJobGroupsStrategy,
      totalCallNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsContacts extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsExtras extends $tea.Model {
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

export class ListJobsResponseBodyJobsSummary extends $tea.Model {
  category?: string;
  content?: string;
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsTasksContact extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsTasksConversationSummary extends $tea.Model {
  category?: string;
  content?: string;
  summaryName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      summaryName: 'SummaryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      summaryName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsTasksConversation extends $tea.Model {
  script?: string;
  speaker?: string;
  summary?: ListJobsResponseBodyJobsTasksConversationSummary[];
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      script: 'Script',
      speaker: 'Speaker',
      summary: 'Summary',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      script: 'string',
      speaker: 'string',
      summary: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsTasksConversationSummary },
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsTasks extends $tea.Model {
  actualTime?: number;
  brief?: string;
  callId?: string;
  calledNumber?: string;
  callingNumber?: string;
  chatbotId?: string;
  contact?: ListJobsResponseBodyJobsTasksContact;
  conversation?: ListJobsResponseBodyJobsTasksConversation[];
  duration?: number;
  jobId?: string;
  planedTime?: number;
  scenarioId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      brief: 'Brief',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      chatbotId: 'ChatbotId',
      contact: 'Contact',
      conversation: 'Conversation',
      duration: 'Duration',
      jobId: 'JobId',
      planedTime: 'PlanedTime',
      scenarioId: 'ScenarioId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      brief: 'string',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      chatbotId: 'string',
      contact: ListJobsResponseBodyJobsTasksContact,
      conversation: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsTasksConversation },
      duration: 'number',
      jobId: 'string',
      planedTime: 'number',
      scenarioId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $tea.Model {
  callingNumbers?: string[];
  contacts?: ListJobsResponseBodyJobsContacts[];
  extras?: ListJobsResponseBodyJobsExtras[];
  failureReason?: string;
  jobGroupId?: string;
  jobId?: string;
  priority?: number;
  referenceId?: string;
  scenarioId?: string;
  status?: string;
  strategyId?: string;
  summary?: ListJobsResponseBodyJobsSummary[];
  systemPriority?: number;
  tasks?: ListJobsResponseBodyJobsTasks[];
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      extras: 'Extras',
      failureReason: 'FailureReason',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      status: 'Status',
      strategyId: 'StrategyId',
      summary: 'Summary',
      systemPriority: 'SystemPriority',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsContacts },
      extras: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsExtras },
      failureReason: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsSummary },
      systemPriority: 'number',
      tasks: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobsListContacts extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobsListExtras extends $tea.Model {
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

export class ListJobsByGroupResponseBodyJobsListSummary extends $tea.Model {
  category?: string;
  content?: string;
  conversationDetailId?: string;
  jobGroupId?: string;
  jobId?: string;
  summaryId?: string;
  summaryName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      conversationDetailId: 'ConversationDetailId',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      summaryId: 'SummaryId',
      summaryName: 'SummaryName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      conversationDetailId: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      summaryId: 'string',
      summaryName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobsList extends $tea.Model {
  callingNumbers?: string[];
  contacts?: ListJobsByGroupResponseBodyJobsListContacts[];
  extras?: ListJobsByGroupResponseBodyJobsListExtras[];
  failureReason?: string;
  jobGroupId?: string;
  jobId?: string;
  priority?: number;
  referenceId?: string;
  scenarioId?: string;
  status?: string;
  strategyId?: string;
  summary?: ListJobsByGroupResponseBodyJobsListSummary[];
  systemPriority?: number;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      extras: 'Extras',
      failureReason: 'FailureReason',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      status: 'Status',
      strategyId: 'StrategyId',
      summary: 'Summary',
      systemPriority: 'SystemPriority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListContacts },
      extras: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListExtras },
      failureReason: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsListSummary },
      systemPriority: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsByGroupResponseBodyJobs extends $tea.Model {
  list?: ListJobsByGroupResponseBodyJobsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListJobsByGroupResponseBodyJobsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundCallNumbersResponseBodyOutboundCallNumbersList extends $tea.Model {
  number?: string;
  outboundCallNumberId?: string;
  rateLimitCount?: string;
  rateLimitPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      outboundCallNumberId: 'OutboundCallNumberId',
      rateLimitCount: 'RateLimitCount',
      rateLimitPeriod: 'RateLimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      outboundCallNumberId: 'string',
      rateLimitCount: 'string',
      rateLimitPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOutboundCallNumbersResponseBodyOutboundCallNumbers extends $tea.Model {
  list?: ListOutboundCallNumbersResponseBodyOutboundCallNumbersList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListOutboundCallNumbersResponseBodyOutboundCallNumbersList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponseBodyResourceTagsList extends $tea.Model {
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

export class ListResourceTagsResponseBodyResourceTags extends $tea.Model {
  list?: ListResourceTagsResponseBodyResourceTagsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListResourceTagsResponseBodyResourceTagsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulerInstancesResponseBodySchedulerInstances extends $tea.Model {
  baseStrategy?: string;
  business?: string;
  instanceId?: string;
  maxConcurrency?: number;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      baseStrategy: 'BaseStrategy',
      business: 'Business',
      instanceId: 'InstanceId',
      maxConcurrency: 'MaxConcurrency',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseStrategy: 'string',
      business: 'string',
      instanceId: 'string',
      maxConcurrency: 'number',
      ownerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptPublishHistoriesResponseBodyScriptPublishHistoriesList extends $tea.Model {
  description?: string;
  instanceId?: string;
  publishTime?: number;
  scriptId?: string;
  scriptVersion?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      publishTime: 'PublishTime',
      scriptId: 'ScriptId',
      scriptVersion: 'ScriptVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      publishTime: 'number',
      scriptId: 'string',
      scriptVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptPublishHistoriesResponseBodyScriptPublishHistories extends $tea.Model {
  list?: ListScriptPublishHistoriesResponseBodyScriptPublishHistoriesList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListScriptPublishHistoriesResponseBodyScriptPublishHistoriesList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptRecordingResponseBodyScriptRecordings extends $tea.Model {
  gmtCreate?: number;
  gmtModified?: number;
  gmtUpload?: number;
  innerId?: string;
  instanceId?: string;
  recordingContent?: string;
  recordingDuration?: number;
  recordingName?: string;
  scriptId?: string;
  state?: number;
  stateExtend?: string;
  storageUuid?: string;
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      gmtUpload: 'GmtUpload',
      innerId: 'InnerId',
      instanceId: 'InstanceId',
      recordingContent: 'RecordingContent',
      recordingDuration: 'RecordingDuration',
      recordingName: 'RecordingName',
      scriptId: 'ScriptId',
      state: 'State',
      stateExtend: 'StateExtend',
      storageUuid: 'StorageUuid',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      gmtUpload: 'number',
      innerId: 'string',
      instanceId: 'string',
      recordingContent: 'string',
      recordingDuration: 'number',
      recordingName: 'string',
      scriptId: 'string',
      state: 'number',
      stateExtend: 'string',
      storageUuid: 'string',
      uuid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptVoiceConfigsResponseBodyScriptVoiceConfigsList extends $tea.Model {
  instanceId?: string;
  scriptContent?: string;
  scriptId?: string;
  scriptVoiceConfigId?: string;
  scriptWaveformRelation?: string;
  source?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptContent: 'ScriptContent',
      scriptId: 'ScriptId',
      scriptVoiceConfigId: 'ScriptVoiceConfigId',
      scriptWaveformRelation: 'ScriptWaveformRelation',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptContent: 'string',
      scriptId: 'string',
      scriptVoiceConfigId: 'string',
      scriptWaveformRelation: 'string',
      source: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptVoiceConfigsResponseBodyScriptVoiceConfigs extends $tea.Model {
  list?: ListScriptVoiceConfigsResponseBodyScriptVoiceConfigsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListScriptVoiceConfigsResponseBodyScriptVoiceConfigsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponseBodyScriptsList extends $tea.Model {
  debugStatus?: string;
  emotionEnable?: boolean;
  industry?: string;
  isDebugDrafted?: boolean;
  isDrafted?: boolean;
  isPreset?: boolean;
  longWaitEnable?: boolean;
  miniPlaybackEnable?: boolean;
  newBargeInEnable?: boolean;
  rejectReason?: string;
  scene?: string;
  scriptDescription?: string;
  scriptId?: string;
  scriptName?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      debugStatus: 'DebugStatus',
      emotionEnable: 'EmotionEnable',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      isPreset: 'IsPreset',
      longWaitEnable: 'LongWaitEnable',
      miniPlaybackEnable: 'MiniPlaybackEnable',
      newBargeInEnable: 'NewBargeInEnable',
      rejectReason: 'RejectReason',
      scene: 'Scene',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugStatus: 'string',
      emotionEnable: 'boolean',
      industry: 'string',
      isDebugDrafted: 'boolean',
      isDrafted: 'boolean',
      isPreset: 'boolean',
      longWaitEnable: 'boolean',
      miniPlaybackEnable: 'boolean',
      newBargeInEnable: 'boolean',
      rejectReason: 'string',
      scene: 'string',
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptsResponseBodyScripts extends $tea.Model {
  list?: ListScriptsResponseBodyScriptsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListScriptsResponseBodyScriptsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
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

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  resourceId?: string;
  resourceType?: string;
  tagKey?: string;
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTagGroups extends $tea.Model {
  scriptId?: string;
  tagGroup?: string;
  tagGroupId?: string;
  tagGroupIndex?: number;
  static names(): { [key: string]: string } {
    return {
      scriptId: 'ScriptId',
      tagGroup: 'TagGroup',
      tagGroupId: 'TagGroupId',
      tagGroupIndex: 'TagGroupIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptId: 'string',
      tagGroup: 'string',
      tagGroupId: 'string',
      tagGroupIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagsResponseBodyTags extends $tea.Model {
  scriptId?: string;
  tagGroup?: string;
  tagId?: string;
  tagIndex?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      scriptId: 'ScriptId',
      tagGroup: 'TagGroup',
      tagId: 'TagId',
      tagIndex: 'TagIndex',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptId: 'string',
      tagGroup: 'string',
      tagId: 'string',
      tagIndex: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBatchJobsResponseBodyJobGroupStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBatchJobsResponseBodyJobGroupStrategy extends $tea.Model {
  customized?: string;
  endTime?: number;
  followUpStrategy?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  strategyDescription?: string;
  strategyId?: string;
  strategyName?: string;
  type?: string;
  workingTime?: ModifyBatchJobsResponseBodyJobGroupStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': ModifyBatchJobsResponseBodyJobGroupStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyBatchJobsResponseBodyJobGroup extends $tea.Model {
  callingNumbers?: string[];
  creationTime?: number;
  jobFilePath?: string;
  jobGroupDescription?: string;
  jobGroupId?: string;
  jobGroupName?: string;
  scenarioId?: string;
  strategy?: ModifyBatchJobsResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      scenarioId: 'ScenarioId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      scenarioId: 'string',
      strategy: ModifyBatchJobsResponseBodyJobGroupStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyInstanceResponseBodyInstance extends $tea.Model {
  creationTime?: number;
  creatorId?: number;
  creatorName?: string;
  instanceDescription?: string;
  instanceId?: string;
  instanceName?: string;
  maxConcurrentConversation?: number;
  ownerName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      creatorId: 'CreatorId',
      creatorName: 'CreatorName',
      instanceDescription: 'InstanceDescription',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      maxConcurrentConversation: 'MaxConcurrentConversation',
      ownerName: 'OwnerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'number',
      creatorId: 'number',
      creatorName: 'string',
      instanceDescription: 'string',
      instanceId: 'string',
      instanceName: 'string',
      maxConcurrentConversation: 'number',
      ownerName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobGroupResponseBodyJobGroupExportProgress extends $tea.Model {
  fileHttpUrl?: string;
  progress?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      fileHttpUrl: 'FileHttpUrl',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileHttpUrl: 'string',
      progress: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobGroupResponseBodyJobGroupRecallStrategy extends $tea.Model {
  emptyNumberIgnore?: boolean;
  inArrearsIgnore?: boolean;
  outOfServiceIgnore?: boolean;
  static names(): { [key: string]: string } {
    return {
      emptyNumberIgnore: 'EmptyNumberIgnore',
      inArrearsIgnore: 'InArrearsIgnore',
      outOfServiceIgnore: 'OutOfServiceIgnore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      emptyNumberIgnore: 'boolean',
      inArrearsIgnore: 'boolean',
      outOfServiceIgnore: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobGroupResponseBodyJobGroupStrategyWorkingTime extends $tea.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobGroupResponseBodyJobGroupStrategy extends $tea.Model {
  customized?: string;
  endTime?: number;
  followUpStrategy?: string;
  isTemplate?: boolean;
  maxAttemptsPerDay?: number;
  minAttemptInterval?: number;
  repeatBy?: string;
  repeatDays?: string[];
  routingStrategy?: string;
  startTime?: number;
  strategyDescription?: string;
  strategyId?: string;
  strategyName?: string;
  type?: string;
  workingTime?: ModifyJobGroupResponseBodyJobGroupStrategyWorkingTime[];
  static names(): { [key: string]: string } {
    return {
      customized: 'Customized',
      endTime: 'EndTime',
      followUpStrategy: 'FollowUpStrategy',
      isTemplate: 'IsTemplate',
      maxAttemptsPerDay: 'MaxAttemptsPerDay',
      minAttemptInterval: 'MinAttemptInterval',
      repeatBy: 'RepeatBy',
      repeatDays: 'RepeatDays',
      routingStrategy: 'RoutingStrategy',
      startTime: 'StartTime',
      strategyDescription: 'StrategyDescription',
      strategyId: 'StrategyId',
      strategyName: 'StrategyName',
      type: 'Type',
      workingTime: 'WorkingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customized: 'string',
      endTime: 'number',
      followUpStrategy: 'string',
      isTemplate: 'boolean',
      maxAttemptsPerDay: 'number',
      minAttemptInterval: 'number',
      repeatBy: 'string',
      repeatDays: { 'type': 'array', 'itemType': 'string' },
      routingStrategy: 'string',
      startTime: 'number',
      strategyDescription: 'string',
      strategyId: 'string',
      strategyName: 'string',
      type: 'string',
      workingTime: { 'type': 'array', 'itemType': ModifyJobGroupResponseBodyJobGroupStrategyWorkingTime },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyJobGroupResponseBodyJobGroup extends $tea.Model {
  callingNumbers?: string[];
  creationTime?: number;
  exportProgress?: ModifyJobGroupResponseBodyJobGroupExportProgress;
  jobDataParsingTaskId?: string;
  jobFilePath?: string;
  jobGroupDescription?: string;
  jobGroupId?: string;
  jobGroupName?: string;
  minConcurrency?: number;
  modifyTime?: string;
  priority?: string;
  recallStrategy?: ModifyJobGroupResponseBodyJobGroupRecallStrategy;
  ringingDuration?: number;
  scenarioId?: string;
  scriptName?: string;
  scriptVersion?: string;
  status?: string;
  strategy?: ModifyJobGroupResponseBodyJobGroupStrategy;
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      creationTime: 'CreationTime',
      exportProgress: 'ExportProgress',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobFilePath: 'JobFilePath',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      minConcurrency: 'MinConcurrency',
      modifyTime: 'ModifyTime',
      priority: 'Priority',
      recallStrategy: 'RecallStrategy',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      scriptName: 'ScriptName',
      scriptVersion: 'ScriptVersion',
      status: 'Status',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      creationTime: 'number',
      exportProgress: ModifyJobGroupResponseBodyJobGroupExportProgress,
      jobDataParsingTaskId: 'string',
      jobFilePath: 'string',
      jobGroupDescription: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      modifyTime: 'string',
      priority: 'string',
      recallStrategy: ModifyJobGroupResponseBodyJobGroupRecallStrategy,
      ringingDuration: 'number',
      scenarioId: 'string',
      scriptName: 'string',
      scriptVersion: 'string',
      status: 'string',
      strategy: ModifyJobGroupResponseBodyJobGroupStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyOutboundCallNumberResponseBodyOutboundCallNumber extends $tea.Model {
  number?: string;
  outboundCallNumberId?: string;
  rateLimitCount?: string;
  rateLimitPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      outboundCallNumberId: 'OutboundCallNumberId',
      rateLimitCount: 'RateLimitCount',
      rateLimitPeriod: 'RateLimitPeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      outboundCallNumberId: 'string',
      rateLimitCount: 'string',
      rateLimitPeriod: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScriptResponseBodyScript extends $tea.Model {
  debugStatus?: string;
  industry?: string;
  isDebugDrafted?: boolean;
  isDrafted?: boolean;
  scene?: string;
  scriptDescription?: string;
  scriptId?: string;
  scriptName?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      debugStatus: 'DebugStatus',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      scene: 'Scene',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugStatus: 'string',
      industry: 'string',
      isDebugDrafted: 'boolean',
      isDrafted: 'boolean',
      scene: 'string',
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyScriptVoiceConfigResponseBodyScriptVoiceConfig extends $tea.Model {
  instanceId?: string;
  scriptContent?: string;
  scriptId?: string;
  scriptVoiceConfigId?: string;
  scriptWaveformRelation?: string;
  source?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptContent: 'ScriptContent',
      scriptId: 'ScriptId',
      scriptVoiceConfigId: 'ScriptVoiceConfigId',
      scriptWaveformRelation: 'ScriptWaveformRelation',
      source: 'Source',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptContent: 'string',
      scriptId: 'string',
      scriptVoiceConfigId: 'string',
      scriptWaveformRelation: 'string',
      source: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTTSConfigResponseBodyTTSConfig extends $tea.Model {
  instanceId?: string;
  scriptId?: string;
  speechRate?: string;
  TTSConfigId?: string;
  voice?: string;
  volume?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      speechRate: 'SpeechRate',
      TTSConfigId: 'TTSConfigId',
      voice: 'Voice',
      volume: 'Volume',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      speechRate: 'string',
      TTSConfigId: 'string',
      voice: 'string',
      volume: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagGroupsResponseBodyTagGroups extends $tea.Model {
  scriptId?: string;
  tagGroup?: string;
  tagGroupId?: string;
  tagGroupIndex?: number;
  static names(): { [key: string]: string } {
    return {
      scriptId: 'ScriptId',
      tagGroup: 'TagGroup',
      tagGroupId: 'TagGroupId',
      tagGroupIndex: 'TagGroupIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptId: 'string',
      tagGroup: 'string',
      tagGroupId: 'string',
      tagGroupIndex: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTagGroupsResponseBodyTags extends $tea.Model {
  scriptId?: string;
  tagGroup?: string;
  tagId?: string;
  tagIndex?: number;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      scriptId: 'ScriptId',
      tagGroup: 'TagGroup',
      tagId: 'TagId',
      tagIndex: 'TagIndex',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scriptId: 'string',
      tagGroup: 'string',
      tagId: 'string',
      tagIndex: 'number',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsResponseBodyJobsListContacts extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsResponseBodyJobsListExtras extends $tea.Model {
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

export class QueryJobsResponseBodyJobsListSummary extends $tea.Model {
  category?: string;
  content?: string;
  conversationDetailId?: string;
  groupId?: string;
  jobId?: string;
  summaryId?: string;
  summaryName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      content: 'Content',
      conversationDetailId: 'ConversationDetailId',
      groupId: 'GroupId',
      jobId: 'JobId',
      summaryId: 'SummaryId',
      summaryName: 'SummaryName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      content: 'string',
      conversationDetailId: 'string',
      groupId: 'string',
      jobId: 'string',
      summaryId: 'string',
      summaryName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsResponseBodyJobsListTasksContact extends $tea.Model {
  contactId?: string;
  contactName?: string;
  honorific?: string;
  jobId?: string;
  phoneNumber?: string;
  referenceId?: string;
  role?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      honorific: 'Honorific',
      jobId: 'JobId',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      contactName: 'string',
      honorific: 'string',
      jobId: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsResponseBodyJobsListTasks extends $tea.Model {
  actualTime?: number;
  brief?: string;
  callId?: string;
  calledNumber?: string;
  callingNumber?: string;
  chatbotId?: string;
  contact?: QueryJobsResponseBodyJobsListTasksContact;
  duration?: number;
  jobId?: string;
  planedTime?: number;
  scenarioId?: string;
  status?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      brief: 'Brief',
      callId: 'CallId',
      calledNumber: 'CalledNumber',
      callingNumber: 'CallingNumber',
      chatbotId: 'ChatbotId',
      contact: 'Contact',
      duration: 'Duration',
      jobId: 'JobId',
      planedTime: 'PlanedTime',
      scenarioId: 'ScenarioId',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      brief: 'string',
      callId: 'string',
      calledNumber: 'string',
      callingNumber: 'string',
      chatbotId: 'string',
      contact: QueryJobsResponseBodyJobsListTasksContact,
      duration: 'number',
      jobId: 'string',
      planedTime: 'number',
      scenarioId: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsResponseBodyJobsList extends $tea.Model {
  callingNumbers?: string[];
  contacts?: QueryJobsResponseBodyJobsListContacts[];
  extras?: QueryJobsResponseBodyJobsListExtras[];
  failureReason?: string;
  jobGroupId?: string;
  jobId?: string;
  priority?: number;
  referenceId?: string;
  scenarioId?: string;
  status?: string;
  strategyId?: string;
  summary?: QueryJobsResponseBodyJobsListSummary[];
  tasks?: QueryJobsResponseBodyJobsListTasks[];
  static names(): { [key: string]: string } {
    return {
      callingNumbers: 'CallingNumbers',
      contacts: 'Contacts',
      extras: 'Extras',
      failureReason: 'FailureReason',
      jobGroupId: 'JobGroupId',
      jobId: 'JobId',
      priority: 'Priority',
      referenceId: 'ReferenceId',
      scenarioId: 'ScenarioId',
      status: 'Status',
      strategyId: 'StrategyId',
      summary: 'Summary',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumbers: { 'type': 'array', 'itemType': 'string' },
      contacts: { 'type': 'array', 'itemType': QueryJobsResponseBodyJobsListContacts },
      extras: { 'type': 'array', 'itemType': QueryJobsResponseBodyJobsListExtras },
      failureReason: 'string',
      jobGroupId: 'string',
      jobId: 'string',
      priority: 'number',
      referenceId: 'string',
      scenarioId: 'string',
      status: 'string',
      strategyId: 'string',
      summary: { 'type': 'array', 'itemType': QueryJobsResponseBodyJobsListSummary },
      tasks: { 'type': 'array', 'itemType': QueryJobsResponseBodyJobsListTasks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsResponseBodyJobs extends $tea.Model {
  list?: QueryJobsResponseBodyJobsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryJobsResponseBodyJobsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobsListLatestTaskContact extends $tea.Model {
  honorific?: string;
  id?: string;
  jobUuid?: string;
  name?: string;
  phoneNumber?: string;
  preferredPhoneNumber?: string;
  referenceId?: string;
  role?: string;
  round?: number;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      honorific: 'Honorific',
      id: 'Id',
      jobUuid: 'JobUuid',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
      preferredPhoneNumber: 'PreferredPhoneNumber',
      referenceId: 'ReferenceId',
      role: 'Role',
      round: 'Round',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      honorific: 'string',
      id: 'string',
      jobUuid: 'string',
      name: 'string',
      phoneNumber: 'string',
      preferredPhoneNumber: 'string',
      referenceId: 'string',
      role: 'string',
      round: 'number',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobsListLatestTaskDialExceptionCodes extends $tea.Model {
  code?: string;
  hint?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hint: 'Hint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobsListLatestTaskExtras extends $tea.Model {
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

export class QueryJobsWithResultResponseBodyJobsListLatestTaskTagHits extends $tea.Model {
  tagGroup?: string;
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagGroup: 'TagGroup',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagGroup: 'string',
      tagName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobsListLatestTask extends $tea.Model {
  callDuration?: number;
  callDurationDisplay?: string;
  callTime?: number;
  contact?: QueryJobsWithResultResponseBodyJobsListLatestTaskContact;
  dialExceptionCodes?: QueryJobsWithResultResponseBodyJobsListLatestTaskDialExceptionCodes[];
  extras?: QueryJobsWithResultResponseBodyJobsListLatestTaskExtras[];
  hasAnswered?: boolean;
  hasHangUpByRejection?: boolean;
  hasLastPlaybackCompleted?: boolean;
  hasReachedEndOfFlow?: boolean;
  status?: string;
  statusName?: string;
  tagHits?: QueryJobsWithResultResponseBodyJobsListLatestTaskTagHits[];
  taskEndReason?: string;
  static names(): { [key: string]: string } {
    return {
      callDuration: 'CallDuration',
      callDurationDisplay: 'CallDurationDisplay',
      callTime: 'CallTime',
      contact: 'Contact',
      dialExceptionCodes: 'DialExceptionCodes',
      extras: 'Extras',
      hasAnswered: 'HasAnswered',
      hasHangUpByRejection: 'HasHangUpByRejection',
      hasLastPlaybackCompleted: 'HasLastPlaybackCompleted',
      hasReachedEndOfFlow: 'HasReachedEndOfFlow',
      status: 'Status',
      statusName: 'StatusName',
      tagHits: 'TagHits',
      taskEndReason: 'TaskEndReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callDuration: 'number',
      callDurationDisplay: 'string',
      callTime: 'number',
      contact: QueryJobsWithResultResponseBodyJobsListLatestTaskContact,
      dialExceptionCodes: { 'type': 'array', 'itemType': QueryJobsWithResultResponseBodyJobsListLatestTaskDialExceptionCodes },
      extras: { 'type': 'array', 'itemType': QueryJobsWithResultResponseBodyJobsListLatestTaskExtras },
      hasAnswered: 'boolean',
      hasHangUpByRejection: 'boolean',
      hasLastPlaybackCompleted: 'boolean',
      hasReachedEndOfFlow: 'boolean',
      status: 'string',
      statusName: 'string',
      tagHits: { 'type': 'array', 'itemType': QueryJobsWithResultResponseBodyJobsListLatestTaskTagHits },
      taskEndReason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobsList extends $tea.Model {
  id?: string;
  jobFailureReason?: string;
  latestTask?: QueryJobsWithResultResponseBodyJobsListLatestTask;
  status?: string;
  statusName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      jobFailureReason: 'JobFailureReason',
      latestTask: 'LatestTask',
      status: 'Status',
      statusName: 'StatusName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      jobFailureReason: 'string',
      latestTask: QueryJobsWithResultResponseBodyJobsListLatestTask,
      status: 'string',
      statusName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryJobsWithResultResponseBodyJobs extends $tea.Model {
  list?: QueryJobsWithResultResponseBodyJobsList[];
  pageCount?: number;
  pageNumber?: number;
  pageSize?: number;
  rowCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageCount: 'PageCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rowCount: 'RowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryJobsWithResultResponseBodyJobsList },
      pageCount: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      rowCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScriptWaveformsResponseBodyScriptWaveforms extends $tea.Model {
  fileId?: string;
  fileName?: string;
  scriptContent?: string;
  scriptId?: string;
  scriptWaveformId?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      scriptContent: 'ScriptContent',
      scriptId: 'ScriptId',
      scriptWaveformId: 'ScriptWaveformId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      scriptContent: 'string',
      scriptId: 'string',
      scriptWaveformId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScriptsByStatusResponseBodyScriptsList extends $tea.Model {
  appliedVersion?: string;
  debugStatus?: string;
  debugVersion?: string;
  industry?: string;
  isDebugDrafted?: boolean;
  isDrafted?: boolean;
  scene?: string;
  scriptDescription?: string;
  scriptId?: string;
  scriptName?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      appliedVersion: 'AppliedVersion',
      debugStatus: 'DebugStatus',
      debugVersion: 'DebugVersion',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      scene: 'Scene',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedVersion: 'string',
      debugStatus: 'string',
      debugVersion: 'string',
      industry: 'string',
      isDebugDrafted: 'boolean',
      isDrafted: 'boolean',
      scene: 'string',
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryScriptsByStatusResponseBodyScripts extends $tea.Model {
  list?: QueryScriptsByStatusResponseBodyScriptsList[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': QueryScriptsByStatusResponseBodyScriptsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchTaskResponseBodySearchTaskInfoList extends $tea.Model {
  actualTime?: number;
  callDuration?: number;
  callDurationDisplay?: string;
  calledNumber?: string;
  dialException?: string;
  dialExceptionCodes?: string[];
  dialExceptionOld?: string;
  hasAnswered?: boolean;
  hasHangUpByRejection?: boolean;
  hasLastPlaybackCompleted?: boolean;
  hasReachedEndOfFlow?: boolean;
  instanceId?: string;
  jobGroupId?: string;
  jobGroupName?: string;
  jobId?: string;
  jobStatus?: number;
  jobStatusName?: string;
  jobStatusString?: string;
  recordingDuration?: number;
  scriptName?: string;
  taskCreateTime?: number;
  taskEndReason?: number;
  taskId?: string;
  taskStatus?: number;
  taskStatusName?: string;
  taskStatusString?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      actualTime: 'ActualTime',
      callDuration: 'CallDuration',
      callDurationDisplay: 'CallDurationDisplay',
      calledNumber: 'CalledNumber',
      dialException: 'DialException',
      dialExceptionCodes: 'DialExceptionCodes',
      dialExceptionOld: 'DialExceptionOld',
      hasAnswered: 'HasAnswered',
      hasHangUpByRejection: 'HasHangUpByRejection',
      hasLastPlaybackCompleted: 'HasLastPlaybackCompleted',
      hasReachedEndOfFlow: 'HasReachedEndOfFlow',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      jobStatusName: 'JobStatusName',
      jobStatusString: 'JobStatusString',
      recordingDuration: 'RecordingDuration',
      scriptName: 'ScriptName',
      taskCreateTime: 'TaskCreateTime',
      taskEndReason: 'TaskEndReason',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
      taskStatusName: 'TaskStatusName',
      taskStatusString: 'TaskStatusString',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualTime: 'number',
      callDuration: 'number',
      callDurationDisplay: 'string',
      calledNumber: 'string',
      dialException: 'string',
      dialExceptionCodes: { 'type': 'array', 'itemType': 'string' },
      dialExceptionOld: 'string',
      hasAnswered: 'boolean',
      hasHangUpByRejection: 'boolean',
      hasLastPlaybackCompleted: 'boolean',
      hasReachedEndOfFlow: 'boolean',
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      jobId: 'string',
      jobStatus: 'number',
      jobStatusName: 'string',
      jobStatusString: 'string',
      recordingDuration: 'number',
      scriptName: 'string',
      taskCreateTime: 'number',
      taskEndReason: 'number',
      taskId: 'string',
      taskStatus: 'number',
      taskStatusName: 'string',
      taskStatusString: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartJobResponseBodyCallIds extends $tea.Model {
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

export class StartJobResponseBodyTaskIds extends $tea.Model {
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

export class TagResourcesRequestTag extends $tea.Model {
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

export class WithdrawScriptReviewResponseBodyScript extends $tea.Model {
  debugStatus?: string;
  industry?: string;
  isDebugDrafted?: boolean;
  isDrafted?: boolean;
  scene?: string;
  scriptDescription?: string;
  scriptId?: string;
  scriptName?: string;
  status?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      debugStatus: 'DebugStatus',
      industry: 'Industry',
      isDebugDrafted: 'IsDebugDrafted',
      isDrafted: 'IsDrafted',
      scene: 'Scene',
      scriptDescription: 'ScriptDescription',
      scriptId: 'ScriptId',
      scriptName: 'ScriptName',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugStatus: 'string',
      industry: 'string',
      isDebugDrafted: 'boolean',
      isDrafted: 'boolean',
      scene: 'string',
      scriptDescription: 'string',
      scriptId: 'string',
      scriptName: 'string',
      status: 'string',
      updateTime: 'number',
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
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("outboundbot", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async applyNumberDistrictInfoParsingResultWithOptions(request: ApplyNumberDistrictInfoParsingResultRequest, runtime: $Util.RuntimeOptions): Promise<ApplyNumberDistrictInfoParsingResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyNumberDistrictInfoParsingResult",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyNumberDistrictInfoParsingResultResponse>(await this.callApi(params, req, runtime), new ApplyNumberDistrictInfoParsingResultResponse({}));
  }

  async applyNumberDistrictInfoParsingResult(request: ApplyNumberDistrictInfoParsingResultRequest): Promise<ApplyNumberDistrictInfoParsingResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyNumberDistrictInfoParsingResultWithOptions(request, runtime);
  }

  async assignJobsWithOptions(request: AssignJobsRequest, runtime: $Util.RuntimeOptions): Promise<AssignJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isAsynchrony)) {
      query["IsAsynchrony"] = request.isAsynchrony;
    }

    if (!Util.isUnset(request.jobDataParsingTaskId)) {
      query["JobDataParsingTaskId"] = request.jobDataParsingTaskId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.jobsJson)) {
      query["JobsJson"] = request.jobsJson;
    }

    if (!Util.isUnset(request.rosterType)) {
      query["RosterType"] = request.rosterType;
    }

    if (!Util.isUnset(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AssignJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssignJobsResponse>(await this.callApi(params, req, runtime), new AssignJobsResponse({}));
  }

  async assignJobs(request: AssignJobsRequest): Promise<AssignJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.assignJobsWithOptions(request, runtime);
  }

  async cancelJobsWithOptions(request: CancelJobsRequest, runtime: $Util.RuntimeOptions): Promise<CancelJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.jobReferenceId)) {
      query["JobReferenceId"] = request.jobReferenceId;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CancelJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelJobsResponse>(await this.callApi(params, req, runtime), new CancelJobsResponse({}));
  }

  async cancelJobs(request: CancelJobsRequest): Promise<CancelJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelJobsWithOptions(request, runtime);
  }

  async changeResourceGroupWithOptions(request: ChangeResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<ChangeResourceGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      query["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ChangeResourceGroup",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ChangeResourceGroupResponse>(await this.callApi(params, req, runtime), new ChangeResourceGroupResponse({}));
  }

  async changeResourceGroup(request: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.changeResourceGroupWithOptions(request, runtime);
  }

  async createBatchJobsWithOptions(request: CreateBatchJobsRequest, runtime: $Util.RuntimeOptions): Promise<CreateBatchJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchJobDescription)) {
      query["BatchJobDescription"] = request.batchJobDescription;
    }

    if (!Util.isUnset(request.batchJobName)) {
      query["BatchJobName"] = request.batchJobName;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobFilePath)) {
      query["JobFilePath"] = request.jobFilePath;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    if (!Util.isUnset(request.submitted)) {
      query["Submitted"] = request.submitted;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBatchJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBatchJobsResponse>(await this.callApi(params, req, runtime), new CreateBatchJobsResponse({}));
  }

  async createBatchJobs(request: CreateBatchJobsRequest): Promise<CreateBatchJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBatchJobsWithOptions(request, runtime);
  }

  async createBatchRepeatJobWithOptions(request: CreateBatchRepeatJobRequest, runtime: $Util.RuntimeOptions): Promise<CreateBatchRepeatJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.filterStatus)) {
      query["FilterStatus"] = request.filterStatus;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.minConcurrency)) {
      query["MinConcurrency"] = request.minConcurrency;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.recallStrategyJson)) {
      query["RecallStrategyJson"] = request.recallStrategyJson;
    }

    if (!Util.isUnset(request.ringingDuration)) {
      query["RingingDuration"] = request.ringingDuration;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.sourceGroupId)) {
      query["SourceGroupId"] = request.sourceGroupId;
    }

    if (!Util.isUnset(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBatchRepeatJob",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBatchRepeatJobResponse>(await this.callApi(params, req, runtime), new CreateBatchRepeatJobResponse({}));
  }

  async createBatchRepeatJob(request: CreateBatchRepeatJobRequest): Promise<CreateBatchRepeatJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBatchRepeatJobWithOptions(request, runtime);
  }

  async createDialogueFlowWithOptions(request: CreateDialogueFlowRequest, runtime: $Util.RuntimeOptions): Promise<CreateDialogueFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dialogueFlowType)) {
      query["DialogueFlowType"] = request.dialogueFlowType;
    }

    if (!Util.isUnset(request.dialogueName)) {
      query["DialogueName"] = request.dialogueName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDialogueFlow",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDialogueFlowResponse>(await this.callApi(params, req, runtime), new CreateDialogueFlowResponse({}));
  }

  async createDialogueFlow(request: CreateDialogueFlowRequest): Promise<CreateDialogueFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDialogueFlowWithOptions(request, runtime);
  }

  async createDownloadUrlWithOptions(request: CreateDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<CreateDownloadUrlResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDownloadUrl",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDownloadUrlResponse>(await this.callApi(params, req, runtime), new CreateDownloadUrlResponse({}));
  }

  async createDownloadUrl(request: CreateDownloadUrlRequest): Promise<CreateDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDownloadUrlWithOptions(request, runtime);
  }

  async createGlobalQuestionWithOptions(request: CreateGlobalQuestionRequest, runtime: $Util.RuntimeOptions): Promise<CreateGlobalQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.answers)) {
      query["Answers"] = request.answers;
    }

    if (!Util.isUnset(request.globalQuestionName)) {
      query["GlobalQuestionName"] = request.globalQuestionName;
    }

    if (!Util.isUnset(request.globalQuestionType)) {
      query["GlobalQuestionType"] = request.globalQuestionType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.questions)) {
      query["Questions"] = request.questions;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGlobalQuestion",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGlobalQuestionResponse>(await this.callApi(params, req, runtime), new CreateGlobalQuestionResponse({}));
  }

  async createGlobalQuestion(request: CreateGlobalQuestionRequest): Promise<CreateGlobalQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGlobalQuestionWithOptions(request, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.instanceDescription)) {
      query["InstanceDescription"] = request.instanceDescription;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.maxConcurrentConversation)) {
      query["MaxConcurrentConversation"] = request.maxConcurrentConversation;
    }

    if (!Util.isUnset(request.nluServiceType)) {
      query["NluServiceType"] = request.nluServiceType;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceWithOptions(request, runtime);
  }

  async createInstanceBindNumberWithOptions(request: CreateInstanceBindNumberRequest, runtime: $Util.RuntimeOptions): Promise<CreateInstanceBindNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceBindNumber",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceBindNumberResponse>(await this.callApi(params, req, runtime), new CreateInstanceBindNumberResponse({}));
  }

  async createInstanceBindNumber(request: CreateInstanceBindNumberRequest): Promise<CreateInstanceBindNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createInstanceBindNumberWithOptions(request, runtime);
  }

  async createIntentWithOptions(request: CreateIntentRequest, runtime: $Util.RuntimeOptions): Promise<CreateIntentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentDescription)) {
      query["IntentDescription"] = request.intentDescription;
    }

    if (!Util.isUnset(request.intentName)) {
      query["IntentName"] = request.intentName;
    }

    if (!Util.isUnset(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.utterances)) {
      query["Utterances"] = request.utterances;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateIntentResponse>(await this.callApi(params, req, runtime), new CreateIntentResponse({}));
  }

  async createIntent(request: CreateIntentRequest): Promise<CreateIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createIntentWithOptions(request, runtime);
  }

  async createJobDataParsingTaskWithOptions(request: CreateJobDataParsingTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobDataParsingTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobFilePath)) {
      query["JobFilePath"] = request.jobFilePath;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateJobDataParsingTask",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateJobDataParsingTaskResponse>(await this.callApi(params, req, runtime), new CreateJobDataParsingTaskResponse({}));
  }

  async createJobDataParsingTask(request: CreateJobDataParsingTaskRequest): Promise<CreateJobDataParsingTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobDataParsingTaskWithOptions(request, runtime);
  }

  async createJobGroupWithOptions(request: CreateJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupDescription)) {
      query["JobGroupDescription"] = request.jobGroupDescription;
    }

    if (!Util.isUnset(request.jobGroupName)) {
      query["JobGroupName"] = request.jobGroupName;
    }

    if (!Util.isUnset(request.minConcurrency)) {
      query["MinConcurrency"] = request.minConcurrency;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.recallStrategyJson)) {
      query["RecallStrategyJson"] = request.recallStrategyJson;
    }

    if (!Util.isUnset(request.ringingDuration)) {
      query["RingingDuration"] = request.ringingDuration;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateJobGroup",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateJobGroupResponse>(await this.callApi(params, req, runtime), new CreateJobGroupResponse({}));
  }

  async createJobGroup(request: CreateJobGroupRequest): Promise<CreateJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobGroupWithOptions(request, runtime);
  }

  async createJobGroupExportTaskWithOptions(request: CreateJobGroupExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobGroupExportTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.option)) {
      query["Option"] = request.option;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateJobGroupExportTask",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateJobGroupExportTaskResponse>(await this.callApi(params, req, runtime), new CreateJobGroupExportTaskResponse({}));
  }

  async createJobGroupExportTask(request: CreateJobGroupExportTaskRequest): Promise<CreateJobGroupExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobGroupExportTaskWithOptions(request, runtime);
  }

  async createNumberDistrictInfoDownloadUrlWithOptions(request: CreateNumberDistrictInfoDownloadUrlRequest, runtime: $Util.RuntimeOptions): Promise<CreateNumberDistrictInfoDownloadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNumberDistrictInfoDownloadUrl",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNumberDistrictInfoDownloadUrlResponse>(await this.callApi(params, req, runtime), new CreateNumberDistrictInfoDownloadUrlResponse({}));
  }

  async createNumberDistrictInfoDownloadUrl(request: CreateNumberDistrictInfoDownloadUrlRequest): Promise<CreateNumberDistrictInfoDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNumberDistrictInfoDownloadUrlWithOptions(request, runtime);
  }

  async createNumberDistrictInfoParsingTaskWithOptions(request: CreateNumberDistrictInfoParsingTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateNumberDistrictInfoParsingTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.fileSize)) {
      query["FileSize"] = request.fileSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNumberDistrictInfoParsingTask",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNumberDistrictInfoParsingTaskResponse>(await this.callApi(params, req, runtime), new CreateNumberDistrictInfoParsingTaskResponse({}));
  }

  async createNumberDistrictInfoParsingTask(request: CreateNumberDistrictInfoParsingTaskRequest): Promise<CreateNumberDistrictInfoParsingTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNumberDistrictInfoParsingTaskWithOptions(request, runtime);
  }

  async createOutboundCallNumberWithOptions(request: CreateOutboundCallNumberRequest, runtime: $Util.RuntimeOptions): Promise<CreateOutboundCallNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.rateLimitCount)) {
      query["RateLimitCount"] = request.rateLimitCount;
    }

    if (!Util.isUnset(request.rateLimitPeriod)) {
      query["RateLimitPeriod"] = request.rateLimitPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOutboundCallNumber",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateOutboundCallNumberResponse>(await this.callApi(params, req, runtime), new CreateOutboundCallNumberResponse({}));
  }

  async createOutboundCallNumber(request: CreateOutboundCallNumberRequest): Promise<CreateOutboundCallNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOutboundCallNumberWithOptions(request, runtime);
  }

  async createScriptWithOptions(request: CreateScriptRequest, runtime: $Util.RuntimeOptions): Promise<CreateScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asrConfig)) {
      query["AsrConfig"] = request.asrConfig;
    }

    if (!Util.isUnset(request.chatbotId)) {
      query["ChatbotId"] = request.chatbotId;
    }

    if (!Util.isUnset(request.emotionEnable)) {
      query["EmotionEnable"] = request.emotionEnable;
    }

    if (!Util.isUnset(request.industry)) {
      query["Industry"] = request.industry;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.longWaitEnable)) {
      query["LongWaitEnable"] = request.longWaitEnable;
    }

    if (!Util.isUnset(request.miniPlaybackEnable)) {
      query["MiniPlaybackEnable"] = request.miniPlaybackEnable;
    }

    if (!Util.isUnset(request.newBargeInEnable)) {
      query["NewBargeInEnable"] = request.newBargeInEnable;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.scriptContent)) {
      query["ScriptContent"] = request.scriptContent;
    }

    if (!Util.isUnset(request.scriptDescription)) {
      query["ScriptDescription"] = request.scriptDescription;
    }

    if (!Util.isUnset(request.scriptName)) {
      query["ScriptName"] = request.scriptName;
    }

    if (!Util.isUnset(request.scriptWaveform)) {
      query["ScriptWaveform"] = request.scriptWaveform;
    }

    if (!Util.isUnset(request.ttsConfig)) {
      query["TtsConfig"] = request.ttsConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateScriptResponse>(await this.callApi(params, req, runtime), new CreateScriptResponse({}));
  }

  async createScript(request: CreateScriptRequest): Promise<CreateScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScriptWithOptions(request, runtime);
  }

  async createScriptWaveformWithOptions(request: CreateScriptWaveformRequest, runtime: $Util.RuntimeOptions): Promise<CreateScriptWaveformResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptContent)) {
      query["ScriptContent"] = request.scriptContent;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateScriptWaveform",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateScriptWaveformResponse>(await this.callApi(params, req, runtime), new CreateScriptWaveformResponse({}));
  }

  async createScriptWaveform(request: CreateScriptWaveformRequest): Promise<CreateScriptWaveformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createScriptWaveformWithOptions(request, runtime);
  }

  async createTagWithOptions(request: CreateTagRequest, runtime: $Util.RuntimeOptions): Promise<CreateTagResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.tagGroup)) {
      query["TagGroup"] = request.tagGroup;
    }

    if (!Util.isUnset(request.tagName)) {
      query["TagName"] = request.tagName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTag",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTagResponse>(await this.callApi(params, req, runtime), new CreateTagResponse({}));
  }

  async createTag(request: CreateTagRequest): Promise<CreateTagResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTagWithOptions(request, runtime);
  }

  async createTaskExportTaskWithOptions(request: CreateTaskExportTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateTaskExportTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateTaskExportTask",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTaskExportTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskExportTaskResponse({}));
  }

  async createTaskExportTask(request: CreateTaskExportTaskRequest): Promise<CreateTaskExportTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTaskExportTaskWithOptions(request, runtime);
  }

  async deleteAllNumberDistrictInfoWithOptions(runtime: $Util.RuntimeOptions): Promise<DeleteAllNumberDistrictInfoResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DeleteAllNumberDistrictInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteAllNumberDistrictInfoResponse>(await this.callApi(params, req, runtime), new DeleteAllNumberDistrictInfoResponse({}));
  }

  async deleteAllNumberDistrictInfo(): Promise<DeleteAllNumberDistrictInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteAllNumberDistrictInfoWithOptions(runtime);
  }

  async deleteContactBlockListWithOptions(request: DeleteContactBlockListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactBlockListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactBlockListId)) {
      query["ContactBlockListId"] = request.contactBlockListId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.operator)) {
      query["Operator"] = request.operator;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContactBlockList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteContactBlockListResponse>(await this.callApi(params, req, runtime), new DeleteContactBlockListResponse({}));
  }

  async deleteContactBlockList(request: DeleteContactBlockListRequest): Promise<DeleteContactBlockListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactBlockListWithOptions(request, runtime);
  }

  async deleteContactWhiteListWithOptions(request: DeleteContactWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContactWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactWhiteListId)) {
      query["ContactWhiteListId"] = request.contactWhiteListId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.operator)) {
      query["Operator"] = request.operator;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContactWhiteList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteContactWhiteListResponse>(await this.callApi(params, req, runtime), new DeleteContactWhiteListResponse({}));
  }

  async deleteContactWhiteList(request: DeleteContactWhiteListRequest): Promise<DeleteContactWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContactWhiteListWithOptions(request, runtime);
  }

  async deleteDialogueFlowWithOptions(request: DeleteDialogueFlowRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDialogueFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dialogueFlowId)) {
      query["DialogueFlowId"] = request.dialogueFlowId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDialogueFlow",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteDialogueFlowResponse>(await this.callApi(params, req, runtime), new DeleteDialogueFlowResponse({}));
  }

  async deleteDialogueFlow(request: DeleteDialogueFlowRequest): Promise<DeleteDialogueFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDialogueFlowWithOptions(request, runtime);
  }

  async deleteGlobalQuestionWithOptions(request: DeleteGlobalQuestionRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGlobalQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.globalQuestionId)) {
      query["GlobalQuestionId"] = request.globalQuestionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGlobalQuestion",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGlobalQuestionResponse>(await this.callApi(params, req, runtime), new DeleteGlobalQuestionResponse({}));
  }

  async deleteGlobalQuestion(request: DeleteGlobalQuestionRequest): Promise<DeleteGlobalQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGlobalQuestionWithOptions(request, runtime);
  }

  async deleteInstanceWithOptions(request: DeleteInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstance(request: DeleteInstanceRequest): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteInstanceWithOptions(request, runtime);
  }

  async deleteIntentWithOptions(request: DeleteIntentRequest, runtime: $Util.RuntimeOptions): Promise<DeleteIntentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteIntentResponse>(await this.callApi(params, req, runtime), new DeleteIntentResponse({}));
  }

  async deleteIntent(request: DeleteIntentRequest): Promise<DeleteIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteIntentWithOptions(request, runtime);
  }

  async deleteJobGroupWithOptions(request: DeleteJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJobGroup",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobGroupResponse>(await this.callApi(params, req, runtime), new DeleteJobGroupResponse({}));
  }

  async deleteJobGroup(request: DeleteJobGroupRequest): Promise<DeleteJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobGroupWithOptions(request, runtime);
  }

  async deleteOutboundCallNumberWithOptions(request: DeleteOutboundCallNumberRequest, runtime: $Util.RuntimeOptions): Promise<DeleteOutboundCallNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.outboundCallNumberId)) {
      query["OutboundCallNumberId"] = request.outboundCallNumberId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteOutboundCallNumber",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteOutboundCallNumberResponse>(await this.callApi(params, req, runtime), new DeleteOutboundCallNumberResponse({}));
  }

  async deleteOutboundCallNumber(request: DeleteOutboundCallNumberRequest): Promise<DeleteOutboundCallNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteOutboundCallNumberWithOptions(request, runtime);
  }

  async deleteScriptWithOptions(request: DeleteScriptRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScriptResponse>(await this.callApi(params, req, runtime), new DeleteScriptResponse({}));
  }

  async deleteScript(request: DeleteScriptRequest): Promise<DeleteScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScriptWithOptions(request, runtime);
  }

  async deleteScriptRecordingWithOptions(request: DeleteScriptRecordingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScriptRecordingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.uuidsJson)) {
      query["UuidsJson"] = request.uuidsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScriptRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScriptRecordingResponse>(await this.callApi(params, req, runtime), new DeleteScriptRecordingResponse({}));
  }

  async deleteScriptRecording(request: DeleteScriptRecordingRequest): Promise<DeleteScriptRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScriptRecordingWithOptions(request, runtime);
  }

  async deleteScriptWaveformWithOptions(request: DeleteScriptWaveformRequest, runtime: $Util.RuntimeOptions): Promise<DeleteScriptWaveformResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.scriptWaveformId)) {
      query["ScriptWaveformId"] = request.scriptWaveformId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteScriptWaveform",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteScriptWaveformResponse>(await this.callApi(params, req, runtime), new DeleteScriptWaveformResponse({}));
  }

  async deleteScriptWaveform(request: DeleteScriptWaveformRequest): Promise<DeleteScriptWaveformResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteScriptWaveformWithOptions(request, runtime);
  }

  async describeDialogueNodeStatisticsWithOptions(request: DescribeDialogueNodeStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDialogueNodeStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDialogueNodeStatistics",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDialogueNodeStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeDialogueNodeStatisticsResponse({}));
  }

  async describeDialogueNodeStatistics(request: DescribeDialogueNodeStatisticsRequest): Promise<DescribeDialogueNodeStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDialogueNodeStatisticsWithOptions(request, runtime);
  }

  async describeDsReportsWithOptions(request: DescribeDsReportsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDsReportsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDsReports",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDsReportsResponse>(await this.callApi(params, req, runtime), new DescribeDsReportsResponse({}));
  }

  async describeDsReports(request: DescribeDsReportsRequest): Promise<DescribeDsReportsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDsReportsWithOptions(request, runtime);
  }

  async describeGlobalQuestionWithOptions(request: DescribeGlobalQuestionRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGlobalQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.globalQuestionId)) {
      query["GlobalQuestionId"] = request.globalQuestionId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGlobalQuestion",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGlobalQuestionResponse>(await this.callApi(params, req, runtime), new DescribeGlobalQuestionResponse({}));
  }

  async describeGlobalQuestion(request: DescribeGlobalQuestionRequest): Promise<DescribeGlobalQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGlobalQuestionWithOptions(request, runtime);
  }

  async describeGroupExecutingInfoWithOptions(request: DescribeGroupExecutingInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGroupExecutingInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGroupExecutingInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGroupExecutingInfoResponse>(await this.callApi(params, req, runtime), new DescribeGroupExecutingInfoResponse({}));
  }

  async describeGroupExecutingInfo(request: DescribeGroupExecutingInfoRequest): Promise<DescribeGroupExecutingInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGroupExecutingInfoWithOptions(request, runtime);
  }

  async describeInstanceWithOptions(request: DescribeInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeInstance",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeInstanceResponse>(await this.callApi(params, req, runtime), new DescribeInstanceResponse({}));
  }

  async describeInstance(request: DescribeInstanceRequest): Promise<DescribeInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeInstanceWithOptions(request, runtime);
  }

  async describeIntentWithOptions(request: DescribeIntentRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIntentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIntentResponse>(await this.callApi(params, req, runtime), new DescribeIntentResponse({}));
  }

  async describeIntent(request: DescribeIntentRequest): Promise<DescribeIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIntentWithOptions(request, runtime);
  }

  async describeIntentStatisticsWithOptions(request: DescribeIntentStatisticsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeIntentStatisticsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeIntentStatistics",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeIntentStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeIntentStatisticsResponse({}));
  }

  async describeIntentStatistics(request: DescribeIntentStatisticsRequest): Promise<DescribeIntentStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeIntentStatisticsWithOptions(request, runtime);
  }

  async describeJobWithOptions(request: DescribeJobRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.withScript)) {
      query["WithScript"] = request.withScript;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJob",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobResponse>(await this.callApi(params, req, runtime), new DescribeJobResponse({}));
  }

  async describeJob(request: DescribeJobRequest): Promise<DescribeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobWithOptions(request, runtime);
  }

  async describeJobDataParsingTaskProgressWithOptions(request: DescribeJobDataParsingTaskProgressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobDataParsingTaskProgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobDataParsingTaskId)) {
      query["JobDataParsingTaskId"] = request.jobDataParsingTaskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJobDataParsingTaskProgress",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobDataParsingTaskProgressResponse>(await this.callApi(params, req, runtime), new DescribeJobDataParsingTaskProgressResponse({}));
  }

  async describeJobDataParsingTaskProgress(request: DescribeJobDataParsingTaskProgressRequest): Promise<DescribeJobDataParsingTaskProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobDataParsingTaskProgressWithOptions(request, runtime);
  }

  async describeJobGroupWithOptions(request: DescribeJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.briefTypes)) {
      query["BriefTypes"] = request.briefTypes;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJobGroup",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobGroupResponse>(await this.callApi(params, req, runtime), new DescribeJobGroupResponse({}));
  }

  async describeJobGroup(request: DescribeJobGroupRequest): Promise<DescribeJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobGroupWithOptions(request, runtime);
  }

  async describeJobGroupExportTaskProgressWithOptions(request: DescribeJobGroupExportTaskProgressRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobGroupExportTaskProgressResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJobGroupExportTaskProgress",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobGroupExportTaskProgressResponse>(await this.callApi(params, req, runtime), new DescribeJobGroupExportTaskProgressResponse({}));
  }

  async describeJobGroupExportTaskProgress(request: DescribeJobGroupExportTaskProgressRequest): Promise<DescribeJobGroupExportTaskProgressResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobGroupExportTaskProgressWithOptions(request, runtime);
  }

  async describeNumberDistrictInfoStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeNumberDistrictInfoStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "DescribeNumberDistrictInfoStatus",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNumberDistrictInfoStatusResponse>(await this.callApi(params, req, runtime), new DescribeNumberDistrictInfoStatusResponse({}));
  }

  async describeNumberDistrictInfoStatus(): Promise<DescribeNumberDistrictInfoStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNumberDistrictInfoStatusWithOptions(runtime);
  }

  async describeScriptWithOptions(request: DescribeScriptRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScriptResponse>(await this.callApi(params, req, runtime), new DescribeScriptResponse({}));
  }

  async describeScript(request: DescribeScriptRequest): Promise<DescribeScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScriptWithOptions(request, runtime);
  }

  async describeScriptVoiceConfigWithOptions(request: DescribeScriptVoiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeScriptVoiceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.scriptVoiceConfigId)) {
      query["ScriptVoiceConfigId"] = request.scriptVoiceConfigId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeScriptVoiceConfig",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeScriptVoiceConfigResponse>(await this.callApi(params, req, runtime), new DescribeScriptVoiceConfigResponse({}));
  }

  async describeScriptVoiceConfig(request: DescribeScriptVoiceConfigRequest): Promise<DescribeScriptVoiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeScriptVoiceConfigWithOptions(request, runtime);
  }

  async describeTTSConfigWithOptions(request: DescribeTTSConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTTSConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTTSConfig",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTTSConfigResponse>(await this.callApi(params, req, runtime), new DescribeTTSConfigResponse({}));
  }

  async describeTTSConfig(request: DescribeTTSConfigRequest): Promise<DescribeTTSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTTSConfigWithOptions(request, runtime);
  }

  async describeTTSDemoWithOptions(request: DescribeTTSDemoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTTSDemoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pitchRate)) {
      query["PitchRate"] = request.pitchRate;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.speechRate)) {
      query["SpeechRate"] = request.speechRate;
    }

    if (!Util.isUnset(request.text)) {
      query["Text"] = request.text;
    }

    if (!Util.isUnset(request.voice)) {
      query["Voice"] = request.voice;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTTSDemo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTTSDemoResponse>(await this.callApi(params, req, runtime), new DescribeTTSDemoResponse({}));
  }

  async describeTTSDemo(request: DescribeTTSDemoRequest): Promise<DescribeTTSDemoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTTSDemoWithOptions(request, runtime);
  }

  async describeTagHitsSummaryWithOptions(request: DescribeTagHitsSummaryRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTagHitsSummaryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTagHitsSummary",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTagHitsSummaryResponse>(await this.callApi(params, req, runtime), new DescribeTagHitsSummaryResponse({}));
  }

  async describeTagHitsSummary(request: DescribeTagHitsSummaryRequest): Promise<DescribeTagHitsSummaryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTagHitsSummaryWithOptions(request, runtime);
  }

  async describeTenantBindNumberWithOptions(request: DescribeTenantBindNumberRequest, runtime: $Util.RuntimeOptions): Promise<DescribeTenantBindNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeTenantBindNumber",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeTenantBindNumberResponse>(await this.callApi(params, req, runtime), new DescribeTenantBindNumberResponse({}));
  }

  async describeTenantBindNumber(request: DescribeTenantBindNumberRequest): Promise<DescribeTenantBindNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeTenantBindNumberWithOptions(request, runtime);
  }

  async dialogueWithOptions(request: DialogueRequest, runtime: $Util.RuntimeOptions): Promise<DialogueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actionKey)) {
      query["ActionKey"] = request.actionKey;
    }

    if (!Util.isUnset(request.actionParams)) {
      query["ActionParams"] = request.actionParams;
    }

    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.callType)) {
      query["CallType"] = request.callType;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.utterance)) {
      query["Utterance"] = request.utterance;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "Dialogue",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DialogueResponse>(await this.callApi(params, req, runtime), new DialogueResponse({}));
  }

  async dialogue(request: DialogueRequest): Promise<DialogueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dialogueWithOptions(request, runtime);
  }

  async dismissNumberDistrictInfoParsingResultWithOptions(request: DismissNumberDistrictInfoParsingResultRequest, runtime: $Util.RuntimeOptions): Promise<DismissNumberDistrictInfoParsingResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.versionId)) {
      query["VersionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DismissNumberDistrictInfoParsingResult",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DismissNumberDistrictInfoParsingResultResponse>(await this.callApi(params, req, runtime), new DismissNumberDistrictInfoParsingResultResponse({}));
  }

  async dismissNumberDistrictInfoParsingResult(request: DismissNumberDistrictInfoParsingResultRequest): Promise<DismissNumberDistrictInfoParsingResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.dismissNumberDistrictInfoParsingResultWithOptions(request, runtime);
  }

  async downloadRecordingWithOptions(request: DownloadRecordingRequest, runtime: $Util.RuntimeOptions): Promise<DownloadRecordingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.needVoiceSliceRecording)) {
      query["NeedVoiceSliceRecording"] = request.needVoiceSliceRecording;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadRecordingResponse>(await this.callApi(params, req, runtime), new DownloadRecordingResponse({}));
  }

  async downloadRecording(request: DownloadRecordingRequest): Promise<DownloadRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadRecordingWithOptions(request, runtime);
  }

  async downloadScriptRecordingWithOptions(request: DownloadScriptRecordingRequest, runtime: $Util.RuntimeOptions): Promise<DownloadScriptRecordingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.uuid)) {
      query["Uuid"] = request.uuid;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DownloadScriptRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DownloadScriptRecordingResponse>(await this.callApi(params, req, runtime), new DownloadScriptRecordingResponse({}));
  }

  async downloadScriptRecording(request: DownloadScriptRecordingRequest): Promise<DownloadScriptRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.downloadScriptRecordingWithOptions(request, runtime);
  }

  async duplicateScriptWithOptions(request: DuplicateScriptRequest, runtime: $Util.RuntimeOptions): Promise<DuplicateScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.sourceScriptId)) {
      query["SourceScriptId"] = request.sourceScriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DuplicateScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DuplicateScriptResponse>(await this.callApi(params, req, runtime), new DuplicateScriptResponse({}));
  }

  async duplicateScript(request: DuplicateScriptRequest): Promise<DuplicateScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.duplicateScriptWithOptions(request, runtime);
  }

  async exportScriptWithOptions(request: ExportScriptRequest, runtime: $Util.RuntimeOptions): Promise<ExportScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExportScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExportScriptResponse>(await this.callApi(params, req, runtime), new ExportScriptResponse({}));
  }

  async exportScript(request: ExportScriptRequest): Promise<ExportScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.exportScriptWithOptions(request, runtime);
  }

  async generateUploadUrlWithOptions(request: GenerateUploadUrlRequest, runtime: $Util.RuntimeOptions): Promise<GenerateUploadUrlResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.key)) {
      query["Key"] = request.key;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateUploadUrl",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateUploadUrlResponse>(await this.callApi(params, req, runtime), new GenerateUploadUrlResponse({}));
  }

  async generateUploadUrl(request: GenerateUploadUrlRequest): Promise<GenerateUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateUploadUrlWithOptions(request, runtime);
  }

  async getAfterAnswerDelayPlaybackWithOptions(request: GetAfterAnswerDelayPlaybackRequest, runtime: $Util.RuntimeOptions): Promise<GetAfterAnswerDelayPlaybackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!Util.isUnset(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAfterAnswerDelayPlayback",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAfterAnswerDelayPlaybackResponse>(await this.callApi(params, req, runtime), new GetAfterAnswerDelayPlaybackResponse({}));
  }

  async getAfterAnswerDelayPlayback(request: GetAfterAnswerDelayPlaybackRequest): Promise<GetAfterAnswerDelayPlaybackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAfterAnswerDelayPlaybackWithOptions(request, runtime);
  }

  async getAsrServerInfoWithOptions(request: GetAsrServerInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetAsrServerInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!Util.isUnset(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsrServerInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAsrServerInfoResponse>(await this.callApi(params, req, runtime), new GetAsrServerInfoResponse({}));
  }

  async getAsrServerInfo(request: GetAsrServerInfoRequest): Promise<GetAsrServerInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAsrServerInfoWithOptions(request, runtime);
  }

  async getBaseStrategyPeriodWithOptions(request: GetBaseStrategyPeriodRequest, runtime: $Util.RuntimeOptions): Promise<GetBaseStrategyPeriodResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!Util.isUnset(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBaseStrategyPeriod",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBaseStrategyPeriodResponse>(await this.callApi(params, req, runtime), new GetBaseStrategyPeriodResponse({}));
  }

  async getBaseStrategyPeriod(request: GetBaseStrategyPeriodRequest): Promise<GetBaseStrategyPeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBaseStrategyPeriodWithOptions(request, runtime);
  }

  async getConcurrentConversationQuotaWithOptions(runtime: $Util.RuntimeOptions): Promise<GetConcurrentConversationQuotaResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetConcurrentConversationQuota",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetConcurrentConversationQuotaResponse>(await this.callApi(params, req, runtime), new GetConcurrentConversationQuotaResponse({}));
  }

  async getConcurrentConversationQuota(): Promise<GetConcurrentConversationQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getConcurrentConversationQuotaWithOptions(runtime);
  }

  async getContactBlockListWithOptions(request: GetContactBlockListRequest, runtime: $Util.RuntimeOptions): Promise<GetContactBlockListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.countTotalRow)) {
      query["CountTotalRow"] = request.countTotalRow;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetContactBlockList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetContactBlockListResponse>(await this.callApi(params, req, runtime), new GetContactBlockListResponse({}));
  }

  async getContactBlockList(request: GetContactBlockListRequest): Promise<GetContactBlockListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getContactBlockListWithOptions(request, runtime);
  }

  async getContactWhiteListWithOptions(request: GetContactWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<GetContactWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.countTotalRow)) {
      query["CountTotalRow"] = request.countTotalRow;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetContactWhiteList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetContactWhiteListResponse>(await this.callApi(params, req, runtime), new GetContactWhiteListResponse({}));
  }

  async getContactWhiteList(request: GetContactWhiteListRequest): Promise<GetContactWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getContactWhiteListWithOptions(request, runtime);
  }

  async getCurrentConcurrencyWithOptions(request: GetCurrentConcurrencyRequest, runtime: $Util.RuntimeOptions): Promise<GetCurrentConcurrencyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCurrentConcurrency",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCurrentConcurrencyResponse>(await this.callApi(params, req, runtime), new GetCurrentConcurrencyResponse({}));
  }

  async getCurrentConcurrency(request: GetCurrentConcurrencyRequest): Promise<GetCurrentConcurrencyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCurrentConcurrencyWithOptions(request, runtime);
  }

  async getEffectiveDaysWithOptions(request: GetEffectiveDaysRequest, runtime: $Util.RuntimeOptions): Promise<GetEffectiveDaysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!Util.isUnset(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEffectiveDays",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEffectiveDaysResponse>(await this.callApi(params, req, runtime), new GetEffectiveDaysResponse({}));
  }

  async getEffectiveDays(request: GetEffectiveDaysRequest): Promise<GetEffectiveDaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEffectiveDaysWithOptions(request, runtime);
  }

  async getEmptyNumberNoMoreCallsInfoWithOptions(request: GetEmptyNumberNoMoreCallsInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetEmptyNumberNoMoreCallsInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!Util.isUnset(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetEmptyNumberNoMoreCallsInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetEmptyNumberNoMoreCallsInfoResponse>(await this.callApi(params, req, runtime), new GetEmptyNumberNoMoreCallsInfoResponse({}));
  }

  async getEmptyNumberNoMoreCallsInfo(request: GetEmptyNumberNoMoreCallsInfoRequest): Promise<GetEmptyNumberNoMoreCallsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getEmptyNumberNoMoreCallsInfoWithOptions(request, runtime);
  }

  async getMaxAttemptsPerDayWithOptions(request: GetMaxAttemptsPerDayRequest, runtime: $Util.RuntimeOptions): Promise<GetMaxAttemptsPerDayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!Util.isUnset(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetMaxAttemptsPerDay",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetMaxAttemptsPerDayResponse>(await this.callApi(params, req, runtime), new GetMaxAttemptsPerDayResponse({}));
  }

  async getMaxAttemptsPerDay(request: GetMaxAttemptsPerDayRequest): Promise<GetMaxAttemptsPerDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getMaxAttemptsPerDayWithOptions(request, runtime);
  }

  async getNumberDistrictInfoTemplateDownloadUrlWithOptions(runtime: $Util.RuntimeOptions): Promise<GetNumberDistrictInfoTemplateDownloadUrlResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetNumberDistrictInfoTemplateDownloadUrl",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetNumberDistrictInfoTemplateDownloadUrlResponse>(await this.callApi(params, req, runtime), new GetNumberDistrictInfoTemplateDownloadUrlResponse({}));
  }

  async getNumberDistrictInfoTemplateDownloadUrl(): Promise<GetNumberDistrictInfoTemplateDownloadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getNumberDistrictInfoTemplateDownloadUrlWithOptions(runtime);
  }

  async getSummaryInfoWithOptions(request: GetSummaryInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetSummaryInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceIdList)) {
      query["InstanceIdList"] = request.instanceIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSummaryInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSummaryInfoResponse>(await this.callApi(params, req, runtime), new GetSummaryInfoResponse({}));
  }

  async getSummaryInfo(request: GetSummaryInfoRequest): Promise<GetSummaryInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSummaryInfoWithOptions(request, runtime);
  }

  async getTaskByUuidWithOptions(request: GetTaskByUuidRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskByUuidResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTaskByUuid",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTaskByUuidResponse>(await this.callApi(params, req, runtime), new GetTaskByUuidResponse({}));
  }

  async getTaskByUuid(request: GetTaskByUuidRequest): Promise<GetTaskByUuidResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskByUuidWithOptions(request, runtime);
  }

  async getVersionWithOptions(runtime: $Util.RuntimeOptions): Promise<GetVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "GetVersion",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVersionResponse>(await this.callApi(params, req, runtime), new GetVersionResponse({}));
  }

  async getVersion(): Promise<GetVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVersionWithOptions(runtime);
  }

  async importScriptWithOptions(request: ImportScriptRequest, runtime: $Util.RuntimeOptions): Promise<ImportScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.signatureUrl)) {
      query["SignatureUrl"] = request.signatureUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ImportScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ImportScriptResponse>(await this.callApi(params, req, runtime), new ImportScriptResponse({}));
  }

  async importScript(request: ImportScriptRequest): Promise<ImportScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.importScriptWithOptions(request, runtime);
  }

  async inflightTaskTimeoutWithOptions(request: InflightTaskTimeoutRequest, runtime: $Util.RuntimeOptions): Promise<InflightTaskTimeoutResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InflightTaskTimeout",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InflightTaskTimeoutResponse>(await this.callApi(params, req, runtime), new InflightTaskTimeoutResponse({}));
  }

  async inflightTaskTimeout(request: InflightTaskTimeoutRequest): Promise<InflightTaskTimeoutResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.inflightTaskTimeoutWithOptions(request, runtime);
  }

  async listAllTenantBindNumberBindingWithOptions(runtime: $Util.RuntimeOptions): Promise<ListAllTenantBindNumberBindingResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListAllTenantBindNumberBinding",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAllTenantBindNumberBindingResponse>(await this.callApi(params, req, runtime), new ListAllTenantBindNumberBindingResponse({}));
  }

  async listAllTenantBindNumberBinding(): Promise<ListAllTenantBindNumberBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAllTenantBindNumberBindingWithOptions(runtime);
  }

  async listChatbotInstancesWithOptions(request: ListChatbotInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListChatbotInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListChatbotInstances",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListChatbotInstancesResponse>(await this.callApi(params, req, runtime), new ListChatbotInstancesResponse({}));
  }

  async listChatbotInstances(request: ListChatbotInstancesRequest): Promise<ListChatbotInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listChatbotInstancesWithOptions(request, runtime);
  }

  async listDialogueFlowsWithOptions(request: ListDialogueFlowsRequest, runtime: $Util.RuntimeOptions): Promise<ListDialogueFlowsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDialogueFlows",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDialogueFlowsResponse>(await this.callApi(params, req, runtime), new ListDialogueFlowsResponse({}));
  }

  async listDialogueFlows(request: ListDialogueFlowsRequest): Promise<ListDialogueFlowsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDialogueFlowsWithOptions(request, runtime);
  }

  async listDownloadTasksWithOptions(request: ListDownloadTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListDownloadTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDownloadTasks",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDownloadTasksResponse>(await this.callApi(params, req, runtime), new ListDownloadTasksResponse({}));
  }

  async listDownloadTasks(request: ListDownloadTasksRequest): Promise<ListDownloadTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDownloadTasksWithOptions(request, runtime);
  }

  async listGlobalQuestionsWithOptions(request: ListGlobalQuestionsRequest, runtime: $Util.RuntimeOptions): Promise<ListGlobalQuestionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGlobalQuestions",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListGlobalQuestionsResponse>(await this.callApi(params, req, runtime), new ListGlobalQuestionsResponse({}));
  }

  async listGlobalQuestions(request: ListGlobalQuestionsRequest): Promise<ListGlobalQuestionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listGlobalQuestionsWithOptions(request, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstancesWithOptions(request, runtime);
  }

  async listIntentsWithOptions(request: ListIntentsRequest, runtime: $Util.RuntimeOptions): Promise<ListIntentsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListIntents",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListIntentsResponse>(await this.callApi(params, req, runtime), new ListIntentsResponse({}));
  }

  async listIntents(request: ListIntentsRequest): Promise<ListIntentsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listIntentsWithOptions(request, runtime);
  }

  async listJobGroupsWithOptions(request: ListJobGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asyncQuery)) {
      query["AsyncQuery"] = request.asyncQuery;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupStatusFilter)) {
      query["JobGroupStatusFilter"] = request.jobGroupStatusFilter;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.searchText)) {
      query["SearchText"] = request.searchText;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobGroups",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobGroupsResponse>(await this.callApi(params, req, runtime), new ListJobGroupsResponse({}));
  }

  async listJobGroups(request: ListJobGroupsRequest): Promise<ListJobGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobGroupsWithOptions(request, runtime);
  }

  async listJobGroupsAsyncWithOptions(request: ListJobGroupsAsyncRequest, runtime: $Util.RuntimeOptions): Promise<ListJobGroupsAsyncResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobGroupsAsync",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobGroupsAsyncResponse>(await this.callApi(params, req, runtime), new ListJobGroupsAsyncResponse({}));
  }

  async listJobGroupsAsync(request: ListJobGroupsAsyncRequest): Promise<ListJobGroupsAsyncResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobGroupsAsyncWithOptions(request, runtime);
  }

  async listJobsWithOptions(request: ListJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  async listJobsByGroupWithOptions(request: ListJobsByGroupRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsByGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobFailureReason)) {
      query["JobFailureReason"] = request.jobFailureReason;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.jobStatus)) {
      query["JobStatus"] = request.jobStatus;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobsByGroup",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobsByGroupResponse>(await this.callApi(params, req, runtime), new ListJobsByGroupResponse({}));
  }

  async listJobsByGroup(request: ListJobsByGroupRequest): Promise<ListJobsByGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsByGroupWithOptions(request, runtime);
  }

  async listOutboundCallNumbersWithOptions(request: ListOutboundCallNumbersRequest, runtime: $Util.RuntimeOptions): Promise<ListOutboundCallNumbersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOutboundCallNumbers",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListOutboundCallNumbersResponse>(await this.callApi(params, req, runtime), new ListOutboundCallNumbersResponse({}));
  }

  async listOutboundCallNumbers(request: ListOutboundCallNumbersRequest): Promise<ListOutboundCallNumbersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOutboundCallNumbersWithOptions(request, runtime);
  }

  async listResourceTagsWithOptions(request: ListResourceTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListResourceTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceTags",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListResourceTagsResponse>(await this.callApi(params, req, runtime), new ListResourceTagsResponse({}));
  }

  async listResourceTags(request: ListResourceTagsRequest): Promise<ListResourceTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listResourceTagsWithOptions(request, runtime);
  }

  async listSchedulerInstancesWithOptions(request: ListSchedulerInstancesRequest, runtime: $Util.RuntimeOptions): Promise<ListSchedulerInstancesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSchedulerInstances",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSchedulerInstancesResponse>(await this.callApi(params, req, runtime), new ListSchedulerInstancesResponse({}));
  }

  async listSchedulerInstances(request: ListSchedulerInstancesRequest): Promise<ListSchedulerInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSchedulerInstancesWithOptions(request, runtime);
  }

  async listScriptPublishHistoriesWithOptions(request: ListScriptPublishHistoriesRequest, runtime: $Util.RuntimeOptions): Promise<ListScriptPublishHistoriesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScriptPublishHistories",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListScriptPublishHistoriesResponse>(await this.callApi(params, req, runtime), new ListScriptPublishHistoriesResponse({}));
  }

  async listScriptPublishHistories(request: ListScriptPublishHistoriesRequest): Promise<ListScriptPublishHistoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScriptPublishHistoriesWithOptions(request, runtime);
  }

  async listScriptRecordingWithOptions(request: ListScriptRecordingRequest, runtime: $Util.RuntimeOptions): Promise<ListScriptRecordingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.search)) {
      query["Search"] = request.search;
    }

    if (!Util.isUnset(request.statesJson)) {
      query["StatesJson"] = request.statesJson;
    }

    if (!Util.isUnset(request.uuidsJson)) {
      query["UuidsJson"] = request.uuidsJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScriptRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListScriptRecordingResponse>(await this.callApi(params, req, runtime), new ListScriptRecordingResponse({}));
  }

  async listScriptRecording(request: ListScriptRecordingRequest): Promise<ListScriptRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScriptRecordingWithOptions(request, runtime);
  }

  async listScriptVoiceConfigsWithOptions(request: ListScriptVoiceConfigsRequest, runtime: $Util.RuntimeOptions): Promise<ListScriptVoiceConfigsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScriptVoiceConfigs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListScriptVoiceConfigsResponse>(await this.callApi(params, req, runtime), new ListScriptVoiceConfigsResponse({}));
  }

  async listScriptVoiceConfigs(request: ListScriptVoiceConfigsRequest): Promise<ListScriptVoiceConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScriptVoiceConfigsWithOptions(request, runtime);
  }

  async listScriptsWithOptions(request: ListScriptsRequest, runtime: $Util.RuntimeOptions): Promise<ListScriptsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListScripts",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListScriptsResponse>(await this.callApi(params, req, runtime), new ListScriptsResponse({}));
  }

  async listScripts(request: ListScriptsRequest): Promise<ListScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listScriptsWithOptions(request, runtime);
  }

  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  async listTagsWithOptions(request: ListTagsRequest, runtime: $Util.RuntimeOptions): Promise<ListTagsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTags",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagsResponse>(await this.callApi(params, req, runtime), new ListTagsResponse({}));
  }

  async listTags(request: ListTagsRequest): Promise<ListTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagsWithOptions(request, runtime);
  }

  async modifyBatchJobsWithOptions(request: ModifyBatchJobsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyBatchJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.batchJobName)) {
      query["BatchJobName"] = request.batchJobName;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobFilePath)) {
      query["JobFilePath"] = request.jobFilePath;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    if (!Util.isUnset(request.submitted)) {
      query["Submitted"] = request.submitted;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyBatchJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyBatchJobsResponse>(await this.callApi(params, req, runtime), new ModifyBatchJobsResponse({}));
  }

  async modifyBatchJobs(request: ModifyBatchJobsRequest): Promise<ModifyBatchJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyBatchJobsWithOptions(request, runtime);
  }

  async modifyDialogueFlowWithOptions(request: ModifyDialogueFlowRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDialogueFlowResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.dialogueFlowDefinition)) {
      query["DialogueFlowDefinition"] = request.dialogueFlowDefinition;
    }

    if (!Util.isUnset(request.dialogueFlowId)) {
      query["DialogueFlowId"] = request.dialogueFlowId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.isDrafted)) {
      query["IsDrafted"] = request.isDrafted;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyDialogueFlow",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyDialogueFlowResponse>(await this.callApi(params, req, runtime), new ModifyDialogueFlowResponse({}));
  }

  async modifyDialogueFlow(request: ModifyDialogueFlowRequest): Promise<ModifyDialogueFlowResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDialogueFlowWithOptions(request, runtime);
  }

  async modifyEmptyNumberNoMoreCallsInfoWithOptions(request: ModifyEmptyNumberNoMoreCallsInfoRequest, runtime: $Util.RuntimeOptions): Promise<ModifyEmptyNumberNoMoreCallsInfoResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.emptyNumberNoMoreCalls)) {
      query["EmptyNumberNoMoreCalls"] = request.emptyNumberNoMoreCalls;
    }

    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!Util.isUnset(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyEmptyNumberNoMoreCallsInfo",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyEmptyNumberNoMoreCallsInfoResponse>(await this.callApi(params, req, runtime), new ModifyEmptyNumberNoMoreCallsInfoResponse({}));
  }

  async modifyEmptyNumberNoMoreCallsInfo(request: ModifyEmptyNumberNoMoreCallsInfoRequest): Promise<ModifyEmptyNumberNoMoreCallsInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyEmptyNumberNoMoreCallsInfoWithOptions(request, runtime);
  }

  async modifyGlobalQuestionWithOptions(request: ModifyGlobalQuestionRequest, runtime: $Util.RuntimeOptions): Promise<ModifyGlobalQuestionResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.answers)) {
      query["Answers"] = request.answers;
    }

    if (!Util.isUnset(request.globalQuestionId)) {
      query["GlobalQuestionId"] = request.globalQuestionId;
    }

    if (!Util.isUnset(request.globalQuestionName)) {
      query["GlobalQuestionName"] = request.globalQuestionName;
    }

    if (!Util.isUnset(request.globalQuestionType)) {
      query["GlobalQuestionType"] = request.globalQuestionType;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.questions)) {
      query["Questions"] = request.questions;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyGlobalQuestion",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyGlobalQuestionResponse>(await this.callApi(params, req, runtime), new ModifyGlobalQuestionResponse({}));
  }

  async modifyGlobalQuestion(request: ModifyGlobalQuestionRequest): Promise<ModifyGlobalQuestionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyGlobalQuestionWithOptions(request, runtime);
  }

  async modifyInstanceWithOptions(request: ModifyInstanceRequest, runtime: $Util.RuntimeOptions): Promise<ModifyInstanceResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.instanceDescription)) {
      query["InstanceDescription"] = request.instanceDescription;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.maxConcurrentConversation)) {
      query["MaxConcurrentConversation"] = request.maxConcurrentConversation;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyInstance",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyInstanceResponse>(await this.callApi(params, req, runtime), new ModifyInstanceResponse({}));
  }

  async modifyInstance(request: ModifyInstanceRequest): Promise<ModifyInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyInstanceWithOptions(request, runtime);
  }

  async modifyIntentWithOptions(request: ModifyIntentRequest, runtime: $Util.RuntimeOptions): Promise<ModifyIntentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.intentDescription)) {
      query["IntentDescription"] = request.intentDescription;
    }

    if (!Util.isUnset(request.intentId)) {
      query["IntentId"] = request.intentId;
    }

    if (!Util.isUnset(request.intentName)) {
      query["IntentName"] = request.intentName;
    }

    if (!Util.isUnset(request.keywords)) {
      query["Keywords"] = request.keywords;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.utterances)) {
      query["Utterances"] = request.utterances;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyIntent",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyIntentResponse>(await this.callApi(params, req, runtime), new ModifyIntentResponse({}));
  }

  async modifyIntent(request: ModifyIntentRequest): Promise<ModifyIntentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyIntentWithOptions(request, runtime);
  }

  async modifyJobGroupWithOptions(request: ModifyJobGroupRequest, runtime: $Util.RuntimeOptions): Promise<ModifyJobGroupResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.jobGroupStatus)) {
      query["JobGroupStatus"] = request.jobGroupStatus;
    }

    if (!Util.isUnset(request.minConcurrency)) {
      query["MinConcurrency"] = request.minConcurrency;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.priority)) {
      query["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.recallStrategyJson)) {
      query["RecallStrategyJson"] = request.recallStrategyJson;
    }

    if (!Util.isUnset(request.ringingDuration)) {
      query["RingingDuration"] = request.ringingDuration;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.strategyJson)) {
      query["StrategyJson"] = request.strategyJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyJobGroup",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyJobGroupResponse>(await this.callApi(params, req, runtime), new ModifyJobGroupResponse({}));
  }

  async modifyJobGroup(request: ModifyJobGroupRequest): Promise<ModifyJobGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyJobGroupWithOptions(request, runtime);
  }

  async modifyOutboundCallNumberWithOptions(request: ModifyOutboundCallNumberRequest, runtime: $Util.RuntimeOptions): Promise<ModifyOutboundCallNumberResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.number)) {
      query["Number"] = request.number;
    }

    if (!Util.isUnset(request.outboundCallNumberId)) {
      query["OutboundCallNumberId"] = request.outboundCallNumberId;
    }

    if (!Util.isUnset(request.rateLimitCount)) {
      query["RateLimitCount"] = request.rateLimitCount;
    }

    if (!Util.isUnset(request.rateLimitPeriod)) {
      query["RateLimitPeriod"] = request.rateLimitPeriod;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyOutboundCallNumber",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyOutboundCallNumberResponse>(await this.callApi(params, req, runtime), new ModifyOutboundCallNumberResponse({}));
  }

  async modifyOutboundCallNumber(request: ModifyOutboundCallNumberRequest): Promise<ModifyOutboundCallNumberResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyOutboundCallNumberWithOptions(request, runtime);
  }

  async modifyScriptWithOptions(request: ModifyScriptRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asrConfig)) {
      query["AsrConfig"] = request.asrConfig;
    }

    if (!Util.isUnset(request.chatbotId)) {
      query["ChatbotId"] = request.chatbotId;
    }

    if (!Util.isUnset(request.emotionEnable)) {
      query["EmotionEnable"] = request.emotionEnable;
    }

    if (!Util.isUnset(request.industry)) {
      query["Industry"] = request.industry;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.longWaitEnable)) {
      query["LongWaitEnable"] = request.longWaitEnable;
    }

    if (!Util.isUnset(request.miniPlaybackConfigListJsonString)) {
      query["MiniPlaybackConfigListJsonString"] = request.miniPlaybackConfigListJsonString;
    }

    if (!Util.isUnset(request.miniPlaybackEnable)) {
      query["MiniPlaybackEnable"] = request.miniPlaybackEnable;
    }

    if (!Util.isUnset(request.newBargeInEnable)) {
      query["NewBargeInEnable"] = request.newBargeInEnable;
    }

    if (!Util.isUnset(request.nlsConfig)) {
      query["NlsConfig"] = request.nlsConfig;
    }

    if (!Util.isUnset(request.scene)) {
      query["Scene"] = request.scene;
    }

    if (!Util.isUnset(request.scriptContent)) {
      query["ScriptContent"] = request.scriptContent;
    }

    if (!Util.isUnset(request.scriptDescription)) {
      query["ScriptDescription"] = request.scriptDescription;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.scriptName)) {
      query["ScriptName"] = request.scriptName;
    }

    if (!Util.isUnset(request.scriptWaveform)) {
      query["ScriptWaveform"] = request.scriptWaveform;
    }

    if (!Util.isUnset(request.ttsConfig)) {
      query["TtsConfig"] = request.ttsConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyScriptResponse>(await this.callApi(params, req, runtime), new ModifyScriptResponse({}));
  }

  async modifyScript(request: ModifyScriptRequest): Promise<ModifyScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScriptWithOptions(request, runtime);
  }

  async modifyScriptVoiceConfigWithOptions(request: ModifyScriptVoiceConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyScriptVoiceConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.scriptVoiceConfigId)) {
      query["ScriptVoiceConfigId"] = request.scriptVoiceConfigId;
    }

    if (!Util.isUnset(request.scriptWaveformRelation)) {
      query["ScriptWaveformRelation"] = request.scriptWaveformRelation;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyScriptVoiceConfig",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyScriptVoiceConfigResponse>(await this.callApi(params, req, runtime), new ModifyScriptVoiceConfigResponse({}));
  }

  async modifyScriptVoiceConfig(request: ModifyScriptVoiceConfigRequest): Promise<ModifyScriptVoiceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyScriptVoiceConfigWithOptions(request, runtime);
  }

  async modifyTTSConfigWithOptions(request: ModifyTTSConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTTSConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.appKey)) {
      query["AppKey"] = request.appKey;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.nlsServiceType)) {
      query["NlsServiceType"] = request.nlsServiceType;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.speechRate)) {
      query["SpeechRate"] = request.speechRate;
    }

    if (!Util.isUnset(request.voice)) {
      query["Voice"] = request.voice;
    }

    if (!Util.isUnset(request.volume)) {
      query["Volume"] = request.volume;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTTSConfig",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTTSConfigResponse>(await this.callApi(params, req, runtime), new ModifyTTSConfigResponse({}));
  }

  async modifyTTSConfig(request: ModifyTTSConfigRequest): Promise<ModifyTTSConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTTSConfigWithOptions(request, runtime);
  }

  async modifyTagGroupsWithOptions(request: ModifyTagGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyTagGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    if (!Util.isUnset(request.tagGroups)) {
      query["TagGroups"] = request.tagGroups;
    }

    if (!Util.isUnset(request.tags)) {
      query["Tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyTagGroups",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyTagGroupsResponse>(await this.callApi(params, req, runtime), new ModifyTagGroupsResponse({}));
  }

  async modifyTagGroups(request: ModifyTagGroupsRequest): Promise<ModifyTagGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyTagGroupsWithOptions(request, runtime);
  }

  async publishScriptWithOptions(request: PublishScriptRequest, runtime: $Util.RuntimeOptions): Promise<PublishScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishScriptResponse>(await this.callApi(params, req, runtime), new PublishScriptResponse({}));
  }

  async publishScript(request: PublishScriptRequest): Promise<PublishScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishScriptWithOptions(request, runtime);
  }

  async publishScriptForDebugWithOptions(request: PublishScriptForDebugRequest, runtime: $Util.RuntimeOptions): Promise<PublishScriptForDebugResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PublishScriptForDebug",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PublishScriptForDebugResponse>(await this.callApi(params, req, runtime), new PublishScriptForDebugResponse({}));
  }

  async publishScriptForDebug(request: PublishScriptForDebugRequest): Promise<PublishScriptForDebugResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.publishScriptForDebugWithOptions(request, runtime);
  }

  async queryJobsWithOptions(request: QueryJobsRequest, runtime: $Util.RuntimeOptions): Promise<QueryJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactName)) {
      query["ContactName"] = request.contactName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeAlignment)) {
      query["TimeAlignment"] = request.timeAlignment;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryJobsResponse>(await this.callApi(params, req, runtime), new QueryJobsResponse({}));
  }

  async queryJobs(request: QueryJobsRequest): Promise<QueryJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryJobsWithOptions(request, runtime);
  }

  async queryJobsWithResultWithOptions(request: QueryJobsWithResultRequest, runtime: $Util.RuntimeOptions): Promise<QueryJobsWithResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.hasAnsweredFilter)) {
      query["HasAnsweredFilter"] = request.hasAnsweredFilter;
    }

    if (!Util.isUnset(request.hasHangUpByRejectionFilter)) {
      query["HasHangUpByRejectionFilter"] = request.hasHangUpByRejectionFilter;
    }

    if (!Util.isUnset(request.hasReachedEndOfFlowFilter)) {
      query["HasReachedEndOfFlowFilter"] = request.hasReachedEndOfFlowFilter;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.jobStatusFilter)) {
      query["JobStatusFilter"] = request.jobStatusFilter;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.queryText)) {
      query["QueryText"] = request.queryText;
    }

    if (!Util.isUnset(request.taskStatusFilter)) {
      query["TaskStatusFilter"] = request.taskStatusFilter;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryJobsWithResult",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryJobsWithResultResponse>(await this.callApi(params, req, runtime), new QueryJobsWithResultResponse({}));
  }

  async queryJobsWithResult(request: QueryJobsWithResultRequest): Promise<QueryJobsWithResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryJobsWithResultWithOptions(request, runtime);
  }

  async queryScriptWaveformsWithOptions(request: QueryScriptWaveformsRequest, runtime: $Util.RuntimeOptions): Promise<QueryScriptWaveformsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptContent)) {
      query["ScriptContent"] = request.scriptContent;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryScriptWaveforms",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryScriptWaveformsResponse>(await this.callApi(params, req, runtime), new QueryScriptWaveformsResponse({}));
  }

  async queryScriptWaveforms(request: QueryScriptWaveformsRequest): Promise<QueryScriptWaveformsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryScriptWaveformsWithOptions(request, runtime);
  }

  async queryScriptsByStatusWithOptions(request: QueryScriptsByStatusRequest, runtime: $Util.RuntimeOptions): Promise<QueryScriptsByStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.statusList)) {
      query["StatusList"] = request.statusList;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryScriptsByStatus",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryScriptsByStatusResponse>(await this.callApi(params, req, runtime), new QueryScriptsByStatusResponse({}));
  }

  async queryScriptsByStatus(request: QueryScriptsByStatusRequest): Promise<QueryScriptsByStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryScriptsByStatusWithOptions(request, runtime);
  }

  async recordFailureWithOptions(request: RecordFailureRequest, runtime: $Util.RuntimeOptions): Promise<RecordFailureResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.actualTime)) {
      query["ActualTime"] = request.actualTime;
    }

    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.calledNumber)) {
      query["CalledNumber"] = request.calledNumber;
    }

    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.dispositionCode)) {
      query["DispositionCode"] = request.dispositionCode;
    }

    if (!Util.isUnset(request.exceptionCodes)) {
      query["ExceptionCodes"] = request.exceptionCodes;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecordFailure",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecordFailureResponse>(await this.callApi(params, req, runtime), new RecordFailureResponse({}));
  }

  async recordFailure(request: RecordFailureRequest): Promise<RecordFailureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recordFailureWithOptions(request, runtime);
  }

  async resumeJobsWithOptions(request: ResumeJobsRequest, runtime: $Util.RuntimeOptions): Promise<ResumeJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.jobReferenceId)) {
      query["JobReferenceId"] = request.jobReferenceId;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResumeJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeJobsResponse>(await this.callApi(params, req, runtime), new ResumeJobsResponse({}));
  }

  async resumeJobs(request: ResumeJobsRequest): Promise<ResumeJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeJobsWithOptions(request, runtime);
  }

  async rollbackScriptWithOptions(request: RollbackScriptRequest, runtime: $Util.RuntimeOptions): Promise<RollbackScriptResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.rollbackVersion)) {
      query["RollbackVersion"] = request.rollbackVersion;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RollbackScript",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RollbackScriptResponse>(await this.callApi(params, req, runtime), new RollbackScriptResponse({}));
  }

  async rollbackScript(request: RollbackScriptRequest): Promise<RollbackScriptResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rollbackScriptWithOptions(request, runtime);
  }

  async saveAfterAnswerDelayPlaybackWithOptions(request: SaveAfterAnswerDelayPlaybackRequest, runtime: $Util.RuntimeOptions): Promise<SaveAfterAnswerDelayPlaybackResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.afterAnswerDelayPlayback)) {
      query["AfterAnswerDelayPlayback"] = request.afterAnswerDelayPlayback;
    }

    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!Util.isUnset(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveAfterAnswerDelayPlayback",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveAfterAnswerDelayPlaybackResponse>(await this.callApi(params, req, runtime), new SaveAfterAnswerDelayPlaybackResponse({}));
  }

  async saveAfterAnswerDelayPlayback(request: SaveAfterAnswerDelayPlaybackRequest): Promise<SaveAfterAnswerDelayPlaybackResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveAfterAnswerDelayPlaybackWithOptions(request, runtime);
  }

  async saveBaseStrategyPeriodWithOptions(request: SaveBaseStrategyPeriodRequest, runtime: $Util.RuntimeOptions): Promise<SaveBaseStrategyPeriodResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!Util.isUnset(request.onlyWeekdays)) {
      query["OnlyWeekdays"] = request.onlyWeekdays;
    }

    if (!Util.isUnset(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    if (!Util.isUnset(request.workingTime)) {
      query["WorkingTime"] = request.workingTime;
    }

    if (!Util.isUnset(request.workingTimeFramesJson)) {
      query["WorkingTimeFramesJson"] = request.workingTimeFramesJson;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveBaseStrategyPeriod",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveBaseStrategyPeriodResponse>(await this.callApi(params, req, runtime), new SaveBaseStrategyPeriodResponse({}));
  }

  async saveBaseStrategyPeriod(request: SaveBaseStrategyPeriodRequest): Promise<SaveBaseStrategyPeriodResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveBaseStrategyPeriodWithOptions(request, runtime);
  }

  async saveContactBlockListWithOptions(request: SaveContactBlockListRequest, runtime: $Util.RuntimeOptions): Promise<SaveContactBlockListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactBlockListList)) {
      query["ContactBlockListList"] = request.contactBlockListList;
    }

    if (!Util.isUnset(request.contactBlockListsJson)) {
      query["ContactBlockListsJson"] = request.contactBlockListsJson;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveContactBlockList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveContactBlockListResponse>(await this.callApi(params, req, runtime), new SaveContactBlockListResponse({}));
  }

  async saveContactBlockList(request: SaveContactBlockListRequest): Promise<SaveContactBlockListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveContactBlockListWithOptions(request, runtime);
  }

  async saveContactWhiteListWithOptions(request: SaveContactWhiteListRequest, runtime: $Util.RuntimeOptions): Promise<SaveContactWhiteListResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.contactWhiteListList)) {
      query["ContactWhiteListList"] = request.contactWhiteListList;
    }

    if (!Util.isUnset(request.contactWhiteListsJson)) {
      query["ContactWhiteListsJson"] = request.contactWhiteListsJson;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveContactWhiteList",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveContactWhiteListResponse>(await this.callApi(params, req, runtime), new SaveContactWhiteListResponse({}));
  }

  async saveContactWhiteList(request: SaveContactWhiteListRequest): Promise<SaveContactWhiteListResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveContactWhiteListWithOptions(request, runtime);
  }

  async saveEffectiveDaysWithOptions(request: SaveEffectiveDaysRequest, runtime: $Util.RuntimeOptions): Promise<SaveEffectiveDaysResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.effectiveDays)) {
      query["EffectiveDays"] = request.effectiveDays;
    }

    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!Util.isUnset(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveEffectiveDays",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveEffectiveDaysResponse>(await this.callApi(params, req, runtime), new SaveEffectiveDaysResponse({}));
  }

  async saveEffectiveDays(request: SaveEffectiveDaysRequest): Promise<SaveEffectiveDaysResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveEffectiveDaysWithOptions(request, runtime);
  }

  async saveMaxAttemptsPerDayWithOptions(request: SaveMaxAttemptsPerDayRequest, runtime: $Util.RuntimeOptions): Promise<SaveMaxAttemptsPerDayResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.entryId)) {
      query["EntryId"] = request.entryId;
    }

    if (!Util.isUnset(request.maxAttemptsPerDay)) {
      query["MaxAttemptsPerDay"] = request.maxAttemptsPerDay;
    }

    if (!Util.isUnset(request.strategyLevel)) {
      query["StrategyLevel"] = request.strategyLevel;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SaveMaxAttemptsPerDay",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SaveMaxAttemptsPerDayResponse>(await this.callApi(params, req, runtime), new SaveMaxAttemptsPerDayResponse({}));
  }

  async saveMaxAttemptsPerDay(request: SaveMaxAttemptsPerDayRequest): Promise<SaveMaxAttemptsPerDayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.saveMaxAttemptsPerDayWithOptions(request, runtime);
  }

  async searchTaskWithOptions(request: SearchTaskRequest, runtime: $Util.RuntimeOptions): Promise<SearchTaskResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchTask",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchTaskResponse>(await this.callApi(params, req, runtime), new SearchTaskResponse({}));
  }

  async searchTask(request: SearchTaskRequest): Promise<SearchTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchTaskWithOptions(request, runtime);
  }

  async startJobWithOptions(request: StartJobRequest, runtime: $Util.RuntimeOptions): Promise<StartJobResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callingNumber)) {
      query["CallingNumber"] = request.callingNumber;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.jobJson)) {
      query["JobJson"] = request.jobJson;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartJob",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartJobResponse>(await this.callApi(params, req, runtime), new StartJobResponse({}));
  }

  async startJob(request: StartJobRequest): Promise<StartJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startJobWithOptions(request, runtime);
  }

  async submitBatchJobsWithOptions(request: SubmitBatchJobsRequest, runtime: $Util.RuntimeOptions): Promise<SubmitBatchJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitBatchJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitBatchJobsResponse>(await this.callApi(params, req, runtime), new SubmitBatchJobsResponse({}));
  }

  async submitBatchJobs(request: SubmitBatchJobsRequest): Promise<SubmitBatchJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitBatchJobsWithOptions(request, runtime);
  }

  async submitRecordingWithOptions(request: SubmitRecordingRequest, runtime: $Util.RuntimeOptions): Promise<SubmitRecordingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.mergedRecording)) {
      query["MergedRecording"] = request.mergedRecording;
    }

    if (!Util.isUnset(request.resourceRecording)) {
      query["ResourceRecording"] = request.resourceRecording;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitRecordingResponse>(await this.callApi(params, req, runtime), new SubmitRecordingResponse({}));
  }

  async submitRecording(request: SubmitRecordingRequest): Promise<SubmitRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitRecordingWithOptions(request, runtime);
  }

  async submitScriptReviewWithOptions(request: SubmitScriptReviewRequest, runtime: $Util.RuntimeOptions): Promise<SubmitScriptReviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitScriptReview",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitScriptReviewResponse>(await this.callApi(params, req, runtime), new SubmitScriptReviewResponse({}));
  }

  async submitScriptReview(request: SubmitScriptReviewRequest): Promise<SubmitScriptReviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitScriptReviewWithOptions(request, runtime);
  }

  async suspendCallWithOptions(request: SuspendCallRequest, runtime: $Util.RuntimeOptions): Promise<SuspendCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.calledNumbers)) {
      query["CalledNumbers"] = request.calledNumbers;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendCall",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendCallResponse>(await this.callApi(params, req, runtime), new SuspendCallResponse({}));
  }

  async suspendCall(request: SuspendCallRequest): Promise<SuspendCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendCallWithOptions(request, runtime);
  }

  async suspendCallWithFileWithOptions(request: SuspendCallWithFileRequest, runtime: $Util.RuntimeOptions): Promise<SuspendCallWithFileResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.filePath)) {
      query["FilePath"] = request.filePath;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendCallWithFile",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendCallWithFileResponse>(await this.callApi(params, req, runtime), new SuspendCallWithFileResponse({}));
  }

  async suspendCallWithFile(request: SuspendCallWithFileRequest): Promise<SuspendCallWithFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendCallWithFileWithOptions(request, runtime);
  }

  async suspendJobsWithOptions(request: SuspendJobsRequest, runtime: $Util.RuntimeOptions): Promise<SuspendJobsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.jobGroupId)) {
      query["JobGroupId"] = request.jobGroupId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.jobReferenceId)) {
      query["JobReferenceId"] = request.jobReferenceId;
    }

    if (!Util.isUnset(request.scenarioId)) {
      query["ScenarioId"] = request.scenarioId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SuspendJobs",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendJobsResponse>(await this.callApi(params, req, runtime), new SuspendJobsResponse({}));
  }

  async suspendJobs(request: SuspendJobsRequest): Promise<SuspendJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendJobsWithOptions(request, runtime);
  }

  /**
    * **
    *
    * @param request TagResourcesRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
    * **
    *
    * @param request TagResourcesRequest
    * @return TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  async taskPreparingWithOptions(request: TaskPreparingRequest, runtime: $Util.RuntimeOptions): Promise<TaskPreparingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceOwnerId)) {
      query["InstanceOwnerId"] = request.instanceOwnerId;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TaskPreparing",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TaskPreparingResponse>(await this.callApi(params, req, runtime), new TaskPreparingResponse({}));
  }

  async taskPreparing(request: TaskPreparingRequest): Promise<TaskPreparingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.taskPreparingWithOptions(request, runtime);
  }

  async terminateCallWithOptions(request: TerminateCallRequest, runtime: $Util.RuntimeOptions): Promise<TerminateCallResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.callId)) {
      query["CallId"] = request.callId;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "TerminateCall",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TerminateCallResponse>(await this.callApi(params, req, runtime), new TerminateCallResponse({}));
  }

  async terminateCall(request: TerminateCallRequest): Promise<TerminateCallResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.terminateCallWithOptions(request, runtime);
  }

  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      query["TagKey"] = request.tagKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  async uploadScriptRecordingWithOptions(request: UploadScriptRecordingRequest, runtime: $Util.RuntimeOptions): Promise<UploadScriptRecordingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.fileId)) {
      query["FileId"] = request.fileId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["FileName"] = request.fileName;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UploadScriptRecording",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UploadScriptRecordingResponse>(await this.callApi(params, req, runtime), new UploadScriptRecordingResponse({}));
  }

  async uploadScriptRecording(request: UploadScriptRecordingRequest): Promise<UploadScriptRecordingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uploadScriptRecordingWithOptions(request, runtime);
  }

  /**
    * ****
    *
    * @param request WithdrawScriptReviewRequest
    * @param runtime runtime options for this request RuntimeOptions
    * @return WithdrawScriptReviewResponse
   */
  async withdrawScriptReviewWithOptions(request: WithdrawScriptReviewRequest, runtime: $Util.RuntimeOptions): Promise<WithdrawScriptReviewResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.scriptId)) {
      query["ScriptId"] = request.scriptId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "WithdrawScriptReview",
      version: "2019-12-26",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<WithdrawScriptReviewResponse>(await this.callApi(params, req, runtime), new WithdrawScriptReviewResponse({}));
  }

  /**
    * ****
    *
    * @param request WithdrawScriptReviewRequest
    * @return WithdrawScriptReviewResponse
   */
  async withdrawScriptReview(request: WithdrawScriptReviewRequest): Promise<WithdrawScriptReviewResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.withdrawScriptReviewWithOptions(request, runtime);
  }

}
