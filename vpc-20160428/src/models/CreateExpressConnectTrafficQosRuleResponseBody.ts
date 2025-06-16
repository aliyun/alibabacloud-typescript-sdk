// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExpressConnectTrafficQosRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the QoS policy.
   * 
   * @example
   * qos-2giu0a6vd5x0mv4700
   */
  qosId?: string;
  /**
   * @remarks
   * The ID of the QoS queue.
   * 
   * @example
   * qos-queue-9nyx2u7n71s2rcy4n5
   */
  queueId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 606998F0-B94D-48FE-8316-ACA81BB230DA
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the QoS rule.
   * 
   * @example
   * qos-rule-iugg0l9x27f2nocouj
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      qosId: 'QosId',
      queueId: 'QueueId',
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosId: 'string',
      queueId: 'string',
      requestId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

