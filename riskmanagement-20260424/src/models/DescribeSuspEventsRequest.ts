// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventsRequestSdkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the alert event.
   * 
   * @example
   * 6838133766c37077d0515b0b557e6510
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * The list of asset types.
   */
  assetsTypeList?: string[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * xxljob-02f023138826b
   */
  clusterId?: string;
  /**
   * @remarks
   * The container search field. Valid values:
   * 
   * @example
   * instanceId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the container search field.
   * 
   * @example
   * ca9b91db58356b41af2932e8048310ab7daa415701fa62d823cf4f0406d5ce02
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The status of the alert event.
   * 
   * @example
   * Y
   */
  dealed?: string;
  /**
   * @remarks
   * The detection source. This is an invalid field.
   * 
   * @example
   * -
   */
  detectSource?: string;
  /**
   * @remarks
   * The subtypes of the alert event. Separate multiple subtypes with commas (,).
   * 
   * @example
   * WEBSHELL
   */
  eventNames?: string;
  /**
   * @remarks
   * The request source identifier. Set the value to **sas**.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The tag group ID.
   * 
   * @example
   * 18768
   */
  groupId?: number;
  /**
   * @remarks
   * The unique ID that identifies the alert event record.
   * 
   * @example
   * 3165
   */
  id?: number;
  /**
   * @remarks
   * The language type of the response. Valid values:
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The severity levels of the alert event. Separate multiple levels with commas (in descending order of severity).
   * 
   * @example
   * serious
   */
  levels?: string;
  /**
   * @remarks
   * The multi-account query type. Default value: **0**. Valid values:
   * 
   * @example
   * 0
   */
  multiAccountActionType?: number;
  /**
   * @remarks
   * The name of the asset affected by the alert event.
   * 
   * @example
   * ecs-xxx
   */
  name?: string;
  /**
   * @remarks
   * The list of alert event handling result codes.
   */
  operateErrorCodeList?: string[];
  /**
   * @remarks
   * The end timestamp of the handling time.
   * 
   * @example
   * 2022-07-06 13:50:38
   */
  operateTimeEnd?: string;
  /**
   * @remarks
   * The start timestamp of the handling time.
   * 
   * @example
   * 2022-07-06 13:50:38
   */
  operateTimeStart?: string;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @remarks
   * The Alarm Metric of the alerting events to query. Valid values:
   * 
   * @example
   * Malicious Scripts.
   */
  parentEventTypes?: string;
  /**
   * @remarks
   * The alert name or asset information to query.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member accounts in the resource folder.
   * 
   * @example
   * 5815612291408486
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The custom sort field. Default value: **operateTime**. Valid values:
   * 
   * @example
   * lastTime
   */
  sortColumn?: string;
  /**
   * @remarks
   * The sort order based on certificate expiration time.
   * 
   * @example
   * asc
   */
  sortType?: string;
  /**
   * @remarks
   * The alert source.
   * 
   * @example
   * default
   */
  source?: string;
  /**
   * @remarks
   * The list of Alibaba Cloud account IDs that generated the alerts.
   */
  sourceAliUids?: number[];
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 2409:8a55:3827:cb50:5ad9:d5ff:fe87:f48c
   */
  sourceIp?: string;
  /**
   * @remarks
   * Indicates whether the alert belongs to strict mode.
   * 
   * @example
   * N
   */
  strictMode?: string;
  /**
   * @remarks
   * The list of operation types supported by the alert.
   */
  supportOperateCodeList?: string[];
  /**
   * @remarks
   * The ATT&CK tactic ID.
   * 
   * @example
   * TA0003
   */
  tacticId?: string;
  /**
   * @remarks
   * The container search target type. Valid values:
   * 
   * @example
   * containerId
   */
  targetType?: string;
  /**
   * @remarks
   * The end time of the latest occurrence time.
   * 
   * @example
   * 2022-07-06 13:50:38
   */
  timeEnd?: string;
  /**
   * @remarks
   * The start time of the latest occurrence time.
   * 
   * @example
   * 2022-07-06 13:50:38
   */
  timeStart?: string;
  /**
   * @remarks
   * The unique key of the security alert.
   * 
   * @example
   * f82680d9fdcb74a520fa385b7e9105b7
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The UUIDs of the servers for which to query alerts. Separate multiple UUIDs with commas (,).
   * 
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
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-guangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The Security Center SDK request parameters.
   */
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

