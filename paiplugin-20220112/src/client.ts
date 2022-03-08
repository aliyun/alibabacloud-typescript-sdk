// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  body: GetMessageConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetMessageConfigResponseBody,
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
  body: GetUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserResponseBody,
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
  body: SmsReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: SmsUpResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SmsUpResponseBody,
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
  body: UpdateReportUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  body: UpdateUploadUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateUploadUrlResponseBody,
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
   * 注册签名。
  
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
   * 注册模板。
  
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

  /**
   * 删除签名。
  
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
   * 获取短信配置。
   */
  async getMessageConfig(): Promise<GetMessageConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getMessageConfigWithOptions(headers, runtime);
  }

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
   * 获取签名详情。
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
   * 获取模板详情。
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
   * 获取账号状态。
   */
  async getUser(): Promise<GetUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserWithOptions(headers, runtime);
  }

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
   * 获取短信发送统计列表。
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
   * 查询短信发送详情列表。
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
   * 获取签名列表。
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
   * 获取模板列表。
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
   * 发送短信。
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

  /**
   * 短信回执。
   */
  async smsReport(request: SmsReportRequest): Promise<SmsReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.smsReportWithOptions(request, headers, runtime);
  }

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
   * 短信上行。
   */
  async smsUp(request: SmsUpRequest): Promise<SmsUpResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.smsUpWithOptions(request, headers, runtime);
  }

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
   * 更新回执Url。
  
   */
  async updateReportUrl(request: UpdateReportUrlRequest): Promise<UpdateReportUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateReportUrlWithOptions(request, headers, runtime);
  }

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
   * 更新上行Url。
   */
  async updateUploadUrl(request: UpdateUploadUrlRequest): Promise<UpdateUploadUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateUploadUrlWithOptions(request, headers, runtime);
  }

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

}
