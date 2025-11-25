// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribeAttacksResponseBodyAttacksInputParamItemList extends $dara.Model {
  /**
   * @example
   * 4E7772EA-1AD0-5583-BA55-A4****
   */
  processedKey?: string;
  /**
   * @example
   * 4E7772EA-1AD0-5583-BA55-A4****
   */
  rawKey?: string;
  /**
   * @example
   * 10.101.9.189
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      processedKey: 'ProcessedKey',
      rawKey: 'RawKey',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processedKey: 'string',
      rawKey: 'string',
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

export class DescribeAttacksResponseBodyAttacks extends $dara.Model {
  /**
   * @example
   * /app
   */
  appDir?: string;
  /**
   * @example
   * 661dece60bb1
   */
  appId?: string;
  /**
   * @example
   * zhxy
   */
  appName?: string;
  /**
   * @example
   * null
   */
  avd?: string;
  /**
   * @example
   * jar
   */
  cmdline?: string;
  /**
   * @example
   * high
   */
  confidence?: string;
  /**
   * @example
   * {\\"Exist\\": \\"false\\"}
   */
  content?: string;
  /**
   * @example
   * 1024
   */
  contentLength?: number;
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * {\\"All\\": 12, \\"Online\\": 9}
   */
  data?: string;
  /**
   * @example
   * 0
   */
  handleStatus?: number;
  /**
   * @example
   * 1758607200
   */
  handleTimestamp?: number;
  /**
   * @example
   * {\\"X-Total-Count\\": 1}
   */
  headers?: string;
  /**
   * @example
   * 100.116.60.78
   */
  hostId?: string;
  /**
   * @example
   * hostnames
   */
  hostname?: string;
  inputParamItemList?: DescribeAttacksResponseBodyAttacksInputParamItemList[];
  installType?: number;
  /**
   * @example
   * 47.92.92.85
   */
  ip?: string;
  /**
   * @example
   * 1.8.0_342
   */
  jdk?: string;
  /**
   * @example
   * cn
   */
  language?: string;
  /**
   * @example
   * 1.0
   */
  languageVersion?: string;
  /**
   * @example
   * 1727281449756
   */
  maxTimestamp?: number;
  message?: string;
  /**
   * @example
   * POST
   */
  method?: string;
  /**
   * @example
   * null
   */
  middlewareInstanceId?: string;
  /**
   * @example
   * 1727281449756
   */
  minTimestamp?: number;
  /**
   * @example
   * linux
   */
  os?: string;
  /**
   * @example
   * linux
   */
  osArch?: string;
  /**
   * @example
   * aliyun_V3_5.1
   */
  osVersion?: string;
  /**
   * @example
   * PUBLIC_CLOUD
   */
  param?: string;
  /**
   * @example
   * 245256
   */
  payload?: string;
  /**
   * @example
   * 100
   */
  payloadLength?: number;
  /**
   * @example
   * 29719
   */
  pid?: string;
  /**
   * @example
   * php
   */
  raspVersion?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @example
   * 192.168.1.1
   */
  remote?: string;
  /**
   * @example
   * [{\\"TagKey\\": \\"acs:rm:rgId\\", \\"TagValue\\": \\"rg-aek25bwhtt22cjq\\"}]
   */
  result?: string;
  /**
   * @example
   * 2
   */
  ruleResult?: string;
  /**
   * @example
   * low
   */
  severity?: string;
  stacktrace?: string[];
  /**
   * @example
   * 1724033134746
   */
  time?: string;
  /**
   * @example
   * 1712284140
   */
  timestamp?: number;
  /**
   * @example
   * exact
   */
  type?: string;
  /**
   * @remarks
   * unionId。
   * 
   * @example
   * 23yaet4dg6ek3s7aj
   */
  unionId?: string;
  /**
   * @example
   * https://other-general-huadong1.oss-cn-hangzhou.aliyuncs.com/uploadWidget/TaxiInvoice_01.jpeg
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      appDir: 'AppDir',
      appId: 'AppId',
      appName: 'AppName',
      avd: 'Avd',
      cmdline: 'Cmdline',
      confidence: 'Confidence',
      content: 'Content',
      contentLength: 'ContentLength',
      count: 'Count',
      data: 'Data',
      handleStatus: 'HandleStatus',
      handleTimestamp: 'HandleTimestamp',
      headers: 'Headers',
      hostId: 'HostId',
      hostname: 'Hostname',
      inputParamItemList: 'InputParamItemList',
      installType: 'InstallType',
      ip: 'Ip',
      jdk: 'Jdk',
      language: 'Language',
      languageVersion: 'LanguageVersion',
      maxTimestamp: 'MaxTimestamp',
      message: 'Message',
      method: 'Method',
      middlewareInstanceId: 'MiddlewareInstanceId',
      minTimestamp: 'MinTimestamp',
      os: 'Os',
      osArch: 'OsArch',
      osVersion: 'OsVersion',
      param: 'Param',
      payload: 'Payload',
      payloadLength: 'PayloadLength',
      pid: 'Pid',
      raspVersion: 'RaspVersion',
      region: 'Region',
      remote: 'Remote',
      result: 'Result',
      ruleResult: 'RuleResult',
      severity: 'Severity',
      stacktrace: 'Stacktrace',
      time: 'Time',
      timestamp: 'Timestamp',
      type: 'Type',
      unionId: 'UnionId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appDir: 'string',
      appId: 'string',
      appName: 'string',
      avd: 'string',
      cmdline: 'string',
      confidence: 'string',
      content: 'string',
      contentLength: 'number',
      count: 'number',
      data: 'string',
      handleStatus: 'number',
      handleTimestamp: 'number',
      headers: 'string',
      hostId: 'string',
      hostname: 'string',
      inputParamItemList: { 'type': 'array', 'itemType': DescribeAttacksResponseBodyAttacksInputParamItemList },
      installType: 'number',
      ip: 'string',
      jdk: 'string',
      language: 'string',
      languageVersion: 'string',
      maxTimestamp: 'number',
      message: 'string',
      method: 'string',
      middlewareInstanceId: 'string',
      minTimestamp: 'number',
      os: 'string',
      osArch: 'string',
      osVersion: 'string',
      param: 'string',
      payload: 'string',
      payloadLength: 'number',
      pid: 'string',
      raspVersion: 'string',
      region: 'string',
      remote: 'string',
      result: 'string',
      ruleResult: 'string',
      severity: 'string',
      stacktrace: { 'type': 'array', 'itemType': 'string' },
      time: 'string',
      timestamp: 'number',
      type: 'string',
      unionId: 'string',
      url: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.inputParamItemList)) {
      $dara.Model.validateArray(this.inputParamItemList);
    }
    if(Array.isArray(this.stacktrace)) {
      $dara.Model.validateArray(this.stacktrace);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAttacksResponseBody extends $dara.Model {
  attacks?: DescribeAttacksResponseBodyAttacks[];
  /**
   * @example
   * 4E7772EA-1AD0-5583-BA55-A4E7B65F****
   */
  requestId?: string;
  /**
   * @example
   * 289
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      attacks: 'Attacks',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attacks: { 'type': 'array', 'itemType': DescribeAttacksResponseBodyAttacks },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.attacks)) {
      $dara.Model.validateArray(this.attacks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

