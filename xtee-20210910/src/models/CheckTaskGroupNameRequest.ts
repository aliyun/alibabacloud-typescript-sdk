// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTaskGroupNameRequest extends $dara.Model {
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values: zh: Chinese, en: English. Default value: en.
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
   * Task group name.
   * 
   * @example
   * GroupNameTest
   */
  taskGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      regId: 'RegId',
      taskGroupName: 'TaskGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      regId: 'string',
      taskGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

