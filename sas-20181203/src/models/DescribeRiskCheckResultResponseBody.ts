// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskCheckResultResponseBodyListRiskItemResources extends $dara.Model {
  /**
   * @remarks
   * The details about the check results.
   */
  contentResource?: { [key: string]: any };
  /**
   * @remarks
   * The title in the details. Valid values:
   * 
   * *   **bestPractice**: description
   * *   **influence**: risk
   * *   **suggestion**: solution
   * *   **helpResource**: reference
   * 
   * @example
   * bestPractice
   */
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      contentResource: 'ContentResource',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentResource: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      resourceName: 'string',
    };
  }

  validate() {
    if(this.contentResource) {
      $dara.Model.validateMap(this.contentResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckResultResponseBodyList extends $dara.Model {
  /**
   * @remarks
   * The number of affected assets.
   * 
   * @example
   * 0
   */
  affectedCount?: number;
  /**
   * @remarks
   * The timestamp when the last check was performed. Unit: milliseconds.
   * 
   * @example
   * 1639429164000
   */
  checkTime?: number;
  /**
   * @remarks
   * The ID of the check item. For more information about the check item, see the check item table in the "Response parameters" section of this topic.
   * 
   * @example
   * 1
   */
  itemId?: number;
  /**
   * @remarks
   * The time when the next check will be performed.
   * 
   * @example
   * 0
   */
  remainingTime?: number;
  /**
   * @remarks
   * Indicates whether the risks that are detected based on the check item can be fixed. Valid values:
   * 
   * *   **enabled**: yes
   * *   **disabled**: no
   * 
   * @example
   * disabled
   */
  repairStatus?: string;
  /**
   * @remarks
   * The type of the affected assets.
   * 
   * @example
   * ECS
   */
  riskAssertType?: string;
  /**
   * @remarks
   * An array that consists of the details about the check item.
   */
  riskItemResources?: DescribeRiskCheckResultResponseBodyListRiskItemResources[];
  /**
   * @remarks
   * The risk level of the check item. Valid values:
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
   * The sequence number in the check results. The check items are sorted based on the sequence number.
   * 
   * @example
   * 1
   */
  sort?: number;
  /**
   * @remarks
   * Indicates whether the check item is supported by the edition of Security Center that you purchase. Valid values:
   * 
   * *   **enabled**: yes
   * *   **disable**: no
   * 
   * @example
   * enabled
   */
  startStatus?: string;
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
  /**
   * @remarks
   * The ID of the check task.
   * 
   * @example
   * 15384933
   */
  taskId?: number;
  /**
   * @remarks
   * The name of the check item.
   * 
   * @example
   * RDS - Whitelist Configuration
   */
  title?: string;
  /**
   * @remarks
   * The type of the check item. Valid values:
   * 
   * *   Identity authentication and permissions
   * *   Network access control
   * *   Log audit
   * *   Data security
   * *   Monitoring and alerting
   * *   Basic security protection
   * 
   * @example
   * Log audit
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      affectedCount: 'AffectedCount',
      checkTime: 'CheckTime',
      itemId: 'ItemId',
      remainingTime: 'RemainingTime',
      repairStatus: 'RepairStatus',
      riskAssertType: 'RiskAssertType',
      riskItemResources: 'RiskItemResources',
      riskLevel: 'RiskLevel',
      sort: 'Sort',
      startStatus: 'StartStatus',
      status: 'Status',
      taskId: 'TaskId',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedCount: 'number',
      checkTime: 'number',
      itemId: 'number',
      remainingTime: 'number',
      repairStatus: 'string',
      riskAssertType: 'string',
      riskItemResources: { 'type': 'array', 'itemType': DescribeRiskCheckResultResponseBodyListRiskItemResources },
      riskLevel: 'string',
      sort: 'number',
      startStatus: 'string',
      status: 'string',
      taskId: 'number',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.riskItemResources)) {
      $dara.Model.validateArray(this.riskItemResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The check items.
   */
  list?: DescribeRiskCheckResultResponseBodyList[];
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 20
   */
  pageCount?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * AD271C07-4ACE-413D-AA9B-F14FD3B7717F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      list: 'List',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      list: { 'type': 'array', 'itemType': DescribeRiskCheckResultResponseBodyList },
      pageCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

