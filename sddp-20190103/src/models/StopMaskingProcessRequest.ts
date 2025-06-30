// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopMaskingProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the de-identification task. You can query the task ID by calling the [DescribeDataMaskingTasks](~~DescribeDataMaskingTasks~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 3
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh_cn**: Simplified Chinese (default)
   * *   **en_us**: English
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

