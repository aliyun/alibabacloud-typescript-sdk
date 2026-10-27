// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContactGroupRequest extends $dara.Model {
  /**
   * @example
   * test
   */
  contactGroupId?: string;
  contacts?: string[];
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * default-cms-5884500827389836-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      contactGroupId: 'contactGroupId',
      contacts: 'contacts',
      name: 'name',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroupId: 'string',
      contacts: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contacts)) {
      $dara.Model.validateArray(this.contacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

