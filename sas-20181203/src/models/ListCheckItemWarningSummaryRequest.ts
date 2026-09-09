// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckItemWarningSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The fuzzy match for the check item name.
   * 
   * @example
   * password
   */
  checkItemFuzzy?: string;
  /**
   * @remarks
   * The risk level. Default value: null, which indicates that all levels are queried. Valid values:
   * - **high**: High.
   * - **medium**: Medium.
   * - **low**: Low.
   * 
   * @example
   * medium
   */
  checkLevel?: string;
  /**
   * @remarks
   * The check item category name.
   * 
   * @example
   * hc.check.type.attack_defense
   */
  checkType?: string;
  /**
   * @remarks
   * The risk status. Default value: null, which indicates that all statuses are queried. Valid values:
   * - **1**: Failed.
   * - **3**: Passed.
   * - **6**: Whitelisted.
   * - **8**: Fixed.
   * 
   * @example
   * 3
   */
  checkWarningStatus?: number;
  /**
   * @remarks
   * The list of risk statuses. If both this parameter and CheckWarningStatus are specified, only CheckWarningStatus takes effect.
   */
  checkWarningStatusList?: number[];
  /**
   * @remarks
   * The container security query parameter name.
   * 
   * @example
   * clusterId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The container security query parameter value.
   * 
   * @example
   * c471f0f61b9c04f8380556e922cf1****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates that query results are displayed starting from page 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the asset group to query.
   * > You can call the [DescribeAllGroups](~~DescribeAllGroups~~) operation to obtain this parameter.
   * 
   * @example
   * 1161****
   */
  groupId?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries per page when paging. Default value: 20. If the PageSize parameter is left empty, 20 entries are returned per page.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the member accounts in the resource directory (Alibaba Cloud account).
   * > You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1232428423234****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The baseline category name.
   * 
   * @example
   * weak_password
   */
  riskType?: string;
  /**
   * @remarks
   * The data source. Default value: **default**. Valid values:
   * - **agentless**: agentless detection.
   * - **default**: host baseline.
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The start time for filtering alerts. This parameter takes effect only when you query historical processed alerts. Specify a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1732793158366
   */
  startTime?: number;
  /**
   * @remarks
   * The list of server UUIDs to query.
   * > You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/141932.html) operation to obtain the UUID of a server.
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
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
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
      resourceDirectoryAccountId: 'number',
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

