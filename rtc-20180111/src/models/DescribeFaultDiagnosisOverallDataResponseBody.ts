// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaultDiagnosisOverallDataResponseBodyMetricDataNodes extends $dara.Model {
  ext?: { [key: string]: any };
  /**
   * @example
   * 1615824000
   */
  x?: string;
  /**
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
   * @example
   * 20
   */
  faultUserCount?: number;
  /**
   * @example
   * 0.1
   */
  faultUserRatio?: number;
  /**
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
  metricData?: DescribeFaultDiagnosisOverallDataResponseBodyMetricData;
  overallData?: DescribeFaultDiagnosisOverallDataResponseBodyOverallData;
  /**
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

