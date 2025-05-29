// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules } from "./ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules";


export class ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPolicies extends $dara.Model {
  /**
   * @remarks
   * The Differentiated Service Code Point (DSCP) value of the traffic marking policy.
   * 
   * @example
   * 5
   */
  markingDscp?: number;
  /**
   * @remarks
   * The priority of the traffic marking policy.
   * 
   * A lower value indicates a higher priority.
   * 
   * @example
   * 5
   */
  priority?: number;
  /**
   * @remarks
   * The description of the traffic marking policy.
   * 
   * @example
   * desctest
   */
  trafficMarkingPolicyDescription?: string;
  /**
   * @remarks
   * The ID of the traffic marking policy.
   * 
   * @example
   * tm-iz5egnyitxiroq****
   */
  trafficMarkingPolicyId?: string;
  /**
   * @remarks
   * The name of the traffic marking policy.
   * 
   * @example
   * nametest
   */
  trafficMarkingPolicyName?: string;
  /**
   * @remarks
   * The status of the traffic marking policy. Valid values:
   * 
   * *   **Creating**: The policy is being created.
   * *   **Active**: The policy is available.
   * *   **Modifying**: The policy is being modified.
   * *   **Deleting**: The policy is being deleted.
   * 
   * @example
   * Creating
   */
  trafficMarkingPolicyStatus?: string;
  /**
   * @remarks
   * The traffic classification rules.
   */
  trafficMatchRules?: ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules[];
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-ccni***
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      markingDscp: 'MarkingDscp',
      priority: 'Priority',
      trafficMarkingPolicyDescription: 'TrafficMarkingPolicyDescription',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
      trafficMarkingPolicyName: 'TrafficMarkingPolicyName',
      trafficMarkingPolicyStatus: 'TrafficMarkingPolicyStatus',
      trafficMatchRules: 'TrafficMatchRules',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      markingDscp: 'number',
      priority: 'number',
      trafficMarkingPolicyDescription: 'string',
      trafficMarkingPolicyId: 'string',
      trafficMarkingPolicyName: 'string',
      trafficMarkingPolicyStatus: 'string',
      trafficMatchRules: { 'type': 'array', 'itemType': ListTrafficMarkingPoliciesResponseBodyTrafficMarkingPoliciesTrafficMatchRules },
      transitRouterId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.trafficMatchRules)) {
      $dara.Model.validateArray(this.trafficMatchRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

