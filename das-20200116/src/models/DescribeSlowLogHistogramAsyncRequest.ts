// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSlowLogHistogramAsyncRequestFilters } from "./DescribeSlowLogHistogramAsyncRequestFilters";


export class DescribeSlowLogHistogramAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1662518540764
   */
  endTime?: number;
  filters?: DescribeSlowLogHistogramAsyncRequestFilters[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-2ze8g2am97624****
   */
  instanceId?: string;
  /**
   * @example
   * r-****-db-0
   */
  nodeId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1596177993000
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      filters: 'Filters',
      instanceId: 'InstanceId',
      nodeId: 'NodeId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      filters: { 'type': 'array', 'itemType': DescribeSlowLogHistogramAsyncRequestFilters },
      instanceId: 'string',
      nodeId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filters)) {
      $dara.Model.validateArray(this.filters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

