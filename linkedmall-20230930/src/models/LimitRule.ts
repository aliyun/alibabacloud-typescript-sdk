// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LimitRule extends $dara.Model {
  /**
   * @example
   * 1724947200000
   */
  beginTime?: number;
  /**
   * @example
   * day
   */
  condcase?: string;
  /**
   * @example
   * 1724947200000
   */
  endTime?: number;
  /**
   * @example
   * 1
   */
  limitNum?: number;
  /**
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

