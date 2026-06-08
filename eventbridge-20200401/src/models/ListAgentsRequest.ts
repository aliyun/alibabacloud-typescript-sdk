// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAgentsRequest extends $dara.Model {
  /**
   * @example
   * my-agent
   */
  after?: string;
  /**
   * @example
   * 50
   */
  limit?: string;
  /**
   * @example
   * acs
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      after: 'After',
      limit: 'Limit',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      after: 'string',
      limit: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

