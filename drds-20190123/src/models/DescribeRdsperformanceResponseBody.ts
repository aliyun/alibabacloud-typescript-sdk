// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRDSPerformanceResponseBodyDataValues extends $dara.Model {
  /**
   * @remarks
   * The time point when the value of the monitoring metric was obtained. The value is in the UNIX timestamp format. The time is displayed in UTC. Unit: ms.
   * 
   * @example
   * 1603209660000
   */
  date?: number;
  /**
   * @remarks
   * The value of the monitoring metric.
   * 
   * @example
   * 0.58
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'number',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRDSPerformanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the monitoring metric.
   * 
   * @example
   * cpuusage
   */
  key?: string;
  /**
   * @remarks
   * The name of the node.
   * 
   * >  This parameter is returned only when the storage type of the database is PolarDB for MySQL. If the storage type of the database is ApsaraDB RDS for MySQL, this parameter is not returned.
   * 
   * @example
   * pi-*************
   */
  nodeName?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
  nodeNum?: number;
  /**
   * @remarks
   * The unit of the monitoring metric.
   * 
   * @example
   * %
   */
  unit?: string;
  /**
   * @remarks
   * The details of the monitoring metric data.
   */
  values?: DescribeRDSPerformanceResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nodeName: 'NodeName',
      nodeNum: 'NodeNum',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nodeName: 'string',
      nodeNum: 'number',
      unit: 'string',
      values: { 'type': 'array', 'itemType': DescribeRDSPerformanceResponseBodyDataValues },
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

export class DescribeRDSPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result set of the query.
   */
  data?: DescribeRDSPerformanceResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DB53EC68-463C-4187-8D2B-C2AD8C******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeRDSPerformanceResponseBodyData },
      requestId: 'string',
      success: 'boolean',
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

