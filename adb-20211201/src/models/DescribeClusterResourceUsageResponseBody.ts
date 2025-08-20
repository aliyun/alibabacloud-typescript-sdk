// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClusterResourceUsageResponseBodyDataAcuInfo extends $dara.Model {
  /**
   * @remarks
   * The resource usage metric. Valid values:
   * 
   * *   `TotalAcuNumber`: the total number of ACUs.
   * *   `ReservedAcuNumber`: the number of ACUs for the reserved resources.
   * *   `ReservedAcuUsageNumber`: the number of ACUs for the reserved resources that are used.
   * 
   * @example
   * TotalAcuNumber
   */
  name?: string;
  /**
   * @remarks
   * The values of the metric at specific points in time.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourceUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The AnalyticDB compute unit (ACU) usage of the cluster.
   */
  acuInfo?: DescribeClusterResourceUsageResponseBodyDataAcuInfo[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * amv-uf6dj23rt5zo9s9d
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-23T02:31Z
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2023-03-14T03:42:15Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      acuInfo: 'AcuInfo',
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acuInfo: { 'type': 'array', 'itemType': DescribeClusterResourceUsageResponseBodyDataAcuInfo },
      DBClusterId: 'string',
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.acuInfo)) {
      $dara.Model.validateArray(this.acuInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The queried resource usage.
   */
  data?: DescribeClusterResourceUsageResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEAW
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeClusterResourceUsageResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

