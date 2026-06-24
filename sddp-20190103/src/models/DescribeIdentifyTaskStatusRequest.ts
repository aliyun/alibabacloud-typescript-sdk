// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdentifyTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task. Obtain this ID from the Id field in the response from calling the CreateScanTask or ScanOssObjectV1 operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 268
   */
  id?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh_cn**. Valid values:
   * 
   * - **zh_cn**: Simplified Chinese
   * 
   * - **en_us**: U.S. English
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

