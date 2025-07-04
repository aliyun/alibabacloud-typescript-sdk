// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugModelRequest extends $dara.Model {
  input?: string;
  /**
   * @example
   * true
   */
  isOnline?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'input',
      isOnline: 'isOnline',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: 'string',
      isOnline: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

