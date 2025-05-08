// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayFlowRuleResponseBodyData } from "./ListGatewayFlowRuleResponseBodyData";


export class ListGatewayFlowRuleResponseBody extends $dara.Model {
  data?: ListGatewayFlowRuleResponseBodyData;
  /**
   * @example
   * 0951EBF0-798E-5E0B-8D38-460A14AD****
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
      data: ListGatewayFlowRuleResponseBodyData,
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

