// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TaskNameByUserIdRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Methylation_node_5_3
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'RegId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

