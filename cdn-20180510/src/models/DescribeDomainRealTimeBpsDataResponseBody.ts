// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: bit/s.
   * 
   * @example
   * 16710625.733333332
   */
  bps?: number;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-30T05:41:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeBpsDataResponseBodyData extends $dara.Model {
  bpsModel?: DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel[];
  static names(): { [key: string]: string } {
    return {
      bpsModel: 'BpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bpsModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeBpsDataResponseBodyDataBpsModel },
    };
  }

  validate() {
    if(Array.isArray(this.bpsModel)) {
      $dara.Model.validateArray(this.bpsModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeBpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeDomainRealTimeBpsDataResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B49E6DDA-F413-422B-B58E-2FA23F286726
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
      data: DescribeDomainRealTimeBpsDataResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

