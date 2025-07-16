// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel extends $dara.Model {
  /**
   * @remarks
   * The byte hit ratio. The byte hit ratio is measured in percentage.
   * 
   * @example
   * 0.8956940476262277
   */
  byteHitRate?: number;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-30T05:40:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      byteHitRate: 'ByteHitRate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRate: 'number',
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

export class DescribeDomainRealTimeByteHitRateDataResponseBodyData extends $dara.Model {
  byteHitRateDataModel?: DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      byteHitRateDataModel: 'ByteHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRateDataModel: { 'type': 'array', 'itemType': DescribeDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel },
    };
  }

  validate() {
    if(Array.isArray(this.byteHitRateDataModel)) {
      $dara.Model.validateArray(this.byteHitRateDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRealTimeByteHitRateDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: DescribeDomainRealTimeByteHitRateDataResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 70A26B11-3673-479C-AEA8-E03FC5D3496D
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
      data: DescribeDomainRealTimeByteHitRateDataResponseBodyData,
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

