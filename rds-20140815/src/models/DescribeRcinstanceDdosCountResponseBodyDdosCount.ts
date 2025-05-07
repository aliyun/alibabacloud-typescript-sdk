// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceDdosCountResponseBodyDdosCount extends $dara.Model {
  /**
   * @example
   * 0
   */
  blackholeCount?: string;
  /**
   * @example
   * 0
   */
  defenseCount?: string;
  /**
   * @example
   * 6
   */
  instacenCount?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeCount: 'BlackholeCount',
      defenseCount: 'DefenseCount',
      instacenCount: 'InstacenCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeCount: 'string',
      defenseCount: 'string',
      instacenCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

