// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SentenceEnd extends $dara.Model {
  data?: number[];
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      messageId: 'messageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      messageId: 'string',
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

