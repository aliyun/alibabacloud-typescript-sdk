// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMessageHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @example
   * 123456
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accountId: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

