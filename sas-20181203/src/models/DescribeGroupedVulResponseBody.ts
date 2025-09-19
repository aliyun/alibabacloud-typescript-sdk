// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupedVulResponseBodyGroupedVulItems extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2017:0184-Important: mysql security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The number of vulnerabilities that have the **high** priority.
   * 
   * @example
   * 0
   */
  asapCount?: number;
  /**
   * @remarks
   * The timestamp when the vulnerability was first detected. Unit: milliseconds.
   * 
   * @example
   * 1639371046000
   */
  gmtFirst?: number;
  /**
   * @remarks
   * The timestamp when the vulnerability was last detected. Unit: milliseconds.
   * 
   * @example
   * 1639371446000
   */
  gmtLast?: number;
  /**
   * @remarks
   * The number of handled vulnerabilities.
   * 
   * @example
   * 0
   */
  handledCount?: number;
  /**
   * @remarks
   * The language type associated with the vulnerability. Valid values:
   * 
   * *   **java**
   * *   **php**
   * 
   * >  This parameter is valid only for a vulnerability of the sca type.
   * 
   * @example
   * java
   */
  languageType?: string;
  /**
   * @remarks
   * The number of vulnerabilities that have the **medium** priority.
   * 
   * @example
   * 0
   */
  laterCount?: number;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20170184
   */
  name?: string;
  /**
   * @remarks
   * The number of vulnerabilities that have the **low** priority.
   * 
   * @example
   * 59
   */
  nntfCount?: number;
  /**
   * @remarks
   * Indicates whether the application protection feature is supported. Valid values:
   * 
   * *   **0**: not supported
   * *   **1**: supported
   * 
   * >  If this parameter is not returned, the application protection feature is not supported.
   * 
   * @example
   * 1
   */
  raspDefend?: number;
  /**
   * @remarks
   * The IDs of the common vulnerabilities and exposures (CVEs) that are related to the vulnerability.
   * 
   * @example
   * CVE-2023-24881,CVE-2023-24898
   */
  related?: string;
  /**
   * @remarks
   * The tag of the vulnerability. Valid values:
   * 
   * *   **Restart required**
   * *   **Remote utilization**
   * *   **EXP exists**
   * *   **Available**
   * *   **Elevation of Privilege**
   * *   **Code Execution**
   * 
   * @example
   * Code Execution
   */
  tags?: string;
  /**
   * @remarks
   * The total number of fixed vulnerabilities.
   * 
   * @example
   * 0
   */
  totalFixCount?: number;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * *   **cve**: Linux software vulnerability
   * *   **sys**: Windows system vulnerability
   * *   **cms**: Web-CMS vulnerability
   * *   **app**: application vulnerability
   * *   **emg**: urgent vulnerability
   * *   **sca**: vulnerability that is detected by software component analysis
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      asapCount: 'AsapCount',
      gmtFirst: 'GmtFirst',
      gmtLast: 'GmtLast',
      handledCount: 'HandledCount',
      languageType: 'LanguageType',
      laterCount: 'LaterCount',
      name: 'Name',
      nntfCount: 'NntfCount',
      raspDefend: 'RaspDefend',
      related: 'Related',
      tags: 'Tags',
      totalFixCount: 'TotalFixCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      asapCount: 'number',
      gmtFirst: 'number',
      gmtLast: 'number',
      handledCount: 'number',
      languageType: 'string',
      laterCount: 'number',
      name: 'string',
      nntfCount: 'number',
      raspDefend: 'number',
      related: 'string',
      tags: 'string',
      totalFixCount: 'number',
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

export class DescribeGroupedVulResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The information about the vulnerability.
   */
  groupedVulItems?: DescribeGroupedVulResponseBodyGroupedVulItems[];
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
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
   * 9BFA6D78-07EA-5C0A-9358-E4434573507B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
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
      groupedVulItems: { 'type': 'array', 'itemType': DescribeGroupedVulResponseBodyGroupedVulItems },
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

