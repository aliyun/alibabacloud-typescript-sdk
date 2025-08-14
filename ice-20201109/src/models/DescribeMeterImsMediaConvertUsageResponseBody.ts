// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterImsMediaConvertUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The usage duration, in minutes.
   * 
   * @example
   * 20
   */
  duration?: number;
  /**
   * @remarks
   * The transcoding specifications.
   * 
   * @example
   * H264.HD
   */
  specification?: string;
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
      specification: 'Specification',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      specification: 'string',
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

export class DescribeMeterImsMediaConvertUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The usage statistics of IMS on VOD transcoding.
   */
  data?: DescribeMeterImsMediaConvertUsageResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FBBB5210-2B78-58FB-A6FE-9DD887BB2C61
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
      data: { 'type': 'array', 'itemType': DescribeMeterImsMediaConvertUsageResponseBodyData },
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

