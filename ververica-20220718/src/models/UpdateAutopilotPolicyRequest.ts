// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AutopilotPolicy } from "./AutopilotPolicy";


export class UpdateAutopilotPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic tuning. A value of true enables automatic tuning (ACTIVE), and a value of false disables tuning (DISABLED). If this parameter is not specified, the current status is not changed.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The tuning policy configuration. This parameter uses full PUT mode: when specified, the complete policy object replaces the existing configuration entirely (fields not included are cleared). If this parameter is not specified, the existing configuration is retained.
   */
  policyConfig?: AutopilotPolicy;
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      policyConfig: 'policyConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      policyConfig: AutopilotPolicy,
    };
  }

  validate() {
    if(this.policyConfig && typeof (this.policyConfig as any).validate === 'function') {
      (this.policyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

