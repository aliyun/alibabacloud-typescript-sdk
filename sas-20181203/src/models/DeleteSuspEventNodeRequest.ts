// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSuspEventNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the description.
   * 
   * > You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to obtain the ID of the description by using the EventNotes field.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
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

