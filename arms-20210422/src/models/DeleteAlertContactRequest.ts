// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertContactRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  contactId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

