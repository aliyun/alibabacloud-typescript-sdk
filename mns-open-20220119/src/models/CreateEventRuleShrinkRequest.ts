// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventRuleShrinkRequest extends $dara.Model {
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
  endpointShrink?: string;
  /**
   * @remarks
   * This parameter is deprecated. Use Endpoint instead.
   */
  endpointsShrink?: string;
  /**
   * @remarks
   * A list of event types.
   * 
   * This parameter is required.
   */
  eventTypesShrink?: string;
  /**
   * @remarks
   * A list of matching rules. The logical relationship between the rules is OR.
   * 
   * This parameter is required.
   */
  matchRulesShrink?: string;
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

