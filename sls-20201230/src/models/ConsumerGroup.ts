// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConsumerGroup extends $dara.Model {
  /**
   * @example
   * test-group
   */
  name?: string;
  /**
   * @example
   * false
   */
  order?: boolean;
  /**
   * @example
   * 300
   */
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      order: 'order',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      order: 'boolean',
      timeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

