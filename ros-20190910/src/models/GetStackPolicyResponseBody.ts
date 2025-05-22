// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6F
   */
  requestId?: string;
  /**
   * @remarks
   * The structure that contains the stack policy body. The stack policy body must be 1 to 16,384 bytes in length.
   * 
   * @example
   * {"Statement": [{"Action": "Update:*", "Effect": "Allow","Principal": "*","Resource": "*"}]}
   */
  stackPolicyBody?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stackPolicyBody: 'StackPolicyBody',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stackPolicyBody: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.stackPolicyBody) {
      $dara.Model.validateMap(this.stackPolicyBody);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

