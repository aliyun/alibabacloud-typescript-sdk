// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResultCountRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The start time, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1739841750000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1739843750000
   */
  endTime?: number;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      beginTime: 'beginTime',
      endTime: 'endTime',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      beginTime: 'number',
      endTime: 'number',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

