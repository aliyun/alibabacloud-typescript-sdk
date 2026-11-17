// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAiEngineEventsResponseBodyItemsAttackSourcesSources extends $dara.Model {
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
   * The value of the attack source. If the attack source type is IP address (**Type** is set to **ip**), the value is an IP address.
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

export class DescribeAiEngineEventsResponseBodyItemsAttackSources extends $dara.Model {
  /**
   * @remarks
   * The list of attack sources of this type.
   */
  sources?: DescribeAiEngineEventsResponseBodyItemsAttackSourcesSources[];
  /**
   * @remarks
   * The type of the attack source. Valid values:
   * 
   * - **ip**: IP address.
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
      sources: { 'type': 'array', 'itemType': DescribeAiEngineEventsResponseBodyItemsAttackSourcesSources },
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

export class DescribeAiEngineEventsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The list of attack source groups for the event.
   */
  attackSources?: DescribeAiEngineEventsResponseBodyItemsAttackSources[];
  /**
   * @remarks
   * The number of deduplicated evidence requests that are suspected to have bypassed protection in the event.
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
   * The ID of the event.
   * 
   * @example
   * EVT-20261025-109
   */
  eventId?: string;
  /**
   * @remarks
   * The name of the event in the selected language.
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
   * The number of deduplicated evidence requests for the event.
   * 
   * @example
   * 200
   */
  evidenceRequestCount?: number;
  /**
   * @remarks
   * The time when the event was first detected. The value is a UNIX timestamp in UTC. Unit: milliseconds.
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
   * The time when the event was last detected. The value is a UNIX timestamp in UTC. Unit: milliseconds.
   * 
   * @example
   * 1792973700000
   */
  lastSeenAt?: number;
  /**
   * @remarks
   * The IDs of related events. Multiple IDs are separated by commas (,).
   * 
   * @example
   * EVT-0bda6****6b5c174,EVT-0bda6****6b5c175
   */
  relatedEventIds?: string;
  /**
   * @remarks
   * The list of protected objects involved in the event.
   */
  resources?: string[];
  /**
   * @remarks
   * The current risk level. Valid values:
   * 
   * - **critical**: Critical.
   * 
   * - **high**: High.
   * 
   * - **medium**: Medium.
   * 
   * - **low**: Low.
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
      evidenceRequestCount: 'EvidenceRequestCount',
      firstSeenAt: 'FirstSeenAt',
      handleStatus: 'HandleStatus',
      lastSeenAt: 'LastSeenAt',
      relatedEventIds: 'RelatedEventIds',
      resources: 'Resources',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attackSources: { 'type': 'array', 'itemType': DescribeAiEngineEventsResponseBodyItemsAttackSources },
      bypassRequestCount: 'number',
      domains: { 'type': 'array', 'itemType': 'string' },
      eventId: 'string',
      eventName: 'string',
      eventNodeCount: 'number',
      evidenceRequestCount: 'number',
      firstSeenAt: 'number',
      handleStatus: 'string',
      lastSeenAt: 'number',
      relatedEventIds: 'string',
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

export class DescribeAiEngineEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of events.
   */
  items?: DescribeAiEngineEventsResponseBodyItems[];
  /**
   * @remarks
   * The number of entries to return per page in a paging query. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for querying the next page. If a next page exists, this field returns a value.
   * > If this parameter returns a value, a next page exists. You can use the returned **NextToken** as a request parameter to obtain the data on the next page. Repeat this operation until no value is returned, which indicates that all data is obtained.
   * 
   * @example
   * token-demo
   */
  nextToken?: string;
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
   * The total number of events that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeAiEngineEventsResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
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

