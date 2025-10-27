// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * > To query the details of an alert event, you must specify the ID of the alert event. You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to query the IDs of alert events.
   * 
   * @example
   * 8df914418f4211fb****
   */
  alarmUniqueInfo?: string;
  /**
   * @remarks
   * The types of the assets.
   */
  assetsTypeList?: string[];
  /**
   * @remarks
   * The ID of the cluster of whose alert events you want to query.
   * 
   * @example
   * c4af4fdf38a98496a9b63c2be5dae****
   */
  clusterId?: string;
  /**
   * @remarks
   * The key of the condition that is used to query alert events on containers. Valid values:
   * 
   * *   **instanceId**: the ID of the asset
   * *   **appName**: the name of the application
   * *   **clusterId**: the ID of the cluster
   * *   **regionId**: the ID of the region
   * *   **nodeName**: the name of the node
   * *   **namespace**: the namespace
   * *   **clusterName**: the name of the cluster
   * *   **image**: the name of the image
   * *   **imageRepoName**: the name of the image repository
   * *   **imageRepoNamespace**: the namespace to which the image repository belongs
   * *   **imageRepoTag**: the tag that is added to the image
   * *   **imageDigest**: the digest of the image
   * 
   * @example
   * instanceId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the condition that is used to query alert events on containers.
   * 
   * @example
   * ccf9769c22b844ff9b8d57417683b****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Specifies whether the alert event is handled. Valid values:
   * 
   * *   **N**: unhandled
   * *   **Y**: handled
   * 
   * @example
   * N
   */
  dealed?: string;
  /**
   * @remarks
   * The subtype of the alert event. Separate multiple subtypes with commas (,).
   * 
   * @example
   * WEBSHELL
   */
  eventNames?: string;
  /**
   * @remarks
   * The data source of the alert event. Set the value to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the asset group to which the affected asset belongs.
   * 
   * @example
   * 18768
   */
  groupId?: number;
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The severity of the alert event. Separate multiple severities with commas (,). Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
   * 
   * @example
   * serious
   */
  levels?: string;
  /**
   * @remarks
   * The type of the accounts that you want to query. Default value: **0**. Valid values:
   * 
   * *   **0**: the current account.
   * *   **1**: all accounts.
   * 
   * @example
   * 0
   */
  multiAccountActionType?: number;
  /**
   * @remarks
   * The name of the asset that is affected by the alert event.
   * 
   * @example
   * ecs-xxx
   */
  name?: string;
  /**
   * @remarks
   * An array that consists of the handling result codes of alert events.
   */
  operateErrorCodeList?: string[];
  /**
   * @remarks
   * The timestamp when the handling operation ends.
   * 
   * @example
   * 2022-07-06 13:50:38
   */
  operateTimeEnd?: string;
  /**
   * @remarks
   * The timestamp when the handling operation starts.
   * 
   * @example
   * 2022-07-05 13:50:38
   */
  operateTimeStart?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: **20**. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The alert type of the alert event. Valid values:
   * 
   * *   **Suspicious process**
   * *   **Webshell**
   * *   **Unusual logon**
   * *   **Exception**
   * *   **Sensitive file tampering**
   * *   **Malicious process (cloud threat detection)**
   * *   **Suspicious network connection**
   * *   **Suspicious account**
   * *   **Application intrusion event**
   * *   **Cloud threat detection**
   * *   **Precise defense**
   * *   **Application whitelist**
   * *   **Persistent webshell**
   * *   **Web application threat detection**
   * *   **Malicious script**
   * *   **Threat intelligence**
   * *   **Malicious network activity**
   * *   **Cluster exception**
   * *   **Webshell (on-premises threat detection)**
   * *   **Vulnerability exploitation**
   * *   **Malicious process (on-premises threat detection)**
   * *   **Trusted exception**
   * *   **Others**
   * 
   * @example
   * Webshell
   */
  parentEventTypes?: string;
  /**
   * @remarks
   * The name of the alert or the information about the asset.
   * 
   * >  Fuzzy search is supported. The asset information includes the name, public IP address, and private IP address of an asset.
   * 
   * @example
   * 192.168.XX.XX
   */
  remark?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to query the ID.
   * 
   * @example
   * 16670360956*****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The custom sorting field. Default value: **operateTime**. Valid values:
   * 
   * *   **lastTime**: the latest occurrence time.
   * *   **operateTime**: the handling time.
   * 
   * >  This parameter takes effect if you set the **Dealed** parameter to Y.
   * 
   * @example
   * operateTime
   */
  sortColumn?: string;
  /**
   * @remarks
   * The custom sorting order. Default value: **desc**. Valid values:
   * 
   * *   **asc**: the ascending order
   * *   **desc**: the descending order
   * 
   * >  This parameter takes effect if you set the **Dealed** parameter to Y.
   * 
   * @example
   * desc
   */
  sortType?: string;
  /**
   * @remarks
   * The source of the alert.
   * 
   * @example
   * aegis_suspicious_file_v2
   */
  source?: string;
  /**
   * @remarks
   * The IDs of the Alibaba Cloud accounts within which alerts are generated.
   */
  sourceAliUids?: number[];
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The status of the alert event. Valid values:
   * 
   * *   **0**: all
   * *   **1**: pending handling
   * *   **2**: ignored
   * *   **4**: confirmed
   * *   **8**: marked as a false positive
   * *   **16**: handling
   * *   **32**: handled
   * *   **64**: expired
   * *   **128**: deleted
   * *   **512**: automatically blocking
   * *   **513**: automatically blocked
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether to enable the strict alerting mode.
   * 
   * *   N: no
   * *   Y: Yes
   * 
   * @example
   * Y
   */
  strictMode?: string;
  supportOperateCodeList?: string[];
  /**
   * @remarks
   * The tactic ID of ATT\\&CK.
   * 
   * @example
   * TA0001
   */
  tacticId?: string;
  /**
   * @remarks
   * The item that is used to search for the container. Valid values:
   * 
   * *   **containerId**: the ID of the container
   * *   **uuid**: the UUID of the server
   * *   **imageUuid**: the UUID of the image
   * 
   * @example
   * containerId
   */
  targetType?: string;
  /**
   * @remarks
   * The end time when the alert event was last detected.
   * 
   * @example
   * 2022-07-06 13:50:38
   */
  timeEnd?: string;
  /**
   * @remarks
   * The start time when the alert event was last detected.
   * 
   * @example
   * 2022-07-05 13:50:38
   */
  timeStart?: string;
  /**
   * @remarks
   * The unique key of the alert.
   * 
   * @example
   * 73fc06fb175a7405697e402f52864****
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The UUID of the server on which the alert is detected. Separate multiple UUIDs with commas (,).
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

