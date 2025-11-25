// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVfwIPSConfigListResponseBodyVfwIpsSwitchConfigList extends $dara.Model {
  /**
   * @example
   * 1
   */
  basicRules?: number;
  /**
   * @example
   * 134646920647****
   */
  memberUid?: string;
  /**
   * @example
   * 1
   */
  patchRules?: number;
  /**
   * @example
   * 1
   */
  ruleClass?: number;
  /**
   * @example
   * 1
   */
  runMode?: number;
  /**
   * @example
   * cen-h678sl4wv3yd5v****
   */
  vpcFirewallId?: string;
  vpcFirewallIdList?: string[];
  /**
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
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 15FCCC52-1E23-57AE-B5EF-3E00A3******
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
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

