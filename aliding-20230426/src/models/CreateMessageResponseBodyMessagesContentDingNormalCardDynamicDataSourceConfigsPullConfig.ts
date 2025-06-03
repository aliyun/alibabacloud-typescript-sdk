// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageResponseBodyMessagesContentDingNormalCardDynamicDataSourceConfigsPullConfig extends $dara.Model {
  /**
   * @example
   * 3
   */
  interval?: number;
  /**
   * @example
   * NONE
   */
  pullStrategy?: string;
  /**
   * @example
   * SECONDS
   */
  timeUnit?: string;
  static names(): { [key: string]: string } {
    return {
      interval: 'interval',
      pullStrategy: 'pullStrategy',
      timeUnit: 'timeUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      pullStrategy: 'string',
      timeUnit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

