// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulListPageRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The Common Vulnerabilities and Exposures (CVE) ID of the vulnerability.
   * 
   * @example
   * CVE-2022-44702
   */
  cveId?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the application protection feature is supported. Valid values:
   * 
   * - **0**: no.
   * 
   * - **1**: yes.
   * 
   * @example
   * 0
   */
  raspDefend?: number;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * RCE vulnerability
   */
  vulNameLike?: string;
  /**
   * @remarks
   * The type of the vulnerabilities. Valid values:
   * 
   * *   **cve**: Linux software vulnerability.
   * *   **sys**: Windows system vulnerability.
   * *   **app**: Application vulnerability that is detected by using web scanner.
   * 
   * @example
   * cve
   */
  vulType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      cveId: 'CveId',
      pageSize: 'PageSize',
      raspDefend: 'RaspDefend',
      vulNameLike: 'VulNameLike',
      vulType: 'VulType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      cveId: 'string',
      pageSize: 'number',
      raspDefend: 'number',
      vulNameLike: 'string',
      vulType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

