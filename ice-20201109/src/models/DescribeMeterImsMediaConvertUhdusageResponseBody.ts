// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMeterImsMediaConvertUHDUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The duration. Unit: minutes.
   * 
   * @example
   * 308028
   */
  duration?: number;
  /**
   * @remarks
   * The transcoding specification.
   * 
   * @example
   * SuperResolution.Standard.1080P
   */
  specification?: string;
  /**
   * @remarks
   * The start timestamp of the time period, which is a 10-digit UNIX timestamp.
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
   * The metering data for MPS UHD transcoding in IMS.
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

