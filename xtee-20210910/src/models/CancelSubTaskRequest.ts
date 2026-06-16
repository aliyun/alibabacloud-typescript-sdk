// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelSubTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and received messages. The default value is **zh**. Valid values:  
   * - **zh**: Chinese  
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Area encoding.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Subtask ID.
   * 
   * @example
   * 2
   */
  subTaskId?: number;
  /**
   * @remarks
   * Scenario.
   * 
   * @example
   * FINANCE
   */
  tab?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'RegId',
      subTaskId: 'SubTaskId',
      tab: 'Tab',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      subTaskId: 'number',
      tab: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

