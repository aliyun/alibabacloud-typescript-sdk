// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundTrendResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of personal information records.
   * 
   * @example
   * 672
   */
  infoCount?: number;
  /**
   * @remarks
   * The total number of personal information records involved in cross-border data transfer.
   * 
   * @example
   * 541
   */
  infoOutboundCount?: number;
  /**
   * @remarks
   * The total number of sensitive information records involved in cross-border data transfer.
   * 
   * @example
   * 378
   */
  sensitiveOutboundCount?: number;
  /**
   * @remarks
   * The time of cross-border data transfer. The value is a UNIX timestamp displayed in UTC. Unit: seconds.
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
   * The information records involved in cross-border data transfer.
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

