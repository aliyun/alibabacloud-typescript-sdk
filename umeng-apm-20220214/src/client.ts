// This file is auto-generated, don't edit it
/**
 */
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';

export class GetH5PageTrendResponseBodyData extends $dara.Model {
  /**
   * @example
   * 504.89
   */
  analyzeDOM?: number;
  /**
   * @example
   * 49.48
   */
  appCache?: number;
  /**
   * @example
   * 979.83
   */
  contentTrans?: number;
  /**
   * @example
   * 50.16
   */
  dns?: number;
  /**
   * @example
   * 1881.96
   */
  domReady?: number;
  /**
   * @example
   * 190.69
   */
  fcp?: number;
  /**
   * @example
   * 472.57
   */
  firstByte?: number;
  /**
   * @example
   * 44.67
   */
  fiveSecondRate?: number;
  /**
   * @example
   * 50.25
   */
  fp?: number;
  /**
   * @example
   * 492.86
   */
  loadEvent?: number;
  /**
   * @example
   * 4741.44
   */
  loadFinish?: number;
  /**
   * @example
   * 2549.46
   */
  loadResource?: number;
  /**
   * @example
   * 2062
   */
  logCnt?: number;
  /**
   * @example
   * 0.19
   */
  oneSecondRate?: number;
  /**
   * @example
   * 100.93
   */
  redirect?: number;
  /**
   * @example
   * 71.02
   */
  ssl?: number;
  /**
   * @example
   * 150.18
   */
  tcp?: number;
  /**
   * @example
   * 2023-05-20
   */
  timePoint?: string;
  /**
   * @example
   * 249.55
   */
  ttfb?: number;
  /**
   * @example
   * 2126.61
   */
  tti?: number;
  /**
   * @example
   * 4.9
   */
  twoSecondRate?: number;
  /**
   * @example
   * 98.26
   */
  unload?: number;
  static names(): { [key: string]: string } {
    return {
      analyzeDOM: 'analyzeDOM',
      appCache: 'appCache',
      contentTrans: 'contentTrans',
      dns: 'dns',
      domReady: 'domReady',
      fcp: 'fcp',
      firstByte: 'firstByte',
      fiveSecondRate: 'fiveSecondRate',
      fp: 'fp',
      loadEvent: 'loadEvent',
      loadFinish: 'loadFinish',
      loadResource: 'loadResource',
      logCnt: 'logCnt',
      oneSecondRate: 'oneSecondRate',
      redirect: 'redirect',
      ssl: 'ssl',
      tcp: 'tcp',
      timePoint: 'timePoint',
      ttfb: 'ttfb',
      tti: 'tti',
      twoSecondRate: 'twoSecondRate',
      unload: 'unload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analyzeDOM: 'number',
      appCache: 'number',
      contentTrans: 'number',
      dns: 'number',
      domReady: 'number',
      fcp: 'number',
      firstByte: 'number',
      fiveSecondRate: 'number',
      fp: 'number',
      loadEvent: 'number',
      loadFinish: 'number',
      loadResource: 'number',
      logCnt: 'number',
      oneSecondRate: 'number',
      redirect: 'number',
      ssl: 'number',
      tcp: 'number',
      timePoint: 'string',
      ttfb: 'number',
      tti: 'number',
      twoSecondRate: 'number',
      unload: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaunchTrendResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2495
   */
  coldLaunchCount?: number;
  /**
   * @example
   * 3784.5
   */
  coldLaunchDuration?: number;
  /**
   * @example
   * 2495
   */
  firstLaunchCount?: number;
  /**
   * @example
   * 3740.5
   */
  firstLaunchDuration?: number;
  /**
   * @example
   * 2495
   */
  hotLaunchCount?: number;
  /**
   * @example
   * 1400.5
   */
  hotLaunchDuration?: number;
  /**
   * @example
   * 2023-05-20
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      coldLaunchCount: 'coldLaunchCount',
      coldLaunchDuration: 'coldLaunchDuration',
      firstLaunchCount: 'firstLaunchCount',
      firstLaunchDuration: 'firstLaunchDuration',
      hotLaunchCount: 'hotLaunchCount',
      hotLaunchDuration: 'hotLaunchDuration',
      timePoint: 'timePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldLaunchCount: 'number',
      coldLaunchDuration: 'number',
      firstLaunchCount: 'number',
      firstLaunchDuration: 'number',
      hotLaunchCount: 'number',
      hotLaunchDuration: 'number',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNativePageTrendResponseBodyData extends $dara.Model {
  /**
   * @example
   * 75.9
   */
  avgLoadDuration?: number;
  /**
   * @example
   * 37.317
   */
  crashRate?: number;
  /**
   * @example
   * 2460
   */
  loadCnt?: number;
  /**
   * @example
   * 99.837
   */
  slowLoadRate?: number;
  /**
   * @example
   * 2023-05-20
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      avgLoadDuration: 'avgLoadDuration',
      crashRate: 'crashRate',
      loadCnt: 'loadCnt',
      slowLoadRate: 'slowLoadRate',
      timePoint: 'timePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgLoadDuration: 'number',
      crashRate: 'number',
      loadCnt: 'number',
      slowLoadRate: 'number',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkTrendResponseBodyData extends $dara.Model {
  /**
   * @example
   * 4402.8
   */
  avgCost?: number;
  /**
   * @example
   * 1654.51
   */
  avgResponseTime?: number;
  /**
   * @example
   * 3299.43
   */
  avgTransformBytes?: number;
  /**
   * @example
   * 1.61
   */
  requestPerMinute?: number;
  /**
   * @example
   * 2023-05-20
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      avgCost: 'avgCost',
      avgResponseTime: 'avgResponseTime',
      avgTransformBytes: 'avgTransformBytes',
      requestPerMinute: 'requestPerMinute',
      timePoint: 'timePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgCost: 'number',
      avgResponseTime: 'number',
      avgTransformBytes: 'number',
      requestPerMinute: 'number',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatTrendResponseBodyData extends $dara.Model {
  /**
   * @example
   * 52
   */
  affectedUserCount?: number;
  /**
   * @example
   * 10.3
   */
  affectedUserRate?: number;
  /**
   * @example
   * 120
   */
  errorCount?: number;
  /**
   * @example
   * 25.6
   */
  errorRate?: number;
  /**
   * @example
   * 2021-06-01
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      affectedUserCount: 'affectedUserCount',
      affectedUserRate: 'affectedUserRate',
      errorCount: 'errorCount',
      errorRate: 'errorRate',
      timePoint: 'timePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedUserCount: 'number',
      affectedUserRate: 'number',
      errorCount: 'number',
      errorRate: 'number',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymUploadParamResponseBodyData extends $dara.Model {
  /**
   * @example
   * LTAI5tM4ZXXXXX
   */
  accessKeyId?: string;
  /**
   * @example
   * eyJjYWxsYmFja1VybCI6Imh0dHBzOi8vYXBtLnVtZW5nLmNvbS9oc2Yvc3ltL29zcy9ub3RpZnlNc2ciLCJjYqc29uIn0=
   */
  callback?: string;
  /**
   * @example
   * tmp/20220428/5fb6001a73749c24fd9cb356_f49a08dc1225438188c109fcf92eb9f3/symbol.zip
   */
  key?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyMi0wNC0yOFQwNDoxMzo0MS43OTJaIiwiY29uZGl0aW9ucyI6W1siZXEiLCIka2V5IiwidG1WpveGZTSXNJbU5oYkd4aVlXTnJRbTlrZVZSNWNHVWlPaUpoY0hCc2FXTmhkR2x2Ymk5cWMyOXVJbjA9In1dfQ==
   */
  policy?: string;
  /**
   * @example
   * 3f67c435e08d164f41f6e522a2b5d1d7feb93000
   */
  signature?: string;
  /**
   * @example
   * https://quickbird.oss-cn-shanghai.aliyuncs.com
   */
  uploadAddress?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      callback: 'callback',
      key: 'key',
      policy: 'policy',
      signature: 'signature',
      uploadAddress: 'uploadAddress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      callback: 'string',
      key: 'string',
      policy: 'string',
      signature: 'string',
      uploadAddress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodayStatTrendResponseBodyData extends $dara.Model {
  /**
   * @example
   * 56
   */
  affectedUserCount?: number;
  /**
   * @example
   * 10.21
   */
  affectedUserRate?: number;
  /**
   * @example
   * 120
   */
  errorCount?: number;
  /**
   * @example
   * 17.24
   */
  errorRate?: number;
  /**
   * @example
   * 13:00
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      affectedUserCount: 'affectedUserCount',
      affectedUserRate: 'affectedUserRate',
      errorCount: 'errorCount',
      errorRate: 'errorRate',
      timePoint: 'timePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedUserCount: 'number',
      affectedUserRate: 'number',
      errorCount: 'number',
      errorRate: 'number',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSymRecordsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appVersions?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  fileType?: number;
  static names(): { [key: string]: string } {
    return {
      appVersions: 'appVersions',
      dataSourceId: 'dataSourceId',
      fileType: 'fileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersions: { 'type': 'array', 'itemType': 'string' },
      dataSourceId: 'string',
      fileType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appVersions)) {
      $dara.Model.validateArray(this.appVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSymRecordsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  appVersionsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  fileType?: number;
  static names(): { [key: string]: string } {
    return {
      appVersionsShrink: 'appVersions',
      dataSourceId: 'dataSourceId',
      fileType: 'fileType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersionsShrink: 'string',
      dataSourceId: 'string',
      fileType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSymRecordsResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @example
   * 1
   */
  num?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210f07c516457690916816858d94ea
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      num: 'num',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      num: 'number',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSymRecordsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSymRecordsResponseBody;
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
      body: DeleteSymRecordsResponseBody,
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

export class GetH5PageTrendRequest extends $dara.Model {
  /**
   * @example
   * 1.0.2
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-03
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-01
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * day
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      endDate: 'endDate',
      startDate: 'startDate',
      timeUnit: 'timeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      endDate: 'string',
      startDate: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetH5PageTrendResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetH5PageTrendResponseBodyData[];
  /**
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetH5PageTrendResponseBodyData },
      msg: 'string',
      success: 'boolean',
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

export class GetH5PageTrendResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetH5PageTrendResponseBody;
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
      body: GetH5PageTrendResponseBody,
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

export class GetLaunchTrendRequest extends $dara.Model {
  /**
   * @example
   * 1.0.2
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-03
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-01
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * day
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      endDate: 'endDate',
      startDate: 'startDate',
      timeUnit: 'timeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      endDate: 'string',
      startDate: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaunchTrendResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetLaunchTrendResponseBodyData[];
  /**
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetLaunchTrendResponseBodyData },
      msg: 'string',
      success: 'boolean',
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

export class GetLaunchTrendResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLaunchTrendResponseBody;
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
      body: GetLaunchTrendResponseBody,
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

export class GetNativePageTrendRequest extends $dara.Model {
  /**
   * @example
   * 1.0.2
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-03
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-01
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * day
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      endDate: 'endDate',
      startDate: 'startDate',
      timeUnit: 'timeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      endDate: 'string',
      startDate: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNativePageTrendResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetNativePageTrendResponseBodyData[];
  /**
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetNativePageTrendResponseBodyData },
      msg: 'string',
      success: 'boolean',
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

export class GetNativePageTrendResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNativePageTrendResponseBody;
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
      body: GetNativePageTrendResponseBody,
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

export class GetNetworkTrendRequest extends $dara.Model {
  /**
   * @example
   * 1.0.2
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-03
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-05-01
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * day
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      endDate: 'endDate',
      startDate: 'startDate',
      timeUnit: 'timeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      endDate: 'string',
      startDate: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkTrendResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetNetworkTrendResponseBodyData[];
  /**
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetNetworkTrendResponseBodyData },
      msg: 'string',
      success: 'boolean',
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

export class GetNetworkTrendResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetNetworkTrendResponseBody;
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
      body: GetNetworkTrendResponseBody,
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

export class GetStatTrendRequest extends $dara.Model {
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @example
   * 2021-06-03
   */
  endDate?: string;
  /**
   * @example
   * 2021-06-01
   */
  startDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      endDate: 'endDate',
      startDate: 'startDate',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      endDate: 'string',
      startDate: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatTrendResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetStatTrendResponseBodyData[];
  /**
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetStatTrendResponseBodyData },
      msg: 'string',
      success: 'boolean',
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

export class GetStatTrendResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetStatTrendResponseBody;
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
      body: GetStatTrendResponseBody,
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

export class GetSymUploadParamRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0.3
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * symbol.zip
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  fileType?: number;
  /**
   * @example
   * my-flutter-app
   */
  flutterName?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      fileName: 'fileName',
      fileType: 'fileType',
      flutterName: 'flutterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      fileName: 'string',
      fileType: 'number',
      flutterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymUploadParamResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * data
   */
  data?: GetSymUploadParamResponseBodyData;
  /**
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210f07c516457690916816858d94ea
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetSymUploadParamResponseBodyData,
      msg: 'string',
      success: 'boolean',
      traceId: 'string',
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

export class GetSymUploadParamResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSymUploadParamResponseBody;
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
      body: GetSymUploadParamResponseBody,
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

export class GetTodayStatTrendRequest extends $dara.Model {
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodayStatTrendResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: GetTodayStatTrendResponseBodyData[];
  /**
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      msg: 'msg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': GetTodayStatTrendResponseBodyData },
      msg: 'string',
      success: 'boolean',
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

export class GetTodayStatTrendResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetTodayStatTrendResponseBody;
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
      body: GetTodayStatTrendResponseBody,
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

export class UpdateAlertPlanRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18288
   */
  planId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * "1.1.0,1.2.0,1.3.0"
   */
  versions?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'dataSourceId',
      planId: 'planId',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      planId: 'number',
      versions: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertPlanResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * Success
   */
  msg?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
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

export class UpdateAlertPlanResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAlertPlanResponseBody;
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
      body: UpdateAlertPlanResponseBody,
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

export class UploadSymbolFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0.3
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * symbol.zip
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  fileType?: number;
  /**
   * @example
   * my-flutter-app
   */
  flutterName?: string;
  /**
   * @example
   * -
   */
  ossUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      fileName: 'fileName',
      fileType: 'fileType',
      flutterName: 'flutterName',
      ossUrl: 'ossUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      fileName: 'string',
      fileType: 'number',
      flutterName: 'string',
      ossUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSymbolFileAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0.3
   */
  appVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5fb6001a73749c24fd9cb356
   */
  dataSourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * symbol.zip
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  fileType?: number;
  /**
   * @example
   * my-flutter-app
   */
  flutterName?: string;
  /**
   * @example
   * -
   */
  ossUrlObject?: Readable;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'appVersion',
      dataSourceId: 'dataSourceId',
      fileName: 'fileName',
      fileType: 'fileType',
      flutterName: 'flutterName',
      ossUrlObject: 'ossUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      dataSourceId: 'string',
      fileName: 'string',
      fileType: 'number',
      flutterName: 'string',
      ossUrlObject: 'Readable',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSymbolFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * succeed in handling request
   */
  msg?: string;
  /**
   * @example
   * 8B99488B-2B73-502E-A5F2-00B4746F4325
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210f07c516457690916816858d94ea
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      msg: 'msg',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      msg: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSymbolFileResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UploadSymbolFileResponseBody;
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
      body: UploadSymbolFileResponseBody,
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
    this._endpoint = this.getEndpoint("umeng-apm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 删除符号表记录
   * 
   * @param tmpReq - DeleteSymRecordsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSymRecordsResponse
   */
  async deleteSymRecordsWithOptions(tmpReq: DeleteSymRecordsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteSymRecordsResponse> {
    tmpReq.validate();
    let request = new DeleteSymRecordsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.appVersions)) {
      request.appVersionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.appVersions, "appVersions", "simple");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appVersionsShrink)) {
      body["appVersions"] = request.appVersionsShrink;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      body["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.fileType)) {
      body["fileType"] = request.fileType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteSymRecords",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/deleteSymRecords`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteSymRecordsResponse>(await this.callApi(params, req, runtime), new DeleteSymRecordsResponse({}));
    } else {
      return $dara.cast<DeleteSymRecordsResponse>(await this.execute(params, req, runtime), new DeleteSymRecordsResponse({}));
    }

  }

  /**
   * 删除符号表记录
   * 
   * @param request - DeleteSymRecordsRequest
   * @returns DeleteSymRecordsResponse
   */
  async deleteSymRecords(request: DeleteSymRecordsRequest): Promise<DeleteSymRecordsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteSymRecordsWithOptions(request, headers, runtime);
  }

  /**
   * 获取H5页面性能统计数据
   * 
   * @param request - GetH5PageTrendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetH5PageTrendResponse
   */
  async getH5PageTrendWithOptions(request: GetH5PageTrendRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetH5PageTrendResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.timeUnit)) {
      query["timeUnit"] = request.timeUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetH5PageTrend",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/stat/getH5PageTrend`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetH5PageTrendResponse>(await this.callApi(params, req, runtime), new GetH5PageTrendResponse({}));
    } else {
      return $dara.cast<GetH5PageTrendResponse>(await this.execute(params, req, runtime), new GetH5PageTrendResponse({}));
    }

  }

  /**
   * 获取H5页面性能统计数据
   * 
   * @param request - GetH5PageTrendRequest
   * @returns GetH5PageTrendResponse
   */
  async getH5PageTrend(request: GetH5PageTrendRequest): Promise<GetH5PageTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getH5PageTrendWithOptions(request, headers, runtime);
  }

  /**
   * 获取启动性能统计数据
   * 
   * @param request - GetLaunchTrendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLaunchTrendResponse
   */
  async getLaunchTrendWithOptions(request: GetLaunchTrendRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetLaunchTrendResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.timeUnit)) {
      query["timeUnit"] = request.timeUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLaunchTrend",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/stat/getLaunchTrend`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLaunchTrendResponse>(await this.callApi(params, req, runtime), new GetLaunchTrendResponse({}));
    } else {
      return $dara.cast<GetLaunchTrendResponse>(await this.execute(params, req, runtime), new GetLaunchTrendResponse({}));
    }

  }

  /**
   * 获取启动性能统计数据
   * 
   * @param request - GetLaunchTrendRequest
   * @returns GetLaunchTrendResponse
   */
  async getLaunchTrend(request: GetLaunchTrendRequest): Promise<GetLaunchTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLaunchTrendWithOptions(request, headers, runtime);
  }

  /**
   * 获取原生页面性能统计数据
   * 
   * @param request - GetNativePageTrendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNativePageTrendResponse
   */
  async getNativePageTrendWithOptions(request: GetNativePageTrendRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetNativePageTrendResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.timeUnit)) {
      query["timeUnit"] = request.timeUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNativePageTrend",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/stat/getNativePageTrend`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetNativePageTrendResponse>(await this.callApi(params, req, runtime), new GetNativePageTrendResponse({}));
    } else {
      return $dara.cast<GetNativePageTrendResponse>(await this.execute(params, req, runtime), new GetNativePageTrendResponse({}));
    }

  }

  /**
   * 获取原生页面性能统计数据
   * 
   * @param request - GetNativePageTrendRequest
   * @returns GetNativePageTrendResponse
   */
  async getNativePageTrend(request: GetNativePageTrendRequest): Promise<GetNativePageTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNativePageTrendWithOptions(request, headers, runtime);
  }

  /**
   * 获取网络性能统计数据
   * 
   * @param request - GetNetworkTrendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetNetworkTrendResponse
   */
  async getNetworkTrendWithOptions(request: GetNetworkTrendRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetNetworkTrendResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.timeUnit)) {
      query["timeUnit"] = request.timeUnit;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetNetworkTrend",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/stat/getNetworkTrend`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetNetworkTrendResponse>(await this.callApi(params, req, runtime), new GetNetworkTrendResponse({}));
    } else {
      return $dara.cast<GetNetworkTrendResponse>(await this.execute(params, req, runtime), new GetNetworkTrendResponse({}));
    }

  }

  /**
   * 获取网络性能统计数据
   * 
   * @param request - GetNetworkTrendRequest
   * @returns GetNetworkTrendResponse
   */
  async getNetworkTrend(request: GetNetworkTrendRequest): Promise<GetNetworkTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNetworkTrendWithOptions(request, headers, runtime);
  }

  /**
   * 获取离线统计数据
   * 
   * @param request - GetStatTrendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetStatTrendResponse
   */
  async getStatTrendWithOptions(request: GetStatTrendRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetStatTrendResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!$dara.isNull(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetStatTrend",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/stat/getStatTrend`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetStatTrendResponse>(await this.callApi(params, req, runtime), new GetStatTrendResponse({}));
    } else {
      return $dara.cast<GetStatTrendResponse>(await this.execute(params, req, runtime), new GetStatTrendResponse({}));
    }

  }

  /**
   * 获取离线统计数据
   * 
   * @param request - GetStatTrendRequest
   * @returns GetStatTrendResponse
   */
  async getStatTrend(request: GetStatTrendRequest): Promise<GetStatTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStatTrendWithOptions(request, headers, runtime);
  }

  /**
   * 获取符号表文件上传参数
   * 
   * @param request - GetSymUploadParamRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSymUploadParamResponse
   */
  async getSymUploadParamWithOptions(request: GetSymUploadParamRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetSymUploadParamResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      query["fileType"] = request.fileType;
    }

    if (!$dara.isNull(request.flutterName)) {
      query["flutterName"] = request.flutterName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSymUploadParam",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/getSymUploadParam`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetSymUploadParamResponse>(await this.callApi(params, req, runtime), new GetSymUploadParamResponse({}));
    } else {
      return $dara.cast<GetSymUploadParamResponse>(await this.execute(params, req, runtime), new GetSymUploadParamResponse({}));
    }

  }

  /**
   * 获取符号表文件上传参数
   * 
   * @param request - GetSymUploadParamRequest
   * @returns GetSymUploadParamResponse
   */
  async getSymUploadParam(request: GetSymUploadParamRequest): Promise<GetSymUploadParamResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSymUploadParamWithOptions(request, headers, runtime);
  }

  /**
   * 获取今日实时统计数据
   * 
   * @param request - GetTodayStatTrendRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTodayStatTrendResponse
   */
  async getTodayStatTrendWithOptions(request: GetTodayStatTrendRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTodayStatTrendResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTodayStatTrend",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/stat/getTodayStatTrend`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTodayStatTrendResponse>(await this.callApi(params, req, runtime), new GetTodayStatTrendResponse({}));
    } else {
      return $dara.cast<GetTodayStatTrendResponse>(await this.execute(params, req, runtime), new GetTodayStatTrendResponse({}));
    }

  }

  /**
   * 获取今日实时统计数据
   * 
   * @param request - GetTodayStatTrendRequest
   * @returns GetTodayStatTrendResponse
   */
  async getTodayStatTrend(request: GetTodayStatTrendRequest): Promise<GetTodayStatTrendResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTodayStatTrendWithOptions(request, headers, runtime);
  }

  /**
   * 更新监控告警计划
   * 
   * @param request - UpdateAlertPlanRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAlertPlanResponse
   */
  async updateAlertPlanWithOptions(request: UpdateAlertPlanRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateAlertPlanResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.planId)) {
      query["planId"] = request.planId;
    }

    if (!$dara.isNull(request.versions)) {
      query["versions"] = request.versions;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlertPlan",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/updateAlertPlan`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAlertPlanResponse>(await this.callApi(params, req, runtime), new UpdateAlertPlanResponse({}));
    } else {
      return $dara.cast<UpdateAlertPlanResponse>(await this.execute(params, req, runtime), new UpdateAlertPlanResponse({}));
    }

  }

  /**
   * 更新监控告警计划
   * 
   * @param request - UpdateAlertPlanRequest
   * @returns UpdateAlertPlanResponse
   */
  async updateAlertPlan(request: UpdateAlertPlanRequest): Promise<UpdateAlertPlanResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlertPlanWithOptions(request, headers, runtime);
  }

  /**
   * 上传符号表文件
   * 
   * @param request - UploadSymbolFileRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UploadSymbolFileResponse
   */
  async uploadSymbolFileWithOptions(request: UploadSymbolFileRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UploadSymbolFileResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!$dara.isNull(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      query["fileType"] = request.fileType;
    }

    if (!$dara.isNull(request.flutterName)) {
      query["flutterName"] = request.flutterName;
    }

    if (!$dara.isNull(request.ossUrl)) {
      query["ossUrl"] = request.ossUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "UploadSymbolFile",
      version: "2022-02-14",
      protocol: "HTTPS",
      pathname: `/uploadSymbolFile`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UploadSymbolFileResponse>(await this.callApi(params, req, runtime), new UploadSymbolFileResponse({}));
    } else {
      return $dara.cast<UploadSymbolFileResponse>(await this.execute(params, req, runtime), new UploadSymbolFileResponse({}));
    }

  }

  /**
   * 上传符号表文件
   * 
   * @param request - UploadSymbolFileRequest
   * @returns UploadSymbolFileResponse
   */
  async uploadSymbolFile(request: UploadSymbolFileRequest): Promise<UploadSymbolFileResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadSymbolFileWithOptions(request, headers, runtime);
  }

  async uploadSymbolFileAdvance(request: UploadSymbolFileAdvanceRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UploadSymbolFileResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      securityToken: securityToken,
      type: credentialType,
      endpoint: openPlatformEndpoint,
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let authClient = new OpenPlatform(authConfig);
    let authRequest = new $OpenPlatform.AuthorizeFileUploadRequest({
      product: "umeng-apm",
      regionId: this._regionId,
    });
    let authResponse = new $OpenPlatform.AuthorizeFileUploadResponse({ });
    let ossConfig = new $OSS.Config({
      accessKeyId: accessKeyId,
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = new OSS(ossConfig);
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let uploadSymbolFileReq = new UploadSymbolFileRequest({ });
    OpenApiUtil.convert(request, uploadSymbolFileReq);
    if (!$dara.isNull(request.ossUrlObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.body.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.body.endpoint, authResponse.body.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.body.objectKey,
        content: request.ossUrlObject,
        contentType: "",
      });
      ossHeader = new $OSS.PostObjectRequestHeader({
        accessKeyId: authResponse.body.accessKeyId,
        policy: authResponse.body.encodedPolicy,
        signature: authResponse.body.signature,
        key: authResponse.body.objectKey,
        file: fileObj,
        successActionStatus: "201",
      });
      uploadRequest = new $OSS.PostObjectRequest({
        bucketName: authResponse.body.bucket,
        header: ossHeader,
      });
      await ossClient.postObject(uploadRequest, ossRuntime);
      uploadSymbolFileReq.ossUrl = `http://${authResponse.body.bucket}.${authResponse.body.endpoint}/${authResponse.body.objectKey}`;
    }

    let uploadSymbolFileResp = await this.uploadSymbolFileWithOptions(uploadSymbolFileReq, headers, runtime);
    return uploadSymbolFileResp;
  }

}
