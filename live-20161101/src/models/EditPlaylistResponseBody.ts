// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditPlaylistResponseBodyItemsFailedItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the playlist item.
   * 
   * @example
   * c09f3d63-eacf-4fbf-bd48-a07a6ba7****
   */
  itemId?: string;
  /**
   * @remarks
   * The name of the playlist item.
   * 
   * @example
   * item2
   */
  itemName?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      itemName: 'ItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPlaylistResponseBodyItemsSuccessItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the playlist item.
   * 
   * @example
   * c09f3d63-eacf-4fbf-bd48-a07a6ba7****
   */
  itemId?: string;
  /**
   * @remarks
   * The name of the playlist item.
   * 
   * @example
   * item1
   */
  itemName?: string;
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
      itemName: 'ItemName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: 'string',
      itemName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPlaylistResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of playlist items that failed to be added.
   */
  failedItems?: EditPlaylistResponseBodyItemsFailedItems[];
  /**
   * @remarks
   * The list of playlist items that were successfully added.
   */
  successItems?: EditPlaylistResponseBodyItemsSuccessItems[];
  static names(): { [key: string]: string } {
    return {
      failedItems: 'FailedItems',
      successItems: 'SuccessItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedItems: { 'type': 'array', 'itemType': EditPlaylistResponseBodyItemsFailedItems },
      successItems: { 'type': 'array', 'itemType': EditPlaylistResponseBodyItemsSuccessItems },
    };
  }

  validate() {
    if(Array.isArray(this.failedItems)) {
      $dara.Model.validateArray(this.failedItems);
    }
    if(Array.isArray(this.successItems)) {
      $dara.Model.validateArray(this.successItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditPlaylistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio. Use this ID as a request parameter to add a callback or a virtual studio layout.
   * 
   * @example
   * 0e94d1f4-1a65-445c-9dcf-de8b3b8d****
   */
  casterId?: string;
  /**
   * @remarks
   * The list of added playlist items.
   */
  items?: EditPlaylistResponseBodyItems;
  /**
   * @remarks
   * The playlist ID. Use this ID as a request parameter to delete, query, start, or stop the playlist.
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
      casterId: 'CasterId',
      items: 'Items',
      programId: 'ProgramId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      items: EditPlaylistResponseBodyItems,
      programId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

