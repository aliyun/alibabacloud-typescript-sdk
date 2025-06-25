// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPolicyResponseBodyPolicyAccessTimeRangeConfigEffectiveTime } from "./GetPolicyResponseBodyPolicyAccessTimeRangeConfigEffectiveTime";


export class GetPolicyResponseBodyPolicyAccessTimeRangeConfig extends $dara.Model {
  /**
   * @remarks
   * The details of the periods during which logons are allowed.
   */
  effectiveTime?: GetPolicyResponseBodyPolicyAccessTimeRangeConfigEffectiveTime[];
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: { 'type': 'array', 'itemType': GetPolicyResponseBodyPolicyAccessTimeRangeConfigEffectiveTime },
    };
  }

  validate() {
    if(Array.isArray(this.effectiveTime)) {
      $dara.Model.validateArray(this.effectiveTime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

