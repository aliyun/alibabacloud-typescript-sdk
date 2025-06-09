// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConditionConfiguration extends $dara.Model {
  /**
   * @example
   * cnt > 100
   */
  condition?: string;
  /**
   * @example
   * __count__ > 5
   */
  countCondition?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      countCondition: 'countCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      countCondition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

