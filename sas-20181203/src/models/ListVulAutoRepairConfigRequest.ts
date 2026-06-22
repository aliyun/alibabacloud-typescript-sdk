// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVulAutoRepairConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2022:0274-Important: polkit pkexec Local Privilege Escalation Vulnerability(CVE-2021-4034)
   */
  aliasName?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**, which indicates that 10 auto-fix vulnerability configurations are displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the vulnerability. Valid values:
   * 
   * - **cve**: Linux software vulnerability
   * - **sys**: Windows system vulnerability.
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
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

