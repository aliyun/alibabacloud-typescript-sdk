// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AnalyzeConversationRequestFieldsEnumValues } from "./AnalyzeConversationRequestFieldsEnumValues";


export class AnalyzeConversationRequestFields extends $dara.Model {
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
  enumValues?: AnalyzeConversationRequestFieldsEnumValues[];
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
      enumValues: { 'type': 'array', 'itemType': AnalyzeConversationRequestFieldsEnumValues },
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

