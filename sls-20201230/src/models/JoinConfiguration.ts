// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinConfiguration extends $dara.Model {
  /**
   * @example
   * $0.id == $1.id
   */
  condition?: string;
  /**
   * @example
   * left_join
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

