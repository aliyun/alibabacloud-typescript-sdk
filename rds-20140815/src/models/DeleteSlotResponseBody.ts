// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSlotResponseBody extends $dara.Model {
  requestId?: string;
  slotName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      slotName: 'SlotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      slotName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

