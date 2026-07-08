// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchAppConversationRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the agent task.
   * 
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @remarks
   * The bot ID.
   * 
   * @example
   * Zero2
   */
  botId?: string;
  /**
   * @remarks
   * The type of the agent task.
   * 
   * @example
   * IMAGE_LOGO
   */
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      botId: 'BotId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      botId: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

