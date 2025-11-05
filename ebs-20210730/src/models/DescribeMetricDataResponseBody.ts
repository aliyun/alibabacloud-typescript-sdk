// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricDataResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * List of monitoring data, consisting of a series of consecutive second-level timestamps and the corresponding metric values at those times.
   * 
   * @example
   * {"1699258861": 1,"1699259461": 0}
   */
  datapoints?: any;
  /**
   * @remarks
   * Labels.
   * 
   * @example
   * {"DiskId": "d-1234"}
   */
  labels?: any;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: 'any',
      labels: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * Collection of monitoring data for the cloud disk.
   */
  dataList?: DescribeMetricDataResponseBodyDataList[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 11B55F58-D3A4-4A9B-9596-342420D0****
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of data points queried.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * List of warning messages.
   */
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

