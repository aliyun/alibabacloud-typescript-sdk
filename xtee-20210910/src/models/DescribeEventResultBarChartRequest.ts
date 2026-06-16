// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEventResultBarChartRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and responses. Default value: **zh**. Valid values:
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
   * 1737101348000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time, accurate to milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1744337383000
   */
  endTime?: number;
  /**
   * @remarks
   * Event codes.
   * 
   * @example
   * de_ahqhsw7665,de_ahqhsw7622
   */
  eventCodes?: string;
  /**
   * @remarks
   * Region ID.
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
      eventCodes: 'eventCodes',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      beginTime: 'number',
      endTime: 'number',
      eventCodes: 'string',
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

