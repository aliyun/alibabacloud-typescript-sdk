// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentResponseBodyIntentsSlotInfos extends $dara.Model {
  /**
   * @example
   * false
   */
  array?: boolean;
  /**
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @example
   * false
   */
  interactive?: boolean;
  name?: string;
  /**
   * @example
   * 12134223
   */
  slotId?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      array: 'Array',
      encrypt: 'Encrypt',
      interactive: 'Interactive',
      name: 'Name',
      slotId: 'SlotId',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      array: 'boolean',
      encrypt: 'boolean',
      interactive: 'boolean',
      name: 'string',
      slotId: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIntentResponseBodyIntents extends $dara.Model {
  aliasName?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @example
   * 123231
   */
  createUserId?: string;
  /**
   * @example
   * test
   */
  createUserName?: string;
  /**
   * @example
   * 234234234234
   */
  intentId?: number;
  intentName?: string;
  /**
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @example
   * 123231
   */
  modifyUserId?: string;
  /**
   * @example
   * test
   */
  modifyUserName?: string;
  slotInfos?: ListIntentResponseBodyIntentsSlotInfos[];
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      createTime: 'CreateTime',
      createUserId: 'CreateUserId',
      createUserName: 'CreateUserName',
      intentId: 'IntentId',
      intentName: 'IntentName',
      modifyTime: 'ModifyTime',
      modifyUserId: 'ModifyUserId',
      modifyUserName: 'ModifyUserName',
      slotInfos: 'SlotInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      createTime: 'string',
      createUserId: 'string',
      createUserName: 'string',
      intentId: 'number',
      intentName: 'string',
      modifyTime: 'string',
      modifyUserId: 'string',
      modifyUserName: 'string',
      slotInfos: { 'type': 'array', 'itemType': ListIntentResponseBodyIntentsSlotInfos },
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

export class ListIntentResponseBody extends $dara.Model {
  intents?: ListIntentResponseBodyIntents[];
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
   * 23dsfa34r2s2s2sd12
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      intents: 'Intents',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      intents: { 'type': 'array', 'itemType': ListIntentResponseBodyIntents },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.intents)) {
      $dara.Model.validateArray(this.intents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

