// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportSuspEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The types of assets.
   */
  assetsTypeList?: string[];
  /**
   * @remarks
   * The ID of the cluster that you want to query.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
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
   * clusterId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the condition that is used to query alert events on containers.
   * 
   * @example
   * c819391d2d520485fa3e81e2dc2ea****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * The status of the alert event. Valid values:
   * 
   * *   **N**: unhandled
   * *   **Y**: handled
   * 
   * @example
   * Y
   */
  dealed?: string;
  /**
   * @remarks
   * The data source of the exception. Set the value to sas.
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
   * 8076980
   */
  groupId?: number;
  /**
   * @remarks
   * The unique ID of the alert event.
   * 
   * @example
   * 17821
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
   * serious,suspicious,remind
   */
  levels?: string;
  /**
   * @remarks
   * The complete name of the exception.
   * 
   * @example
   * WEBSHELL
   */
  name?: string;
  /**
   * @remarks
   * The status codes of alert events.
   */
  operateErrorCodeList?: string[];
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
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
   * The source IP address of the request. The value of this parameter is specified by the system.
   * 
   * @example
   * 127.0.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The handling status of the exception. Valid values:
   * 
   * *   **0**: all status
   * *   **1**: pending handling
   * *   **2**: ignored
   * *   **4**: confirmed
   * *   **8**: marked as false positive
   * *   **16**: handling
   * *   **32**: handled
   * *   **64**: expired
   * *   **128**: deleted
   * 
   * @example
   * 0
   */
  status?: string;
  /**
   * @remarks
   * The dimension from which you want to configure the feature. Valid values:
   * 
   * *   **uuid**: the UUID of the asset
   * *   **image_repo**: the ID of the image repository
   * *   **Cluster**: the ID of the cluster
   * 
   * @example
   * uuid
   */
  targetType?: string;
  /**
   * @remarks
   * The end of the time range during which the exception is detected.
   * 
   * @example
   * 2022-12-05 00:00:00
   */
  timeEnd?: string;
  /**
   * @remarks
   * The beginning of the time range during which the exception is detected.
   * 
   * @example
   * 2022-10-01 00:00:00
   */
  timeStart?: string;
  /**
   * @remarks
   * The unique key of the alert event.
   * 
   * @example
   * 1fbe8d16727f61d1478a674d6fa0****
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The unique ID of the associated instance.
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

