// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHighlightInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-04-10T02:43:34Z
   */
  endTime?: string;
  /**
   * @remarks
   * The access language. Valid values:
   * 
   * *   **en-US** (default): English.
   * *   **zh-CN**: Chinese.
   * 
   * This parameter is required.
   * 
   * @example
   * en_US
   */
  lang?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2023-02-19T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The ID of the trace.
   * 
   * This parameter is required.
   * 
   * @example
   * 800e749616838513398137319e
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      lang: 'Lang',
      startTime: 'StartTime',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      lang: 'string',
      startTime: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

