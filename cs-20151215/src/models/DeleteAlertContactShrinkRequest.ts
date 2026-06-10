// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertContactShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The alert contact IDs to delete.
   * 
   * This parameter is required.
   */
  contactIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contactIdsShrink: 'contact_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

