// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecommendEventRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * de_ahqido8038
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 用户昵称文本审核检测结果
   */
  eventName?: string;
  /**
   * @remarks
   * Strategy ID.
   * 
   * @example
   * [\\"100234\\",\\"100235\\"]
   */
  recommendRuleIdsStr?: string;
  /**
   * @remarks
   * Region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Task ID.
   * 
   * @example
   * 6770764
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      eventCode: 'eventCode',
      eventName: 'eventName',
      recommendRuleIdsStr: 'recommendRuleIdsStr',
      regId: 'regId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      eventCode: 'string',
      eventName: 'string',
      recommendRuleIdsStr: 'string',
      regId: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

