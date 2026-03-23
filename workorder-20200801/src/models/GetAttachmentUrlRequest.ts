// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttachmentUrlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  attachName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  noteId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      attachName: 'AttachName',
      noteId: 'NoteId',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachName: 'string',
      noteId: 'string',
      ticketId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

