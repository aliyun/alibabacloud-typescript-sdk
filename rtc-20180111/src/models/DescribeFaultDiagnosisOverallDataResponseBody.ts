// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes extends $dara.Model {
  /**
   * @remarks
   * The extended properties, where ratio indicates the proportion of abnormal users per unit time and totalCount indicates the total number of users per unit time.
   */
  ext?: { [key: string]: any };
  /**
   * @remarks
   * The x-axis coordinate in the metric trends chart. The unit of time is 1 minute.
   * 
   * @example
   * 1615824000
   */
  x?: string;
  /**
   * @remarks
   * The y-axis coordinate in the metric trends chart.
   * 
   * @example
   * 1
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

export class DescribeFaultDiagnosisOverallDataResponseBodyMetricData extends $dara.Model {
  /**
   * @remarks
   * The list of coordinate points for the metric trends chart.
   */
  nodes?: DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes[];
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes },
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

export class DescribeFaultDiagnosisOverallDataResponseBodyOverallData extends $dara.Model {
  /**
   * @remarks
   * The number of abnormal user visits or abnormal users.
   * 
   * @example
   * 20
   */
  faultUserCount?: number;
  /**
   * @remarks
   * The total proportion of abnormal users.
   * 
   * @example
   * 0.5
   */
  faultUserRatio?: number;
  /**
   * @remarks
   * The total number of user visits or total users.
   * 
   * @example
   * 40
   */
  totalUserCount?: number;
  static names(): { [key: string]: string } {
    return {
      faultUserCount: 'FaultUserCount',
      faultUserRatio: 'FaultUserRatio',
      totalUserCount: 'TotalUserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faultUserCount: 'number',
      faultUserRatio: 'number',
      totalUserCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaultDiagnosisOverallDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The exception metric data.
   */
  metricData?: DescribeFaultDiagnosisOverallDataResponseBodyMetricData;
  /**
   * @remarks
   * The list of overview data for exception diagnostics.
   */
  overallData?: DescribeFaultDiagnosisOverallDataResponseBodyOverallData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricData: 'MetricData',
      overallData: 'OverallData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricData: DescribeFaultDiagnosisOverallDataResponseBodyMetricData,
      overallData: DescribeFaultDiagnosisOverallDataResponseBodyOverallData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metricData && typeof (this.metricData as any).validate === 'function') {
      (this.metricData as any).validate();
    }
    if(this.overallData && typeof (this.overallData as any).validate === 'function') {
      (this.overallData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

