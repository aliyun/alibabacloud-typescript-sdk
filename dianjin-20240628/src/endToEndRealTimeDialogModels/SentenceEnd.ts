// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SentenceEnd extends $dara.Model {
  messageId?: string;
  data?: number[];
  static names(): { [key: string]: string } {
    return {
      messageId: 'messageId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'string',
      data: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

