// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayCircuitBreakerRuleResponseBodyData } from "./ListGatewayCircuitBreakerRuleResponseBodyData";


export class ListGatewayCircuitBreakerRuleResponseBody extends $dara.Model {
  data?: ListGatewayCircuitBreakerRuleResponseBodyData;
  /**
   * @example
   * DC34E4A3-5F1C-4E40-86EA-02EDF967****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListGatewayCircuitBreakerRuleResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

