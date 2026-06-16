// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagsRatioLineChartRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
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
   * 1751249559000
   */
  beginTime?: number;
  /**
   * @remarks
   * The bypass event codes.
   * 
   * @example
   * de_amnhke2482
   */
  byPassEventCodes?: string;
  /**
   * @remarks
   * The end time, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1751595912000
   */
  endTime?: number;
  /**
   * @remarks
   * The main event codes.
   * 
   * @example
   * de_amnhke2482
   */
  mainEventCodes?: string;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The diversion event codes.
   * 
   * @example
   * de_amnhke2488
   */
  shuntEventCodes?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      beginTime: 'beginTime',
      byPassEventCodes: 'byPassEventCodes',
      endTime: 'endTime',
      mainEventCodes: 'mainEventCodes',
      regId: 'regId',
      shuntEventCodes: 'shuntEventCodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      beginTime: 'number',
      byPassEventCodes: 'string',
      endTime: 'number',
      mainEventCodes: 'string',
      regId: 'string',
      shuntEventCodes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

