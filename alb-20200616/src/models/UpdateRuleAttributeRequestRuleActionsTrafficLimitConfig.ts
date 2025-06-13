// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRuleAttributeRequestRuleActionsTrafficLimitConfig extends $dara.Model {
  /**
   * @remarks
   * The number of requests per IP address. Value range: **1 to 1,000,000**.
   * 
   * >  If both the **QPS** and **PerIpQps** parameters are specified, make sure that the value of the **QPS** parameter is smaller than the value of the PerIpQps parameter.
   * 
   * @example
   * 80
   */
  perIpQps?: number;
  /**
   * @remarks
   * The number of queries per second (QPS). Value range: **1 to 1,000,000**.
   * 
   * @example
   * 100
   */
  QPS?: number;
  static names(): { [key: string]: string } {
    return {
      perIpQps: 'PerIpQps',
      QPS: 'QPS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      perIpQps: 'number',
      QPS: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

