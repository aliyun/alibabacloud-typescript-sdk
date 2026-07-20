// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CustomerNoteListDetailRequest extends $dara.Model {
  noteId?: number;
  static names(): { [key: string]: string } {
    return {
      noteId: 'NoteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

