// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTargetsRequest extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the event rule.
   * 
   * @example
   * acs:fc:cn-hangzhou:118609547428****:services/fc-connector.a1/functions/event
   */
  arn?: string;
  /**
   * @remarks
   * The name of the event bus.
   * 
   * @example
   * my-event-bus
   */
  eventBusName?: string;
  /**
   * @remarks
   * The maximum number of returned entries in a call.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * If you configure Limit and excess return values exist, this parameter is returned.
   * 
   * @example
   * 0
   */
  nextToken?: string;
  /**
   * @remarks
   * The name of the event rule.
   * 
   * @example
   * tf-testacc-rule
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
      eventBusName: 'EventBusName',
      limit: 'Limit',
      nextToken: 'NextToken',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      eventBusName: 'string',
      limit: 'number',
      nextToken: 'string',
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

