// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel extends $dara.Model {
  /**
   * @remarks
   * The byte hit ratio.
   * 
   * @example
   * 0.8956940476262277
   */
  byteHitRate?: number;
  /**
   * @remarks
   * The timestamp of the data returned. The time follows the ISO 8601 standard. The time is displayed in UTC.
   * 
   * @example
   * 2016-10-20T04:00:00Z
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

export class DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyData extends $dara.Model {
  byteHitRateDataModel?: DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      byteHitRateDataModel: 'ByteHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRateDataModel: { 'type': 'array', 'itemType': DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel },
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

export class DescribeDcdnDomainRealTimeByteHitRateDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of byte hit ratios.
   */
  data?: DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B955107D-E658-4E77-B913-E0AC3D31693E
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
      data: DescribeDcdnDomainRealTimeByteHitRateDataResponseBodyData,
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

