// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetailEcsInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp1gra23yai47d8e****
   */
  ecsInstanceId?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * tyf_test
   */
  ecsInstanceName?: string;
  /**
   * @remarks
   * The private IP address of the ECS instance.
   * 
   * @example
   * 172.24.121.XXX
   */
  privateIp?: string;
  /**
   * @remarks
   * The public IP address of the ECS instance.
   * 
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
   * @remarks
   * The description of the rule.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The risk level of the rule.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The status of the rule.
   * 
   * @example
   * enable
   */
  ruleStatus?: string;
  /**
   * @remarks
   * The UUID of the rule.
   * 
   * @example
   * 4c1e72c9-6690-408b-9048-065f0f10****
   */
  ruleUuid?: string;
  /**
   * @remarks
   * The optimization suggestion.
   * 
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
   * @remarks
   * The number of associated ECS instances.
   * 
   * @example
   * 10
   */
  ecsCount?: number;
  /**
   * @remarks
   * The ECS information.
   */
  ecsInfo?: DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetailEcsInfo[];
  /**
   * @remarks
   * The ID of the security group instance.
   * 
   * @example
   * sg-2vc0p803vgxumn6r****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test-instance-name
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  /**
   * @remarks
   * The risk level of the rule.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The information about the risk security group rule.
   */
  ruleInfo?: DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetailRuleInfo[];
  /**
   * @remarks
   * The ID of the VPC instance.
   * 
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
   * @remarks
   * The page number.
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
   * 33C94306-2064-5A06-9645-01419967****
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the risk security group.
   */
  riskSgDetail?: DescribeRiskSecurityGroupDetailResponseBodyRiskSgDetail[];
  /**
   * @remarks
   * The total number of entries.
   * 
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

