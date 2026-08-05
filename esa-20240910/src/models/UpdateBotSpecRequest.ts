// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBotSpecRequest extends $dara.Model {
  /**
   * @remarks
   * The bot instance specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * enterprise_bot
   */
  botInstanceLevel?: string;
  /**
   * @remarks
   * The bot instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * esa-bot-9tuv*********
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      botInstanceLevel: 'BotInstanceLevel',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botInstanceLevel: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

