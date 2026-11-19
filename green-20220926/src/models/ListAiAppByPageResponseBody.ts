// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiAppByPageResponseBodyItemsRiskEventsLabels extends $dara.Model {
  /**
   * @remarks
   * The label name.
   * 
   * @example
   * porn
   */
  label?: string;
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * The output content contains insulting or discriminatory remarks against others
   */
  labelDesc?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * sensitiveData
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

export class ListAiAppByPageResponseBodyItemsRiskEvents extends $dara.Model {
  /**
   * @remarks
   * The code of the risk event.
   * 
   * @example
   * hit-xxx
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
   * The event descriptions.
   */
  eventDescs?: string[];
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
   * Abuse and personal attacks
   */
  eventName?: string;
  /**
   * @remarks
   * The event status. Valid values:
   * - **unhandled**: Unhandled.
   * - **resolved**: Resolved.
   * 
   * @example
   * resolved
   */
  eventStatus?: string;
  /**
   * @remarks
   * The list of label items.
   */
  labels?: ListAiAppByPageResponseBodyItemsRiskEventsLabels[];
  static names(): { [key: string]: string } {
    return {
      eventCode: 'EventCode',
      eventCount: 'EventCount',
      eventDescs: 'EventDescs',
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
      eventDescs: { 'type': 'array', 'itemType': 'string' },
      eventIds: { 'type': 'array', 'itemType': 'string' },
      eventName: 'string',
      eventStatus: 'string',
      labels: { 'type': 'array', 'itemType': ListAiAppByPageResponseBodyItemsRiskEventsLabels },
    };
  }

  validate() {
    if(Array.isArray(this.eventDescs)) {
      $dara.Model.validateArray(this.eventDescs);
    }
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

export class ListAiAppByPageResponseBodyItemsRiskStats extends $dara.Model {
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
   * The type.
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

export class ListAiAppByPageResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI application.
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
   * name-xxx
   */
  appName?: string;
  /**
   * @remarks
   * The application status.
   * 
   * @example
   * online
   */
  appStatus?: string;
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * bailian
   */
  channel?: string;
  /**
   * @remarks
   * The last active time. The format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2026-01-01 00:00:00
   */
  lastTraceTime?: string;
  /**
   * @remarks
   * The risk events.
   */
  riskEvents?: ListAiAppByPageResponseBodyItemsRiskEvents[];
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The risk statistics.
   */
  riskStats?: ListAiAppByPageResponseBodyItemsRiskStats[];
  /**
   * @remarks
   * The Tracing Analysis status.
   * 
   * @example
   * enable
   */
  traceStatus?: string;
  /**
   * @remarks
   * The UID of the user.
   * 
   * @example
   * 104813*****2399
   */
  uid?: string;
  /**
   * @remarks
   * The number of alerts.
   * 
   * @example
   * 10
   */
  warningCount?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      appStatus: 'AppStatus',
      channel: 'Channel',
      lastTraceTime: 'LastTraceTime',
      riskEvents: 'RiskEvents',
      riskLevel: 'RiskLevel',
      riskStats: 'RiskStats',
      traceStatus: 'TraceStatus',
      uid: 'Uid',
      warningCount: 'WarningCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
      appStatus: 'string',
      channel: 'string',
      lastTraceTime: 'string',
      riskEvents: { 'type': 'array', 'itemType': ListAiAppByPageResponseBodyItemsRiskEvents },
      riskLevel: 'string',
      riskStats: { 'type': 'array', 'itemType': ListAiAppByPageResponseBodyItemsRiskStats },
      traceStatus: 'string',
      uid: 'string',
      warningCount: 'number',
    };
  }

  validate() {
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

export class ListAiAppByPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The data on the current page.
   */
  items?: ListAiAppByPageResponseBodyItems[];
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is assigned by the backend to uniquely identify the request and can be used to troubleshoot issues.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListAiAppByPageResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

