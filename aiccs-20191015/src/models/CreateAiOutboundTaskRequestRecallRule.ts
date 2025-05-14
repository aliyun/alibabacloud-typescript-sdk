// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiOutboundTaskRequestRecallRule extends $dara.Model {
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * 1
   */
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

