// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckItemWarningSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the check item. Fuzzy match is supported.
   * 
   * @example
   * password
   */
  checkItemFuzzy?: string;
  /**
   * @remarks
   * The risk level. Default value: null, which indicates that check items at all risk levels are queried.Valid values:
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * medium
   */
  checkLevel?: string;
  /**
   * @remarks
   * The type of the check item.
   * 
   * @example
   * hc.check.type.attack_defense
   */
  checkType?: string;
  /**
   * @remarks
   * The risk status. Default value is null, meaning check items in all states are queried. Valid values:
   * 
   * *   **1**: failed
   * *   **3**: passed
   * *   **6**: whitelisted
   * 
   * @example
   * 3
   */
  checkWarningStatus?: number;
  /**
   * @remarks
   * The list of risk levels. If the CheckWarningStatus parameter is specified, only it takes effect.
   */
  checkWarningStatusList?: number[];
  /**
   * @remarks
   * The name of the field that is used to query containers.
   * 
   * @example
   * clusterId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the field that is used to query containers.
   * 
   * @example
   * c471f0f61b9c04f8380556e922cf1****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to query the IDs of asset groups.
   * 
   * @example
   * 1161****
   */
  groupId?: number;
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
   * The number of entries to return on each page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * > We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the baseline.
   * 
   * @example
   * weak_password
   */
  riskType?: string;
  /**
   * @remarks
   * The data source. Default value: **default**. Valid value:
   * 
   * *   **agentless**: The check items of baselines for agentless detection.
   * *   **default**: The check items of baselines for hosts.
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * Start of time range for filtering alerts, effective only for querying historically handled alerts.
   * 
   * @example
   * 1732793158366
   */
  startTime?: number;
  /**
   * @remarks
   * The UUIDs of the servers.
   * 
   * >  You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/141932.html) operation to query the UUIDs of the servers.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      checkItemFuzzy: 'CheckItemFuzzy',
      checkLevel: 'CheckLevel',
      checkType: 'CheckType',
      checkWarningStatus: 'CheckWarningStatus',
      checkWarningStatusList: 'CheckWarningStatusList',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      currentPage: 'CurrentPage',
      groupId: 'GroupId',
      lang: 'Lang',
      pageSize: 'PageSize',
      riskType: 'RiskType',
      source: 'Source',
      startTime: 'StartTime',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItemFuzzy: 'string',
      checkLevel: 'string',
      checkType: 'string',
      checkWarningStatus: 'number',
      checkWarningStatusList: { 'type': 'array', 'itemType': 'number' },
      containerFieldName: 'string',
      containerFieldValue: 'string',
      currentPage: 'number',
      groupId: 'number',
      lang: 'string',
      pageSize: 'number',
      riskType: 'string',
      source: 'string',
      startTime: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.checkWarningStatusList)) {
      $dara.Model.validateArray(this.checkWarningStatusList);
    }
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

