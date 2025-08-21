// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserSayResponseBodyUserSaysSlotInfos extends $dara.Model {
  /**
   * @example
   * 4
   */
  endIndex?: number;
  /**
   * @example
   * 3456sdfg3tu
   */
  slotId?: string;
  /**
   * @example
   * 2
   */
  startIndex?: number;
  static names(): { [key: string]: string } {
    return {
      endIndex: 'EndIndex',
      slotId: 'SlotId',
      startIndex: 'StartIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIndex: 'number',
      slotId: 'string',
      startIndex: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSayResponseBodyUserSays extends $dara.Model {
  content?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 235564564
   */
  intentId?: number;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  slotInfos?: ListUserSayResponseBodyUserSaysSlotInfos[];
  /**
   * @example
   * 3453452138
   */
  userSayId?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      createTime: 'CreateTime',
      intentId: 'IntentId',
      modifyTime: 'ModifyTime',
      slotInfos: 'SlotInfos',
      userSayId: 'UserSayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      intentId: 'number',
      modifyTime: 'string',
      slotInfos: { 'type': 'array', 'itemType': ListUserSayResponseBodyUserSaysSlotInfos },
      userSayId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.slotInfos)) {
      $dara.Model.validateArray(this.slotInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserSayResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * fs1fg4512v43572v23
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  userSays?: ListUserSayResponseBodyUserSays[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userSays: 'UserSays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      userSays: { 'type': 'array', 'itemType': ListUserSayResponseBodyUserSays },
    };
  }

  validate() {
    if(Array.isArray(this.userSays)) {
      $dara.Model.validateArray(this.userSays);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

