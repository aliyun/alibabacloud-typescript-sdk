// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveInteractionMetricDataResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The timestamp of the data point, specified as a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1548670257000
   */
  timestamp?: string;
  /**
   * @remarks
   * The value of the metric.
   * 
   * @example
   * 66.670000
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'string',
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

export class DescribeLiveInteractionMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array of data points.
   */
  nodes?: DescribeLiveInteractionMetricDataResponseBodyNodes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A01C98C5-25AE-124A-83FE-514DF5C5BE36
   */
  requestId?: string;
  /**
   * @remarks
   * The summarized data for the query time range.
   * 
   * @example
   * 2000
   */
  summaryData?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
      summaryData: 'SummaryData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeLiveInteractionMetricDataResponseBodyNodes },
      requestId: 'string',
      summaryData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

