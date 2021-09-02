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
  certificates?: string;
  description?: string;
  name?: string;
  powerOfAttorney?: string;
  processInstanceID?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      description: 'Description',
      name: 'Name',
      powerOfAttorney: 'PowerOfAttorney',
      processInstanceID: 'ProcessInstanceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: 'string',
      description: 'string',
      name: 'string',
      powerOfAttorney: 'string',
      processInstanceID: 'string',
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
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateSignatureResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
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

export class DeleteTemplateResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
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

export class CreateTemplateRequest extends $tea.Model {
  content?: string;
  description?: string;
  name?: string;
  processInstanceID?: string;
  signatureID?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      name: 'Name',
      processInstanceID: 'ProcessInstanceID',
      signatureID: 'SignatureID',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      name: 'string',
      processInstanceID: 'string',
      signatureID: 'string',
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
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateTemplateResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
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

export class ListTemplatesRequest extends $tea.Model {
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

export class ListTemplatesResponseBody extends $tea.Model {
  data?: ListTemplatesResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListTemplatesResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
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

export class DeleteScheduleResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
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

export class GetTemplateResponseBody extends $tea.Model {
  data?: GetTemplateResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetTemplateResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
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
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSignaturesResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
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

export class GetSignatureResponseBody extends $tea.Model {
  data?: GetSignatureResponseBodyData;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSignatureResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
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

export class CreateScheduleRequest extends $tea.Model {
  dataAddress?: string;
  dataSource?: number;
  dingBotKeyword?: string;
  dingBotToken?: string;
  name?: string;
  partition?: string;
  phoneNumberColumn?: string;
  sendTime?: string;
  signatureID?: string;
  templateCodeColumn?: string;
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      dataAddress: 'DataAddress',
      dataSource: 'DataSource',
      dingBotKeyword: 'DingBotKeyword',
      dingBotToken: 'DingBotToken',
      name: 'Name',
      partition: 'Partition',
      phoneNumberColumn: 'PhoneNumberColumn',
      sendTime: 'SendTime',
      signatureID: 'SignatureID',
      templateCodeColumn: 'TemplateCodeColumn',
      templateID: 'TemplateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAddress: 'string',
      dataSource: 'number',
      dingBotKeyword: 'string',
      dingBotToken: 'string',
      name: 'string',
      partition: 'string',
      phoneNumberColumn: 'string',
      sendTime: 'string',
      signatureID: 'string',
      templateCodeColumn: 'string',
      templateID: 'string',
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
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateScheduleResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
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
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSchedulesResponseBodyData,
      errorCode: 'number',
      errorMessage: 'string',
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

export class DeleteSignatureResponseBody extends $tea.Model {
  data?: string;
  errorCode?: number;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errorCode: 'number',
      errorMessage: 'string',
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

export class CreateSignatureResponseBodyData extends $tea.Model {
  createdTime?: string;
  ID?: string;
  name?: string;
  status?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      ID: 'ID',
      name: 'Name',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      ID: 'string',
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
  ID?: string;
  name?: string;
  status?: number;
  templateCode?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdTime: 'CreatedTime',
      ID: 'ID',
      name: 'Name',
      status: 'Status',
      templateCode: 'TemplateCode',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdTime: 'string',
      ID: 'string',
      name: 'string',
      status: 'number',
      templateCode: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplatesResponseBodyDataTemplates extends $tea.Model {
  content?: string;
  createdTime?: string;
  ID?: string;
  name?: string;
  status?: number;
  templateCode?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdTime: 'CreatedTime',
      ID: 'ID',
      name: 'Name',
      status: 'Status',
      templateCode: 'TemplateCode',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdTime: 'string',
      ID: 'string',
      name: 'string',
      status: 'number',
      templateCode: 'string',
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

export class GetTemplateResponseBodyData extends $tea.Model {
  content?: string;
  createdTime?: string;
  description?: string;
  ID?: string;
  name?: string;
  reason?: string;
  status?: number;
  templateCode?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createdTime: 'CreatedTime',
      description: 'Description',
      ID: 'ID',
      name: 'Name',
      reason: 'Reason',
      status: 'Status',
      templateCode: 'TemplateCode',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createdTime: 'string',
      description: 'string',
      ID: 'string',
      name: 'string',
      reason: 'string',
      status: 'number',
      templateCode: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSignaturesResponseBodyDataSignatures extends $tea.Model {
  createdTime?: string;
  ID?: string;
  name?: string;
  status?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      ID: 'ID',
      name: 'Name',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      ID: 'string',
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

export class GetSignatureResponseBodyData extends $tea.Model {
  certificates?: string;
  createdTime?: string;
  description?: string;
  ID?: string;
  name?: string;
  powerOfAttorney?: string;
  reason?: string;
  status?: number;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      certificates: 'Certificates',
      createdTime: 'CreatedTime',
      description: 'Description',
      ID: 'ID',
      name: 'Name',
      powerOfAttorney: 'PowerOfAttorney',
      reason: 'Reason',
      status: 'Status',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificates: 'string',
      createdTime: 'string',
      description: 'string',
      ID: 'string',
      name: 'string',
      powerOfAttorney: 'string',
      reason: 'string',
      status: 'number',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScheduleResponseBodyData extends $tea.Model {
  createdTime?: string;
  ID?: string;
  name?: string;
  sendTime?: string;
  signatureID?: string;
  status?: number;
  templateID?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      ID: 'ID',
      name: 'Name',
      sendTime: 'SendTime',
      signatureID: 'SignatureID',
      status: 'Status',
      templateID: 'TemplateID',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      ID: 'string',
      name: 'string',
      sendTime: 'string',
      signatureID: 'string',
      status: 'number',
      templateID: 'string',
      updatedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSchedulesResponseBodyDataSchedules extends $tea.Model {
  createdTime?: string;
  ID?: string;
  name?: string;
  sendTime?: string;
  signatureID?: string;
  status?: number;
  templateID?: string;
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      ID: 'ID',
      name: 'Name',
      sendTime: 'SendTime',
      signatureID: 'SignatureID',
      status: 'Status',
      templateID: 'TemplateID',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      ID: 'string',
      name: 'string',
      sendTime: 'string',
      signatureID: 'string',
      status: 'number',
      templateID: 'string',
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

  async createSignature(request: CreateSignatureRequest): Promise<CreateSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createSignatureWithOptions(request, headers, runtime);
  }

  async createSignatureWithOptions(request: CreateSignatureRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateSignatureResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certificates)) {
      body["Certificates"] = request.certificates;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.powerOfAttorney)) {
      body["PowerOfAttorney"] = request.powerOfAttorney;
    }

    if (!Util.isUnset(request.processInstanceID)) {
      body["ProcessInstanceID"] = request.processInstanceID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateSignatureResponse>(await this.doROARequest("CreateSignature", "2021-03-25", "HTTPS", "POST", "AK", `/api/v1/signatures`, "json", req, runtime), new CreateSignatureResponse({}));
  }

  async deleteTemplate(ID: string): Promise<DeleteTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTemplateWithOptions(ID, headers, runtime);
  }

  async deleteTemplateWithOptions(ID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteTemplateResponse>(await this.doROARequest("DeleteTemplate", "2021-03-25", "HTTPS", "DELETE", "AK", `/api/v1/templates/${ID}`, "json", req, runtime), new DeleteTemplateResponse({}));
  }

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

    if (!Util.isUnset(request.processInstanceID)) {
      body["ProcessInstanceID"] = request.processInstanceID;
    }

    if (!Util.isUnset(request.signatureID)) {
      body["SignatureID"] = request.signatureID;
    }

    if (!Util.isUnset(request.type)) {
      body["Type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateTemplateResponse>(await this.doROARequest("CreateTemplate", "2021-03-25", "HTTPS", "POST", "AK", `/api/v1/templates`, "json", req, runtime), new CreateTemplateResponse({}));
  }

  async listTemplates(request: ListTemplatesRequest): Promise<ListTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTemplatesWithOptions(request, headers, runtime);
  }

  async listTemplatesWithOptions(request: ListTemplatesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTemplatesResponse> {
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
    return $tea.cast<ListTemplatesResponse>(await this.doROARequest("ListTemplates", "2021-03-25", "HTTPS", "GET", "AK", `/api/v1/templates`, "json", req, runtime), new ListTemplatesResponse({}));
  }

  async deleteSchedule(ID: string): Promise<DeleteScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteScheduleWithOptions(ID, headers, runtime);
  }

  async deleteScheduleWithOptions(ID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteScheduleResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteScheduleResponse>(await this.doROARequest("DeleteSchedule", "2021-03-25", "HTTPS", "DELETE", "AK", `/api/v1/schedules/${ID}`, "json", req, runtime), new DeleteScheduleResponse({}));
  }

  async getTemplate(ID: string): Promise<GetTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTemplateWithOptions(ID, headers, runtime);
  }

  async getTemplateWithOptions(ID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTemplateResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetTemplateResponse>(await this.doROARequest("GetTemplate", "2021-03-25", "HTTPS", "GET", "AK", `/api/v1/templates/${ID}`, "json", req, runtime), new GetTemplateResponse({}));
  }

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
    return $tea.cast<ListSignaturesResponse>(await this.doROARequest("ListSignatures", "2021-03-25", "HTTPS", "GET", "AK", `/api/v1/signatures`, "json", req, runtime), new ListSignaturesResponse({}));
  }

  async getSignature(ID: string): Promise<GetSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSignatureWithOptions(ID, headers, runtime);
  }

  async getSignatureWithOptions(ID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSignatureResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetSignatureResponse>(await this.doROARequest("GetSignature", "2021-03-25", "HTTPS", "GET", "AK", `/api/v1/signatures/${ID}`, "json", req, runtime), new GetSignatureResponse({}));
  }

  async createSchedule(request: CreateScheduleRequest): Promise<CreateScheduleResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createScheduleWithOptions(request, headers, runtime);
  }

  async createScheduleWithOptions(request: CreateScheduleRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateScheduleResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataAddress)) {
      body["DataAddress"] = request.dataAddress;
    }

    if (!Util.isUnset(request.dataSource)) {
      body["DataSource"] = request.dataSource;
    }

    if (!Util.isUnset(request.dingBotKeyword)) {
      body["DingBotKeyword"] = request.dingBotKeyword;
    }

    if (!Util.isUnset(request.dingBotToken)) {
      body["DingBotToken"] = request.dingBotToken;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.partition)) {
      body["Partition"] = request.partition;
    }

    if (!Util.isUnset(request.phoneNumberColumn)) {
      body["PhoneNumberColumn"] = request.phoneNumberColumn;
    }

    if (!Util.isUnset(request.sendTime)) {
      body["SendTime"] = request.sendTime;
    }

    if (!Util.isUnset(request.signatureID)) {
      body["SignatureID"] = request.signatureID;
    }

    if (!Util.isUnset(request.templateCodeColumn)) {
      body["TemplateCodeColumn"] = request.templateCodeColumn;
    }

    if (!Util.isUnset(request.templateID)) {
      body["TemplateID"] = request.templateID;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateScheduleResponse>(await this.doROARequest("CreateSchedule", "2021-03-25", "HTTPS", "POST", "AK", `/api/v1/schedules`, "json", req, runtime), new CreateScheduleResponse({}));
  }

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
    return $tea.cast<ListSchedulesResponse>(await this.doROARequest("ListSchedules", "2021-03-25", "HTTPS", "GET", "AK", `/api/v1/schedules`, "json", req, runtime), new ListSchedulesResponse({}));
  }

  async deleteSignature(ID: string): Promise<DeleteSignatureResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSignatureWithOptions(ID, headers, runtime);
  }

  async deleteSignatureWithOptions(ID: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteSignatureResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteSignatureResponse>(await this.doROARequest("DeleteSignature", "2021-03-25", "HTTPS", "DELETE", "AK", `/api/v1/signatures/${ID}`, "json", req, runtime), new DeleteSignatureResponse({}));
  }

}
