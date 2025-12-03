// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRecoverableTimeRangeResponseBody extends $dara.Model {
  /**
   * @example
   * A1A51D18-96DC-465C-9F1B-47180CA22524
   */
  requestId?: string;
  /**
   * @example
   * 2020-10-26T18:02:03Z
   */
  timeBegin?: string;
  /**
   * @example
   * 2020-11-05T01:20:31Z
   */
  timeEnd?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      timeBegin: 'TimeBegin',
      timeEnd: 'TimeEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      timeBegin: 'string',
      timeEnd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

