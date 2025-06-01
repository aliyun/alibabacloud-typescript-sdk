// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateUserGroupRequestAttributes } from "./CreateUserGroupRequestAttributes";


export class CreateUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attributes?: CreateUserGroupRequestAttributes[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_group_name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': CreateUserGroupRequestAttributes },
      description: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

