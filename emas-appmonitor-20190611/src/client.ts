// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class GetErrorResponseBodyModel extends $dara.Model {
  /**
   * @example
   * 4G
   */
  access?: string;
  /**
   * @example
   * null
   */
  accessSubType?: string;
  /**
   * @example
   * -
   */
  additionalCallbackInfo?: string;
  /**
   * @example
   * -
   */
  additionalCrossPlatformCrashInfo?: string;
  /**
   * @example
   * -
   */
  additionalCustomInfo?: string;
  /**
   * @example
   * -
   */
  androidVm?: string;
  /**
   * @example
   * ALIPUBDC3CA71131027
   */
  appId?: string;
  /**
   * @remarks
   * appKey
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @example
   * V20250224102631
   */
  appVersion?: string;
  /**
   * @example
   * -
   */
  argHash?: number;
  /**
   * @example
   * h=60
   */
  args?: string;
  /**
   * @example
   * java.lang.NullPointerException: Attempt to invoke virtual method \\"java.lang.Object
   */
  backtrace?: string;
  /**
   * @remarks
   * banner
   * 
   * @example
   * -
   */
  banner?: string;
  /**
   * @example
   * -
   */
  binaryUuids?: string;
  /**
   * @example
   * Hinova
   */
  brand?: string;
  /**
   * @example
   * Chrome
   */
  browserName?: string;
  browserVersion?: string;
  /**
   * @example
   * 100
   */
  build?: string;
  /**
   * @example
   * china
   */
  businessCountry?: string;
  /**
   * @example
   * -
   */
  businessErrorExtData?: string;
  /**
   * @example
   * -
   */
  businessLogType?: string;
  /**
   * @remarks
   * carrier
   * 
   * @example
   * CT
   */
  carrier?: string;
  /**
   * @example
   * ant
   */
  channel?: string;
  /**
   * @example
   * 375
   */
  city?: string;
  /**
   * @example
   * 100.104.16.217:51534
   */
  clientIp?: string;
  /**
   * @example
   * 1739808000000
   */
  clientTime?: number;
  /**
   * @example
   * 0
   */
  colNo?: string;
  /**
   * @example
   * CN
   */
  country?: string;
  /**
   * @example
   * arm
   */
  cpuModel?: string;
  /**
   * @example
   * -
   */
  cruxModule?: string;
  /**
   * @example
   * -
   */
  cruxStack?: string;
  /**
   * @example
   * -
   */
  cruxStackHash?: number;
  /**
   * @remarks
   * CruxStackTrace
   * 
   * @example
   * -
   */
  cruxStackTrace?: string;
  /**
   * @example
   * -
   */
  cruxStackTraceHash?: number;
  /**
   * @example
   * -
   */
  customExceptionType?: string;
  /**
   * @example
   * -
   */
  customInfo?: string;
  /**
   * @example
   * -
   */
  dataDirectory?: string;
  /**
   * @example
   * ad-0001t9c1b6y48kqcd44s-105
   */
  deviceId?: string;
  /**
   * @example
   * ASUS_X00GD
   */
  deviceModel?: string;
  /**
   * @example
   * 22jtJ213saqfB1yBgBKhayYPwcZ2
   */
  did?: string;
  /**
   * @example
   * sha256:b3b79f1f6c2beca7ac93a9518a35d542e0bfeb7ae64c9e57e9edd4719489927c
   */
  digest?: string;
  /**
   * @example
   * -
   */
  digestHash?: string;
  /**
   * @example
   * 0.5
   */
  domScore?: string;
  /**
   * @example
   * -
   */
  downloadCacheDirectory?: string;
  /**
   * @example
   * OOM
   */
  errorName?: string;
  /**
   * @example
   * jsError
   */
  errorType?: string;
  /**
   * @example
   * 0DB-22jtJZzBvqfB1yBgBKhayYPwcZ2
   */
  eventId?: number;
  /**
   * @example
   * -
   */
  eventLog?: string;
  /**
   * @example
   * -
   */
  exceptionArg1?: string;
  /**
   * @example
   * -
   */
  exceptionArg2?: string;
  /**
   * @example
   * -
   */
  exceptionArg3?: string;
  /**
   * @example
   * -
   */
  exceptionCode?: string;
  /**
   * @example
   * -
   */
  exceptionCodes?: string;
  /**
   * @example
   * -
   */
  exceptionDetail?: string;
  /**
   * @example
   * -
   */
  exceptionId?: string;
  /**
   * @example
   * Table \\"123_temp.image_vw_6191426\\" doesn\\"t exist
   */
  exceptionMsg?: string;
  /**
   * @example
   * -
   */
  exceptionSubtype?: string;
  /**
   * @example
   * -
   */
  exceptionType?: string;
  /**
   * @example
   * -
   */
  exceptionVersion?: string;
  /**
   * @example
   * exporting
   */
  exportStatus?: string;
  /**
   * @example
   * -
   */
  externalStorageDirectory?: string;
  /**
   * @example
   * -
   */
  featureScene?: string;
  /**
   * @example
   * baselineCspm_20241005
   */
  fileName?: string;
  /**
   * @example
   * dubhe-service/src/main/java/com/viatris/dubhe/monitortask/service/Impl/DataSyncMonitorRecordServiceImpl.java
   */
  filePath?: string;
  /**
   * @example
   * chunk-56494f41.3df8bd75.css
   */
  filename?: string;
  /**
   * @example
   * -
   */
  flutterRoute?: string;
  /**
   * @example
   * 1
   */
  forceGround?: number;
  /**
   * @example
   * 1
   */
  foreGround?: number;
  /**
   * @example
   * -
   */
  h5FullUrl?: string;
  /**
   * @example
   * -
   */
  h5ShortUrl?: string;
  /**
   * @example
   * 0
   */
  hasOpenMultiProcessMode?: number;
  /**
   * @example
   * -
   */
  hasSdCard?: number;
  /**
   * @example
   * 0
   */
  hasSgSecurityConfigKey?: number;
  /**
   * @remarks
   * IMEI
   * 
   * @example
   * 2704b9b0d94b2f3897f82119a1900cd9c7a8108d
   */
  imei?: string;
  /**
   * @remarks
   * IMSI
   * 
   * @example
   * 460049842500442
   */
  imsi?: string;
  /**
   * @example
   * 0
   */
  inMainProcess?: number;
  /**
   * @example
   * -
   */
  installSdCard?: number;
  /**
   * @example
   * -
   */
  isBackTrace?: number;
  /**
   * @example
   * 0
   */
  isSpeedVersion?: number;
  /**
   * @remarks
   * ISP
   * 
   * @example
   * cmcc
   */
  isp?: string;
  /**
   * @example
   * java.lang.NullPointerException: Attempt to invoke virtual method \\"java.lang.Object
   */
  jsBacktrace?: string;
  /**
   * @example
   * cn
   */
  language?: string;
  /**
   * @example
   * 2025-02-25 18:02:50
   */
  launchedTime?: string;
  /**
   * @example
   * 0
   */
  lineNo?: string;
  /**
   * @example
   * -
   */
  logHash?: number;
  /**
   * @example
   * -
   */
  mainLog?: string;
  /**
   * @example
   * -
   */
  memoryMap?: string;
  /**
   * @example
   * -
   */
  moreInfo1?: string;
  /**
   * @example
   * -
   */
  moreInfo2?: string;
  /**
   * @example
   * -
   */
  moreInfo3?: string;
  /**
   * @example
   * -
   */
  nativeAllThreadDump?: string;
  /**
   * @remarks
   * Native map
   * 
   * @example
   * -
   */
  nativeMaps?: string;
  /**
   * @example
   * -
   */
  needReCluster?: number;
  /**
   * @example
   * -
   */
  openedFileCount?: number;
  /**
   * @example
   * [{\\"status\\":1,\\"target\\":\\"5461e0ab-340f-4a6b-9bbe-f75e44985420\\"}]
   */
  operations?: string;
  /**
   * @example
   * []
   */
  originData?: string;
  /**
   * @example
   * -
   */
  originUri?: string;
  /**
   * @example
   * android
   */
  os?: string;
  /**
   * @example
   * 1
   */
  osVersion?: string;
  /**
   * @example
   * {\\"Content\\": [], \\"TotalPages\\": 2, \\"TotalItems\\": 31, \\"PageNumber\\": 4, \\"PageSize\\": 20}
   */
  page?: string;
  /**
   * @example
   * com.aliyun.demo
   */
  parentProcessName?: string;
  /**
   * @example
   * ce0ak81asd@62706c656a7f1a1
   */
  pid?: number;
  /**
   * @example
   * wechat
   */
  platform?: string;
  /**
   * @example
   * null
   */
  processName?: string;
  province?: string;
  reason?: string;
  /**
   * @example
   * -
   */
  reportContent?: string;
  /**
   * @example
   * 2
   */
  reportType?: string;
  /**
   * @example
   * 720*1280
   */
  resolution?: string;
  /**
   * @example
   * -
   */
  rootDirectory?: string;
  /**
   * @example
   * -
   */
  runtimeExtData?: string;
  /**
   * @example
   * -
   */
  sceneValue?: string;
  /**
   * @example
   * software_nls_tts_offline_standard
   */
  sdkType?: string;
  /**
   * @example
   * 5.2.3
   */
  sdkVersion?: string;
  /**
   * @example
   * 3481243636390427020
   */
  seq?: string;
  /**
   * @example
   * 1739808000000
   */
  serverTime?: number;
  /**
   * @example
   * 9ec8e399-51cc-4283-8ba4-f6df78246249
   */
  sessionId?: string;
  /**
   * @example
   * -
   */
  simpleReportContent?: string;
  /**
   * @example
   * -
   */
  soLibBuild?: string;
  /**
   * @remarks
   * SpeedFlags
   * 
   * @example
   * -
   */
  speedFlags?: string;
  /**
   * @example
   * java.lang.NullPointerException: Attempt to invoke virtual method \\"java.lang.Object java.lang.ref.WeakReference.get()\\" on a null object reference
   */
  stack?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * {\\"HandledCheckToday\\": 0, \\"RiskCheckCnt\\": 34, \\"RiskWarningCnt\\": 57, \\"RiskDays\\": 30, \\"HandledCheckTotal\\": 5, \\"HandledDays\\": 365}
   */
  summary?: string;
  /**
   * @example
   * -
   */
  symbolicFileType?: string;
  /**
   * @example
   * -
   */
  sysLog?: string;
  /**
   * @example
   * null
   */
  threadName?: string;
  /**
   * @example
   * Process Name: \\"com.muyuan.mytongdriver\\"
   * Thread Name: \\"main\\"
   */
  threads?: string;
  /**
   * @example
   * 2359
   */
  tid?: number;
  /**
   * @example
   * -
   */
  track?: string;
  /**
   * @example
   * 2025-02-25 18:02:50
   */
  triggeredTime?: string;
  /**
   * @example
   * 1740412800000
   */
  uploadTime?: number;
  /**
   * @remarks
   * URI
   * 
   * @example
   * https://oss.aliyuncs.com/aliyun_id_photo_bucket/default_handsome.jpg
   */
  uri?: string;
  /**
   * @example
   * -
   */
  user?: string;
  /**
   * @example
   * 1
   */
  userId?: string;
  /**
   * @example
   * mark
   */
  userNick?: string;
  /**
   * @remarks
   * utdid
   * 
   * @example
   * 2704b9b0d94b2f3897f82119a
   */
  utdid?: string;
  /**
   * @remarks
   * uuid
   * 
   * @example
   * 105a87c6-f299-42e5-8fc7-1066a47a96e5
   */
  uuid?: string;
  /**
   * @remarks
   * view
   * 
   * @example
   * com.aliyun.view1
   */
  view?: string;
  /**
   * @example
   * -
   */
  weexFullUrl?: string;
  /**
   * @example
   * -
   */
  weexShortUrl?: string;
  /**
   * @example
   * -
   */
  writeLimit?: number;
  static names(): { [key: string]: string } {
    return {
      access: 'Access',
      accessSubType: 'AccessSubType',
      additionalCallbackInfo: 'AdditionalCallbackInfo',
      additionalCrossPlatformCrashInfo: 'AdditionalCrossPlatformCrashInfo',
      additionalCustomInfo: 'AdditionalCustomInfo',
      androidVm: 'AndroidVm',
      appId: 'AppId',
      appKey: 'AppKey',
      appVersion: 'AppVersion',
      argHash: 'ArgHash',
      args: 'Args',
      backtrace: 'Backtrace',
      banner: 'Banner',
      binaryUuids: 'BinaryUuids',
      brand: 'Brand',
      browserName: 'BrowserName',
      browserVersion: 'BrowserVersion',
      build: 'Build',
      businessCountry: 'BusinessCountry',
      businessErrorExtData: 'BusinessErrorExtData',
      businessLogType: 'BusinessLogType',
      carrier: 'Carrier',
      channel: 'Channel',
      city: 'City',
      clientIp: 'ClientIp',
      clientTime: 'ClientTime',
      colNo: 'ColNo',
      country: 'Country',
      cpuModel: 'CpuModel',
      cruxModule: 'CruxModule',
      cruxStack: 'CruxStack',
      cruxStackHash: 'CruxStackHash',
      cruxStackTrace: 'CruxStackTrace',
      cruxStackTraceHash: 'CruxStackTraceHash',
      customExceptionType: 'CustomExceptionType',
      customInfo: 'CustomInfo',
      dataDirectory: 'DataDirectory',
      deviceId: 'DeviceId',
      deviceModel: 'DeviceModel',
      did: 'Did',
      digest: 'Digest',
      digestHash: 'DigestHash',
      domScore: 'DomScore',
      downloadCacheDirectory: 'DownloadCacheDirectory',
      errorName: 'ErrorName',
      errorType: 'ErrorType',
      eventId: 'EventId',
      eventLog: 'EventLog',
      exceptionArg1: 'ExceptionArg1',
      exceptionArg2: 'ExceptionArg2',
      exceptionArg3: 'ExceptionArg3',
      exceptionCode: 'ExceptionCode',
      exceptionCodes: 'ExceptionCodes',
      exceptionDetail: 'ExceptionDetail',
      exceptionId: 'ExceptionId',
      exceptionMsg: 'ExceptionMsg',
      exceptionSubtype: 'ExceptionSubtype',
      exceptionType: 'ExceptionType',
      exceptionVersion: 'ExceptionVersion',
      exportStatus: 'ExportStatus',
      externalStorageDirectory: 'ExternalStorageDirectory',
      featureScene: 'FeatureScene',
      fileName: 'FileName',
      filePath: 'FilePath',
      filename: 'Filename',
      flutterRoute: 'FlutterRoute',
      forceGround: 'ForceGround',
      foreGround: 'ForeGround',
      h5FullUrl: 'H5FullUrl',
      h5ShortUrl: 'H5ShortUrl',
      hasOpenMultiProcessMode: 'HasOpenMultiProcessMode',
      hasSdCard: 'HasSdCard',
      hasSgSecurityConfigKey: 'HasSgSecurityConfigKey',
      imei: 'Imei',
      imsi: 'Imsi',
      inMainProcess: 'InMainProcess',
      installSdCard: 'InstallSdCard',
      isBackTrace: 'IsBackTrace',
      isSpeedVersion: 'IsSpeedVersion',
      isp: 'Isp',
      jsBacktrace: 'JsBacktrace',
      language: 'Language',
      launchedTime: 'LaunchedTime',
      lineNo: 'LineNo',
      logHash: 'LogHash',
      mainLog: 'MainLog',
      memoryMap: 'MemoryMap',
      moreInfo1: 'MoreInfo1',
      moreInfo2: 'MoreInfo2',
      moreInfo3: 'MoreInfo3',
      nativeAllThreadDump: 'NativeAllThreadDump',
      nativeMaps: 'NativeMaps',
      needReCluster: 'NeedReCluster',
      openedFileCount: 'OpenedFileCount',
      operations: 'Operations',
      originData: 'OriginData',
      originUri: 'OriginUri',
      os: 'Os',
      osVersion: 'OsVersion',
      page: 'Page',
      parentProcessName: 'ParentProcessName',
      pid: 'Pid',
      platform: 'Platform',
      processName: 'ProcessName',
      province: 'Province',
      reason: 'Reason',
      reportContent: 'ReportContent',
      reportType: 'ReportType',
      resolution: 'Resolution',
      rootDirectory: 'RootDirectory',
      runtimeExtData: 'RuntimeExtData',
      sceneValue: 'SceneValue',
      sdkType: 'SdkType',
      sdkVersion: 'SdkVersion',
      seq: 'Seq',
      serverTime: 'ServerTime',
      sessionId: 'SessionId',
      simpleReportContent: 'SimpleReportContent',
      soLibBuild: 'SoLibBuild',
      speedFlags: 'SpeedFlags',
      stack: 'Stack',
      status: 'Status',
      summary: 'Summary',
      symbolicFileType: 'SymbolicFileType',
      sysLog: 'SysLog',
      threadName: 'ThreadName',
      threads: 'Threads',
      tid: 'Tid',
      track: 'Track',
      triggeredTime: 'TriggeredTime',
      uploadTime: 'UploadTime',
      uri: 'Uri',
      user: 'User',
      userId: 'UserId',
      userNick: 'UserNick',
      utdid: 'Utdid',
      uuid: 'Uuid',
      view: 'View',
      weexFullUrl: 'WeexFullUrl',
      weexShortUrl: 'WeexShortUrl',
      writeLimit: 'WriteLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      access: 'string',
      accessSubType: 'string',
      additionalCallbackInfo: 'string',
      additionalCrossPlatformCrashInfo: 'string',
      additionalCustomInfo: 'string',
      androidVm: 'string',
      appId: 'string',
      appKey: 'number',
      appVersion: 'string',
      argHash: 'number',
      args: 'string',
      backtrace: 'string',
      banner: 'string',
      binaryUuids: 'string',
      brand: 'string',
      browserName: 'string',
      browserVersion: 'string',
      build: 'string',
      businessCountry: 'string',
      businessErrorExtData: 'string',
      businessLogType: 'string',
      carrier: 'string',
      channel: 'string',
      city: 'string',
      clientIp: 'string',
      clientTime: 'number',
      colNo: 'string',
      country: 'string',
      cpuModel: 'string',
      cruxModule: 'string',
      cruxStack: 'string',
      cruxStackHash: 'number',
      cruxStackTrace: 'string',
      cruxStackTraceHash: 'number',
      customExceptionType: 'string',
      customInfo: 'string',
      dataDirectory: 'string',
      deviceId: 'string',
      deviceModel: 'string',
      did: 'string',
      digest: 'string',
      digestHash: 'string',
      domScore: 'string',
      downloadCacheDirectory: 'string',
      errorName: 'string',
      errorType: 'string',
      eventId: 'number',
      eventLog: 'string',
      exceptionArg1: 'string',
      exceptionArg2: 'string',
      exceptionArg3: 'string',
      exceptionCode: 'string',
      exceptionCodes: 'string',
      exceptionDetail: 'string',
      exceptionId: 'string',
      exceptionMsg: 'string',
      exceptionSubtype: 'string',
      exceptionType: 'string',
      exceptionVersion: 'string',
      exportStatus: 'string',
      externalStorageDirectory: 'string',
      featureScene: 'string',
      fileName: 'string',
      filePath: 'string',
      filename: 'string',
      flutterRoute: 'string',
      forceGround: 'number',
      foreGround: 'number',
      h5FullUrl: 'string',
      h5ShortUrl: 'string',
      hasOpenMultiProcessMode: 'number',
      hasSdCard: 'number',
      hasSgSecurityConfigKey: 'number',
      imei: 'string',
      imsi: 'string',
      inMainProcess: 'number',
      installSdCard: 'number',
      isBackTrace: 'number',
      isSpeedVersion: 'number',
      isp: 'string',
      jsBacktrace: 'string',
      language: 'string',
      launchedTime: 'string',
      lineNo: 'string',
      logHash: 'number',
      mainLog: 'string',
      memoryMap: 'string',
      moreInfo1: 'string',
      moreInfo2: 'string',
      moreInfo3: 'string',
      nativeAllThreadDump: 'string',
      nativeMaps: 'string',
      needReCluster: 'number',
      openedFileCount: 'number',
      operations: 'string',
      originData: 'string',
      originUri: 'string',
      os: 'string',
      osVersion: 'string',
      page: 'string',
      parentProcessName: 'string',
      pid: 'number',
      platform: 'string',
      processName: 'string',
      province: 'string',
      reason: 'string',
      reportContent: 'string',
      reportType: 'string',
      resolution: 'string',
      rootDirectory: 'string',
      runtimeExtData: 'string',
      sceneValue: 'string',
      sdkType: 'string',
      sdkVersion: 'string',
      seq: 'string',
      serverTime: 'number',
      sessionId: 'string',
      simpleReportContent: 'string',
      soLibBuild: 'string',
      speedFlags: 'string',
      stack: 'string',
      status: 'string',
      summary: 'string',
      symbolicFileType: 'string',
      sysLog: 'string',
      threadName: 'string',
      threads: 'string',
      tid: 'number',
      track: 'string',
      triggeredTime: 'string',
      uploadTime: 'number',
      uri: 'string',
      user: 'string',
      userId: 'string',
      userNick: 'string',
      utdid: 'string',
      uuid: 'string',
      view: 'string',
      weexFullUrl: 'string',
      weexShortUrl: 'string',
      writeLimit: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConditionalRule extends $dara.Model {
  filter?: EventFilter;
  modifyTime?: string;
  name?: string;
  operator?: string;
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      modifyTime: 'ModifyTime',
      name: 'Name',
      operator: 'Operator',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: EventFilter,
      modifyTime: 'string',
      name: 'string',
      operator: 'string',
      sampleRate: 'number',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventFilter extends $dara.Model {
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  op?: string;
  subFilters?: EventFilter[];
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      op: 'Op',
      subFilters: 'SubFilters',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      op: 'string',
      subFilters: { 'type': 'array', 'itemType': EventFilter },
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.subFilters)) {
      $dara.Model.validateArray(this.subFilters);
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

export class EventRule extends $dara.Model {
  conditional?: ConditionalRule[];
  enable?: boolean;
  eventId?: string;
  modifyTime?: string;
  operator?: string;
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      conditional: 'Conditional',
      enable: 'Enable',
      eventId: 'EventId',
      modifyTime: 'ModifyTime',
      operator: 'Operator',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditional: { 'type': 'array', 'itemType': ConditionalRule },
      enable: 'boolean',
      eventId: 'string',
      modifyTime: 'string',
      operator: 'string',
      sampleRate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditional)) {
      $dara.Model.validateArray(this.conditional);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Filter extends $dara.Model {
  key?: string;
  operator?: string;
  subFilters?: Filter[];
  values?: any;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      operator: 'Operator',
      subFilters: 'SubFilters',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      subFilters: { 'type': 'array', 'itemType': Filter },
      values: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.subFilters)) {
      $dara.Model.validateArray(this.subFilters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FullSampleItem extends $dara.Model {
  id?: string;
  modifyTime?: string;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      modifyTime: 'ModifyTime',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      modifyTime: 'string',
      operator: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SampleBase extends $dara.Model {
  fullSampleDeviceIds?: FullSampleItem[];
  fullSampleUsers?: FullSampleItem[];
  sampleMethod?: string;
  sampleRate?: number;
  static names(): { [key: string]: string } {
    return {
      fullSampleDeviceIds: 'FullSampleDeviceIds',
      fullSampleUsers: 'FullSampleUsers',
      sampleMethod: 'SampleMethod',
      sampleRate: 'SampleRate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullSampleDeviceIds: { 'type': 'array', 'itemType': FullSampleItem },
      fullSampleUsers: { 'type': 'array', 'itemType': FullSampleItem },
      sampleMethod: 'string',
      sampleRate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fullSampleDeviceIds)) {
      $dara.Model.validateArray(this.fullSampleDeviceIds);
    }
    if(Array.isArray(this.fullSampleUsers)) {
      $dara.Model.validateArray(this.fullSampleUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @example
   * h5Resource
   */
  bizModule?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1739808000000
   */
  clientTime?: number;
  /**
   * @example
   * 233588686
   */
  did?: string;
  /**
   * @example
   * false
   */
  force?: boolean;
  /**
   * @example
   * android
   */
  os?: string;
  /**
   * @example
   * abcf4a4b-158c-4a0b-b81c-262785d84c4f
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      clientTime: 'ClientTime',
      did: 'Did',
      force: 'Force',
      os: 'Os',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      clientTime: 'number',
      did: 'string',
      force: 'boolean',
      os: 'string',
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

export class GetErrorResponseBody extends $dara.Model {
  args?: { [key: string]: any };
  /**
   * @example
   * Success
   */
  errorCode?: number;
  /**
   * @example
   * Successful
   */
  message?: string;
  model?: GetErrorResponseBodyModel;
  /**
   * @example
   * A8313212-EB4E-4E15-A7F9-D9C8F3FE8E94
   */
  requestId?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      errorCode: 'ErrorCode',
      message: 'Message',
      model: 'Model',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'number',
      message: 'string',
      model: GetErrorResponseBodyModel,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    if(this.model && typeof (this.model as any).validate === 'function') {
      (this.model as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetErrorResponseBody;
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
      body: GetErrorResponseBody,
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
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("emas-appmonitor", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 获取错误事件详情
   * 
   * @param request - GetErrorRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErrorResponse
   */
  async getErrorWithOptions(request: GetErrorRequest, runtime: $dara.RuntimeOptions): Promise<GetErrorResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.bizModule)) {
      body["BizModule"] = request.bizModule;
    }

    if (!$dara.isNull(request.clientTime)) {
      body["ClientTime"] = request.clientTime;
    }

    if (!$dara.isNull(request.did)) {
      body["Did"] = request.did;
    }

    if (!$dara.isNull(request.force)) {
      body["Force"] = request.force;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetError",
      version: "2019-06-11",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetErrorResponse>(await this.callApi(params, req, runtime), new GetErrorResponse({}));
    } else {
      return $dara.cast<GetErrorResponse>(await this.execute(params, req, runtime), new GetErrorResponse({}));
    }

  }

  /**
   * 获取错误事件详情
   * 
   * @param request - GetErrorRequest
   * @returns GetErrorResponse
   */
  async getError(request: GetErrorRequest): Promise<GetErrorResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErrorWithOptions(request, runtime);
  }

}
