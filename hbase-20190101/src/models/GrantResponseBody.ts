// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantResponseBody extends $dara.Model {
  /**
   * @example
   * 9CBF8DF0-4931-4A54-9B60-4C6E1AB5****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

