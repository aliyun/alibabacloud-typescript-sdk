// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class AuthDiagnosisRequestInstances extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAbnormalEventsCountResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyDataVersions extends $dara.Model {
  createdAt?: string;
  installScript?: string;
  uninstallScript?: string;
  updatedAt?: string;
  upgradeScript?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      installScript: 'install_script',
      uninstallScript: 'uninstall_script',
      updatedAt: 'updated_at',
      upgradeScript: 'upgrade_script',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      installScript: 'string',
      uninstallScript: 'string',
      updatedAt: 'string',
      upgradeScript: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBodyData extends $dara.Model {
  createdAt?: string;
  description?: string;
  id?: string;
  name?: string;
  supportArch?: string;
  type?: string;
  updatedAt?: string;
  versions?: GetAgentResponseBodyDataVersions[];
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      id: 'id',
      name: 'name',
      supportArch: 'support_arch',
      type: 'type',
      updatedAt: 'updated_at',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      supportArch: 'string',
      type: 'string',
      updatedAt: 'string',
      versions: { 'type': 'array', 'itemType': GetAgentResponseBodyDataVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResponseBodyDataJobs extends $dara.Model {
  error?: string;
  instance?: string;
  params?: any;
  region?: string;
  result?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      instance: 'instance',
      params: 'params',
      region: 'region',
      result: 'result',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'string',
      instance: 'string',
      params: 'any',
      region: 'string',
      result: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResponseBodyData extends $dara.Model {
  jobs?: GetAgentTaskResponseBodyDataJobs[];
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'jobs',
      taskId: 'task_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': GetAgentTaskResponseBodyDataJobs },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCopilotHistoryResponseBodyData extends $dara.Model {
  content?: string;
  /**
   * @example
   * 2024-09-02 10:02:39
   */
  time?: string;
  /**
   * @example
   * user
   * copilot
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      time: 'time',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      time: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthPercentageResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostCountResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1725797727754
   */
  time?: number;
  /**
   * @example
   * 5
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'time',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotSpotUniqListResponseBodyData extends $dara.Model {
  columns?: string[];
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotCompareResponseBodyDataFlame extends $dara.Model {
  columns?: string[];
  values?: string[][];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotCompareResponseBodyDataSeriesInstance1 extends $dara.Model {
  columns?: string[];
  values?: string[][];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotCompareResponseBodyDataSeriesInstance2 extends $dara.Model {
  columns?: string[];
  values?: string[][];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotCompareResponseBodyData extends $dara.Model {
  flame?: GetHotspotCompareResponseBodyDataFlame;
  seriesInstance1?: GetHotspotCompareResponseBodyDataSeriesInstance1;
  seriesInstance2?: GetHotspotCompareResponseBodyDataSeriesInstance2;
  static names(): { [key: string]: string } {
    return {
      flame: 'flame',
      seriesInstance1: 'series_instance1',
      seriesInstance2: 'series_instance2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flame: GetHotspotCompareResponseBodyDataFlame,
      seriesInstance1: GetHotspotCompareResponseBodyDataSeriesInstance1,
      seriesInstance2: GetHotspotCompareResponseBodyDataSeriesInstance2,
    };
  }

  validate() {
    if(this.flame && typeof (this.flame as any).validate === 'function') {
      (this.flame as any).validate();
    }
    if(this.seriesInstance1 && typeof (this.seriesInstance1 as any).validate === 'function') {
      (this.seriesInstance1 as any).validate();
    }
    if(this.seriesInstance2 && typeof (this.seriesInstance2 as any).validate === 'function') {
      (this.seriesInstance2 as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotInstanceListResponseBodyData extends $dara.Model {
  columns?: string[];
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotPidListResponseBodyData extends $dara.Model {
  columns?: string[];
  values?: string[][];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTrackingResponseBodyDataFlame extends $dara.Model {
  columns?: string[];
  values?: string[][];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTrackingResponseBodyDataSeries extends $dara.Model {
  columns?: string[];
  values?: string[][];
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTrackingResponseBodyData extends $dara.Model {
  flame?: GetHotspotTrackingResponseBodyDataFlame;
  series?: GetHotspotTrackingResponseBodyDataSeries;
  static names(): { [key: string]: string } {
    return {
      flame: 'flame',
      series: 'series',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flame: GetHotspotTrackingResponseBodyDataFlame,
      series: GetHotspotTrackingResponseBodyDataSeries,
    };
  }

  validate() {
    if(this.flame && typeof (this.flame as any).validate === 'function') {
      (this.flame as any).validate();
    }
    if(this.series && typeof (this.series as any).validate === 'function') {
      (this.series as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstantScoreResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  error?: number;
  /**
   * @example
   * 100
   */
  latency?: number;
  /**
   * @example
   * 100
   */
  load?: number;
  /**
   * @example
   * 100
   */
  saturation?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      error: 'error',
      latency: 'latency',
      load: 'load',
      saturation: 'saturation',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      error: 'number',
      latency: 'number',
      load: 'number',
      saturation: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  /**
   * @example
   * 2024-12-24 12:02:05
   */
  analysisTime?: string;
  /**
   * @example
   * timeout=2000 ms
   */
  arguments?: string;
  failedLog?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
      analysisTime: 'analysisTime',
      arguments: 'arguments',
      failedLog: 'failedLog',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'string',
      analysisTime: 'string',
      arguments: 'string',
      failedLog: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPercentageResponseBodyData extends $dara.Model {
  /**
   * @example
   * saturation
   */
  type?: string;
  /**
   * @example
   * 5
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRangeScoreResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1725797727754
   */
  time?: number;
  /**
   * @example
   * saturation
   */
  type?: string;
  /**
   * @example
   * 100
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'time',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      type: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2354
   */
  total?: number;
  /**
   * @example
   * Kbytes
   */
  unit?: string;
  /**
   * @example
   * 100
   */
  usage?: number;
  static names(): { [key: string]: string } {
    return {
      total: 'total',
      unit: 'unit',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      total: 'number',
      unit: 'string',
      usage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceFuncStatusRequestParams extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mullprof
   */
  functionName?: string;
  /**
   * @example
   * i-2zei55fwj8nnu31h3z46
   */
  instance?: string;
  /**
   * @example
   * 1338904783509062
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'function_name',
      instance: 'instance',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      instance: 'string',
      uid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceFuncStatusResponseBodyDataArgs extends $dara.Model {
  /**
   * @example
   * java
   */
  addCmd?: string;
  /**
   * @example
   * true
   */
  cpu?: string;
  /**
   * @example
   * /tmp/sysom/java-profiler
   */
  javaStorePath?: string;
  /**
   * @example
   * true
   */
  locks?: string;
  /**
   * @example
   * -1
   */
  loop?: number;
  /**
   * @example
   * true
   */
  mem?: string;
  /**
   * @example
   * true
   */
  systemProfiling?: string;
  static names(): { [key: string]: string } {
    return {
      addCmd: 'add_cmd',
      cpu: 'cpu',
      javaStorePath: 'java_store_path',
      locks: 'locks',
      loop: 'loop',
      mem: 'mem',
      systemProfiling: 'system_profiling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCmd: 'string',
      cpu: 'string',
      javaStorePath: 'string',
      locks: 'string',
      loop: 'number',
      mem: 'string',
      systemProfiling: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceFuncStatusResponseBodyData extends $dara.Model {
  args?: GetServiceFuncStatusResponseBodyDataArgs;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: GetServiceFuncStatusResponseBodyDataArgs,
    };
  }

  validate() {
    if(this.args && typeof (this.args as any).validate === 'function') {
      (this.args as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitialSysomResponseBodyData extends $dara.Model {
  roleExist?: boolean;
  static names(): { [key: string]: string } {
    return {
      roleExist: 'role_exist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleExist: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentRequestInstances extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-wz9b9vucz1iubsz8sjqo
   */
  instance?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentForClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * 049ea0609515414b9e19c3389d7ba638
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAbnormalyEventsResponseBodyDataOpts extends $dara.Model {
  /**
   * @example
   * diagnose
   */
  label?: string;
  /**
   * @example
   * "{\\"service_name\\": \\"oomcheck\\", \\"params\\": {\\"auto_initial\\": true, \\"instance\\": \\"i-wz9d00ut2ska3mlyhn6i\\", \\"region\\": \\"cn-shenzhen\\", \\"uuid\\": \\"24576d0c-a19d-49dd-8a64-3867440fd7a6\\", \\"is_history\\": 1}}"
   */
  params?: string;
  /**
   * @example
   * realtime
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'label',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      params: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAbnormalyEventsResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1725801090000
   */
  createdAt?: number;
  description?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  item?: string;
  opts?: ListAbnormalyEventsResponseBodyDataOpts;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * saturation
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      id: 'id',
      instance: 'instance',
      item: 'item',
      opts: 'opts',
      regionId: 'region_id',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      description: 'string',
      id: 'string',
      instance: 'string',
      item: 'string',
      opts: ListAbnormalyEventsResponseBodyDataOpts,
      regionId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.opts && typeof (this.opts as any).validate === 'function') {
      (this.opts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentInstallRecordsResponseBodyData extends $dara.Model {
  createdAt?: string;
  instanceId?: string;
  pluginId?: string;
  pluginVersion?: string;
  status?: string;
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      instanceId: 'instance_id',
      pluginId: 'plugin_id',
      pluginVersion: 'plugin_version',
      status: 'status',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      instanceId: 'string',
      pluginId: 'string',
      pluginVersion: 'string',
      status: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponseBodyDataVersions extends $dara.Model {
  createdAt?: string;
  installScript?: string;
  uninstallScript?: string;
  updatedAt?: string;
  upgradeScript?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      installScript: 'install_script',
      uninstallScript: 'uninstall_script',
      updatedAt: 'updated_at',
      upgradeScript: 'upgrade_script',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      installScript: 'string',
      uninstallScript: 'string',
      updatedAt: 'string',
      upgradeScript: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponseBodyData extends $dara.Model {
  createdAt?: string;
  description?: string;
  id?: string;
  /**
   * @example
   * SysOM Agent
   */
  name?: string;
  /**
   * @example
   * x86
   */
  supportArch?: string;
  /**
   * @example
   * Control
   */
  type?: string;
  updatedAt?: string;
  versions?: ListAgentsResponseBodyDataVersions[];
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      id: 'id',
      name: 'name',
      supportArch: 'support_arch',
      type: 'type',
      updatedAt: 'updated_at',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      supportArch: 'string',
      type: 'string',
      updatedAt: 'string',
      versions: { 'type': 'array', 'itemType': ListAgentsResponseBodyDataVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterAgentInstallRecordsResponseBodyData extends $dara.Model {
  /**
   * @example
   * cbf7a37bc905d4682a3338b3744810269
   */
  clusterId?: string;
  /**
   * @example
   * 2024-12-25T15:08:19
   */
  createdAt?: string;
  grayscaleConfig?: string;
  /**
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @example
   * 3.4.0-1
   */
  pluginVersion?: string;
  /**
   * @example
   * 2024-12-25T15:08:19
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      createdAt: 'created_at',
      grayscaleConfig: 'grayscale_config',
      pluginId: 'plugin_id',
      pluginVersion: 'plugin_version',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createdAt: 'string',
      grayscaleConfig: 'string',
      pluginId: 'string',
      pluginVersion: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyData extends $dara.Model {
  /**
   * @example
   * c666d4774f0e2440b979bf917bf100e40
   */
  clusterId?: string;
  /**
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @example
   * 2024-12-25T15:08:19
   */
  createdAt?: string;
  /**
   * @example
   * 5389fba5-92a1-4ff4-9b26-773b97828144
   */
  id?: string;
  /**
   * @example
   * auto-name-sbvCT
   */
  name?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * 2024-12-25T15:08:19
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterStatus: 'cluster_status',
      clusterType: 'cluster_type',
      createdAt: 'created_at',
      id: 'id',
      name: 'name',
      region: 'region',
      updatedAt: 'updated_at',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterStatus: 'string',
      clusterType: 'string',
      createdAt: 'string',
      id: 'string',
      name: 'string',
      region: 'string',
      updatedAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosisResponseBodyData extends $dara.Model {
  code?: number;
  command?: any;
  createdAt?: string;
  errMsg?: string;
  params?: any;
  result?: any;
  serviceName?: string;
  status?: string;
  taskId?: string;
  updatedAt?: string;
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceHealthResponseBodyData extends $dara.Model {
  images?: string[];
  /**
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
   * cn-shenzhen
   */
  regionId?: string;
  /**
   * @example
   * 100
   */
  score?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'images',
      instance: 'instance',
      namespace: 'namespace',
      pod: 'pod',
      regionId: 'region_id',
      score: 'score',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': 'string' },
      instance: 'string',
      namespace: 'string',
      pod: 'string',
      regionId: 'string',
      score: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusResponseBodyData extends $dara.Model {
  instance?: string;
  region?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyData extends $dara.Model {
  clusterId?: string;
  instance?: string;
  kernelVersion?: string;
  meta?: any;
  osArch?: string;
  osHealthScore?: string;
  osName?: string;
  osNameId?: string;
  osVersion?: string;
  osVersionId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      instance: 'instance',
      kernelVersion: 'kernel_version',
      meta: 'meta',
      osArch: 'os_arch',
      osHealthScore: 'os_health_score',
      osName: 'os_name',
      osNameId: 'os_name_id',
      osVersion: 'os_version',
      osVersionId: 'os_version_id',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: 'string',
      kernelVersion: 'string',
      meta: 'any',
      osArch: 'string',
      osHealthScore: 'string',
      osName: 'string',
      osNameId: 'string',
      osVersion: 'string',
      osVersionId: 'string',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesEcsInfoListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 11.193.52.91
   */
  ip?: string;
  /**
   * @example
   * sysom
   */
  tagKey?: string;
  /**
   * @example
   * diagnosis
   */
  tagValue?: string;
  /**
   * @example
   * public
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      tagKey: 'tag_key',
      tagValue: 'tag_value',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      tagKey: 'string',
      tagValue: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesWithEcsInfoRequestInstanceTag extends $dara.Model {
  /**
   * @example
   * feature_dim_radar_chart
   */
  key?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class ListInstancesWithEcsInfoResponseBodyDataInstanceTag extends $dara.Model {
  /**
   * @example
   * test_tag_key
   */
  tagKey?: string;
  /**
   * @example
   * test_tag_value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tag_key',
      tagValue: 'tag_value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesWithEcsInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * cbf7a37bc905d4682a3338b3744810269
   */
  clusterId?: string;
  /**
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @example
   * allowed-repos-r2tzl
   */
  instanceName?: string;
  instanceTag?: ListInstancesWithEcsInfoResponseBodyDataInstanceTag[];
  /**
   * @example
   * x86
   */
  osArch?: string;
  /**
   * @example
   * 100
   */
  osHealthScore?: string;
  /**
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64bit
   */
  osName?: string;
  /**
   * @example
   * 1.1.1.1
   */
  privateIp?: string;
  /**
   * @example
   * 1.1.1.1
   */
  publicIp?: string;
  /**
   * @example
   * rg-xxxxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * default resource group
   */
  resourceGroupName?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      instanceId: 'instance_id',
      instanceName: 'instance_name',
      instanceTag: 'instance_tag',
      osArch: 'os_arch',
      osHealthScore: 'os_health_score',
      osName: 'os_name',
      privateIp: 'private_ip',
      publicIp: 'public_ip',
      resourceGroupId: 'resource_group_id',
      resourceGroupName: 'resource_group_name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceTag: { 'type': 'array', 'itemType': ListInstancesWithEcsInfoResponseBodyDataInstanceTag },
      osArch: 'string',
      osHealthScore: 'string',
      osName: 'string',
      privateIp: 'string',
      publicIp: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTag)) {
      $dara.Model.validateArray(this.instanceTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsInstancesResponseBodyDataInstanceTag extends $dara.Model {
  /**
   * @example
   * test_tag_key
   */
  tagKey?: string;
  /**
   * @example
   * test_tag_value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'tag_key',
      tagValue: 'tag_value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsInstancesResponseBodyData extends $dara.Model {
  /**
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @example
   * allowed-repos-qmf8w
   */
  instanceName?: string;
  instanceTag?: ListPluginsInstancesResponseBodyDataInstanceTag[];
  /**
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64 bit
   */
  osName?: string;
  /**
   * @example
   * 1.1.1.1
   */
  privateIp?: string;
  /**
   * @example
   * 1.1.1.1
   */
  publicIp?: string;
  /**
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @example
   * rg-xxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * default resource group
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instance_id',
      instanceName: 'instance_name',
      instanceTag: 'instance_tag',
      osName: 'os_name',
      privateIp: 'private_ip',
      publicIp: 'public_ip',
      region: 'region',
      resourceGroupId: 'resource_group_id',
      resourceGroupName: 'resource_group_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      instanceTag: { 'type': 'array', 'itemType': ListPluginsInstancesResponseBodyDataInstanceTag },
      osName: 'string',
      privateIp: 'string',
      publicIp: 'string',
      region: 'string',
      resourceGroupId: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceTag)) {
      $dara.Model.validateArray(this.instanceTag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPodsOfInstanceResponseBodyData extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      pod: 'pod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      pod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAIAnalysisResponseBodyData extends $dara.Model {
  /**
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysis_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAgentRequestInstances extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-wz9b9vucz1iubsz8sjqo
   */
  instance?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAgentResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAgentForClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * 049ea0609515414b9e19c3389d7ba638
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventsAttentionRequestBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  mode?: number;
  /**
   * @example
   * cluster
   */
  range?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 03de78af-f49f-433d-b5b1-0f6a70c493ba
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
      range: 'range',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'number',
      range: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventsAttentionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  mode?: number;
  static names(): { [key: string]: string } {
    return {
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFuncSwitchRecordRequestParamsArgs extends $dara.Model {
  /**
   * @example
   * java
   */
  addCmd?: string;
  /**
   * @example
   * true
   */
  cpu?: string;
  /**
   * @example
   * /tmp/sysom/java-profiler
   */
  javaStorePath?: string;
  /**
   * @example
   * true
   */
  locks?: string;
  /**
   * @example
   * -1
   */
  loop?: number;
  /**
   * @example
   * true
   */
  mem?: string;
  /**
   * @example
   * true
   */
  systemProfiling?: string;
  static names(): { [key: string]: string } {
    return {
      addCmd: 'add_cmd',
      cpu: 'cpu',
      javaStorePath: 'java_store_path',
      locks: 'locks',
      loop: 'loop',
      mem: 'mem',
      systemProfiling: 'system_profiling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addCmd: 'string',
      cpu: 'string',
      javaStorePath: 'string',
      locks: 'string',
      loop: 'number',
      mem: 'string',
      systemProfiling: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFuncSwitchRecordRequestParams extends $dara.Model {
  args?: UpdateFuncSwitchRecordRequestParamsArgs;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mullprof
   */
  functionName?: string;
  /**
   * @example
   * i-2zei55fwj8nnu31h3z46
   */
  instance?: string;
  /**
   * @example
   * restart
   */
  op?: string;
  /**
   * @example
   * 1664516888213680
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      functionName: 'function_name',
      instance: 'instance',
      op: 'op',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: UpdateFuncSwitchRecordRequestParamsArgs,
      functionName: 'string',
      instance: 'string',
      op: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.args && typeof (this.args as any).validate === 'function') {
      (this.args as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFuncSwitchRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * 63fc5acb99e642d793f42912612e8001
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeAgentRequestInstances extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-wz9b9vucz1iubsz8sjqo
   */
  instance?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeAgentResponseBodyData extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeAgentForClusterResponseBodyData extends $dara.Model {
  /**
   * @example
   * 7523e9e0ddc74d99a5236f4f4d5056e6
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthDiagnosisRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthDiagnosisResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthDiagnosisResponse extends $dara.Model {
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

export class GenerateCopilotResponseRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCopilotResponseResponseBody extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCopilotResponseResponse extends $dara.Model {
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

export class GenerateCopilotStreamResponseRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateCopilotStreamResponseResponseBody extends $dara.Model {
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
  message?: string;
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
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
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

export class GenerateCopilotStreamResponseResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GenerateCopilotStreamResponseResponseBody;
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
      body: GenerateCopilotStreamResponseResponseBody,
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

export class GetAIQueryResultRequest extends $dara.Model {
  /**
   * @example
   * 16896fa8-37f6-4c70-bb32-67fa9817d426
   */
  analysisId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisId: 'analysisId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAIQueryResultResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * {\\"task_id\\": \\"y4ba8uRV\\"}
   */
  data?: string;
  message?: string;
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
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
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

export class GetAIQueryResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAIQueryResultResponseBody;
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
      body: GetAIQueryResultResponseBody,
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

export class GetAbnormalEventsCountRequest extends $dara.Model {
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
  showPod?: number;
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
      showPod: 'showPod',
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
      showPod: 'number',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAbnormalEventsCountResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAbnormalEventsCountResponse extends $dara.Model {
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

export class GetAgentRequest extends $dara.Model {
  agentId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetAgentResponseBodyData;
  /**
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: GetAgentResponseBodyData,
      message: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgentResponseBody;
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
      body: GetAgentResponseBody,
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

export class GetAgentTaskRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetAgentTaskResponseBodyData;
  /**
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: GetAgentTaskResponseBodyData,
      message: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAgentTaskResponseBody;
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
      body: GetAgentTaskResponseBody,
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

export class GetCopilotHistoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 100
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCopilotHistoryResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.InvalidParameter
   */
  code?: string;
  data?: GetCopilotHistoryResponseBodyData[];
  /**
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
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
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetCopilotHistoryResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCopilotHistoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCopilotHistoryResponseBody;
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
      body: GetCopilotHistoryResponseBody,
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

export class GetDiagnosisResultRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDiagnosisResultResponse extends $dara.Model {
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

export class GetHealthPercentageRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthPercentageResponseBody extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHealthPercentageResponse extends $dara.Model {
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

export class GetHostCountRequest extends $dara.Model {
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
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostCountResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetHostCountResponseBodyData[];
  /**
   * @example
   * “”
   */
  message?: string;
  /**
   * @example
   * 43A910E9-A739-525E-855D-A32C257F1826
   */
  requestId?: string;
  /**
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetHostCountResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHostCountResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHostCountResponseBody;
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
      body: GetHostCountResponseBody,
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

export class GetHotSpotUniqListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1735010351000
   */
  begEnd?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1735008551000
   */
  begStart?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-bp1g2i0siirefgwnnnvy
   */
  instance?: string;
  /**
   * @example
   * 12345
   */
  pid?: number;
  /**
   * @example
   * prof_on
   */
  table?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  uniq?: string;
  static names(): { [key: string]: string } {
    return {
      begEnd: 'beg_end',
      begStart: 'beg_start',
      instance: 'instance',
      pid: 'pid',
      table: 'table',
      uniq: 'uniq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begEnd: 'number',
      begStart: 'number',
      instance: 'string',
      pid: 'number',
      table: 'string',
      uniq: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotSpotUniqListResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetHotSpotUniqListResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotSpotUniqListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotSpotUniqListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotSpotUniqListResponseBody;
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
      body: GetHotSpotUniqListResponseBody,
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

export class GetHotspotAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * GR
   */
  appType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725413948000
   */
  begEnd?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725410348000
   */
  begStart?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-2ze5ru5rjurix7f71sxv
   */
  instance?: string;
  /**
   * @example
   * 1657494
   */
  pid?: number;
  /**
   * @example
   * prof_on
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      begEnd: 'beg_end',
      begStart: 'beg_start',
      instance: 'instance',
      pid: 'pid',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      begEnd: 'number',
      begStart: 'number',
      instance: 'string',
      pid: 'number',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotAnalysisResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotAnalysisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotspotAnalysisResponseBody;
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
      body: GetHotspotAnalysisResponseBody,
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

export class GetHotspotCompareRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725415774000
   */
  beg1End?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725415474000
   */
  beg1Start?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725415774000
   */
  beg2End?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725415474000
   */
  beg2Start?: number;
  hotType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-2zei55fwj8nnu31h3z46"
   */
  instance1?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  instance2?: string;
  /**
   * @example
   * 0
   */
  pid1?: number;
  /**
   * @example
   * i-2zei55fwj8nnu31h3z46
   */
  pid2?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prof_on
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      beg1End: 'beg1_end',
      beg1Start: 'beg1_start',
      beg2End: 'beg2_end',
      beg2Start: 'beg2_start',
      hotType: 'hot_type',
      instance1: 'instance1',
      instance2: 'instance2',
      pid1: 'pid1',
      pid2: 'pid2',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beg1End: 'number',
      beg1Start: 'number',
      beg2End: 'number',
      beg2Start: 'number',
      hotType: 'string',
      instance1: 'string',
      instance2: 'string',
      pid1: 'number',
      pid2: 'number',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotCompareResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: GetHotspotCompareResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotspotCompareResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotCompareResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotspotCompareResponseBody;
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
      body: GetHotspotCompareResponseBody,
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

export class GetHotspotInstanceListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725413947000
   */
  begEnd?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725413647000
   */
  begStart?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prof_on
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      begEnd: 'beg_end',
      begStart: 'beg_start',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begEnd: 'number',
      begStart: 'number',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotInstanceListResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: GetHotspotInstanceListResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
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
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotspotInstanceListResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotInstanceListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotspotInstanceListResponseBody;
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
      body: GetHotspotInstanceListResponseBody,
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

export class GetHotspotPidListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725413947000
   */
  begEnd?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725413647000
   */
  begStart?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-2ze5ru5rjurix7f71sxv
   */
  instance?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prof_on
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      begEnd: 'beg_end',
      begStart: 'beg_start',
      instance: 'instance',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begEnd: 'number',
      begStart: 'number',
      instance: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotPidListResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.InvalidParameter
   */
  code?: string;
  data?: GetHotspotPidListResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
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
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotspotPidListResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotPidListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotspotPidListResponseBody;
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
      body: GetHotspotPidListResponseBody,
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

export class GetHotspotTrackingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725413948000
   */
  begEnd?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725410348000
   */
  begStart?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  hotType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-2ze5ru5rjurix7f71sxv
   */
  instance?: string;
  /**
   * @example
   * 1657494
   */
  pid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prof_on
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      begEnd: 'beg_end',
      begStart: 'beg_start',
      hotType: 'hot_type',
      instance: 'instance',
      pid: 'pid',
      table: 'table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      begEnd: 'number',
      begStart: 'number',
      hotType: 'string',
      instance: 'string',
      pid: 'number',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTrackingResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: GetHotspotTrackingResponseBodyData;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetHotspotTrackingResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHotspotTrackingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetHotspotTrackingResponseBody;
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
      body: GetHotspotTrackingResponseBody,
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

export class GetInstantScoreRequest extends $dara.Model {
  /**
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      instance: 'instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      instance: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstantScoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * 集群ID
   * 
   * @example
   * Success
   */
  code?: string;
  data?: GetInstantScoreResponseBodyData;
  /**
   * @example
   * Query no data
   */
  message?: string;
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
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetInstantScoreResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstantScoreResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetInstantScoreResponseBody;
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
      body: GetInstantScoreResponseBody,
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

export class GetListRecordRequest extends $dara.Model {
  /**
   * @example
   * 5
   */
  current?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
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

export class GetListRecordResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetListRecordResponseBodyData[];
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  /**
   * @example
   * 19
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetListRecordResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetListRecordResponseBody;
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
      body: GetListRecordResponseBody,
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

export class GetProblemPercentageRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPercentageResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetProblemPercentageResponseBodyData[];
  /**
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
  /**
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @example
   * 19
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetProblemPercentageResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProblemPercentageResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetProblemPercentageResponseBody;
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
      body: GetProblemPercentageResponseBody,
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

export class GetRangeScoreRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRangeScoreResponseBody extends $dara.Model {
  /**
   * @remarks
   * 代表资源一级ID的资源属性字段
   * 
   * @example
   * Success
   */
  code?: string;
  data?: GetRangeScoreResponseBodyData[];
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': GetRangeScoreResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRangeScoreResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetRangeScoreResponseBody;
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
      body: GetRangeScoreResponseBody,
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

export class GetResourcesRequest extends $dara.Model {
  /**
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @example
   * mem
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      instance: 'instance',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      instance: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetResourcesResponseBodyData;
  /**
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
  /**
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
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
      data: GetResourcesResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourcesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetResourcesResponseBody;
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
      body: GetResourcesResponseBody,
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

export class GetServiceFuncStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  params?: GetServiceFuncStatusRequestParams;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * livetrace
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
      params: GetServiceFuncStatusRequestParams,
      serviceName: 'string',
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceFuncStatusShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  paramsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * livetrace
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      paramsShrink: 'params',
      serviceName: 'service_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      paramsShrink: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceFuncStatusResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: GetServiceFuncStatusResponseBodyData;
  message?: string;
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
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetServiceFuncStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceFuncStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetServiceFuncStatusResponseBody;
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
      body: GetServiceFuncStatusResponseBody,
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

export class InitialSysomRequest extends $dara.Model {
  checkOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkOnly: 'check_only',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitialSysomResponseBody extends $dara.Model {
  requestId?: string;
  code?: string;
  data?: InitialSysomResponseBodyData;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: InitialSysomResponseBodyData,
      message: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitialSysomResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InitialSysomResponseBody;
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
      body: InitialSysomResponseBody,
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

export class InstallAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  agentVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * InstallAndUpgrade
   */
  installType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instances?: InstallAgentRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      installType: 'install_type',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      installType: 'string',
      instances: { 'type': 'array', 'itemType': InstallAgentRequestInstances },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: InstallAgentResponseBodyData;
  /**
   * @example
   * ""
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: InstallAgentResponseBodyData,
      message: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallAgentResponseBody;
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
      body: InstallAgentResponseBody,
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

export class InstallAgentForClusterRequest extends $dara.Model {
  /**
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @example
   * 3.4.0-1
   */
  agentVersion?: string;
  /**
   * @example
   * c9d7f3fc3d42942afbcb65c1100ffb19d
   */
  clusterId?: string;
  grayscaleConfig?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      clusterId: 'cluster_id',
      grayscaleConfig: 'grayscale_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      clusterId: 'string',
      grayscaleConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentForClusterResponseBody extends $dara.Model {
  /**
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: InstallAgentForClusterResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: InstallAgentForClusterResponseBodyData,
      message: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAgentForClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallAgentForClusterResponseBody;
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
      body: InstallAgentForClusterResponseBody,
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

export class InvokeAnomalyDiagnosisRequest extends $dara.Model {
  /**
   * @example
   * 8047d763-5465-4a8c-b1cd-23f5a8ba2594
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeAnomalyDiagnosisResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
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
      message: 'message',
      requestId: 'requestId',
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

export class InvokeAnomalyDiagnosisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InvokeAnomalyDiagnosisResponseBody;
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
      body: InvokeAnomalyDiagnosisResponseBody,
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

export class InvokeDiagnosisRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisResponseBody extends $dara.Model {
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeDiagnosisResponse extends $dara.Model {
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

export class ListAbnormalyEventsRequest extends $dara.Model {
  /**
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
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
   * @example
   * potential
   */
  level?: string;
  /**
   * @example
   * default
   */
  namespace?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * test-pod
   */
  pod?: string;
  /**
   * @example
   * 1
   */
  showPod?: number;
  /**
   * @example
   * 1725797727754
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      current: 'current',
      end: 'end',
      instance: 'instance',
      level: 'level',
      namespace: 'namespace',
      pageSize: 'pageSize',
      pod: 'pod',
      showPod: 'showPod',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      current: 'number',
      end: 'number',
      instance: 'string',
      level: 'string',
      namespace: 'string',
      pageSize: 'number',
      pod: 'string',
      showPod: 'number',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAbnormalyEventsResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListAbnormalyEventsResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListAbnormalyEventsResponseBodyData },
      message: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAbnormalyEventsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAbnormalyEventsResponseBody;
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
      body: ListAbnormalyEventsResponseBody,
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

export class ListAgentInstallRecordsRequest extends $dara.Model {
  current?: number;
  instanceId?: string;
  pageSize?: number;
  pluginId?: string;
  pluginVersion?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      instanceId: 'instance_id',
      pageSize: 'pageSize',
      pluginId: 'plugin_id',
      pluginVersion: 'plugin_version',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      instanceId: 'string',
      pageSize: 'number',
      pluginId: 'string',
      pluginVersion: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentInstallRecordsResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListAgentInstallRecordsResponseBodyData[];
  /**
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @example
   * 64
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAgentInstallRecordsResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentInstallRecordsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAgentInstallRecordsResponseBody;
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
      body: ListAgentInstallRecordsResponseBody,
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

export class ListAgentsRequest extends $dara.Model {
  current?: number;
  name?: string;
  pageSize?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      name: 'name',
      pageSize: 'pageSize',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      name: 'string',
      pageSize: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListAgentsResponseBodyData[];
  /**
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListAgentsResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAgentsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAgentsResponseBody;
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
      body: ListAgentsResponseBody,
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

export class ListClusterAgentInstallRecordsRequest extends $dara.Model {
  /**
   * @example
   * cbd80af02b9d6454ebdc579c5e022d0c8
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @example
   * 3.4.0-1
   */
  pluginVersion?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      current: 'current',
      pageSize: 'pageSize',
      pluginId: 'plugin_id',
      pluginVersion: 'plugin_version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      current: 'number',
      pageSize: 'number',
      pluginId: 'string',
      pluginVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterAgentInstallRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListClusterAgentInstallRecordsResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 42
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListClusterAgentInstallRecordsResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterAgentInstallRecordsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClusterAgentInstallRecordsResponseBody;
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
      body: ListClusterAgentInstallRecordsResponseBody,
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

export class ListClustersRequest extends $dara.Model {
  /**
   * @example
   * cb7d4cc26c8f845fb8a8255ffd394820e
   */
  clusterId?: string;
  /**
   * @example
   * Running
   */
  clusterStatus?: string;
  /**
   * @example
   * ACK
   */
  clusterType?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * cb7d4cc26c8f845fb8a8255ffd394820e
   */
  id?: string;
  /**
   * @example
   * proxy-next-upstream
   */
  name?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      clusterStatus: 'cluster_status',
      clusterType: 'cluster_type',
      current: 'current',
      id: 'id',
      name: 'name',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterStatus: 'string',
      clusterType: 'string',
      current: 'number',
      id: 'string',
      name: 'string',
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

export class ListClustersResponseBody extends $dara.Model {
  /**
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListClustersResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 64
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListClustersResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersResponseBody;
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
      body: ListClustersResponseBody,
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

export class ListDiagnosisRequest extends $dara.Model {
  current?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  params?: string;
  serviceName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      pageSize: 'pageSize',
      params: 'params',
      serviceName: 'service_name',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      pageSize: 'number',
      params: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosisResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListDiagnosisResponseBodyData[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListDiagnosisResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDiagnosisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListDiagnosisResponseBody;
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
      body: ListDiagnosisResponseBody,
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

export class ListInstanceHealthRequest extends $dara.Model {
  /**
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @example
   * 1
   */
  current?: number;
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
   * @example
   * 10
   */
  pageSize?: number;
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
      current: 'current',
      end: 'end',
      instance: 'instance',
      pageSize: 'pageSize',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      current: 'number',
      end: 'number',
      instance: 'string',
      pageSize: 'number',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceHealthResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: ListInstanceHealthResponseBodyData;
  /**
   * @example
   * Query no data
   */
  message?: string;
  /**
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @example
   * 42
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListInstanceHealthResponseBodyData,
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceHealthResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceHealthResponseBody;
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
      body: ListInstanceHealthResponseBody,
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

export class ListInstanceStatusRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * i-wz9b9vucz1iubsz355rh
   */
  instance?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      instance: 'instance',
      pageSize: 'pageSize',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      instance: 'string',
      pageSize: 'number',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListInstanceStatusResponseBodyData[];
  /**
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @example
   * 218
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListInstanceStatusResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstanceStatusResponseBody;
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
      body: ListInstanceStatusResponseBody,
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

export class ListInstancesRequest extends $dara.Model {
  /**
   * @example
   * xxxxx
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  instance?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      current: 'current',
      instance: 'instance',
      pageSize: 'pageSize',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      current: 'number',
      instance: 'string',
      pageSize: 'number',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  data?: ListInstancesResponseBodyData[];
  /**
   * @example
   * Requests for llm service failed
   */
  message?: string;
  /**
   * @example
   * 9515E5A0-8905-59B0-9BBF-5F0BE568C3A0
   */
  requestId?: string;
  /**
   * @example
   * 623
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListInstancesResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesResponseBody;
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

export class ListInstancesEcsInfoListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ip
   */
  infoType?: string;
  /**
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @example
   * managed
   */
  managedType?: string;
  /**
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      infoType: 'info_type',
      instanceId: 'instance_id',
      managedType: 'managed_type',
      pluginId: 'plugin_id',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoType: 'string',
      instanceId: 'string',
      managedType: 'string',
      pluginId: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesEcsInfoListResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.InvalidParameter
   */
  code?: string;
  data?: ListInstancesEcsInfoListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': ListInstancesEcsInfoListResponseBodyData },
      message: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesEcsInfoListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesEcsInfoListResponseBody;
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
      body: ListInstancesEcsInfoListResponseBody,
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

export class ListInstancesWithEcsInfoRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * healthy
   */
  healthStatus?: string;
  /**
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @example
   * 84b
   */
  instanceIdName?: string;
  /**
   * @example
   * block-load-balancer-hjdm9
   */
  instanceName?: string;
  instanceTag?: ListInstancesWithEcsInfoRequestInstanceTag;
  /**
   * @example
   * 1
   */
  isManaged?: number;
  /**
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64bit
   */
  osName?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1.1.1.1
   */
  privateIp?: string;
  /**
   * @example
   * 1.1.1.1
   */
  publicIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * rg-xxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * default
   */
  resourceGroupIdName?: string;
  /**
   * @example
   * default resource group
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      healthStatus: 'health_status',
      instanceId: 'instance_id',
      instanceIdName: 'instance_id_name',
      instanceName: 'instance_name',
      instanceTag: 'instance_tag',
      isManaged: 'is_managed',
      osName: 'os_name',
      pageSize: 'pageSize',
      privateIp: 'private_ip',
      publicIp: 'public_ip',
      region: 'region',
      resourceGroupId: 'resource_group_id',
      resourceGroupIdName: 'resource_group_id_name',
      resourceGroupName: 'resource_group_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      healthStatus: 'string',
      instanceId: 'string',
      instanceIdName: 'string',
      instanceName: 'string',
      instanceTag: ListInstancesWithEcsInfoRequestInstanceTag,
      isManaged: 'number',
      osName: 'string',
      pageSize: 'number',
      privateIp: 'string',
      publicIp: 'string',
      region: 'string',
      resourceGroupId: 'string',
      resourceGroupIdName: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    if(this.instanceTag && typeof (this.instanceTag as any).validate === 'function') {
      (this.instanceTag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesWithEcsInfoShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * healthy
   */
  healthStatus?: string;
  /**
   * @example
   * i-bp118piqcio9tiwgh84b
   */
  instanceId?: string;
  /**
   * @example
   * 84b
   */
  instanceIdName?: string;
  /**
   * @example
   * block-load-balancer-hjdm9
   */
  instanceName?: string;
  instanceTagShrink?: string;
  /**
   * @example
   * 1
   */
  isManaged?: number;
  /**
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64bit
   */
  osName?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1.1.1.1
   */
  privateIp?: string;
  /**
   * @example
   * 1.1.1.1
   */
  publicIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * rg-xxxxxxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * default
   */
  resourceGroupIdName?: string;
  /**
   * @example
   * default resource group
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      healthStatus: 'health_status',
      instanceId: 'instance_id',
      instanceIdName: 'instance_id_name',
      instanceName: 'instance_name',
      instanceTagShrink: 'instance_tag',
      isManaged: 'is_managed',
      osName: 'os_name',
      pageSize: 'pageSize',
      privateIp: 'private_ip',
      publicIp: 'public_ip',
      region: 'region',
      resourceGroupId: 'resource_group_id',
      resourceGroupIdName: 'resource_group_id_name',
      resourceGroupName: 'resource_group_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      healthStatus: 'string',
      instanceId: 'string',
      instanceIdName: 'string',
      instanceName: 'string',
      instanceTagShrink: 'string',
      isManaged: 'number',
      osName: 'string',
      pageSize: 'number',
      privateIp: 'string',
      publicIp: 'string',
      region: 'string',
      resourceGroupId: 'string',
      resourceGroupIdName: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesWithEcsInfoResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListInstancesWithEcsInfoResponseBodyData[];
  /**
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
  /**
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @example
   * 319
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListInstancesWithEcsInfoResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesWithEcsInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesWithEcsInfoResponseBody;
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
      body: ListInstancesWithEcsInfoResponseBody,
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

export class ListPluginsInstancesRequest extends $dara.Model {
  /**
   * @example
   * 5
   */
  current?: number;
  /**
   * @example
   * i-bpxx
   */
  instanceIdName?: string;
  /**
   * @example
   * {"key":"app","value":"sysom-aliyun-com"}
   */
  instanceTag?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * install
   */
  operationType?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  pluginId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      instanceIdName: 'instance_id_name',
      instanceTag: 'instance_tag',
      operationType: 'operation_type',
      pageSize: 'pageSize',
      pluginId: 'plugin_id',
      region: 'region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      instanceIdName: 'string',
      instanceTag: 'string',
      operationType: 'string',
      pageSize: 'number',
      pluginId: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListPluginsInstancesResponseBodyData[];
  /**
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  /**
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @example
   * 42
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPluginsInstancesResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPluginsInstancesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPluginsInstancesResponseBody;
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
      body: ListPluginsInstancesResponseBody,
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

export class ListPodsOfInstanceRequest extends $dara.Model {
  /**
   * @example
   * c96e34d74eb6748f3b2a46552d5d653f6
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'cluster_id',
      current: 'current',
      instance: 'instance',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      current: 'number',
      instance: 'string',
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

export class ListPodsOfInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: ListPodsOfInstanceResponseBodyData[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * instance not exists
   */
  message?: string;
  /**
   * @example
   * 42
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListPodsOfInstanceResponseBodyData },
      message: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPodsOfInstanceResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListPodsOfInstanceResponseBody;
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
      body: ListPodsOfInstanceResponseBody,
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

export class ListRegionsResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  /**
   * @example
   * ["cn-hangzhou", "cn-shengzhen"]
   */
  data?: string[];
  /**
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRegionsResponseBody;
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
      body: ListRegionsResponseBody,
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

export class StartAIAnalysisRequest extends $dara.Model {
  analysisTool?: string;
  /**
   * @example
   * ecs_sysom
   */
  channel?: string;
  /**
   * @example
   * python_test
   */
  comms?: string;
  /**
   * @example
   * i-wz9dej066kii4goqxxxx
   */
  instance?: string;
  /**
   * @example
   * 2421,36547,10043
   */
  pids?: string;
  /**
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @example
   * 2000
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      analysisTool: 'analysisTool',
      channel: 'channel',
      comms: 'comms',
      instance: 'instance',
      pids: 'pids',
      region: 'region',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTool: 'string',
      channel: 'string',
      comms: 'string',
      instance: 'string',
      pids: 'string',
      region: 'string',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAIAnalysisResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: StartAIAnalysisResponseBodyData;
  /**
   * @example
   * ""
   */
  message?: string;
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
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: StartAIAnalysisResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartAIAnalysisResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartAIAnalysisResponseBody;
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
      body: StartAIAnalysisResponseBody,
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

export class UninstallAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  agentVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instances?: UninstallAgentRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      instances: { 'type': 'array', 'itemType': UninstallAgentRequestInstances },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAgentResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: UninstallAgentResponseBodyData;
  /**
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: UninstallAgentResponseBodyData,
      message: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAgentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallAgentResponseBody;
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
      body: UninstallAgentResponseBody,
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

export class UninstallAgentForClusterRequest extends $dara.Model {
  /**
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @example
   * 3.4.0-1
   */
  agentVersion?: string;
  /**
   * @example
   * c822f83bb45994ddbac9326b4c2f04f35
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      clusterId: 'cluster_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAgentForClusterResponseBody extends $dara.Model {
  /**
   * @example
   * 44841312-7227-55C9-AE03-D59729BFAE38
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: UninstallAgentForClusterResponseBodyData;
  /**
   * @example
   * SysomOpenAPIException: SysomOpenAPI.NotAuthorizedInstance Instance 21 is not authorized
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: UninstallAgentForClusterResponseBodyData,
      message: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallAgentForClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallAgentForClusterResponseBody;
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
      body: UninstallAgentForClusterResponseBody,
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

export class UpdateEventsAttentionRequest extends $dara.Model {
  body?: UpdateEventsAttentionRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateEventsAttentionRequestBody,
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

export class UpdateEventsAttentionShrinkRequest extends $dara.Model {
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

export class UpdateEventsAttentionResponseBody extends $dara.Model {
  /**
   * @example
   * 44841312-7227-55C9-AE03-D59729BFAE38
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: UpdateEventsAttentionResponseBodyData;
  /**
   * @example
   * Instance not belong to current user
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: UpdateEventsAttentionResponseBodyData,
      message: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEventsAttentionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateEventsAttentionResponseBody;
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
      body: UpdateEventsAttentionResponseBody,
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

export class UpdateFuncSwitchRecordRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  params?: UpdateFuncSwitchRecordRequestParams;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * livetrace
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
      params: UpdateFuncSwitchRecordRequestParams,
      serviceName: 'string',
    };
  }

  validate() {
    if(this.params && typeof (this.params as any).validate === 'function') {
      (this.params as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFuncSwitchRecordShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  channel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  paramsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * livetrace
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      paramsShrink: 'params',
      serviceName: 'service_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      paramsShrink: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFuncSwitchRecordResponseBody extends $dara.Model {
  /**
   * @example
   * Success
   */
  code?: string;
  data?: UpdateFuncSwitchRecordResponseBodyData;
  /**
   * @example
   * result: code=1 msg=(Request failed, status_code != 200)
   */
  message?: string;
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
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: UpdateFuncSwitchRecordResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFuncSwitchRecordResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateFuncSwitchRecordResponseBody;
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
      body: UpdateFuncSwitchRecordResponseBody,
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

export class UpgradeAgentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  agentId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  agentVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instances?: UpgradeAgentRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      instances: { 'type': 'array', 'itemType': UpgradeAgentRequestInstances },
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeAgentResponseBody extends $dara.Model {
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: UpgradeAgentResponseBodyData;
  /**
   * @example
   * SysomOpenAPIException: SysomOpenAPI.InvalidParameter Invalid params, should be json string or dict
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: UpgradeAgentResponseBodyData,
      message: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeAgentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeAgentResponseBody;
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
      body: UpgradeAgentResponseBody,
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

export class UpgradeAgentForClusterRequest extends $dara.Model {
  /**
   * @example
   * 74a86327-3170-412c-8e67-da3389ec56a9
   */
  agentId?: string;
  /**
   * @example
   * 3.4.0-1
   */
  agentVersion?: string;
  /**
   * @example
   * c1c187fd513cb41a19876bac0e6b05212
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      agentId: 'agent_id',
      agentVersion: 'agent_version',
      clusterId: 'cluster_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
      agentVersion: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeAgentForClusterResponseBody extends $dara.Model {
  /**
   * @example
   * B149FD9C-ED5C-5765-B3AD-05AA4A4D64D7
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  code?: string;
  data?: UpgradeAgentForClusterResponseBodyData;
  /**
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: UpgradeAgentForClusterResponseBodyData,
      message: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeAgentForClusterResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpgradeAgentForClusterResponseBody;
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
      body: UpgradeAgentForClusterResponseBody,
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
    this._endpoint = this.getEndpoint("sysom", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 授权 SysOM 对某个机器进行诊断
   * 
   * @param request - AuthDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AuthDiagnosisResponse
   */
  async authDiagnosisWithOptions(request: AuthDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<AuthDiagnosisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.autoCreateRole)) {
      body["autoCreateRole"] = request.autoCreateRole;
    }

    if (!$dara.isNull(request.autoInstallAgent)) {
      body["autoInstallAgent"] = request.autoInstallAgent;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<AuthDiagnosisResponse>(await this.callApi(params, req, runtime), new AuthDiagnosisResponse({}));
    } else {
      return $dara.cast<AuthDiagnosisResponse>(await this.execute(params, req, runtime), new AuthDiagnosisResponse({}));
    }

  }

  /**
   * 授权 SysOM 对某个机器进行诊断
   * 
   * @param request - AuthDiagnosisRequest
   * @returns AuthDiagnosisResponse
   */
  async authDiagnosis(request: AuthDiagnosisRequest): Promise<AuthDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async generateCopilotResponseWithOptions(request: GenerateCopilotResponseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GenerateCopilotResponseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.llmParamString)) {
      body["llmParamString"] = request.llmParamString;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenerateCopilotResponseResponse>(await this.callApi(params, req, runtime), new GenerateCopilotResponseResponse({}));
    } else {
      return $dara.cast<GenerateCopilotResponseResponse>(await this.execute(params, req, runtime), new GenerateCopilotResponseResponse({}));
    }

  }

  /**
   * 获取copilot服务的返回结果
   * 
   * @param request - GenerateCopilotResponseRequest
   * @returns GenerateCopilotResponseResponse
   */
  async generateCopilotResponse(request: GenerateCopilotResponseRequest): Promise<GenerateCopilotResponseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateCopilotResponseWithOptions(request, headers, runtime);
  }

  /**
   * 流式copilot服务接口
   * 
   * @param request - GenerateCopilotStreamResponseRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GenerateCopilotStreamResponseResponse
   */
  async generateCopilotStreamResponseWithOptions(request: GenerateCopilotStreamResponseRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GenerateCopilotStreamResponseResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.llmParamString)) {
      body["llmParamString"] = request.llmParamString;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GenerateCopilotStreamResponse",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/copilot/generate_copilot_stream_response`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GenerateCopilotStreamResponseResponse>(await this.callApi(params, req, runtime), new GenerateCopilotStreamResponseResponse({}));
    } else {
      return $dara.cast<GenerateCopilotStreamResponseResponse>(await this.execute(params, req, runtime), new GenerateCopilotStreamResponseResponse({}));
    }

  }

  /**
   * 流式copilot服务接口
   * 
   * @param request - GenerateCopilotStreamResponseRequest
   * @returns GenerateCopilotStreamResponseResponse
   */
  async generateCopilotStreamResponse(request: GenerateCopilotStreamResponseRequest): Promise<GenerateCopilotStreamResponseResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.generateCopilotStreamResponseWithOptions(request, headers, runtime);
  }

  /**
   * 查看AI Infra分析结果
   * 
   * @param request - GetAIQueryResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAIQueryResultResponse
   */
  async getAIQueryResultWithOptions(request: GetAIQueryResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAIQueryResultResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysisId)) {
      body["analysisId"] = request.analysisId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAIQueryResult",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/app_observ/aiAnalysis/query_result`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAIQueryResultResponse>(await this.callApi(params, req, runtime), new GetAIQueryResultResponse({}));
    } else {
      return $dara.cast<GetAIQueryResultResponse>(await this.execute(params, req, runtime), new GetAIQueryResultResponse({}));
    }

  }

  /**
   * 查看AI Infra分析结果
   * 
   * @param request - GetAIQueryResultRequest
   * @returns GetAIQueryResultResponse
   */
  async getAIQueryResult(request: GetAIQueryResultRequest): Promise<GetAIQueryResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAIQueryResultWithOptions(request, headers, runtime);
  }

  /**
   * 获取节点/Pod不同等级异常事件的数量
   * 
   * @param request - GetAbnormalEventsCountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAbnormalEventsCountResponse
   */
  async getAbnormalEventsCountWithOptions(request: GetAbnormalEventsCountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAbnormalEventsCountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pod)) {
      query["pod"] = request.pod;
    }

    if (!$dara.isNull(request.showPod)) {
      query["showPod"] = request.showPod;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAbnormalEventsCountResponse>(await this.callApi(params, req, runtime), new GetAbnormalEventsCountResponse({}));
    } else {
      return $dara.cast<GetAbnormalEventsCountResponse>(await this.execute(params, req, runtime), new GetAbnormalEventsCountResponse({}));
    }

  }

  /**
   * 获取节点/Pod不同等级异常事件的数量
   * 
   * @param request - GetAbnormalEventsCountRequest
   * @returns GetAbnormalEventsCountResponse
   */
  async getAbnormalEventsCount(request: GetAbnormalEventsCountRequest): Promise<GetAbnormalEventsCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAbnormalEventsCountWithOptions(request, headers, runtime);
  }

  /**
   * 获取某个组件的详情
   * 
   * @param request - GetAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentResponse
   */
  async getAgentWithOptions(request: GetAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAgentResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      query["agent_id"] = request.agentId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgent",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/get_agent`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAgentResponse>(await this.callApi(params, req, runtime), new GetAgentResponse({}));
    } else {
      return $dara.cast<GetAgentResponse>(await this.execute(params, req, runtime), new GetAgentResponse({}));
    }

  }

  /**
   * 获取某个组件的详情
   * 
   * @param request - GetAgentRequest
   * @returns GetAgentResponse
   */
  async getAgent(request: GetAgentRequest): Promise<GetAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentWithOptions(request, headers, runtime);
  }

  /**
   * 获取Agent安装任务执行状态
   * 
   * @param request - GetAgentTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAgentTaskResponse
   */
  async getAgentTaskWithOptions(request: GetAgentTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAgentTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAgentTask",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/get_agent_task`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAgentTaskResponse>(await this.callApi(params, req, runtime), new GetAgentTaskResponse({}));
    } else {
      return $dara.cast<GetAgentTaskResponse>(await this.execute(params, req, runtime), new GetAgentTaskResponse({}));
    }

  }

  /**
   * 获取Agent安装任务执行状态
   * 
   * @param request - GetAgentTaskRequest
   * @returns GetAgentTaskResponse
   */
  async getAgentTask(request: GetAgentTaskRequest): Promise<GetAgentTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAgentTaskWithOptions(request, headers, runtime);
  }

  /**
   * 获取copilot历史聊天记录
   * 
   * @param request - GetCopilotHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCopilotHistoryResponse
   */
  async getCopilotHistoryWithOptions(request: GetCopilotHistoryRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetCopilotHistoryResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.count)) {
      body["count"] = request.count;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCopilotHistory",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/copilot/get_copilot_history`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCopilotHistoryResponse>(await this.callApi(params, req, runtime), new GetCopilotHistoryResponse({}));
    } else {
      return $dara.cast<GetCopilotHistoryResponse>(await this.execute(params, req, runtime), new GetCopilotHistoryResponse({}));
    }

  }

  /**
   * 获取copilot历史聊天记录
   * 
   * @param request - GetCopilotHistoryRequest
   * @returns GetCopilotHistoryResponse
   */
  async getCopilotHistory(request: GetCopilotHistoryRequest): Promise<GetCopilotHistoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCopilotHistoryWithOptions(request, headers, runtime);
  }

  /**
   * 获取诊断结果
   * 
   * @param request - GetDiagnosisResultRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetDiagnosisResultResponse
   */
  async getDiagnosisResultWithOptions(request: GetDiagnosisResultRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetDiagnosisResultResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.taskId)) {
      query["task_id"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetDiagnosisResultResponse>(await this.callApi(params, req, runtime), new GetDiagnosisResultResponse({}));
    } else {
      return $dara.cast<GetDiagnosisResultResponse>(await this.execute(params, req, runtime), new GetDiagnosisResultResponse({}));
    }

  }

  /**
   * 获取诊断结果
   * 
   * @param request - GetDiagnosisResultRequest
   * @returns GetDiagnosisResultResponse
   */
  async getDiagnosisResult(request: GetDiagnosisResultRequest): Promise<GetDiagnosisResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getHealthPercentageWithOptions(request: GetHealthPercentageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHealthPercentageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHealthPercentageResponse>(await this.callApi(params, req, runtime), new GetHealthPercentageResponse({}));
    } else {
      return $dara.cast<GetHealthPercentageResponse>(await this.execute(params, req, runtime), new GetHealthPercentageResponse({}));
    }

  }

  /**
   * 获取一段时间的节点/pod健康度比例
   * 
   * @param request - GetHealthPercentageRequest
   * @returns GetHealthPercentageResponse
   */
  async getHealthPercentage(request: GetHealthPercentageRequest): Promise<GetHealthPercentageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHealthPercentageWithOptions(request, headers, runtime);
  }

  /**
   * 获取集群节点数量
   * 
   * @param request - GetHostCountRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHostCountResponse
   */
  async getHostCountWithOptions(request: GetHostCountRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHostCountResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHostCount",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/host_count`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHostCountResponse>(await this.callApi(params, req, runtime), new GetHostCountResponse({}));
    } else {
      return $dara.cast<GetHostCountResponse>(await this.execute(params, req, runtime), new GetHostCountResponse({}));
    }

  }

  /**
   * 获取集群节点数量
   * 
   * @param request - GetHostCountRequest
   * @returns GetHostCountResponse
   */
  async getHostCount(request: GetHostCountRequest): Promise<GetHostCountResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHostCountWithOptions(request, headers, runtime);
  }

  /**
   * 获取实例下的某个字段列表
   * 
   * @param request - GetHotSpotUniqListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotSpotUniqListResponse
   */
  async getHotSpotUniqListWithOptions(request: GetHotSpotUniqListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHotSpotUniqListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.begEnd)) {
      body["beg_end"] = request.begEnd;
    }

    if (!$dara.isNull(request.begStart)) {
      body["beg_start"] = request.begStart;
    }

    if (!$dara.isNull(request.instance)) {
      body["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pid)) {
      body["pid"] = request.pid;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    if (!$dara.isNull(request.uniq)) {
      body["uniq"] = request.uniq;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotSpotUniqList",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/livetrace_proxy/hotspot_uniq_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotSpotUniqListResponse>(await this.callApi(params, req, runtime), new GetHotSpotUniqListResponse({}));
    } else {
      return $dara.cast<GetHotSpotUniqListResponse>(await this.execute(params, req, runtime), new GetHotSpotUniqListResponse({}));
    }

  }

  /**
   * 获取实例下的某个字段列表
   * 
   * @param request - GetHotSpotUniqListRequest
   * @returns GetHotSpotUniqListResponse
   */
  async getHotSpotUniqList(request: GetHotSpotUniqListRequest): Promise<GetHotSpotUniqListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotSpotUniqListWithOptions(request, headers, runtime);
  }

  /**
   * 获取热定分析结果
   * 
   * @param request - GetHotspotAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotAnalysisResponse
   */
  async getHotspotAnalysisWithOptions(request: GetHotspotAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHotspotAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appType)) {
      body["appType"] = request.appType;
    }

    if (!$dara.isNull(request.begEnd)) {
      body["beg_end"] = request.begEnd;
    }

    if (!$dara.isNull(request.begStart)) {
      body["beg_start"] = request.begStart;
    }

    if (!$dara.isNull(request.instance)) {
      body["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pid)) {
      body["pid"] = request.pid;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotAnalysis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/livetrace_hotspot_analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotspotAnalysisResponse>(await this.callApi(params, req, runtime), new GetHotspotAnalysisResponse({}));
    } else {
      return $dara.cast<GetHotspotAnalysisResponse>(await this.execute(params, req, runtime), new GetHotspotAnalysisResponse({}));
    }

  }

  /**
   * 获取热定分析结果
   * 
   * @param request - GetHotspotAnalysisRequest
   * @returns GetHotspotAnalysisResponse
   */
  async getHotspotAnalysis(request: GetHotspotAnalysisRequest): Promise<GetHotspotAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotspotAnalysisWithOptions(request, headers, runtime);
  }

  /**
   * 热点对比
   * 
   * @param request - GetHotspotCompareRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotCompareResponse
   */
  async getHotspotCompareWithOptions(request: GetHotspotCompareRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHotspotCompareResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.beg1End)) {
      body["beg1_end"] = request.beg1End;
    }

    if (!$dara.isNull(request.beg1Start)) {
      body["beg1_start"] = request.beg1Start;
    }

    if (!$dara.isNull(request.beg2End)) {
      body["beg2_end"] = request.beg2End;
    }

    if (!$dara.isNull(request.beg2Start)) {
      body["beg2_start"] = request.beg2Start;
    }

    if (!$dara.isNull(request.hotType)) {
      body["hot_type"] = request.hotType;
    }

    if (!$dara.isNull(request.instance1)) {
      body["instance1"] = request.instance1;
    }

    if (!$dara.isNull(request.instance2)) {
      body["instance2"] = request.instance2;
    }

    if (!$dara.isNull(request.pid1)) {
      body["pid1"] = request.pid1;
    }

    if (!$dara.isNull(request.pid2)) {
      body["pid2"] = request.pid2;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotCompare",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/livetrace_hotspot_compare`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotspotCompareResponse>(await this.callApi(params, req, runtime), new GetHotspotCompareResponse({}));
    } else {
      return $dara.cast<GetHotspotCompareResponse>(await this.execute(params, req, runtime), new GetHotspotCompareResponse({}));
    }

  }

  /**
   * 热点对比
   * 
   * @param request - GetHotspotCompareRequest
   * @returns GetHotspotCompareResponse
   */
  async getHotspotCompare(request: GetHotspotCompareRequest): Promise<GetHotspotCompareResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotspotCompareWithOptions(request, headers, runtime);
  }

  /**
   * 获取热点实例列表
   * 
   * @param request - GetHotspotInstanceListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotInstanceListResponse
   */
  async getHotspotInstanceListWithOptions(request: GetHotspotInstanceListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHotspotInstanceListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.begEnd)) {
      body["beg_end"] = request.begEnd;
    }

    if (!$dara.isNull(request.begStart)) {
      body["beg_start"] = request.begStart;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotInstanceList",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/livetrace_hotspot_instance_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotspotInstanceListResponse>(await this.callApi(params, req, runtime), new GetHotspotInstanceListResponse({}));
    } else {
      return $dara.cast<GetHotspotInstanceListResponse>(await this.execute(params, req, runtime), new GetHotspotInstanceListResponse({}));
    }

  }

  /**
   * 获取热点实例列表
   * 
   * @param request - GetHotspotInstanceListRequest
   * @returns GetHotspotInstanceListResponse
   */
  async getHotspotInstanceList(request: GetHotspotInstanceListRequest): Promise<GetHotspotInstanceListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotspotInstanceListWithOptions(request, headers, runtime);
  }

  /**
   * 获取某个实例的pid列表
   * 
   * @param request - GetHotspotPidListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotPidListResponse
   */
  async getHotspotPidListWithOptions(request: GetHotspotPidListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHotspotPidListResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.begEnd)) {
      body["beg_end"] = request.begEnd;
    }

    if (!$dara.isNull(request.begStart)) {
      body["beg_start"] = request.begStart;
    }

    if (!$dara.isNull(request.instance)) {
      body["instance"] = request.instance;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotPidList",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/livetrace_hotspot_pid_list`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotspotPidListResponse>(await this.callApi(params, req, runtime), new GetHotspotPidListResponse({}));
    } else {
      return $dara.cast<GetHotspotPidListResponse>(await this.execute(params, req, runtime), new GetHotspotPidListResponse({}));
    }

  }

  /**
   * 获取某个实例的pid列表
   * 
   * @param request - GetHotspotPidListRequest
   * @returns GetHotspotPidListResponse
   */
  async getHotspotPidList(request: GetHotspotPidListRequest): Promise<GetHotspotPidListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotspotPidListWithOptions(request, headers, runtime);
  }

  /**
   * 发起热点追踪
   * 
   * @param request - GetHotspotTrackingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetHotspotTrackingResponse
   */
  async getHotspotTrackingWithOptions(request: GetHotspotTrackingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetHotspotTrackingResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.begEnd)) {
      body["beg_end"] = request.begEnd;
    }

    if (!$dara.isNull(request.begStart)) {
      body["beg_start"] = request.begStart;
    }

    if (!$dara.isNull(request.hotType)) {
      body["hot_type"] = request.hotType;
    }

    if (!$dara.isNull(request.instance)) {
      body["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pid)) {
      body["pid"] = request.pid;
    }

    if (!$dara.isNull(request.table)) {
      body["table"] = request.table;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetHotspotTracking",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/livetrace_hotspot_tracking`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetHotspotTrackingResponse>(await this.callApi(params, req, runtime), new GetHotspotTrackingResponse({}));
    } else {
      return $dara.cast<GetHotspotTrackingResponse>(await this.execute(params, req, runtime), new GetHotspotTrackingResponse({}));
    }

  }

  /**
   * 发起热点追踪
   * 
   * @param request - GetHotspotTrackingRequest
   * @returns GetHotspotTrackingResponse
   */
  async getHotspotTracking(request: GetHotspotTrackingRequest): Promise<GetHotspotTrackingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getHotspotTrackingWithOptions(request, headers, runtime);
  }

  /**
   * 获取实时集群/节点健康度分数
   * 
   * @param request - GetInstantScoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetInstantScoreResponse
   */
  async getInstantScoreWithOptions(request: GetInstantScoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetInstantScoreResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetInstantScore",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/instant/score`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetInstantScoreResponse>(await this.callApi(params, req, runtime), new GetInstantScoreResponse({}));
    } else {
      return $dara.cast<GetInstantScoreResponse>(await this.execute(params, req, runtime), new GetInstantScoreResponse({}));
    }

  }

  /**
   * 获取实时集群/节点健康度分数
   * 
   * @param request - GetInstantScoreRequest
   * @returns GetInstantScoreResponse
   */
  async getInstantScore(request: GetInstantScoreRequest): Promise<GetInstantScoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstantScoreWithOptions(request, headers, runtime);
  }

  /**
   * AI Infra获取分析记录列表
   * 
   * @param request - GetListRecordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetListRecordResponse
   */
  async getListRecordWithOptions(request: GetListRecordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetListRecordResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetListRecord",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/app_observ/aiAnalysis/list_record`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetListRecordResponse>(await this.callApi(params, req, runtime), new GetListRecordResponse({}));
    } else {
      return $dara.cast<GetListRecordResponse>(await this.execute(params, req, runtime), new GetListRecordResponse({}));
    }

  }

  /**
   * AI Infra获取分析记录列表
   * 
   * @param request - GetListRecordRequest
   * @returns GetListRecordResponse
   */
  async getListRecord(request: GetListRecordRequest): Promise<GetListRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getListRecordWithOptions(request, headers, runtime);
  }

  /**
   * 获取一定时间内集群中节点/节点中pod异常问题占比
   * 
   * @param request - GetProblemPercentageRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProblemPercentageResponse
   */
  async getProblemPercentageWithOptions(request: GetProblemPercentageRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetProblemPercentageResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProblemPercentage",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/problem_percentage`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetProblemPercentageResponse>(await this.callApi(params, req, runtime), new GetProblemPercentageResponse({}));
    } else {
      return $dara.cast<GetProblemPercentageResponse>(await this.execute(params, req, runtime), new GetProblemPercentageResponse({}));
    }

  }

  /**
   * 获取一定时间内集群中节点/节点中pod异常问题占比
   * 
   * @param request - GetProblemPercentageRequest
   * @returns GetProblemPercentageResponse
   */
  async getProblemPercentage(request: GetProblemPercentageRequest): Promise<GetProblemPercentageResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProblemPercentageWithOptions(request, headers, runtime);
  }

  /**
   * 获取健康分趋势
   * 
   * @param request - GetRangeScoreRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRangeScoreResponse
   */
  async getRangeScoreWithOptions(request: GetRangeScoreRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRangeScoreResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRangeScore",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/score`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRangeScoreResponse>(await this.callApi(params, req, runtime), new GetRangeScoreResponse({}));
    } else {
      return $dara.cast<GetRangeScoreResponse>(await this.execute(params, req, runtime), new GetRangeScoreResponse({}));
    }

  }

  /**
   * 获取健康分趋势
   * 
   * @param request - GetRangeScoreRequest
   * @returns GetRangeScoreResponse
   */
  async getRangeScore(request: GetRangeScoreRequest): Promise<GetRangeScoreResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRangeScoreWithOptions(request, headers, runtime);
  }

  /**
   * 获取集群/节点资源实时使用情况
   * 
   * @param request - GetResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetResourcesResponse
   */
  async getResourcesWithOptions(request: GetResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetResourcesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetResources",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/instant/resource`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetResourcesResponse>(await this.callApi(params, req, runtime), new GetResourcesResponse({}));
    } else {
      return $dara.cast<GetResourcesResponse>(await this.execute(params, req, runtime), new GetResourcesResponse({}));
    }

  }

  /**
   * 获取集群/节点资源实时使用情况
   * 
   * @param request - GetResourcesRequest
   * @returns GetResourcesResponse
   */
  async getResources(request: GetResourcesRequest): Promise<GetResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourcesWithOptions(request, headers, runtime);
  }

  /**
   * 获取功能模块配置
   * 
   * @param tmpReq - GetServiceFuncStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceFuncStatusResponse
   */
  async getServiceFuncStatusWithOptions(tmpReq: GetServiceFuncStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetServiceFuncStatusResponse> {
    tmpReq.validate();
    let request = new GetServiceFuncStatusShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "params", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      query["channel"] = request.channel;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      query["params"] = request.paramsShrink;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["service_name"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceFuncStatus",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/func-switch/get-service-func-status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceFuncStatusResponse>(await this.callApi(params, req, runtime), new GetServiceFuncStatusResponse({}));
    } else {
      return $dara.cast<GetServiceFuncStatusResponse>(await this.execute(params, req, runtime), new GetServiceFuncStatusResponse({}));
    }

  }

  /**
   * 获取功能模块配置
   * 
   * @param request - GetServiceFuncStatusRequest
   * @returns GetServiceFuncStatusResponse
   */
  async getServiceFuncStatus(request: GetServiceFuncStatusRequest): Promise<GetServiceFuncStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceFuncStatusWithOptions(request, headers, runtime);
  }

  /**
   * 初始化SysOM，确保角色存在
   * 
   * @param request - InitialSysomRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitialSysomResponse
   */
  async initialSysomWithOptions(request: InitialSysomRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<InitialSysomResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.checkOnly)) {
      body["check_only"] = request.checkOnly;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InitialSysom",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/initial`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InitialSysomResponse>(await this.callApi(params, req, runtime), new InitialSysomResponse({}));
    } else {
      return $dara.cast<InitialSysomResponse>(await this.execute(params, req, runtime), new InitialSysomResponse({}));
    }

  }

  /**
   * 初始化SysOM，确保角色存在
   * 
   * @param request - InitialSysomRequest
   * @returns InitialSysomResponse
   */
  async initialSysom(request: InitialSysomRequest): Promise<InitialSysomResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.initialSysomWithOptions(request, headers, runtime);
  }

  /**
   * 在指定的实例上安装 Agent
   * 
   * @param request - InstallAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAgentResponse
   */
  async installAgentWithOptions(request: InstallAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<InstallAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.installType)) {
      body["install_type"] = request.installType;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallAgent",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/install_agent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InstallAgentResponse>(await this.callApi(params, req, runtime), new InstallAgentResponse({}));
    } else {
      return $dara.cast<InstallAgentResponse>(await this.execute(params, req, runtime), new InstallAgentResponse({}));
    }

  }

  /**
   * 在指定的实例上安装 Agent
   * 
   * @param request - InstallAgentRequest
   * @returns InstallAgentResponse
   */
  async installAgent(request: InstallAgentRequest): Promise<InstallAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installAgentWithOptions(request, headers, runtime);
  }

  /**
   * 给集群安装组件
   * 
   * @param request - InstallAgentForClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAgentForClusterResponse
   */
  async installAgentForClusterWithOptions(request: InstallAgentForClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<InstallAgentForClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.grayscaleConfig)) {
      body["grayscale_config"] = request.grayscaleConfig;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "InstallAgentForCluster",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/install_agent_by_cluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InstallAgentForClusterResponse>(await this.callApi(params, req, runtime), new InstallAgentForClusterResponse({}));
    } else {
      return $dara.cast<InstallAgentForClusterResponse>(await this.execute(params, req, runtime), new InstallAgentForClusterResponse({}));
    }

  }

  /**
   * 给集群安装组件
   * 
   * @param request - InstallAgentForClusterRequest
   * @returns InstallAgentForClusterResponse
   */
  async installAgentForCluster(request: InstallAgentForClusterRequest): Promise<InstallAgentForClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.installAgentForClusterWithOptions(request, headers, runtime);
  }

  /**
   * 异常项诊断跳转
   * 
   * @param request - InvokeAnomalyDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeAnomalyDiagnosisResponse
   */
  async invokeAnomalyDiagnosisWithOptions(request: InvokeAnomalyDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<InvokeAnomalyDiagnosisResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.uuid)) {
      query["uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeAnomalyDiagnosis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/diagnosis/invoke_anomaly_diagnose`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InvokeAnomalyDiagnosisResponse>(await this.callApi(params, req, runtime), new InvokeAnomalyDiagnosisResponse({}));
    } else {
      return $dara.cast<InvokeAnomalyDiagnosisResponse>(await this.execute(params, req, runtime), new InvokeAnomalyDiagnosisResponse({}));
    }

  }

  /**
   * 异常项诊断跳转
   * 
   * @param request - InvokeAnomalyDiagnosisRequest
   * @returns InvokeAnomalyDiagnosisResponse
   */
  async invokeAnomalyDiagnosis(request: InvokeAnomalyDiagnosisRequest): Promise<InvokeAnomalyDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.invokeAnomalyDiagnosisWithOptions(request, headers, runtime);
  }

  /**
   * 发起诊断
   * 
   * @param request - InvokeDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeDiagnosisResponse
   */
  async invokeDiagnosisWithOptions(request: InvokeDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<InvokeDiagnosisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!$dara.isNull(request.params)) {
      body["params"] = request.params;
    }

    if (!$dara.isNull(request.serviceName)) {
      body["service_name"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<InvokeDiagnosisResponse>(await this.callApi(params, req, runtime), new InvokeDiagnosisResponse({}));
    } else {
      return $dara.cast<InvokeDiagnosisResponse>(await this.execute(params, req, runtime), new InvokeDiagnosisResponse({}));
    }

  }

  /**
   * 发起诊断
   * 
   * @param request - InvokeDiagnosisRequest
   * @returns InvokeDiagnosisResponse
   */
  async invokeDiagnosis(request: InvokeDiagnosisRequest): Promise<InvokeDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.invokeDiagnosisWithOptions(request, headers, runtime);
  }

  /**
   * 获取一定时间段内的异常事件
   * 
   * @param request - ListAbnormalyEventsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAbnormalyEventsResponse
   */
  async listAbnormalyEventsWithOptions(request: ListAbnormalyEventsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAbnormalyEventsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.level)) {
      query["level"] = request.level;
    }

    if (!$dara.isNull(request.namespace)) {
      query["namespace"] = request.namespace;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pod)) {
      query["pod"] = request.pod;
    }

    if (!$dara.isNull(request.showPod)) {
      query["showPod"] = request.showPod;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAbnormalyEvents",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/abnormaly_events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAbnormalyEventsResponse>(await this.callApi(params, req, runtime), new ListAbnormalyEventsResponse({}));
    } else {
      return $dara.cast<ListAbnormalyEventsResponse>(await this.execute(params, req, runtime), new ListAbnormalyEventsResponse({}));
    }

  }

  /**
   * 获取一定时间段内的异常事件
   * 
   * @param request - ListAbnormalyEventsRequest
   * @returns ListAbnormalyEventsResponse
   */
  async listAbnormalyEvents(request: ListAbnormalyEventsRequest): Promise<ListAbnormalyEventsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAbnormalyEventsWithOptions(request, headers, runtime);
  }

  /**
   * 列出 Agent 的安装记录
   * 
   * @param request - ListAgentInstallRecordsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentInstallRecordsResponse
   */
  async listAgentInstallRecordsWithOptions(request: ListAgentInstallRecordsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAgentInstallRecordsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instance_id"] = request.instanceId;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["plugin_id"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginVersion)) {
      query["plugin_version"] = request.pluginVersion;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgentInstallRecords",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/list_agent_install_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAgentInstallRecordsResponse>(await this.callApi(params, req, runtime), new ListAgentInstallRecordsResponse({}));
    } else {
      return $dara.cast<ListAgentInstallRecordsResponse>(await this.execute(params, req, runtime), new ListAgentInstallRecordsResponse({}));
    }

  }

  /**
   * 列出 Agent 的安装记录
   * 
   * @param request - ListAgentInstallRecordsRequest
   * @returns ListAgentInstallRecordsResponse
   */
  async listAgentInstallRecords(request: ListAgentInstallRecordsRequest): Promise<ListAgentInstallRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentInstallRecordsWithOptions(request, headers, runtime);
  }

  /**
   * 获取 Agent 列表
   * 
   * @param request - ListAgentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAgentsResponse
   */
  async listAgentsWithOptions(request: ListAgentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAgentsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAgents",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/list_agents`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAgentsResponse>(await this.callApi(params, req, runtime), new ListAgentsResponse({}));
    } else {
      return $dara.cast<ListAgentsResponse>(await this.execute(params, req, runtime), new ListAgentsResponse({}));
    }

  }

  /**
   * 获取 Agent 列表
   * 
   * @param request - ListAgentsRequest
   * @returns ListAgentsResponse
   */
  async listAgents(request: ListAgentsRequest): Promise<ListAgentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAgentsWithOptions(request, headers, runtime);
  }

  /**
   * 获取集群组件安装记录
   * 
   * @param request - ListClusterAgentInstallRecordsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClusterAgentInstallRecordsResponse
   */
  async listClusterAgentInstallRecordsWithOptions(request: ListClusterAgentInstallRecordsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListClusterAgentInstallRecordsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["plugin_id"] = request.pluginId;
    }

    if (!$dara.isNull(request.pluginVersion)) {
      query["plugin_version"] = request.pluginVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusterAgentInstallRecords",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/list_cluster_agent_install_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListClusterAgentInstallRecordsResponse>(await this.callApi(params, req, runtime), new ListClusterAgentInstallRecordsResponse({}));
    } else {
      return $dara.cast<ListClusterAgentInstallRecordsResponse>(await this.execute(params, req, runtime), new ListClusterAgentInstallRecordsResponse({}));
    }

  }

  /**
   * 获取集群组件安装记录
   * 
   * @param request - ListClusterAgentInstallRecordsRequest
   * @returns ListClusterAgentInstallRecordsResponse
   */
  async listClusterAgentInstallRecords(request: ListClusterAgentInstallRecordsRequest): Promise<ListClusterAgentInstallRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClusterAgentInstallRecordsWithOptions(request, headers, runtime);
  }

  /**
   * 获取当前用户的所有集群
   * 
   * @param request - ListClustersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(request: ListClustersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListClustersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.clusterStatus)) {
      query["cluster_status"] = request.clusterStatus;
    }

    if (!$dara.isNull(request.clusterType)) {
      query["cluster_type"] = request.clusterType;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.id)) {
      query["id"] = request.id;
    }

    if (!$dara.isNull(request.name)) {
      query["name"] = request.name;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListClusters",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/cluster/list_clusters`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
    } else {
      return $dara.cast<ListClustersResponse>(await this.execute(params, req, runtime), new ListClustersResponse({}));
    }

  }

  /**
   * 获取当前用户的所有集群
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listClustersWithOptions(request, headers, runtime);
  }

  /**
   * 获取诊断历史记录列表
   * 
   * @param request - ListDiagnosisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListDiagnosisResponse
   */
  async listDiagnosisWithOptions(request: ListDiagnosisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListDiagnosisResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.params)) {
      query["params"] = request.params;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["service_name"] = request.serviceName;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListDiagnosis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/diagnosis/list_diagnosis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListDiagnosisResponse>(await this.callApi(params, req, runtime), new ListDiagnosisResponse({}));
    } else {
      return $dara.cast<ListDiagnosisResponse>(await this.execute(params, req, runtime), new ListDiagnosisResponse({}));
    }

  }

  /**
   * 获取诊断历史记录列表
   * 
   * @param request - ListDiagnosisRequest
   * @returns ListDiagnosisResponse
   */
  async listDiagnosis(request: ListDiagnosisRequest): Promise<ListDiagnosisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDiagnosisWithOptions(request, headers, runtime);
  }

  /**
   * 获取一定时间内集群节点/Pod健康度列表
   * 
   * @param request - ListInstanceHealthRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceHealthResponse
   */
  async listInstanceHealthWithOptions(request: ListInstanceHealthRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstanceHealthResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.cluster)) {
      query["cluster"] = request.cluster;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.end)) {
      query["end"] = request.end;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.start)) {
      query["start"] = request.start;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceHealth",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/cluster_health/range/instance_health_list`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstanceHealthResponse>(await this.callApi(params, req, runtime), new ListInstanceHealthResponse({}));
    } else {
      return $dara.cast<ListInstanceHealthResponse>(await this.execute(params, req, runtime), new ListInstanceHealthResponse({}));
    }

  }

  /**
   * 获取一定时间内集群节点/Pod健康度列表
   * 
   * @param request - ListInstanceHealthRequest
   * @returns ListInstanceHealthResponse
   */
  async listInstanceHealth(request: ListInstanceHealthRequest): Promise<ListInstanceHealthResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceHealthWithOptions(request, headers, runtime);
  }

  /**
   * 获取实例状态
   * 
   * @param request - ListInstanceStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstanceStatusResponse
   */
  async listInstanceStatusWithOptions(request: ListInstanceStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstanceStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstanceStatus",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/list_instance_status`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstanceStatusResponse>(await this.callApi(params, req, runtime), new ListInstanceStatusResponse({}));
    } else {
      return $dara.cast<ListInstanceStatusResponse>(await this.execute(params, req, runtime), new ListInstanceStatusResponse({}));
    }

  }

  /**
   * 获取实例状态
   * 
   * @param request - ListInstanceStatusRequest
   * @returns ListInstanceStatusResponse
   */
  async listInstanceStatus(request: ListInstanceStatusRequest): Promise<ListInstanceStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceStatusWithOptions(request, headers, runtime);
  }

  /**
   * 获取实例列表
   * 
   * @param request - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(request: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/list_instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
    } else {
      return $dara.cast<ListInstancesResponse>(await this.execute(params, req, runtime), new ListInstancesResponse({}));
    }

  }

  /**
   * 获取实例列表
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 获取ecs信息的列表，如标签列表，公网ip列表等
   * 
   * @param request - ListInstancesEcsInfoListRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesEcsInfoListResponse
   */
  async listInstancesEcsInfoListWithOptions(request: ListInstancesEcsInfoListRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstancesEcsInfoListResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.infoType)) {
      query["info_type"] = request.infoType;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instance_id"] = request.instanceId;
    }

    if (!$dara.isNull(request.managedType)) {
      query["managed_type"] = request.managedType;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["plugin_id"] = request.pluginId;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancesEcsInfoList",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/listInstancesEcsInfoList`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancesEcsInfoListResponse>(await this.callApi(params, req, runtime), new ListInstancesEcsInfoListResponse({}));
    } else {
      return $dara.cast<ListInstancesEcsInfoListResponse>(await this.execute(params, req, runtime), new ListInstancesEcsInfoListResponse({}));
    }

  }

  /**
   * 获取ecs信息的列表，如标签列表，公网ip列表等
   * 
   * @param request - ListInstancesEcsInfoListRequest
   * @returns ListInstancesEcsInfoListResponse
   */
  async listInstancesEcsInfoList(request: ListInstancesEcsInfoListRequest): Promise<ListInstancesEcsInfoListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesEcsInfoListWithOptions(request, headers, runtime);
  }

  /**
   * 获取已纳管/未纳管实例信息，信息中包含ECS信息
   * 
   * @param tmpReq - ListInstancesWithEcsInfoRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesWithEcsInfoResponse
   */
  async listInstancesWithEcsInfoWithOptions(tmpReq: ListInstancesWithEcsInfoRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstancesWithEcsInfoResponse> {
    tmpReq.validate();
    let request = new ListInstancesWithEcsInfoShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceTag)) {
      request.instanceTagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceTag, "instance_tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.healthStatus)) {
      query["health_status"] = request.healthStatus;
    }

    if (!$dara.isNull(request.instanceId)) {
      query["instance_id"] = request.instanceId;
    }

    if (!$dara.isNull(request.instanceIdName)) {
      query["instance_id_name"] = request.instanceIdName;
    }

    if (!$dara.isNull(request.instanceName)) {
      query["instance_name"] = request.instanceName;
    }

    if (!$dara.isNull(request.instanceTagShrink)) {
      query["instance_tag"] = request.instanceTagShrink;
    }

    if (!$dara.isNull(request.isManaged)) {
      query["is_managed"] = request.isManaged;
    }

    if (!$dara.isNull(request.osName)) {
      query["os_name"] = request.osName;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.privateIp)) {
      query["private_ip"] = request.privateIp;
    }

    if (!$dara.isNull(request.publicIp)) {
      query["public_ip"] = request.publicIp;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    if (!$dara.isNull(request.resourceGroupId)) {
      query["resource_group_id"] = request.resourceGroupId;
    }

    if (!$dara.isNull(request.resourceGroupIdName)) {
      query["resource_group_id_name"] = request.resourceGroupIdName;
    }

    if (!$dara.isNull(request.resourceGroupName)) {
      query["resource_group_name"] = request.resourceGroupName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstancesWithEcsInfo",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/listInstancesWithEcsInfo`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancesWithEcsInfoResponse>(await this.callApi(params, req, runtime), new ListInstancesWithEcsInfoResponse({}));
    } else {
      return $dara.cast<ListInstancesWithEcsInfoResponse>(await this.execute(params, req, runtime), new ListInstancesWithEcsInfoResponse({}));
    }

  }

  /**
   * 获取已纳管/未纳管实例信息，信息中包含ECS信息
   * 
   * @param request - ListInstancesWithEcsInfoRequest
   * @returns ListInstancesWithEcsInfoResponse
   */
  async listInstancesWithEcsInfo(request: ListInstancesWithEcsInfoRequest): Promise<ListInstancesWithEcsInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithEcsInfoWithOptions(request, headers, runtime);
  }

  /**
   * 获取插件的安装/更新/卸载实例列表
   * 
   * @param request - ListPluginsInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPluginsInstancesResponse
   */
  async listPluginsInstancesWithOptions(request: ListPluginsInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListPluginsInstancesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.instanceIdName)) {
      query["instance_id_name"] = request.instanceIdName;
    }

    if (!$dara.isNull(request.instanceTag)) {
      query["instance_tag"] = request.instanceTag;
    }

    if (!$dara.isNull(request.operationType)) {
      query["operation_type"] = request.operationType;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.pluginId)) {
      query["plugin_id"] = request.pluginId;
    }

    if (!$dara.isNull(request.region)) {
      query["region"] = request.region;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPluginsInstances",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/listPluginsInstances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPluginsInstancesResponse>(await this.callApi(params, req, runtime), new ListPluginsInstancesResponse({}));
    } else {
      return $dara.cast<ListPluginsInstancesResponse>(await this.execute(params, req, runtime), new ListPluginsInstancesResponse({}));
    }

  }

  /**
   * 获取插件的安装/更新/卸载实例列表
   * 
   * @param request - ListPluginsInstancesRequest
   * @returns ListPluginsInstancesResponse
   */
  async listPluginsInstances(request: ListPluginsInstancesRequest): Promise<ListPluginsInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPluginsInstancesWithOptions(request, headers, runtime);
  }

  /**
   * 获取实例中的pod列表
   * 
   * @param request - ListPodsOfInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPodsOfInstanceResponse
   */
  async listPodsOfInstanceWithOptions(request: ListPodsOfInstanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListPodsOfInstanceResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.clusterId)) {
      query["cluster_id"] = request.clusterId;
    }

    if (!$dara.isNull(request.current)) {
      query["current"] = request.current;
    }

    if (!$dara.isNull(request.instance)) {
      query["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPodsOfInstance",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/list_pod_of_instance`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPodsOfInstanceResponse>(await this.callApi(params, req, runtime), new ListPodsOfInstanceResponse({}));
    } else {
      return $dara.cast<ListPodsOfInstanceResponse>(await this.execute(params, req, runtime), new ListPodsOfInstanceResponse({}));
    }

  }

  /**
   * 获取实例中的pod列表
   * 
   * @param request - ListPodsOfInstanceRequest
   * @returns ListPodsOfInstanceResponse
   */
  async listPodsOfInstance(request: ListPodsOfInstanceRequest): Promise<ListPodsOfInstanceResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPodsOfInstanceWithOptions(request, headers, runtime);
  }

  /**
   * 列出所有纳管了机器的区域
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListRegionsResponse
   */
  async listRegionsWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListRegions",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/instance/list_regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
    } else {
      return $dara.cast<ListRegionsResponse>(await this.execute(params, req, runtime), new ListRegionsResponse({}));
    }

  }

  /**
   * 列出所有纳管了机器的区域
   * @returns ListRegionsResponse
   */
  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegionsWithOptions(headers, runtime);
  }

  /**
   * 启动AI作业分析
   * 
   * @param request - StartAIAnalysisRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartAIAnalysisResponse
   */
  async startAIAnalysisWithOptions(request: StartAIAnalysisRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartAIAnalysisResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.analysisTool)) {
      body["analysisTool"] = request.analysisTool;
    }

    if (!$dara.isNull(request.channel)) {
      body["channel"] = request.channel;
    }

    if (!$dara.isNull(request.comms)) {
      body["comms"] = request.comms;
    }

    if (!$dara.isNull(request.instance)) {
      body["instance"] = request.instance;
    }

    if (!$dara.isNull(request.pids)) {
      body["pids"] = request.pids;
    }

    if (!$dara.isNull(request.region)) {
      body["region"] = request.region;
    }

    if (!$dara.isNull(request.timeout)) {
      body["timeout"] = request.timeout;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "StartAIAnalysis",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/start_ai_analysis`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartAIAnalysisResponse>(await this.callApi(params, req, runtime), new StartAIAnalysisResponse({}));
    } else {
      return $dara.cast<StartAIAnalysisResponse>(await this.execute(params, req, runtime), new StartAIAnalysisResponse({}));
    }

  }

  /**
   * 启动AI作业分析
   * 
   * @param request - StartAIAnalysisRequest
   * @returns StartAIAnalysisResponse
   */
  async startAIAnalysis(request: StartAIAnalysisRequest): Promise<StartAIAnalysisResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startAIAnalysisWithOptions(request, headers, runtime);
  }

  /**
   * 卸载 SysOM Agent
   * 
   * @param request - UninstallAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallAgentResponse
   */
  async uninstallAgentWithOptions(request: UninstallAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UninstallAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallAgent",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/uninstall_agent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UninstallAgentResponse>(await this.callApi(params, req, runtime), new UninstallAgentResponse({}));
    } else {
      return $dara.cast<UninstallAgentResponse>(await this.execute(params, req, runtime), new UninstallAgentResponse({}));
    }

  }

  /**
   * 卸载 SysOM Agent
   * 
   * @param request - UninstallAgentRequest
   * @returns UninstallAgentResponse
   */
  async uninstallAgent(request: UninstallAgentRequest): Promise<UninstallAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uninstallAgentWithOptions(request, headers, runtime);
  }

  /**
   * 给集群卸载组件
   * 
   * @param request - UninstallAgentForClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallAgentForClusterResponse
   */
  async uninstallAgentForClusterWithOptions(request: UninstallAgentForClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UninstallAgentForClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["cluster_id"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UninstallAgentForCluster",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/uninstall_agent_by_cluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UninstallAgentForClusterResponse>(await this.callApi(params, req, runtime), new UninstallAgentForClusterResponse({}));
    } else {
      return $dara.cast<UninstallAgentForClusterResponse>(await this.execute(params, req, runtime), new UninstallAgentForClusterResponse({}));
    }

  }

  /**
   * 给集群卸载组件
   * 
   * @param request - UninstallAgentForClusterRequest
   * @returns UninstallAgentForClusterResponse
   */
  async uninstallAgentForCluster(request: UninstallAgentForClusterRequest): Promise<UninstallAgentForClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uninstallAgentForClusterWithOptions(request, headers, runtime);
  }

  /**
   * 异常项关注度更新
   * 
   * @param tmpReq - UpdateEventsAttentionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEventsAttentionResponse
   */
  async updateEventsAttentionWithOptions(tmpReq: UpdateEventsAttentionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateEventsAttentionResponse> {
    tmpReq.validate();
    let request = new UpdateEventsAttentionShrinkRequest({ });
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
      action: "UpdateEventsAttention",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/openapi/proxy/post/cluster_update_events_attention`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateEventsAttentionResponse>(await this.callApi(params, req, runtime), new UpdateEventsAttentionResponse({}));
    } else {
      return $dara.cast<UpdateEventsAttentionResponse>(await this.execute(params, req, runtime), new UpdateEventsAttentionResponse({}));
    }

  }

  /**
   * 异常项关注度更新
   * 
   * @param request - UpdateEventsAttentionRequest
   * @returns UpdateEventsAttentionResponse
   */
  async updateEventsAttention(request: UpdateEventsAttentionRequest): Promise<UpdateEventsAttentionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEventsAttentionWithOptions(request, headers, runtime);
  }

  /**
   * 获取功能模块配置
   * 
   * @param tmpReq - UpdateFuncSwitchRecordRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFuncSwitchRecordResponse
   */
  async updateFuncSwitchRecordWithOptions(tmpReq: UpdateFuncSwitchRecordRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateFuncSwitchRecordResponse> {
    tmpReq.validate();
    let request = new UpdateFuncSwitchRecordShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.params)) {
      request.paramsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.params, "params", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.channel)) {
      query["channel"] = request.channel;
    }

    if (!$dara.isNull(request.paramsShrink)) {
      query["params"] = request.paramsShrink;
    }

    if (!$dara.isNull(request.serviceName)) {
      query["service_name"] = request.serviceName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFuncSwitchRecord",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/func-switch/update-service-func-switch`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateFuncSwitchRecordResponse>(await this.callApi(params, req, runtime), new UpdateFuncSwitchRecordResponse({}));
    } else {
      return $dara.cast<UpdateFuncSwitchRecordResponse>(await this.execute(params, req, runtime), new UpdateFuncSwitchRecordResponse({}));
    }

  }

  /**
   * 获取功能模块配置
   * 
   * @param request - UpdateFuncSwitchRecordRequest
   * @returns UpdateFuncSwitchRecordResponse
   */
  async updateFuncSwitchRecord(request: UpdateFuncSwitchRecordRequest): Promise<UpdateFuncSwitchRecordResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFuncSwitchRecordWithOptions(request, headers, runtime);
  }

  /**
   * 更新 SysOM Agent
   * 
   * @param request - UpgradeAgentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeAgentResponse
   */
  async upgradeAgentWithOptions(request: UpgradeAgentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpgradeAgentResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.instances)) {
      body["instances"] = request.instances;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeAgent",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/upgrade_agent`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeAgentResponse>(await this.callApi(params, req, runtime), new UpgradeAgentResponse({}));
    } else {
      return $dara.cast<UpgradeAgentResponse>(await this.execute(params, req, runtime), new UpgradeAgentResponse({}));
    }

  }

  /**
   * 更新 SysOM Agent
   * 
   * @param request - UpgradeAgentRequest
   * @returns UpgradeAgentResponse
   */
  async upgradeAgent(request: UpgradeAgentRequest): Promise<UpgradeAgentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeAgentWithOptions(request, headers, runtime);
  }

  /**
   * 给集群更新组件
   * 
   * @param request - UpgradeAgentForClusterRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpgradeAgentForClusterResponse
   */
  async upgradeAgentForClusterWithOptions(request: UpgradeAgentForClusterRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpgradeAgentForClusterResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.agentId)) {
      body["agent_id"] = request.agentId;
    }

    if (!$dara.isNull(request.agentVersion)) {
      body["agent_version"] = request.agentVersion;
    }

    if (!$dara.isNull(request.clusterId)) {
      body["cluster_id"] = request.clusterId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpgradeAgentForCluster",
      version: "2023-12-30",
      protocol: "HTTPS",
      pathname: `/api/v1/am/agent/upgrade_agent_by_cluster`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpgradeAgentForClusterResponse>(await this.callApi(params, req, runtime), new UpgradeAgentForClusterResponse({}));
    } else {
      return $dara.cast<UpgradeAgentForClusterResponse>(await this.execute(params, req, runtime), new UpgradeAgentForClusterResponse({}));
    }

  }

  /**
   * 给集群更新组件
   * 
   * @param request - UpgradeAgentForClusterRequest
   * @returns UpgradeAgentForClusterResponse
   */
  async upgradeAgentForCluster(request: UpgradeAgentForClusterRequest): Promise<UpgradeAgentForClusterResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.upgradeAgentForClusterWithOptions(request, headers, runtime);
  }

}
