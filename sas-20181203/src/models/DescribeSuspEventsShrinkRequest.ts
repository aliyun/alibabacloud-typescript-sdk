// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the alert event.
   * 
   * > To query the exception information of a single alert event, provide the unique ID of the alert event. You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to obtain the ID.
   * 
   * @example
   * 8df914418f4211fb****
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * The collection of asset types.
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
   * The container search field. Valid values:
   * 
   * - **instanceId**: instance ID
   * - **appName**: application name
   * - **clusterId**: cluster ID
   * - **regionId**: region
   * - **nodeName**: node name
   * - **namespace**: namespace
   * - **clusterName**: cluster name
   * - **image**: image name
   * - **imageRepoName**: image repository name
   * - **imageRepoNamespace**: image repository namespace
   * - **imageRepoTag**: image tag
   * - **imageDigest**: image digest
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
   * ccf9769c22b844ff9b8d57417683b****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The page number of the results to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Specifies whether the alert events to query have been handled. Valid values:
   * 
   * @example
   * N
   */
  dealed?: string;
  /**
   * @remarks
   * The discovery source. This parameter is invalid.
   * 
   * @example
   * linux
   */
  detectSource?: string;
  /**
   * @remarks
   * The subtypes of the alert events. Separate multiple subtypes with commas (,).
   * 
   * @example
   * WEBSHELL
   */
  eventNames?: string;
  /**
   * @remarks
   * The data source identifier of the alert event. The value is fixed as sas.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The group ID of the asset affected by the alert event.
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
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The severity levels of the security alerts that you want to query. Separate multiple severity levels with commas (,). The severity levels are listed in descending order. Valid values:
   * 
   * - **serious**: Critical.
   * - **suspicious**: Suspicious.
   * - **remind**: Informational.
   * 
   * @example
   * serious
   */
  levels?: string;
  /**
   * @remarks
   * The multi-account query type. Default value: **0**. Valid values:
   * - **0**: Queries data of the current account.
   * - **1**: Queries data of all accounts.
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
   * The collection of alert event handling result codes.
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
   * 2022-07-05 13:50:38
   */
  operateTimeStart?: string;
  /**
   * @remarks
   * The number of alert events to display on each page in a paged query. Default value: **20**. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The Alarm Metric of the alerting events to query. Valid values:
   * 
   * @example
   * other
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
   * The China site (Chinese mainland) account ID of the member account in the resource directory.
   * >Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 16670360956*****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The custom sort field. Default value: **operateTime**. Valid values:
   * 
   * - **lastTime**: the most recent occurrence time.
   * - **operateTime**: the processing time.
   * 
   * > This field takes effect only when **Dealed** is set to Y.
   * 
   * @example
   * operateTime
   */
  sortColumn?: string;
  /**
   * @remarks
   * The custom sort type. Default value: **desc**. Valid values:
   * 
   * - **asc**: ascending order.
   * - **desc**: descending order.
   * 
   * > This parameter takes effect only when **Dealed** is set to Y.
   * 
   * @example
   * desc
   */
  sortType?: string;
  /**
   * @remarks
   * The alert source.
   * 
   * @example
   * aegis_suspicious_file_v2
   */
  source?: string;
  /**
   * @remarks
   * The list of Alibaba Cloud account IDs that generated the alerts.
   */
  sourceAliUidsShrink?: string;
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
   * The status of the alert events to query. Valid values:
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether the alert is identified in strict mode.
   * 
   * @example
   * Y
   */
  strictMode?: string;
  /**
   * @remarks
   * The list of operation types supported by the alert.
   */
  supportOperateCodeList?: string[];
  /**
   * @remarks
   * The tactic ID in ATT&CK.
   * 
   * @example
   * TA0001
   */
  tacticId?: string;
  /**
   * @remarks
   * The type of the container search target. Valid values:
   * 
   * - **containerId**: container ID.
   * - **uuid**: server UUID.
   * - **imageUuid**: image UUID.
   * 
   * @example
   * containerId
   */
  targetType?: string;
  /**
   * @remarks
   * The end time of the latest occurrence time range.
   * 
   * @example
   * 2022-07-06 13:50:38
   */
  timeEnd?: string;
  /**
   * @remarks
   * The start time of the latest occurrence time range.
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
   * The UUIDs of the servers for which you want to query alerts. Separate multiple UUIDs with commas (,).
   * 
   * @example
   * bb5d2484-f10e-450d-8917-3e79667e****,0e7c2fcd-7100-42c7-a21a-db6e4f32****
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
      sourceAliUidsShrink: 'SourceAliUids',
      sourceIp: 'SourceIp',
      status: 'Status',
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
      sourceAliUidsShrink: 'string',
      sourceIp: 'string',
      status: 'string',
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
    if(Array.isArray(this.supportOperateCodeList)) {
      $dara.Model.validateArray(this.supportOperateCodeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

