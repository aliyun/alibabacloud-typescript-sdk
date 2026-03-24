// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClusterRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the hybrid cloud cluster.
   * 
   * @example
   * 1099
   */
  clusterId?: number;
  /**
   * @remarks
   * The resource ID of the cluster rule.
   * 
   * @example
   * hdbc-clusterrule-*****khzre0ym0w
   */
  clusterRuleResourceId?: string;
  /**
   * @remarks
   * The configuration of the traffic redirection rule:
   * 
   * - **check_mode**
   * 
   *   : the mode. Valid values:
   * 
   *   - **all**: redirects all traffic.
   * 
   *   - **part**: redirects a portion of traffic.
   * 
   * - **type**
   * 
   *   : the match type of the rule. Valid values:
   * 
   *   - **exact**: exact match.
   * 
   *   - **regex**: regular expression match.
   * 
   * - **substance**: the value of the rule.
   * 
   * @example
   * {\\"check_mode\\": \\"all\\", \\"type\\": \\"exact\\", \\"substance\\": \\"122\\"}
   */
  ruleConfig?: string;
  /**
   * @remarks
   * The type of the rule. Valid value:
   * 
   * - **pullin**: traffic redirection
   * 
   * @example
   * pullin
   */
  ruleType?: string;
  /**
   * @remarks
   * The status of the rule. Valid values:
   * 
   * - **1**: enabled.
   * 
   * - **0**: disabled.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterRuleResourceId: 'ClusterRuleResourceId',
      ruleConfig: 'RuleConfig',
      ruleType: 'RuleType',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'number',
      clusterRuleResourceId: 'string',
      ruleConfig: 'string',
      ruleType: 'string',
      status: 'string',
      version: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridCloudClusterRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeHybridCloudClusterRulesResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of cloud native mode entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeHybridCloudClusterRulesResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

