// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHybridCloudClusterRuleResponseBodyClusterRule } from "./DescribeHybridCloudClusterRuleResponseBodyClusterRule";


export class DescribeHybridCloudClusterRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the rule.
   */
  clusterRule?: DescribeHybridCloudClusterRuleResponseBodyClusterRule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1F29A6D2-9EB6-526D-A997-36888**99CB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterRule: 'ClusterRule',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterRule: DescribeHybridCloudClusterRuleResponseBodyClusterRule,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clusterRule && typeof (this.clusterRule as any).validate === 'function') {
      (this.clusterRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

