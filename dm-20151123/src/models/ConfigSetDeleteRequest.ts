// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetDeleteRequest extends $dara.Model {
  /**
   * @example
   * xxx
   */
  ids?: string;
  /**
   * @example
   * true
   */
  isForce?: boolean;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      isForce: 'IsForce',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      isForce: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

