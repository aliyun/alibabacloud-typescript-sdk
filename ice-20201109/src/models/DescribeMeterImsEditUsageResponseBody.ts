// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterImsEditUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The usage duration, in minutes.
   * 
   * @example
   * 1.23
   */
  duration?: number;
  /**
   * @remarks
   * The video profile.
   * 
   * @example
   * 1080P
   */
  profile?: string;
  /**
   * @remarks
   * The beginning time of usage. The value is a 10-digit timestamp.
   * 
   * @example
   * 1656950400
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      profile: 'Profile',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      profile: 'string',
      time: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMeterImsEditUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The usage statistics of IMS on VOD editing.
   */
  data?: DescribeMeterImsEditUsageResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F3AE2C6-5CC6-5712-BAC5-5A735A157687
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeMeterImsEditUsageResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

