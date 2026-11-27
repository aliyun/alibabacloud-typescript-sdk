// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndPointMetricDataResponseBodyPubMetricsNodes extends $dara.Model {
  /**
   * @remarks
   * The extended properties.
   */
  ext?: { [key: string]: any };
  /**
   * @remarks
   * The x-axis coordinate in the publisher metric trends chart.
   * 
   * @example
   * 1548670257
   */
  x?: string;
  /**
   * @remarks
   * The y-axis coordinate in the publisher metric trends chart.
   * 
   * @example
   * 230100
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodyPubMetrics extends $dara.Model {
  /**
   * @remarks
   * The list of coordinate points.
   */
  nodes?: DescribeEndPointMetricDataResponseBodyPubMetricsNodes[];
  /**
   * @remarks
   * The metric type corresponding to the Metrics request parameter.
   * 
   * @example
   * VIDEO_STUCK_CAMERA
   */
  type?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodyPubMetricsNodes },
      type: 'string',
      userId: 'string',
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

export class DescribeEndPointMetricDataResponseBodySubMetricsNodes extends $dara.Model {
  /**
   * @remarks
   * The extended properties.
   */
  ext?: { [key: string]: any };
  /**
   * @remarks
   * The x-axis coordinate in the subscriber metric trends chart.
   * 
   * @example
   * 1548670257
   */
  x?: string;
  /**
   * @remarks
   * The y-axis coordinate in the subscriber metric trends chart.
   * 
   * @example
   * 230100
   */
  y?: string;
  static names(): { [key: string]: string } {
    return {
      ext: 'Ext',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ext: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    if(this.ext) {
      $dara.Model.validateMap(this.ext);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndPointMetricDataResponseBodySubMetrics extends $dara.Model {
  /**
   * @remarks
   * The list of coordinate points for the subscriber metric trends chart.
   */
  nodes?: DescribeEndPointMetricDataResponseBodySubMetricsNodes[];
  /**
   * @remarks
   * The metric type corresponding to the Metrics request parameter.
   * 
   * @example
   * VIDEO_STUCK_CAMERA
   */
  type?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      type: 'Type',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetricsNodes },
      type: 'string',
      userId: 'string',
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

export class DescribeEndPointMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The metric data of the publisher.
   */
  pubMetrics?: DescribeEndPointMetricDataResponseBodyPubMetrics[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @remarks
   * The metric data of the subscriber.
   */
  subMetrics?: DescribeEndPointMetricDataResponseBodySubMetrics[];
  static names(): { [key: string]: string } {
    return {
      pubMetrics: 'PubMetrics',
      requestId: 'RequestId',
      subMetrics: 'SubMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodyPubMetrics },
      requestId: 'string',
      subMetrics: { 'type': 'array', 'itemType': DescribeEndPointMetricDataResponseBodySubMetrics },
    };
  }

  validate() {
    if(Array.isArray(this.pubMetrics)) {
      $dara.Model.validateArray(this.pubMetrics);
    }
    if(Array.isArray(this.subMetrics)) {
      $dara.Model.validateArray(this.subMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

