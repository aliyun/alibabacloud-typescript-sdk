// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUserAccessTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The key of the business space. If you do not specify this parameter, the default business space is accessed. You can obtain the key value on the business management page of the primary account.
   * 
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  email?: string;
  /**
   * @remarks
   * Reserved parameter. You do not need to specify this parameter.
   * 
   * @example
   * 1000
   */
  expireTime?: number;
  /**
   * @remarks
   * The additional information in JSON string format.
   * 
   * @example
   * {
   *     "xx": 123,
   *     "yy": 22332,
   *     "customerNameCard": [
   *         {
   *             "key": "Name",
   *             "value": "John"
   *         },
   *         {
   *             "key": "Level",
   *             "value": "v2"
   *         },
   *         {
   *             "key": "Contact",
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
   * The nickname of the visitor.
   * 
   * This parameter is required.
   * 
   * @example
   * John
   */
  nick?: string;
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

