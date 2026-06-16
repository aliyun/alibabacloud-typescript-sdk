// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSubTaskResultRequest extends $dara.Model {
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values: zh: Chinese. en: English. Default value: en.
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
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'RegId',
      subTaskId: 'SubTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      subTaskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

