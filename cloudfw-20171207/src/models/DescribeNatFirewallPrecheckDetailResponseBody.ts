// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroupsPrecheckEntities extends $dara.Model {
  info?: string;
  /**
   * @example
   * Precheck test
   */
  name?: string;
  /**
   * @example
   * passed
   */
  status?: string;
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

export class DescribeNatFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroups extends $dara.Model {
  /**
   * @example
   * 9
   */
  failedCount?: number;
  /**
   * @example
   * test
   */
  name?: string;
  precheckEntities?: DescribeNatFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroupsPrecheckEntities[];
  /**
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
      precheckEntities: { 'type': 'array', 'itemType': DescribeNatFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroupsPrecheckEntities },
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

export class DescribeNatFirewallPrecheckDetailResponseBodyPrecheckDetail extends $dara.Model {
  /**
   * @example
   * vfw-tr-7a9c8901ed394****
   */
  firewallId?: string;
  /**
   * @example
   * vpc-m5emh0w6v2e15****
   */
  networkInstanceId?: string;
  precheckEntityGroups?: DescribeNatFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroups[];
  /**
   * @example
   * failed
   */
  precheckStatus?: string;
  /**
   * @example
   * 1715136000
   */
  precheckTimestamp?: string;
  /**
   * @example
   * cn-shenzhen
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
      precheckEntityGroups: { 'type': 'array', 'itemType': DescribeNatFirewallPrecheckDetailResponseBodyPrecheckDetailPrecheckEntityGroups },
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

export class DescribeNatFirewallPrecheckDetailResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  isFound?: boolean;
  precheckDetail?: DescribeNatFirewallPrecheckDetailResponseBodyPrecheckDetail;
  /**
   * @example
   * 99A65AA0-C5B5-5092-BFCF-8111B436****
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
      precheckDetail: DescribeNatFirewallPrecheckDetailResponseBodyPrecheckDetail,
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

