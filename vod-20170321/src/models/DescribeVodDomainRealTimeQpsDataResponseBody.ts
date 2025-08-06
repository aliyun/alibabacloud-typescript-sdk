// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainRealTimeQpsDataResponseBodyDataQpsModel extends $dara.Model {
  /**
   * @remarks
   * The number of queries per second.
   * 
   * @example
   * 1851.25
   */
  qps?: number;
  /**
   * @remarks
   * The timestamp of the returned data. The time follows the ISO 8601 standard. The time is displayed in UTC.
   * 
   * @example
   * 2019-12-02T11:25:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qps: 'number',
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

export class DescribeVodDomainRealTimeQpsDataResponseBodyData extends $dara.Model {
  qpsModel?: DescribeVodDomainRealTimeQpsDataResponseBodyDataQpsModel[];
  static names(): { [key: string]: string } {
    return {
      qpsModel: 'QpsModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qpsModel: { 'type': 'array', 'itemType': DescribeVodDomainRealTimeQpsDataResponseBodyDataQpsModel },
    };
  }

  validate() {
    if(Array.isArray(this.qpsModel)) {
      $dara.Model.validateArray(this.qpsModel);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainRealTimeQpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeVodDomainRealTimeQpsDataResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 32DC9806-E9F9-4490-BBDC-B3A9E32FCC1D
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
      data: DescribeVodDomainRealTimeQpsDataResponseBodyData,
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

