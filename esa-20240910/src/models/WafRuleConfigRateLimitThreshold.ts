// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfigRateLimitThresholdResponseStatus } from "./WafRuleConfigRateLimitThresholdResponseStatus";


export class WafRuleConfigRateLimitThreshold extends $dara.Model {
  distinctManagedRules?: number;
  managedRulesBlocked?: number;
  request?: number;
  responseStatus?: WafRuleConfigRateLimitThresholdResponseStatus;
  traffic?: string;
  static names(): { [key: string]: string } {
    return {
      distinctManagedRules: 'DistinctManagedRules',
      managedRulesBlocked: 'ManagedRulesBlocked',
      request: 'Request',
      responseStatus: 'ResponseStatus',
      traffic: 'Traffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distinctManagedRules: 'number',
      managedRulesBlocked: 'number',
      request: 'number',
      responseStatus: WafRuleConfigRateLimitThresholdResponseStatus,
      traffic: 'string',
    };
  }

  validate() {
    if(this.responseStatus && typeof (this.responseStatus as any).validate === 'function') {
      (this.responseStatus as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

