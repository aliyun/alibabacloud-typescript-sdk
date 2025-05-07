// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleDetailResponseBodyDataConditionsConditionBasicInfoCheckRangeAnchor extends $dara.Model {
  /**
   * @example
   * 7
   */
  anchorCid?: string;
  /**
   * @example
   * 1
   */
  hitTime?: number;
  /**
   * @example
   * AFTER
   */
  location?: string;
  static names(): { [key: string]: string } {
    return {
      anchorCid: 'AnchorCid',
      hitTime: 'HitTime',
      location: 'Location',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anchorCid: 'string',
      hitTime: 'number',
      location: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

