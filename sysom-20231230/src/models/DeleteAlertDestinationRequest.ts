// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertDestinationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact.
   * 
   * @example
   * 1
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

