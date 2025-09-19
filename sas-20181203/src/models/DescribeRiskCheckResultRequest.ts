// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskCheckResultRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud service whose configuration check results you want to query. For more information about the check items for the cloud service, see the check item table in the "Response parameters" section of this topic.
   * 
   * @example
   * RDS
   */
  assetType?: string;
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
   * The type of the check item that you want to query. Valid values:
   * 
   * *   **1**: identity authentication and permissions
   * *   **2**: network access control
   * *   **3**: log audit
   * *   **4**: data security
   * *   **5**: monitoring and alerting
   * *   **6**: basic security protection
   * 
   * > If you do not specify this parameter, all types of check items are queried.
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * An array that consists of the IDs of check items. For more information about the check item, see the check item table in the "Response parameters" section of this topic.
   * 
   * @example
   * 1
   */
  itemIds?: string[];
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
   * The name of the check item. For more information about the check item, see the check item table in the "Response parameters" section of this topic.
   * 
   * @example
   * ALB_NetWorkAccessControl
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether the check item is supported by the edition of Security Center that you purchase. Valid values:
   * 
   * *   **enabled**: yes
   * *   **disabled**: no
   * 
   * @example
   * enabled
   */
  queryFlag?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The risk level of the check item that you want to query. Valid values:
   * 
   * *   **high**
   * *   **medium**
   * *   **low**
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 1.2.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The status of the check results. Valid values:
   * 
   * *   **pass**
   * *   **failed**
   * *   **running**
   * *   **waiting**
   * *   **ignored**
   * *   **falsePositive**
   * 
   * @example
   * pass
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      assetType: 'AssetType',
      currentPage: 'CurrentPage',
      groupId: 'GroupId',
      itemIds: 'ItemIds',
      lang: 'Lang',
      name: 'Name',
      pageSize: 'PageSize',
      queryFlag: 'QueryFlag',
      resourceOwnerId: 'ResourceOwnerId',
      riskLevel: 'RiskLevel',
      sourceIp: 'SourceIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetType: 'string',
      currentPage: 'number',
      groupId: 'number',
      itemIds: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      name: 'string',
      pageSize: 'number',
      queryFlag: 'string',
      resourceOwnerId: 'number',
      riskLevel: 'string',
      sourceIp: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.itemIds)) {
      $dara.Model.validateArray(this.itemIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

