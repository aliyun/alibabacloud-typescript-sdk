// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlaylistItemsResponseBodyProgramItems extends $dara.Model {
  /**
   * @remarks
   * The orchestration index.
   * 
   * @example
   * 1
   */
  index?: number;
  /**
   * @remarks
   * The ID of the playlist. You can use this ID as a request parameter when you edit, delete, query, start, or stop the playlist.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  programId?: string;
  /**
   * @remarks
   * The ID of the playlist item.
   * 
   * @example
   * c10f3d63-eacf-4fbf-bd48-a07a6ba7****
   */
  programItemId?: string;
  /**
   * @remarks
   * The name of the playlist item.
   * 
   * @example
   * playlistItem1
   */
  programItemName?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * vod
   */
  resourceType?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * asdfasdf8as9df8sa9df89****
   */
  resourceValue?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      programId: 'ProgramId',
      programItemId: 'ProgramItemId',
      programItemName: 'ProgramItemName',
      resourceType: 'ResourceType',
      resourceValue: 'ResourceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      programId: 'string',
      programItemId: 'string',
      programItemName: 'string',
      resourceType: 'string',
      resourceValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlaylistItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of playlist items.
   */
  programItems?: ListPlaylistItemsResponseBodyProgramItems[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5c6a2a0d-f228-4a64-af62-20e91b9****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of playlist items.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      programItems: 'ProgramItems',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      programItems: { 'type': 'array', 'itemType': ListPlaylistItemsResponseBodyProgramItems },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.programItems)) {
      $dara.Model.validateArray(this.programItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

