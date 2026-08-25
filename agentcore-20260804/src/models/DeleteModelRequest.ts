// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteModelRequest extends $dara.Model {
  /**
   * @example
   * client-token-1
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

