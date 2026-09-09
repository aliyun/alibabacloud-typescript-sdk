// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportSuspEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The collection of asset types.
   */
  assetsTypeList?: string[];
  /**
   * @remarks
   * The ID of the cluster to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
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
   * clusterId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the container search field.
   * 
   * @example
   * c819391d2d520485fa3e81e2dc2ea****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * Specifies whether the alert event is handled. Valid values:
   * - **N**: Unhandled.
   * - **Y**: Handled.
   * 
   * @example
   * Y
   */
  dealed?: string;
  /**
   * @remarks
   * The data source identifier of the anomaly event. Set the value to sas.
   * 
   * @example
   * sas
   */
  from?: string;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * @example
   * 9454789
   */
  groupId?: number;
  /**
   * @remarks
   * The unique ID of the alert event record.
   * 
   * @example
   * 17821
   */
  id?: number;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The severity levels of the alert events to query. Separate multiple severity levels with commas (,). The severity levels are listed in descending order. Valid values:
   * - **serious**: Urgent.
   * - **suspicious**: Suspicious.
   * - **remind**: Reminder.
   * 
   * @example
   * serious,suspicious,remind
   */
  levels?: string;
  /**
   * @remarks
   * The full name of the anomaly event.
   * 
   * @example
   * WEBSHELL
   */
  name?: string;
  /**
   * @remarks
   * The collection of alert event handling result codes.
   */
  operateErrorCodeList?: string[];
  /**
   * @remarks
   * The maximum number of entries per page in a paged query. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The Alarm Metric of the alerting events to query. Valid values:
   * 
   * - **Abnormal process behavior**
   * - **Web shell**
   * - **Unusual logon**
   * - **Anomaly event**
   * - **Sensitive file tampering**
   * - **Malicious process (cloud scan)**
   * - **Suspicious network connection**
   * - **Abnormal account**
   * - **Application intrusion event**
   * - **Cloud service threat detection**
   * - **Precise defense**
   * - **Application whitelist**
   * - **Persistent backdoor**
   * - **Web application threat detection**
   * - **Malicious script**
   * - **Threat intelligence**
   * - **Malicious network connectivity behavior**
   * - **Container cluster exception**
   * - **Web shell (local scan)**
   * - **Vulnerability exploits**
   * - **Malicious process (local scan)**
   * - **Trusted exception**
   * - **Other**
   * 
   * @example
   * WEBSHELL
   */
  parentEventTypes?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * remark
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account of the member accounts in the resource directory.
   * > You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The source IP address of the request. You do not need to specify this parameter. The system automatically obtains this value.
   * 
   * @example
   * 127.0.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The handling status of the anomaly event. Valid values:
   * - **0**: All.
   * - **1**: Unhandled.
   * - **2**: Ignored.
   * - **4**: Confirmed.
   * - **8**: Marked as false positive.
   * - **16**: Handling.
   * - **32**: Handled.
   * - **64**: Expired.
   * - **128**: Deleted.
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The dimension of the target switch configuration. Valid values:
   * 
   * - **uuid**: asset UUID
   * - **image_repo**: image repository ID
   * - **Cluster**: cluster ID
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The end time of the anomaly event. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2022-12-05 00:00:00
   */
  timeEnd?: string;
  /**
   * @remarks
   * The start time of the anomaly event occurrence. Format: YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2022-10-01 00:00:00
   */
  timeStart?: string;
  /**
   * @remarks
   * The unique key of the security alert.
   * 
   * @example
   * 1fbe8d16727f61d1478a674d6fa0****
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The unique identifier of the associated instance.
   * 
   * @example
   * 18b7336e-d469-473b-af83-8e5420f9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      assetsTypeList: 'AssetsTypeList',
      clusterId: 'ClusterId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      from: 'From',
      groupId: 'GroupId',
      id: 'Id',
      lang: 'Lang',
      levels: 'Levels',
      name: 'Name',
      operateErrorCodeList: 'OperateErrorCodeList',
      pageSize: 'PageSize',
      parentEventTypes: 'ParentEventTypes',
      remark: 'Remark',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
      status: 'Status',
      targetType: 'TargetType',
      timeEnd: 'TimeEnd',
      timeStart: 'TimeStart',
      uniqueInfo: 'UniqueInfo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsTypeList: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      currentPage: 'string',
      dealed: 'string',
      from: 'string',
      groupId: 'number',
      id: 'number',
      lang: 'string',
      levels: 'string',
      name: 'string',
      operateErrorCodeList: { 'type': 'array', 'itemType': 'string' },
      pageSize: 'string',
      parentEventTypes: 'string',
      remark: 'string',
      resourceDirectoryAccountId: 'number',
      sourceIp: 'string',
      status: 'string',
      targetType: 'string',
      timeEnd: 'string',
      timeStart: 'string',
      uniqueInfo: 'string',
      uuid: 'string',
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

