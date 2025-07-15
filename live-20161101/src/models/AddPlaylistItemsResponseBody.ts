// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPlaylistItemsResponseBodyItemsFailedItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the episode.
   * 
   * @example
   * c09f3d63-eacf-4fbf-bd48-a07a6ba7****
   */
  itemId?: string;
  /**
   * @remarks
   * The name of the episode.
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
   * The ID of the episode.
   * 
   * @example
   * c09f3d63-eacf-4fbf-bd48-a07a6ba7****
   */
  itemId?: string;
  /**
   * @remarks
   * The name of the episode.
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
   * The episodes that failed to be added.
   */
  failedItems?: AddPlaylistItemsResponseBodyItemsFailedItems[];
  /**
   * @remarks
   * The episodes that were added.
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
   * The information about the episodes.
   */
  items?: AddPlaylistItemsResponseBodyItems;
  /**
   * @remarks
   * The ID of the episode list. You can use the ID as a request parameter in the API operation that is used to remove episodes, query episodes, edit an episode list, delete an episode list, query the information about an episode list, start playing an episode list, or stop playing an episode list.
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

