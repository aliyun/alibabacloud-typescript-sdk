// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMessageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the message.
   * 
   * This parameter is required.
   * 
   * @example
   * 1008030xxx3003
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

