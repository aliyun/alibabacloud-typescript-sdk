// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop extends $dara.Model {
  /**
   * @remarks
   * The number of DNS requests.
   * 
   * @example
   * 103
   */
  requestCount?: number;
  /**
   * @remarks
   * The time when the data was collected. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-10-21T10:00Z
   */
  time?: string;
  /**
   * @remarks
   * The time when the data was collected. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1571652000000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      requestCount: 'RequestCount',
      time: 'Time',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestCount: 'number',
      time: 'string',
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

export class DescribeRequestGraphResponseBodyRequestDetails extends $dara.Model {
  zoneRequestTop?: DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop[];
  static names(): { [key: string]: string } {
    return {
      zoneRequestTop: 'ZoneRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneRequestTop: { 'type': 'array', 'itemType': DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop },
    };
  }

  validate() {
    if(Array.isArray(this.zoneRequestTop)) {
      $dara.Model.validateArray(this.zoneRequestTop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestGraphResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the DNS requests.
   */
  requestDetails?: DescribeRequestGraphResponseBodyRequestDetails;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EB71815-A421-4E51-8E8D-667F44ABE633
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestDetails: 'RequestDetails',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestDetails: DescribeRequestGraphResponseBodyRequestDetails,
      requestId: 'string',
    };
  }

  validate() {
    if(this.requestDetails && typeof (this.requestDetails as any).validate === 'function') {
      (this.requestDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

