// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainSecureVulListResponseBodyVulList extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * CESA-2023:3555: python Security Update
   */
  aliasName?: string;
  /**
   * @remarks
   * The number of the vulnerabilities that have the **high** priority.
   * 
   * @example
   * 50
   */
  asapCount?: number;
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
   * 33
   */
  handledCount?: number;
  /**
   * @remarks
   * The number of the vulnerabilities that have the **medium** priority.
   * 
   * @example
   * 30
   */
  laterCount?: number;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20170574
   */
  name?: string;
  /**
   * @remarks
   * The number of the vulnerabilities that have the **low** priority.
   * 
   * @example
   * 20
   */
  nntfCount?: number;
  /**
   * @remarks
   * The tag that is added to the vulnerability. Valid values:
   * 
   * *   Restart required
   * *   Remote utilization
   * *   EXP exists
   * *   Available
   * *   Elevation of Privilege
   * *   Code Execution
   * 
   * @example
   * Code Execution
   */
  tags?: string;
  /**
   * @remarks
   * The type of the vulnerability. Default value: cve. Valid values:
   * 
   * *   **cve**: Linux software vulnerability.
   * *   **sys**: Windows system vulnerability.
   * *   **cms**: Web-CMS vulnerability.
   * *   **app**: application vulnerability that is detected by network scanning.
   * *   **sca**: application vulnerability that is detected by using software component analysis.
   * 
   * @example
   * app
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      asapCount: 'AsapCount',
      gmtLast: 'GmtLast',
      handledCount: 'HandledCount',
      laterCount: 'LaterCount',
      name: 'Name',
      nntfCount: 'NntfCount',
      tags: 'Tags',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      asapCount: 'number',
      gmtLast: 'number',
      handledCount: 'number',
      laterCount: 'number',
      name: 'string',
      nntfCount: 'number',
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

export class DescribeDomainSecureVulListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7532B7EE-7CE7-5F4D-BF04-B12447DD****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of vulnerabilities returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The domain name-related vulnerabilities.
   */
  vulList?: DescribeDomainSecureVulListResponseBodyVulList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vulList: 'VulList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vulList: { 'type': 'array', 'itemType': DescribeDomainSecureVulListResponseBodyVulList },
    };
  }

  validate() {
    if(Array.isArray(this.vulList)) {
      $dara.Model.validateArray(this.vulList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

