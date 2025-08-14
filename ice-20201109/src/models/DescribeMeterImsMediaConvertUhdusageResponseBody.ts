// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterImsMediaConvertUHDUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The usage duration, in minutes.
   * 
   * @example
   * 308028
   */
  duration?: number;
  /**
   * @remarks
   * The transcoding specifications.
   * 
   * @example
   * SuperResolution.Standard.1080P
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

export class DescribeMeterImsMediaConvertUHDUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The usage statistics of IMS on UHD transcoding of MPS.
   */
  data?: DescribeMeterImsMediaConvertUHDUsageResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA98A0C-7870-15FE-B96F-8880BB600A2C
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
      data: { 'type': 'array', 'itemType': DescribeMeterImsMediaConvertUHDUsageResponseBodyData },
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

