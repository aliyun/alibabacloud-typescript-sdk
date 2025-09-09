// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDrdsInstanceMonitorResponseBodyDataValues extends $dara.Model {
  /**
   * @remarks
   * The point in time when the value of the metric was collected. The value is in the UNIX timestamp format. The timestamp is displayed in UTC. Unit: ms.
   * 
   * @example
   * 1603163400000
   */
  date?: number;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 1.40
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

export class DescribeDrdsInstanceMonitorResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * cpu
   */
  key?: string;
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
   * The unit of the metric value.
   * 
   * @example
   * %
   */
  unit?: string;
  /**
   * @remarks
   * The details of the monitoring data of the metric.
   */
  values?: DescribeDrdsInstanceMonitorResponseBodyDataValues[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      nodeNum: 'NodeNum',
      unit: 'Unit',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      nodeNum: 'number',
      unit: 'string',
      values: { 'type': 'array', 'itemType': DescribeDrdsInstanceMonitorResponseBodyDataValues },
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

export class DescribeDrdsInstanceMonitorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result set of the query.
   */
  data?: DescribeDrdsInstanceMonitorResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2F7F8080-9132-4279-85D0-B7E5C4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeDrdsInstanceMonitorResponseBodyData },
      requestId: 'string',
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

