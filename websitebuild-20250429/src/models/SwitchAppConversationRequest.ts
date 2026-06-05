// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchAppConversationRequest extends $dara.Model {
  /**
   * @example
   * WD20250814102215000001
   */
  bizId?: string;
  /**
   * @example
   * Zero2
   */
  botId?: string;
  /**
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

