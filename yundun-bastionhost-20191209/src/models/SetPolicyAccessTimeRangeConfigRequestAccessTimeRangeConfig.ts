// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfigEffectiveTime } from "./SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfigEffectiveTime";


export class SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfig extends $dara.Model {
  /**
   * @remarks
   * The details about the periods during which users can log on to the assets.
   */
  effectiveTime?: SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfigEffectiveTime[];
  static names(): { [key: string]: string } {
    return {
      effectiveTime: 'EffectiveTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveTime: { 'type': 'array', 'itemType': SetPolicyAccessTimeRangeConfigRequestAccessTimeRangeConfigEffectiveTime },
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

