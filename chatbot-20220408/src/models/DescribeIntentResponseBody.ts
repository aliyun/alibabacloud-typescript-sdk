// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIntentResponseBodySlotInfos extends $dara.Model {
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
   * aa4d2a343a3ad4afad
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

export class DescribeIntentResponseBody extends $dara.Model {
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
   * 84243341
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
  /**
   * @example
   * a22afaf2adfasf2gr345fga45ada
   */
  requestId?: string;
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

