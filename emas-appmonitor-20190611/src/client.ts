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

export class GetErrorsRequestFilter extends $dara.Model {
  /**
   * @example
   * osVersion
   */
  key?: string;
  /**
   * @example
   * and
   */
  operator?: string;
  subFilters?: string[];
  values?: any[];
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
      subFilters: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'any' },
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

export class GetErrorsRequestTimeRange extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1740499200000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1739894400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorsShrinkRequestTimeRange extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1740499200000
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1739894400000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorsResponseBodyModelItems extends $dara.Model {
  /**
   * @example
   * 1740488561065
   */
  clientTime?: number;
  /**
   * @example
   * RANDOM-1729634758587856312DEVICE
   */
  did?: string;
  /**
   * @remarks
   * Utdid
   * 
   * @example
   * RANDOM-1729634758587856312DEVICE
   */
  utdid?: string;
  /**
   * @example
   * 9634758587856312DEV
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clientTime: 'ClientTime',
      did: 'Did',
      utdid: 'Utdid',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientTime: 'number',
      did: 'string',
      utdid: 'string',
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

export class GetErrorsResponseBodyModel extends $dara.Model {
  items?: GetErrorsResponseBodyModelItems[];
  /**
   * @example
   * 10
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  pages?: number;
  /**
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetErrorsResponseBodyModelItems },
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssueRequestFilter extends $dara.Model {
  /**
   * @example
   * MySQL_IOPS
   */
  key?: string;
  /**
   * @example
   * Equal
   */
  operator?: string;
  subFilters?: string[];
  values?: any[];
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
      subFilters: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'any' },
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

export class GetIssueRequestTimeRange extends $dara.Model {
  /**
   * @example
   * 2024-08-23T02:12:00Z
   */
  endTime?: number;
  /**
   * @example
   * Host
   */
  granularity?: number;
  /**
   * @example
   * minute
   */
  granularityUnit?: string;
  /**
   * @example
   * 2024-12-18 00:00:00
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      granularity: 'Granularity',
      granularityUnit: 'GranularityUnit',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      granularity: 'number',
      granularityUnit: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssueShrinkRequestTimeRange extends $dara.Model {
  /**
   * @example
   * 2024-08-23T02:12:00Z
   */
  endTime?: number;
  /**
   * @example
   * Host
   */
  granularity?: number;
  /**
   * @example
   * minute
   */
  granularityUnit?: string;
  /**
   * @example
   * 2024-12-18 00:00:00
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      granularity: 'Granularity',
      granularityUnit: 'GranularityUnit',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      granularity: 'number',
      granularityUnit: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssueResponseBodyModel extends $dara.Model {
  affectedVersions?: string[];
  /**
   * @example
   * java.lang.NullPointerException: Attempt to invoke virtual method \\"java.lang.Object java.lang.ref.WeakReference.get()\\" on a null object reference
   * 	at e.l.a.a.d.h(BasePresenter.java:1)
   * 	at e.l.a.g.c.e.g.s1(GoodsPigLoadPresenter.java:1)
   * 	at e.l.a.h.d.a$a.a(AliOssManager.java:2)
   */
  cruxStack?: string;
  /**
   * @example
   * -6428474329608402395
   */
  digestHash?: string;
  /**
   * @example
   * 2
   */
  errorColumn?: number;
  /**
   * @example
   * 2
   */
  errorCount?: number;
  /**
   * @example
   * 0.2
   */
  errorCountGrowthRate?: number;
  /**
   * @example
   * 4
   */
  errorDeviceCount?: number;
  /**
   * @example
   * 0.2
   */
  errorDeviceCountGrowthRate?: number;
  /**
   * @example
   * 0.2
   */
  errorDeviceRate?: number;
  /**
   * @example
   * 0.2
   */
  errorDeviceRateGrowthRate?: number;
  /**
   * @example
   * test.js
   */
  errorFileName?: string;
  /**
   * @example
   * 1
   */
  errorLine?: string;
  /**
   * @example
   * Error
   */
  errorName?: string;
  /**
   * @example
   * 0
   */
  errorRate?: number;
  /**
   * @example
   * 0.2
   */
  errorRateGrowthRate?: number;
  /**
   * @example
   * ErrorType
   */
  errorType?: string;
  /**
   * @example
   * 1.0.0
   */
  firstVersion?: string;
  /**
   * @example
   * 1673423227000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1740489688615
   */
  gmtLatest?: number;
  /**
   * @example
   * 1
   */
  keyLine?: number;
  name?: string;
  /**
   * @example
   * java.lang.NullPointerException
   */
  stack?: string;
  /**
   * @example
   * SUCCESS
   */
  status?: number;
  /**
   * @example
   * trustee instance
   */
  summary?: string;
  /**
   * @example
   * true
   */
  symbolicStatus?: boolean;
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      affectedVersions: 'AffectedVersions',
      cruxStack: 'CruxStack',
      digestHash: 'DigestHash',
      errorColumn: 'ErrorColumn',
      errorCount: 'ErrorCount',
      errorCountGrowthRate: 'ErrorCountGrowthRate',
      errorDeviceCount: 'ErrorDeviceCount',
      errorDeviceCountGrowthRate: 'ErrorDeviceCountGrowthRate',
      errorDeviceRate: 'ErrorDeviceRate',
      errorDeviceRateGrowthRate: 'ErrorDeviceRateGrowthRate',
      errorFileName: 'ErrorFileName',
      errorLine: 'ErrorLine',
      errorName: 'ErrorName',
      errorRate: 'ErrorRate',
      errorRateGrowthRate: 'ErrorRateGrowthRate',
      errorType: 'ErrorType',
      firstVersion: 'FirstVersion',
      gmtCreate: 'GmtCreate',
      gmtLatest: 'GmtLatest',
      keyLine: 'KeyLine',
      name: 'Name',
      stack: 'Stack',
      status: 'Status',
      summary: 'Summary',
      symbolicStatus: 'SymbolicStatus',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedVersions: { 'type': 'array', 'itemType': 'string' },
      cruxStack: 'string',
      digestHash: 'string',
      errorColumn: 'number',
      errorCount: 'number',
      errorCountGrowthRate: 'number',
      errorDeviceCount: 'number',
      errorDeviceCountGrowthRate: 'number',
      errorDeviceRate: 'number',
      errorDeviceRateGrowthRate: 'number',
      errorFileName: 'string',
      errorLine: 'string',
      errorName: 'string',
      errorRate: 'number',
      errorRateGrowthRate: 'number',
      errorType: 'string',
      firstVersion: 'string',
      gmtCreate: 'number',
      gmtLatest: 'number',
      keyLine: 'number',
      name: 'string',
      stack: 'string',
      status: 'number',
      summary: 'string',
      symbolicStatus: 'boolean',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.affectedVersions)) {
      $dara.Model.validateArray(this.affectedVersions);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssuesRequestFilter extends $dara.Model {
  /**
   * @example
   * erConfig
   */
  key?: string;
  /**
   * @example
   * BeginWith
   */
  operator?: string;
  subFilters?: string[];
  values?: any[];
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
      subFilters: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'any' },
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

export class GetIssuesRequestTimeRange extends $dara.Model {
  /**
   * @example
   * 2024-09-04T02:15:00Z
   */
  endTime?: number;
  /**
   * @example
   * Host
   */
  granularity?: number;
  /**
   * @example
   * day
   */
  granularityUnit?: string;
  /**
   * @example
   * 2024-11-05T16:00:00Z
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      granularity: 'Granularity',
      granularityUnit: 'GranularityUnit',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      granularity: 'number',
      granularityUnit: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssuesShrinkRequestTimeRange extends $dara.Model {
  /**
   * @example
   * 2024-09-04T02:15:00Z
   */
  endTime?: number;
  /**
   * @example
   * Host
   */
  granularity?: number;
  /**
   * @example
   * day
   */
  granularityUnit?: string;
  /**
   * @example
   * 2024-11-05T16:00:00Z
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      granularity: 'Granularity',
      granularityUnit: 'GranularityUnit',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      granularity: 'number',
      granularityUnit: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssuesResponseBodyModelItems extends $dara.Model {
  /**
   * @example
   * 1
   */
  affectedUserCount?: number;
  /**
   * @example
   * -3481243636390427020
   */
  digestHash?: string;
  /**
   * @example
   * 1
   */
  domScore?: string;
  /**
   * @example
   * 1
   */
  errorColumn?: number;
  /**
   * @example
   * 2
   */
  errorCount?: number;
  /**
   * @example
   * 1
   */
  errorDeviceCount?: number;
  /**
   * @example
   * 1.0
   */
  errorDeviceRate?: number;
  /**
   * @example
   * test.js
   */
  errorFileName?: string;
  /**
   * @example
   * 1
   */
  errorLine?: number;
  /**
   * @example
   * ErrorName
   */
  errorName?: string;
  /**
   * @example
   * 0
   */
  errorRate?: number;
  /**
   * @example
   * Error
   */
  errorType?: string;
  /**
   * @example
   * 1691745496851
   */
  eventTime?: string;
  /**
   * @example
   * 1.0.0
   */
  firstVersion?: string;
  /**
   * @example
   * ServiceType
   */
  name?: string;
  /**
   * @example
   * java.lang.NullPointerException: Attempt to invoke virtual method \\"java.lang.Object java.lang.ref.WeakReference.get()\\" on a null object reference
   * 	at e.l.a.a.d.h(BasePresenter.java:1)
   * 	at e.l.a.g.c.e.g.s1(GoodsPigLoadPresenter.java:1)
   * 	at e.l.a.h.d.a$a.a(AliOssManager.java:2)
   */
  stack?: string;
  /**
   * @example
   * CREATE_COMPLETE
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      affectedUserCount: 'AffectedUserCount',
      digestHash: 'DigestHash',
      domScore: 'DomScore',
      errorColumn: 'ErrorColumn',
      errorCount: 'ErrorCount',
      errorDeviceCount: 'ErrorDeviceCount',
      errorDeviceRate: 'ErrorDeviceRate',
      errorFileName: 'ErrorFileName',
      errorLine: 'ErrorLine',
      errorName: 'ErrorName',
      errorRate: 'ErrorRate',
      errorType: 'ErrorType',
      eventTime: 'EventTime',
      firstVersion: 'FirstVersion',
      name: 'Name',
      stack: 'Stack',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedUserCount: 'number',
      digestHash: 'string',
      domScore: 'string',
      errorColumn: 'number',
      errorCount: 'number',
      errorDeviceCount: 'number',
      errorDeviceRate: 'number',
      errorFileName: 'string',
      errorLine: 'number',
      errorName: 'string',
      errorRate: 'number',
      errorType: 'string',
      eventTime: 'string',
      firstVersion: 'string',
      name: 'string',
      stack: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssuesResponseBodyModel extends $dara.Model {
  items?: GetIssuesResponseBodyModelItems[];
  /**
   * @example
   * 2
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  pages?: number;
  /**
   * @example
   * 0
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetIssuesResponseBodyModelItems },
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSymbolicFilesResponseBodyModelItems extends $dara.Model {
  /**
   * @example
   * 1.0.0
   */
  appVersion?: string;
  /**
   * @example
   * e8a1a2b9ab653780b34383a942ac91b2
   */
  buildId?: string;
  /**
   * @example
   * EXPORT_SUCCESS
   */
  exportStatus?: string;
  /**
   * @example
   * app_so.zip
   */
  fileName?: string;
  /**
   * @example
   * 24781204@android/1743506690915-app_so.zip
   */
  filePath?: string;
  /**
   * @example
   * APP_SO
   */
  fileType?: string;
  /**
   * @example
   * 1655962713000
   */
  gmtCreate?: number;
  /**
   * @example
   * 392522
   */
  id?: number;
  /**
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * uuid
   * 
   * @example
   * 9634758587856312DEV
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      buildId: 'BuildId',
      exportStatus: 'ExportStatus',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileType: 'FileType',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      status: 'Status',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      buildId: 'string',
      exportStatus: 'string',
      fileName: 'string',
      filePath: 'string',
      fileType: 'string',
      gmtCreate: 'number',
      id: 'number',
      status: 'string',
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

export class GetSymbolicFilesResponseBodyModel extends $dara.Model {
  items?: GetSymbolicFilesResponseBodyModelItems[];
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 3
   */
  pages?: number;
  /**
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetSymbolicFilesResponseBodyModelItems },
      pageNum: 'number',
      pageSize: 'number',
      pages: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestUploadTokenResponseBodyModel extends $dara.Model {
  /**
   * @remarks
   * OSS AccessKeyId
   * 
   * @example
   * STS.NXEGHKdjkdnINNgLiDE
   */
  accessKeyId?: string;
  /**
   * @remarks
   * OSS AccessKeySecret
   * 
   * @example
   * ikKgkNDGedInGEIngL
   */
  accessKeySecret?: string;
  /**
   * @example
   * oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * Szi9v92mHNikdknfe
   */
  securityToken?: string;
  /**
   * @example
   * symbolic-prod
   */
  uploadBucket?: string;
  /**
   * @example
   * /335374903@iphoneos/
   */
  uploadDir?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      endpoint: 'Endpoint',
      securityToken: 'SecurityToken',
      uploadBucket: 'UploadBucket',
      uploadDir: 'UploadDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      endpoint: 'string',
      securityToken: 'string',
      uploadBucket: 'string',
      uploadDir: 'string',
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

export class GetErrorsRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * crash
   */
  bizModule?: string;
  /**
   * @example
   * -3481243636390427020
   */
  digestHash?: string;
  filter?: GetErrorsRequestFilter;
  /**
   * @example
   * android
   */
  os?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  timeRange?: GetErrorsRequestTimeRange;
  /**
   * @remarks
   * utdid
   * 
   * @example
   * Z70g6V/MXJ8DABtD53eHzn4X
   */
  utdid?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      digestHash: 'DigestHash',
      filter: 'Filter',
      os: 'Os',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      timeRange: 'TimeRange',
      utdid: 'Utdid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      digestHash: 'string',
      filter: GetErrorsRequestFilter,
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      timeRange: GetErrorsRequestTimeRange,
      utdid: 'string',
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * crash
   */
  bizModule?: string;
  /**
   * @example
   * -3481243636390427020
   */
  digestHash?: string;
  filterShrink?: string;
  /**
   * @example
   * android
   */
  os?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  timeRange?: GetErrorsShrinkRequestTimeRange;
  /**
   * @remarks
   * utdid
   * 
   * @example
   * Z70g6V/MXJ8DABtD53eHzn4X
   */
  utdid?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      digestHash: 'DigestHash',
      filterShrink: 'Filter',
      os: 'Os',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      timeRange: 'TimeRange',
      utdid: 'Utdid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      digestHash: 'string',
      filterShrink: 'string',
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      timeRange: GetErrorsShrinkRequestTimeRange,
      utdid: 'string',
    };
  }

  validate() {
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetErrorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 500
   */
  errorCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  model?: GetErrorsResponseBodyModel;
  /**
   * @remarks
   * RequestId
   * 
   * @example
   * B3AD0FE4-36EF-1641-90B1-77618166F2ff
   */
  requestId?: string;
  /**
   * @example
   * true
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
      model: GetErrorsResponseBodyModel,
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

export class GetErrorsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetErrorsResponseBody;
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
      body: GetErrorsResponseBody,
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

export class GetIssueRequest extends $dara.Model {
  /**
   * @remarks
   * AppKey
   * 
   * This parameter is required.
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * h5Resource
   */
  bizModule?: string;
  /**
   * @example
   * 2963475858785631
   */
  digestHash?: string;
  filter?: GetIssueRequestFilter;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * h5
   */
  os?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  timeRange?: GetIssueRequestTimeRange;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      digestHash: 'DigestHash',
      filter: 'Filter',
      os: 'Os',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      digestHash: 'string',
      filter: GetIssueRequestFilter,
      os: 'string',
      timeRange: GetIssueRequestTimeRange,
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssueShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * AppKey
   * 
   * This parameter is required.
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * h5Resource
   */
  bizModule?: string;
  /**
   * @example
   * 2963475858785631
   */
  digestHash?: string;
  filterShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * h5
   */
  os?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  timeRange?: GetIssueShrinkRequestTimeRange;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      digestHash: 'DigestHash',
      filterShrink: 'Filter',
      os: 'Os',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      digestHash: 'string',
      filterShrink: 'string',
      os: 'string',
      timeRange: GetIssueShrinkRequestTimeRange,
    };
  }

  validate() {
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssueResponseBody extends $dara.Model {
  /**
   * @remarks
   * Args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * Successful
   */
  message?: string;
  model?: GetIssueResponseBodyModel;
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
      model: GetIssueResponseBodyModel,
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

export class GetIssueResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIssueResponseBody;
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
      body: GetIssueResponseBody,
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

export class GetIssuesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * h5Resource
   */
  bizModule?: string;
  filter?: GetIssuesRequestFilter;
  /**
   * @example
   * GUI-TEST1711072832000
   */
  name?: string;
  /**
   * @example
   * instances
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  orderType?: string;
  /**
   * @example
   * h5
   */
  os?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * FE_RUNNING
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  timeRange?: GetIssuesRequestTimeRange;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      filter: 'Filter',
      name: 'Name',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      os: 'Os',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      status: 'Status',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      filter: GetIssuesRequestFilter,
      name: 'string',
      orderBy: 'string',
      orderType: 'string',
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      status: 'number',
      timeRange: GetIssuesRequestTimeRange,
    };
  }

  validate() {
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssuesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 233588686
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * h5Resource
   */
  bizModule?: string;
  filterShrink?: string;
  /**
   * @example
   * GUI-TEST1711072832000
   */
  name?: string;
  /**
   * @example
   * instances
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  orderType?: string;
  /**
   * @example
   * h5
   */
  os?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * FE_RUNNING
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  timeRange?: GetIssuesShrinkRequestTimeRange;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      bizModule: 'BizModule',
      filterShrink: 'Filter',
      name: 'Name',
      orderBy: 'OrderBy',
      orderType: 'OrderType',
      os: 'Os',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      status: 'Status',
      timeRange: 'TimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      bizModule: 'string',
      filterShrink: 'string',
      name: 'string',
      orderBy: 'string',
      orderType: 'string',
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      status: 'number',
      timeRange: GetIssuesShrinkRequestTimeRange,
    };
  }

  validate() {
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIssuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  model?: GetIssuesResponseBodyModel;
  /**
   * @example
   * 22111548-55D2-4258-9B18-273E4C134444
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
      model: GetIssuesResponseBodyModel,
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

export class GetIssuesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetIssuesResponseBody;
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
      body: GetIssuesResponseBody,
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

export class GetSymbolicFilesRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * 1743523199999
   */
  endTime?: number;
  /**
   * @example
   * NORMAL
   */
  exportStatus?: string;
  /**
   * @example
   * app_so.zip
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_SO
   */
  fileType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * android
   */
  os?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1742918400000
   */
  startTime?: number;
  /**
   * @remarks
   * uuid
   * 
   * @example
   * abcf4a4b-158c-4a0b-b81c-262785d84c4f
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appVersion: 'AppVersion',
      endTime: 'EndTime',
      exportStatus: 'ExportStatus',
      fileName: 'FileName',
      fileType: 'FileType',
      os: 'Os',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      appVersion: 'string',
      endTime: 'number',
      exportStatus: 'string',
      fileName: 'string',
      fileType: 'string',
      os: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      startTime: 'number',
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

export class GetSymbolicFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  model?: GetSymbolicFilesResponseBodyModel;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * B3AD0FE4-36EF-1641-90B1-77618166F2ff
   */
  requestId?: string;
  /**
   * @example
   * true
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
      model: GetSymbolicFilesResponseBodyModel,
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

export class GetSymbolicFilesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetSymbolicFilesResponseBody;
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
      body: GetSymbolicFilesResponseBody,
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

export class RequestUploadTokenRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 24780725
   */
  appKey?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * android
   */
  os?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      os: 'Os',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      os: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RequestUploadTokenResponseBody extends $dara.Model {
  /**
   * @remarks
   * Args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 200
   */
  errorCode?: number;
  /**
   * @example
   * Successful
   */
  message?: string;
  model?: RequestUploadTokenResponseBodyModel;
  /**
   * @example
   * AB8AB5EC-9636-421D-AE7C-BB227DFC95B0
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
      model: RequestUploadTokenResponseBodyModel,
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

export class RequestUploadTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RequestUploadTokenResponseBody;
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
      body: RequestUploadTokenResponseBody,
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

export class SubmitSymbolicRequest extends $dara.Model {
  /**
   * @remarks
   * appKey
   * 
   * This parameter is required.
   * 
   * @example
   * 24781204
   */
  appKey?: number;
  /**
   * @example
   * 1.0
   */
  appVersion?: string;
  /**
   * @example
   * ab6b81d800968f2
   */
  buildId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * app_so.zip
   */
  fileName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 24781204@android/1743506690915-app_so.zip
   */
  filePath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * APP_SO
   */
  fileType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * android
   */
  os?: string;
  /**
   * @remarks
   * uuid
   * 
   * @example
   * abcf4a4b-158c-4a0b-b81c-262785d84c4f
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      appKey: 'AppKey',
      appVersion: 'AppVersion',
      buildId: 'BuildId',
      fileName: 'FileName',
      filePath: 'FilePath',
      fileType: 'FileType',
      os: 'Os',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appKey: 'number',
      appVersion: 'string',
      buildId: 'string',
      fileName: 'string',
      filePath: 'string',
      fileType: 'string',
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

export class SubmitSymbolicResponseBody extends $dara.Model {
  /**
   * @remarks
   * args
   */
  args?: { [key: string]: any };
  /**
   * @example
   * 500
   */
  errorCode?: number;
  /**
   * @example
   * Successful
   */
  message?: string;
  /**
   * @example
   * B3AD0FE4-36EF-1641-90B1-77618166F2ff
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
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      errorCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitSymbolicResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SubmitSymbolicResponseBody;
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
      body: SubmitSymbolicResponseBody,
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

  /**
   * 获取某一聚合错误下所有的错误事件列表
   * 
   * @param tmpReq - GetErrorsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetErrorsResponse
   */
  async getErrorsWithOptions(tmpReq: GetErrorsRequest, runtime: $dara.RuntimeOptions): Promise<GetErrorsResponse> {
    tmpReq.validate();
    let request = new GetErrorsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.bizModule)) {
      body["BizModule"] = request.bizModule;
    }

    if (!$dara.isNull(request.digestHash)) {
      body["DigestHash"] = request.digestHash;
    }

    if (!$dara.isNull(request.filterShrink)) {
      body["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timeRange)) {
      bodyFlat["TimeRange"] = request.timeRange;
    }

    if (!$dara.isNull(request.utdid)) {
      body["Utdid"] = request.utdid;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetErrors",
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
      return $dara.cast<GetErrorsResponse>(await this.callApi(params, req, runtime), new GetErrorsResponse({}));
    } else {
      return $dara.cast<GetErrorsResponse>(await this.execute(params, req, runtime), new GetErrorsResponse({}));
    }

  }

  /**
   * 获取某一聚合错误下所有的错误事件列表
   * 
   * @param request - GetErrorsRequest
   * @returns GetErrorsResponse
   */
  async getErrors(request: GetErrorsRequest): Promise<GetErrorsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getErrorsWithOptions(request, runtime);
  }

  /**
   * 获取聚合错误详情
   * 
   * @param tmpReq - GetIssueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIssueResponse
   */
  async getIssueWithOptions(tmpReq: GetIssueRequest, runtime: $dara.RuntimeOptions): Promise<GetIssueResponse> {
    tmpReq.validate();
    let request = new GetIssueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.bizModule)) {
      body["BizModule"] = request.bizModule;
    }

    if (!$dara.isNull(request.digestHash)) {
      body["DigestHash"] = request.digestHash;
    }

    if (!$dara.isNull(request.filterShrink)) {
      body["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timeRange)) {
      bodyFlat["TimeRange"] = request.timeRange;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIssue",
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
      return $dara.cast<GetIssueResponse>(await this.callApi(params, req, runtime), new GetIssueResponse({}));
    } else {
      return $dara.cast<GetIssueResponse>(await this.execute(params, req, runtime), new GetIssueResponse({}));
    }

  }

  /**
   * 获取聚合错误详情
   * 
   * @param request - GetIssueRequest
   * @returns GetIssueResponse
   */
  async getIssue(request: GetIssueRequest): Promise<GetIssueResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIssueWithOptions(request, runtime);
  }

  /**
   * 获取聚合错误列表
   * 
   * @param tmpReq - GetIssuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetIssuesResponse
   */
  async getIssuesWithOptions(tmpReq: GetIssuesRequest, runtime: $dara.RuntimeOptions): Promise<GetIssuesResponse> {
    tmpReq.validate();
    let request = new GetIssuesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.filter)) {
      request.filterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.filter, "Filter", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.bizModule)) {
      body["BizModule"] = request.bizModule;
    }

    if (!$dara.isNull(request.filterShrink)) {
      body["Filter"] = request.filterShrink;
    }

    if (!$dara.isNull(request.name)) {
      body["Name"] = request.name;
    }

    if (!$dara.isNull(request.orderBy)) {
      body["OrderBy"] = request.orderBy;
    }

    if (!$dara.isNull(request.orderType)) {
      body["OrderType"] = request.orderType;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.status)) {
      body["Status"] = request.status;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!$dara.isNull(request.timeRange)) {
      bodyFlat["TimeRange"] = request.timeRange;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetIssues",
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
      return $dara.cast<GetIssuesResponse>(await this.callApi(params, req, runtime), new GetIssuesResponse({}));
    } else {
      return $dara.cast<GetIssuesResponse>(await this.execute(params, req, runtime), new GetIssuesResponse({}));
    }

  }

  /**
   * 获取聚合错误列表
   * 
   * @param request - GetIssuesRequest
   * @returns GetIssuesResponse
   */
  async getIssues(request: GetIssuesRequest): Promise<GetIssuesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getIssuesWithOptions(request, runtime);
  }

  /**
   * @param request - GetSymbolicFilesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetSymbolicFilesResponse
   */
  async getSymbolicFilesWithOptions(request: GetSymbolicFilesRequest, runtime: $dara.RuntimeOptions): Promise<GetSymbolicFilesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.endTime)) {
      body["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.exportStatus)) {
      body["ExportStatus"] = request.exportStatus;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    if (!$dara.isNull(request.pageIndex)) {
      body["PageIndex"] = request.pageIndex;
    }

    if (!$dara.isNull(request.pageSize)) {
      body["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      body["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.uuid)) {
      body["Uuid"] = request.uuid;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetSymbolicFiles",
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
      return $dara.cast<GetSymbolicFilesResponse>(await this.callApi(params, req, runtime), new GetSymbolicFilesResponse({}));
    } else {
      return $dara.cast<GetSymbolicFilesResponse>(await this.execute(params, req, runtime), new GetSymbolicFilesResponse({}));
    }

  }

  /**
   * @param request - GetSymbolicFilesRequest
   * @returns GetSymbolicFilesResponse
   */
  async getSymbolicFiles(request: GetSymbolicFilesRequest): Promise<GetSymbolicFilesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getSymbolicFilesWithOptions(request, runtime);
  }

  /**
   * @param request - RequestUploadTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RequestUploadTokenResponse
   */
  async requestUploadTokenWithOptions(request: RequestUploadTokenRequest, runtime: $dara.RuntimeOptions): Promise<RequestUploadTokenResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.os)) {
      body["Os"] = request.os;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RequestUploadToken",
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
      return $dara.cast<RequestUploadTokenResponse>(await this.callApi(params, req, runtime), new RequestUploadTokenResponse({}));
    } else {
      return $dara.cast<RequestUploadTokenResponse>(await this.execute(params, req, runtime), new RequestUploadTokenResponse({}));
    }

  }

  /**
   * @param request - RequestUploadTokenRequest
   * @returns RequestUploadTokenResponse
   */
  async requestUploadToken(request: RequestUploadTokenRequest): Promise<RequestUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.requestUploadTokenWithOptions(request, runtime);
  }

  /**
   * @param request - SubmitSymbolicRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SubmitSymbolicResponse
   */
  async submitSymbolicWithOptions(request: SubmitSymbolicRequest, runtime: $dara.RuntimeOptions): Promise<SubmitSymbolicResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.appKey)) {
      body["AppKey"] = request.appKey;
    }

    if (!$dara.isNull(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!$dara.isNull(request.buildId)) {
      body["BuildId"] = request.buildId;
    }

    if (!$dara.isNull(request.fileName)) {
      body["FileName"] = request.fileName;
    }

    if (!$dara.isNull(request.filePath)) {
      body["FilePath"] = request.filePath;
    }

    if (!$dara.isNull(request.fileType)) {
      body["FileType"] = request.fileType;
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
      action: "SubmitSymbolic",
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
      return $dara.cast<SubmitSymbolicResponse>(await this.callApi(params, req, runtime), new SubmitSymbolicResponse({}));
    } else {
      return $dara.cast<SubmitSymbolicResponse>(await this.execute(params, req, runtime), new SubmitSymbolicResponse({}));
    }

  }

  /**
   * @param request - SubmitSymbolicRequest
   * @returns SubmitSymbolicResponse
   */
  async submitSymbolic(request: SubmitSymbolicRequest): Promise<SubmitSymbolicResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.submitSymbolicWithOptions(request, runtime);
  }

}
