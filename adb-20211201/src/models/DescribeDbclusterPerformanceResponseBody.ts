// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceResponseBodyPerformancesSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metrics (the value name of the monitoring metrics). For details, see [Overview of monitoring metrics](https://help.aliyun.com/document_detail/2863211.html).
   * 
   * @example
   * AnalyticDB_Storage_CPU_Avg_Usage_Percentage
   */
  name?: string;
  /**
   * @remarks
   * The tag values.
   * 
   * @example
   * {instance_name: "am-***"}
   */
  tags?: string;
  /**
   * @remarks
   * The key used for internationalization. You can ignore this parameter.
   * 
   * @example
   * AnalyticDB_RP_WaitTime
   */
  translateKey?: string;
  /**
   * @remarks
   * The details of the performance values at different points in time.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tags: 'Tags',
      translateKey: 'TranslateKey',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tags: 'string',
      translateKey: 'string',
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

export class DescribeDBClusterPerformanceResponseBodyPerformances extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metrics.
   * 
   * @example
   * AnalyticDB_CPU_Usage_Percentage
   */
  key?: string;
  /**
   * @remarks
   * The list of performance data.
   */
  series?: DescribeDBClusterPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The unit of the monitoring metrics.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeries },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all clusters in a specified region.
   * 
   * @example
   * amv-bp1hx5n1o8f61****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time is in UTC and follows the <i>yyyy-MM-ddTHH:mmZ</i> format.
   * 
   * @example
   * 2022-03-11T15:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of cluster performance metrics.
   */
  performances?: DescribeDBClusterPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BD8C3096-8BC6-51DF-A4AB-BACD9DC10435
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. Specify the time in UTC in the <i>yyyy-MM-ddTHH:mmZ</i> format.
   * 
   * @example
   * 2022-03-10T23:56Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performances: 'Performances',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      performances: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformances },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performances)) {
      $dara.Model.validateArray(this.performances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

