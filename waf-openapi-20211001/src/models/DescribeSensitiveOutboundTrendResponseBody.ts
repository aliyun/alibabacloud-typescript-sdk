// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of personal information entries detected during the time period.
   * 
   * @example
   * 672
   */
  infoCount?: number;
  /**
   * @remarks
   * The total number of outbound personal information entries detected during the time period.
   * 
   * @example
   * 541
   */
  infoOutboundCount?: number;
  /**
   * @remarks
   * The total number of sensitive outbound data entries detected during the time period.
   * 
   * @example
   * 378
   */
  sensitiveOutboundCount?: number;
  /**
   * @remarks
   * The timestamp that indicates when the data was recorded. This value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1672502400
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      infoCount: 'InfoCount',
      infoOutboundCount: 'InfoOutboundCount',
      sensitiveOutboundCount: 'SensitiveOutboundCount',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoCount: 'number',
      infoOutboundCount: 'number',
      sensitiveOutboundCount: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveOutboundTrendResponseBody extends $dara.Model {
  /**
   * @remarks
   * The trend data of sensitive outbound data.
   */
  data?: DescribeSensitiveOutboundTrendResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C1823E96-EF4B-5BD2-9E02-1D18****3ED8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSensitiveOutboundTrendResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

