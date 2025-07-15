// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCasterEpisodeGroupContentResponseBodyItemIds extends $dara.Model {
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

export class AddCasterEpisodeGroupContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the episodes.
   */
  itemIds?: AddCasterEpisodeGroupContentResponseBodyItemIds;
  /**
   * @remarks
   * The ID of the episode list. You can use the ID as a request parameter in the API operation that is used to create or add episodes, remove episodes, query episodes, edit an episode list, delete an episode list, query the information about an episode list, start playing an episode list, or stop playing an episode list.
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
      itemIds: AddCasterEpisodeGroupContentResponseBodyItemIds,
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

