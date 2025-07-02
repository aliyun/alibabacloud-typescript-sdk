// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchWindow extends $dara.Model {
  /**
   * @example
   * 100
   */
  countBasedWindow?: number;
  /**
   * @example
   * 10
   */
  timeBasedWindow?: number;
  static names(): { [key: string]: string } {
    return {
      countBasedWindow: 'CountBasedWindow',
      timeBasedWindow: 'TimeBasedWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countBasedWindow: 'number',
      timeBasedWindow: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

