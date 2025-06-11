// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatappEmbedSignUpRequest extends $dara.Model {
  /**
   * @remarks
   * The InputToken returned after the embedded signup flow is complete.
   * 
   * This parameter is required.
   * 
   * @example
   * wlelkelwidilwloe-ewlwols0lwsllsld
   */
  inputToken?: string;
  static names(): { [key: string]: string } {
    return {
      inputToken: 'InputToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

