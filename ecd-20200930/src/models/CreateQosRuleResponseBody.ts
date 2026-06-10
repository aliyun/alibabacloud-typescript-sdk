// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateQosRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the created QoS rule.
   * 
   * @example
   * qos-5605u0gelk200****
   */
  qosRuleId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 51592A88-0F2C-55E6-AD2C-2AD9C10D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qosRuleId: 'QosRuleId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosRuleId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

