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
   * The X-coordinate of the data point.
   */
  x?: string[];
  /**
   * @remarks
   * The Y-coordinate of the data point.
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

export class GetAiAppDetailResponseBodyProperty extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * xx@qoder.alibaba-inc.com
   */
  email?: string;
  /**
   * @remarks
   * The hostname.
   * 
   * @example
   * xx.local
   */
  hostname?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 1.xx.xx
   */
  ip?: string;
  /**
   * @remarks
   * The MAC address.
   * 
   * @example
   * xx.xx.xx
   */
  mac?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      hostname: 'Hostname',
      ip: 'Ip',
      mac: 'Mac',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      hostname: 'string',
      ip: 'string',
      mac: 'string',
    };
  }

  validate() {
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
   * The output content contains insulting or discriminatory remarks
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
   * The code of the risk event.
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
   * The name of the risk event.
   * 
   * @example
   * Insults and personal attacks
   */
  eventName?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * - **unhandled**: unhandled
   * - **resolved**: resolved
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

export class GetAiAppDetailResponseBodyRiskStats extends $dara.Model {
  /**
   * @remarks
   * The number of requests.
   * 
   * @example
   * 10
   */
  requestCount?: number;
  /**
   * @remarks
   * The number of risks.
   * 
   * @example
   * 1
   */
  riskCount?: number;
  /**
   * @remarks
   * The risk statistics type.
   * 
   * @example
   * content_moderation
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      requestCount: 'RequestCount',
      riskCount: 'RiskCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestCount: 'number',
      riskCount: 'number',
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

export class GetAiAppDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AI application ID.
   * 
   * @example
   * id-xxx
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * app-xxx
   */
  appName?: string;
  /**
   * @remarks
   * The channel information.
   * 
   * @example
   * qoder
   */
  channel?: string;
  /**
   * @remarks
   * The chart.
   */
  chart?: GetAiAppDetailResponseBodyChart;
  /**
   * @remarks
   * The properties.
   */
  property?: GetAiAppDetailResponseBodyProperty;
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
   * The risk statistics information.
   */
  riskStats?: GetAiAppDetailResponseBodyRiskStats[];
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
   * The UID of the user.
   * 
   * @example
   * 17726*****370735
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      channel: 'Channel',
      chart: 'Chart',
      property: 'Property',
      requestId: 'RequestId',
      riskEvents: 'RiskEvents',
      riskStats: 'RiskStats',
      score: 'Score',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      channel: 'string',
      chart: GetAiAppDetailResponseBodyChart,
      property: GetAiAppDetailResponseBodyProperty,
      requestId: 'string',
      riskEvents: { 'type': 'array', 'itemType': GetAiAppDetailResponseBodyRiskEvents },
      riskStats: { 'type': 'array', 'itemType': GetAiAppDetailResponseBodyRiskStats },
      score: 'number',
      uid: 'string',
    };
  }

  validate() {
    if(this.chart && typeof (this.chart as any).validate === 'function') {
      (this.chart as any).validate();
    }
    if(this.property && typeof (this.property as any).validate === 'function') {
      (this.property as any).validate();
    }
    if(Array.isArray(this.riskEvents)) {
      $dara.Model.validateArray(this.riskEvents);
    }
    if(Array.isArray(this.riskStats)) {
      $dara.Model.validateArray(this.riskStats);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

