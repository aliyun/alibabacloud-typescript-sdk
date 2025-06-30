// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualTriggerMaskingProcessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the de-identification task.
   * 
   * The ID of the de-identification task is a string. You can call the DescribeDataMaskingTasks operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The language of the content within the request and response, default value zh_cn. Valid values:
   * 
   * *   **zh_cn**: Chinese
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

