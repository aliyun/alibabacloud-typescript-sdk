// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScalingRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The unique identifier of the scaling rule.
   * 
   * @example
   * ari:acs:ess:cn-hangzhou:140692647406****:scalingrule/asr-bp1dvirgwkoowxk7****
   */
  scalingRuleAri?: string;
  /**
   * @remarks
   * The ID of the scaling rule, which is generated by the system and is globally unique.
   * 
   * @example
   * asr-bp1dvirgwkoowxk7****
   */
  scalingRuleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingRuleAri: 'ScalingRuleAri',
      scalingRuleId: 'ScalingRuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingRuleAri: 'string',
      scalingRuleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

