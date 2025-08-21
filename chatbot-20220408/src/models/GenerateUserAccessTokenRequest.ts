// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateUserAccessTokenRequest extends $dara.Model {
  /**
   * @example
   * ac627989eb4f8a98ed05fd098bbae5_p_beebot_public
   */
  agentKey?: string;
  /**
   * @example
   * a***bcx@gmail.com
   */
  email?: string;
  /**
   * @example
   * 1000
   */
  expireTime?: number;
  extraInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 8882022040000000171
   */
  foreignId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nick?: string;
  /**
   * @example
   * 1381111****
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

