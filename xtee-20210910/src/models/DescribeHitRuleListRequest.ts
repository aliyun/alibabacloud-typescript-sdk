// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHitRuleListRequest extends $dara.Model {
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
   * @example
   * 1737101348000
   */
  beginTime?: number;
  /**
   * @remarks
   * The end time, in milliseconds (ms).
   * 
   * @example
   * 1752027960000
   */
  endTime?: number;
  /**
   * @remarks
   * The event codes. Separate multiple event codes with commas (,).
   * 
   * @example
   * de_ahqhsw7665,de_ahqhsw7622
   */
  eventCodes?: string;
  /**
   * @remarks
   * The event type.
   * 
   * @example
   * MAIN
   */
  eventType?: string;
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
      eventCodes: 'eventCodes',
      eventType: 'eventType',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      beginTime: 'number',
      endTime: 'number',
      eventCodes: 'string',
      eventType: 'string',
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

