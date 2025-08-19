// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNodePoolVulsResponseBodyVulRecordsVulListPackageList extends $dara.Model {
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
   * The ID of the node.
   * 
   * @example
   * i-t4n2qolb0wtzt0pz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The node name. This name is the identifier of the node in the cluster.
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
   * The vulnerability list of all node pools.
   */
  vulRecords?: DescribeNodePoolVulsResponseBodyVulRecords[];
  /**
   * @remarks
   * Indicates whether the CVE vulnerability patching service provided by Security Center is purchased.
   * 
   * *   true: yes
   * *   false: no
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

