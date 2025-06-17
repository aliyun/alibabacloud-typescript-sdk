// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainMax95BpsDataResponseBodyDetailData } from "./DescribeDomainMax95bpsDataResponseBodyDetailData";


export class DescribeDomainMax95BpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the 95th percentile bandwidth.
   */
  detailData?: DescribeDomainMax95BpsDataResponseBodyDetailData;
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
   * The 95th percentile bandwidth in the Chinese mainland.
   * 
   * @example
   * 16777590.28
   */
  domesticMax95Bps?: string;
  /**
   * @remarks
   * The end of the time range for which the data was queried.
   * 
   * @example
   * 2015-12-11T21:00:00Z
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
   * The ID of the request.
   * 
   * @example
   * 3C6CCEC4-6B88-4D4A-93E4-D47B3D92CF8F
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range for which the data was queried.
   * 
   * @example
   * 2015-12-10T20:00:00Z
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
      detailData: DescribeDomainMax95BpsDataResponseBodyDetailData,
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

