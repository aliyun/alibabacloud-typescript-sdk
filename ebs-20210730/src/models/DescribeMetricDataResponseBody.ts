// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeMetricDataResponseBodyDataList } from "./DescribeMetricDataResponseBodyDataList";


export class DescribeMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The disk monitoring data.
   */
  dataList?: DescribeMetricDataResponseBodyDataList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of data entries queried.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  warnings?: string[];
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      warnings: 'Warnings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeMetricDataResponseBodyDataList },
      requestId: 'string',
      totalCount: 'number',
      warnings: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    if(Array.isArray(this.warnings)) {
      $dara.Model.validateArray(this.warnings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

