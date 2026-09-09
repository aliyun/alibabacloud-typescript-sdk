// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSuspEventNodeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the note.
   * >Call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to obtain this parameter from the EventNotes field.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  noteId?: number;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member account in the resource directory.
   * >Call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain this parameter.
   */
  resourceDirectoryAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      noteId: 'NoteId',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      noteId: 'number',
      resourceDirectoryAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

