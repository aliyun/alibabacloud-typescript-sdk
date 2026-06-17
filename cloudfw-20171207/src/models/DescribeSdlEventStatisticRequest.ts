// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlEventStatisticRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1732586712
   */
  endTime?: number;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1656750960
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      lang: 'Lang',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      lang: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

