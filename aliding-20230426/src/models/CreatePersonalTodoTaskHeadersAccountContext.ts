// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalTodoTaskHeadersAccountContext extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ba3a9b612345678d8fedf544ef69d19e
   */
  accountId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

