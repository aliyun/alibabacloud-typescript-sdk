// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeletePlaylistItemsRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The ID of the playlist. If you add items to the playlist by calling the [AddPlaylistItems](https://help.aliyun.com/document_detail/2848078.html) operation, you can obtain this ID from the ProgramId parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  programId?: string;
  /**
   * @remarks
   * A list of playlist item IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["c09f3d63-eacf-4fbf-bd48-a07a6ba7****","c10f3d63-eacf-4fbf-bd48-a07a6ba7****"]
   */
  programItemIds?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      programId: 'ProgramId',
      programItemIds: 'ProgramItemIds',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      programId: 'string',
      programItemIds: 'string',
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

