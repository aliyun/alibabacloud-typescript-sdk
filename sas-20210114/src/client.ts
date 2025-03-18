// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class DescribeScreenAlarmEventListResponseBodyPageInfo extends $dara.Model {
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenAlarmEventListResponseBodySuspEvents extends $dara.Model {
  alarmEventName?: string;
  alarmEventType?: string;
  /**
   * @example
   * 8df914418f4211fbf756efe7a6f4****
   */
  alarmUniqueInfo?: string;
  /**
   * @example
   * true
   */
  canBeDealOnLine?: boolean;
  /**
   * @example
   * false
   */
  canCancelFault?: boolean;
  /**
   * @example
   * sas
   */
  dataSource?: string;
  /**
   * @example
   * false
   */
  dealed?: boolean;
  /**
   * @example
   * {\\"Type\\": \\"text\\", \\"Value\\": u\\"\\u5efa\\u8bae\\u8fdb\\u884c\\u79c1\\u7f51\\u767d\\u540d\\u5355\\u914d\\u7f6e\\uff0c\\u786e\\u4fdd\\u8bbf\\u95ee\\u5b89\\u5168\\u3002\\"}
   */
  description?: string;
  /**
   * @example
   * 1543740301000
   */
  endTime?: number;
  /**
   * @example
   * fzerp-dev
   */
  instanceName?: string;
  /**
   * @example
   * 123.21.XX.XX
   */
  internetIp?: string;
  /**
   * @example
   * 100.100.XX.XX
   */
  intranetIp?: string;
  /**
   * @example
   * serious
   */
  level?: string;
  /**
   * @example
   * 1
   */
  saleVersion?: string;
  /**
   * @example
   * {\\"Type\\": \\"text\\", \\"Value\\": \\"Enter NAS console - monitoring and auditing - log analysis - log management - new log dump to create a log recording service for the file system.\\"}
   */
  solution?: string;
  /**
   * @example
   * 1543740301000
   */
  startTime?: number;
  /**
   * @example
   * 1
   */
  suspiciousEventCount?: number;
  /**
   * @example
   * bf6b30d3-eea8-4924-9f0a-****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventName: 'AlarmEventName',
      alarmEventType: 'AlarmEventType',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      canBeDealOnLine: 'CanBeDealOnLine',
      canCancelFault: 'CanCancelFault',
      dataSource: 'DataSource',
      dealed: 'Dealed',
      description: 'Description',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      level: 'Level',
      saleVersion: 'SaleVersion',
      solution: 'Solution',
      startTime: 'StartTime',
      suspiciousEventCount: 'SuspiciousEventCount',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventName: 'string',
      alarmEventType: 'string',
      alarmUniqueInfo: 'string',
      canBeDealOnLine: 'boolean',
      canCancelFault: 'boolean',
      dataSource: 'string',
      dealed: 'boolean',
      description: 'string',
      endTime: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      level: 'string',
      saleVersion: 'string',
      solution: 'string',
      startTime: 'number',
      suspiciousEventCount: 'number',
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

export class DescribeScreenCloudHcRiskResponseBodyCloudHcRiskItems extends $dara.Model {
  /**
   * @example
   * 5
   */
  affectCount?: number;
  /**
   * @example
   * OSS-PublicReadOpenManifestFileWithoutEncryption
   */
  checkItem?: string;
  /**
   * @example
   * HIGH
   */
  level?: string;
  pass?: boolean;
  static names(): { [key: string]: string } {
    return {
      affectCount: 'AffectCount',
      checkItem: 'CheckItem',
      level: 'Level',
      pass: 'Pass',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectCount: 'number',
      checkItem: 'string',
      level: 'string',
      pass: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenDataMapResponseBodySasScreenTypeListTypeDataDate extends $dara.Model {
  /**
   * @example
   * second
   */
  unit?: string;
  /**
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      unit: 'string',
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

export class DescribeScreenDataMapResponseBodySasScreenTypeListTypeData extends $dara.Model {
  /**
   * @example
   * VUL_VUL
   */
  code?: string;
  date?: DescribeScreenDataMapResponseBodySasScreenTypeListTypeDataDate[];
  /**
   * @example
   * 25
   */
  id?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      date: 'Date',
      id: 'Id',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      date: { 'type': 'array', 'itemType': DescribeScreenDataMapResponseBodySasScreenTypeListTypeDataDate },
      id: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.date)) {
      $dara.Model.validateArray(this.date);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenDataMapResponseBodySasScreenTypeList extends $dara.Model {
  type?: string;
  /**
   * @example
   * ASSETS
   */
  typeCode?: string;
  typeData?: DescribeScreenDataMapResponseBodySasScreenTypeListTypeData[];
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      typeCode: 'TypeCode',
      typeData: 'TypeData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      typeCode: 'string',
      typeData: { 'type': 'array', 'itemType': DescribeScreenDataMapResponseBodySasScreenTypeListTypeData },
    };
  }

  validate() {
    if(Array.isArray(this.typeData)) {
      $dara.Model.validateArray(this.typeData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenEmerRiskResponseBodyCloudHcRiskItems extends $dara.Model {
  /**
   * @example
   * 3
   */
  affectCount?: number;
  /**
   * @example
   * ASAP
   */
  level?: string;
  vulName?: string;
  static names(): { [key: string]: string } {
    return {
      affectCount: 'AffectCount',
      level: 'Level',
      vulName: 'VulName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectCount: 'number',
      level: 'string',
      vulName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenHostStatisticsResponseBodyData extends $dara.Model {
  safeCount?: string[];
  suspEventMachineNames?: string[];
  suspEventUuids?: string[];
  weaknessMachineNames?: string[];
  weaknessUuids?: string[];
  static names(): { [key: string]: string } {
    return {
      safeCount: 'SafeCount',
      suspEventMachineNames: 'SuspEventMachineNames',
      suspEventUuids: 'SuspEventUuids',
      weaknessMachineNames: 'WeaknessMachineNames',
      weaknessUuids: 'WeaknessUuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      safeCount: { 'type': 'array', 'itemType': 'string' },
      suspEventMachineNames: { 'type': 'array', 'itemType': 'string' },
      suspEventUuids: { 'type': 'array', 'itemType': 'string' },
      weaknessMachineNames: { 'type': 'array', 'itemType': 'string' },
      weaknessUuids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.safeCount)) {
      $dara.Model.validateArray(this.safeCount);
    }
    if(Array.isArray(this.suspEventMachineNames)) {
      $dara.Model.validateArray(this.suspEventMachineNames);
    }
    if(Array.isArray(this.suspEventUuids)) {
      $dara.Model.validateArray(this.suspEventUuids);
    }
    if(Array.isArray(this.weaknessMachineNames)) {
      $dara.Model.validateArray(this.weaknessMachineNames);
    }
    if(Array.isArray(this.weaknessUuids)) {
      $dara.Model.validateArray(this.weaknessUuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenScoreThreadResponseBodyData extends $dara.Model {
  socreThread?: string[];
  socreThreadDate?: string[];
  static names(): { [key: string]: string } {
    return {
      socreThread: 'SocreThread',
      socreThreadDate: 'SocreThreadDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      socreThread: { 'type': 'array', 'itemType': 'string' },
      socreThreadDate: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.socreThread)) {
      $dara.Model.validateArray(this.socreThread);
    }
    if(Array.isArray(this.socreThreadDate)) {
      $dara.Model.validateArray(this.socreThreadDate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenSecurityStatInfoResponseBodyAttackEvent extends $dara.Model {
  dateArray?: string[];
  /**
   * @example
   * 1096
   */
  totalCount?: number;
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      dateArray: 'DateArray',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateArray: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dateArray)) {
      $dara.Model.validateArray(this.dateArray);
    }
    if(Array.isArray(this.valueArray)) {
      $dara.Model.validateArray(this.valueArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenSecurityStatInfoResponseBodyHealthCheck extends $dara.Model {
  dateArray?: string[];
  /**
   * @example
   * 10
   */
  highCount?: number;
  highList?: string[];
  levelsOn?: string[];
  /**
   * @example
   * 0
   */
  lowCount?: number;
  lowList?: string[];
  /**
   * @example
   * 21
   */
  mediumCount?: number;
  mediumList?: string[];
  /**
   * @example
   * 32
   */
  totalCount?: number;
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      dateArray: 'DateArray',
      highCount: 'HighCount',
      highList: 'HighList',
      levelsOn: 'LevelsOn',
      lowCount: 'LowCount',
      lowList: 'LowList',
      mediumCount: 'MediumCount',
      mediumList: 'MediumList',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateArray: { 'type': 'array', 'itemType': 'string' },
      highCount: 'number',
      highList: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      lowCount: 'number',
      lowList: { 'type': 'array', 'itemType': 'string' },
      mediumCount: 'number',
      mediumList: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dateArray)) {
      $dara.Model.validateArray(this.dateArray);
    }
    if(Array.isArray(this.highList)) {
      $dara.Model.validateArray(this.highList);
    }
    if(Array.isArray(this.levelsOn)) {
      $dara.Model.validateArray(this.levelsOn);
    }
    if(Array.isArray(this.lowList)) {
      $dara.Model.validateArray(this.lowList);
    }
    if(Array.isArray(this.mediumList)) {
      $dara.Model.validateArray(this.mediumList);
    }
    if(Array.isArray(this.valueArray)) {
      $dara.Model.validateArray(this.valueArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenSecurityStatInfoResponseBodySecurityEvent extends $dara.Model {
  dateArray?: string[];
  levelsOn?: string[];
  /**
   * @example
   * 0
   */
  remindCount?: number;
  remindList?: string[];
  /**
   * @example
   * 2
   */
  seriousCount?: number;
  seriousList?: string[];
  /**
   * @example
   * 10
   */
  suspiciousCount?: number;
  suspiciousList?: string[];
  /**
   * @example
   * 8
   */
  totalCount?: number;
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      dateArray: 'DateArray',
      levelsOn: 'LevelsOn',
      remindCount: 'RemindCount',
      remindList: 'RemindList',
      seriousCount: 'SeriousCount',
      seriousList: 'SeriousList',
      suspiciousCount: 'SuspiciousCount',
      suspiciousList: 'SuspiciousList',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateArray: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      remindCount: 'number',
      remindList: { 'type': 'array', 'itemType': 'string' },
      seriousCount: 'number',
      seriousList: { 'type': 'array', 'itemType': 'string' },
      suspiciousCount: 'number',
      suspiciousList: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dateArray)) {
      $dara.Model.validateArray(this.dateArray);
    }
    if(Array.isArray(this.levelsOn)) {
      $dara.Model.validateArray(this.levelsOn);
    }
    if(Array.isArray(this.remindList)) {
      $dara.Model.validateArray(this.remindList);
    }
    if(Array.isArray(this.seriousList)) {
      $dara.Model.validateArray(this.seriousList);
    }
    if(Array.isArray(this.suspiciousList)) {
      $dara.Model.validateArray(this.suspiciousList);
    }
    if(Array.isArray(this.valueArray)) {
      $dara.Model.validateArray(this.valueArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenSecurityStatInfoResponseBodyVulnerability extends $dara.Model {
  /**
   * @example
   * 109
   */
  asapCount?: number;
  asapList?: string[];
  dateArray?: string[];
  /**
   * @example
   * 275
   */
  laterCount?: number;
  laterList?: string[];
  levelsOn?: string[];
  /**
   * @example
   * 0
   */
  nntfCount?: number;
  nntfList?: string[];
  /**
   * @example
   * 384
   */
  totalCount?: number;
  valueArray?: string[];
  static names(): { [key: string]: string } {
    return {
      asapCount: 'AsapCount',
      asapList: 'AsapList',
      dateArray: 'DateArray',
      laterCount: 'LaterCount',
      laterList: 'LaterList',
      levelsOn: 'LevelsOn',
      nntfCount: 'NntfCount',
      nntfList: 'NntfList',
      totalCount: 'TotalCount',
      valueArray: 'ValueArray',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asapCount: 'number',
      asapList: { 'type': 'array', 'itemType': 'string' },
      dateArray: { 'type': 'array', 'itemType': 'string' },
      laterCount: 'number',
      laterList: { 'type': 'array', 'itemType': 'string' },
      levelsOn: { 'type': 'array', 'itemType': 'string' },
      nntfCount: 'number',
      nntfList: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
      valueArray: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.asapList)) {
      $dara.Model.validateArray(this.asapList);
    }
    if(Array.isArray(this.dateArray)) {
      $dara.Model.validateArray(this.dateArray);
    }
    if(Array.isArray(this.laterList)) {
      $dara.Model.validateArray(this.laterList);
    }
    if(Array.isArray(this.levelsOn)) {
      $dara.Model.validateArray(this.levelsOn);
    }
    if(Array.isArray(this.nntfList)) {
      $dara.Model.validateArray(this.nntfList);
    }
    if(Array.isArray(this.valueArray)) {
      $dara.Model.validateArray(this.valueArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenTitlesResponseBodySasScreenSettingList extends $dara.Model {
  /**
   * @example
   * 3267
   */
  screenID?: number;
  /**
   * @example
   * titlexxx
   */
  screenTitle?: string;
  static names(): { [key: string]: string } {
    return {
      screenID: 'ScreenID',
      screenTitle: 'ScreenTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      screenID: 'number',
      screenTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileDetectResultInnerResponseBodyResultList extends $dara.Model {
  code?: string;
  expireTime?: string;
  ext?: string;
  hashKey?: string;
  message?: string;
  result?: number;
  score?: number;
  virusType?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      expireTime: 'ExpireTime',
      ext: 'Ext',
      hashKey: 'HashKey',
      message: 'Message',
      result: 'Result',
      score: 'Score',
      virusType: 'VirusType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      expireTime: 'string',
      ext: 'string',
      hashKey: 'string',
      message: 'string',
      result: 'number',
      score: 'number',
      virusType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalUserConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  globalConfigSwitch?: boolean;
  /**
   * @example
   * ransomware_breaking
   */
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      globalConfigSwitch: 'GlobalConfigSwitch',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalConfigSwitch: 'boolean',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScreenSettingRequest extends $dara.Model {
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  logoPower?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://img.alicdn.com/tfs/xxxx.png
   */
  logoUrl?: string;
  /**
   * @example
   * https://monitor.xxxxxxx
   */
  monitorUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"positionId":1,"componentId":3,"date":"7-day"},{"positionId":2,"componentId":1,"date":"0-second"},{"positionId":3,"componentId":8,"date":"15-day"},{"positionId":4,"componentId":11,"date":"15-day"},{"positionId":5,"componentId":23,"date":"24-hour"},{"positionId":6,"componentId":17,"date":"24-hour"},{"positionId":7,"componentId":13,"date":"24-hour"},{"positionId":8,"componentId":25,"date":"0-second"}]
   */
  screenDataMap?: string;
  /**
   * @example
   * 0
   */
  screenDefault?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      logoPower: 'LogoPower',
      logoUrl: 'LogoUrl',
      monitorUrl: 'MonitorUrl',
      screenDataMap: 'ScreenDataMap',
      screenDefault: 'ScreenDefault',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      logoPower: 'boolean',
      logoUrl: 'string',
      monitorUrl: 'string',
      screenDataMap: 'string',
      screenDefault: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateScreenSettingResponseBody extends $dara.Model {
  /**
   * @example
   * 123
   */
  id?: number;
  /**
   * @example
   * 898F7AA7-CECD-5EC7-AF4D-664C601B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

export class CreateScreenSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateScreenSettingResponseBody;
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
      body: CreateScreenSettingResponseBody,
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

export class DeleteScreenSettingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteScreenSettingResponseBody extends $dara.Model {
  /**
   * @example
   * CE500770-42D3-442E-9DDD-156E0F9F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteScreenSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteScreenSettingResponseBody;
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
      body: DeleteScreenSettingResponseBody,
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

export class DescribeScreenAlarmEventListRequest extends $dara.Model {
  alarmEventName?: string;
  alarmEventType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * Y
   */
  dealed?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * serious
   */
  levels?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @example
   * 222.185.XX.XX
   */
  remark?: string;
  /**
   * @example
   * 1683862286000
   */
  timeEnd?: string;
  /**
   * @example
   * 1687104000000
   */
  timeStart?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventName: 'AlarmEventName',
      alarmEventType: 'AlarmEventType',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      from: 'From',
      lang: 'Lang',
      levels: 'Levels',
      pageSize: 'PageSize',
      remark: 'Remark',
      timeEnd: 'TimeEnd',
      timeStart: 'TimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventName: 'string',
      alarmEventType: 'string',
      currentPage: 'number',
      dealed: 'string',
      from: 'string',
      lang: 'string',
      levels: 'string',
      pageSize: 'string',
      remark: 'string',
      timeEnd: 'string',
      timeStart: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenAlarmEventListResponseBody extends $dara.Model {
  pageInfo?: DescribeScreenAlarmEventListResponseBodyPageInfo;
  /**
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F
   */
  requestId?: string;
  suspEvents?: DescribeScreenAlarmEventListResponseBodySuspEvents[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      suspEvents: 'SuspEvents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeScreenAlarmEventListResponseBodyPageInfo,
      requestId: 'string',
      suspEvents: { 'type': 'array', 'itemType': DescribeScreenAlarmEventListResponseBodySuspEvents },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.suspEvents)) {
      $dara.Model.validateArray(this.suspEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenAlarmEventListResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenAlarmEventListResponseBody;
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
      body: DescribeScreenAlarmEventListResponseBody,
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

export class DescribeScreenAttackAnalysisDataRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  base64?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * {"crack_type":"9"}
   */
  data?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1668064495000
   */
  endTime?: number;
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
   * 1644027670
   */
  startTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DETAILS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      base64: 'Base64',
      currentPage: 'CurrentPage',
      data: 'Data',
      endTime: 'EndTime',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64: 'string',
      currentPage: 'number',
      data: 'string',
      endTime: 'number',
      pageSize: 'number',
      startTime: 'number',
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

export class DescribeScreenAttackAnalysisDataResponseBody extends $dara.Model {
  /**
   * @example
   * [{\\"crack_hour\\":1662480000000,\\"crack_cnt\\":471},{\\"crack_hour\\":1662483600000,\\"crack_cnt\\":461},{\\"crack_hour\\":1662487200000,\\"crack_cnt\\":445},{\\"crack_hour\\":1662490800000,\\"crack_cnt\\":471},{\\"crack_hour\\":1662494400000,\\"crack_cnt\\":534},{\\"crack_hour\\":1662498000000,\\"crack_cnt\\":652},{\\"crack_hour\\":1662501600000,\\"crack_cnt\\":706},{\\"crack_hour\\":1662505200000,\\"crack_cnt\\":613},{\\"crack_hour\\":1662508800000,\\"crack_cnt\\":578},{\\"crack_hour\\":1662512400000,\\"crack_cnt\\":577},{\\"crack_hour\\":1662516000000,\\"crack_cnt\\":616},{\\"crack_hour\\":1662519600000,\\"crack_cnt\\":597},{\\"crack_hour\\":1662523200000,\\"crack_cnt\\":575},{\\"crack_hour\\":1662526800000,\\"crack_cnt\\":507}]
   */
  data?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-Bxxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * 11
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      page: 'Page',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      page: 'number',
      pageSize: 'number',
      requestId: 'string',
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

export class DescribeScreenAttackAnalysisDataResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenAttackAnalysisDataResponseBody;
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
      body: DescribeScreenAttackAnalysisDataResponseBody,
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

export class DescribeScreenCloudHcRiskResponseBody extends $dara.Model {
  cloudHcRiskItems?: DescribeScreenCloudHcRiskResponseBodyCloudHcRiskItems[];
  /**
   * @example
   * 0C8487EF-50C2-54BB-8634-10F8C35D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudHcRiskItems: 'CloudHcRiskItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudHcRiskItems: { 'type': 'array', 'itemType': DescribeScreenCloudHcRiskResponseBodyCloudHcRiskItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cloudHcRiskItems)) {
      $dara.Model.validateArray(this.cloudHcRiskItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenCloudHcRiskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenCloudHcRiskResponseBody;
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
      body: DescribeScreenCloudHcRiskResponseBody,
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

export class DescribeScreenDataMapResponseBody extends $dara.Model {
  /**
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-XXXXXXXX
   */
  requestId?: string;
  sasScreenTypeList?: DescribeScreenDataMapResponseBodySasScreenTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sasScreenTypeList: 'SasScreenTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sasScreenTypeList: { 'type': 'array', 'itemType': DescribeScreenDataMapResponseBodySasScreenTypeList },
    };
  }

  validate() {
    if(Array.isArray(this.sasScreenTypeList)) {
      $dara.Model.validateArray(this.sasScreenTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenDataMapResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenDataMapResponseBody;
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
      body: DescribeScreenDataMapResponseBody,
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

export class DescribeScreenEmerRiskResponseBody extends $dara.Model {
  cloudHcRiskItems?: DescribeScreenEmerRiskResponseBodyCloudHcRiskItems[];
  /**
   * @example
   * 23AD0BD2-8771-5647-819E-6xxxxxxxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudHcRiskItems: 'CloudHcRiskItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudHcRiskItems: { 'type': 'array', 'itemType': DescribeScreenEmerRiskResponseBodyCloudHcRiskItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cloudHcRiskItems)) {
      $dara.Model.validateArray(this.cloudHcRiskItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenEmerRiskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenEmerRiskResponseBody;
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
      body: DescribeScreenEmerRiskResponseBody,
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

export class DescribeScreenHostStatisticsResponseBody extends $dara.Model {
  data?: DescribeScreenHostStatisticsResponseBodyData;
  /**
   * @example
   * D65AADFC-1D20-5A6A-8F6A-9FA53C0DC1F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeScreenHostStatisticsResponseBodyData,
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

export class DescribeScreenHostStatisticsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenHostStatisticsResponseBody;
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
      body: DescribeScreenHostStatisticsResponseBody,
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

export class DescribeScreenOperateInfoRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1634725571000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
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

export class DescribeScreenOperateInfoResponseBody extends $dara.Model {
  dateArray?: string[];
  /**
   * @example
   * 1
   */
  healthCheckDealedCount?: number;
  healthCheckValueArray?: string[];
  /**
   * @example
   * 23AD0BD2-8771-5647-819E-6xxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  securityEventDealedCount?: number;
  suspEventValueArray?: string[];
  vulValueArray?: string[];
  /**
   * @example
   * 1
   */
  vulnerabilityDealedCount?: number;
  static names(): { [key: string]: string } {
    return {
      dateArray: 'DateArray',
      healthCheckDealedCount: 'HealthCheckDealedCount',
      healthCheckValueArray: 'HealthCheckValueArray',
      requestId: 'RequestId',
      securityEventDealedCount: 'SecurityEventDealedCount',
      suspEventValueArray: 'SuspEventValueArray',
      vulValueArray: 'VulValueArray',
      vulnerabilityDealedCount: 'VulnerabilityDealedCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateArray: { 'type': 'array', 'itemType': 'string' },
      healthCheckDealedCount: 'number',
      healthCheckValueArray: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      securityEventDealedCount: 'number',
      suspEventValueArray: { 'type': 'array', 'itemType': 'string' },
      vulValueArray: { 'type': 'array', 'itemType': 'string' },
      vulnerabilityDealedCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dateArray)) {
      $dara.Model.validateArray(this.dateArray);
    }
    if(Array.isArray(this.healthCheckValueArray)) {
      $dara.Model.validateArray(this.healthCheckValueArray);
    }
    if(Array.isArray(this.suspEventValueArray)) {
      $dara.Model.validateArray(this.suspEventValueArray);
    }
    if(Array.isArray(this.vulValueArray)) {
      $dara.Model.validateArray(this.vulValueArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenOperateInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenOperateInfoResponseBody;
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
      body: DescribeScreenOperateInfoResponseBody,
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

export class DescribeScreenOssUploadInfoResponseBody extends $dara.Model {
  /**
   * @example
   * LTAI5txxxxxxx
   */
  accessId?: string;
  /**
   * @example
   * 1719919893
   */
  expire?: number;
  /**
   * @example
   * https://oss-cipxxxxxxxxxliyuncs.com
   */
  host?: string;
  /**
   * @example
   * DegradePool_Offset_****
   */
  key?: string;
  /**
   * @example
   * eyJleHBpcmF0aW9uIjoiMjAyNC0wOC0xNVQwOToxMTo1My40MDVaIiwiY29uZGl0aW9ucyI6W1siY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsMTA0ODU3NjAwMF0sWyJzdGFydHMtd2l0aCIsIiRrZXkiLCJzY3JlZW5Mb2dvXC8xNzY2MTg1ODkxxxx
   */
  policy?: string;
  /**
   * @example
   * 30CBF632-109F-596F-97F2-451C8B2A****
   */
  requestId?: string;
  securityToken?: string;
  /**
   * @example
   * wBiwkhd5LGcLzijtc3FhI****
   */
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      expire: 'Expire',
      host: 'Host',
      key: 'Key',
      policy: 'Policy',
      requestId: 'RequestId',
      securityToken: 'SecurityToken',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      expire: 'number',
      host: 'string',
      key: 'string',
      policy: 'string',
      requestId: 'string',
      securityToken: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenOssUploadInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenOssUploadInfoResponseBody;
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
      body: DescribeScreenOssUploadInfoResponseBody,
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

export class DescribeScreenScoreThreadRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1723445464501
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1722840664501
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

export class DescribeScreenScoreThreadResponseBody extends $dara.Model {
  data?: DescribeScreenScoreThreadResponseBodyData;
  /**
   * @example
   * D03DD0FD-6041-5107-AC00-383E28F1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeScreenScoreThreadResponseBodyData,
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

export class DescribeScreenScoreThreadResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenScoreThreadResponseBody;
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
      body: DescribeScreenScoreThreadResponseBody,
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

export class DescribeScreenSecurityStatInfoResponseBody extends $dara.Model {
  attackEvent?: DescribeScreenSecurityStatInfoResponseBodyAttackEvent;
  healthCheck?: DescribeScreenSecurityStatInfoResponseBodyHealthCheck;
  /**
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  securityEvent?: DescribeScreenSecurityStatInfoResponseBodySecurityEvent;
  vulnerability?: DescribeScreenSecurityStatInfoResponseBodyVulnerability;
  static names(): { [key: string]: string } {
    return {
      attackEvent: 'AttackEvent',
      healthCheck: 'HealthCheck',
      requestId: 'RequestId',
      securityEvent: 'SecurityEvent',
      vulnerability: 'Vulnerability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackEvent: DescribeScreenSecurityStatInfoResponseBodyAttackEvent,
      healthCheck: DescribeScreenSecurityStatInfoResponseBodyHealthCheck,
      requestId: 'string',
      securityEvent: DescribeScreenSecurityStatInfoResponseBodySecurityEvent,
      vulnerability: DescribeScreenSecurityStatInfoResponseBodyVulnerability,
    };
  }

  validate() {
    if(this.attackEvent && typeof (this.attackEvent as any).validate === 'function') {
      (this.attackEvent as any).validate();
    }
    if(this.healthCheck && typeof (this.healthCheck as any).validate === 'function') {
      (this.healthCheck as any).validate();
    }
    if(this.securityEvent && typeof (this.securityEvent as any).validate === 'function') {
      (this.securityEvent as any).validate();
    }
    if(this.vulnerability && typeof (this.vulnerability as any).validate === 'function') {
      (this.vulnerability as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenSecurityStatInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenSecurityStatInfoResponseBody;
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
      body: DescribeScreenSecurityStatInfoResponseBody,
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

export class DescribeScreenSettingRequest extends $dara.Model {
  /**
   * @example
   * 101786
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenSettingResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  logoPower?: boolean;
  /**
   * @example
   * https://img.alicdn.XXXXXXXXXXX.jpg
   */
  logoUrl?: string;
  /**
   * @example
   * https://XXX.monitor.XXXXcom
   */
  monitorUrl?: string;
  /**
   * @example
   * B9A68671-BD84-55CD-807A-XXXXXXXXX
   */
  requestId?: string;
  /**
   * @example
   * [{\\"positionId\\":XX,\\"componentId\\":XX,\\"date\\":\\"XXX\\"},{\\"positionId\\":X,\\"componentId\\":X,\\"date\\":\\"XXX\\"},{\\"positionId\\":X,\\"componentId\\":X,\\"date\\":\\"XX\\"},{\\"positionId\\":X,\\"componentId\\":XX,\\"date\\":\\"XXX\\"},{\\"positionId\\":X,\\"componentId\\":XX,\\"date\\":\\"XX\\"},{\\"positionId\\":X,\\"componentId\\":XX,\\"date\\":\\"XX\\"},{\\"positionId\\":X,\\"componentId\\":XX,\\"date\\":\\"XXX\\"},{\\"positionId\\":X,\\"componentId\\":,\\"date\\":\\"XXXX\\"}]
   */
  screenDataMap?: string;
  /**
   * @example
   * 7849
   */
  screenDefault?: number;
  /**
   * @example
   * 1004770
   */
  screenId?: number;
  /**
   * @example
   * Daily Report
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      logoPower: 'LogoPower',
      logoUrl: 'LogoUrl',
      monitorUrl: 'MonitorUrl',
      requestId: 'RequestId',
      screenDataMap: 'ScreenDataMap',
      screenDefault: 'ScreenDefault',
      screenId: 'ScreenId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoPower: 'boolean',
      logoUrl: 'string',
      monitorUrl: 'string',
      requestId: 'string',
      screenDataMap: 'string',
      screenDefault: 'number',
      screenId: 'number',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenSettingResponseBody;
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
      body: DescribeScreenSettingResponseBody,
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

export class DescribeScreenSummaryInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 12
   */
  aegisClientOfflineCount?: number;
  /**
   * @example
   * 127
   */
  aegisClientOnlineCount?: number;
  /**
   * @example
   * 23AD0BD2-8771-5647-819E-XXXXXXXX
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  securityScore?: number;
  static names(): { [key: string]: string } {
    return {
      aegisClientOfflineCount: 'AegisClientOfflineCount',
      aegisClientOnlineCount: 'AegisClientOnlineCount',
      requestId: 'RequestId',
      securityScore: 'SecurityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aegisClientOfflineCount: 'number',
      aegisClientOnlineCount: 'number',
      requestId: 'string',
      securityScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenSummaryInfoResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenSummaryInfoResponseBody;
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
      body: DescribeScreenSummaryInfoResponseBody,
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

export class DescribeScreenTitlesResponseBody extends $dara.Model {
  /**
   * @example
   * 09969D2C-4FAD-429E-BFBF-XXXXXXXXXXX
   */
  requestId?: string;
  sasScreenSettingList?: DescribeScreenTitlesResponseBodySasScreenSettingList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sasScreenSettingList: 'SasScreenSettingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sasScreenSettingList: { 'type': 'array', 'itemType': DescribeScreenTitlesResponseBodySasScreenSettingList },
    };
  }

  validate() {
    if(Array.isArray(this.sasScreenSettingList)) {
      $dara.Model.validateArray(this.sasScreenSettingList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenTitlesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenTitlesResponseBody;
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
      body: DescribeScreenTitlesResponseBody,
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

export class DescribeScreenUploadPictureRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://security-pic.oss-cn-hangzhou.aliyuncs.com/screenLogo/1766185894104675/c28bd4d2-c5c1-43f8-9ef5-de41d762xxxx
   */
  logoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      logoUrl: 'LogoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenUploadPictureResponseBody extends $dara.Model {
  /**
   * @example
   * D65AADFC-1D20-5A6A-8F6A-9FA53C0Dxxxx
   */
  requestId?: string;
  /**
   * @example
   * http://security-pic.oss-cn-hangzhou.aliyuncs.com/screenLogo/1766185894104675/c28bd4d2-c5c1-43f8-9ef5-de41d76218eb?Expires=1723720214&OSSAccessKeyId=LTAI4G1mgPbjvGQuiV1Xxxxx&Signature=4o3xxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

export class DescribeScreenUploadPictureResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenUploadPictureResponseBody;
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
      body: DescribeScreenUploadPictureResponseBody,
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

export class DescribeScreenVersionConfigResponseBody extends $dara.Model {
  /**
   * @example
   * 30
   */
  assetLevel?: number;
  /**
   * @example
   * sas-b5***
   */
  instanceId?: string;
  /**
   * @example
   * 0
   */
  isTrialVersion?: number;
  /**
   * @example
   * 1625846400000
   */
  releaseTime?: number;
  /**
   * @example
   * CE500770-42D3-442E-9DDD-1XXXXXXX
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  sasLog?: number;
  /**
   * @example
   * 0
   */
  sasScreen?: number;
  /**
   * @example
   * 3
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      assetLevel: 'AssetLevel',
      instanceId: 'InstanceId',
      isTrialVersion: 'IsTrialVersion',
      releaseTime: 'ReleaseTime',
      requestId: 'RequestId',
      sasLog: 'SasLog',
      sasScreen: 'SasScreen',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetLevel: 'number',
      instanceId: 'string',
      isTrialVersion: 'number',
      releaseTime: 'number',
      requestId: 'string',
      sasLog: 'number',
      sasScreen: 'number',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeScreenVersionConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeScreenVersionConfigResponseBody;
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
      body: DescribeScreenVersionConfigResponseBody,
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

export class GetFileDetectResultInnerRequest extends $dara.Model {
  dnaHashKeyList?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  hashKeyList?: string[];
  level?: number;
  sourceIp?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      dnaHashKeyList: 'DnaHashKeyList',
      hashKeyList: 'HashKeyList',
      level: 'Level',
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnaHashKeyList: { 'type': 'array', 'itemType': 'string' },
      hashKeyList: { 'type': 'array', 'itemType': 'string' },
      level: 'number',
      sourceIp: 'string',
      type: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dnaHashKeyList)) {
      $dara.Model.validateArray(this.dnaHashKeyList);
    }
    if(Array.isArray(this.hashKeyList)) {
      $dara.Model.validateArray(this.hashKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileDetectResultInnerResponseBody extends $dara.Model {
  requestId?: string;
  resultList?: GetFileDetectResultInnerResponseBodyResultList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultList: { 'type': 'array', 'itemType': GetFileDetectResultInnerResponseBodyResultList },
    };
  }

  validate() {
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileDetectResultInnerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetFileDetectResultInnerResponseBody;
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
      body: GetFileDetectResultInnerResponseBody,
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

export class ListGlobalUserConfigRequest extends $dara.Model {
  moduleList?: string[];
  static names(): { [key: string]: string } {
    return {
      moduleList: 'ModuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.moduleList)) {
      $dara.Model.validateArray(this.moduleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalUserConfigShrinkRequest extends $dara.Model {
  moduleListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      moduleListShrink: 'ModuleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGlobalUserConfigResponseBody extends $dara.Model {
  data?: ListGlobalUserConfigResponseBodyData[];
  /**
   * @example
   * D81DD78E-E006-5C65-A171-C8CB09XXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListGlobalUserConfigResponseBodyData },
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

export class ListGlobalUserConfigResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGlobalUserConfigResponseBody;
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
      body: ListGlobalUserConfigResponseBody,
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
    this._signatureAlgorithm = "v2";
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-qingdao': "tds.cn-shanghai.aliyuncs.com",
      'cn-beijing': "tds.cn-shanghai.aliyuncs.com",
      'cn-zhangjiakou': "tds.cn-shanghai.aliyuncs.com",
      'cn-huhehaote': "tds.cn-shanghai.aliyuncs.com",
      'cn-wulanchabu': "tds.cn-shanghai.aliyuncs.com",
      'cn-hangzhou': "tds.cn-shanghai.aliyuncs.com",
      'cn-shanghai': "tds.cn-shanghai.aliyuncs.com",
      'cn-nanjing': "tds.cn-shanghai.aliyuncs.com",
      'cn-fuzhou': "tds.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "tds.cn-shanghai.aliyuncs.com",
      'cn-heyuan': "tds.cn-shanghai.aliyuncs.com",
      'cn-guangzhou': "tds.cn-shanghai.aliyuncs.com",
      'ap-southeast-2': "tds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-6': "tds.ap-southeast-1.aliyuncs.com",
      'ap-northeast-2': "tds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-3': "tds.ap-southeast-1.aliyuncs.com",
      'ap-northeast-1': "tds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-7': "tds.ap-southeast-1.aliyuncs.com",
      'cn-chengdu': "tds.cn-shanghai.aliyuncs.com",
      'ap-southeast-1': "tds.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "tds.ap-southeast-1.aliyuncs.com",
      'cn-hongkong': "tds.cn-shanghai.aliyuncs.com",
      'eu-central-1': "tds.ap-southeast-1.aliyuncs.com",
      'us-east-1': "tds.ap-southeast-1.aliyuncs.com",
      'us-west-1': "tds.ap-southeast-1.aliyuncs.com",
      'eu-west-1': "tds.ap-southeast-1.aliyuncs.com",
      'me-east-1': "tds.ap-southeast-1.aliyuncs.com",
      'me-central-1': "tds.ap-southeast-1.aliyuncs.com",
      'ap-south-1': "tds.ap-southeast-1.aliyuncs.com",
      'cn-beijing-finance-1': "tds.cn-shanghai.aliyuncs.com",
      'cn-hangzhou-finance': "tds.cn-shanghai.aliyuncs.com",
      'cn-shanghai-finance-1': "tds.cn-shanghai.aliyuncs.com",
      'cn-shenzhen-finance-1': "tds.cn-shanghai.aliyuncs.com",
      'cn-heyuan-acdr-1': "tds.cn-shanghai.aliyuncs.com",
      'cn-north-2-gov-1': "tds.cn-shanghai.aliyuncs.com",
      'cn-qingdao-acdr-ut-1': "tds.cn-shanghai.aliyuncs.com",
      'cn-shanghai-mybk': "tds.cn-shanghai.aliyuncs.com",
      'cn-wuhan-lr': "tds.cn-shanghai.aliyuncs.com",
      'cn-zhengzhou-jva': "tds.cn-shanghai.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("sas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 新增或者修改用户大屏设置
   * 
   * @param request - CreateScreenSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateScreenSettingResponse
   */
  async createScreenSettingWithOptions(request: CreateScreenSettingRequest, runtime: $dara.RuntimeOptions): Promise<CreateScreenSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    if (!$dara.isNull(request.logoPower)) {
      query["LogoPower"] = request.logoPower;
    }

    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    if (!$dara.isNull(request.monitorUrl)) {
      query["MonitorUrl"] = request.monitorUrl;
    }

    if (!$dara.isNull(request.screenDataMap)) {
      query["ScreenDataMap"] = request.screenDataMap;
    }

    if (!$dara.isNull(request.screenDefault)) {
      query["ScreenDefault"] = request.screenDefault;
    }

    if (!$dara.isNull(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateScreenSetting",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateScreenSettingResponse>(await this.callApi(params, req, runtime), new CreateScreenSettingResponse({}));
    } else {
      return $dara.cast<CreateScreenSettingResponse>(await this.execute(params, req, runtime), new CreateScreenSettingResponse({}));
    }

  }

  /**
   * 新增或者修改用户大屏设置
   * 
   * @param request - CreateScreenSettingRequest
   * @returns CreateScreenSettingResponse
   */
  async createScreenSetting(request: CreateScreenSettingRequest): Promise<CreateScreenSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createScreenSettingWithOptions(request, runtime);
  }

  /**
   * 删除大屏设置
   * 
   * @param request - DeleteScreenSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteScreenSettingResponse
   */
  async deleteScreenSettingWithOptions(request: DeleteScreenSettingRequest, runtime: $dara.RuntimeOptions): Promise<DeleteScreenSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteScreenSetting",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteScreenSettingResponse>(await this.callApi(params, req, runtime), new DeleteScreenSettingResponse({}));
    } else {
      return $dara.cast<DeleteScreenSettingResponse>(await this.execute(params, req, runtime), new DeleteScreenSettingResponse({}));
    }

  }

  /**
   * 删除大屏设置
   * 
   * @param request - DeleteScreenSettingRequest
   * @returns DeleteScreenSettingResponse
   */
  async deleteScreenSetting(request: DeleteScreenSettingRequest): Promise<DeleteScreenSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteScreenSettingWithOptions(request, runtime);
  }

  /**
   * 查询安全大屏告警事件
   * 
   * @param request - DescribeScreenAlarmEventListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenAlarmEventListResponse
   */
  async describeScreenAlarmEventListWithOptions(request: DescribeScreenAlarmEventListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeScreenAlarmEventListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.alarmEventName)) {
      query["AlarmEventName"] = request.alarmEventName;
    }

    if (!$dara.isNull(request.alarmEventType)) {
      query["AlarmEventType"] = request.alarmEventType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.dealed)) {
      query["Dealed"] = request.dealed;
    }

    if (!$dara.isNull(request.from)) {
      query["From"] = request.from;
    }

    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.levels)) {
      query["Levels"] = request.levels;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.timeEnd)) {
      query["TimeEnd"] = request.timeEnd;
    }

    if (!$dara.isNull(request.timeStart)) {
      query["TimeStart"] = request.timeStart;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenAlarmEventList",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenAlarmEventListResponse>(await this.callApi(params, req, runtime), new DescribeScreenAlarmEventListResponse({}));
    } else {
      return $dara.cast<DescribeScreenAlarmEventListResponse>(await this.execute(params, req, runtime), new DescribeScreenAlarmEventListResponse({}));
    }

  }

  /**
   * 查询安全大屏告警事件
   * 
   * @param request - DescribeScreenAlarmEventListRequest
   * @returns DescribeScreenAlarmEventListResponse
   */
  async describeScreenAlarmEventList(request: DescribeScreenAlarmEventListRequest): Promise<DescribeScreenAlarmEventListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenAlarmEventListWithOptions(request, runtime);
  }

  /**
   * 查询大屏攻击防御事件
   * 
   * @param request - DescribeScreenAttackAnalysisDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenAttackAnalysisDataResponse
   */
  async describeScreenAttackAnalysisDataWithOptions(request: DescribeScreenAttackAnalysisDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribeScreenAttackAnalysisDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.base64)) {
      query["Base64"] = request.base64;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.data)) {
      query["Data"] = request.data;
    }

    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenAttackAnalysisData",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenAttackAnalysisDataResponse>(await this.callApi(params, req, runtime), new DescribeScreenAttackAnalysisDataResponse({}));
    } else {
      return $dara.cast<DescribeScreenAttackAnalysisDataResponse>(await this.execute(params, req, runtime), new DescribeScreenAttackAnalysisDataResponse({}));
    }

  }

  /**
   * 查询大屏攻击防御事件
   * 
   * @param request - DescribeScreenAttackAnalysisDataRequest
   * @returns DescribeScreenAttackAnalysisDataResponse
   */
  async describeScreenAttackAnalysisData(request: DescribeScreenAttackAnalysisDataRequest): Promise<DescribeScreenAttackAnalysisDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenAttackAnalysisDataWithOptions(request, runtime);
  }

  /**
   * 查询云产品基线问题
   * 
   * @param request - DescribeScreenCloudHcRiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenCloudHcRiskResponse
   */
  async describeScreenCloudHcRiskWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeScreenCloudHcRiskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenCloudHcRisk",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenCloudHcRiskResponse>(await this.callApi(params, req, runtime), new DescribeScreenCloudHcRiskResponse({}));
    } else {
      return $dara.cast<DescribeScreenCloudHcRiskResponse>(await this.execute(params, req, runtime), new DescribeScreenCloudHcRiskResponse({}));
    }

  }

  /**
   * 查询云产品基线问题
   * @returns DescribeScreenCloudHcRiskResponse
   */
  async describeScreenCloudHcRisk(): Promise<DescribeScreenCloudHcRiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenCloudHcRiskWithOptions(runtime);
  }

  /**
   * 获取大屏可展示数据列表
   * 
   * @param request - DescribeScreenDataMapRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenDataMapResponse
   */
  async describeScreenDataMapWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeScreenDataMapResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenDataMap",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenDataMapResponse>(await this.callApi(params, req, runtime), new DescribeScreenDataMapResponse({}));
    } else {
      return $dara.cast<DescribeScreenDataMapResponse>(await this.execute(params, req, runtime), new DescribeScreenDataMapResponse({}));
    }

  }

  /**
   * 获取大屏可展示数据列表
   * @returns DescribeScreenDataMapResponse
   */
  async describeScreenDataMap(): Promise<DescribeScreenDataMapResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenDataMapWithOptions(runtime);
  }

  /**
   * 查询云产品漏洞风险
   * 
   * @param request - DescribeScreenEmerRiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenEmerRiskResponse
   */
  async describeScreenEmerRiskWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeScreenEmerRiskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenEmerRisk",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenEmerRiskResponse>(await this.callApi(params, req, runtime), new DescribeScreenEmerRiskResponse({}));
    } else {
      return $dara.cast<DescribeScreenEmerRiskResponse>(await this.execute(params, req, runtime), new DescribeScreenEmerRiskResponse({}));
    }

  }

  /**
   * 查询云产品漏洞风险
   * @returns DescribeScreenEmerRiskResponse
   */
  async describeScreenEmerRisk(): Promise<DescribeScreenEmerRiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenEmerRiskWithOptions(runtime);
  }

  /**
   * 查询大屏主机统计数据
   * 
   * @param request - DescribeScreenHostStatisticsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenHostStatisticsResponse
   */
  async describeScreenHostStatisticsWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeScreenHostStatisticsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenHostStatistics",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenHostStatisticsResponse>(await this.callApi(params, req, runtime), new DescribeScreenHostStatisticsResponse({}));
    } else {
      return $dara.cast<DescribeScreenHostStatisticsResponse>(await this.execute(params, req, runtime), new DescribeScreenHostStatisticsResponse({}));
    }

  }

  /**
   * 查询大屏主机统计数据
   * @returns DescribeScreenHostStatisticsResponse
   */
  async describeScreenHostStatistics(): Promise<DescribeScreenHostStatisticsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenHostStatisticsWithOptions(runtime);
  }

  /**
   * 查看运营信息
   * 
   * @param request - DescribeScreenOperateInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenOperateInfoResponse
   */
  async describeScreenOperateInfoWithOptions(request: DescribeScreenOperateInfoRequest, runtime: $dara.RuntimeOptions): Promise<DescribeScreenOperateInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.lang)) {
      query["Lang"] = request.lang;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenOperateInfo",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenOperateInfoResponse>(await this.callApi(params, req, runtime), new DescribeScreenOperateInfoResponse({}));
    } else {
      return $dara.cast<DescribeScreenOperateInfoResponse>(await this.execute(params, req, runtime), new DescribeScreenOperateInfoResponse({}));
    }

  }

  /**
   * 查看运营信息
   * 
   * @param request - DescribeScreenOperateInfoRequest
   * @returns DescribeScreenOperateInfoResponse
   */
  async describeScreenOperateInfo(request: DescribeScreenOperateInfoRequest): Promise<DescribeScreenOperateInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenOperateInfoWithOptions(request, runtime);
  }

  /**
   * 查询大屏上传信息
   * 
   * @param request - DescribeScreenOssUploadInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenOssUploadInfoResponse
   */
  async describeScreenOssUploadInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeScreenOssUploadInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenOssUploadInfo",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenOssUploadInfoResponse>(await this.callApi(params, req, runtime), new DescribeScreenOssUploadInfoResponse({}));
    } else {
      return $dara.cast<DescribeScreenOssUploadInfoResponse>(await this.execute(params, req, runtime), new DescribeScreenOssUploadInfoResponse({}));
    }

  }

  /**
   * 查询大屏上传信息
   * @returns DescribeScreenOssUploadInfoResponse
   */
  async describeScreenOssUploadInfo(): Promise<DescribeScreenOssUploadInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenOssUploadInfoWithOptions(runtime);
  }

  /**
   * 查询安全大屏分数趋势
   * 
   * @param request - DescribeScreenScoreThreadRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenScoreThreadResponse
   */
  async describeScreenScoreThreadWithOptions(request: DescribeScreenScoreThreadRequest, runtime: $dara.RuntimeOptions): Promise<DescribeScreenScoreThreadResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!$dara.isNull(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenScoreThread",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenScoreThreadResponse>(await this.callApi(params, req, runtime), new DescribeScreenScoreThreadResponse({}));
    } else {
      return $dara.cast<DescribeScreenScoreThreadResponse>(await this.execute(params, req, runtime), new DescribeScreenScoreThreadResponse({}));
    }

  }

  /**
   * 查询安全大屏分数趋势
   * 
   * @param request - DescribeScreenScoreThreadRequest
   * @returns DescribeScreenScoreThreadResponse
   */
  async describeScreenScoreThread(request: DescribeScreenScoreThreadRequest): Promise<DescribeScreenScoreThreadResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenScoreThreadWithOptions(request, runtime);
  }

  /**
   * 查询已处理的风险
   * 
   * @param request - DescribeScreenSecurityStatInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenSecurityStatInfoResponse
   */
  async describeScreenSecurityStatInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeScreenSecurityStatInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenSecurityStatInfo",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenSecurityStatInfoResponse>(await this.callApi(params, req, runtime), new DescribeScreenSecurityStatInfoResponse({}));
    } else {
      return $dara.cast<DescribeScreenSecurityStatInfoResponse>(await this.execute(params, req, runtime), new DescribeScreenSecurityStatInfoResponse({}));
    }

  }

  /**
   * 查询已处理的风险
   * @returns DescribeScreenSecurityStatInfoResponse
   */
  async describeScreenSecurityStatInfo(): Promise<DescribeScreenSecurityStatInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenSecurityStatInfoWithOptions(runtime);
  }

  /**
   * 查询大屏配置
   * 
   * @param request - DescribeScreenSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenSettingResponse
   */
  async describeScreenSettingWithOptions(request: DescribeScreenSettingRequest, runtime: $dara.RuntimeOptions): Promise<DescribeScreenSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.id)) {
      query["Id"] = request.id;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenSetting",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenSettingResponse>(await this.callApi(params, req, runtime), new DescribeScreenSettingResponse({}));
    } else {
      return $dara.cast<DescribeScreenSettingResponse>(await this.execute(params, req, runtime), new DescribeScreenSettingResponse({}));
    }

  }

  /**
   * 查询大屏配置
   * 
   * @param request - DescribeScreenSettingRequest
   * @returns DescribeScreenSettingResponse
   */
  async describeScreenSetting(request: DescribeScreenSettingRequest): Promise<DescribeScreenSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenSettingWithOptions(request, runtime);
  }

  /**
   * 查询大屏统计信息
   * 
   * @param request - DescribeScreenSummaryInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenSummaryInfoResponse
   */
  async describeScreenSummaryInfoWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeScreenSummaryInfoResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenSummaryInfo",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenSummaryInfoResponse>(await this.callApi(params, req, runtime), new DescribeScreenSummaryInfoResponse({}));
    } else {
      return $dara.cast<DescribeScreenSummaryInfoResponse>(await this.execute(params, req, runtime), new DescribeScreenSummaryInfoResponse({}));
    }

  }

  /**
   * 查询大屏统计信息
   * @returns DescribeScreenSummaryInfoResponse
   */
  async describeScreenSummaryInfo(): Promise<DescribeScreenSummaryInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenSummaryInfoWithOptions(runtime);
  }

  /**
   * 获取大屏幕设置全部列表
   * 
   * @param request - DescribeScreenTitlesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenTitlesResponse
   */
  async describeScreenTitlesWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeScreenTitlesResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenTitles",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenTitlesResponse>(await this.callApi(params, req, runtime), new DescribeScreenTitlesResponse({}));
    } else {
      return $dara.cast<DescribeScreenTitlesResponse>(await this.execute(params, req, runtime), new DescribeScreenTitlesResponse({}));
    }

  }

  /**
   * 获取大屏幕设置全部列表
   * @returns DescribeScreenTitlesResponse
   */
  async describeScreenTitles(): Promise<DescribeScreenTitlesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenTitlesWithOptions(runtime);
  }

  /**
   * 查询上传之后的图片显示地址
   * 
   * @param request - DescribeScreenUploadPictureRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenUploadPictureResponse
   */
  async describeScreenUploadPictureWithOptions(request: DescribeScreenUploadPictureRequest, runtime: $dara.RuntimeOptions): Promise<DescribeScreenUploadPictureResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.logoUrl)) {
      query["LogoUrl"] = request.logoUrl;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenUploadPicture",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenUploadPictureResponse>(await this.callApi(params, req, runtime), new DescribeScreenUploadPictureResponse({}));
    } else {
      return $dara.cast<DescribeScreenUploadPictureResponse>(await this.execute(params, req, runtime), new DescribeScreenUploadPictureResponse({}));
    }

  }

  /**
   * 查询上传之后的图片显示地址
   * 
   * @param request - DescribeScreenUploadPictureRequest
   * @returns DescribeScreenUploadPictureResponse
   */
  async describeScreenUploadPicture(request: DescribeScreenUploadPictureRequest): Promise<DescribeScreenUploadPictureResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenUploadPictureWithOptions(request, runtime);
  }

  /**
   * 查询安全大屏版本配置
   * 
   * @param request - DescribeScreenVersionConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeScreenVersionConfigResponse
   */
  async describeScreenVersionConfigWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeScreenVersionConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
      action: "DescribeScreenVersionConfig",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DescribeScreenVersionConfigResponse>(await this.callApi(params, req, runtime), new DescribeScreenVersionConfigResponse({}));
    } else {
      return $dara.cast<DescribeScreenVersionConfigResponse>(await this.execute(params, req, runtime), new DescribeScreenVersionConfigResponse({}));
    }

  }

  /**
   * 查询安全大屏版本配置
   * @returns DescribeScreenVersionConfigResponse
   */
  async describeScreenVersionConfig(): Promise<DescribeScreenVersionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeScreenVersionConfigWithOptions(runtime);
  }

  /**
   * 获取文件检测结果。
   * 
   * @param request - GetFileDetectResultInnerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFileDetectResultInnerResponse
   */
  async getFileDetectResultInnerWithOptions(request: GetFileDetectResultInnerRequest, runtime: $dara.RuntimeOptions): Promise<GetFileDetectResultInnerResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.dnaHashKeyList)) {
      query["DnaHashKeyList"] = request.dnaHashKeyList;
    }

    if (!$dara.isNull(request.hashKeyList)) {
      query["HashKeyList"] = request.hashKeyList;
    }

    if (!$dara.isNull(request.level)) {
      query["Level"] = request.level;
    }

    if (!$dara.isNull(request.sourceIp)) {
      query["SourceIp"] = request.sourceIp;
    }

    if (!$dara.isNull(request.type)) {
      query["Type"] = request.type;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFileDetectResultInner",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFileDetectResultInnerResponse>(await this.callApi(params, req, runtime), new GetFileDetectResultInnerResponse({}));
    } else {
      return $dara.cast<GetFileDetectResultInnerResponse>(await this.execute(params, req, runtime), new GetFileDetectResultInnerResponse({}));
    }

  }

  /**
   * 获取文件检测结果。
   * 
   * @param request - GetFileDetectResultInnerRequest
   * @returns GetFileDetectResultInnerResponse
   */
  async getFileDetectResultInner(request: GetFileDetectResultInnerRequest): Promise<GetFileDetectResultInnerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.getFileDetectResultInnerWithOptions(request, runtime);
  }

  /**
   * 首页配置情况汇总接口
   * 
   * @param tmpReq - ListGlobalUserConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGlobalUserConfigResponse
   */
  async listGlobalUserConfigWithOptions(tmpReq: ListGlobalUserConfigRequest, runtime: $dara.RuntimeOptions): Promise<ListGlobalUserConfigResponse> {
    tmpReq.validate();
    let request = new ListGlobalUserConfigShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.moduleList)) {
      request.moduleListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.moduleList, "ModuleList", "json");
    }

    let query = { };
    if (!$dara.isNull(request.moduleListShrink)) {
      query["ModuleList"] = request.moduleListShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListGlobalUserConfig",
      version: "2021-01-14",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListGlobalUserConfigResponse>(await this.callApi(params, req, runtime), new ListGlobalUserConfigResponse({}));
    } else {
      return $dara.cast<ListGlobalUserConfigResponse>(await this.execute(params, req, runtime), new ListGlobalUserConfigResponse({}));
    }

  }

  /**
   * 首页配置情况汇总接口
   * 
   * @param request - ListGlobalUserConfigRequest
   * @returns ListGlobalUserConfigResponse
   */
  async listGlobalUserConfig(request: ListGlobalUserConfigRequest): Promise<ListGlobalUserConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.listGlobalUserConfigWithOptions(request, runtime);
  }

}
