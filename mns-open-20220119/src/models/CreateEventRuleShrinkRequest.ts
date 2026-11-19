// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRuleShrinkRequest extends $dara.Model {
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
  endpointShrink?: string;
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated. Use the Endpoint parameter instead.
   */
  endpointsShrink?: string;
  /**
   * @remarks
   * The list of event types. Valid values depend on the selected cloud service. For example, if OSS is selected, common values include ObjectCreated:PutObject and ObjectRemoved:DeleteObject. For more information, see the event notification documentation for each cloud service.
   * 
   * This parameter is required.
   */
  eventTypesShrink?: string;
  /**
   * @remarks
   * The list of matching rules. A maximum of 10 rules can be specified at the outer level. The rules are connected by the OR operator.
   * 
   * This parameter is required.
   */
  matchRulesShrink?: string;
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
      endpointShrink: 'Endpoint',
      endpointsShrink: 'Endpoints',
      eventTypesShrink: 'EventTypes',
      matchRulesShrink: 'MatchRules',
      productName: 'ProductName',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deliveryMode: 'string',
      endpointShrink: 'string',
      endpointsShrink: 'string',
      eventTypesShrink: 'string',
      matchRulesShrink: 'string',
      productName: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

