// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageGroupedVulListResponseBodyGroupedVulItems extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2017:3075-Important: wget security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The number of high-risk vulnerabilities.
   * 
   * @example
   * 26
   */
  asapCount?: number;
  /**
   * @remarks
   * Indicates whether the vulnerability can be fixed. Valid values:
   * - **yes**: The vulnerability can be fixed.
   * - **no**: The vulnerability cannot be fixed.
   * 
   * @example
   * yes
   */
  canFix?: string;
  /**
   * @remarks
   * The timestamp of the first scan, in milliseconds.
   * 
   * @example
   * 1611201274000
   */
  gmtLast?: number;
  /**
   * @remarks
   * The timestamp of the latest scan, in milliseconds.
   * 
   * @example
   * 1611201274000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The number of medium-risk vulnerabilities.
   * 
   * @example
   * 26
   */
  laterCount?: number;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * debian:9:CVE-2019-3858
   */
  name?: string;
  /**
   * @remarks
   * The number of low-risk vulnerabilities.
   * 
   * @example
   * 29
   */
  nntfCount?: number;
  /**
   * @remarks
   * The vulnerability tag. Valid values:
   * 
   *  - **AI**: vulnerabilities related to AI components.
   * 
   * @example
   * AI
   */
  ruleTag?: string;
  /**
   * @remarks
   * The processing status of the vulnerability. Valid values:
   * 
   * - **0**: Unhandled.
   * - **1**: Handled.
   * - **2**: Verifying.
   * - **3**: Added to the whitelist.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * The label of the vulnerability. Valid values:
   * 
   * - Restart required
   * - Remote utilization
   * - EXP exists
   * - Available
   * - Privilege escalation
   * - Code execution
   * 
   * @example
   * EXP exists
   */
  tags?: string;
  /**
   * @remarks
   * The type of vulnerability to query. Valid values:
   * - **cve**: image system vulnerability
   * - **sca**: image application vulnerability.
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      asapCount: 'AsapCount',
      canFix: 'CanFix',
      gmtLast: 'GmtLast',
      lastScanTime: 'LastScanTime',
      laterCount: 'LaterCount',
      name: 'Name',
      nntfCount: 'NntfCount',
      ruleTag: 'RuleTag',
      status: 'Status',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      asapCount: 'number',
      canFix: 'string',
      gmtLast: 'number',
      lastScanTime: 'number',
      laterCount: 'number',
      name: 'string',
      nntfCount: 'number',
      ruleTag: 'string',
      status: 'number',
      tags: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGroupedVulListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in the paging query.
   * 
   * @example
   * 2
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of image vulnerabilities.
   */
  groupedVulItems?: DescribeImageGroupedVulListResponseBodyGroupedVulItems[];
  /**
   * @remarks
   * The number of image vulnerabilities returned on each page in the paging query. Default value: **20**, which indicates that 20 image vulnerability records are returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 5E244439-UJND-8BF7-26F36E21B9AA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of image system vulnerabilities.
   * 
   * @example
   * 21
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      groupedVulItems: 'GroupedVulItems',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      groupedVulItems: { 'type': 'array', 'itemType': DescribeImageGroupedVulListResponseBodyGroupedVulItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupedVulItems)) {
      $dara.Model.validateArray(this.groupedVulItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

