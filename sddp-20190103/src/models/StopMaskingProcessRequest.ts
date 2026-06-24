// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopMaskingProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the data masking task. You can obtain the ID of a data masking task from the return value of the [DescribeDataMaskingTasks](~~DescribeDataMaskingTasks~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh_cn**: Chinese (Simplified). This is the default value.
   * 
   * - **en_us**: English (US).
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

