// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTaskRequestFieldsEnumValues } from "./CreateTaskRequestFieldsEnumValues";


export class CreateTaskRequestFields extends $dara.Model {
  /**
   * @example
   * phoneNumber
   */
  code?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  desc?: string;
  enumValues?: CreateTaskRequestFieldsEnumValues[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      desc: 'desc',
      enumValues: 'enumValues',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      enumValues: { 'type': 'array', 'itemType': CreateTaskRequestFieldsEnumValues },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enumValues)) {
      $dara.Model.validateArray(this.enumValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

