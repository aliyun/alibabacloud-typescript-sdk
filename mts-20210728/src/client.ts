// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class QueryCopyrightRequest extends $tea.Model {
  createTimeEnd?: number;
  createTimeStart?: number;
  jobId?: string;
  level?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      jobId: 'JobId',
      level: 'Level',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'number',
      createTimeStart: 'number',
      jobId: 'string',
      level: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopyrightResponseBody extends $tea.Model {
  data?: QueryCopyrightResponseBodyData[];
  requestID?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestID: 'RequestID',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryCopyrightResponseBodyData },
      requestID: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopyrightResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCopyrightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCopyrightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopyrightExtractRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopyrightExtractResponseBody extends $tea.Model {
  data?: QueryCopyrightExtractResponseBodyData;
  message?: string;
  requestID?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestID: 'RequestID',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryCopyrightExtractResponseBodyData,
      message: 'string',
      requestID: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopyrightExtractResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryCopyrightExtractResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryCopyrightExtractResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceAbRequest extends $tea.Model {
  jobId?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceAbResponseBody extends $tea.Model {
  data?: QueryTraceAbResponseBodyData[];
  message?: string;
  requestID?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestID: 'RequestID',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryTraceAbResponseBodyData },
      message: 'string',
      requestID: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceAbResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTraceAbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTraceAbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceExtractRequest extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceExtractResponseBody extends $tea.Model {
  data?: QueryTraceExtractResponseBodyData;
  message?: string;
  requestID?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestID: 'RequestID',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryTraceExtractResponseBodyData,
      message: 'string',
      requestID: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceExtractResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTraceExtractResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTraceExtractResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceMuRequest extends $tea.Model {
  createTimeEnd?: number;
  createTimeStart?: number;
  jobId?: string;
  level?: number;
  messageId?: number;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      jobId: 'JobId',
      level: 'Level',
      messageId: 'MessageId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'number',
      createTimeStart: 'number',
      jobId: 'string',
      level: 'number',
      messageId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceMuResponseBody extends $tea.Model {
  data?: QueryTraceMuResponseBodyData[];
  message?: string;
  requestID?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestID: 'RequestID',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryTraceMuResponseBodyData },
      message: 'string',
      requestID: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceMuResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryTraceMuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryTraceMuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightExtractRequest extends $tea.Model {
  callBack?: string;
  input?: string;
  url?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      callBack: 'CallBack',
      input: 'Input',
      url: 'Url',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      input: 'string',
      url: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightExtractResponseBody extends $tea.Model {
  data?: SubmitCopyrightExtractResponseBodyData;
  message?: string;
  requestID?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestID: 'RequestID',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitCopyrightExtractResponseBodyData,
      message: 'string',
      requestID: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightExtractResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitCopyrightExtractResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitCopyrightExtractResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightJobRequest extends $tea.Model {
  callBack?: string;
  description?: string;
  input?: string;
  level?: number;
  message?: string;
  output?: string;
  startTime?: number;
  totalTime?: number;
  url?: string;
  userData?: string;
  visibleMessage?: string;
  static names(): { [key: string]: string } {
    return {
      callBack: 'CallBack',
      description: 'Description',
      input: 'Input',
      level: 'Level',
      message: 'Message',
      output: 'Output',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      url: 'Url',
      userData: 'UserData',
      visibleMessage: 'VisibleMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      description: 'string',
      input: 'string',
      level: 'number',
      message: 'string',
      output: 'string',
      startTime: 'number',
      totalTime: 'number',
      url: 'string',
      userData: 'string',
      visibleMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightJobResponseBody extends $tea.Model {
  data?: SubmitCopyrightJobResponseBodyData;
  message?: string;
  requestID?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestID: 'RequestID',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitCopyrightJobResponseBodyData,
      message: 'string',
      requestID: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitCopyrightJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitCopyrightJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImageCopyrightRequest extends $tea.Model {
  input?: string;
  level?: number;
  message?: string;
  output?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      level: 'Level',
      message: 'Message',
      output: 'Output',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      level: 'number',
      message: 'string',
      output: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImageCopyrightResponseBody extends $tea.Model {
  data?: SubmitImageCopyrightResponseBodyData;
  message?: string;
  requestID?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestID: 'RequestID',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitImageCopyrightResponseBodyData,
      message: 'string',
      requestID: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImageCopyrightResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitImageCopyrightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitImageCopyrightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceAbRequest extends $tea.Model {
  callBack?: string;
  cipherBase64ed?: string;
  input?: string;
  level?: number;
  output?: string;
  startTime?: number;
  totalTime?: number;
  url?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      callBack: 'CallBack',
      cipherBase64ed: 'CipherBase64ed',
      input: 'Input',
      level: 'Level',
      output: 'Output',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      url: 'Url',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      cipherBase64ed: 'string',
      input: 'string',
      level: 'number',
      output: 'string',
      startTime: 'number',
      totalTime: 'number',
      url: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceAbResponseBody extends $tea.Model {
  data?: SubmitTraceAbResponseBodyData;
  message?: string;
  requestID?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestID: 'RequestID',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitTraceAbResponseBodyData,
      message: 'string',
      requestID: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceAbResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitTraceAbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitTraceAbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceExtractRequest extends $tea.Model {
  callBack?: string;
  input?: string;
  url?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      callBack: 'CallBack',
      input: 'Input',
      url: 'Url',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      input: 'string',
      url: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceExtractResponseBody extends $tea.Model {
  data?: SubmitTraceExtractResponseBodyData;
  message?: string;
  requestID?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestID: 'RequestID',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitTraceExtractResponseBodyData,
      message: 'string',
      requestID: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceExtractResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitTraceExtractResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitTraceExtractResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTracemuRequest extends $tea.Model {
  keyUri?: string;
  mediaId?: string;
  output?: string;
  trace?: string;
  static names(): { [key: string]: string } {
    return {
      keyUri: 'KeyUri',
      mediaId: 'MediaId',
      output: 'Output',
      trace: 'Trace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyUri: 'string',
      mediaId: 'string',
      output: 'string',
      trace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTracemuResponseBody extends $tea.Model {
  data?: SubmitTracemuResponseBodyData;
  message?: string;
  requestID?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestID: 'RequestID',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitTracemuResponseBodyData,
      message: 'string',
      requestID: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTracemuResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SubmitTracemuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SubmitTracemuResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopyrightResponseBodyData extends $tea.Model {
  callback?: string;
  gmtCreate?: number;
  gmtModified?: number;
  input?: string;
  jobId?: string;
  level?: number;
  message?: string;
  messageId?: number;
  output?: string;
  result?: string;
  status?: string;
  userData?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      input: 'Input',
      jobId: 'JobId',
      level: 'Level',
      message: 'Message',
      messageId: 'MessageId',
      output: 'Output',
      result: 'Result',
      status: 'Status',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      input: 'string',
      jobId: 'string',
      level: 'number',
      message: 'string',
      messageId: 'number',
      output: 'string',
      result: 'string',
      status: 'string',
      userData: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopyrightExtractResponseBodyData extends $tea.Model {
  message?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceAbResponseBodyData extends $tea.Model {
  callback?: string;
  gmtCreate?: number;
  gmtModified?: number;
  input?: string;
  jobId?: string;
  level?: number;
  mediaId?: string;
  output?: string;
  result?: string;
  status?: string;
  userData?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      input: 'Input',
      jobId: 'JobId',
      level: 'Level',
      mediaId: 'MediaId',
      output: 'Output',
      result: 'Result',
      status: 'Status',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      input: 'string',
      jobId: 'string',
      level: 'number',
      mediaId: 'string',
      output: 'string',
      result: 'string',
      status: 'string',
      userData: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceExtractResponseBodyData extends $tea.Model {
  trace?: string;
  static names(): { [key: string]: string } {
    return {
      trace: 'Trace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceMuResponseBodyData extends $tea.Model {
  gmtCreate?: number;
  gmtModified?: number;
  jobId?: string;
  mediaId?: string;
  output?: string;
  status?: string;
  trace?: string;
  traceId?: number;
  userData?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      jobId: 'JobId',
      mediaId: 'MediaId',
      output: 'Output',
      status: 'Status',
      trace: 'Trace',
      traceId: 'TraceId',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      jobId: 'string',
      mediaId: 'string',
      output: 'string',
      status: 'string',
      trace: 'string',
      traceId: 'number',
      userData: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightExtractResponseBodyData extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightJobResponseBodyData extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImageCopyrightResponseBodyData extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceAbResponseBodyData extends $tea.Model {
  jobId?: string;
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      mediaId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceExtractResponseBodyData extends $tea.Model {
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTracemuResponseBodyData extends $tea.Model {
  code?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      jobId: 'string',
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
      'ap-northeast-2-pop': "mts.aliyuncs.com",
      'ap-southeast-2': "mts.aliyuncs.com",
      'ap-southeast-3': "mts.aliyuncs.com",
      'cn-beijing-finance-1': "mts.aliyuncs.com",
      'cn-beijing-finance-pop': "mts.aliyuncs.com",
      'cn-beijing-gov-1': "mts.aliyuncs.com",
      'cn-beijing-nu16-b01': "mts.aliyuncs.com",
      'cn-chengdu': "mts.aliyuncs.com",
      'cn-edge-1': "mts.aliyuncs.com",
      'cn-fujian': "mts.aliyuncs.com",
      'cn-haidian-cm12-c01': "mts.aliyuncs.com",
      'cn-hangzhou-bj-b01': "mts.aliyuncs.com",
      'cn-hangzhou-finance': "mts.aliyuncs.com",
      'cn-hangzhou-internal-prod-1': "mts.aliyuncs.com",
      'cn-hangzhou-internal-test-1': "mts.aliyuncs.com",
      'cn-hangzhou-internal-test-2': "mts.aliyuncs.com",
      'cn-hangzhou-internal-test-3': "mts.aliyuncs.com",
      'cn-hangzhou-test-306': "mts.aliyuncs.com",
      'cn-hongkong-finance-pop': "mts.aliyuncs.com",
      'cn-huhehaote-nebula-1': "mts.aliyuncs.com",
      'cn-north-2-gov-1': "mts.aliyuncs.com",
      'cn-qingdao-nebula': "mts.aliyuncs.com",
      'cn-shanghai-et15-b01': "mts.aliyuncs.com",
      'cn-shanghai-et2-b01': "mts.aliyuncs.com",
      'cn-shanghai-finance-1': "mts.aliyuncs.com",
      'cn-shanghai-inner': "mts.aliyuncs.com",
      'cn-shanghai-internal-test-1': "mts.aliyuncs.com",
      'cn-shenzhen-finance-1': "mts.aliyuncs.com",
      'cn-shenzhen-inner': "mts.aliyuncs.com",
      'cn-shenzhen-st4-d01': "mts.aliyuncs.com",
      'cn-shenzhen-su18-b01': "mts.aliyuncs.com",
      'cn-wuhan': "mts.aliyuncs.com",
      'cn-wulanchabu': "mts.aliyuncs.com",
      'cn-yushanfang': "mts.aliyuncs.com",
      'cn-zhangbei': "mts.aliyuncs.com",
      'cn-zhangbei-na61-b01': "mts.aliyuncs.com",
      'cn-zhangjiakou-na62-a01': "mts.aliyuncs.com",
      'cn-zhengzhou-nebula-1': "mts.aliyuncs.com",
      'eu-west-1-oxs': "mts.aliyuncs.com",
      'me-east-1': "mts.aliyuncs.com",
      'rus-west-1-pop': "mts.aliyuncs.com",
      'us-east-1': "mts.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("mts", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async queryCopyright(request: QueryCopyrightRequest): Promise<QueryCopyrightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryCopyrightWithOptions(request, headers, runtime);
  }

  async queryCopyrightWithOptions(request: QueryCopyrightRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryCopyrightResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      body["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      body["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryCopyright",
      version: "2021-07-28",
      protocol: "HTTPS",
      pathname: `/queryCopyrightJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryCopyrightResponse>(await this.callApi(params, req, runtime), new QueryCopyrightResponse({}));
  }

  async queryCopyrightExtract(request: QueryCopyrightExtractRequest): Promise<QueryCopyrightExtractResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryCopyrightExtractWithOptions(request, headers, runtime);
  }

  async queryCopyrightExtractWithOptions(request: QueryCopyrightExtractRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryCopyrightExtractResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryCopyrightExtract",
      version: "2021-07-28",
      protocol: "HTTPS",
      pathname: `/queryCopyrightExtract`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryCopyrightExtractResponse>(await this.callApi(params, req, runtime), new QueryCopyrightExtractResponse({}));
  }

  async queryTraceAb(request: QueryTraceAbRequest): Promise<QueryTraceAbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTraceAbWithOptions(request, headers, runtime);
  }

  async queryTraceAbWithOptions(request: QueryTraceAbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryTraceAbResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.mediaId)) {
      body["MediaId"] = request.mediaId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryTraceAb",
      version: "2021-07-28",
      protocol: "HTTPS",
      pathname: `/queryTraceAb`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryTraceAbResponse>(await this.callApi(params, req, runtime), new QueryTraceAbResponse({}));
  }

  async queryTraceExtract(request: QueryTraceExtractRequest): Promise<QueryTraceExtractResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTraceExtractWithOptions(request, headers, runtime);
  }

  async queryTraceExtractWithOptions(request: QueryTraceExtractRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryTraceExtractResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryTraceExtract",
      version: "2021-07-28",
      protocol: "HTTPS",
      pathname: `/queryTraceExtract`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryTraceExtractResponse>(await this.callApi(params, req, runtime), new QueryTraceExtractResponse({}));
  }

  async queryTraceMu(request: QueryTraceMuRequest): Promise<QueryTraceMuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryTraceMuWithOptions(request, headers, runtime);
  }

  async queryTraceMuWithOptions(request: QueryTraceMuRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryTraceMuResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.createTimeEnd)) {
      body["CreateTimeEnd"] = request.createTimeEnd;
    }

    if (!Util.isUnset(request.createTimeStart)) {
      body["CreateTimeStart"] = request.createTimeStart;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.messageId)) {
      body["MessageId"] = request.messageId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      body["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "QueryTraceMu",
      version: "2021-07-28",
      protocol: "HTTPS",
      pathname: `/queryTraceM3u8`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<QueryTraceMuResponse>(await this.callApi(params, req, runtime), new QueryTraceMuResponse({}));
  }

  async submitCopyrightExtract(request: SubmitCopyrightExtractRequest): Promise<SubmitCopyrightExtractResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitCopyrightExtractWithOptions(request, headers, runtime);
  }

  async submitCopyrightExtractWithOptions(request: SubmitCopyrightExtractRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitCopyrightExtractResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callBack)) {
      body["CallBack"] = request.callBack;
    }

    if (!Util.isUnset(request.input)) {
      body["Input"] = request.input;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    if (!Util.isUnset(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitCopyrightExtract",
      version: "2021-07-28",
      protocol: "HTTPS",
      pathname: `/submitCopyrightExtract`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitCopyrightExtractResponse>(await this.callApi(params, req, runtime), new SubmitCopyrightExtractResponse({}));
  }

  async submitCopyrightJob(request: SubmitCopyrightJobRequest): Promise<SubmitCopyrightJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitCopyrightJobWithOptions(request, headers, runtime);
  }

  async submitCopyrightJobWithOptions(request: SubmitCopyrightJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitCopyrightJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callBack)) {
      body["CallBack"] = request.callBack;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.input)) {
      body["Input"] = request.input;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.message)) {
      body["Message"] = request.message;
    }

    if (!Util.isUnset(request.output)) {
      body["Output"] = request.output;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.totalTime)) {
      body["TotalTime"] = request.totalTime;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    if (!Util.isUnset(request.userData)) {
      body["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.visibleMessage)) {
      body["VisibleMessage"] = request.visibleMessage;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitCopyrightJob",
      version: "2021-07-28",
      protocol: "HTTPS",
      pathname: `/submitCopyrightJob`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitCopyrightJobResponse>(await this.callApi(params, req, runtime), new SubmitCopyrightJobResponse({}));
  }

  async submitImageCopyright(request: SubmitImageCopyrightRequest): Promise<SubmitImageCopyrightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitImageCopyrightWithOptions(request, headers, runtime);
  }

  async submitImageCopyrightWithOptions(request: SubmitImageCopyrightRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitImageCopyrightResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.input)) {
      body["Input"] = request.input;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.message)) {
      body["Message"] = request.message;
    }

    if (!Util.isUnset(request.output)) {
      body["Output"] = request.output;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitImageCopyright",
      version: "2021-07-28",
      protocol: "HTTPS",
      pathname: `/submitImageCopyright`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitImageCopyrightResponse>(await this.callApi(params, req, runtime), new SubmitImageCopyrightResponse({}));
  }

  async submitTraceAb(request: SubmitTraceAbRequest): Promise<SubmitTraceAbResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitTraceAbWithOptions(request, headers, runtime);
  }

  async submitTraceAbWithOptions(request: SubmitTraceAbRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitTraceAbResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callBack)) {
      body["CallBack"] = request.callBack;
    }

    if (!Util.isUnset(request.cipherBase64ed)) {
      body["CipherBase64ed"] = request.cipherBase64ed;
    }

    if (!Util.isUnset(request.input)) {
      body["Input"] = request.input;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.output)) {
      body["Output"] = request.output;
    }

    if (!Util.isUnset(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.totalTime)) {
      body["TotalTime"] = request.totalTime;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    if (!Util.isUnset(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTraceAb",
      version: "2021-07-28",
      protocol: "HTTPS",
      pathname: `/submitTraceAb`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitTraceAbResponse>(await this.callApi(params, req, runtime), new SubmitTraceAbResponse({}));
  }

  async submitTraceExtract(request: SubmitTraceExtractRequest): Promise<SubmitTraceExtractResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitTraceExtractWithOptions(request, headers, runtime);
  }

  async submitTraceExtractWithOptions(request: SubmitTraceExtractRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitTraceExtractResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.callBack)) {
      body["CallBack"] = request.callBack;
    }

    if (!Util.isUnset(request.input)) {
      body["Input"] = request.input;
    }

    if (!Util.isUnset(request.url)) {
      body["Url"] = request.url;
    }

    if (!Util.isUnset(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTraceExtract",
      version: "2021-07-28",
      protocol: "HTTPS",
      pathname: `/submitTraceExtract`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitTraceExtractResponse>(await this.callApi(params, req, runtime), new SubmitTraceExtractResponse({}));
  }

  async submitTracemu(request: SubmitTracemuRequest): Promise<SubmitTracemuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitTracemuWithOptions(request, headers, runtime);
  }

  async submitTracemuWithOptions(request: SubmitTracemuRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitTracemuResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keyUri)) {
      body["KeyUri"] = request.keyUri;
    }

    if (!Util.isUnset(request.mediaId)) {
      body["MediaId"] = request.mediaId;
    }

    if (!Util.isUnset(request.output)) {
      body["Output"] = request.output;
    }

    if (!Util.isUnset(request.trace)) {
      body["Trace"] = request.trace;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SubmitTracemu",
      version: "2021-07-28",
      protocol: "HTTPS",
      pathname: `/submitTraceM3u8`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SubmitTracemuResponse>(await this.callApi(params, req, runtime), new SubmitTracemuResponse({}));
  }

}
