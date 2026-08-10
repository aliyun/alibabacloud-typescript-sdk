// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAiAppDetailResponseBodyChartY extends $dara.Model {
  /**
   * @remarks
   * The returned collection.
   */
  data?: number[];
  /**
   * @remarks
   * The name.
   * 
   * @example
   * score
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
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

export class GetAiAppDetailResponseBodyChart extends $dara.Model {
  /**
   * @remarks
   * The X value of the coordinate point.
   */
  x?: string[];
  /**
   * @remarks
   * The Y value of the coordinate point.
   */
  y?: GetAiAppDetailResponseBodyChartY[];
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: { 'type': 'array', 'itemType': 'string' },
      y: { 'type': 'array', 'itemType': GetAiAppDetailResponseBodyChartY },
    };
  }

  validate() {
    if(Array.isArray(this.x)) {
      $dara.Model.validateArray(this.x);
    }
    if(Array.isArray(this.y)) {
      $dara.Model.validateArray(this.y);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiAppDetailResponseBodyRiskEventsLabels extends $dara.Model {
  /**
   * @remarks
   * The labels.
   * 
   * @example
   * inappropriate_profanity
   */
  label?: string;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * xxx
   */
  labelDesc?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * contentModeration
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      labelDesc: 'LabelDesc',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      labelDesc: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiAppDetailResponseBodyRiskEvents extends $dara.Model {
  /**
   * @remarks
   * The risk event code.
   * 
   * @example
   * hit_xxx
   */
  eventCode?: string;
  /**
   * @remarks
   * The number of events.
   * 
   * @example
   * 10
   */
  eventCount?: number;
  /**
   * @remarks
   * The list of risk event IDs.
   */
  eventIds?: string[];
  /**
   * @remarks
   * The risk event name.
   * 
   * @example
   * xxx
   */
  eventName?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * - **unhandled**: Not handled.
   * - **resolved**: Handled.
   * 
   * @example
   * resolved
   */
  eventStatus?: string;
  /**
   * @remarks
   * The labels.
   */
  labels?: GetAiAppDetailResponseBodyRiskEventsLabels[];
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      eventCount: 'EventCount',
      eventIds: 'EventIds',
      eventName: 'EventName',
      eventStatus: 'EventStatus',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventCount: 'number',
      eventIds: { 'type': 'array', 'itemType': 'string' },
      eventName: 'string',
      eventStatus: 'string',
      labels: { 'type': 'array', 'itemType': GetAiAppDetailResponseBodyRiskEventsLabels },
    };
  }

  validate() {
    if(Array.isArray(this.eventIds)) {
      $dara.Model.validateArray(this.eventIds);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAiAppDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * appId。
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * app-xxx
   */
  appName?: string;
  /**
   * @remarks
   * The chart.
   */
  chart?: GetAiAppDetailResponseBodyChart;
  /**
   * @remarks
   * The ID assigned by the backend to uniquely identify a request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The risk events.
   */
  riskEvents?: GetAiAppDetailResponseBodyRiskEvents[];
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 100
   */
  score?: number;
  /**
   * @remarks
   * UID。
   * 
   * @example
   * 17726*****370735
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      chart: 'Chart',
      requestId: 'RequestId',
      riskEvents: 'RiskEvents',
      score: 'Score',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      chart: GetAiAppDetailResponseBodyChart,
      requestId: 'string',
      riskEvents: { 'type': 'array', 'itemType': GetAiAppDetailResponseBodyRiskEvents },
      score: 'number',
      uid: 'string',
    };
  }

  validate() {
    if(this.chart && typeof (this.chart as any).validate === 'function') {
      (this.chart as any).validate();
    }
    if(Array.isArray(this.riskEvents)) {
      $dara.Model.validateArray(this.riskEvents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

