// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualTriggerMaskingProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the data masking task. The value is an integer.
   * 
   * > You can call the DescribeDataMaskingTasks operation to obtain the ID of the data masking task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: zh_cn. Valid values:
   * 
   * - **zh_cn**: Chinese
   * 
   * - **en_us**: English
   * 
   * @example
   * zh_cn
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

