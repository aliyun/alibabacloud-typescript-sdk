// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePlaylistItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the episode list. You can use the ID as a request parameter in the API operation that is used to query the episodes in the episode list, edit the episode list, delete the episode list, query the information about the episode list, or stop the episode list.
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

