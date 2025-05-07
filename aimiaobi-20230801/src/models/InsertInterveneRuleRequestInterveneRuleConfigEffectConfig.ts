// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InsertInterveneRuleRequestInterveneRuleConfigEffectConfig extends $dara.Model {
  /**
   * @example
   * 0
   */
  effectType?: number;
  /**
   * @example
   * 2023-03-28 06:04:29
   */
  endTime?: string;
  /**
   * @example
   * 2023-03-28 06:04:29
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      effectType: 'EffectType',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectType: 'number',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

