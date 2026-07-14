// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranscriptionResultChanged extends $dara.Model {
  messageId?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      messageId: 'messageId',
      content: 'content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      content: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

