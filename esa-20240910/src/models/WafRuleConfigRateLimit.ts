// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleMatch2 } from "./WafRuleMatch2";
import { WafRuleConfigRateLimitThreshold } from "./WafRuleConfigRateLimitThreshold";


export class WafRuleConfigRateLimit extends $dara.Model {
  characteristics?: WafRuleMatch2;
  interval?: number;
  onHit?: boolean;
  TTL?: number;
  threshold?: WafRuleConfigRateLimitThreshold;
  static names(): { [key: string]: string } {
    return {
      characteristics: 'Characteristics',
      interval: 'Interval',
      onHit: 'OnHit',
      TTL: 'TTL',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characteristics: WafRuleMatch2,
      interval: 'number',
      onHit: 'boolean',
      TTL: 'number',
      threshold: WafRuleConfigRateLimitThreshold,
    };
  }

  validate() {
    if(this.characteristics && typeof (this.characteristics as any).validate === 'function') {
      (this.characteristics as any).validate();
    }
    if(this.threshold && typeof (this.threshold as any).validate === 'function') {
      (this.threshold as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

