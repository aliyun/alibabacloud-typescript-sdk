// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact group.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  contactGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'ContactGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

