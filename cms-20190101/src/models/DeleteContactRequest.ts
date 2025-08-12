// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * This parameter is required.
   * 
   * @example
   * test-01
   */
  contactName?: string;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

