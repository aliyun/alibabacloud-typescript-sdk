// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class GetH5PageTrendRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  endDate?: string;
  startDate?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetH5PageTrendResponseBody extends $tea.Model {
  code?: number;
  data?: GetH5PageTrendResponseBodyData[];
  msg?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetH5PageTrendResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaunchTrendRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  endDate?: string;
  startDate?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaunchTrendResponseBody extends $tea.Model {
  code?: number;
  data?: GetLaunchTrendResponseBodyData[];
  msg?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaunchTrendResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNativePageTrendRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  endDate?: string;
  startDate?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNativePageTrendResponseBody extends $tea.Model {
  code?: number;
  data?: GetNativePageTrendResponseBodyData[];
  msg?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNativePageTrendResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkTrendRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  endDate?: string;
  startDate?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkTrendResponseBody extends $tea.Model {
  code?: number;
  data?: GetNetworkTrendResponseBodyData[];
  msg?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkTrendResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatTrendRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  endDate?: string;
  startDate?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatTrendResponseBody extends $tea.Model {
  code?: number;
  data?: GetStatTrendResponseBodyData[];
  msg?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatTrendResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymUploadParamRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  fileName?: string;
  fileType?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymUploadParamResponseBody extends $tea.Model {
  code?: number;
  data?: GetSymUploadParamResponseBodyData;
  msg?: string;
  success?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymUploadParamResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodayStatTrendRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodayStatTrendResponseBody extends $tea.Model {
  code?: number;
  data?: GetTodayStatTrendResponseBodyData[];
  msg?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodayStatTrendResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertPlanRequest extends $tea.Model {
  dataSourceId?: string;
  planId?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertPlanResponseBody extends $tea.Model {
  code?: number;
  msg?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAlertPlanResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSymbolFileRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  fileName?: string;
  fileType?: number;
  flutterName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSymbolFileAdvanceRequest extends $tea.Model {
  appVersion?: string;
  dataSourceId?: string;
  fileName?: string;
  fileType?: number;
  flutterName?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSymbolFileResponseBody extends $tea.Model {
  code?: number;
  msg?: string;
  requestId?: string;
  success?: boolean;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UploadSymbolFileResponse extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetH5PageTrendResponseBodyData extends $tea.Model {
  analyzeDOM?: number;
  appCache?: number;
  contentTrans?: number;
  dns?: number;
  domReady?: number;
  fcp?: number;
  firstByte?: number;
  fiveSecondRate?: number;
  fp?: number;
  loadEvent?: number;
  loadFinish?: number;
  loadResource?: number;
  logCnt?: number;
  oneSecondRate?: number;
  redirect?: number;
  ssl?: number;
  tcp?: number;
  timePoint?: string;
  ttfb?: number;
  tti?: number;
  twoSecondRate?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLaunchTrendResponseBodyData extends $tea.Model {
  coldLaunchCount?: number;
  coldLaunchDuration?: number;
  firstLaunchCount?: number;
  firstLaunchDuration?: number;
  hotLaunchCount?: number;
  hotLaunchDuration?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNativePageTrendResponseBodyData extends $tea.Model {
  avgLoadDuration?: number;
  crashRate?: number;
  loadCnt?: number;
  slowLoadRate?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNetworkTrendResponseBodyData extends $tea.Model {
  avgCost?: number;
  avgResponseTime?: number;
  avgTransformBytes?: number;
  requestPerMinute?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatTrendResponseBodyData extends $tea.Model {
  affectedUserCount?: number;
  affectedUserRate?: number;
  errorCount?: number;
  errorRate?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymUploadParamResponseBodyData extends $tea.Model {
  accessKeyId?: string;
  callback?: string;
  key?: string;
  policy?: string;
  signature?: string;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTodayStatTrendResponseBodyData extends $tea.Model {
  affectedUserCount?: number;
  affectedUserRate?: number;
  errorCount?: number;
  errorRate?: number;
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("umeng-apm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async getH5PageTrendWithOptions(request: GetH5PageTrendRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetH5PageTrendResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!Util.isUnset(request.timeUnit)) {
      query["timeUnit"] = request.timeUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetH5PageTrendResponse>(await this.callApi(params, req, runtime), new GetH5PageTrendResponse({}));
  }

  async getH5PageTrend(request: GetH5PageTrendRequest): Promise<GetH5PageTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getH5PageTrendWithOptions(request, headers, runtime);
  }

  async getLaunchTrendWithOptions(request: GetLaunchTrendRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLaunchTrendResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!Util.isUnset(request.timeUnit)) {
      query["timeUnit"] = request.timeUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetLaunchTrendResponse>(await this.callApi(params, req, runtime), new GetLaunchTrendResponse({}));
  }

  async getLaunchTrend(request: GetLaunchTrendRequest): Promise<GetLaunchTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLaunchTrendWithOptions(request, headers, runtime);
  }

  async getNativePageTrendWithOptions(request: GetNativePageTrendRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNativePageTrendResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!Util.isUnset(request.timeUnit)) {
      query["timeUnit"] = request.timeUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetNativePageTrendResponse>(await this.callApi(params, req, runtime), new GetNativePageTrendResponse({}));
  }

  async getNativePageTrend(request: GetNativePageTrendRequest): Promise<GetNativePageTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNativePageTrendWithOptions(request, headers, runtime);
  }

  async getNetworkTrendWithOptions(request: GetNetworkTrendRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetNetworkTrendResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!Util.isUnset(request.timeUnit)) {
      query["timeUnit"] = request.timeUnit;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetNetworkTrendResponse>(await this.callApi(params, req, runtime), new GetNetworkTrendResponse({}));
  }

  async getNetworkTrend(request: GetNetworkTrendRequest): Promise<GetNetworkTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getNetworkTrendWithOptions(request, headers, runtime);
  }

  async getStatTrendWithOptions(request: GetStatTrendRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetStatTrendResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.endDate)) {
      query["endDate"] = request.endDate;
    }

    if (!Util.isUnset(request.startDate)) {
      query["startDate"] = request.startDate;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetStatTrendResponse>(await this.callApi(params, req, runtime), new GetStatTrendResponse({}));
  }

  async getStatTrend(request: GetStatTrendRequest): Promise<GetStatTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStatTrendWithOptions(request, headers, runtime);
  }

  async getSymUploadParamWithOptions(request: GetSymUploadParamRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSymUploadParamResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileType)) {
      query["fileType"] = request.fileType;
    }

    if (!Util.isUnset(request.flutterName)) {
      query["flutterName"] = request.flutterName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetSymUploadParamResponse>(await this.callApi(params, req, runtime), new GetSymUploadParamResponse({}));
  }

  async getSymUploadParam(request: GetSymUploadParamRequest): Promise<GetSymUploadParamResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSymUploadParamWithOptions(request, headers, runtime);
  }

  async getTodayStatTrendWithOptions(request: GetTodayStatTrendRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTodayStatTrendResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.type)) {
      query["type"] = request.type;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<GetTodayStatTrendResponse>(await this.callApi(params, req, runtime), new GetTodayStatTrendResponse({}));
  }

  async getTodayStatTrend(request: GetTodayStatTrendRequest): Promise<GetTodayStatTrendResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTodayStatTrendWithOptions(request, headers, runtime);
  }

  async updateAlertPlanWithOptions(request: UpdateAlertPlanRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAlertPlanResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.planId)) {
      query["planId"] = request.planId;
    }

    if (!Util.isUnset(request.versions)) {
      query["versions"] = request.versions;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UpdateAlertPlanResponse>(await this.callApi(params, req, runtime), new UpdateAlertPlanResponse({}));
  }

  async updateAlertPlan(request: UpdateAlertPlanRequest): Promise<UpdateAlertPlanResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAlertPlanWithOptions(request, headers, runtime);
  }

  async uploadSymbolFileWithOptions(request: UploadSymbolFileRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadSymbolFileResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appVersion)) {
      query["appVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.dataSourceId)) {
      query["dataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.fileName)) {
      query["fileName"] = request.fileName;
    }

    if (!Util.isUnset(request.fileType)) {
      query["fileType"] = request.fileType;
    }

    if (!Util.isUnset(request.flutterName)) {
      query["flutterName"] = request.flutterName;
    }

    if (!Util.isUnset(request.ossUrl)) {
      query["ossUrl"] = request.ossUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
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
    return $tea.cast<UploadSymbolFileResponse>(await this.callApi(params, req, runtime), new UploadSymbolFileResponse({}));
  }

  async uploadSymbolFile(request: UploadSymbolFileRequest): Promise<UploadSymbolFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.uploadSymbolFileWithOptions(request, headers, runtime);
  }

  async uploadSymbolFileAdvance(request: UploadSymbolFileAdvanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UploadSymbolFileResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if (Util.isUnset(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if (Util.isUnset(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApi.Config({
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
      accessKeySecret: accessKeySecret,
      type: "access_key",
      protocol: this._protocol,
      regionId: this._regionId,
    });
    let ossClient : OSS = null;
    let fileObj = new $FileForm.FileField({ });
    let ossHeader = new $OSS.PostObjectRequestHeader({ });
    let uploadRequest = new $OSS.PostObjectRequest({ });
    let ossRuntime = new $OSSUtil.RuntimeOptions({ });
    OpenApiUtil.convert(runtime, ossRuntime);
    let uploadSymbolFileReq = new UploadSymbolFileRequest({ });
    OpenApiUtil.convert(request, uploadSymbolFileReq);
    if (!Util.isUnset(request.ossUrlObject)) {
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
