// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEventResponseBodyAttackSourcesSources extends $dara.Model {
  /**
   * @remarks
   * The display attribute of the attack source, such as the region code.
   * 
   * @example
   * CN-510100
   */
  attribute?: string;
  /**
   * @remarks
   * The value of the attack source. If the attack source type is IP address (**Type** is **ip**), the value is an IP address.
   * 
   * @example
   * 203.0.113.109
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'Attribute',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
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

export class DescribeAiEngineEventResponseBodyAttackSources extends $dara.Model {
  /**
   * @remarks
   * The list of attack sources of this type.
   */
  sources?: DescribeAiEngineEventResponseBodyAttackSourcesSources[];
  /**
   * @remarks
   * The type of the attack source. Valid values:
   * 
   * - **ip**: IP-based attack source.
   * 
   * @example
   * ip
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sources: 'Sources',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sources: { 'type': 'array', 'itemType': DescribeAiEngineEventResponseBodyAttackSourcesSources },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sources)) {
      $dara.Model.validateArray(this.sources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAiEngineEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of attack source groups for the event.
   */
  attackSources?: DescribeAiEngineEventResponseBodyAttackSources[];
  /**
   * @remarks
   * The statistical value of suspected bypass evidence requests for the event.
   * 
   * @example
   * 1
   */
  bypassRequestCount?: number;
  /**
   * @remarks
   * The list of domain names involved in the event.
   */
  domains?: string[];
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * EVT-0bda6****6b5cwwz
   */
  eventId?: string;
  /**
   * @remarks
   * The name of the event in the specified language.
   * 
   * @example
   * Suspected injection attack
   */
  eventName?: string;
  /**
   * @remarks
   * The number of nodes included in the event.
   * 
   * @example
   * 1
   */
  eventNodeCount?: number;
  /**
   * @remarks
   * The summary of the event in the specified language.
   * 
   * @example
   * Requests suspected of injection attacks were detected.
   */
  eventSummary?: string;
  /**
   * @remarks
   * The statistical value of evidence requests for the event.
   * 
   * @example
   * 200
   */
  evidenceRequestCount?: number;
  /**
   * @remarks
   * The time when the event was first detected. The time is a UNIX timestamp in UTC. Unit: milliseconds.
   * 
   * @example
   * 1792973400000
   */
  firstSeenAt?: number;
  /**
   * @remarks
   * The current manual handling status. Valid values:
   * 
   * - **unhandled**: Unhandled.
   * 
   * - **handling**: Handling.
   * 
   * - **handled**: Handled.
   * 
   * @example
   * unhandled
   */
  handleStatus?: string;
  /**
   * @remarks
   * The time when the event was last detected. The time is a UNIX timestamp in UTC. Unit: milliseconds.
   * 
   * @example
   * 1792973700000
   */
  lastSeenAt?: number;
  /**
   * @remarks
   * The IDs of the related events. Multiple IDs are separated by commas (,).
   * 
   * @example
   * EVT-0bda6****6b5c174,EVT-0bda6****6b5c175
   */
  relatedEventIds?: string;
  /**
   * @remarks
   * The event analysis report in the specified language, in Markdown format.
   * 
   * @example
   * # Event analysis report
   * 
   * Requests suspected of injection attacks were detected.
   */
  reportMarkdown?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * request-demo
   */
  requestId?: string;
  /**
   * @remarks
   * The list of IDs of the protected objects involved in the event.
   */
  resources?: string[];
  /**
   * @remarks
   * The current risk level. Valid values:
   * 
   * - **critical**: Urgent.
   * 
   * - **high**: High-risk.
   * 
   * - **medium**: Medium-risk.
   * 
   * - **low**: Low-risk.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      attackSources: 'AttackSources',
      bypassRequestCount: 'BypassRequestCount',
      domains: 'Domains',
      eventId: 'EventId',
      eventName: 'EventName',
      eventNodeCount: 'EventNodeCount',
      eventSummary: 'EventSummary',
      evidenceRequestCount: 'EvidenceRequestCount',
      firstSeenAt: 'FirstSeenAt',
      handleStatus: 'HandleStatus',
      lastSeenAt: 'LastSeenAt',
      relatedEventIds: 'RelatedEventIds',
      reportMarkdown: 'ReportMarkdown',
      requestId: 'RequestId',
      resources: 'Resources',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackSources: { 'type': 'array', 'itemType': DescribeAiEngineEventResponseBodyAttackSources },
      bypassRequestCount: 'number',
      domains: { 'type': 'array', 'itemType': 'string' },
      eventId: 'string',
      eventName: 'string',
      eventNodeCount: 'number',
      eventSummary: 'string',
      evidenceRequestCount: 'number',
      firstSeenAt: 'number',
      handleStatus: 'string',
      lastSeenAt: 'number',
      relatedEventIds: 'string',
      reportMarkdown: 'string',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': 'string' },
      riskLevel: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attackSources)) {
      $dara.Model.validateArray(this.attackSources);
    }
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

