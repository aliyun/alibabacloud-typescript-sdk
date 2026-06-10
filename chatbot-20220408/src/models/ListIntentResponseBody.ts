// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentResponseBodyIntentsSlotInfos extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the slot can accept multiple values.
   * 
   * @example
   * false
   */
  array?: boolean;
  /**
   * @remarks
   * Indicates whether the slot contains sensitive data.
   * 
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @remarks
   * Indicates whether the slot value is collected interactively.
   * 
   * @example
   * false
   */
  interactive?: boolean;
  /**
   * @remarks
   * The slot name.
   * 
   * @example
   * 天气
   */
  name?: string;
  /**
   * @remarks
   * The slot ID.
   * 
   * @example
   * 12134223
   */
  slotId?: string;
  /**
   * @remarks
   * The slot value (entity name).
   * 
   * @example
   * 天气
   */
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
  /**
   * @remarks
   * The intent alias.
   * 
   * @example
   * 查天气意图
   */
  aliasName?: string;
  /**
   * @remarks
   * The time at which the intent was created, in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the user who created the intent.
   * 
   * @example
   * 123231
   */
  createUserId?: string;
  /**
   * @remarks
   * The name of the user who created the intent.
   * 
   * @example
   * test
   */
  createUserName?: string;
  /**
   * @remarks
   * The intent ID.
   * 
   * @example
   * 234234234234
   */
  intentId?: number;
  /**
   * @remarks
   * The intent name.
   * 
   * @example
   * 查天气意图
   */
  intentName?: string;
  /**
   * @remarks
   * The time at which the intent was last modified, in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The ID of the user who last modified the intent.
   * 
   * @example
   * 123231
   */
  modifyUserId?: string;
  /**
   * @remarks
   * The name of the user who last modified the intent.
   * 
   * @example
   * test
   */
  modifyUserName?: string;
  /**
   * @remarks
   * A list of slots associated with the intent.
   */
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
  /**
   * @remarks
   * A list of intents.
   */
  intents?: ListIntentResponseBodyIntents[];
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
   * The number of intents per page. Default value: 10.
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
   * 23dsfa34r2s2s2sd12
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of intents.
   * 
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

