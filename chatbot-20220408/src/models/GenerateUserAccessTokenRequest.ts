// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUserAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If you do not specify this parameter, the system accesses the default business space. You can obtain the key from the Business Management page of your main account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @remarks
   * The user\\"s email address.
   */
  email?: string;
  /**
   * @remarks
   * This parameter is reserved. You do not need to specify it.
   * 
   * @example
   * 1000
   */
  expireTime?: number;
  /**
   * @remarks
   * Additional information formatted as a JSON string.
   * 
   * @example
   * {
   *     "xx": 123,
   *     "yy": 22332,
   *     "customerNameCard": [
   *         {
   *             "key": "姓名",
   *             "value": "张三"
   *         },
   *         {
   *             "key": "等级",
   *             "value": "v2"
   *         },
   *         {
   *             "key": "联系方式",
   *             "value": "123"
   *         }
   *     ]
   * }
   */
  extraInfo?: string;
  /**
   * @remarks
   * The external user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 8882022040000000171
   */
  foreignId?: string;
  /**
   * @remarks
   * The visitor\\"s nickname.
   * 
   * This parameter is required.
   * 
   * @example
   * 张三
   */
  nick?: string;
  /**
   * @remarks
   * The user\\"s telephone number.
   */
  telephone?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      email: 'Email',
      expireTime: 'ExpireTime',
      extraInfo: 'ExtraInfo',
      foreignId: 'ForeignId',
      nick: 'Nick',
      telephone: 'Telephone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      email: 'string',
      expireTime: 'number',
      extraInfo: 'string',
      foreignId: 'string',
      nick: 'string',
      telephone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

