// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridCloudClusterRulesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1099
   */
  clusterId?: number;
  /**
   * @example
   * hdbc-clusterrule-*****khzre0ym0w
   */
  clusterRuleResourceId?: string;
  /**
   * @example
   * {\\"check_mode\\": \\"all\\", \\"type\\": \\"exact\\", \\"substance\\": \\"122\\"}
   */
  ruleConfig?: string;
  /**
   * @example
   * pullin
   */
  ruleType?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
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
  data?: DescribeHybridCloudClusterRulesResponseBodyData[];
  /**
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  /**
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

