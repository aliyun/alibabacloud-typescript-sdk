// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUploadPolicyRequest extends $dara.Model {
  /**
   * @example
   * Token
   */
  jwtToken?: string;
  /**
   * @example
   * INPUT_CHAT_BACKGROUND_PIC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'jwtToken',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

