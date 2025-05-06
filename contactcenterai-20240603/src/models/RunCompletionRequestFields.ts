// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCompletionRequestFieldsEnumValues } from "./RunCompletionRequestFieldsEnumValues";


export class RunCompletionRequestFields extends $dara.Model {
  /**
   * @example
   * phoneNumber
   */
  code?: string;
  desc?: string;
  enumValues?: RunCompletionRequestFieldsEnumValues[];
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      desc: 'Desc',
      enumValues: 'EnumValues',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      desc: 'string',
      enumValues: { 'type': 'array', 'itemType': RunCompletionRequestFieldsEnumValues },
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

