// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

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
  requestId?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryTraceMuResponseBodyData },
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceMuResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTraceMuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTraceMuResponseBody,
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
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      level: 'Level',
      message: 'Message',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      level: 'number',
      message: 'string',
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImageCopyrightResponseBody extends $tea.Model {
  data?: SubmitImageCopyrightResponseBodyData;
  message?: string;
  requestId?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitImageCopyrightResponseBodyData,
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitImageCopyrightResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitImageCopyrightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitImageCopyrightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryImageCopyrightRequest extends $tea.Model {
  createTimeEnd?: number;
  createTimeStart?: number;
  jobId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeEnd: 'number',
      createTimeStart: 'number',
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryImageCopyrightResponseBody extends $tea.Model {
  data?: QueryImageCopyrightResponseBodyData[];
  message?: string;
  requestId?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryImageCopyrightResponseBodyData },
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryImageCopyrightResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryImageCopyrightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryImageCopyrightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  requestId?: string;
  data?: QueryCopyrightResponseBodyData[];
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'Data',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: { 'type': 'array', 'itemType': QueryCopyrightResponseBodyData },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopyrightResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryCopyrightResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryCopyrightResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTracemuRequest extends $tea.Model {
  mediaId?: string;
  output?: string;
  trace?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      output: 'Output',
      trace: 'Trace',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  requestId?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitTracemuResponseBodyData,
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTracemuResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitTracemuResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitTracemuResponseBody,
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
  requestId?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': QueryTraceAbResponseBodyData },
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceAbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryTraceAbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryTraceAbResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceAbRequest extends $tea.Model {
  callBack?: string;
  input?: string;
  level?: number;
  output?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      callBack: 'CallBack',
      input: 'Input',
      level: 'Level',
      output: 'Output',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      input: 'string',
      level: 'number',
      output: 'string',
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
  requestId?: string;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SubmitTraceAbResponseBodyData,
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceAbResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitTraceAbResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitTraceAbResponseBody,
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
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      callBack: 'CallBack',
      description: 'Description',
      input: 'Input',
      level: 'Level',
      message: 'Message',
      output: 'Output',
      userData: 'UserData',
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
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightJobResponseBody extends $tea.Model {
  requestId?: string;
  message?: string;
  data?: SubmitCopyrightJobResponseBodyData;
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      message: 'Message',
      data: 'Data',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      message: 'string',
      data: SubmitCopyrightJobResponseBodyData,
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitCopyrightJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitCopyrightJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitCopyrightJobResponseBody,
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
      gmtCreate: 'Gmt_create',
      gmtModified: 'Gmt_modified',
      jobId: 'Job_id',
      mediaId: 'Media_id',
      output: 'Output',
      status: 'Status',
      trace: 'Trace',
      traceId: 'Trace_id',
      userData: 'User_data',
      userId: 'User_id',
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

export class QueryImageCopyrightResponseBodyData extends $tea.Model {
  gmtCreate?: number;
  gmtModified?: number;
  input?: string;
  jobId?: string;
  level?: number;
  message?: string;
  messageId?: number;
  output?: string;
  status?: string;
  userData?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'Gmt_create',
      gmtModified: 'Gmt_modified',
      input: 'Input',
      jobId: 'Job_id',
      level: 'Level',
      message: 'Message',
      messageId: 'Message_id',
      output: 'Output',
      status: 'Status',
      userData: 'User_data',
      userId: 'User_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      input: 'string',
      jobId: 'string',
      level: 'number',
      message: 'string',
      messageId: 'number',
      output: 'string',
      status: 'string',
      userData: 'string',
      userId: 'number',
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
  status?: string;
  userData?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      gmtCreate: 'Gmt_create',
      gmtModified: 'Gmt_modified',
      input: 'Input',
      jobId: 'Job_id',
      level: 'Level',
      message: 'Message',
      messageId: 'Message_id',
      output: 'Output',
      status: 'Status',
      userData: 'User_data',
      userId: 'User_id',
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
      status: 'string',
      userData: 'string',
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTracemuResponseBodyData extends $tea.Model {
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

export class QueryTraceAbResponseBodyData extends $tea.Model {
  callback?: string;
  gmtCreate?: number;
  gmtModified?: number;
  input?: string;
  jobId?: string;
  level?: number;
  mediaId?: string;
  output?: string;
  status?: string;
  userData?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      gmtCreate: 'Gmt_create',
      gmtModified: 'Gmt_modified',
      input: 'Input',
      jobId: 'Job_id',
      level: 'Level',
      mediaId: 'Media_id',
      output: 'Output',
      status: 'Status',
      userData: 'User_data',
      userId: 'User_id',
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
      status: 'string',
      userData: 'string',
      userId: 'number',
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
    return $tea.cast<QueryTraceMuResponse>(await this.doROARequest("QueryTraceMu", "2021-07-28", "HTTPS", "POST", "AK", `/queryTraceM3u8`, "json", req, runtime), new QueryTraceMuResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<SubmitImageCopyrightResponse>(await this.doROARequest("SubmitImageCopyright", "2021-07-28", "HTTPS", "POST", "AK", `/submitImageCopyright`, "json", req, runtime), new SubmitImageCopyrightResponse({}));
  }

  async queryImageCopyright(request: QueryImageCopyrightRequest): Promise<QueryImageCopyrightResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.queryImageCopyrightWithOptions(request, headers, runtime);
  }

  async queryImageCopyrightWithOptions(request: QueryImageCopyrightRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<QueryImageCopyrightResponse> {
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
    return $tea.cast<QueryImageCopyrightResponse>(await this.doROARequest("QueryImageCopyright", "2021-07-28", "HTTPS", "POST", "AK", `/queryImageCopyright`, "json", req, runtime), new QueryImageCopyrightResponse({}));
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
    return $tea.cast<QueryCopyrightResponse>(await this.doROARequest("QueryCopyright", "2021-07-28", "HTTPS", "POST", "AK", `/queryCopyrightJob`, "json", req, runtime), new QueryCopyrightResponse({}));
  }

  async submitTracemu(request: SubmitTracemuRequest): Promise<SubmitTracemuResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.submitTracemuWithOptions(request, headers, runtime);
  }

  async submitTracemuWithOptions(request: SubmitTracemuRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<SubmitTracemuResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
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
    return $tea.cast<SubmitTracemuResponse>(await this.doROARequest("SubmitTracemu", "2021-07-28", "HTTPS", "POST", "AK", `/submitTraceM3u8`, "json", req, runtime), new SubmitTracemuResponse({}));
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
    return $tea.cast<QueryTraceAbResponse>(await this.doROARequest("QueryTraceAb", "2021-07-28", "HTTPS", "POST", "AK", `/queryTraceAb`, "json", req, runtime), new QueryTraceAbResponse({}));
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

    if (!Util.isUnset(request.input)) {
      body["Input"] = request.input;
    }

    if (!Util.isUnset(request.level)) {
      body["Level"] = request.level;
    }

    if (!Util.isUnset(request.output)) {
      body["Output"] = request.output;
    }

    if (!Util.isUnset(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<SubmitTraceAbResponse>(await this.doROARequest("SubmitTraceAb", "2021-07-28", "HTTPS", "POST", "AK", `/submitTraceAb`, "json", req, runtime), new SubmitTraceAbResponse({}));
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

    if (!Util.isUnset(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<SubmitCopyrightJobResponse>(await this.doROARequest("SubmitCopyrightJob", "2021-07-28", "HTTPS", "POST", "AK", `/submitCopyrightJob`, "json", req, runtime), new SubmitCopyrightJobResponse({}));
  }

}
