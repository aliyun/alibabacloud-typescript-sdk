// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWritingV2RequestSummarization extends $dara.Model {
  event?: string;
  message?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

