// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGovernanceInClusterResponseBodyViolationsDeny extends $dara.Model {
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * Requires container images to begin with a repo string from a specified list.
   */
  policyDescription?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * policy-gatekeeper-ackallowedrepos
   */
  policyName?: string;
  /**
   * @remarks
   * The severity level of the policy.
   * 
   * @example
   * high
   */
  severity?: string;
  /**
   * @remarks
   * The total number of blocking events that are triggered by the policy.
   * 
   * @example
   * 11
   */
  violations?: number;
  static names(): { [key: string]: string } {
    return {
      policyDescription: 'policyDescription',
      policyName: 'policyName',
      severity: 'severity',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyDescription: 'string',
      policyName: 'string',
      severity: 'string',
      violations: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

