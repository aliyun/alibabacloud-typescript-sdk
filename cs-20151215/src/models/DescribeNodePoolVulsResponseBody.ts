// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodePoolVulsResponseBodyVulRecordsVulListPackageList extends $dara.Model {
  /**
   * @remarks
   * The name of the package.
   * 
   * @example
   * WebLogic
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * The list of CVEs corresponding to the vulnerability.
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
   * The vulnerability level.
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
  /**
   * @remarks
   * The list of packages affected by the vulnerability.
   */
  packageList?: DescribeNodePoolVulsResponseBodyVulRecordsVulListPackageList[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'alias_name',
      cveList: 'cve_list',
      name: 'name',
      necessity: 'necessity',
      needReboot: 'need_reboot',
      packageList: 'package_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      cveList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      necessity: 'string',
      needReboot: 'boolean',
      packageList: { 'type': 'array', 'itemType': DescribeNodePoolVulsResponseBodyVulRecordsVulListPackageList },
    };
  }

  validate() {
    if(Array.isArray(this.cveList)) {
      $dara.Model.validateArray(this.cveList);
    }
    if(Array.isArray(this.packageList)) {
      $dara.Model.validateArray(this.packageList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNodePoolVulsResponseBodyVulRecords extends $dara.Model {
  /**
   * @remarks
   * The node instance ID.
   * 
   * @example
   * i-t4n2qolb0wtzt0pz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the node, which identifies the node in the cluster.
   * 
   * @example
   * cn-hangzhou.192.168.x.x
   */
  nodeName?: string;
  /**
   * @remarks
   * The list of vulnerabilities.
   */
  vulList?: DescribeNodePoolVulsResponseBodyVulRecordsVulList[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instance_id',
      nodeName: 'node_name',
      vulList: 'vul_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      nodeName: 'string',
      vulList: { 'type': 'array', 'itemType': DescribeNodePoolVulsResponseBodyVulRecordsVulList },
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

export class DescribeNodePoolVulsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of vulnerabilities in the node pool.
   */
  vulRecords?: DescribeNodePoolVulsResponseBodyVulRecords[];
  /**
   * @remarks
   * Indicates whether the Security Center CVE fix service is purchased. Valid values:
   * 
   * - true: Purchased.
   * - false: Not purchased.
   * 
   * @example
   * false
   */
  vulsFixServicePurchased?: boolean;
  static names(): { [key: string]: string } {
    return {
      vulRecords: 'vul_records',
      vulsFixServicePurchased: 'vuls_fix_service_purchased',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vulRecords: { 'type': 'array', 'itemType': DescribeNodePoolVulsResponseBodyVulRecords },
      vulsFixServicePurchased: 'boolean',
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

