// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel extends $dara.Model {
  byteHitRate?: number;
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

export class DescribeVodDomainRealTimeByteHitRateDataResponseBodyData extends $dara.Model {
  byteHitRateDataModel?: DescribeVodDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      byteHitRateDataModel: 'ByteHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byteHitRateDataModel: { 'type': 'array', 'itemType': DescribeVodDomainRealTimeByteHitRateDataResponseBodyDataByteHitRateDataModel },
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

export class DescribeVodDomainRealTimeByteHitRateDataResponseBody extends $dara.Model {
  data?: DescribeVodDomainRealTimeByteHitRateDataResponseBodyData;
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
      data: DescribeVodDomainRealTimeByteHitRateDataResponseBodyData,
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

