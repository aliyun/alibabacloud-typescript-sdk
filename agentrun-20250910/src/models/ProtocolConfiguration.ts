// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProtocolConfiguration extends $dara.Model {
  /**
   * @example
   * HTTP
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

