// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TranscriptionResultChanged extends $dara.Model {
  content?: string;
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      messageId: 'messageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
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

