// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

