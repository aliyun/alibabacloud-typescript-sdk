// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePolicyGovernanceInClusterResponseBodyViolationsDeny } from "./DescribePolicyGovernanceInClusterResponseBodyViolationsDeny";
import { DescribePolicyGovernanceInClusterResponseBodyViolationsWarn } from "./DescribePolicyGovernanceInClusterResponseBodyViolationsWarn";


export class DescribePolicyGovernanceInClusterResponseBodyViolations extends $dara.Model {
  /**
   * @remarks
   * Details about the blocking events that are triggered by each policy.
   */
  deny?: DescribePolicyGovernanceInClusterResponseBodyViolationsDeny;
  /**
   * @remarks
   * Details about the alerting events that are triggered by the policies of each severity level.
   */
  warn?: DescribePolicyGovernanceInClusterResponseBodyViolationsWarn;
  static names(): { [key: string]: string } {
    return {
      deny: 'deny',
      warn: 'warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deny: DescribePolicyGovernanceInClusterResponseBodyViolationsDeny,
      warn: DescribePolicyGovernanceInClusterResponseBodyViolationsWarn,
    };
  }

  validate() {
    if(this.deny && typeof (this.deny as any).validate === 'function') {
      (this.deny as any).validate();
    }
    if(this.warn && typeof (this.warn as any).validate === 'function') {
      (this.warn as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

