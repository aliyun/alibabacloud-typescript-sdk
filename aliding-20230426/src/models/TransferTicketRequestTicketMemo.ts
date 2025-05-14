// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TransferTicketRequestTicketMemoAttachments } from "./TransferTicketRequestTicketMemoAttachments";


export class TransferTicketRequestTicketMemo extends $dara.Model {
  attachments?: TransferTicketRequestTicketMemoAttachments[];
  memo?: string;
  static names(): { [key: string]: string } {
    return {
      attachments: 'Attachments',
      memo: 'Memo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachments: { 'type': 'array', 'itemType': TransferTicketRequestTicketMemoAttachments },
      memo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attachments)) {
      $dara.Model.validateArray(this.attachments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

