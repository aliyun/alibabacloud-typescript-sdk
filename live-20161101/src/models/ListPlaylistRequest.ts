// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlaylistRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the episode list. If you set this parameter, only the information about the specified episode lists is returned. If you do not set this parameter, the information about all episode lists that belong to the account is returned. If the episode list was created by calling the [AddPlaylistItems](https://help.aliyun.com/document_detail/2848078.html) operation, check the value of the response parameter ProgramId to obtain the ID.
   * 
   * @example
   * c09f3d63-eacf-4fbf-bd48-a07a6ba7****
   */
  programId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      page: 'Page',
      pageSize: 'PageSize',
      programId: 'ProgramId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      page: 'number',
      pageSize: 'number',
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

