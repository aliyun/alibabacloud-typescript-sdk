// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateForwardEntryResponseBody extends $dara.Model {
  forwardEntryId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardEntryId: 'ForwardEntryId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardEntryId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

