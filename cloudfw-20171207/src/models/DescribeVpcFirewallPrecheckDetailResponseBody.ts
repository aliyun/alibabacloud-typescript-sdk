// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroupsPrecheckEntities extends $dara.Model {
  /**
   * @remarks
   * The information about the failed precheck.
   * 
   * @example
   * VPC Firewall Quota Full
   */
  info?: string;
  /**
   * @remarks
   * The name of the precheck item.
   * 
   * @example
   * Precheck test
   */
  name?: string;
  /**
   * @remarks
   * The status of the precheck item. Valid values:
   * 
   * - **running**: The precheck is in progress.
   * 
   * - **passed**: The precheck is passed.
   * 
   * - **failed**: The precheck failed.
   * 
   * @example
   * passed
   */
  status?: string;
  /**
   * @remarks
   * The suggested solution.
   * 
   * @example
   * The VPC firewall quota is full. We recommend that you increase the firewall quota
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      name: 'Name',
      status: 'Status',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      name: 'string',
      status: 'string',
      suggestion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroups extends $dara.Model {
  /**
   * @remarks
   * The number of rules that failed the precheck.
   * 
   * @example
   * 3
   */
  failedCount?: number;
  /**
   * @remarks
   * The name of the precheck instance.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The execution status of each precheck item.
   */
  precheckEntities?: DescribeVpcFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroupsPrecheckEntities[];
  /**
   * @remarks
   * The status of the precheck group. Valid values:
   * 
   * - **running**
   * 
   * - **passed**
   * 
   * - **failed**
   * 
   * @example
   * running
   */
  precheckEntityGroupStatus?: string;
  static names(): { [key: string]: string } {
    return {
      failedCount: 'FailedCount',
      name: 'Name',
      precheckEntities: 'PrecheckEntities',
      precheckEntityGroupStatus: 'PrecheckEntityGroupStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCount: 'number',
      name: 'string',
      precheckEntities: { 'type': 'array', 'itemType': DescribeVpcFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroupsPrecheckEntities },
      precheckEntityGroupStatus: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.precheckEntities)) {
      $dara.Model.validateArray(this.precheckEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallPrecheckDetailResponseBodyPrecheckDetail extends $dara.Model {
  /**
   * @remarks
   * The ID of the firewall instance.
   * 
   * @example
   * vfw-tr-7a9c8901ed394****
   */
  firewallId?: string;
  /**
   * @remarks
   * The ID of the network instance.
   * 
   * @example
   * vpc-m5emh0w6v2e15****
   */
  networkInstanceId?: string;
  /**
   * @remarks
   * The list of precheck item groups.
   */
  precheckEntityGroups?: DescribeVpcFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroups[];
  /**
   * @remarks
   * The status of the precheck. Valid values:
   * 
   * - **running**: The precheck is in progress.
   * 
   * - **passed**: The precheck is passed.
   * 
   * - **failed**: The precheck failed.
   * 
   * @example
   * failed
   */
  precheckStatus?: string;
  /**
   * @remarks
   * The timestamp of the precheck.
   * 
   * @example
   * 1715136000
   */
  precheckTimestamp?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      firewallId: 'FirewallId',
      networkInstanceId: 'NetworkInstanceId',
      precheckEntityGroups: 'PrecheckEntityGroups',
      precheckStatus: 'PrecheckStatus',
      precheckTimestamp: 'PrecheckTimestamp',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallId: 'string',
      networkInstanceId: 'string',
      precheckEntityGroups: { 'type': 'array', 'itemType': DescribeVpcFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroups },
      precheckStatus: 'string',
      precheckTimestamp: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.precheckEntityGroups)) {
      $dara.Model.validateArray(this.precheckEntityGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallPrecheckDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a task exists.
   * 
   * @example
   * false
   */
  isFound?: boolean;
  /**
   * @remarks
   * The details of the precheck.
   */
  precheckDetail?: DescribeVpcFirewallPrecheckDetailResponseBodyPrecheckDetail;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4FB718F0-CC04-5A12-B17B-188CFC3F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isFound: 'IsFound',
      precheckDetail: 'PrecheckDetail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isFound: 'boolean',
      precheckDetail: DescribeVpcFirewallPrecheckDetailResponseBodyPrecheckDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.precheckDetail && typeof (this.precheckDetail as any).validate === 'function') {
      (this.precheckDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

