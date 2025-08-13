// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PocCreateTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Date format
   * 
   * @example
   * yyyyMMdd
   */
  dateFormat?: string;
  /**
   * @remarks
   * Set the language type for request and response messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
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
   * Task name.
   * 
   * @example
   * o32d1pktx4t
   */
  taskName?: string;
  /**
   * @remarks
   * Task token.
   * 
   * This parameter is required.
   * 
   * @example
   * 68ce949aff6be7f1201eb2f9095ac95f
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      dateFormat: 'DateFormat',
      lang: 'Lang',
      regId: 'RegId',
      taskName: 'TaskName',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateFormat: 'string',
      lang: 'string',
      regId: 'string',
      taskName: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

