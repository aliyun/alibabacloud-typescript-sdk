// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventMatchRule } from "./EventMatchRule";


/**
 */
export class CreateEventRuleRequestEndpoint extends $dara.Model {
  /**
   * @remarks
   * The endpoint type. Valid values:
   * 
   * - **topic**: The endpoint is a topic. A topic can deliver messages to multiple subscribers. You can add or remove subscribers later.
   * 
   * - **queue**: The endpoint is a queue. Messages are delivered directly to the queue. This simplifies the delivery path, but you cannot add new subscribers later.
   * 
   * @example
   * topic
   */
  endpointType?: string;
  /**
   * @remarks
   * The value of the endpoint.
   * 
   * @example
   * test-topic
   */
  endpointValue?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      endpointValue: 'EndpointValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      endpointValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventRuleRequestEndpoints extends $dara.Model {
  /**
   * @remarks
   * Deprecated. Use Endpoint.EndpointType instead.
   * 
   * @example
   * http
   */
  endpointType?: string;
  /**
   * @remarks
   * Deprecated. Use Endpoint.EndpointValue instead.
   * 
   * @example
   * test-xxx-queue
   */
  endpointValue?: string;
  static names(): { [key: string]: string } {
    return {
      endpointType: 'EndpointType',
      endpointValue: 'EndpointValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointType: 'string',
      endpointValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateEventRuleRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure the idempotence of the request.
   * 
   * Generate a unique value for this parameter from your client for each request.
   * 
   * @example
   * 06273500-249F-5863-121D-74D51123****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * --
   */
  deliveryMode?: string;
  /**
   * @remarks
   * The endpoint that receives messages for this subscription.
   */
  endpoint?: CreateEventRuleRequestEndpoint;
  /**
   * @remarks
   * This parameter is deprecated. Use Endpoint instead.
   */
  endpoints?: CreateEventRuleRequestEndpoints[];
  /**
   * @remarks
   * A list of event types.
   * 
   * This parameter is required.
   */
  eventTypes?: string[];
  /**
   * @remarks
   * A list of matching rules. The logical relationship between the rules is OR.
   * 
   * This parameter is required.
   */
  matchRules?: EventMatchRule[][];
  /**
   * @remarks
   * The name of the Alibaba Cloud product for which you want to receive event notifications.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  productName?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * This parameter is required.
   * 
   * @example
   * rule-xsXDW
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deliveryMode: 'DeliveryMode',
      endpoint: 'Endpoint',
      endpoints: 'Endpoints',
      eventTypes: 'EventTypes',
      matchRules: 'MatchRules',
      productName: 'ProductName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deliveryMode: 'string',
      endpoint: CreateEventRuleRequestEndpoint,
      endpoints: { 'type': 'array', 'itemType': CreateEventRuleRequestEndpoints },
      eventTypes: { 'type': 'array', 'itemType': 'string' },
      matchRules: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': EventMatchRule } },
      productName: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    if(this.endpoint && typeof (this.endpoint as any).validate === 'function') {
      (this.endpoint as any).validate();
    }
    if(Array.isArray(this.endpoints)) {
      $dara.Model.validateArray(this.endpoints);
    }
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    if(Array.isArray(this.matchRules)) {
      $dara.Model.validateArray(this.matchRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

