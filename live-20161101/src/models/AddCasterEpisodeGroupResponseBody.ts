// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterEpisodeGroupResponseBodyItemIds extends $dara.Model {
  itemId?: string[];
  static names(): { [key: string]: string } {
    return {
      itemId: 'ItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.itemId)) {
      $dara.Model.validateArray(this.itemId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCasterEpisodeGroupResponseBody extends $dara.Model {
  itemIds?: AddCasterEpisodeGroupResponseBodyItemIds;
  /**
   * @remarks
   * The program list ID. This ID can be used as a request parameter for deleting a production studio program list, creating or adding program list items, deleting program list items, querying program list items, editing a program list, deleting a program list, querying a program list, starting a program list, or stopping a program list.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68X****
   */
  programId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      itemIds: 'ItemIds',
      programId: 'ProgramId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemIds: AddCasterEpisodeGroupResponseBodyItemIds,
      programId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.itemIds && typeof (this.itemIds as any).validate === 'function') {
      (this.itemIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

