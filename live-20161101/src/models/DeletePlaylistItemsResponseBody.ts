// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePlaylistItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the playlist. You can use this ID as a request parameter to query playlist items, edit a playlist, delete a playlist, start a playlist, or stop a playlist.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  programId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5c6a2a0d-f228-4a64-af62-20e91b96****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      programId: 'ProgramId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      programId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

