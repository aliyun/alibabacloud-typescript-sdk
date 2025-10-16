// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallVSwitchRequest extends $dara.Model {
  /**
   * @example
   * vfw-tr-5b202e7f0be64611****
   */
  firewallId?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 102910763545****
   */
  memberUid?: string;
  /**
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @example
   * vpc-uf6b5lyul0x******
   */
  vpcId?: string;
  /**
   * @example
   * vsw-bp1sqg9w******
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      lang: 'Lang',
      memberUid: 'MemberUid',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      lang: 'string',
      memberUid: 'string',
      pageNo: 'string',
      pageSize: 'string',
      regionNo: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

