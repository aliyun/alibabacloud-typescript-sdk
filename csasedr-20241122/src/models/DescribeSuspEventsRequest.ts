// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert event.
   * 
   * @example
   * Trojan
   */
  alarmEventName?: string;
  /**
   * @remarks
   * The unique ID of the alert event.
   * 
   * To query the exception event information of a single alert event, you must provide the unique ID of the alert event. You can call the DescribeSuspEvents operation to obtain the ID.
   * 
   * @example
   * 8df914418f4211fb****
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * The collection of asset types. Not supported by SASE-EDR.
   */
  assetsTypeList?: string[];
  /**
   * @remarks
   * The ID of the cluster for which you want to query alert events.
   * 
   * @example
   * c4af4fdf38a98496a9b63c2be5dae****
   */
  clusterId?: string;
  /**
   * @remarks
   * The container search field. Not supported by SASE-EDR.
   * 
   * @example
   * instanceId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the container search field. Not supported by SASE-EDR.
   * 
   * @example
   * ccf9769c22b844ff9b8d57417683b****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The page number of the returned page. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Filters alerts by processing group. Valid values:
   * 
   * - `N`: Pending.
   * - `Y`: Processed.
   * - `A`: All.
   * 
   * If this parameter is not specified, all groups are queried. The Status parameter further filters alerts within the selected group. If the specified status does not match the group, an empty result is returned.
   * 
   * @example
   * N
   */
  dealed?: string;
  /**
   * @remarks
   * The department to which the user belongs.
   * 
   * @example
   * Supplier Operations Team
   */
  department?: string;
  /**
   * @remarks
   * The internal subtype identifiers of the alerts. Separate multiple subtypes with commas (,). This parameter is used to match event names. The valid values must belong to the alert configurations visible to the current account and are not the alert names displayed to users.
   * 
   * @example
   * SASE non-whitelisted startup interception_PC
   */
  eventNames?: string;
  /**
   * @remarks
   * The ID of the group to which the asset affected by the alert event belongs.
   * 
   * @example
   * 18768
   */
  groupId?: number;
  /**
   * @remarks
   * The name of the endpoint device.
   * 
   * @example
   * qin-ubuntu
   */
  hostName?: string;
  /**
   * @remarks
   * The unique ID of the recorded alert event.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The private IP address of the endpoint device.
   * 
   * @example
   * 192.168.XXX.XXX
   */
  innerIp?: string;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The urgency levels of the alert events to query. Separate multiple urgency levels with commas (,). The urgency levels are listed in descending order. Valid values:
   * - **serious**: Urgent.
   * - **suspicious**: Suspicious.
   * - **remind**: Reminder.
   * 
   * @example
   * serious
   */
  levels?: string;
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
   * The collection of alert event processing result codes.
   */
  operateErrorCodeList?: string[];
  /**
   * @remarks
   * The end time of the alert processing time. Specify a datetime string in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-07-06 13:50:38
   */
  operateTimeEnd?: string;
  /**
   * @remarks
   * The start time of the alert processing time. Specify a datetime string in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-07-05 13:50:38
   */
  operateTimeStart?: string;
  /**
   * @remarks
   * The number of alert events to return on each page in a paging query. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The internal type identifiers of the alerts. Separate multiple types with commas (,). The valid values are derived from the current alert configurations. You can call the DescribeNsasSuspEventType operation to query the Type field in EventTypes. The Name field is the display name and is not used as a fixed enumeration list.
   * 
   * @example
   * Precision defense
   */
  parentEventTypes?: string;
  /**
   * @remarks
   * The alert name or asset information to query.
   * 
   * Note: Fuzzy match is supported. Asset information includes the asset name, public IP address, and private IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The custom sort field. Default value: **operateTime**. Valid values:
   * 
   * - **lastTime**: Latest occurrence time.
   * - **operateTime**: Processing time.
   * 
   * > This field takes effect only when Dealed is set to Y.
   * 
   * @example
   * operateTime
   */
  sortColumn?: string;
  /**
   * @remarks
   * The custom sort order. Default value: **desc**. Valid values:
   * 
   * - **asc**: Ascending order.
   * - **desc**: Descending order.
   * 
   * > This field takes effect only when Dealed is set to Y.
   * 
   * @example
   * desc
   */
  sortType?: string;
  /**
   * @remarks
   * The compatibility source classification parameter. This parameter is not used to specify the alert data source. You do not need to specify this parameter for common alert list queries.
   * 
   * @example
   * virus
   */
  source?: string;
  /**
   * @remarks
   * The IP address of the access source.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The IP address of the endpoint.
   * 
   * @example
   * 111.55.XXX.XXX
   */
  srcIp?: string;
  /**
   * @remarks
   * Further filters alerts by individual alert status within the processing group specified by the Dealed parameter. Status descriptions:
   * 
   * - `0`: No further status restriction. The alerts are still subject to the Dealed group.
   * - `1`: Pending.
   * - `2`: Ignored.
   * - `4`: Manually processed.
   * - `8`: Whitelisted (marked as false positive).
   * - `32`: Processed. For example, automatic defense interception succeeded.
   * - `64`: Expired.
   * 
   * Unprocessed alerts are automatically marked as expired if more than 31 days have passed since the last occurrence.
   * 
   * Deleted alerts cannot be queried. If the specified status does not belong to the group specified by Dealed, an empty result is returned.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether the alert is in strict mode. Not supported by SASE-EDR.
   * 
   * @example
   * Y
   */
  strictMode?: string;
  /**
   * @remarks
   * The ATT&CK tactic ID.
   * 
   * @example
   * TA0001
   */
  tacticId?: string;
  /**
   * @remarks
   * The container search target type. Not supported by SASE-EDR.
   * 
   * @example
   * containerId
   */
  targetType?: string;
  /**
   * @remarks
   * The end time of the latest occurrence. Specify a datetime string in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-07-06 13:50:38
   */
  timeEnd?: string;
  /**
   * @remarks
   * The start time of the latest occurrence. Specify a datetime string in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2022-07-05 13:50:38
   */
  timeStart?: string;
  /**
   * @remarks
   * The unique key of the security alert.
   * 
   * @example
   * 73fc06fb175a7405697e402f52864****
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The username of the endpoint.
   * 
   * @example
   * User
   */
  userName?: string;
  /**
   * @remarks
   * The UUIDs of the servers for which you want to query alerts. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * bb5d2484-f10e-450d-8917-3e79667e****,0e7c2fcd-7100-42c7-a21a-db6e4f32****
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      alarmEventName: 'AlarmEventName',
      alarmUniqueInfo: 'AlarmUniqueInfo',
      assetsTypeList: 'AssetsTypeList',
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      department: 'Department',
      eventNames: 'EventNames',
      groupId: 'GroupId',
      hostName: 'HostName',
      id: 'Id',
      innerIp: 'InnerIp',
      lang: 'Lang',
      levels: 'Levels',
      name: 'Name',
      operateErrorCodeList: 'OperateErrorCodeList',
      operateTimeEnd: 'OperateTimeEnd',
      operateTimeStart: 'OperateTimeStart',
      pageSize: 'PageSize',
      parentEventTypes: 'ParentEventTypes',
      remark: 'Remark',
      sortColumn: 'SortColumn',
      sortType: 'SortType',
      source: 'Source',
      sourceIp: 'SourceIp',
      srcIp: 'SrcIp',
      status: 'Status',
      strictMode: 'StrictMode',
      tacticId: 'TacticId',
      targetType: 'TargetType',
      timeEnd: 'TimeEnd',
      timeStart: 'TimeStart',
      uniqueInfo: 'UniqueInfo',
      userName: 'UserName',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmEventName: 'string',
      alarmUniqueInfo: 'string',
      assetsTypeList: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      currentPage: 'number',
      dealed: 'string',
      department: 'string',
      eventNames: 'string',
      groupId: 'number',
      hostName: 'string',
      id: 'number',
      innerIp: 'string',
      lang: 'string',
      levels: 'string',
      name: 'string',
      operateErrorCodeList: { 'type': 'array', 'itemType': 'string' },
      operateTimeEnd: 'string',
      operateTimeStart: 'string',
      pageSize: 'number',
      parentEventTypes: 'string',
      remark: 'string',
      sortColumn: 'string',
      sortType: 'string',
      source: 'string',
      sourceIp: 'string',
      srcIp: 'string',
      status: 'string',
      strictMode: 'string',
      tacticId: 'string',
      targetType: 'string',
      timeEnd: 'string',
      timeStart: 'string',
      uniqueInfo: 'string',
      userName: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

