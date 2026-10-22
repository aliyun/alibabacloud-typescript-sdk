// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserSayResponseBodyUserSaysSlotInfos extends $dara.Model {
  /**
   * @remarks
   * The end index of the slot in the intent utterance (exclusive).
   * 
   * @example
   * 4
   */
  endIndex?: number;
  /**
   * @remarks
   * The intent slot ID.
   * 
   * @example
   * 3456sdfg3tu
   */
  slotId?: string;
  /**
   * @remarks
   * The start index of the slot in the intent utterance.
   * 
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
  /**
   * @remarks
   * The utterance content.
   * 
   * @example
   * Have you taken a COVID test
   */
  content?: string;
  /**
   * @remarks
   * The time when the utterance was created, in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * @example
   * 235564564
   */
  intentId?: number;
  /**
   * @remarks
   * The time when the utterance was last modified, in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The associated slot information.
   */
  slotInfos?: ListUserSayResponseBodyUserSaysSlotInfos[];
  /**
   * @remarks
   * The utterance ID.
   * 
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
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * fs1fg4512v43572v23
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of utterances.
   */
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

