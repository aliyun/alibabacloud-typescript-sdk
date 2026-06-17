// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClearAuthInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp when the authorization expires.
   * 
   * @example
   * 1755964800
   */
  endTime?: number;
  /**
   * @remarks
   * The number of remaining clears.
   * 
   * @example
   * 20
   */
  leftTimes?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8DDEE254-5639-5548-82D1-AAAC7347****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      leftTimes: 'LeftTimes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      leftTimes: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

