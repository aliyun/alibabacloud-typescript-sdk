// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVfwIPSConfigListResponseBodyVfwIpsSwitchConfigList extends $dara.Model {
  /**
   * @remarks
   * The status of the Basic Policies switch.
   * 
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @remarks
   * The UID of the member accounts.
   * 
   * @example
   * 134646920647****
   */
  memberUid?: string;
  /**
   * @remarks
   * The status of the virtual patches switch.
   * 
   * @example
   * 1
   */
  patchRules?: number;
  /**
   * @remarks
   * The rule class for Block Mode.
   * 
   * @example
   * 1
   */
  ruleClass?: number;
  /**
   * @remarks
   * The defense mode.
   * 
   * @example
   * 1
   */
  runMode?: number;
  /**
   * @remarks
   * The instance ID of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * cen-h678sl4wv3yd5v****
   */
  vpcFirewallId?: string;
  /**
   * @remarks
   * The list of instance IDs of virtual private cloud (VPC) firewalls.
   */
  vpcFirewallIdList?: string[];
  /**
   * @remarks
   * The instance name of the virtual private cloud (VPC) firewall.
   * 
   * @example
   * vpc-test
   */
  vpcFirewallName?: string;
  static names(): { [key: string]: string } {
    return {
      basicRules: 'BasicRules',
      memberUid: 'MemberUid',
      patchRules: 'PatchRules',
      ruleClass: 'RuleClass',
      runMode: 'RunMode',
      vpcFirewallId: 'VpcFirewallId',
      vpcFirewallIdList: 'VpcFirewallIdList',
      vpcFirewallName: 'VpcFirewallName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicRules: 'number',
      memberUid: 'string',
      patchRules: 'number',
      ruleClass: 'number',
      runMode: 'number',
      vpcFirewallId: 'string',
      vpcFirewallIdList: { 'type': 'array', 'itemType': 'string' },
      vpcFirewallName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vpcFirewallIdList)) {
      $dara.Model.validateArray(this.vpcFirewallIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVfwIPSConfigListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15FCCC52-1E23-57AE-B5EF-3E00A3******
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The configuration list.
   */
  vfwIpsSwitchConfigList?: DescribeVfwIPSConfigListResponseBodyVfwIpsSwitchConfigList[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vfwIpsSwitchConfigList: 'VfwIpsSwitchConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vfwIpsSwitchConfigList: { 'type': 'array', 'itemType': DescribeVfwIPSConfigListResponseBodyVfwIpsSwitchConfigList },
    };
  }

  validate() {
    if(Array.isArray(this.vfwIpsSwitchConfigList)) {
      $dara.Model.validateArray(this.vfwIpsSwitchConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

