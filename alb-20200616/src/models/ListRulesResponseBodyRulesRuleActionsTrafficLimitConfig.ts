// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRulesResponseBodyRulesRuleActionsTrafficLimitConfig extends $dara.Model {
  /**
   * @remarks
   * The number of requests per IP address. Valid values: **1 to 100000**.
   * 
   * >  If both the **QPS** and **PerIpQps** parameters are specified, the value of the **QPS** parameter is smaller than the value of the PerIpQps parameter.
   * 
   * @example
   * 80
   */
  perIpQps?: number;
  /**
   * @remarks
   * The number of queries per second (QPS). Valid values: **1** to **100000**.
   * 
   * @example
   * 4
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

