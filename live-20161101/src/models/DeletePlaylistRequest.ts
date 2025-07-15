// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePlaylistRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The ID of the episode list. If the episode list was created by calling the [AddPlaylistItems](https://help.aliyun.com/document_detail/2848078.html) operation, check the value of the response parameter ProgramId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  programId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      programId: 'ProgramId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      programId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

