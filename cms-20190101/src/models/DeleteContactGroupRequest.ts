// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContactGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact group.
   * 
   * This parameter is required.
   * 
   * @example
   * contact_group_2019_templatedfkXQ
   */
  contactGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupName: 'ContactGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

