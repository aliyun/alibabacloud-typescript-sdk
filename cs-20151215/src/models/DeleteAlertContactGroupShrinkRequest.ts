// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertContactGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of alert contact group IDs.
   * 
   * This parameter is required.
   */
  contactGroupIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIdsShrink: 'contact_group_ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

