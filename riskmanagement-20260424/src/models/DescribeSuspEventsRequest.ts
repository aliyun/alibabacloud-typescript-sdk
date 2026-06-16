// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventsRequestSdkRequest extends $dara.Model {
  alarmUniqueInfo?: string;
  assetsTypeList?: string[];
  clusterId?: string;
  containerFieldName?: string;
  containerFieldValue?: string;
  currentPage?: string;
  dealed?: string;
  detectSource?: string;
  eventNames?: string;
  from?: string;
  groupId?: number;
  id?: number;
  lang?: string;
  levels?: string;
  multiAccountActionType?: number;
  name?: string;
  operateErrorCodeList?: string[];
  operateTimeEnd?: string;
  operateTimeStart?: string;
  pageSize?: string;
  parentEventTypes?: string;
  remark?: string;
  resourceDirectoryAccountId?: number;
  sortColumn?: string;
  sortType?: string;
  source?: string;
  sourceAliUids?: number[];
  sourceIp?: string;
  strictMode?: string;
  supportOperateCodeList?: string[];
  tacticId?: string;
  targetType?: string;
  timeEnd?: string;
  timeStart?: string;
  uniqueInfo?: string;
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      alarmUniqueInfo: 'AlarmUniqueInfo',
      assetsTypeList: 'AssetsTypeList',
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      detectSource: 'DetectSource',
      eventNames: 'EventNames',
      from: 'From',
      groupId: 'GroupId',
      id: 'Id',
      lang: 'Lang',
      levels: 'Levels',
      multiAccountActionType: 'MultiAccountActionType',
      name: 'Name',
      operateErrorCodeList: 'OperateErrorCodeList',
      operateTimeEnd: 'OperateTimeEnd',
      operateTimeStart: 'OperateTimeStart',
      pageSize: 'PageSize',
      parentEventTypes: 'ParentEventTypes',
      remark: 'Remark',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sortColumn: 'SortColumn',
      sortType: 'SortType',
      source: 'Source',
      sourceAliUids: 'SourceAliUids',
      sourceIp: 'SourceIp',
      strictMode: 'StrictMode',
      supportOperateCodeList: 'SupportOperateCodeList',
      tacticId: 'TacticId',
      targetType: 'TargetType',
      timeEnd: 'TimeEnd',
      timeStart: 'TimeStart',
      uniqueInfo: 'UniqueInfo',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmUniqueInfo: 'string',
      assetsTypeList: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      currentPage: 'string',
      dealed: 'string',
      detectSource: 'string',
      eventNames: 'string',
      from: 'string',
      groupId: 'number',
      id: 'number',
      lang: 'string',
      levels: 'string',
      multiAccountActionType: 'number',
      name: 'string',
      operateErrorCodeList: { 'type': 'array', 'itemType': 'string' },
      operateTimeEnd: 'string',
      operateTimeStart: 'string',
      pageSize: 'string',
      parentEventTypes: 'string',
      remark: 'string',
      resourceDirectoryAccountId: 'number',
      sortColumn: 'string',
      sortType: 'string',
      source: 'string',
      sourceAliUids: { 'type': 'array', 'itemType': 'number' },
      sourceIp: 'string',
      strictMode: 'string',
      supportOperateCodeList: { 'type': 'array', 'itemType': 'string' },
      tacticId: 'string',
      targetType: 'string',
      timeEnd: 'string',
      timeStart: 'string',
      uniqueInfo: 'string',
      uuids: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.assetsTypeList)) {
      $dara.Model.validateArray(this.assetsTypeList);
    }
    if(Array.isArray(this.operateErrorCodeList)) {
      $dara.Model.validateArray(this.operateErrorCodeList);
    }
    if(Array.isArray(this.sourceAliUids)) {
      $dara.Model.validateArray(this.sourceAliUids);
    }
    if(Array.isArray(this.supportOperateCodeList)) {
      $dara.Model.validateArray(this.supportOperateCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventsRequest extends $dara.Model {
  regionId?: string;
  sdkRequest?: DescribeSuspEventsRequestSdkRequest;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      sdkRequest: 'SdkRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      sdkRequest: DescribeSuspEventsRequestSdkRequest,
    };
  }

  validate() {
    if(this.sdkRequest && typeof (this.sdkRequest as any).validate === 'function') {
      (this.sdkRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

