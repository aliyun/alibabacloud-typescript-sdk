// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCheckItemWarningMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  checkId?: number;
  /**
   * @remarks
   * The name of the container security query parameter.
   * 
   * @example
   * clusterId
   */
  containerFieldName?: string;
  /**
   * @remarks
   * The value of the container security query parameter.
   * 
   * @example
   * ce89cdd0ea732472a8703821b19e****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The page number of the page to return. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the asset group to query.
   * > You can call the [DescribeAllGroups](https://help.aliyun.com/document_detail/130972.html) operation to obtain the value of this parameter.
   * 
   * @example
   * 1161****
   */
  groupId?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to display on each page during paging in a paged query. Default value: 20. If you leave the PageSize parameter empty, 20 entries are returned by default.
   * > Do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The fuzzy match keyword for servers.
   * 
   * @example
   * 225
   */
  remark?: string;
  /**
   * @remarks
   * The ID of the member accounts in the resource folder (Alibaba Cloud account).
   * > You can invoke the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   * 
   * @example
   * 1082098404740323
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The category to which the check item belongs.
   * 
   * @example
   * cis
   */
  riskType?: string;
  /**
   * @remarks
   * The data source. If you leave this parameter empty, the baseline check results for servers are queried by default. Valid values:
   * - **default**: server
   * - **agentless**: agentless
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The status of the check item. Default value: null. Valid values:
   * 
   * - **1**: failed
   * - **2**: verifying
   * - **3**: passed
   * - **6**: ignored
   * - **7**: fixing
   * - **8**: fixed
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The list of server UUIDs.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      containerFieldName: 'ContainerFieldName',
      containerFieldValue: 'ContainerFieldValue',
      currentPage: 'CurrentPage',
      groupId: 'GroupId',
      lang: 'Lang',
      pageSize: 'PageSize',
      remark: 'Remark',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      riskType: 'RiskType',
      source: 'Source',
      status: 'Status',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      containerFieldName: 'string',
      containerFieldValue: 'string',
      currentPage: 'number',
      groupId: 'number',
      lang: 'string',
      pageSize: 'number',
      remark: 'string',
      resourceDirectoryAccountId: 'number',
      riskType: 'string',
      source: 'string',
      status: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

