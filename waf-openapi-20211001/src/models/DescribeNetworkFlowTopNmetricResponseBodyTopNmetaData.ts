// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNetworkFlowTopNMetricResponseBodyTopNMetaDataDateRange } from "./DescribeNetworkFlowTopNmetricResponseBodyTopNmetaDataDateRange";


export class DescribeNetworkFlowTopNMetricResponseBodyTopNMetaData extends $dara.Model {
  /**
   * @remarks
   * The query time range.
   */
  dateRange?: DescribeNetworkFlowTopNMetricResponseBodyTopNMetaDataDateRange;
  /**
   * @remarks
   * The unit of the returned data. It is fixed as requests.
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
      dateRange: DescribeNetworkFlowTopNMetricResponseBodyTopNMetaDataDateRange,
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

