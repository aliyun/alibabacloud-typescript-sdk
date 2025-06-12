// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddCasesRequestCaseList extends $dara.Model {
  caller?: string;
  customVariables?: string;
  maskedCallee?: string;
  /**
   * @example
   * 188888****
   */
  phoneNumber?: string;
  /**
   * @example
   * 01
   */
  referenceId?: string;
  static names(): { [key: string]: string } {
    return {
      caller: 'Caller',
      customVariables: 'CustomVariables',
      maskedCallee: 'MaskedCallee',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caller: 'string',
      customVariables: 'string',
      maskedCallee: 'string',
      phoneNumber: 'string',
      referenceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

