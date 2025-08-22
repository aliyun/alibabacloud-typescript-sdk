// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainIspDataResponseBodyValueIspProportionData extends $dara.Model {
  /**
   * @remarks
   * The average response size. Unit: bytes.
   * 
   * @example
   * 800019.0
   */
  avgObjectSize?: string;
  /**
   * @remarks
   * The average response speed. Unit: byte/ms.
   * 
   * @example
   * 154.3345765545624
   */
  avgResponseRate?: string;
  /**
   * @remarks
   * The average response time. Unit: milliseconds.
   * 
   * @example
   * 5183.666666666667
   */
  avgResponseTime?: string;
  /**
   * @remarks
   * The bandwidth.
   * 
   * @example
   * 380.9614285714286
   */
  bps?: string;
  /**
   * @remarks
   * The proportion of network traffic. For example, a value of 90 indicates that 90% of network traffic was coming from the specified ISP.
   * 
   * @example
   * 0.003544181046236794
   */
  bytesProportion?: string;
  /**
   * @remarks
   * The information about the ISP.
   * 
   * @example
   * China Unicom
   */
  isp?: string;
  /**
   * @remarks
   * The name of the ISP.
   * 
   * @example
   * unicom
   */
  ispEname?: string;
  /**
   * @remarks
   * The proportion of the HTTP status code.
   * 
   * @example
   * 0.01155980271270037
   */
  proportion?: string;
  /**
   * @remarks
   * The number of queries per second (QPS).
   * 
   * @example
   * 5.9523809523809524E-5
   */
  qps?: string;
  /**
   * @remarks
   * The total volume of traffic.
   * 
   * @example
   * 2400057
   */
  totalBytes?: string;
  /**
   * @remarks
   * The total number of requests that are destined for your website.
   * 
   * @example
   * 3
   */
  totalQuery?: string;
  static names(): { [key: string]: string } {
    return {
      avgObjectSize: 'AvgObjectSize',
      avgResponseRate: 'AvgResponseRate',
      avgResponseTime: 'AvgResponseTime',
      bps: 'Bps',
      bytesProportion: 'BytesProportion',
      isp: 'Isp',
      ispEname: 'IspEname',
      proportion: 'Proportion',
      qps: 'Qps',
      totalBytes: 'TotalBytes',
      totalQuery: 'TotalQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgObjectSize: 'string',
      avgResponseRate: 'string',
      avgResponseTime: 'string',
      bps: 'string',
      bytesProportion: 'string',
      isp: 'string',
      ispEname: 'string',
      proportion: 'string',
      qps: 'string',
      totalBytes: 'string',
      totalQuery: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIspDataResponseBodyValue extends $dara.Model {
  ispProportionData?: DescribeDcdnDomainIspDataResponseBodyValueIspProportionData[];
  static names(): { [key: string]: string } {
    return {
      ispProportionData: 'IspProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispProportionData: { 'type': 'array', 'itemType': DescribeDcdnDomainIspDataResponseBodyValueIspProportionData },
    };
  }

  validate() {
    if(Array.isArray(this.ispProportionData)) {
      $dara.Model.validateArray(this.ispProportionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDcdnDomainIspDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval between the data entries returned. Unit: seconds.
   * 
   * @example
   * 86400
   */
  dataInterval?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2019-12-06T12:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2E5AD83F-BD7B-462E-8319-2E30E305519A
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2019-12-05T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The access statistics by ISP.
   */
  value?: DescribeDcdnDomainIspDataResponseBodyValue;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
      value: DescribeDcdnDomainIspDataResponseBodyValue,
    };
  }

  validate() {
    if(this.value && typeof (this.value as any).validate === 'function') {
      (this.value as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

