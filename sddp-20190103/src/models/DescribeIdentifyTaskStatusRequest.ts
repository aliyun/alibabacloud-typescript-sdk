// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdentifyTaskStatusRequest extends $dara.Model {
  /**
   * @remarks
   * Task ID, obtained from the ID field in the response after calling CreateScanTask or ScanOssObjectV1.
   * 
   * This parameter is required.
   * 
   * @example
   * 268
   */
  id?: number;
  /**
   * @remarks
   * Language type for request and response messages, default is **zh_cn**. Values:
   * - **zh_cn**: Chinese (Simplified)
   * - **en_us**: English (United States)
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

