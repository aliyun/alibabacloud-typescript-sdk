// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScoreSectionRatioLineChartRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for sending and receiving messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The start time, accurate to milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1751249559000
   */
  beginTime?: string;
  /**
   * @remarks
   * Bypass event codes.
   * 
   * @example
   * de_amnhke2482
   */
  byPassEventCodes?: string;
  /**
   * @remarks
   * The end time, accurate to milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1748491200000
   */
  endTime?: string;
  /**
   * @remarks
   * Main event codes.
   * 
   * @example
   * de_avcqzc3714
   */
  mainEventCodes?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Shunt event codes.
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
      beginTime: 'string',
      byPassEventCodes: 'string',
      endTime: 'string',
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

