// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntentResponseBodySlotInfos extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the slot can contain an array of values.
   * 
   * @example
   * false
   */
  array?: boolean;
  /**
   * @remarks
   * Indicates whether the slot is configured to encrypt its value.
   * 
   * @example
   * false
   */
  encrypt?: boolean;
  /**
   * @remarks
   * Indicates whether interactive slot filling is enabled. Default value: false.
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
   * aa4d2a343a3ad4afad
   */
  slotId?: string;
  /**
   * @remarks
   * The value extracted for the slot.
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

export class DescribeIntentResponseBody extends $dara.Model {
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
   * The time when the intent was created, in UTC format.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  createTime?: string;
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 123231
   */
  createUserId?: string;
  /**
   * @remarks
   * The creator name.
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
   * 84243341
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
   * The time when the intent was last modified, in UTC format.
   * 
   * @example
   * 2021-08-12T16:00:01Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The modifier ID.
   * 
   * @example
   * 123231
   */
  modifyUserId?: string;
  /**
   * @remarks
   * The modifier name.
   * 
   * @example
   * test
   */
  modifyUserName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * a22afaf2adfasf2gr345fga45ada
   */
  requestId?: string;
  /**
   * @remarks
   * An array of objects that contain the slot information for the intent.
   */
  slotInfos?: DescribeIntentResponseBodySlotInfos[];
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
      requestId: 'RequestId',
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
      requestId: 'string',
      slotInfos: { 'type': 'array', 'itemType': DescribeIntentResponseBodySlotInfos },
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

