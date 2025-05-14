// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePolicyGovernanceInClusterResponseBodyTotalViolationsDeny } from "./DescribePolicyGovernanceInClusterResponseBodyTotalViolationsDeny";
import { DescribePolicyGovernanceInClusterResponseBodyTotalViolationsWarn } from "./DescribePolicyGovernanceInClusterResponseBodyTotalViolationsWarn";


export class DescribePolicyGovernanceInClusterResponseBodyTotalViolations extends $dara.Model {
  /**
   * @remarks
   * Details about the blocking events that are triggered by the policies of each severity level.
   */
  deny?: DescribePolicyGovernanceInClusterResponseBodyTotalViolationsDeny;
  /**
   * @remarks
   * Details about the alerting events that are triggered by the policies of each severity level.
   */
  warn?: DescribePolicyGovernanceInClusterResponseBodyTotalViolationsWarn;
  static names(): { [key: string]: string } {
    return {
      deny: 'deny',
      warn: 'warn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deny: DescribePolicyGovernanceInClusterResponseBodyTotalViolationsDeny,
      warn: DescribePolicyGovernanceInClusterResponseBodyTotalViolationsWarn,
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

