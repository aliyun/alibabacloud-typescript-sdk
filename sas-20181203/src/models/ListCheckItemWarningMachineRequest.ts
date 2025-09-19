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
   * ce89cdd0ea732472a8703821b19e****
   */
  containerFieldValue?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The ID of the asset group.
   * 
   * > You can call the [DescribeAllGroups](https://help.aliyun.com/document_detail/130972.html) operation to query the ID of the asset group.
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
   * The keyword that is used to query servers in fuzzy match mode.
   * 
   * @example
   * 225
   */
  remark?: string;
  /**
   * @remarks
   * The type of the check item.
   * 
   * @example
   * cis
   */
  riskType?: string;
  /**
   * @remarks
   * The data source. Default value: default. Valid values:
   * 
   * *   **default**: The check items of baselines for hosts.
   * *   **agentless**: The check items of baselines for agentless detection.
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The status of the check item. Valid values:
   * 
   * *   1: failed
   * 
   * *   2: verifying
   * 
   * *   3: passed
   * 
   * *   6: ignored
   * 
   * *   7: fixing
   * 
   * @example
   * 3
   */
  status?: number;
  /**
   * @remarks
   * The UUID array of the servers.
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

