// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerNoteEditRequest extends $dara.Model {
  /**
   * @remarks
   * The contact information.
   * 
   * @example
   * 13833333333
   */
  contactInformation?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * John Smith
   */
  contactName?: string;
  /**
   * @remarks
   * The content of the note.
   * 
   * @example
   * Routine customer visit to discuss the agent development plan for the customer
   */
  noteContent?: string;
  /**
   * @remarks
   * The ID of the note. This parameter is required.
   * 
   * @example
   * 1629862
   */
  noteId?: number;
  /**
   * @remarks
   * The time when the contact was made. The value is a timestamp in milliseconds.
   * 
   * @example
   * 1784266662000
   */
  touchDate?: number;
  static names(): { [key: string]: string } {
    return {
      contactInformation: 'ContactInformation',
      contactName: 'ContactName',
      noteContent: 'NoteContent',
      noteId: 'NoteId',
      touchDate: 'TouchDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactInformation: 'string',
      contactName: 'string',
      noteContent: 'string',
      noteId: 'number',
      touchDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

