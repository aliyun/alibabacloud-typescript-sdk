// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiOutboundTaskRequestRecallRule extends $dara.Model {
  /**
   * @example
   * 2
   */
  count?: number;
  /**
   * @example
   * 5
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

