// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel extends $dara.Model {
  reqHitRate?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      reqHitRate: 'ReqHitRate',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqHitRate: 'number',
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

export class DescribeVodDomainRealTimeReqHitRateDataResponseBodyData extends $dara.Model {
  reqHitRateDataModel?: DescribeVodDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel[];
  static names(): { [key: string]: string } {
    return {
      reqHitRateDataModel: 'ReqHitRateDataModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reqHitRateDataModel: { 'type': 'array', 'itemType': DescribeVodDomainRealTimeReqHitRateDataResponseBodyDataReqHitRateDataModel },
    };
  }

  validate() {
    if(Array.isArray(this.reqHitRateDataModel)) {
      $dara.Model.validateArray(this.reqHitRateDataModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainRealTimeReqHitRateDataResponseBody extends $dara.Model {
  data?: DescribeVodDomainRealTimeReqHitRateDataResponseBodyData;
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
      data: DescribeVodDomainRealTimeReqHitRateDataResponseBodyData,
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

