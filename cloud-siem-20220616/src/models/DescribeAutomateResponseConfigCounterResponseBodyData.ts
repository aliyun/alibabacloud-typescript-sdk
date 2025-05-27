// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutomateResponseConfigCounterResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 20
   */
  all?: number;
  /**
   * @remarks
   * The number of enabled rules.
   * 
   * @example
   * 10
   */
  online?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      online: 'Online',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      online: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

