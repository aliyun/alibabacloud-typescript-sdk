// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LimitRule extends $dara.Model {
  /**
   * @remarks
   * Start time of validity
   * 
   * > UNIX timestamp in milliseconds
   * 
   * @example
   * 1724947200000
   */
  beginTime?: number;
  /**
   * @remarks
   * Period condition
   * 
   * > This field applies only when ruleType is UpperNumberPerUserPeriod.
   * 
   * @example
   * day
   */
  condcase?: string;
  /**
   * @remarks
   * End time of validity
   * 
   * > UNIX timestamp in milliseconds
   * 
   * @example
   * 1724947200000
   */
  endTime?: number;
  /**
   * @remarks
   * Purchase limit quantity
   * 
   * > If multiple purchase limit rules are active at the same time, the final limit is the minimum value.
   * 
   * @example
   * 1
   */
  limitNum?: number;
  /**
   * @remarks
   * Purchase limit type
   * 
   * @example
   * UpperNumberPerUser
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'beginTime',
      condcase: 'condcase',
      endTime: 'endTime',
      limitNum: 'limitNum',
      ruleType: 'ruleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'number',
      condcase: 'string',
      endTime: 'number',
      limitNum: 'number',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

