// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePolicyGovernanceInClusterResponseBodyAdmitLog } from "./DescribePolicyGovernanceInClusterResponseBodyAdmitLog";
import { DescribePolicyGovernanceInClusterResponseBodyOnState } from "./DescribePolicyGovernanceInClusterResponseBodyOnState";
import { DescribePolicyGovernanceInClusterResponseBodyTotalViolations } from "./DescribePolicyGovernanceInClusterResponseBodyTotalViolations";
import { DescribePolicyGovernanceInClusterResponseBodyViolations } from "./DescribePolicyGovernanceInClusterResponseBodyViolations";


export class DescribePolicyGovernanceInClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The audit logs of the policies in the cluster.
   */
  admitLog?: DescribePolicyGovernanceInClusterResponseBodyAdmitLog;
  /**
   * @remarks
   * Details about the policies of different severity levels that are enabled for the cluster.
   */
  onState?: DescribePolicyGovernanceInClusterResponseBodyOnState[];
  /**
   * @remarks
   * Details about the blocking and alerting events that are triggered by policies of different severity levels.
   */
  totalViolations?: DescribePolicyGovernanceInClusterResponseBodyTotalViolations;
  /**
   * @remarks
   * Details about the blocking and alerting events that are triggered by different policies.
   */
  violations?: DescribePolicyGovernanceInClusterResponseBodyViolations;
  static names(): { [key: string]: string } {
    return {
      admitLog: 'admit_log',
      onState: 'on_state',
      totalViolations: 'totalViolations',
      violations: 'violations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      admitLog: DescribePolicyGovernanceInClusterResponseBodyAdmitLog,
      onState: { 'type': 'array', 'itemType': DescribePolicyGovernanceInClusterResponseBodyOnState },
      totalViolations: DescribePolicyGovernanceInClusterResponseBodyTotalViolations,
      violations: DescribePolicyGovernanceInClusterResponseBodyViolations,
    };
  }

  validate() {
    if(this.admitLog && typeof (this.admitLog as any).validate === 'function') {
      (this.admitLog as any).validate();
    }
    if(Array.isArray(this.onState)) {
      $dara.Model.validateArray(this.onState);
    }
    if(this.totalViolations && typeof (this.totalViolations as any).validate === 'function') {
      (this.totalViolations as any).validate();
    }
    if(this.violations && typeof (this.violations as any).validate === 'function') {
      (this.violations as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

