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
  itemIds?: AddCasterEpisodeGroupContentResponseBodyItemIds;
  /**
   * @remarks
   * The program ID. You can use this ID as a request parameter when you create, add, delete, or query program items. You can also use this ID to edit, delete, query, start, or stop a program.
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
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
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

