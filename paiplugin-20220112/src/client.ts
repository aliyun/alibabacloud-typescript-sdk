// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateGroupRequest extends $tea.Model {
  algorithm?: string;
  column?: string;
  filter?: string;
  inferenceJobId?: string;
  name?: string;
  project?: string;
  remark?: string;
  source?: number;
  table?: string;
  text?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      column: 'Column',
      filter: 'Filter',
      inferenceJobId: 'InferenceJobId',
      name: 'Name',
      project: 'Project',
      remark: 'Remark',
      source: 'Source',
      table: 'Table',
      text: 'Text',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      column: 'string',
      filter: 'string',
      inferenceJobId: 'string',
      name: 'string',
      project: 'string',
      remark: 'string',
      source: 'number',
      table: 'string',
      text: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBody extends $tea.Model {
  data?: CreateGroupResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateGroupResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInferenceJobRequest extends $tea.Model {
  algorithm?: string;
  name?: string;
  remark?: string;
  trainingJobId?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      name: 'Name',
      remark: 'Remark',
      trainingJobId: 'TrainingJobId',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      name: 'string',
      remark: 'string',
      trainingJobId: 'string',
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInferenceJobResponseBody extends $tea.Model {
  data?: CreateInferenceJobResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateInferenceJobResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInferenceJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInferenceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInferenceJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleRequest extends $tea.Model {
  endTime?: number;
  executeTime?: string;
  groupId?: string;
  name?: string;
  repeatCycle?: number;
  repeatCycleUnit?: number;
  repeatTimes?: number;
  signName?: string;
  signatureId?: string;
  templateCode?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      executeTime: 'ExecuteTime',
      groupId: 'GroupId',
      name: 'Name',
      repeatCycle: 'RepeatCycle',
      repeatCycleUnit: 'RepeatCycleUnit',
      repeatTimes: 'RepeatTimes',
      signName: 'SignName',
      signatureId: 'SignatureId',
      templateCode: 'TemplateCode',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      executeTime: 'string',
      groupId: 'string',
      name: 'string',
      repeatCycle: 'number',
      repeatCycleUnit: 'number',
      repeatTimes: 'number',
      signName: 'string',
      signatureId: 'string',
      templateCode: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleResponseBody extends $tea.Model {
  data?: CreateScheduleResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateScheduleResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureRequest extends $tea.Model {
  description?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponseBody extends $tea.Model {
  data?: CreateSignatureResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateSignatureResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateSignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateRequest extends $tea.Model {
  content?: string;
  description?: string;
  name?: string;
  signatureId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      name: 'Name',
      signatureId: 'SignatureId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      name: 'string',
      signatureId: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBody extends $tea.Model {
  data?: CreateTemplateResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTemplateResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobRequest extends $tea.Model {
  algorithm?: string;
  name?: string;
  remark?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      name: 'Name',
      remark: 'Remark',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      name: 'string',
      remark: 'string',
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobResponseBody extends $tea.Model {
  data?: CreateTrainingJobResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTrainingJobResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTrainingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInferenceJobResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInferenceJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInferenceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInferenceJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSignatureResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrainingJobResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTrainingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTrainingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmResponseBody extends $tea.Model {
  data?: GetAlgorithmResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAlgorithmResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBody extends $tea.Model {
  data?: GetGroupResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGroupResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInferenceJobResponseBody extends $tea.Model {
  data?: GetInferenceJobResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetInferenceJobResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInferenceJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInferenceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInferenceJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleResponseBody extends $tea.Model {
  data?: GetScheduleResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetScheduleResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetScheduleResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSignatureResponseBody extends $tea.Model {
  data?: GetSignatureResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSignatureResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSignatureResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSignatureResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBody extends $tea.Model {
  data?: GetTemplateResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTemplateResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
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

export class GetTrainingJobResponseBody extends $tea.Model {
  data?: GetTrainingJobResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTrainingJobResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTrainingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsRequest extends $tea.Model {
  id?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsResponseBody extends $tea.Model {
  data?: ListAlgorithmsResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListAlgorithmsResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAlgorithmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAlgorithmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  remark?: string;
  source?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      source: 'Source',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
      source: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $tea.Model {
  data?: ListGroupsResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListGroupsResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInferenceJobsRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  remark?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInferenceJobsResponseBody extends $tea.Model {
  data?: ListInferenceJobsResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListInferenceJobsResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInferenceJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInferenceJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInferenceJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageMetricsRequest extends $tea.Model {
  endDate?: string;
  groupId?: string;
  pageNumber?: number;
  pageSize?: number;
  scheduleId?: string;
  signature?: string;
  signatureId?: string;
  startDate?: string;
  templateCode?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      groupId: 'GroupId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scheduleId: 'ScheduleId',
      signature: 'Signature',
      signatureId: 'SignatureId',
      startDate: 'StartDate',
      templateCode: 'TemplateCode',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      groupId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scheduleId: 'string',
      signature: 'string',
      signatureId: 'string',
      startDate: 'string',
      templateCode: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageMetricsResponseBody extends $tea.Model {
  data?: ListMessageMetricsResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMessageMetricsResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMessageMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMessageMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesRequest extends $tea.Model {
  datetime?: string;
  groupId?: string;
  messageId?: string;
  pageNumber?: number;
  pageSize?: number;
  phoneNumber?: string;
  requestId?: string;
  scheduleId?: string;
  signature?: string;
  signatureId?: string;
  status?: number;
  templateCode?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      datetime: 'Datetime',
      groupId: 'GroupId',
      messageId: 'MessageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
      requestId: 'RequestId',
      scheduleId: 'ScheduleId',
      signature: 'Signature',
      signatureId: 'SignatureId',
      status: 'Status',
      templateCode: 'TemplateCode',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datetime: 'string',
      groupId: 'string',
      messageId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      phoneNumber: 'string',
      requestId: 'string',
      scheduleId: 'string',
      signature: 'string',
      signatureId: 'string',
      status: 'number',
      templateCode: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBody extends $tea.Model {
  data?: ListMessagesResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMessagesResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListMessagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBody extends $tea.Model {
  data?: ListSchedulesResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSchedulesResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSchedulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSchedulesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSignaturesRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSignaturesResponseBody extends $tea.Model {
  data?: ListSignaturesResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSignaturesResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSignaturesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSignaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSignaturesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesRequest extends $tea.Model {
  content?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  status?: number;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'number',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBody extends $tea.Model {
  data?: ListTemplatesResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTemplatesResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
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

export class ListTrainingJobsRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  remark?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
      status: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBody extends $tea.Model {
  data?: ListTrainingJobsResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTrainingJobsResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTrainingJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTrainingJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $tea.Model {
  groupId?: string;
  outIds?: string[];
  phoneNumbers?: string[];
  scheduleId?: string;
  signName?: string;
  signatureId?: string;
  smsUpExtendCodes?: string[];
  templateCode?: string;
  templateId?: string;
  templateParams?: string[];
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      outIds: 'OutIds',
      phoneNumbers: 'PhoneNumbers',
      scheduleId: 'ScheduleId',
      signName: 'SignName',
      signatureId: 'SignatureId',
      smsUpExtendCodes: 'SmsUpExtendCodes',
      templateCode: 'TemplateCode',
      templateId: 'TemplateId',
      templateParams: 'TemplateParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      outIds: { 'type': 'array', 'itemType': 'string' },
      phoneNumbers: { 'type': 'array', 'itemType': 'string' },
      scheduleId: 'string',
      signName: 'string',
      signatureId: 'string',
      smsUpExtendCodes: { 'type': 'array', 'itemType': 'string' },
      templateCode: 'string',
      templateId: 'string',
      templateParams: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBody extends $tea.Model {
  data?: SendMessageResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SendMessageResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupResponseBodyData extends $tea.Model {
  algorithm?: string;
  amount?: number;
  column?: string;
  createdTime?: string;
  filter?: string;
  id?: string;
  inferenceJobId?: string;
  name?: string;
  project?: string;
  remark?: string;
  source?: number;
  status?: number;
  table?: string;
  text?: string;
  updatedTime?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      amount: 'Amount',
      column: 'Column',
      createdTime: 'CreatedTime',
      filter: 'Filter',
      id: 'Id',
      inferenceJobId: 'InferenceJobId',
      name: 'Name',
      project: 'Project',
      remark: 'Remark',
      source: 'Source',
      status: 'Status',
      table: 'Table',
      text: 'Text',
      updatedTime: 'UpdatedTime',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      amount: 'number',
      column: 'string',
      createdTime: 'string',
      filter: 'string',
      id: 'string',
      inferenceJobId: 'string',
      name: 'string',
      project: 'string',
      remark: 'string',
      source: 'number',
      status: 'number',
      table: 'string',
      text: 'string',
      updatedTime: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInferenceJobResponseBodyData extends $tea.Model {
  algorithm?: string;
  createdTime?: string;
  groupId?: string;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  trainingJobId?: string;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      createdTime: 'CreatedTime',
      groupId: 'GroupId',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      trainingJobId: 'TrainingJobId',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      createdTime: 'string',
      groupId: 'string',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      trainingJobId: 'string',
      updatedTime: 'string',
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleResponseBodyData extends $tea.Model {
  createdTime?: string;
  endTime?: number;
  executeTime?: string;
  groupId?: string;
  id?: string;
  name?: string;
  repeatCycle?: number;
  repeatCycleUnit?: number;
  repeatTimes?: number;
  signName?: string;
  signatureId?: string;
  status?: number;
  templateCode?: string;
  templateId?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      endTime: 'EndTime',
      executeTime: 'ExecuteTime',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      repeatCycle: 'RepeatCycle',
      repeatCycleUnit: 'RepeatCycleUnit',
      repeatTimes: 'RepeatTimes',
      signName: 'SignName',
      signatureId: 'SignatureId',
      status: 'Status',
      templateCode: 'TemplateCode',
      templateId: 'TemplateId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      endTime: 'number',
      executeTime: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      repeatCycle: 'number',
      repeatCycleUnit: 'number',
      repeatTimes: 'number',
      signName: 'string',
      signatureId: 'string',
      status: 'number',
      templateCode: 'string',
      templateId: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSignatureResponseBodyData extends $tea.Model {
  createdTime?: string;
  id?: string;
  name?: string;
  status?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      id: 'Id',
      name: 'Name',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      id: 'string',
      name: 'string',
      status: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTemplateResponseBodyData extends $tea.Model {
  content?: string;
  createdTime?: string;
  description?: string;
  id?: string;
  name?: string;
  reason?: string;
  signatureId?: string;
  status?: number;
  templateCode?: string;
  type?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdTime: 'CreatedTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      signatureId: 'SignatureId',
      status: 'Status',
      templateCode: 'TemplateCode',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      reason: 'string',
      signatureId: 'string',
      status: 'number',
      templateCode: 'string',
      type: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobResponseBodyData extends $tea.Model {
  algorithm?: string;
  createdTime?: string;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      createdTime: 'CreatedTime',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      createdTime: 'string',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      updatedTime: 'string',
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlgorithmResponseBodyData extends $tea.Model {
  description?: string;
  id?: string;
  inferUserConfigMap?: string;
  name?: string;
  trainUserConfigMap?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      inferUserConfigMap: 'InferUserConfigMap',
      name: 'Name',
      trainUserConfigMap: 'TrainUserConfigMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      inferUserConfigMap: 'string',
      name: 'string',
      trainUserConfigMap: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyData extends $tea.Model {
  algorithm?: string;
  amount?: number;
  column?: string;
  createdTime?: string;
  filter?: string;
  id?: string;
  inferenceJobId?: string;
  name?: string;
  project?: string;
  remark?: string;
  source?: number;
  status?: number;
  table?: string;
  text?: string;
  updatedTime?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      amount: 'Amount',
      column: 'Column',
      createdTime: 'CreatedTime',
      filter: 'Filter',
      id: 'Id',
      inferenceJobId: 'InferenceJobId',
      name: 'Name',
      project: 'Project',
      remark: 'Remark',
      source: 'Source',
      status: 'Status',
      table: 'Table',
      text: 'Text',
      updatedTime: 'UpdatedTime',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      amount: 'number',
      column: 'string',
      createdTime: 'string',
      filter: 'string',
      id: 'string',
      inferenceJobId: 'string',
      name: 'string',
      project: 'string',
      remark: 'string',
      source: 'number',
      status: 'number',
      table: 'string',
      text: 'string',
      updatedTime: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInferenceJobResponseBodyData extends $tea.Model {
  algorithm?: string;
  createdTime?: string;
  groupId?: string;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  trainingJobId?: string;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      createdTime: 'CreatedTime',
      groupId: 'GroupId',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      trainingJobId: 'TrainingJobId',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      createdTime: 'string',
      groupId: 'string',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      trainingJobId: 'string',
      updatedTime: 'string',
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduleResponseBodyData extends $tea.Model {
  createdTime?: string;
  endTime?: number;
  executeTime?: string;
  groupId?: string;
  history?: string;
  id?: string;
  name?: string;
  repeatCycle?: number;
  repeatCycleUnit?: number;
  repeatTimes?: number;
  signName?: string;
  signatureId?: string;
  status?: number;
  templateCode?: string;
  templateId?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      endTime: 'EndTime',
      executeTime: 'ExecuteTime',
      groupId: 'GroupId',
      history: 'History',
      id: 'Id',
      name: 'Name',
      repeatCycle: 'RepeatCycle',
      repeatCycleUnit: 'RepeatCycleUnit',
      repeatTimes: 'RepeatTimes',
      signName: 'SignName',
      signatureId: 'SignatureId',
      status: 'Status',
      templateCode: 'TemplateCode',
      templateId: 'TemplateId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      endTime: 'number',
      executeTime: 'string',
      groupId: 'string',
      history: 'string',
      id: 'string',
      name: 'string',
      repeatCycle: 'number',
      repeatCycleUnit: 'number',
      repeatTimes: 'number',
      signName: 'string',
      signatureId: 'string',
      status: 'number',
      templateCode: 'string',
      templateId: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSignatureResponseBodyData extends $tea.Model {
  createdTime?: string;
  description?: string;
  id?: string;
  name?: string;
  reason?: string;
  status?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      reason: 'string',
      status: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTemplateResponseBodyData extends $tea.Model {
  content?: string;
  createdTime?: string;
  description?: string;
  id?: string;
  name?: string;
  reason?: string;
  signatureId?: string;
  status?: number;
  templateCode?: string;
  type?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdTime: 'CreatedTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      signatureId: 'SignatureId',
      status: 'Status',
      templateCode: 'TemplateCode',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      reason: 'string',
      signatureId: 'string',
      status: 'number',
      templateCode: 'string',
      type: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTrainingJobResponseBodyData extends $tea.Model {
  algorithm?: string;
  createdTime?: string;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      createdTime: 'CreatedTime',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      createdTime: 'string',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      updatedTime: 'string',
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsResponseBodyDataAlgorithms extends $tea.Model {
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlgorithmsResponseBodyData extends $tea.Model {
  algorithms?: ListAlgorithmsResponseBodyDataAlgorithms[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      algorithms: 'Algorithms',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithms: { 'type': 'array', 'itemType': ListAlgorithmsResponseBodyDataAlgorithms },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyDataGroups extends $tea.Model {
  algorithm?: string;
  amount?: number;
  column?: string;
  createdTime?: string;
  filter?: string;
  id?: string;
  inferenceJobId?: string;
  name?: string;
  project?: string;
  remark?: string;
  source?: number;
  status?: number;
  table?: string;
  text?: string;
  updatedTime?: string;
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      amount: 'Amount',
      column: 'Column',
      createdTime: 'CreatedTime',
      filter: 'Filter',
      id: 'Id',
      inferenceJobId: 'InferenceJobId',
      name: 'Name',
      project: 'Project',
      remark: 'Remark',
      source: 'Source',
      status: 'Status',
      table: 'Table',
      text: 'Text',
      updatedTime: 'UpdatedTime',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      amount: 'number',
      column: 'string',
      createdTime: 'string',
      filter: 'string',
      id: 'string',
      inferenceJobId: 'string',
      name: 'string',
      project: 'string',
      remark: 'string',
      source: 'number',
      status: 'number',
      table: 'string',
      text: 'string',
      updatedTime: 'string',
      uri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBodyData extends $tea.Model {
  groups?: ListGroupsResponseBodyDataGroups[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': ListGroupsResponseBodyDataGroups },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInferenceJobsResponseBodyDataInferenceJobs extends $tea.Model {
  algorithm?: string;
  createdTime?: string;
  groupId?: string;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  trainingJobId?: string;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      createdTime: 'CreatedTime',
      groupId: 'GroupId',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      trainingJobId: 'TrainingJobId',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      createdTime: 'string',
      groupId: 'string',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      trainingJobId: 'string',
      updatedTime: 'string',
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInferenceJobsResponseBodyData extends $tea.Model {
  inferenceJobs?: ListInferenceJobsResponseBodyDataInferenceJobs[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      inferenceJobs: 'InferenceJobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inferenceJobs: { 'type': 'array', 'itemType': ListInferenceJobsResponseBodyDataInferenceJobs },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageMetricsResponseBodyDataMetrics extends $tea.Model {
  date?: string;
  fail?: number;
  pending?: number;
  rate?: number;
  success?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      fail: 'Fail',
      pending: 'Pending',
      rate: 'Rate',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      fail: 'number',
      pending: 'number',
      rate: 'number',
      success: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessageMetricsResponseBodyData extends $tea.Model {
  metrics?: ListMessageMetricsResponseBodyDataMetrics[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': ListMessageMetricsResponseBodyDataMetrics },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyDataMessages extends $tea.Model {
  errorCode?: string;
  groupId?: string;
  id?: string;
  outId?: string;
  phoneNumber?: string;
  scheduleId?: string;
  signature?: string;
  status?: number;
  templateCode?: string;
  templateParams?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      groupId: 'GroupId',
      id: 'Id',
      outId: 'OutId',
      phoneNumber: 'PhoneNumber',
      scheduleId: 'ScheduleId',
      signature: 'Signature',
      status: 'Status',
      templateCode: 'TemplateCode',
      templateParams: 'TemplateParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      groupId: 'string',
      id: 'string',
      outId: 'string',
      phoneNumber: 'string',
      scheduleId: 'string',
      signature: 'string',
      status: 'number',
      templateCode: 'string',
      templateParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesResponseBodyData extends $tea.Model {
  messages?: ListMessagesResponseBodyDataMessages[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': ListMessagesResponseBodyDataMessages },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBodyDataSchedules extends $tea.Model {
  createdTime?: string;
  endTime?: number;
  executeTime?: string;
  groupId?: string;
  id?: string;
  name?: string;
  repeatCycle?: number;
  repeatCycleUnit?: number;
  repeatTimes?: number;
  signName?: string;
  signatureId?: string;
  status?: number;
  templateCode?: string;
  templateId?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      endTime: 'EndTime',
      executeTime: 'ExecuteTime',
      groupId: 'GroupId',
      id: 'Id',
      name: 'Name',
      repeatCycle: 'RepeatCycle',
      repeatCycleUnit: 'RepeatCycleUnit',
      repeatTimes: 'RepeatTimes',
      signName: 'SignName',
      signatureId: 'SignatureId',
      status: 'Status',
      templateCode: 'TemplateCode',
      templateId: 'TemplateId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      endTime: 'number',
      executeTime: 'string',
      groupId: 'string',
      id: 'string',
      name: 'string',
      repeatCycle: 'number',
      repeatCycleUnit: 'number',
      repeatTimes: 'number',
      signName: 'string',
      signatureId: 'string',
      status: 'number',
      templateCode: 'string',
      templateId: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  schedules?: ListSchedulesResponseBodyDataSchedules[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      schedules: 'Schedules',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      schedules: { 'type': 'array', 'itemType': ListSchedulesResponseBodyDataSchedules },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSignaturesResponseBodyDataSignatures extends $tea.Model {
  createdTime?: string;
  id?: string;
  name?: string;
  status?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      id: 'Id',
      name: 'Name',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      id: 'string',
      name: 'string',
      status: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSignaturesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  signatures?: ListSignaturesResponseBodyDataSignatures[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      signatures: 'Signatures',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      signatures: { 'type': 'array', 'itemType': ListSignaturesResponseBodyDataSignatures },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyDataTemplates extends $tea.Model {
  content?: string;
  createdTime?: string;
  description?: string;
  id?: string;
  name?: string;
  reason?: string;
  signatureId?: string;
  status?: number;
  templateCode?: string;
  type?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdTime: 'CreatedTime',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      signatureId: 'SignatureId',
      status: 'Status',
      templateCode: 'TemplateCode',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdTime: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      reason: 'string',
      signatureId: 'string',
      status: 'number',
      templateCode: 'string',
      type: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  templates?: ListTemplatesResponseBodyDataTemplates[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      templates: { 'type': 'array', 'itemType': ListTemplatesResponseBodyDataTemplates },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyDataTrainingJobs extends $tea.Model {
  algorithm?: string;
  createdTime?: string;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      createdTime: 'CreatedTime',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      createdTime: 'string',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      updatedTime: 'string',
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsResponseBodyData extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  trainingJobs?: ListTrainingJobsResponseBodyDataTrainingJobs[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      trainingJobs: 'TrainingJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
      trainingJobs: { 'type': 'array', 'itemType': ListTrainingJobsResponseBodyDataTrainingJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBodyDataMessages extends $tea.Model {
  id?: string;
  phoneNumber?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      phoneNumber: 'PhoneNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      phoneNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageResponseBodyData extends $tea.Model {
  messages?: SendMessageResponseBodyDataMessages[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messages: 'Messages',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messages: { 'type': 'array', 'itemType': SendMessageResponseBodyDataMessages },
      requestId: 'string',
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
    this._endpoint = this.getEndpoint("paiplugin", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 注册人群
  
   * @tags 人群
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGroupWithOptions(request, headers, runtime);
  }

  async createGroupWithOptions(request: CreateGroupRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithm)) {
      body["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.column)) {
      body["Column"] = request.column;
    }

    if (!Util.isUnset(request.filter)) {
      body["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.inferenceJobId)) {
      body["InferenceJobId"] = request.inferenceJobId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.project)) {
      body["Project"] = request.project;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.source)) {
      body["Source"] = request.source;
    }

    if (!Util.isUnset(request.table)) {
      body["Table"] = request.table;
    }

    if (!Util.isUnset(request.text)) {
      body["Text"] = request.text;
    }

    if (!Util.isUnset(request.uri)) {
      body["Uri"] = request.uri;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/groups`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGroupResponse>(await this.callApi(params, req, runtime), new CreateGroupResponse({}));
  }

  /**
   * 注册推理任务
  
   * @tags 推理任务
   */
  async createInferenceJob(request: CreateInferenceJobRequest): Promise<CreateInferenceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInferenceJobWithOptions(request, headers, runtime);
  }

  async createInferenceJobWithOptions(request: CreateInferenceJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInferenceJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithm)) {
      body["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.trainingJobId)) {
      body["TrainingJobId"] = request.trainingJobId;
    }

    if (!Util.isUnset(request.userConfig)) {
      body["UserConfig"] = request.userConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInferenceJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/inference/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInferenceJobResponse>(await this.callApi(params, req, runtime), new CreateInferenceJobResponse({}));
  }

  /**
   * 注册触达计划
  
   * @tags 触达计划
   */
  async createSchedule(request: CreateScheduleRequest): Promise<CreateScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScheduleWithOptions(request, headers, runtime);
  }

  async createScheduleWithOptions(request: CreateScheduleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateScheduleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.executeTime)) {
      body["ExecuteTime"] = request.executeTime;
    }

    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.repeatCycle)) {
      body["RepeatCycle"] = request.repeatCycle;
    }

    if (!Util.isUnset(request.repeatCycleUnit)) {
      body["RepeatCycleUnit"] = request.repeatCycleUnit;
    }

    if (!Util.isUnset(request.repeatTimes)) {
      body["RepeatTimes"] = request.repeatTimes;
    }

    if (!Util.isUnset(request.signName)) {
      body["SignName"] = request.signName;
    }

    if (!Util.isUnset(request.signatureId)) {
      body["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSchedule",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/schedules`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateScheduleResponse>(await this.callApi(params, req, runtime), new CreateScheduleResponse({}));
  }

  /**
   * 注册签名。
  
   * @tags 签名
   */
  async createSignature(request: CreateSignatureRequest): Promise<CreateSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSignatureWithOptions(request, headers, runtime);
  }

  async createSignatureWithOptions(request: CreateSignatureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSignatureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSignature",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/signatures`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateSignatureResponse>(await this.callApi(params, req, runtime), new CreateSignatureResponse({}));
  }

  /**
   * 注册模板
  
   * @tags 模板
   */
  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(request, headers, runtime);
  }

  async createTemplateWithOptions(request: CreateTemplateRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTemplateResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      body["Content"] = request.content;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.signatureId)) {
      body["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTemplate",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/templates`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTemplateResponse>(await this.callApi(params, req, runtime), new CreateTemplateResponse({}));
  }

  /**
   * 注册训练任务
  
   * @tags 训练任务
   */
  async createTrainingJob(request: CreateTrainingJobRequest): Promise<CreateTrainingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrainingJobWithOptions(request, headers, runtime);
  }

  async createTrainingJobWithOptions(request: CreateTrainingJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTrainingJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithm)) {
      body["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.userConfig)) {
      body["UserConfig"] = request.userConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/training/jobs`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTrainingJobResponse>(await this.callApi(params, req, runtime), new CreateTrainingJobResponse({}));
  }

  /**
   * 删除人群
  
   * @tags 人群
   */
  async deleteGroup(Id: string): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupWithOptions(Id, headers, runtime);
  }

  async deleteGroupWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/groups/${Id}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupResponse>(await this.callApi(params, req, runtime), new DeleteGroupResponse({}));
  }

  /**
   * 删除推理任务
  
   * @tags 推理任务
   */
  async deleteInferenceJob(Id: string): Promise<DeleteInferenceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInferenceJobWithOptions(Id, headers, runtime);
  }

  async deleteInferenceJobWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInferenceJobResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInferenceJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/inference/jobs/${Id}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInferenceJobResponse>(await this.callApi(params, req, runtime), new DeleteInferenceJobResponse({}));
  }

  /**
   * 删除触达计划
  
   * @tags 触达计划
   */
  async deleteSchedule(Id: string): Promise<DeleteScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteScheduleWithOptions(Id, headers, runtime);
  }

  async deleteScheduleWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteScheduleResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSchedule",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/schedules/${Id}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteScheduleResponse>(await this.callApi(params, req, runtime), new DeleteScheduleResponse({}));
  }

  /**
   * 删除签名。
  
   * @tags 签名
   */
  async deleteSignature(Id: string): Promise<DeleteSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSignatureWithOptions(Id, headers, runtime);
  }

  async deleteSignatureWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSignatureResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSignature",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/signatures/${Id}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSignatureResponse>(await this.callApi(params, req, runtime), new DeleteSignatureResponse({}));
  }

  /**
   * 删除模板
  
   * @tags 模板
   */
  async deleteTemplate(Id: string): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(Id, headers, runtime);
  }

  async deleteTemplateWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/templates/${Id}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  /**
   * 删除训练任务
  
   * @tags 训练任务
   */
  async deleteTrainingJob(Id: string): Promise<DeleteTrainingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrainingJobWithOptions(Id, headers, runtime);
  }

  async deleteTrainingJobWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTrainingJobResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/training/jobs/${Id}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTrainingJobResponse>(await this.callApi(params, req, runtime), new DeleteTrainingJobResponse({}));
  }

  /**
   * 获取算法详情
   * @tags 算法
   */
  async getAlgorithm(Id: string): Promise<GetAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgorithmWithOptions(Id, headers, runtime);
  }

  async getAlgorithmWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/algorithms/${Id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmResponse>(await this.callApi(params, req, runtime), new GetAlgorithmResponse({}));
  }

  /**
   * 获取人群
  默认返回所有人群信息
   * @tags 人群
   */
  async getGroup(Id: string): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupWithOptions(Id, headers, runtime);
  }

  async getGroupWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGroupResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/groups/${Id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGroupResponse>(await this.callApi(params, req, runtime), new GetGroupResponse({}));
  }

  /**
   * 获取推理任务
  默认返回所有推理任务信息
   * @tags 推理任务
   */
  async getInferenceJob(Id: string): Promise<GetInferenceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInferenceJobWithOptions(Id, headers, runtime);
  }

  async getInferenceJobWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInferenceJobResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInferenceJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/inference/jobs/${Id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInferenceJobResponse>(await this.callApi(params, req, runtime), new GetInferenceJobResponse({}));
  }

  /**
   * 获取触达计划详情。
  
   * @tags 触达计划
   */
  async getSchedule(Id: string): Promise<GetScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScheduleWithOptions(Id, headers, runtime);
  }

  async getScheduleWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetScheduleResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSchedule",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/schedules/${Id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetScheduleResponse>(await this.callApi(params, req, runtime), new GetScheduleResponse({}));
  }

  /**
   * 获取签名详情
   * @tags 签名
   */
  async getSignature(Id: string): Promise<GetSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSignatureWithOptions(Id, headers, runtime);
  }

  async getSignatureWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSignatureResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSignature",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/signatures/${Id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSignatureResponse>(await this.callApi(params, req, runtime), new GetSignatureResponse({}));
  }

  /**
   * 获取模板
  默认返回所有模板信息
  ![模板列表](https://intranetproxy.alipay.com/skylark/lark/0/2021/png/302991/1615264998427-d2943cfb-106a-421d-b4a4-f06307b4d9be.png)
   * @tags 模板
   */
  async getTemplate(Id: string): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(Id, headers, runtime);
  }

  async getTemplateWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/templates/${Id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  /**
   * 获取训练任务
  默认返回所有训练任务信息
   * @tags 训练任务
   */
  async getTrainingJob(Id: string): Promise<GetTrainingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrainingJobWithOptions(Id, headers, runtime);
  }

  async getTrainingJobWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTrainingJobResponse> {
    Id = OpenApiUtil.getEncodeParam(Id);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/training/jobs/${Id}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTrainingJobResponse>(await this.callApi(params, req, runtime), new GetTrainingJobResponse({}));
  }

  /**
   * 获取算法列表
   * @tags 算法
   */
  async listAlgorithms(request: ListAlgorithmsRequest): Promise<ListAlgorithmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlgorithmsWithOptions(request, headers, runtime);
  }

  async listAlgorithmsWithOptions(request: ListAlgorithmsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAlgorithmsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
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
      action: "ListAlgorithms",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/algorithms`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAlgorithmsResponse>(await this.callApi(params, req, runtime), new ListAlgorithmsResponse({}));
  }

  /**
   * 获取人群列表
   * @tags 人群
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupsWithOptions(request, headers, runtime);
  }

  async listGroupsWithOptions(request: ListGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.source)) {
      query["Source"] = request.source;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroups",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGroupsResponse>(await this.callApi(params, req, runtime), new ListGroupsResponse({}));
  }

  /**
   * 获取推理任务列表
   * @tags 推理任务
   */
  async listInferenceJobs(request: ListInferenceJobsRequest): Promise<ListInferenceJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInferenceJobsWithOptions(request, headers, runtime);
  }

  async listInferenceJobsWithOptions(request: ListInferenceJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInferenceJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInferenceJobs",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/inference/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInferenceJobsResponse>(await this.callApi(params, req, runtime), new ListInferenceJobsResponse({}));
  }

  /**
   * 获取用户短信发送统计
   * @tags 短信
   */
  async listMessageMetrics(request: ListMessageMetricsRequest): Promise<ListMessageMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMessageMetricsWithOptions(request, headers, runtime);
  }

  async listMessageMetricsWithOptions(request: ListMessageMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMessageMetricsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.scheduleId)) {
      query["ScheduleId"] = request.scheduleId;
    }

    if (!Util.isUnset(request.signature)) {
      query["Signature"] = request.signature;
    }

    if (!Util.isUnset(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMessageMetrics",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/messages/metrics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMessageMetricsResponse>(await this.callApi(params, req, runtime), new ListMessageMetricsResponse({}));
  }

  /**
   * 查询短信发送详情
   * @tags 短信
   */
  async listMessages(request: ListMessagesRequest): Promise<ListMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMessagesWithOptions(request, headers, runtime);
  }

  async listMessagesWithOptions(request: ListMessagesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMessagesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datetime)) {
      query["Datetime"] = request.datetime;
    }

    if (!Util.isUnset(request.groupId)) {
      query["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.messageId)) {
      query["MessageId"] = request.messageId;
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

    if (!Util.isUnset(request.requestId)) {
      query["RequestId"] = request.requestId;
    }

    if (!Util.isUnset(request.scheduleId)) {
      query["ScheduleId"] = request.scheduleId;
    }

    if (!Util.isUnset(request.signature)) {
      query["Signature"] = request.signature;
    }

    if (!Util.isUnset(request.signatureId)) {
      query["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.templateCode)) {
      query["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListMessages",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/messages`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListMessagesResponse>(await this.callApi(params, req, runtime), new ListMessagesResponse({}));
  }

  /**
   * 获取触达计划列表。
   * @tags 触达计划
   */
  async listSchedules(request: ListSchedulesRequest): Promise<ListSchedulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSchedulesWithOptions(request, headers, runtime);
  }

  async listSchedulesWithOptions(request: ListSchedulesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSchedulesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSchedules",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/schedules`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSchedulesResponse>(await this.callApi(params, req, runtime), new ListSchedulesResponse({}));
  }

  /**
   * 获取签名列表
   * @tags 签名
   */
  async listSignatures(request: ListSignaturesRequest): Promise<ListSignaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSignaturesWithOptions(request, headers, runtime);
  }

  async listSignaturesWithOptions(request: ListSignaturesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSignaturesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSignatures",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/signatures`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListSignaturesResponse>(await this.callApi(params, req, runtime), new ListSignaturesResponse({}));
  }

  /**
   * 获取模板列表
  默认返回所有模板信息
   * @tags 模板
   */
  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(request, headers, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTemplates",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/templates`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTemplatesResponse>(await this.callApi(params, req, runtime), new ListTemplatesResponse({}));
  }

  /**
   * 获取训练任务列表
   * @tags 训练任务
   */
  async listTrainingJobs(request: ListTrainingJobsRequest): Promise<ListTrainingJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobsWithOptions(request, headers, runtime);
  }

  async listTrainingJobsWithOptions(request: ListTrainingJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTrainingJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      query["Name"] = request.name;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTrainingJobs",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/training/jobs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTrainingJobsResponse>(await this.callApi(params, req, runtime), new ListTrainingJobsResponse({}));
  }

  /**
   * 发送短信
   * @tags 短信
   */
  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendMessageWithOptions(request, headers, runtime);
  }

  async sendMessageWithOptions(request: SendMessageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SendMessageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.groupId)) {
      body["GroupId"] = request.groupId;
    }

    if (!Util.isUnset(request.outIds)) {
      body["OutIds"] = request.outIds;
    }

    if (!Util.isUnset(request.phoneNumbers)) {
      body["PhoneNumbers"] = request.phoneNumbers;
    }

    if (!Util.isUnset(request.scheduleId)) {
      body["ScheduleId"] = request.scheduleId;
    }

    if (!Util.isUnset(request.signName)) {
      body["SignName"] = request.signName;
    }

    if (!Util.isUnset(request.signatureId)) {
      body["SignatureId"] = request.signatureId;
    }

    if (!Util.isUnset(request.smsUpExtendCodes)) {
      body["SmsUpExtendCodes"] = request.smsUpExtendCodes;
    }

    if (!Util.isUnset(request.templateCode)) {
      body["TemplateCode"] = request.templateCode;
    }

    if (!Util.isUnset(request.templateId)) {
      body["TemplateId"] = request.templateId;
    }

    if (!Util.isUnset(request.templateParams)) {
      body["TemplateParams"] = request.templateParams;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SendMessage",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/messages`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SendMessageResponse>(await this.callApi(params, req, runtime), new SendMessageResponse({}));
  }

}
