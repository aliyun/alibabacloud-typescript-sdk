// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCopilotHistoryResponseBodyData extends $dara.Model {
  content?: string;
  /**
   * @example
   * 2024-09-02 10:02:39
   */
  time?: string;
  /**
   * @example
   * user
   * copilot
   */
  user?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      time: 'time',
      user: 'user',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      time: 'string',
      user: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

