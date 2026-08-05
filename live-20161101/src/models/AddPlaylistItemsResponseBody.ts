// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPlaylistItemsResponseBodyItemsFailedItems extends $dara.Model {
  /**
   * @remarks
   * The playlist item ID.
   * 
   * @example
   * c09f3d63-eacf-4fbf-bd48-a07a6ba7****
   */
  itemId?: string;
  /**
   * @remarks
   * The playlist item name.
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

export class AddPlaylistItemsResponseBodyItemsSuccessItems extends $dara.Model {
  /**
   * @remarks
   * The playlist item ID.
   * 
   * @example
   * c09f3d63-eacf-4fbf-bd48-a07a6ba7****
   */
  itemId?: string;
  /**
   * @remarks
   * The playlist item name.
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

export class AddPlaylistItemsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of playlist items that failed to be added.
   */
  failedItems?: AddPlaylistItemsResponseBodyItemsFailedItems[];
  /**
   * @remarks
   * The list of playlist items that were successfully added.
   */
  successItems?: AddPlaylistItemsResponseBodyItemsSuccessItems[];
  static names(): { [key: string]: string } {
    return {
      failedItems: 'FailedItems',
      successItems: 'SuccessItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedItems: { 'type': 'array', 'itemType': AddPlaylistItemsResponseBodyItemsFailedItems },
      successItems: { 'type': 'array', 'itemType': AddPlaylistItemsResponseBodyItemsSuccessItems },
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

export class AddPlaylistItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of added playlist items.
   */
  items?: AddPlaylistItemsResponseBodyItems;
  /**
   * @remarks
   * The playlist ID. This value can be used as a request parameter for deleting playlist items, querying playlist items, editing playlists, deleting playlists, querying playlists, starting playlists, and stopping playlists.
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
      items: 'Items',
      programId: 'ProgramId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: AddPlaylistItemsResponseBodyItems,
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

