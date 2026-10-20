// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterVulsResponseBodyVulRecords extends $dara.Model {
  /**
   * @remarks
   * The list of CVEs.
   */
  cveList?: string[];
  /**
   * @remarks
   * The vulnerability severity level.
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * The number of nodes that have this vulnerability.
   * 
   * @example
   * 1
   */
  nodeCount?: number;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np0156da1082b54fa987e32618dd******
   */
  nodepoolId?: string;
  /**
   * @remarks
   * The node pool name.
   * 
   * @example
   * test
   */
  nodepoolName?: string;
  /**
   * @remarks
   * The vulnerability alias.
   * 
   * @example
   * CVE-2022-xxxx:rsync security vulnerability
   */
  vulAliasName?: string;
  /**
   * @remarks
   * The vulnerability name.
   * 
   * @example
   * oval:com.redhat.rhsa:def:xxxxxxx
   */
  vulName?: string;
  /**
   * @remarks
   * The vulnerability type.
   * 
   * @example
   * cve
   */
  vulType?: string;
  static names(): { [key: string]: string } {
    return {
      cveList: 'cve_list',
      necessity: 'necessity',
      nodeCount: 'node_count',
      nodepoolId: 'nodepool_id',
      nodepoolName: 'nodepool_name',
      vulAliasName: 'vul_alias_name',
      vulName: 'vul_name',
      vulType: 'vul_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cveList: { 'type': 'array', 'itemType': 'string' },
      necessity: 'string',
      nodeCount: 'number',
      nodepoolId: 'string',
      nodepoolName: 'string',
      vulAliasName: 'string',
      vulName: 'string',
      vulType: 'string',
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

export class DescribeClusterVulsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of vulnerabilities.
   */
  vulRecords?: DescribeClusterVulsResponseBodyVulRecords[];
  static names(): { [key: string]: string } {
    return {
      vulRecords: 'vul_records',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vulRecords: { 'type': 'array', 'itemType': DescribeClusterVulsResponseBodyVulRecords },
    };
  }

  validate() {
    if(Array.isArray(this.vulRecords)) {
      $dara.Model.validateArray(this.vulRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

