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
   * 张三
   */
  contactName?: string;
  /**
   * @remarks
   * The content of the note.
   * 
   * @example
   * 日常拜访客户，讨论客户agent建设方案
   */
  noteContent?: string;
  /**
   * @remarks
   * The note ID. This parameter is required.
   * 
   * @example
   * 1629862
   */
  noteId?: number;
  /**
   * @remarks
   * The touch date. The value is a UNIX timestamp in milliseconds.
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

