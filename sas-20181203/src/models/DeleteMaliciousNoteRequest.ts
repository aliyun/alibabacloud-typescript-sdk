// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaliciousNoteRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the note record.
   * >Call the [ListAgentlessMaliciousFiles](~~ListAgentlessMaliciousFiles~~) operation to obtain this parameter from the NoteId field.
   * 
   * @example
   * 1
   */
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

