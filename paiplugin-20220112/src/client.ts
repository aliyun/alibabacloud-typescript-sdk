// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CreateCampaignRequest extends $tea.Model {
  name?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCampaignResponseBody extends $tea.Model {
  data?: CreateCampaignResponseBodyData;
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
      data: CreateCampaignResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCampaignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCampaignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupRequest extends $tea.Model {
  algorithm?: string;
  column?: string;
  filter?: string;
  inferenceJobId?: string;
  name?: string;
  phoneNumber?: boolean;
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
      phoneNumber: 'PhoneNumber',
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
      phoneNumber: 'boolean',
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

export class CreateInferenceJobRequest extends $tea.Model {
  algorithm?: string;
  campaignId?: string;
  dataPath?: string;
  name?: string;
  remark?: string;
  targetPath?: string;
  trainingJobId?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      campaignId: 'CampaignId',
      dataPath: 'DataPath',
      name: 'Name',
      remark: 'Remark',
      targetPath: 'TargetPath',
      trainingJobId: 'TrainingJobId',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      campaignId: 'string',
      dataPath: 'string',
      name: 'string',
      remark: 'string',
      targetPath: 'string',
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
  statusCode: number;
  body: CreateInferenceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateInferenceJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleRequest extends $tea.Model {
  AISendEndDate?: string;
  AISendStartDate?: string;
  endTime?: number;
  executeTime?: string;
  groupId?: string;
  name?: string;
  paymentType?: string;
  repeatCycle?: number;
  repeatCycleUnit?: number;
  repeatTimes?: number;
  signName?: string;
  signatureId?: string;
  templateCode?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      AISendEndDate: 'AISendEndDate',
      AISendStartDate: 'AISendStartDate',
      endTime: 'EndTime',
      executeTime: 'ExecuteTime',
      groupId: 'GroupId',
      name: 'Name',
      paymentType: 'PaymentType',
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
      AISendEndDate: 'string',
      AISendStartDate: 'string',
      endTime: 'number',
      executeTime: 'string',
      groupId: 'string',
      name: 'string',
      paymentType: 'string',
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
  statusCode: number;
  body: CreateScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: CreateSignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  signature?: string;
  signatureId?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      name: 'Name',
      signature: 'Signature',
      signatureId: 'SignatureId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      name: 'string',
      signature: 'string',
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
  statusCode: number;
  body: CreateTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTrainingJobRequest extends $tea.Model {
  algorithm?: string;
  campaignId?: string;
  dataPath?: string;
  name?: string;
  remark?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      campaignId: 'CampaignId',
      dataPath: 'DataPath',
      name: 'Name',
      remark: 'Remark',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      campaignId: 'string',
      dataPath: 'string',
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
  statusCode: number;
  body: CreateTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTrainingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCampaignResponseBody extends $tea.Model {
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

export class DeleteCampaignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteCampaignResponseBody,
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
  statusCode: number;
  body: DeleteInferenceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DeleteScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DeleteSignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DeleteTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DeleteTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetAlgorithmResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAlgorithmResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCampaignResponseBody extends $tea.Model {
  data?: GetCampaignResponseBodyData;
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
      data: GetCampaignResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCampaignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCampaignResponseBody,
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
  statusCode: number;
  body: GetInferenceJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetInferenceJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageConfigResponseBody extends $tea.Model {
  data?: GetMessageConfigResponseBodyData;
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
      data: GetMessageConfigResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetMessageConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetMessageConfigResponseBody,
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
  statusCode: number;
  body: GetScheduleResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetSignatureResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetTrainingJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTrainingJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBody extends $tea.Model {
  data?: GetUserResponseBodyData;
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
      data: GetUserResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetUserResponseBody,
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
  statusCode: number;
  body: ListAlgorithmsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAlgorithmsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignsRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignsResponseBody extends $tea.Model {
  data?: ListCampaignsResponseBodyData;
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
      data: ListCampaignsResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListCampaignsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCampaignsResponseBody,
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
  phoneNumber?: boolean;
  remark?: string;
  source?: number;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      phoneNumber: 'PhoneNumber',
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
      phoneNumber: 'boolean',
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
  statusCode: number;
  body: ListGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInferenceJobsRequest extends $tea.Model {
  campaignId?: string;
  campaignName?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  remark?: string;
  status?: number;
  trainingJobName?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      campaignName: 'CampaignName',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      status: 'Status',
      trainingJobName: 'TrainingJobName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      campaignName: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
      status: 'number',
      trainingJobName: 'string',
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
  statusCode: number;
  body: ListInferenceJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  templateType?: number;
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
      templateType: 'TemplateType',
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
      templateType: 'number',
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
  statusCode: number;
  body: ListMessageMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListMessageMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMessagesRequest extends $tea.Model {
  datetime?: string;
  errorCode?: string;
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
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      datetime: 'Datetime',
      errorCode: 'ErrorCode',
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
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datetime: 'string',
      errorCode: 'string',
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
      templateType: 'number',
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
  statusCode: number;
  body: ListMessagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: ListSchedulesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: ListSignaturesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: ListTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTrainingJobsRequest extends $tea.Model {
  campaignId?: string;
  campaignName?: string;
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  remark?: string;
  status?: number;
  trainingScheduleId?: string;
  static names(): { [key: string]: string } {
    return {
      campaignId: 'CampaignId',
      campaignName: 'CampaignName',
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remark: 'Remark',
      status: 'Status',
      trainingScheduleId: 'TrainingScheduleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaignId: 'string',
      campaignName: 'string',
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      remark: 'string',
      status: 'number',
      trainingScheduleId: 'string',
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
  statusCode: number;
  body: ListTrainingJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  paymentType?: string;
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
      paymentType: 'PaymentType',
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
      paymentType: 'string',
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
  statusCode: number;
  body: SendMessageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SendMessageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsReportRequest extends $tea.Model {
  body?: SmsReportRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': SmsReportRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsReportResponseBody extends $tea.Model {
  code?: number;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SmsReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SmsReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsUpRequest extends $tea.Model {
  body?: SmsUpRequestBody[];
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'array', 'itemType': SmsUpRequestBody },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsUpResponseBody extends $tea.Model {
  code?: number;
  msg?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsUpResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SmsUpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SmsUpResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCampaignRequest extends $tea.Model {
  name?: string;
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      remark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCampaignResponseBody extends $tea.Model {
  data?: UpdateCampaignResponseBodyData;
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
      data: UpdateCampaignResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCampaignResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateCampaignResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateCampaignResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReportUrlRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateReportUrlResponseBody extends $tea.Model {
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

export class UpdateReportUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateReportUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateReportUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUploadUrlRequest extends $tea.Model {
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUploadUrlResponseBody extends $tea.Model {
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

export class UpdateUploadUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUploadUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCampaignResponseBodyData extends $tea.Model {
  createdTime?: string;
  id?: string;
  name?: string;
  remark?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      updatedTime: 'string',
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
  phoneNumber?: boolean;
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
      phoneNumber: 'PhoneNumber',
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
      phoneNumber: 'boolean',
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
  campaignId?: string;
  createdTime?: string;
  dataPath?: string;
  groupId?: string;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  targetPath?: string;
  trainingJobId?: string;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      campaignId: 'CampaignId',
      createdTime: 'CreatedTime',
      dataPath: 'DataPath',
      groupId: 'GroupId',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      targetPath: 'TargetPath',
      trainingJobId: 'TrainingJobId',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      campaignId: 'string',
      createdTime: 'string',
      dataPath: 'string',
      groupId: 'string',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      targetPath: 'string',
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
  signature?: string;
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
      signature: 'Signature',
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
      signature: 'string',
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
  campaignId?: string;
  createdTime?: string;
  dataPath?: string;
  hasModelInfo?: boolean;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  trainingScheduleId?: string;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      campaignId: 'CampaignId',
      createdTime: 'CreatedTime',
      dataPath: 'DataPath',
      hasModelInfo: 'HasModelInfo',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      trainingScheduleId: 'TrainingScheduleId',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      campaignId: 'string',
      createdTime: 'string',
      dataPath: 'string',
      hasModelInfo: 'boolean',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      trainingScheduleId: 'string',
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

export class GetCampaignResponseBodyData extends $tea.Model {
  createdTime?: string;
  id?: string;
  name?: string;
  remark?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGroupResponseBodyData extends $tea.Model {
  algorithm?: string;
  amount?: number;
  campaignId?: string;
  column?: string;
  createdTime?: string;
  filter?: string;
  history?: string;
  id?: string;
  inferenceJobId?: string;
  name?: string;
  phoneNumber?: boolean;
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
      campaignId: 'CampaignId',
      column: 'Column',
      createdTime: 'CreatedTime',
      filter: 'Filter',
      history: 'History',
      id: 'Id',
      inferenceJobId: 'InferenceJobId',
      name: 'Name',
      phoneNumber: 'PhoneNumber',
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
      campaignId: 'string',
      column: 'string',
      createdTime: 'string',
      filter: 'string',
      history: 'string',
      id: 'string',
      inferenceJobId: 'string',
      name: 'string',
      phoneNumber: 'boolean',
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
  campaignId?: string;
  createdTime?: string;
  dataPath?: string;
  groupId?: string;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  targetPath?: string;
  trainingJobId?: string;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      campaignId: 'CampaignId',
      createdTime: 'CreatedTime',
      dataPath: 'DataPath',
      groupId: 'GroupId',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      targetPath: 'TargetPath',
      trainingJobId: 'TrainingJobId',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      campaignId: 'string',
      createdTime: 'string',
      dataPath: 'string',
      groupId: 'string',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      targetPath: 'string',
      trainingJobId: 'string',
      updatedTime: 'string',
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageConfigResponseBodyData extends $tea.Model {
  smsReportUrl?: string;
  smsUpUrl?: string;
  static names(): { [key: string]: string } {
    return {
      smsReportUrl: 'SmsReportUrl',
      smsUpUrl: 'SmsUpUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smsReportUrl: 'string',
      smsUpUrl: 'string',
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
  paymentType?: string;
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
      paymentType: 'PaymentType',
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
      paymentType: 'string',
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
  campaignId?: string;
  createdTime?: string;
  dataPath?: string;
  hasModelInfo?: boolean;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  trainingScheduleId?: string;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      campaignId: 'CampaignId',
      createdTime: 'CreatedTime',
      dataPath: 'DataPath',
      hasModelInfo: 'HasModelInfo',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      trainingScheduleId: 'TrainingScheduleId',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      campaignId: 'string',
      createdTime: 'string',
      dataPath: 'string',
      hasModelInfo: 'boolean',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      trainingScheduleId: 'string',
      updatedTime: 'string',
      userConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResponseBodyData extends $tea.Model {
  accountStatus?: number;
  static names(): { [key: string]: string } {
    return {
      accountStatus: 'AccountStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountStatus: 'number',
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

export class ListCampaignsResponseBodyDataCampaigns extends $tea.Model {
  createdTime?: string;
  id?: string;
  name?: string;
  remark?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCampaignsResponseBodyData extends $tea.Model {
  campaigns?: ListCampaignsResponseBodyDataCampaigns[];
  pageNumber?: number;
  pageSize?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      campaigns: 'Campaigns',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      campaigns: { 'type': 'array', 'itemType': ListCampaignsResponseBodyDataCampaigns },
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
  phoneNumber?: boolean;
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
      phoneNumber: 'PhoneNumber',
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
      phoneNumber: 'boolean',
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
  campaignId?: string;
  createdTime?: string;
  dataPath?: string;
  groupId?: string;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  targetGroupId?: string;
  targetPath?: string;
  trainingJobId?: string;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      campaignId: 'CampaignId',
      createdTime: 'CreatedTime',
      dataPath: 'DataPath',
      groupId: 'GroupId',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      targetGroupId: 'TargetGroupId',
      targetPath: 'TargetPath',
      trainingJobId: 'TrainingJobId',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      campaignId: 'string',
      createdTime: 'string',
      dataPath: 'string',
      groupId: 'string',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      targetGroupId: 'string',
      targetPath: 'string',
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
  templateType?: number;
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
      templateType: 'TemplateType',
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
      templateType: 'number',
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
  campaignId?: string;
  createdTime?: string;
  dataPath?: string;
  hasModelInfo?: boolean;
  history?: string;
  id?: string;
  name?: string;
  remark?: string;
  status?: number;
  trainingScheduleId?: string;
  updatedTime?: string;
  userConfig?: string;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      campaignId: 'CampaignId',
      createdTime: 'CreatedTime',
      dataPath: 'DataPath',
      hasModelInfo: 'HasModelInfo',
      history: 'History',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      status: 'Status',
      trainingScheduleId: 'TrainingScheduleId',
      updatedTime: 'UpdatedTime',
      userConfig: 'UserConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'string',
      campaignId: 'string',
      createdTime: 'string',
      dataPath: 'string',
      hasModelInfo: 'boolean',
      history: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      status: 'number',
      trainingScheduleId: 'string',
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

export class SmsReportRequestBody extends $tea.Model {
  bizId?: string;
  errCode?: string;
  errMsg?: string;
  messageId?: string;
  outId?: string;
  phoneNumber?: string;
  reportTime?: string;
  requestId?: string;
  sendTime?: string;
  signName?: string;
  smsSize?: string;
  success?: boolean;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'biz_id',
      errCode: 'err_code',
      errMsg: 'err_msg',
      messageId: 'message_id',
      outId: 'out_id',
      phoneNumber: 'phone_number',
      reportTime: 'report_time',
      requestId: 'request_id',
      sendTime: 'send_time',
      signName: 'sign_name',
      smsSize: 'sms_size',
      success: 'success',
      templateCode: 'template_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      errCode: 'string',
      errMsg: 'string',
      messageId: 'string',
      outId: 'string',
      phoneNumber: 'string',
      reportTime: 'string',
      requestId: 'string',
      sendTime: 'string',
      signName: 'string',
      smsSize: 'string',
      success: 'boolean',
      templateCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SmsUpRequestBody extends $tea.Model {
  content?: string;
  destCode?: string;
  phoneNumber?: string;
  sendTime?: string;
  sequenceId?: number;
  signName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      destCode: 'dest_code',
      phoneNumber: 'phone_number',
      sendTime: 'send_time',
      sequenceId: 'sequence_id',
      signName: 'sign_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      destCode: 'string',
      phoneNumber: 'string',
      sendTime: 'string',
      sequenceId: 'number',
      signName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCampaignResponseBodyData extends $tea.Model {
  createdTime?: string;
  id?: string;
  name?: string;
  remark?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      id: 'Id',
      name: 'Name',
      remark: 'Remark',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      id: 'string',
      name: 'string',
      remark: 'string',
      updatedTime: 'string',
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
    * 注册运营活动。
    *
    * @param request CreateCampaignRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateCampaignResponse
   */
  async createCampaignWithOptions(request: CreateCampaignRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCampaignResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCampaign",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/campaigns`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateCampaignResponse>(await this.callApi(params, req, runtime), new CreateCampaignResponse({}));
  }

  /**
    * 注册运营活动。
    *
    * @param request CreateCampaignRequest
    * @return CreateCampaignResponse
   */
  async createCampaign(request: CreateCampaignRequest): Promise<CreateCampaignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCampaignWithOptions(request, headers, runtime);
  }

  /**
    * 注册人群。
    *
    * @param request CreateGroupRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateGroupResponse
   */
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

    if (!Util.isUnset(request.phoneNumber)) {
      body["PhoneNumber"] = request.phoneNumber;
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
    * 注册人群。
    *
    * @param request CreateGroupRequest
    * @return CreateGroupResponse
   */
  async createGroup(request: CreateGroupRequest): Promise<CreateGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGroupWithOptions(request, headers, runtime);
  }

  /**
    * 注册预测任务。
    *
    * @param request CreateInferenceJobRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return CreateInferenceJobResponse
   */
  async createInferenceJobWithOptions(request: CreateInferenceJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInferenceJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithm)) {
      body["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.campaignId)) {
      body["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.dataPath)) {
      body["DataPath"] = request.dataPath;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.targetPath)) {
      body["TargetPath"] = request.targetPath;
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
    * 注册预测任务。
    *
    * @param request CreateInferenceJobRequest
    * @return CreateInferenceJobResponse
   */
  async createInferenceJob(request: CreateInferenceJobRequest): Promise<CreateInferenceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInferenceJobWithOptions(request, headers, runtime);
  }

  async createScheduleWithOptions(request: CreateScheduleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateScheduleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.AISendEndDate)) {
      body["AISendEndDate"] = request.AISendEndDate;
    }

    if (!Util.isUnset(request.AISendStartDate)) {
      body["AISendStartDate"] = request.AISendStartDate;
    }

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

    if (!Util.isUnset(request.paymentType)) {
      body["PaymentType"] = request.paymentType;
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

  async createSchedule(request: CreateScheduleRequest): Promise<CreateScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScheduleWithOptions(request, headers, runtime);
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

  async createSignature(request: CreateSignatureRequest): Promise<CreateSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSignatureWithOptions(request, headers, runtime);
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

    if (!Util.isUnset(request.signature)) {
      body["Signature"] = request.signature;
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

  async createTemplate(request: CreateTemplateRequest): Promise<CreateTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTemplateWithOptions(request, headers, runtime);
  }

  async createTrainingJobWithOptions(request: CreateTrainingJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTrainingJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algorithm)) {
      body["Algorithm"] = request.algorithm;
    }

    if (!Util.isUnset(request.campaignId)) {
      body["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.dataPath)) {
      body["DataPath"] = request.dataPath;
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

  async createTrainingJob(request: CreateTrainingJobRequest): Promise<CreateTrainingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTrainingJobWithOptions(request, headers, runtime);
  }

  /**
    * 删除运营活动
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteCampaignResponse
   */
  async deleteCampaignWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteCampaignResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteCampaign",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/campaigns/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteCampaignResponse>(await this.callApi(params, req, runtime), new DeleteCampaignResponse({}));
  }

  /**
    * 删除运营活动
    *
    * @return DeleteCampaignResponse
   */
  async deleteCampaign(Id: string): Promise<DeleteCampaignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCampaignWithOptions(Id, headers, runtime);
  }

  /**
    * 删除人群
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteGroupResponse
   */
  async deleteGroupWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/groups/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGroupResponse>(await this.callApi(params, req, runtime), new DeleteGroupResponse({}));
  }

  /**
    * 删除人群
    *
    * @return DeleteGroupResponse
   */
  async deleteGroup(Id: string): Promise<DeleteGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGroupWithOptions(Id, headers, runtime);
  }

  /**
    * 删除预测任务。
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteInferenceJobResponse
   */
  async deleteInferenceJobWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInferenceJobResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInferenceJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/inference/jobs/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInferenceJobResponse>(await this.callApi(params, req, runtime), new DeleteInferenceJobResponse({}));
  }

  /**
    * 删除预测任务。
    *
    * @return DeleteInferenceJobResponse
   */
  async deleteInferenceJob(Id: string): Promise<DeleteInferenceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInferenceJobWithOptions(Id, headers, runtime);
  }

  /**
    * 删除触达计划。
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteScheduleResponse
   */
  async deleteScheduleWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteScheduleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSchedule",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/schedules/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteScheduleResponse>(await this.callApi(params, req, runtime), new DeleteScheduleResponse({}));
  }

  /**
    * 删除触达计划。
    *
    * @return DeleteScheduleResponse
   */
  async deleteSchedule(Id: string): Promise<DeleteScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteScheduleWithOptions(Id, headers, runtime);
  }

  async deleteSignatureWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSignatureResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteSignature",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/signatures/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteSignatureResponse>(await this.callApi(params, req, runtime), new DeleteSignatureResponse({}));
  }

  async deleteSignature(Id: string): Promise<DeleteSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSignatureWithOptions(Id, headers, runtime);
  }

  /**
    * 删除模板
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTemplateResponse
   */
  async deleteTemplateWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTemplate",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/templates/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTemplateResponse>(await this.callApi(params, req, runtime), new DeleteTemplateResponse({}));
  }

  /**
    * 删除模板
    *
    * @return DeleteTemplateResponse
   */
  async deleteTemplate(Id: string): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(Id, headers, runtime);
  }

  /**
    * 删除训练任务。
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return DeleteTrainingJobResponse
   */
  async deleteTrainingJobWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTrainingJobResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/training/jobs/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteTrainingJobResponse>(await this.callApi(params, req, runtime), new DeleteTrainingJobResponse({}));
  }

  /**
    * 删除训练任务。
    *
    * @return DeleteTrainingJobResponse
   */
  async deleteTrainingJob(Id: string): Promise<DeleteTrainingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTrainingJobWithOptions(Id, headers, runtime);
  }

  /**
    * 获取算法详情。
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetAlgorithmResponse
   */
  async getAlgorithmWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAlgorithmResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAlgorithm",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/algorithms/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAlgorithmResponse>(await this.callApi(params, req, runtime), new GetAlgorithmResponse({}));
  }

  /**
    * 获取算法详情。
    *
    * @return GetAlgorithmResponse
   */
  async getAlgorithm(Id: string): Promise<GetAlgorithmResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAlgorithmWithOptions(Id, headers, runtime);
  }

  /**
    * 获取运营活动详情。
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetCampaignResponse
   */
  async getCampaignWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCampaignResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetCampaign",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/campaigns/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCampaignResponse>(await this.callApi(params, req, runtime), new GetCampaignResponse({}));
  }

  /**
    * 获取运营活动详情。
    *
    * @return GetCampaignResponse
   */
  async getCampaign(Id: string): Promise<GetCampaignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCampaignWithOptions(Id, headers, runtime);
  }

  /**
    * 获取人群详情。
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetGroupResponse
   */
  async getGroupWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetGroup",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/groups/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetGroupResponse>(await this.callApi(params, req, runtime), new GetGroupResponse({}));
  }

  /**
    * 获取人群详情。
    *
    * @return GetGroupResponse
   */
  async getGroup(Id: string): Promise<GetGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getGroupWithOptions(Id, headers, runtime);
  }

  /**
    * 获取预测任务详情。
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetInferenceJobResponse
   */
  async getInferenceJobWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInferenceJobResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInferenceJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/inference/jobs/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInferenceJobResponse>(await this.callApi(params, req, runtime), new GetInferenceJobResponse({}));
  }

  /**
    * 获取预测任务详情。
    *
    * @return GetInferenceJobResponse
   */
  async getInferenceJob(Id: string): Promise<GetInferenceJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInferenceJobWithOptions(Id, headers, runtime);
  }

  /**
    * 获取短信配置。
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetMessageConfigResponse
   */
  async getMessageConfigWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetMessageConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetMessageConfig",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/users/messageConfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetMessageConfigResponse>(await this.callApi(params, req, runtime), new GetMessageConfigResponse({}));
  }

  /**
    * 获取短信配置。
    *
    * @return GetMessageConfigResponse
   */
  async getMessageConfig(): Promise<GetMessageConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMessageConfigWithOptions(headers, runtime);
  }

  async getScheduleWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetScheduleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSchedule",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/schedules/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetScheduleResponse>(await this.callApi(params, req, runtime), new GetScheduleResponse({}));
  }

  async getSchedule(Id: string): Promise<GetScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getScheduleWithOptions(Id, headers, runtime);
  }

  /**
    * 获取签名详情。
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetSignatureResponse
   */
  async getSignatureWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSignatureResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetSignature",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/signatures/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetSignatureResponse>(await this.callApi(params, req, runtime), new GetSignatureResponse({}));
  }

  /**
    * 获取签名详情。
    *
    * @return GetSignatureResponse
   */
  async getSignature(Id: string): Promise<GetSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSignatureWithOptions(Id, headers, runtime);
  }

  /**
    * 获取模板详情。
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetTemplateResponse
   */
  async getTemplateWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTemplate",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/templates/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTemplateResponse>(await this.callApi(params, req, runtime), new GetTemplateResponse({}));
  }

  /**
    * 获取模板详情。
    *
    * @return GetTemplateResponse
   */
  async getTemplate(Id: string): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(Id, headers, runtime);
  }

  async getTrainingJobWithOptions(Id: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTrainingJobResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTrainingJob",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/training/jobs/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTrainingJobResponse>(await this.callApi(params, req, runtime), new GetTrainingJobResponse({}));
  }

  async getTrainingJob(Id: string): Promise<GetTrainingJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTrainingJobWithOptions(Id, headers, runtime);
  }

  /**
    * 获取账号状态。
    *
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetUserResponse
   */
  async getUserWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetUser",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/users`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserResponse>(await this.callApi(params, req, runtime), new GetUserResponse({}));
  }

  /**
    * 获取账号状态。
    *
    * @return GetUserResponse
   */
  async getUser(): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(headers, runtime);
  }

  /**
    * 获取算法列表。
    *
    * @param request ListAlgorithmsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListAlgorithmsResponse
   */
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
    * 获取算法列表。
    *
    * @param request ListAlgorithmsRequest
    * @return ListAlgorithmsResponse
   */
  async listAlgorithms(request: ListAlgorithmsRequest): Promise<ListAlgorithmsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAlgorithmsWithOptions(request, headers, runtime);
  }

  /**
    * 获取运营活动列表。
    *
    * @param request ListCampaignsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListCampaignsResponse
   */
  async listCampaignsWithOptions(request: ListCampaignsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCampaignsResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCampaigns",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/campaigns`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCampaignsResponse>(await this.callApi(params, req, runtime), new ListCampaignsResponse({}));
  }

  /**
    * 获取运营活动列表。
    *
    * @param request ListCampaignsRequest
    * @return ListCampaignsResponse
   */
  async listCampaigns(request: ListCampaignsRequest): Promise<ListCampaignsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCampaignsWithOptions(request, headers, runtime);
  }

  /**
    * 获取人群列表。
    *
    * @param request ListGroupsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListGroupsResponse
   */
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

    if (!Util.isUnset(request.phoneNumber)) {
      query["PhoneNumber"] = request.phoneNumber;
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
    * 获取人群列表。
    *
    * @param request ListGroupsRequest
    * @return ListGroupsResponse
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupsWithOptions(request, headers, runtime);
  }

  async listInferenceJobsWithOptions(request: ListInferenceJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInferenceJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.campaignName)) {
      query["CampaignName"] = request.campaignName;
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

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.trainingJobName)) {
      query["TrainingJobName"] = request.trainingJobName;
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

  async listInferenceJobs(request: ListInferenceJobsRequest): Promise<ListInferenceJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInferenceJobsWithOptions(request, headers, runtime);
  }

  /**
    * 获取短信发送统计列表。
    * 获取短信发送统计数据，可按指定条件获取分类别详细数据，返回数据按日期顺序排列，发送统计为空的日期默认不返回。
    * 发送数据在48小时内会随实际短信发送状态不断更新，最终数据以48小时后数据为准。
    *
    * @param request ListMessageMetricsRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListMessageMetricsResponse
   */
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

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
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
    * 获取短信发送统计列表。
    * 获取短信发送统计数据，可按指定条件获取分类别详细数据，返回数据按日期顺序排列，发送统计为空的日期默认不返回。
    * 发送数据在48小时内会随实际短信发送状态不断更新，最终数据以48小时后数据为准。
    *
    * @param request ListMessageMetricsRequest
    * @return ListMessageMetricsResponse
   */
  async listMessageMetrics(request: ListMessageMetricsRequest): Promise<ListMessageMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMessageMetricsWithOptions(request, headers, runtime);
  }

  /**
    * 查询短信发送详情列表。
    *
    * @param request ListMessagesRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListMessagesResponse
   */
  async listMessagesWithOptions(request: ListMessagesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListMessagesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datetime)) {
      query["Datetime"] = request.datetime;
    }

    if (!Util.isUnset(request.errorCode)) {
      query["ErrorCode"] = request.errorCode;
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

    if (!Util.isUnset(request.templateType)) {
      query["TemplateType"] = request.templateType;
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
    * 查询短信发送详情列表。
    *
    * @param request ListMessagesRequest
    * @return ListMessagesResponse
   */
  async listMessages(request: ListMessagesRequest): Promise<ListMessagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listMessagesWithOptions(request, headers, runtime);
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

  async listSchedules(request: ListSchedulesRequest): Promise<ListSchedulesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSchedulesWithOptions(request, headers, runtime);
  }

  /**
    * 获取签名列表。
    *
    * @param request ListSignaturesRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListSignaturesResponse
   */
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
    * 获取签名列表。
    *
    * @param request ListSignaturesRequest
    * @return ListSignaturesResponse
   */
  async listSignatures(request: ListSignaturesRequest): Promise<ListSignaturesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSignaturesWithOptions(request, headers, runtime);
  }

  /**
    * 获取模板列表。
    *
    * @param request ListTemplatesRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListTemplatesResponse
   */
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
    * 获取模板列表。
    *
    * @param request ListTemplatesRequest
    * @return ListTemplatesResponse
   */
  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(request, headers, runtime);
  }

  async listTrainingJobsWithOptions(request: ListTrainingJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTrainingJobsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.campaignId)) {
      query["CampaignId"] = request.campaignId;
    }

    if (!Util.isUnset(request.campaignName)) {
      query["CampaignName"] = request.campaignName;
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

    if (!Util.isUnset(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.trainingScheduleId)) {
      query["TrainingScheduleId"] = request.trainingScheduleId;
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

  async listTrainingJobs(request: ListTrainingJobsRequest): Promise<ListTrainingJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTrainingJobsWithOptions(request, headers, runtime);
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

    if (!Util.isUnset(request.paymentType)) {
      body["PaymentType"] = request.paymentType;
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

  async sendMessage(request: SendMessageRequest): Promise<SendMessageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.sendMessageWithOptions(request, headers, runtime);
  }

  /**
    * 短信回执。
    *
    * @param request SmsReportRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return SmsReportResponse
   */
  async smsReportWithOptions(request: SmsReportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SmsReportResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "SmsReport",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/recall/report`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SmsReportResponse>(await this.callApi(params, req, runtime), new SmsReportResponse({}));
  }

  /**
    * 短信回执。
    *
    * @param request SmsReportRequest
    * @return SmsReportResponse
   */
  async smsReport(request: SmsReportRequest): Promise<SmsReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.smsReportWithOptions(request, headers, runtime);
  }

  /**
    * 短信上行。
    *
    * @param request SmsUpRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return SmsUpResponse
   */
  async smsUpWithOptions(request: SmsUpRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SmsUpResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: Util.toArray(request.body),
    });
    let params = new $OpenApi.Params({
      action: "SmsUp",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/recall/up`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SmsUpResponse>(await this.callApi(params, req, runtime), new SmsUpResponse({}));
  }

  /**
    * 短信上行。
    *
    * @param request SmsUpRequest
    * @return SmsUpResponse
   */
  async smsUp(request: SmsUpRequest): Promise<SmsUpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.smsUpWithOptions(request, headers, runtime);
  }

  /**
    * 更新运营活动
    *
    * @param request UpdateCampaignRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateCampaignResponse
   */
  async updateCampaignWithOptions(Id: string, request: UpdateCampaignRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateCampaignResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.remark)) {
      body["Remark"] = request.remark;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCampaign",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/campaigns/${OpenApiUtil.getEncodeParam(Id)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateCampaignResponse>(await this.callApi(params, req, runtime), new UpdateCampaignResponse({}));
  }

  /**
    * 更新运营活动
    *
    * @param request UpdateCampaignRequest
    * @return UpdateCampaignResponse
   */
  async updateCampaign(Id: string, request: UpdateCampaignRequest): Promise<UpdateCampaignResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCampaignWithOptions(Id, request, headers, runtime);
  }

  /**
    * 更新回执Url。
    *
    * @param request UpdateReportUrlRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateReportUrlResponse
   */
  async updateReportUrlWithOptions(request: UpdateReportUrlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateReportUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateReportUrl",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/users/reportUrl`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateReportUrlResponse>(await this.callApi(params, req, runtime), new UpdateReportUrlResponse({}));
  }

  /**
    * 更新回执Url。
    *
    * @param request UpdateReportUrlRequest
    * @return UpdateReportUrlResponse
   */
  async updateReportUrl(request: UpdateReportUrlRequest): Promise<UpdateReportUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateReportUrlWithOptions(request, headers, runtime);
  }

  /**
    * 更新上行Url。
    *
    * @param request UpdateUploadUrlRequest
    * @param headers map
    * @param runtime runtime options for this request RuntimeOptions
    * @return UpdateUploadUrlResponse
   */
  async updateUploadUrlWithOptions(request: UpdateUploadUrlRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateUploadUrlResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUploadUrl",
      version: "2022-01-12",
      protocol: "HTTPS",
      pathname: `/api/v2/users/uploadUrl`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateUploadUrlResponse>(await this.callApi(params, req, runtime), new UpdateUploadUrlResponse({}));
  }

  /**
    * 更新上行Url。
    *
    * @param request UpdateUploadUrlRequest
    * @return UpdateUploadUrlResponse
   */
  async updateUploadUrl(request: UpdateUploadUrlRequest): Promise<UpdateUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUploadUrlWithOptions(request, headers, runtime);
  }

}
