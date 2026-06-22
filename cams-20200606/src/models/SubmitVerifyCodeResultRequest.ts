// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitVerifyCodeResultRequest extends $dara.Model {
  /**
   * @remarks
   * The message ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 202605012020***
   */
  messageId?: string;
  /**
   * @remarks
   * The verification result.
   * 
   * This parameter is required.
   * 
   * @example
   * TRUE
   */
  result?: boolean;
  /**
   * @remarks
   * The recipient number.
   * 
   * @example
   * 86138000***
   */
  to?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      result: 'Result',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      result: 'boolean',
      to: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

