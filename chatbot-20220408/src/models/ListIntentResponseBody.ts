// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIntentResponseBodyIntentsSlotInfos extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the slot is an array.
   * 
   * @example
   * false
   */
  array?: boolean;
  /**
   * @remarks
   * Indicates whether the slot is sensitive.
   * 
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @remarks
   * Indicates whether the slot is collected interactively.
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
   * Weather
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
   * Weather
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
   * The alias of the intent.
   * 
   * @example
   * CheckWeatherIntent
   */
  aliasName?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * The unique identifier of the creator.
   * 
   * @example
   * 123231
   */
  createUserId?: string;
  /**
   * @remarks
   * The name of the creator.
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
   * CheckWeatherIntent
   */
  intentName?: string;
  /**
   * @remarks
   * The modification time in UTC.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The unique identifier of the user who last modified the intent.
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
   * The slot information associated with the intent.
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
   * The list of intents.
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
   * 23dsfa34r2s2s2sd12
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

