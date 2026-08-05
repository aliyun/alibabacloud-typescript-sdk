// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlaylistItemsRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The ID of the playlist. You can obtain the ID from the ProgramId parameter in the response of the [AddPlaylistItems](https://help.aliyun.com/document_detail/2848078.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  programId?: string;
  /**
   * @remarks
   * The IDs of the playlist items. Separate multiple IDs with commas (,). If you specify this parameter, only the information about the specified items is returned. If you leave this parameter empty, the information about all items in the playlist is returned.
   * 
   * @example
   * c10f3d63-eacf-4fbf-bd48-a07a6ba7****,c09f3d63-eacf-4fbf-bd48-a07a6ba7****
   */
  programItemIds?: string;
  /**
   * @remarks
   * The ID of the region.
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

