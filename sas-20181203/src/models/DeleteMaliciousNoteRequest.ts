// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMaliciousNoteRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the remarks.
   * 
   * >  You can call the [ListAgentlessMaliciousFiles](~~ListAgentlessMaliciousFiles~~) operation to obtain the ID from the NoteId parameter.
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

