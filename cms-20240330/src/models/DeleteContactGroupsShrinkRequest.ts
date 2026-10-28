// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactGroupsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the contact groups.
   * 
   * This parameter is required.
   */
  contactGroupIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupIdsShrink: 'contactGroupIds',
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

