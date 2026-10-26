// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RespondAgentConversationActionRequest extends $dara.Model {
  /**
   * @example
   * {"请选择实例地域":"华东 1（杭州）"}
   */
  answers?: { [key: string]: string };
  /**
   * @example
   * allow
   */
  decision?: string;
  /**
   * @example
   * 允许执行只读查询
   */
  note?: string;
  static names(): { [key: string]: string } {
    return {
      answers: 'answers',
      decision: 'decision',
      note: 'note',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      decision: 'string',
      note: 'string',
    };
  }

  validate() {
    if(this.answers) {
      $dara.Model.validateMap(this.answers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

