// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventsRequestSdkRequest extends $dara.Model {
  /**
   * @example
   * 6838133766c37077d0515b0b557e6510
   */
  alarmUniqueInfo?: string;
  assetsTypeList?: string[];
  /**
   * @example
   * xxljob-02f023138826b
   */
  clusterId?: string;
  /**
   * @example
   * instanceId
   */
  containerFieldName?: string;
  /**
   * @example
   * ca9b91db58356b41af2932e8048310ab7daa415701fa62d823cf4f0406d5ce02
   */
  containerFieldValue?: string;
  /**
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @example
   * Y
   */
  dealed?: string;
  /**
   * @example
   * -
   */
  detectSource?: string;
  /**
   * @example
   * WEBSHELL
   */
  eventNames?: string;
  /**
   * @example
   * sas
   */
  from?: string;
  /**
   * @example
   * 18768
   */
  groupId?: number;
  /**
   * @example
   * 3165
   */
  id?: number;
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
   * @example
   * 0
   */
  multiAccountActionType?: number;
  /**
   * @example
   * ecs-xxx
   */
  name?: string;
  operateErrorCodeList?: string[];
  /**
   * @example
   * 2022-07-06 13:50:38
   */
  operateTimeEnd?: string;
  /**
   * @example
   * 2022-07-06 13:50:38
   */
  operateTimeStart?: string;
  /**
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @example
   * 恶意脚本
   */
  parentEventTypes?: string;
  /**
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @example
   * 5815612291408486
   */
  resourceDirectoryAccountId?: number;
  /**
   * @example
   * lastTime
   */
  sortColumn?: string;
  /**
   * @example
   * asc
   */
  sortType?: string;
  /**
   * @example
   * default
   */
  source?: string;
  sourceAliUids?: number[];
  /**
   * @example
   * 2409:8a55:3827:cb50:5ad9:d5ff:fe87:f48c
   */
  sourceIp?: string;
  /**
   * @example
   * N
   */
  strictMode?: string;
  supportOperateCodeList?: string[];
  /**
   * @example
   * TA0003
   */
  tacticId?: string;
  /**
   * @example
   * containerId
   */
  targetType?: string;
  /**
   * @example
   * 2022-07-06 13:50:38
   */
  timeEnd?: string;
  /**
   * @example
   * 2022-07-06 13:50:38
   */
  timeStart?: string;
  /**
   * @example
   * f82680d9fdcb74a520fa385b7e9105b7
   */
  uniqueInfo?: string;
  /**
   * @example
   * inet-eae09bb8-32b1-413b-a8ff-23932e043209
   */
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
  /**
   * @example
   * cn-guangzhou
   */
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

