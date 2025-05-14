// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodePoolVulsResponseBodyVulRecordsVulList extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2019:3197-Important: sudo security update
   */
  aliasName?: string;
  /**
   * @remarks
   * A list of CVE names corresponding to the vulnerabilities.
   */
  cveList?: string[];
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20193197
   */
  name?: string;
  /**
   * @remarks
   * The severity level of the vulnerability.
   * 
   * Valid values:
   * 
   * *   nntf: You can ignore the vulnerability.
   * *   later: You can fix the vulnerability later.
   * *   asap: You need to fix the vulnerability at the earliest opportunity.
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * Indicates whether a restart is required.
   * 
   * @example
   * false
   */
  needReboot?: boolean;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'alias_name',
      cveList: 'cve_list',
      name: 'name',
      necessity: 'necessity',
      needReboot: 'need_reboot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      cveList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      necessity: 'string',
      needReboot: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cveList)) {
      $dara.Model.validateArray(this.cveList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

