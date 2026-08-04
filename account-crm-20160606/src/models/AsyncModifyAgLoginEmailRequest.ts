// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncModifyAgLoginEmailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  mpk?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  newLoginEmail?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pk?: string;
  static names(): { [key: string]: string } {
    return {
      mpk: 'Mpk',
      newLoginEmail: 'NewLoginEmail',
      pk: 'Pk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mpk: 'string',
      newLoginEmail: 'string',
      pk: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

