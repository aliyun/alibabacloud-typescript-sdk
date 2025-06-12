// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppendCasesRequestBody extends $dara.Model {
  /**
   * @example
   * agent@ccc-test
   */
  agentId?: string;
  /**
   * @example
   * 01012345678
   */
  caller?: string;
  customVariables?: string;
  /**
   * @example
   * 071*****801
   */
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
      agentId: 'AgentId',
      caller: 'Caller',
      customVariables: 'CustomVariables',
      maskedCallee: 'MaskedCallee',
      phoneNumber: 'PhoneNumber',
      referenceId: 'ReferenceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentId: 'string',
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

