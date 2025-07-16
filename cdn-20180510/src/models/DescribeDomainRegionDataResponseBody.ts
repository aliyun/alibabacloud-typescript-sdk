// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDomainRegionDataResponseBodyValueRegionProportionData extends $dara.Model {
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
   * The average response speed. Unit: bit/s.
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
   * The proportion of traffic from the region. For example, a value of 90 indicates that 90% of the traffic is from the region.
   * 
   * @example
   * 0.003544181046236794
   */
  bytesProportion?: string;
  /**
   * @remarks
   * The proportion of visits from the region. For example, a value of 90 indicates that 90% of the visits are from the region.
   * 
   * @example
   * 0.01155980271270037
   */
  proportion?: string;
  /**
   * @remarks
   * The number of queries per second.
   * 
   * @example
   * 5.9523809523809524E-5
   */
  qps?: string;
  /**
   * @remarks
   * The information about the region.
   * 
   * @example
   * Japan
   */
  region?: string;
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * japan
   */
  regionEname?: string;
  /**
   * @remarks
   * The request error rate. A value of 90 indicates that 90% of the requests encountered errors.
   * 
   * @example
   * 0.0
   */
  reqErrRate?: string;
  /**
   * @remarks
   * The total traffic. Unit: bytes.
   * 
   * @example
   * 2400057
   */
  totalBytes?: string;
  /**
   * @remarks
   * The total number of requests.
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
      proportion: 'Proportion',
      qps: 'Qps',
      region: 'Region',
      regionEname: 'RegionEname',
      reqErrRate: 'ReqErrRate',
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
      proportion: 'string',
      qps: 'string',
      region: 'string',
      regionEname: 'string',
      reqErrRate: 'string',
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

export class DescribeDomainRegionDataResponseBodyValue extends $dara.Model {
  regionProportionData?: DescribeDomainRegionDataResponseBodyValueRegionProportionData[];
  static names(): { [key: string]: string } {
    return {
      regionProportionData: 'RegionProportionData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionProportionData: { 'type': 'array', 'itemType': DescribeDomainRegionDataResponseBodyValueRegionProportionData },
    };
  }

  validate() {
    if(Array.isArray(this.regionProportionData)) {
      $dara.Model.validateArray(this.regionProportionData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDomainRegionDataResponseBody extends $dara.Model {
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
   * The end of the time range for which the data was queried.
   * 
   * @example
   * 2015-12-07T12:00:00Z
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
   * The beginning of the time range for which the data was queried.
   * 
   * @example
   * 2015-12-05T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The proportions of requests initiated from each region.
   */
  value?: DescribeDomainRegionDataResponseBodyValue;
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
      value: DescribeDomainRegionDataResponseBodyValue,
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

