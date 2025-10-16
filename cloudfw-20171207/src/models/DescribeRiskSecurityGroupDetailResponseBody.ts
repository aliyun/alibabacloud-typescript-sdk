// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetailEcsInfo extends $dara.Model {
  /**
   * @example
   * i-bp1gra23yai47d8e****
   */
  ecsInstanceId?: string;
  /**
   * @example
   * tyf_test
   */
  ecsInstanceName?: string;
  /**
   * @example
   * 172.24.121.XXX
   */
  privateIp?: string;
  /**
   * @example
   * 47.107.141.XXX
   */
  publicIp?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      ecsInstanceName: 'EcsInstanceName',
      privateIp: 'PrivateIp',
      publicIp: 'PublicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      ecsInstanceName: 'string',
      privateIp: 'string',
      publicIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetailRuleInfo extends $dara.Model {
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @example
   * enable
   */
  ruleStatus?: string;
  /**
   * @example
   * 4c1e72c9-6690-408b-9048-065f0f10****
   */
  ruleUuid?: string;
  /**
   * @example
   * test
   */
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      riskLevel: 'RiskLevel',
      ruleName: 'RuleName',
      ruleStatus: 'RuleStatus',
      ruleUuid: 'RuleUuid',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      riskLevel: 'string',
      ruleName: 'string',
      ruleStatus: 'string',
      ruleUuid: 'string',
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

export class DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetail extends $dara.Model {
  /**
   * @example
   * 10
   */
  ecsCount?: number;
  ecsInfo?: DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetailEcsInfo[];
  /**
   * @example
   * sg-2vc0p803vgxumn6r****
   */
  instanceId?: string;
  /**
   * @example
   * test-instance-name
   */
  instanceName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @example
   * high
   */
  riskLevel?: string;
  ruleInfo?: DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetailRuleInfo[];
  /**
   * @example
   * vpc-8vbuzirdl3w1r7exw****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsCount: 'EcsCount',
      ecsInfo: 'EcsInfo',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      regionNo: 'RegionNo',
      riskLevel: 'RiskLevel',
      ruleInfo: 'RuleInfo',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsCount: 'number',
      ecsInfo: { 'type': 'array', 'itemType': DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetailEcsInfo },
      instanceId: 'string',
      instanceName: 'string',
      regionNo: 'string',
      riskLevel: 'string',
      ruleInfo: { 'type': 'array', 'itemType': DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetailRuleInfo },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ecsInfo)) {
      $dara.Model.validateArray(this.ecsInfo);
    }
    if(Array.isArray(this.ruleInfo)) {
      $dara.Model.validateArray(this.ruleInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRiskSecurityGroupDetailResponseBody extends $dara.Model {
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
   * 33C94306-2064-5A06-9645-01419967****
   */
  requestId?: string;
  riskSgDetail?: DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetail[];
  /**
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      riskSgDetail: 'RiskSgDetail',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      riskSgDetail: { 'type': 'array', 'itemType': DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetail },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.riskSgDetail)) {
      $dara.Model.validateArray(this.riskSgDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

