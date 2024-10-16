// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AuthDiagnosisRequest extends $tea.Model {
  autoCreateRole?: boolean;
  autoInstallAgent?: boolean;
  instances?: AuthDiagnosisRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      autoCreateRole: 'autoCreateRole',
      autoInstallAgent: 'autoInstallAgent',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreateRole: 'boolean',
      autoInstallAgent: 'boolean',
      instances: { 'type': 'array', 'itemType': AuthDiagnosisRequestInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthDiagnosisResponseBody extends $tea.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * {}
   */
  data?: any;
  /**
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'any',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthDiagnosisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AuthDiagnosisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AuthDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCopilotResponseRequest extends $tea.Model {
  llmParamString?: string;
  static names(): { [key: string]: string } {
    return {
      llmParamString: 'llmParamString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmParamString: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCopilotResponseResponseBody extends $tea.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: string;
  /**
   * @example
   * Requests for llm service failed
   */
  massage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      massage: 'massage',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      massage: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCopilotResponseResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateCopilotResponseResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateCopilotResponseResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAbnormalEventsCountRequest extends $tea.Model {
  /**
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @example
   * 1725801327754
   */
  end?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * test-pod
   */
  pod?: string;
  /**
   * @example
   * 1725797727754
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      end: 'end',
      instance: 'instance',
      namespace: 'namespace',
      pod: 'pod',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      end: 'number',
      instance: 'string',
      namespace: 'string',
      pod: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAbnormalEventsCountResponseBody extends $tea.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetAbnormalEventsCountResponseBodyData[];
  /**
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetAbnormalEventsCountResponseBodyData },
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAbnormalEventsCountResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAbnormalEventsCountResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAbnormalEventsCountResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * quzuYl23
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultResponseBody extends $tea.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetDiagnosisResultResponseBodyData;
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * 9515E5A0-8905-59B0-9BBF-5F0BE568C3A0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetDiagnosisResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetDiagnosisResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDiagnosisResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthPercentageRequest extends $tea.Model {
  /**
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725801327754
   */
  end?: number;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725797727754
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      end: 'end',
      instance: 'instance',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      end: 'number',
      instance: 'string',
      start: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthPercentageResponseBody extends $tea.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: GetHealthPercentageResponseBodyData[];
  /**
   * @example
   * ""
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetHealthPercentageResponseBodyData },
      message: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthPercentageResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHealthPercentageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetHealthPercentageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cloud_assist
   */
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {
   *     "instance": "i-wz9gdv7qmdhusamc4dl01",
   *     "uid": "xxxxxxxxxxxxxx",
   *     "region": "cn-shenzhen"
   * }
   */
  params?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * memgraph
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      params: 'params',
      serviceName: 'service_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      params: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisResponseBody extends $tea.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: InvokeDiagnosisResponseBodyData;
  /**
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: InvokeDiagnosisResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvokeDiagnosisResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InvokeDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthDiagnosisRequestInstances extends $tea.Model {
  instance?: string;
  region?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      region: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAbnormalEventsCountResponseBodyData extends $tea.Model {
  /**
   * @example
   * health
   */
  type?: string;
  /**
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultResponseBodyData extends $tea.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  /**
   * @example
   * {
   *     "jobs":[
   *         {
   *             "cmd":"mkdir -p /var/log/sysak && sysak podmem -r 100  -a -j /var/log/sysak/podmem.json > /dev/null 2>&1 && cat /var/log/sysak/podmem.json",
   *             "instance":"172.20.12.174",
   *             "fetch_file_list":[
   * 
   *             ]
   *         }
   *     ],
   *     "in_order":true,
   *     "offline_mode":false,
   *     "offline_results":[
   * 
   *     ]
   * }
   */
  command?: any;
  createdAt?: string;
  /**
   * @example
   * Diagnosis failed
   */
  errMsg?: string;
  /**
   * @example
   * {
   *     "type":"all",
   *     "value":"",
   *     "channel":"ssh",
   *     "instance":"172.1.2.174",
   *     "service_name":"filecache"
   * }
   */
  params?: any;
  /**
   * @example
   * {
   *     "summary":"  memory cgroup leak",
   *     "dataMemEvent":{
   *         "data":[
   *             {
   *                 "key":"Util",
   *                 "value":20
   *             },
   *             {
   *                 "key":"MemLeak",
   *                 "value":"OK"
   *             },
   *             {
   *                 "key":"MemcgLeak",
   *                 "value":"NG"
   *             },
   *             {
   *                 "key":"MemFrag",
   *                 "value":"OK"
   *             }
   *         ]
   *     },
   *     "dataMemOverView":{
   *         "data":[
   *             {
   *                 "key":"app",
   *                 "value":10937332
   *             },
   *             {
   *                 "key":"free",
   *                 "value":806800
   *             },
   *             {
   *                 "key":"kernel",
   *                 "value":4527660
   *             }
   *         ]
   *     },
   *     "dataKerMem":{
   *         "data":[
   *             {
   *                 "key":"SReclaimable",
   *                 "value":3411292
   *             },
   *             {
   *                 "key":"VmallocUsed",
   *                 "value":30980
   *             },
   *             {
   *                 "key":"allocPage",
   *                 "value":177732
   *             },
   *             {
   *                 "key":"KernelStack",
   *                 "value":9280
   *             },
   *             {
   *                 "key":"PageTables",
   *                 "value":38056
   *             },
   *             {
   *                 "key":"SUnreclaim",
   *                 "value":170248
   *             },
   *             {
   *                 "key":"reserved",
   *                 "value":690072
   *             }
   *         ]
   *     },
   *     "dataUserMem":{
   *         "data":[
   *             {
   *                 "key":"filecache",
   *                 "value":8010008
   *             },
   *             {
   *                 "key":"anon",
   *                 "value":2468608
   *             },
   *             {
   *                 "key":"mlock",
   *                 "value":0
   *             },
   *             {
   *                 "key":"huge1G",
   *                 "value":0
   *             },
   *             {
   *                 "key":"huge2M",
   *                 "value":0
   *             },
   *             {
   *                 "key":"buffers",
   *                 "value":458608
   *             },
   *             {
   *                 "key":"shmem",
   *                 "value":2284
   *             }
   *         ]
   *     },
   *     "dataCacheList":{
   *         "data":[
   *             {
   *                 "key":0,
   *                 "Name":"/var/lib/mysql/sysom/sys_handler_log.ibd",
   *                 "cached":576764,
   *                 "Task":"mysqld_78575 "
   *             },
   *             {
   *                 "key":1,
   *                 "Name":"/var/log/sysom/sysom-migration-access.log",
   *                 "cached":276688,
   *                 "Task":"gunicorn_33647 ,gunicorn_460836 ,gunicorn_559934 ,gunicorn_731758 ,gunicorn_2362682 "
   *             },
   *             {
   *                 "key":2,
   *                 "Name":"/var/log/sysom/sysom-rtdemo-access.log",
   *                 "cached":229404,
   *                 "Task":"gunicorn_60718 ,gunicorn_720734 ,gunicorn_722168 "
   *             },
   *             {
   *                 "key":3,
   *                 "Name":"/var/log/sysom/sysom-monitor-server-access.log",
   *                 "cached":197368,
   *                 "Task":"gunicorn_33682 ,gunicorn_671155 ,gunicorn_714998 "
   *             },
   *             {
   *                 "key":4,
   *                 "Name":"/var/log/sysom/sysom-channel-access.log",
   *                 "cached":180276,
   *                 "Task":"gunicorn_33233 ,gunicorn_499735 ,gunicorn_725497 "
   *             },
   *             {
   *                 "key":5,
   *                 "Name":"total cached of close file",
   *                 "cached":3729668,
   *                 "Task":""
   *             }
   *         ]
   *     },
   *     "dataProcMemList":{
   *         "data":[
   *             {
   *                 "key":0,
   *                 "task":"mysqld",
   *                 "MemTotal":240856,
   *                 "RssAnon":218248,
   *                 "RssFile":22608
   *             },
   *             {
   *                 "key":1,
   *                 "task":"systemd-journal",
   *                 "MemTotal":150248,
   *                 "RssAnon":74300,
   *                 "RssFile":75944
   *             },
   *             {
   *                 "key":2,
   *                 "task":"gunicorn",
   *                 "MemTotal":144640,
   *                 "RssAnon":114200,
   *                 "RssFile":30440
   *             },
   *             {
   *                 "key":3,
   *                 "task":"gunicorn",
   *                 "MemTotal":141480,
   *                 "RssAnon":111040,
   *                 "RssFile":30440
   *             },
   *             {
   *                 "key":4,
   *                 "task":"grafana-server",
   *                 "MemTotal":103660,
   *                 "RssAnon":42732,
   *                 "RssFile":60928
   *             },
   *             {
   *                 "key":5,
   *                 "task":"gunicorn",
   *                 "MemTotal":97444,
   *                 "RssAnon":76256,
   *                 "RssFile":21188
   *             },
   *             {
   *                 "key":6,
   *                 "task":"gunicorn",
   *                 "MemTotal":97260,
   *                 "RssAnon":76072,
   *                 "RssFile":21188
   *             },
   *             {
   *                 "key":7,
   *                 "task":"prometheus",
   *                 "MemTotal":95356,
   *                 "RssAnon":45376,
   *                 "RssFile":49980
   *             },
   *             {
   *                 "key":8,
   *                 "task":"gunicorn",
   *                 "MemTotal":90144,
   *                 "RssAnon":76456,
   *                 "RssFile":13688
   *             },
   *             {
   *                 "key":9,
   *                 "task":"gunicorn",
   *                 "MemTotal":89796,
   *                 "RssAnon":76108,
   *                 "RssFile":13688
   *             }
   *         ]
   *     }
   * }
   */
  result?: any;
  /**
   * @example
   * memgraph
   */
  serviceName?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * grcuU21a
   */
  taskId?: string;
  updatedAt?: string;
  /**
   * @example
   * /diagnose/detail/qe3Z34sa
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      command: 'command',
      createdAt: 'created_at',
      errMsg: 'err_msg',
      params: 'params',
      result: 'result',
      serviceName: 'service_name',
      status: 'status',
      taskId: 'task_id',
      updatedAt: 'updated_at',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      command: 'any',
      createdAt: 'string',
      errMsg: 'string',
      params: 'any',
      result: 'any',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      updatedAt: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthPercentageResponseBodyData extends $tea.Model {
  /**
   * @example
   * health
   */
  type?: string;
  /**
   * @example
   * 1
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisResponseBodyData extends $tea.Model {
  /**
   * @example
   * ihqhAcrt
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
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
    this._endpoint = this.getEndpoint("sysom", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 授权 SysOM 对某个机器进行诊断
   * 
   * @param request - AuthDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthDiagnosisResponse
   */
  async authDiagnosisWithOptions(request: AuthDiagnosisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<AuthDiagnosisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoCreateRole)) {
      body["autoCreateRole"] = request.autoCreateRole;
    }

    if (!Util.isUnset(request.autoInstallAgent)) {
      body["autoInstallAgent"] = request.autoInstallAgent;
    }

    if (!Util.isUnset(request.instances)) {
      body["instances"] = request.instances;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AuthDiagnosis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/diagnosis/auth`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<AuthDiagnosisResponse>(await this.callApi(params, req, runtime), new AuthDiagnosisResponse({}));
  }

  /**
   * 授权 SysOM 对某个机器进行诊断
   * 
   * @param request - AuthDiagnosisRequest
   * @returns AuthDiagnosisResponse
   */
  async authDiagnosis(request: AuthDiagnosisRequest): Promise<AuthDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.authDiagnosisWithOptions(request, headers, runtime);
  }

  /**
   * 获取copilot服务的返回结果
   * 
   * @param request - GenerateCopilotResponseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCopilotResponseResponse
   */
  async generateCopilotResponseWithOptions(request: GenerateCopilotResponseRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GenerateCopilotResponseResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.llmParamString)) {
      body["llmParamString"] = request.llmParamString;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "GenerateCopilotResponse",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/copilot/generate_copilot_response`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GenerateCopilotResponseResponse>(await this.callApi(params, req, runtime), new GenerateCopilotResponseResponse({}));
  }

  /**
   * 获取copilot服务的返回结果
   * 
   * @param request - GenerateCopilotResponseRequest
   * @returns GenerateCopilotResponseResponse
   */
  async generateCopilotResponse(request: GenerateCopilotResponseRequest): Promise<GenerateCopilotResponseResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateCopilotResponseWithOptions(request, headers, runtime);
  }

  /**
   * 获取节点/Pod不同等级异常事件的数量
   * 
   * @param request - GetAbnormalEventsCountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAbnormalEventsCountResponse
   */
  async getAbnormalEventsCountWithOptions(request: GetAbnormalEventsCountRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAbnormalEventsCountResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!Util.isUnset(request.end)) {
      query["end"] = request.end;
    }

    if (!Util.isUnset(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!Util.isUnset(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!Util.isUnset(request.pod)) {
      query["pod"] = request.pod;
    }

    if (!Util.isUnset(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAbnormalEventsCount",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/abnormaly_events_count`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAbnormalEventsCountResponse>(await this.callApi(params, req, runtime), new GetAbnormalEventsCountResponse({}));
  }

  /**
   * 获取节点/Pod不同等级异常事件的数量
   * 
   * @param request - GetAbnormalEventsCountRequest
   * @returns GetAbnormalEventsCountResponse
   */
  async getAbnormalEventsCount(request: GetAbnormalEventsCountRequest): Promise<GetAbnormalEventsCountResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAbnormalEventsCountWithOptions(request, headers, runtime);
  }

  /**
   * 获取诊断结果
   * 
   * @param request - GetDiagnosisResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDiagnosisResultResponse
   */
  async getDiagnosisResultWithOptions(request: GetDiagnosisResultRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDiagnosisResultResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDiagnosisResult",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/diagnosis/get_diagnosis_results`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDiagnosisResultResponse>(await this.callApi(params, req, runtime), new GetDiagnosisResultResponse({}));
  }

  /**
   * 获取诊断结果
   * 
   * @param request - GetDiagnosisResultRequest
   * @returns GetDiagnosisResultResponse
   */
  async getDiagnosisResult(request: GetDiagnosisResultRequest): Promise<GetDiagnosisResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDiagnosisResultWithOptions(request, headers, runtime);
  }

  /**
   * 获取一段时间的节点/pod健康度比例
   * 
   * @param request - GetHealthPercentageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHealthPercentageResponse
   */
  async getHealthPercentageWithOptions(request: GetHealthPercentageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetHealthPercentageResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!Util.isUnset(request.end)) {
      query["end"] = request.end;
    }

    if (!Util.isUnset(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!Util.isUnset(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHealthPercentage",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/health_percentage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetHealthPercentageResponse>(await this.callApi(params, req, runtime), new GetHealthPercentageResponse({}));
  }

  /**
   * 获取一段时间的节点/pod健康度比例
   * 
   * @param request - GetHealthPercentageRequest
   * @returns GetHealthPercentageResponse
   */
  async getHealthPercentage(request: GetHealthPercentageRequest): Promise<GetHealthPercentageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHealthPercentageWithOptions(request, headers, runtime);
  }

  /**
   * 发起诊断
   * 
   * @param request - InvokeDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeDiagnosisResponse
   */
  async invokeDiagnosisWithOptions(request: InvokeDiagnosisRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<InvokeDiagnosisResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!Util.isUnset(request.params)) {
      body["params"] = request.params;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["service_name"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "InvokeDiagnosis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/diagnosis/invoke_diagnosis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<InvokeDiagnosisResponse>(await this.callApi(params, req, runtime), new InvokeDiagnosisResponse({}));
  }

  /**
   * 发起诊断
   * 
   * @param request - InvokeDiagnosisRequest
   * @returns InvokeDiagnosisResponse
   */
  async invokeDiagnosis(request: InvokeDiagnosisRequest): Promise<InvokeDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.invokeDiagnosisWithOptions(request, headers, runtime);
  }

}
