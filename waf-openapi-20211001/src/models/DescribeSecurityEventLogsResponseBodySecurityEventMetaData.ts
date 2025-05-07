// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSecurityEventLogsResponseBodySecurityEventMetaDataDateRange } from "./DescribeSecurityEventLogsResponseBodySecurityEventMetaDataDateRange";


export class DescribeSecurityEventLogsResponseBodySecurityEventMetaData extends $dara.Model {
  /**
   * @remarks
   * The time range that is used for the query.
   */
  dateRange?: DescribeSecurityEventLogsResponseBodySecurityEventMetaDataDateRange;
  /**
   * @remarks
   * The unit of the statistics returned. The value is fixed as requests.
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

