// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventLogsResponseBodySecurityEventMetaDataDateRange extends $dara.Model {
  /**
   * @remarks
   * The end of the time range used for the query. The value is a UNIX timestamp. Unit: seconds. This value is the same as the \\`EndDate\\` request parameter.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The start of the time range used for the query. The value is a UNIX timestamp. Unit: seconds. This value is the same as the \\`StartDate\\` request parameter.
   * 
   * @example
   * 1713888000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventLogsResponseBodySecurityEventMetaData extends $dara.Model {
  /**
   * @remarks
   * The time range used for the query.
   */
  dateRange?: DescribeSecurityEventLogsResponseBodySecurityEventMetaDataDateRange;
  /**
   * @remarks
   * The unit of the returned statistical data.
   * 
   * @example
   * requests
   */
  units?: string;
  static names(): { [key: string]: string } {
    return {
      dateRange: 'DateRange',
      units: 'Units',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dateRange: DescribeSecurityEventLogsResponseBodySecurityEventMetaDataDateRange,
      units: 'string',
    };
  }

  validate() {
    if(this.dateRange && typeof (this.dateRange as any).validate === 'function') {
      (this.dateRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventLogsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-******4C7726
   */
  requestId?: string;
  /**
   * @remarks
   * A list of detailed attack logs.
   */
  securityEventLogs?: any[];
  /**
   * @remarks
   * The total number of attack logs found.
   * 
   * @example
   * 1000
   */
  securityEventLogsTotalCount?: number;
  /**
   * @remarks
   * The metadata of the returned data.
   */
  securityEventMetaData?: DescribeSecurityEventLogsResponseBodySecurityEventMetaData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventLogs: 'SecurityEventLogs',
      securityEventLogsTotalCount: 'SecurityEventLogsTotalCount',
      securityEventMetaData: 'SecurityEventMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventLogs: { 'type': 'array', 'itemType': 'any' },
      securityEventLogsTotalCount: 'number',
      securityEventMetaData: DescribeSecurityEventLogsResponseBodySecurityEventMetaData,
    };
  }

  validate() {
    if(Array.isArray(this.securityEventLogs)) {
      $dara.Model.validateArray(this.securityEventLogs);
    }
    if(this.securityEventMetaData && typeof (this.securityEventMetaData as any).validate === 'function') {
      (this.securityEventMetaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

