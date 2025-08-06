// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainMax95BpsDataResponseBodyDetailDataMax95Detail extends $dara.Model {
  /**
   * @remarks
   * The billable region where the peak 95 data was collected.
   * 
   * @example
   * CN
   */
  area?: string;
  /**
   * @remarks
   * The 95th percentile bandwidth.
   * 
   * @example
   * 16777590.28
   */
  max95Bps?: number;
  /**
   * @remarks
   * The time corresponding to the 95th percentile bandwidth peak.
   * 
   * @example
   * 2015-12-11T21:05:00Z
   */
  max95BpsPeakTime?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2024-01-18 10:11:32
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      area: 'Area',
      max95Bps: 'Max95Bps',
      max95BpsPeakTime: 'Max95BpsPeakTime',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      area: 'string',
      max95Bps: 'number',
      max95BpsPeakTime: 'string',
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

export class DescribeVodDomainMax95BpsDataResponseBodyDetailData extends $dara.Model {
  max95Detail?: DescribeVodDomainMax95BpsDataResponseBodyDetailDataMax95Detail[];
  static names(): { [key: string]: string } {
    return {
      max95Detail: 'Max95Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max95Detail: { 'type': 'array', 'itemType': DescribeVodDomainMax95BpsDataResponseBodyDetailDataMax95Detail },
    };
  }

  validate() {
    if(Array.isArray(this.max95Detail)) {
      $dara.Model.validateArray(this.max95Detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainMax95BpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the 95th percentile bandwidth.
   */
  detailData?: DescribeVodDomainMax95BpsDataResponseBodyDetailData;
  /**
   * @remarks
   * The domain name for CDN.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The 95th percentile bandwidth in the Chinese mainland.
   * 
   * @example
   * 16777590.28
   */
  domesticMax95Bps?: string;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * >  The end time must be later than the start time.
   * 
   * @example
   * 2017-01-11T13:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The 95th percentile bandwidth.
   * 
   * @example
   * 16777590.28
   */
  max95Bps?: string;
  /**
   * @remarks
   * The 95th percentile bandwidth outside the Chinese mainland.
   * 
   * @example
   * 0
   */
  overseasMax95Bps?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      detailData: 'DetailData',
      domainName: 'DomainName',
      domesticMax95Bps: 'DomesticMax95Bps',
      endTime: 'EndTime',
      max95Bps: 'Max95Bps',
      overseasMax95Bps: 'OverseasMax95Bps',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailData: DescribeVodDomainMax95BpsDataResponseBodyDetailData,
      domainName: 'string',
      domesticMax95Bps: 'string',
      endTime: 'string',
      max95Bps: 'string',
      overseasMax95Bps: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.detailData && typeof (this.detailData as any).validate === 'function') {
      (this.detailData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

