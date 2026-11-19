// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EventMatchRule } from "./EventMatchRule";


/**
 */
export class CreateEventRuleRequestEndpoint extends $dara.Model {
  /**
   * @remarks
   * The ARN of the role for cross-account delivery. This parameter is required when EndpointType is set to queue and EndpointValue is set to the ARN of a cross-account queue, which means the account that owns the queue is different from the current account. Format: acs:ram::<UID of the account that owns the queue>:role/<Role name>. The role must be created by the account that owns the queue. The trust policy must allow the delivery account to assume the role, and the role must be granted permissions to send messages to the destination queue.
   * 
   * @example
   * acs:ram:1234567890:role/CrossAccountQueueRole
   */
  endpointRoleName?: string;
  /**
   * @remarks
   * The endpoint type. Valid values:
   * 
   * - **topic**: Topic type. Topics support delivery to multiple subscription endpoints. You can add or remove subscription endpoints later.
   * - **queue**: Queue type. Messages are delivered directly to the queue. This reduces the routing path, but you cannot add new subscription endpoints later.
   * 
   * @example
   * topic
   */
  endpointType?: string;
  /**
   * @remarks
   * The actual value of the endpoint. If EndpointType is set to topic, this parameter specifies the topic name. If EndpointType is set to queue, this parameter specifies the queue name.
   * 
   * @example
   * test-topic
   */
  endpointValue?: string;
  static names(): { [key: string]: string } {
    return {
      endpointRoleName: 'EndpointRoleName',
      endpointType: 'EndpointType',
      endpointValue: 'EndpointValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointRoleName: 'string',
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
   * **[Deprecated]** This field is deprecated. Use Endpoint.EndpointType instead.
   * 
   * @example
   * http
   */
  endpointType?: string;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated. Use Endpoint.EndpointValue instead.
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
   * The client token that is used to ensure the idempotence of the request. You can generate a value for this parameter on the client side and ensure that the value is unique across different requests.
   * 
   * @example
   * 06273500-249F-5863-121D-74D51123****
   */
  clientToken?: string;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated.
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
   * **[Deprecated]** This field is deprecated. Use the Endpoint parameter instead.
   */
  endpoints?: CreateEventRuleRequestEndpoints[];
  /**
   * @remarks
   * The list of event types. Valid values depend on the selected cloud service. For example, if OSS is selected, common values include ObjectCreated:PutObject and ObjectRemoved:DeleteObject. For more information, see the event notification documentation for each cloud service.
   * 
   * This parameter is required.
   */
  eventTypes?: string[];
  /**
   * @remarks
   * The list of matching rules. A maximum of 10 rules can be specified at the outer level. The rules are connected by the OR operator.
   * 
   * This parameter is required.
   */
  matchRules?: EventMatchRule[][];
  /**
   * @remarks
   * The name of the cloud service for event notification. Currently, only OSS is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * oss
   */
  productName?: string;
  /**
   * @remarks
   * The name of the event notification rule. This parameter is required.
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

