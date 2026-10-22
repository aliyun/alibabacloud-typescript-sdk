// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntentResponseBodySlotInfos extends $dara.Model {
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
   * Weather
   */
  name?: string;
  /**
   * @remarks
   * The unique identifier of the slot.
   * 
   * @example
   * aa4d2a343a3ad4afad
   */
  slotId?: string;
  /**
   * @remarks
   * The slot tagging result.
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

export class DescribeIntentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The intent alias.
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
   * 84243341
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
   * The request ID.
   * 
   * @example
   * a22afaf2adfasf2gr345fga45ada
   */
  requestId?: string;
  /**
   * @remarks
   * The slot information associated with the intent.
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

