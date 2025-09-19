// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterceptionSummaryResponseBodyInterceptionSummary extends $dara.Model {
  /**
   * @remarks
   * The number of clusters that are not protected.
   * 
   * @example
   * 0
   */
  closeClusterCount?: number;
  /**
   * @remarks
   * The number of disabled cluster defense rules.
   * 
   * @example
   * 0
   */
  closeRuleCount?: number;
  /**
   * @remarks
   * The total number of clusters.
   * 
   * @example
   * 0
   */
  clusterCount?: number;
  /**
   * @remarks
   * The total number of interception records for the specified cluster.
   * 
   * @example
   * 0
   */
  interceptionCountInDays?: number;
  /**
   * @remarks
   * The number of clusters that are protected.
   * 
   * @example
   * 0
   */
  openClusterCount?: number;
  /**
   * @remarks
   * The number of enabled cluster defense rules.
   * 
   * @example
   * 0
   */
  openRuleCount?: number;
  /**
   * @remarks
   * The number of security risks that are detected in the last 180 days.
   * 
   * @example
   * 0
   */
  riskCount180Day?: number;
  /**
   * @remarks
   * The number of security risks that are detected in the last 30 days.
   * 
   * @example
   * 0
   */
  riskCount30Day?: number;
  /**
   * @remarks
   * The number of security risks that are detected in the last 24 hours.
   * 
   * @example
   * 0
   */
  riskCountToday?: number;
  /**
   * @remarks
   * The total number of cluster defense rules.
   * 
   * @example
   * 0
   */
  ruleCount?: number;
  static names(): { [key: string]: string } {
    return {
      closeClusterCount: 'CloseClusterCount',
      closeRuleCount: 'CloseRuleCount',
      clusterCount: 'ClusterCount',
      interceptionCountInDays: 'InterceptionCountInDays',
      openClusterCount: 'OpenClusterCount',
      openRuleCount: 'OpenRuleCount',
      riskCount180Day: 'RiskCount180Day',
      riskCount30Day: 'RiskCount30Day',
      riskCountToday: 'RiskCountToday',
      ruleCount: 'RuleCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      closeClusterCount: 'number',
      closeRuleCount: 'number',
      clusterCount: 'number',
      interceptionCountInDays: 'number',
      openClusterCount: 'number',
      openRuleCount: 'number',
      riskCount180Day: 'number',
      riskCount30Day: 'number',
      riskCountToday: 'number',
      ruleCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInterceptionSummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics.
   */
  interceptionSummary?: GetInterceptionSummaryResponseBodyInterceptionSummary;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * F35F45B0-5D6B-4238-BE02-A62D0760E840
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      interceptionSummary: 'InterceptionSummary',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interceptionSummary: GetInterceptionSummaryResponseBodyInterceptionSummary,
      requestId: 'string',
    };
  }

  validate() {
    if(this.interceptionSummary && typeof (this.interceptionSummary as any).validate === 'function') {
      (this.interceptionSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

