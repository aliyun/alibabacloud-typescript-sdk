// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinConfiguration extends $dara.Model {
  /**
   * @remarks
   * The condition of the set operation.
   * 
   * @example
   * $0.id == $1.id
   */
  condition?: string;
  /**
   * @remarks
   * The type of the set operation.
   * 
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

